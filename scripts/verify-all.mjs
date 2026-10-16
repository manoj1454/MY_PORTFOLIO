import puppeteer from 'puppeteer-core';
import path from 'path';

const BRAVE_PATH = '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser';
const OUT_DIR = '/Users/manoj/.gemini/antigravity-ide/brain/8329b01a-c4a8-4de5-b79f-3387fe25141f/scratch';

const VIEWPORTS = [
  { name: 'small_phone_320', width: 320, height: 700 },
  { name: 'typical_phone_360', width: 360, height: 800 },
  { name: 'modern_phone_390', width: 390, height: 844 },
  { name: 'large_phone_430', width: 430, height: 932 },
  { name: 'tablet_portrait_768', width: 768, height: 1024 },
  { name: 'tablet_landscape_1024', width: 1024, height: 768 },
  { name: 'desktop_1440', width: 1440, height: 900 },
];

async function run() {
  const browser = await puppeteer.launch({
    executablePath: BRAVE_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--enable-webgl']
  });

  const page = await browser.newPage();
  const results = {};

  for (const vp of VIEWPORTS) {
    console.log(`\n========================================`);
    console.log(`Testing viewport: ${vp.name} (${vp.width}x${vp.height})`);
    await page.setViewport({ width: vp.width, height: vp.height, deviceScaleFactor: 2 });
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle2', timeout: 30000 });
    await new Promise(r => setTimeout(r, 2000)); // allow iframe and 3D scene initialization

    // Check horizontal overflow
    const overflowCheck = await page.evaluate(() => {
      const docWidth = document.documentElement.scrollWidth;
      const bodyWidth = document.body.scrollWidth;
      const winWidth = window.innerWidth;
      const hasOverflow = docWidth > winWidth || bodyWidth > winWidth;
      
      const overflowingElements = [];
      if (hasOverflow) {
        document.querySelectorAll('*').forEach(el => {
          const rect = el.getBoundingClientRect();
          if (rect.right > winWidth + 1) {
            overflowingElements.push({
              tag: el.tagName,
              className: el.className,
              right: Math.round(rect.right),
              width: Math.round(rect.width)
            });
          }
        });
      }

      return {
        winWidth,
        docWidth,
        bodyWidth,
        hasOverflow,
        overflowCount: overflowingElements.length,
        overflowingElements: overflowingElements.slice(0, 5)
      };
    });

    console.log(`Overflow check for ${vp.name}:`, overflowCheck);

    // Check project order
    const projectOrder = await page.evaluate(() => {
      const titles = Array.from(document.querySelectorAll('h3')).map(h => h.textContent.trim());
      return titles.filter(t => 
        t.includes('Enterprise Resource Planning') || 
        t.includes('XYPHER') || 
        t.includes('Medical LLM') || 
        t.includes('TALQS') || 
        t.includes('Welding') || 
        t.includes('Movie')
      );
    });
    console.log(`Project order for ${vp.name}:`, projectOrder);

    // Save screenshot
    const shotPath = path.join(OUT_DIR, `final_${vp.name}_top.png`);
    await page.screenshot({ path: shotPath });
    console.log(`Saved screenshot to ${shotPath}`);

    results[vp.name] = {
      overflowCheck,
      projectOrder,
      passed: !overflowCheck.hasOverflow
    };
  }

  // Deep dive tests for 390px (Modern Phone)
  console.log(`\n========================================`);
  console.log(`Performing Deep Dive tests on modern_phone_390`);
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 2000));

  // 1. Mobile Menu test
  console.log(`Testing Mobile Menu on 390px...`);
  const menuTest = await page.evaluate(async () => {
    const hamburger = document.querySelector('button[aria-controls="mobile-navigation-menu"]');
    if (!hamburger) return { error: 'Hamburger not found' };
    
    const beforeExpanded = hamburger.getAttribute('aria-expanded');
    
    // Click hamburger to open
    hamburger.click();
    await new Promise(r => setTimeout(r, 400));
    
    const drawer = document.getElementById('mobile-navigation-menu');
    const isDrawerOpen = drawer?.classList.toString().includes('drawerOpen');
    
    // Click work link
    const workLink = drawer?.querySelector('a[href="#work"]');
    const hasWorkLink = !!workLink;
    if (workLink) workLink.click();
    await new Promise(r => setTimeout(r, 400));
    
    const afterExpanded = hamburger.getAttribute('aria-expanded');
    const isDrawerClosedAfterClick = !drawer?.classList.toString().includes('drawerOpen');
    
    return {
      beforeExpanded,
      isDrawerOpen,
      hasWorkLink,
      afterExpanded,
      isDrawerClosedAfterClick
    };
  });
  console.log('Mobile menu test result:', menuTest);

  // Take screenshot with menu open
  await page.evaluate(() => {
    const hamburger = document.querySelector('button[aria-controls="mobile-navigation-menu"]');
    if (hamburger && hamburger.getAttribute('aria-expanded') !== 'true') hamburger.click();
  });
  await new Promise(r => setTimeout(r, 300));
  await page.screenshot({ path: path.join(OUT_DIR, 'final_390_menu_open.png') });
  
  // Close menu
  await page.evaluate(() => {
    const closeBtn = document.querySelector('button[aria-label="Close navigation menu"]');
    if (closeBtn) closeBtn.click();
  });
  await new Promise(r => setTimeout(r, 300));

  // 2. Play Tour test on 390px
  console.log(`Testing Guided Play Tour on 390px...`);
  const initialScrollY = await page.evaluate(() => window.scrollY);
  
  // Trigger tour by finding iframe button or dispatching message
  await page.evaluate(() => {
    const iframe = document.querySelector('iframe');
    if (iframe && iframe.contentWindow) {
      iframe.contentWindow.postMessage({ type: 'PORTFOLIO_START_TOUR' }, '*');
    } else {
      window.postMessage({ type: 'PORTFOLIO_START_TOUR' }, '*');
    }
  });

  // Wait 2.5s and check scroll position
  await new Promise(r => setTimeout(r, 2500));
  const scrolledY_2s = await page.evaluate(() => window.scrollY);
  console.log(`Tour scrolled from ${initialScrollY} to ${scrolledY_2s}`);

  // Test cancellation via wheel/touch event
  await page.evaluate(() => {
    window.dispatchEvent(new WheelEvent('wheel', { deltaY: 10 }));
  });
  await new Promise(r => setTimeout(r, 600));
  const cancelledY = await page.evaluate(() => window.scrollY);
  await new Promise(r => setTimeout(r, 600));
  const postCancelY = await page.evaluate(() => window.scrollY);
  const tourCancelled = Math.abs(postCancelY - cancelledY) < 10;
  console.log(`Tour cancelled verification: cancelled at ${cancelledY}, post-wait at ${postCancelY}. Cancelled successfully: ${tourCancelled}`);

  // Capture final screenshots of each section on 390px
  console.log(`Capturing key sections on 390px...`);
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: path.join(OUT_DIR, 'final_390_hero.png') });

  // Scroll to cards inside hero
  await page.evaluate(() => {
    window.scrollTo(0, 750);
  });
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: path.join(OUT_DIR, 'final_390_cards.png') });

  // Scroll to project 1
  await page.evaluate(() => {
    const el = document.getElementById('work');
    if (el) el.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: path.join(OUT_DIR, 'final_390_project1.png') });

  // Scroll to project 2 (check order: paperCard above instrument)
  await page.evaluate(() => {
    const h3s = Array.from(document.querySelectorAll('h3'));
    const p2 = h3s.find(h => h.textContent.includes('Medical LLM'));
    if (p2) p2.closest('article')?.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: path.join(OUT_DIR, 'final_390_project2.png') });

  // Scroll to About section
  await page.evaluate(() => {
    const el = document.getElementById('about');
    if (el) el.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: path.join(OUT_DIR, 'final_390_about.png') });

  // Scroll to Contact
  await page.evaluate(() => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: path.join(OUT_DIR, 'final_390_contact.png') });

  await browser.close();

  console.log(`\n========================================`);
  console.log('ALL VERIFICATION COMPLETE');
  console.log(JSON.stringify(results, null, 2));
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
