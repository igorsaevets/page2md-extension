// Generates GitHub social preview image 1280x640 (Open Graph card).
// Uploaded to Settings -> Social preview to override default GitHub OG image.
// Design: left panel (logo + name + tagline + badges), right panel (before/after split).

import puppeteer from 'puppeteer-core';
import sharp from 'sharp';
import { readFile, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

const CHROME_PATH = process.env.CHROME_PATH ??
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const iconBuf = await readFile(resolve(root, 'public/icon/128.png'));
const iconDataUrl = `data:image/png;base64,${iconBuf.toString('base64')}`;

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<style>
  html, body { margin: 0; padding: 0; }
  body {
    width: 1280px; height: 640px; overflow: hidden;
    background: #0d1117;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Inter", "Helvetica Neue", Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #e6edf3;
  }
  .wrap {
    display: flex; height: 640px; width: 1280px;
  }
  .left {
    flex: 0 0 540px;
    padding: 60px 40px 60px 60px;
    display: flex; flex-direction: column; justify-content: center;
    background: linear-gradient(135deg, #1e1b4b 0%, #312e81 100%);
    position: relative;
  }
  .logo-row {
    display: flex; align-items: center; gap: 20px; margin-bottom: 32px;
  }
  .logo {
    width: 96px; height: 96px;
    filter: drop-shadow(0 6px 20px rgba(79, 70, 229, 0.5));
  }
  .brand {
    font-size: 68px; font-weight: 800; letter-spacing: -0.03em;
    color: #ffffff;
  }
  .tagline {
    font-size: 30px; font-weight: 500; line-height: 1.25;
    color: #e0e7ff; margin-bottom: 28px;
  }
  .tagline strong {
    color: #a5b4fc; font-weight: 700;
  }
  .badges {
    display: flex; flex-wrap: wrap; gap: 10px;
  }
  .badge {
    background: rgba(255,255,255,0.08);
    border: 1px solid rgba(255,255,255,0.14);
    color: #ffffff; font-size: 14px; font-weight: 600;
    padding: 8px 14px; border-radius: 6px; letter-spacing: 0.02em;
  }
  .right {
    flex: 1 1 auto;
    padding: 50px 60px 50px 40px;
    display: flex; flex-direction: column; justify-content: center;
    gap: 24px;
    position: relative;
  }
  .label {
    font-size: 13px; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase;
    color: #7d8590; margin-bottom: 10px;
  }
  .code-block {
    background: #161b22; border: 1px solid #30363d;
    border-radius: 8px; padding: 18px 22px;
    font-family: "SF Mono", "Cascadia Code", "Fira Code", "Consolas", monospace;
    font-size: 14px; line-height: 1.55;
    overflow: hidden;
  }
  .before {
    color: #8b949e; opacity: 0.85;
    max-height: 200px;
  }
  .before .tag { color: #7ee787; }
  .before .attr { color: #ff7b72; }
  .before .txt { color: #79c0ff; }
  .after {
    color: #e6edf3;
    max-height: 240px;
  }
  .after .yaml-line { color: #d2a8ff; }
  .after .yaml-key { color: #ff7b72; }
  .after .yaml-val { color: #a5d6ff; }
  .after .h { color: #ffa657; font-weight: 700; }
  .after .code { color: #7ee787; }
  .after .comment { color: #8b949e; }
  .arrow-viz {
    position: absolute; top: 50%; left: -20px;
    transform: translateY(-50%);
    color: #4f46e5; font-size: 40px; font-weight: 700;
    background: #0d1117; padding: 8px; border-radius: 50%;
    width: 40px; height: 40px; display: flex; align-items: center; justify-content: center;
    border: 2px solid #4f46e5;
  }
</style>
</head>
<body>
  <div class="wrap">
    <div class="left">
      <div class="logo-row">
        <img class="logo" src="${iconDataUrl}" alt="Page2AI">
        <div class="brand">Page2AI</div>
      </div>
      <div class="tagline">
        Any webpage <strong>→</strong> clean,<br>
        <strong>LLM-ready Markdown</strong>
      </div>
      <div class="badges">
        <span class="badge">Free</span>
        <span class="badge">Open Source</span>
        <span class="badge">100% Local</span>
        <span class="badge">MIT</span>
        <span class="badge">MV3</span>
      </div>
    </div>
    <div class="right">
      <div>
        <div class="label">RAW HTML MESS</div>
        <div class="code-block before">&lt;<span class="tag">div</span> <span class="attr">class</span>=<span class="txt">"jsx-8f2a…"</span>&gt;<br>
&nbsp;&nbsp;&lt;<span class="tag">nav</span>&gt;...&lt;/<span class="tag">nav</span>&gt;<br>
&nbsp;&nbsp;&lt;<span class="tag">CodeGroup</span>&gt;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class="tag">Tabs</span> <span class="attr">defaultValue</span>=<span class="txt">"python"</span>&gt;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class="tag">TabItem</span>&gt;<span class="txt">hidden</span>&lt;/<span class="tag">TabItem</span>&gt;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span class="tag">Tabs</span>&gt;<br>
&nbsp;&nbsp;&lt;/<span class="tag">CodeGroup</span>&gt;
        </div>
      </div>
      <div>
        <div class="label">CLEAN LLM-READY MARKDOWN</div>
        <div class="code-block after">
<span class="yaml-line">---</span><br>
<span class="yaml-key">title:</span> <span class="yaml-val">Extended Thinking - Anthropic</span><br>
<span class="yaml-key">source:</span> <span class="yaml-val">docs.anthropic.com</span><br>
<span class="yaml-key">og_type:</span> <span class="yaml-val">article</span><br>
<span class="yaml-line">---</span><br>
<br>
<span class="h"># Extended thinking</span><br>
<br>
<span class="comment">## Python</span><br>
<span class="code">\`\`\`python</span><br>
<span class="code">response = client.messages.create(...)</span><br>
<span class="code">\`\`\`</span>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;

const browser = await puppeteer.launch({
  executablePath: CHROME_PATH,
  headless: true,
  args: ['--no-sandbox', '--font-render-hinting=none'],
});
try {
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 640, deviceScaleFactor: 2 });
  await page.setContent(html, { waitUntil: 'load' });
  await page.evaluateHandle('document.fonts.ready');
  const outFinal = resolve(root, 'assets/store/social-preview-1280x640.png');
  await mkdir(dirname(outFinal), { recursive: true });
  // Snap at 2x (2560x1280), then downsize to spec 1280x640 for antialiased typography.
  const buf2x = await page.screenshot({ omitBackground: false, type: 'png' });
  await sharp(buf2x)
    .resize(1280, 640, { fit: 'fill' })
    .png({ compressionLevel: 9 })
    .toFile(outFinal);
  console.log(`ok ${outFinal.replace(root, '.')} (spec 1280x640)`);
} finally {
  await browser.close();
}
