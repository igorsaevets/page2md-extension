import sharp from 'sharp';
import { readFile, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

const mainSvg = await readFile(resolve(root, 'assets/icon.svg'));
const smallSvg = await readFile(resolve(root, 'assets/icon-small.svg'));

const OUT_DIR = resolve(root, 'public/icon');
const STORE_DIR = resolve(root, 'assets/store');
await mkdir(OUT_DIR, { recursive: true });
await mkdir(STORE_DIR, { recursive: true });

const targets = [
  { size: 16, svg: smallSvg, out: resolve(OUT_DIR, '16.png') },
  { size: 32, svg: smallSvg, out: resolve(OUT_DIR, '32.png') },
  { size: 48, svg: mainSvg, out: resolve(OUT_DIR, '48.png') },
  { size: 96, svg: mainSvg, out: resolve(OUT_DIR, '96.png') },
  { size: 128, svg: mainSvg, out: resolve(OUT_DIR, '128.png') },
  { size: 128, svg: mainSvg, out: resolve(STORE_DIR, 'icon-128.png') },
];

for (const { size, svg, out } of targets) {
  const density = Math.max(96, size * 8);
  await sharp(svg, { density })
    .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ compressionLevel: 9 })
    .toFile(out);
  console.log(`ok ${size}x${size}  density=${density}  ${out.replace(root, '.')}`);
}

console.log('done: 6 icons generated.');
