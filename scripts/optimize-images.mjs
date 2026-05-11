import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import path from 'path';

const PUBLIC = './public';
const exts = ['.png', '.jpg', '.jpeg'];

// Mapping: alte GUID-Namen → sprechende Namen
const renameMap = {
  '8BE048EC-7F69-4DD4-AE4D-DED0A9A0415B.png': 'portfolio-galabau-eifler.webp',
  'B2B192DF-AD56-4E4D-9F09-EE894CE91BB8.png': 'portfolio-demir-speedconnect.webp',
  'D650852E-6EFC-477A-B33C-4F179CFB35FA.png': 'portfolio-saray-saarlouis.webp',
  'EE60E06D-A52C-4532-93C0-85429C27E880.png': 'portfolio-porto-cervo-saarlouis.webp',
  '504F6B03-A916-4EF1-ADA7-0E8843E99BE6.png': 'portfolio-salif-gebaeudeservice.webp',
  'DA23B12F-8917-4CE3-933F-DC15AD6D43C2.png': 'portfolio-taskey-app.webp',
  '69A2D4F6-C40F-447B-B10C-5C8633E4CD0D.png': 'logo-fylu.webp',
  'heroba.png': 'hero-background.webp',
  'sectioba.png': 'section-background.webp',
};

const files = (await readdir(PUBLIC)).filter((f) =>
  exts.includes(path.extname(f).toLowerCase())
);

for (const f of files) {
  const inp = path.join(PUBLIC, f);
  const outName =
    renameMap[f] || path.basename(f, path.extname(f)).toLowerCase() + '.webp';
  const out = path.join(PUBLIC, outName);

  const before = (await stat(inp)).size;

  await sharp(inp)
    .resize({ width: 1600, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(out);

  const after = (await stat(out)).size;
  const pct = ((1 - after / before) * 100).toFixed(1);

  console.log(
    `✓ ${f} (${(before / 1024).toFixed(0)} KB) → ${outName} (${(
      after / 1024
    ).toFixed(0)} KB, −${pct}%)`
  );
}

console.log('\nFertig. Alte Dateien NICHT automatisch gelöscht – manuell prüfen.');
