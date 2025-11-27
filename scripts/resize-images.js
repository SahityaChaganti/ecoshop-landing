// scripts/resize-images.js
// Run: node scripts/resize-images.js
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const srcDir = path.join(__dirname, "../assets-src"); // put originals here
const outDir = path.join(__dirname, "../public/images");

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const images = fs.readdirSync(srcDir).filter((f) => /\.(jpe?g|png)$/i.test(f));

// sizes to produce
const sizes = [320, 640, 1024];

(async () => {
  for (const file of images) {
    const base = path.parse(file).name;
    const input = path.join(srcDir, file);
    for (const w of sizes) {
      const outWebp = path.join(outDir, `${base}-${w}.webp`);
      await sharp(input)
        .resize({ width: w })
        .webp({ quality: 80 })
        .toFile(outWebp);
    }
    // avif for 640
    const outAvif = path.join(outDir, `${base}-640.avif`);
    await sharp(input)
      .resize({ width: 640 })
      .avif({ quality: 60 })
      .toFile(outAvif);

    // small placeholder (blurred tiny jpeg)
    const placeholder = path.join(outDir, `${base}-placeholder.jpg`);
    await sharp(input)
      .resize({ width: 20 })
      .blur()
      .jpeg({ quality: 30 })
      .toFile(placeholder);

    console.log(`Generated images for ${file}`);
  }
  console.log("Done.");
})();
