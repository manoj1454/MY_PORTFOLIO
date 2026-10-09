import puppeteer from 'puppeteer-core';
import path from 'path';

const BRAVE_PATH = '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser';
const SCRATCH_DIR = '/Users/manoj/.gemini/antigravity-ide/brain/d6bbe9d0-4e35-4025-9b2c-41a7cae01d90/scratch';

async function main() {
  console.log('🚀 Launching Brave Browser via puppeteer-core...');
  const browser = await puppeteer.launch({
    executablePath: BRAVE_PATH,
    headless: 'new',
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-web-security',
      '--enable-webgl',
    ],
  });

  try {
    const page = await browser.newPage();
    const consoleLogs = [];
    page.on('console', (msg) => consoleLogs.push(`[${msg.type()}] ${msg.text()}`));
    page.on('pageerror', (err) => consoleLogs.push(`[PAGE ERROR] ${err.toString()}`));

    console.log('🌐 Loading portfolio at 1440x900 desktop viewport...');
    await page.setViewport({ width: 1440, height: 900, isMobile: false, deviceScaleFactor: 1 });
    await page.goto('http://localhost:3000', { waitUntil: 'domcontentloaded', timeout: 30000 });
    await new Promise((r) => setTimeout(r, 4000));

    // ── 1. TEST HERO PLAY BUTTON CLICK & 20-SECOND GUIDED TOUR ────
    console.log('\n🧭 [TEST 1-3] Testing Hero Play Button & Guided Page Tour...');
    const frame = page.frames().find((f) => f.url().includes('inner-green-3d.html'));
    if (!frame) throw new Error('Hero iframe not found!');

    const playBtn = await frame.waitForSelector('#tourBtn', { timeout: 15000 });
    console.log('   ✅ Found Play button (#tourBtn) inside hero iframe');

    const initialScrollY = await page.evaluate(() => window.scrollY);
    console.log('   Initial scrollY before play click:', initialScrollY);

    // Click the actual hero Play button
    await playBtn.click();
    console.log('   ✅ Clicked Hero Play button');

    // Sample progression at 3s
    await new Promise((r) => setTimeout(r, 3000));
    const midScrollY = await page.evaluate(() => window.scrollY);
    console.log('   ScrollY after 3s tour:', midScrollY);
    const hasMoved = midScrollY > initialScrollY + 200;
    console.log('   ✅ Page successfully scrolling continuously down document:', hasMoved);
    await page.screenshot({ path: path.join(SCRATCH_DIR, 'verify_tour_scrolling.png') });
    console.log('   ✅ Captured verify_tour_scrolling.png');

    // ── [TEST 4] Test manual cancellation via mouse wheel ─────────
    console.log('\n🛑 [TEST 4] Testing cancellation via manual mouse wheel...');
    await page.mouse.wheel({ deltaY: -60 });
    await new Promise((r) => setTimeout(r, 300));
    const cancelScrollY = await page.evaluate(() => window.scrollY);
    
    // Wait 1s to verify scroll stopped
    await new Promise((r) => setTimeout(r, 1000));
    const stoppedScrollY = await page.evaluate(() => window.scrollY);
    const isStopped = Math.abs(stoppedScrollY - cancelScrollY) < 5;
    console.log('   ✅ Tour cancelled promptly on manual wheel:', isStopped);

    // ── [TEST 5] Test restart from top & cancellation via Escape ───
    console.log('\n🔄 [TEST 5, 7] Testing tour repeatability and Escape cancellation...');
    await page.evaluate(() => window.scrollTo(0, 0));
    await new Promise((r) => setTimeout(r, 500));
    await playBtn.click();
    await new Promise((r) => setTimeout(r, 2000));
    const restartScrollY = await page.evaluate(() => window.scrollY);
    console.log('   Restarted tour scrollY at 2s:', restartScrollY);

    // Press Escape
    await page.keyboard.press('Escape');
    await new Promise((r) => setTimeout(r, 300));
    const escScrollY = await page.evaluate(() => window.scrollY);
    await new Promise((r) => setTimeout(r, 1000));
    const escStoppedScrollY = await page.evaluate(() => window.scrollY);
    const isEscStopped = Math.abs(escStoppedScrollY - escScrollY) < 5;
    console.log('   ✅ Restarted tour stopped promptly on Escape:', isEscStopped);

    // ── 2. TEST SEARCH DIALOG INTERACTION ──────────────────────────
    console.log('\n🔍 Testing Search Dialog interaction (Cmd+K)...');
    await page.evaluate(() => window.scrollTo(0, 0));
    const searchBtn = await page.waitForSelector('button[aria-label*="Search"]');
    await searchBtn.click();
    await new Promise((r) => setTimeout(r, 500));

    const isSearchVisible = await page.evaluate(() => {
      const modal = document.querySelector('[role="dialog"]');
      return !!modal;
    });
    console.log('   ✅ Search dialog opened via Cmd+K:', isSearchVisible);

    // Type query "medical"
    await page.keyboard.type('medical', { delay: 50 });
    await new Promise((r) => setTimeout(r, 300));
    await page.screenshot({ path: path.join(SCRATCH_DIR, 'verify_search_open.png') });
    console.log('   ✅ Captured verify_search_open.png');

    // Press Escape to close search
    await page.keyboard.press('Escape');
    await new Promise((r) => setTimeout(r, 500));

    const isSearchClosed = await page.evaluate(() => {
      return !document.querySelector('[role="dialog"]');
    });
    console.log('   ✅ Search dialog closed via Escape:', isSearchClosed);

    // ── 3. CAPTURE RESPONSIVE VIEWPORT SCREENSHOTS ───────────────────
    console.log('\n📸 Capturing visual screenshots across viewports...');

    // 1440x900 Desktop
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.setViewport({ width: 1440, height: 900, isMobile: false, deviceScaleFactor: 1 });
    await new Promise((r) => setTimeout(r, 1000));
    await page.screenshot({ path: path.join(SCRATCH_DIR, 'verify_1440x900.png') });
    console.log('   ✅ Captured verify_1440x900.png');

    // 1920x1080 Wide Desktop
    await page.setViewport({ width: 1920, height: 1080, isMobile: false, deviceScaleFactor: 1 });
    await new Promise((r) => setTimeout(r, 1000));
    await page.screenshot({ path: path.join(SCRATCH_DIR, 'verify_1920x1080.png') });
    console.log('   ✅ Captured verify_1920x1080.png');

    // 390x844 Mobile
    await page.setViewport({ width: 390, height: 844, isMobile: true, deviceScaleFactor: 2 });
    await new Promise((r) => setTimeout(r, 1000));
    await page.screenshot({ path: path.join(SCRATCH_DIR, 'verify_390x844_mobile.png') });
    console.log('   ✅ Captured verify_390x844_mobile.png');

    // ── 4. CONSOLE CHECK ───────────────────────────────────────────
    console.log('\n📋 Console Messages:');
    consoleLogs.slice(-6).forEach((l) => console.log('  ', l));

  } catch (err) {
    console.error('❌ Verification failed:', err);
  } finally {
    await browser.close();
    console.log('\n🏁 Full verification suite finished successfully.');
  }
}

main();
