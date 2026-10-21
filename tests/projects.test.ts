import test from 'node:test';
import assert from 'node:assert/strict';
import {
  projects,
  getProjectBySlug,
  getAllProjectSlugs,
  getAdjacentProjects,
} from '../lib/projects';

test('Project data integrity', async (t) => {
  await t.test('All expected projects exist and have required slugs in order', () => {
    const canonicalSlugs = projects.map((p) => p.slug);
    assert.deepEqual(canonicalSlugs, [
      'erp-creative-studios',
      'xypher',
      'medical-response-verification',
      'talqs',
      'welding-defect-detection',
      'movie-review-system',
    ]);
    const staticSlugs = getAllProjectSlugs();
    assert.ok(staticSlugs.includes('verifiable-credentials'));
    assert.ok(staticSlugs.includes('erp-creative-studios'));
  });

  await t.test('Backward compatibility: verifiable-credentials maps to XYPHER', () => {
    const xypher = getProjectBySlug('xypher');
    const legacy = getProjectBySlug('verifiable-credentials');
    assert.ok(xypher, 'xypher project must exist');
    assert.ok(legacy, 'legacy verifiable-credentials must resolve');
    assert.equal(legacy?.slug, 'xypher');
    assert.match(legacy.title, /XYPHER/);
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

  await t.test('ERP project includes required architectural components', () => {
    const erp = getProjectBySlug('erp-creative-studios');
    assert.ok(erp, 'ERP project should exist');
    assert.match(erp.title, /Project Workspace.*ERP/i);
    assert.equal(erp.links?.demo, 'https://project-studio-erp.vercel.app/');
    assert.ok(erp.tags.primary.includes('Next.js 14'));
    assert.ok(erp.tags.primary.includes('Prisma'));
    assert.ok(erp.tags.primary.includes('TanStack Query'));
  });

  await t.test('XYPHER project includes required blockchain technologies and verified links', () => {
    const xypher = getProjectBySlug('xypher');
    assert.ok(xypher, 'XYPHER project should exist');
    assert.ok(xypher.tags.primary.includes('Polygon Amoy'));
    assert.ok(xypher.tags.primary.includes('Solidity'));
    assert.ok(xypher.tags.primary.includes('IPFS'));
    assert.equal(xypher.links?.demo, 'https://digi-cirtificate-verification.vercel.app/');
    assert.equal(xypher.links?.github, 'https://github.com/manoj1454/Digi-cirtificate-verification');
  });

  await t.test('Medical response verification project includes clinical disclaimer', () => {
    const medical = getProjectBySlug('medical-response-verification');
    assert.ok(medical, 'medical-response-verification project should exist');
    assert.ok(medical.disclaimer, 'medical project must include a disclaimer');
    assert.match(medical.disclaimer, /not certified medical advice|clinical judgment/i);
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

  await t.test('Adjacent project resolution cycles correctly across all 6 projects', () => {
    const first = getAdjacentProjects('erp-creative-studios');
    assert.equal(first.prev?.slug, 'movie-review-system');
    assert.equal(first.next?.slug, 'xypher');

    const second = getAdjacentProjects('xypher');
    assert.equal(second.prev?.slug, 'erp-creative-studios');
    assert.equal(second.next?.slug, 'medical-response-verification');

    const last = getAdjacentProjects('movie-review-system');
    assert.equal(last.prev?.slug, 'welding-defect-detection');
    assert.equal(last.next?.slug, 'erp-creative-studios');
  });

  await t.test('Querying non-existent slug returns undefined', () => {
    const nonExistent = getProjectBySlug('unverified-project-x');
    assert.equal(nonExistent, undefined);
  });
});
