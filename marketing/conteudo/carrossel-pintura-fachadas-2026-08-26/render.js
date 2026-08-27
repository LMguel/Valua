const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1080, height: 1350 } });
  const filePath = 'file:///' + path.resolve(__dirname, 'carrossel.html').replace(/\\/g, '/');
  await page.goto(filePath);

  const slides = await page.$$('.slide');
  for (let i = 0; i < slides.length; i++) {
    const num = String(i + 1).padStart(2, '0');
    const outPath = path.resolve(__dirname, '..', '..', 'instagram', 'pintura-fachadas', `slide-${num}.png`);
    await slides[i].screenshot({ path: outPath });
    console.log('saved', outPath);
  }

  await browser.close();
})();
