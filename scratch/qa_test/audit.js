const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  // Set viewport
  await page.setViewport({ width: 1280, height: 800 });

  // Store console messages
  const consoleLogs = [];
  page.on('console', msg => {
      consoleLogs.push(`[${msg.type()}] ${msg.text()}`);
  });

  // Navigate to live URL
  const url = 'https://store.chtuition.com.au/selective-math-pack';
  try {
      await page.goto(url, { waitUntil: 'networkidle2' });
  } catch (error) {
      consoleLogs.push(`[error] Navigation failed: ${error.message}`);
  }

  // Take full page screenshot
  const screenshotPath = path.join(__dirname, 'audit_screenshot.png');
  await page.screenshot({ path: screenshotPath, fullPage: true });

  // Save logs
  const logPath = path.join(__dirname, 'audit_console.log');
  fs.writeFileSync(logPath, consoleLogs.join('\n'), 'utf8');

  // Audit Meta Pixel Script
  const hasMetaPixel = await page.evaluate(() => {
      const scripts = Array.from(document.querySelectorAll('script'));
      return scripts.some(s => s.textContent.includes('fbq('));
  });

  const hasEventTracking = await page.evaluate(() => {
      const scripts = Array.from(document.querySelectorAll('script'));
      return scripts.some(s => s.textContent.includes('fbq(\\'track\\', \\'Purchase\\')') || s.textContent.includes('fbq(\\'track\\', \\'AddToCart\\')'));
  });

  // Extract Checkout / Anchor Links
  const links = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('a')).map(a => a.href).filter(href => href.includes('stripe') || href.includes('checkout') || href.startsWith('#'));
  });

  const reportPath = path.join(__dirname, 'audit_report.json');
  fs.writeFileSync(reportPath, JSON.stringify({
      hasMetaPixel,
      hasEventTracking,
      links
  }, null, 2));

  await browser.close();
})();
