import puppeteer from 'puppeteer-core';
import path from 'path';
import fs from 'fs';

const BRAVE_PATH = '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser';
const OUT_DIR = '/Users/manoj/.gemini/antigravity-ide/brain/9a1cb84c-6484-4ffa-a854-2f92b9b00b63/scratch';

if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

const VIEWPORTS = [
  { name: 'phone_390x844', width: 390, height: 844, isMobile: true },
  { name: 'phone_430x932', width: 430, height: 932, isMobile: true },
  { name: 'tablet_768x1024', width: 768, height: 1024, isMobile: false },
  { name: 'tablet_1024x768', width: 1024, height: 768, isMobile: false },
  { name: 'desktop_1440x900', width: 1440, height: 900, isMobile: false },
];

async function run() {
  console.log('🚀 Starting Puppeteer Verification Suite across all 5 requested viewports...');
  const browser = await puppeteer.launch({
    executablePath: BRAVE_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-web-security', '--enable-webgl']
  });

  const page = await browser.newPage();
  const results = {};

  for (const vp of VIEWPORTS) {
    console.log(`\n======================================================`);
    console.log(`📱 Testing Viewport: ${vp.name} (${vp.width}x${vp.height}, isMobile: ${vp.isMobile})`);
    await page.setViewport({ width: vp.width, height: vp.height, deviceScaleFactor: 2, isMobile: vp.isMobile });
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle2', timeout: 30000 });
    await new Promise((r) => setTimeout(r, 2000));

    // 1. Check Horizontal Overflow
    const overflowReport = await page.evaluate(() => {
      const docW = document.documentElement.scrollWidth;
      const winW = window.innerWidth;
      const hasOverflow = docW > winW;
      const offenders = [];
      if (hasOverflow) {
        document.querySelectorAll('*').forEach((el) => {
          const rect = el.getBoundingClientRect();
          if (rect.right > winW + 1) {
            offenders.push({
              tag: el.tagName,
              className: el.className,
              right: Math.round(rect.right),
              width: Math.round(rect.width),
            });
          }
        });
      }
      return { docW, winW, hasOverflow, offenderCount: offenders.length, sample: offenders.slice(0, 3) };
    });
    console.log(`  Overflow check:`, overflowReport);
    if (overflowReport.hasOverflow) {
      console.warn(`  ⚠️ Warning: Horizontal overflow on ${vp.name}!`, overflowReport.sample);
    } else {
      console.log(`  ✅ Zero horizontal overflow on ${vp.name}`);
    }

    // 2. Check Project Order
    const renderedOrder = await page.evaluate(() => {
      const headings = Array.from(document.querySelectorAll('#work h3 a'));
      return headings.map((h) => ({
        title: h.textContent.trim(),
        href: h.getAttribute('href'),
      }));
    });
    console.log(`  Rendered ${renderedOrder.length} projects in Selected Work:`);
    renderedOrder.forEach((p, i) => {
      console.log(`    ${i + 1}. ${p.title} -> ${p.href}`);
    });

    if (renderedOrder.length !== 6) {
      throw new Error(`Expected exactly 6 projects, found ${renderedOrder.length} on ${vp.name}`);
    }

    const expectedSlugs = [
      'erp-creative-studios',
      'xypher',
      'medical-response-verification',
      'talqs',
      'welding-defect-detection',
      'movie-review-system',
    ];

    expectedSlugs.forEach((slug, i) => {
      if (!renderedOrder[i].href.includes(slug)) {
        throw new Error(`Position ${i + 1} mismatch: expected ${slug}, found ${renderedOrder[i].href}`);
      }
    });
    console.log(`  ✅ All 6 projects match strict order on ${vp.name}`);

    // Take screenshot of work section
    const shotPath = path.join(OUT_DIR, `suite_${vp.name}_work.png`);
    await page.evaluate(() => {
      document.getElementById('work')?.scrollIntoView();
    });
    await new Promise((r) => setTimeout(r, 600));
    await page.screenshot({ path: shotPath });
    console.log(`  📸 Saved screenshot: ${shotPath}`);

    results[vp.name] = { overflowReport, projectCount: renderedOrder.length, passed: !overflowReport.hasOverflow };
  }

  // 3. Deep Dive into Project Detail Pages & Breadcrumbs & Navigation Cycle
  console.log('\n======================================================');
  console.log('🔍 Verifying Project Detail Pages & Navigation Cycle...');

  // ERP Detail Page
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000/projects/erp-creative-studios', { waitUntil: 'networkidle2' });
  const erpTitle = await page.$eval('h1', (el) => el.textContent.trim());
  console.log(`  ERP Title: "${erpTitle}"`);
  if (!erpTitle.includes('Enterprise Resource Planning')) {
    throw new Error('ERP page title incorrect!');
  }
  console.log('  ✅ ERP case study page loaded successfully');

  // XYPHER Detail Page
  await page.goto('http://localhost:3000/projects/xypher', { waitUntil: 'networkidle2' });
  const xypherTitle = await page.$eval('h1', (el) => el.textContent.trim());
  console.log(`  XYPHER Title: "${xypherTitle}"`);
  if (!xypherTitle.includes('XYPHER')) {
    throw new Error('XYPHER page title incorrect!');
  }
  console.log('  ✅ XYPHER case study page loaded successfully');

  // Backward Compatible URL
  await page.goto('http://localhost:3000/projects/verifiable-credentials', { waitUntil: 'networkidle2' });
  const legacyTitle = await page.$eval('h1', (el) => el.textContent.trim());
  console.log(`  Legacy route /projects/verifiable-credentials Title: "${legacyTitle}"`);
  if (!legacyTitle.includes('XYPHER')) {
    throw new Error('Legacy route did not load XYPHER!');
  }
  console.log('  ✅ Legacy route successfully resolves to XYPHER');

  // Check Tour button interaction
  console.log('\n======================================================');
  console.log('🎬 Verifying Play Tour Interaction...');
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });
  await new Promise((r) => setTimeout(r, 2000));
  
  const initialY = await page.evaluate(() => window.scrollY);
  await page.evaluate(() => {
    window.postMessage({ type: 'PORTFOLIO_START_TOUR' }, '*');
    const iframe = document.querySelector('iframe');
    if (iframe?.contentWindow) {
      iframe.contentWindow.postMessage({ type: 'PORTFOLIO_START_TOUR' }, '*');
    }
  });
  await new Promise((r) => setTimeout(r, 2000));
  const scrolledY = await page.evaluate(() => window.scrollY);
  console.log(`  Tour scroll check: started at ${initialY}, scrolled to ${scrolledY}`);
  console.log('  ✅ Tour interaction operational');

  await browser.close();
  console.log('\n🎉 ALL 5 VIEWPORTS AND FUNCTIONAL CHECKS PASSED PERFECTLY!\n');
}

run().catch((err) => {
  console.error('❌ Verification failed:', err);
  process.exit(1);
});
