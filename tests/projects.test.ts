import test from 'node:test';
import assert from 'node:assert/strict';
import {
  projects,
  getProjectBySlug,
  getAllProjectSlugs,
  getAdjacentProjects,
} from '../lib/projects';

test('Project data integrity', async (t) => {
  await t.test('All expected projects exist and have required slugs', () => {
    const slugs = getAllProjectSlugs();
    assert.deepEqual(slugs, ['talqs', 'welding-defect-detection', 'movie-review-system']);
  });

  await t.test('Each project has all required technical sections populated', () => {
    for (const project of projects) {
      assert.ok(project.slug, 'Project must have a slug');
      assert.ok(project.title, `Project ${project.slug} must have a title`);
      assert.ok(project.shortDescription, `Project ${project.slug} must have a short description`);
      assert.ok(project.overview, `Project ${project.slug} must have an overview`);
      assert.ok(project.tags.primary.length > 0, `Project ${project.slug} must have primary tags`);

      // Verify sections
      const sections = project.sections;
      assert.ok(sections.problem.content.length > 0, `${project.slug} must have problem content`);
      assert.ok(sections.approach.content.length > 0, `${project.slug} must have approach content`);
      assert.ok(sections.architecture.content.length > 0, `${project.slug} must have architecture content`);
      assert.ok(sections.decisions.content.length > 0, `${project.slug} must have decisions content`);
      assert.ok(sections.limitations.content.length > 0, `${project.slug} must have limitations content`);
      assert.ok(sections.lessons.content.length > 0, `${project.slug} must have lessons content`);
    }
  });

  await t.test('TALQS project includes mandatory legal disclaimer', () => {
    const talqs = getProjectBySlug('talqs');
    assert.ok(talqs, 'talqs project should exist');
    assert.ok(talqs.disclaimer, 'talqs must include a disclaimer');
    assert.match(talqs.disclaimer, /not a substitute for consultation with a qualified legal professional/i);
  });

  await t.test('Welding defect detection project includes safety disclaimer', () => {
    const welding = getProjectBySlug('welding-defect-detection');
    assert.ok(welding, 'welding project should exist');
    assert.ok(welding.disclaimer, 'welding must include a disclaimer');
    assert.match(welding.disclaimer, /not certified for industrial safety inspection/i);
  });

  await t.test('Adjacent project resolution cycles correctly', () => {
    const first = getAdjacentProjects('talqs');
    assert.equal(first.prev?.slug, 'movie-review-system');
    assert.equal(first.next?.slug, 'welding-defect-detection');

    const last = getAdjacentProjects('movie-review-system');
    assert.equal(last.prev?.slug, 'welding-defect-detection');
    assert.equal(last.next?.slug, 'talqs');
  });

  await t.test('Querying non-existent slug returns undefined', () => {
    const nonExistent = getProjectBySlug('unverified-project-x');
    assert.equal(nonExistent, undefined);
  });
});
