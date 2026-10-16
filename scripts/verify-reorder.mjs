import puppeteer from 'puppeteer-core';
import path from 'path';

const BRAVE_PATH = '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser';
const SCRATCH_DIR = '/Users/manoj/.gemini/antigravity-ide/brain/d6bbe9d0-4e35-4025-9b2c-41a7cae01d90/scratch';

async function main() {
  console.log('🚀 Running Selected Work Reorder Verification...');
  const browser = await puppeteer.launch({
    executablePath: BRAVE_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-web-security', '--enable-webgl'],
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900, isMobile: false, deviceScaleFactor: 1 });
    await page.goto('http://localhost:3000', { waitUntil: 'domcontentloaded', timeout: 30000 });
    await new Promise((r) => setTimeout(r, 2000));

    // Scroll to #work
    await page.evaluate(() => {
      const el = document.getElementById('work');
      if (el) el.scrollIntoView();
    });
    await new Promise((r) => setTimeout(r, 1000));

    // Extract project order from rendered Selected Work section
    const renderedProjects = await page.evaluate(() => {
      const articles = Array.from(document.querySelectorAll('#work article'));
      return articles.map((art, idx) => {
        const titleEl = art.querySelector('h3');
        const indexEl = art.querySelector('span[class*="paperIndex"]');
        const badgeEl = art.querySelector('span[class*="StatusBadge"], span[class*="statusBadgeDev"]');
        const linkEl = titleEl ? titleEl.querySelector('a') : null;
        const links = Array.from(art.querySelectorAll('a')).map((a) => ({
          text: a.textContent?.trim(),
          href: a.getAttribute('href'),
        }));

        return {
          position: idx + 1,
          title: titleEl ? titleEl.textContent?.trim() : '',
          indexTag: indexEl ? indexEl.textContent?.trim() : '',
          statusBadge: badgeEl ? badgeEl.textContent?.trim() : '',
          projectHref: linkEl ? linkEl.getAttribute('href') : '',
          links,
        };
      });
    });

    console.log('\n📋 Rendered Projects in Selected Work Section:');
    renderedProjects.forEach((p) => {
      console.log(`  ${p.position}. [${p.indexTag}] ${p.title} (${p.statusBadge}) -> ${p.projectHref}`);
    });

    // Verification assertions
    console.log('\n🔍 Verifying Requirements:');
    if (renderedProjects.length !== 6) {
      throw new Error(`Expected exactly 6 projects, got ${renderedProjects.length}`);
    }
    console.log('  ✅ Exactly 6 projects rendered in Selected Work');

    const expectedOrder = [
      'erp-creative-studios',
      'xypher',
      'medical-response-verification',
      'talqs',
      'welding-defect-detection',
      'movie-review-system',
    ];

    expectedOrder.forEach((slug, idx) => {
      const p = renderedProjects[idx];
      if (!p.projectHref.includes(slug)) {
        throw new Error(`Position ${idx + 1} expected ${slug}, but found ${p.projectHref}`);
      }
      console.log(`  ✅ Position ${idx + 1} matches: ${slug}`);
    });

    if (!renderedProjects[5].projectHref.includes('movie-review-system')) {
      throw new Error('Movie Review System is not last!');
    }
    console.log('  ✅ Movie Review System is confirmed last in Position 6');

    // Capture screenshots of the reordered Selected Work section
    await page.screenshot({ path: path.join(SCRATCH_DIR, 'reorder_work_section.png') });
    console.log('  ✅ Captured scratch/reorder_work_section.png');

    // Check project detail navigation cycle
    console.log('\n🧭 Verifying Project Detail Navigation Cycle...');
    await page.goto('http://localhost:3000/projects/erp-creative-studios', { waitUntil: 'domcontentloaded' });
    await new Promise((r) => setTimeout(r, 1000));

    const erpNav = await page.evaluate(() => {
      const cards = Array.from(document.querySelectorAll('a[class*="adjacentCard"]'));
      return {
        prev: cards[0] ? cards[0].getAttribute('href') : null,
        next: cards[1] ? cards[1].getAttribute('href') : null,
      };
    });
    console.log('  From ERP Creative Studios:', erpNav);
    if (!erpNav.prev?.includes('movie-review-system') || !erpNav.next?.includes('xypher')) {
      throw new Error(`Unexpected adjacent links for ERP: ${JSON.stringify(erpNav)}`);
    }
    console.log('  ✅ Adjacent links for Position 1 (ERP) correctly point to Movie Review (prev) and XYPHER (next)');

    await page.goto('http://localhost:3000/projects/movie-review-system', { waitUntil: 'domcontentloaded' });
    await new Promise((r) => setTimeout(r, 1000));

    const movieNav = await page.evaluate(() => {
      const cards = Array.from(document.querySelectorAll('a[class*="adjacentCard"]'));
      return {
        prev: cards[0] ? cards[0].getAttribute('href') : null,
        next: cards[1] ? cards[1].getAttribute('href') : null,
      };
    });
    console.log('  From Movie Review System:', movieNav);
    if (!movieNav.prev?.includes('welding-defect-detection') || !movieNav.next?.includes('erp-creative-studios')) {
      throw new Error(`Unexpected adjacent links for Movie Review System: ${JSON.stringify(movieNav)}`);
    }
    console.log('  ✅ Adjacent links for Position 6 (Movie Review) correctly point to Welding (prev) and ERP (next)');

    // Backward compatibility test
    await page.goto('http://localhost:3000/projects/verifiable-credentials', { waitUntil: 'domcontentloaded' });
    const legacyTitle = await page.$eval('h1', (el) => el.textContent);
    console.log('  From legacy URL /projects/verifiable-credentials title:', legacyTitle);
    if (!legacyTitle.includes('XYPHER')) {
      throw new Error('Legacy route did not render XYPHER!');
    }
    console.log('  ✅ Backward-compatible URL /projects/verifiable-credentials successfully renders XYPHER');

    // Verify mobile layout
    console.log('\n📱 Verifying Mobile Viewport (390x844)...');
    await page.setViewport({ width: 390, height: 844, isMobile: true, deviceScaleFactor: 2 });
    await page.goto('http://localhost:3000#work', { waitUntil: 'domcontentloaded' });
    await new Promise((r) => setTimeout(r, 1500));
    await page.screenshot({ path: path.join(SCRATCH_DIR, 'reorder_work_mobile.png') });
    console.log('  ✅ Captured scratch/reorder_work_mobile.png');

    console.log('\n🎉 ALL REORDERING REQUIREMENTS FULLY VERIFIED!');
  } catch (err) {
    console.error('❌ Verification failed:', err);
    process.exit(1);
  } finally {
    await browser.close();
  }
}

main();
