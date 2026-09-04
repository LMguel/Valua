const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1080, height: 1350 } });
  const filePath = 'file:///' + path.resolve(__dirname, 'post.html').replace(/\\/g, '/');
  await page.goto(filePath);

  const names = ['apresentacao', 'construcao-residencial', 'piscina', 'revitalizacao-fachada', 'manutencao-predial', 'demolicao'];
  const slides = await page.$$('.slide');
  for (let i = 0; i < slides.length; i++) {
    const num = String(i + 1).padStart(2, '0');
    const outPath = path.resolve(__dirname, `post-${num}-${names[i]}.png`);
    await slides[i].screenshot({ path: outPath });
    console.log('saved', outPath);
  }

  await browser.close();
})();
