const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const imagesDir = path.join(__dirname, '..', 'public', 'images');
const images = [
  'aorr-screenshot.png',
  'arise-screenshot.png',
  'bhavani-dashboard.png',
  'bhavani-inventory.png',
  'bhavani-orders-blurred.png',
  'bhavani-orders.png',
  'bhavani-storefront.png',
  'globus-screenshot.png',
  'hawksbill-screenshot.png',
  'phoenix-screenshot.png',
];

async function optimize() {
  console.log('Optimizing images to WebP with Sharp...');
  let totalBefore = 0;
  let totalAfter = 0;

  for (const imgName of images) {
    const inputPath = path.join(imagesDir, imgName);
    if (!fs.existsSync(inputPath)) continue;

    const baseName = path.basename(imgName, path.extname(imgName));
    const outputPath = path.join(imagesDir, `${baseName}.webp`);

    const beforeStats = fs.statSync(inputPath);
    totalBefore += beforeStats.size;

    await sharp(inputPath)
      .webp({ quality: 82, effort: 6 })
      .toFile(outputPath);

    const afterStats = fs.statSync(outputPath);
    totalAfter += afterStats.size;

    const savedPercent = (((beforeStats.size - afterStats.size) / beforeStats.size) * 100).toFixed(1);
    console.log(`✓ ${imgName}: ${(beforeStats.size / 1024).toFixed(1)} KB -> ${baseName}.webp: ${(afterStats.size / 1024).toFixed(1)} KB (-${savedPercent}%)`);
  }

  console.log(`\nTotal payload: ${(totalBefore / 1024).toFixed(1)} KB -> ${(totalAfter / 1024).toFixed(1)} KB`);
  console.log(`Total saved: ${((totalBefore - totalAfter) / 1024).toFixed(1)} KB (-${(((totalBefore - totalAfter) / totalBefore) * 100).toFixed(1)}%)`);
}

optimize().catch(err => {
  console.error('Error optimizing images:', err);
  process.exit(1);
});
