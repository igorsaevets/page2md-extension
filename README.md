<div align="center">

<img src="public/icon/128.png" width="96" height="96" alt="Page2AI">

# Page2AI

**Convert any webpage to clean, LLM-ready Markdown in one click.**

Chrome extension for Claude, ChatGPT, Cursor, Obsidian, and RAG pipelines. 100% local. Open source. MIT.

[![Chrome Web Store](https://img.shields.io/chrome-web-store/v/dlpaaijcnbbmlfeohlphjpnbbcnomnno?logo=googlechrome&logoColor=white&label=Chrome%20Web%20Store)](https://chromewebstore.google.com/detail/dlpaaijcnbbmlfeohlphjpnbbcnomnno)
[![Users](https://img.shields.io/chrome-web-store/users/dlpaaijcnbbmlfeohlphjpnbbcnomnno?logo=googlechrome&logoColor=white&label=Users)](https://chromewebstore.google.com/detail/dlpaaijcnbbmlfeohlphjpnbbcnomnno)
[![License MIT](https://img.shields.io/badge/License-MIT-4f46e5.svg)](LICENSE)
[![Build](https://github.com/igorsaevets/page2ai-extension/actions/workflows/build.yml/badge.svg)](https://github.com/igorsaevets/page2ai-extension/actions/workflows/build.yml)
[![GitHub stars](https://img.shields.io/github/stars/igorsaevets/page2ai-extension?style=social)](https://github.com/igorsaevets/page2ai-extension/stargazers)

<br>

<a href="https://chromewebstore.google.com/detail/dlpaaijcnbbmlfeohlphjpnbbcnomnno">
  <img src="https://storage.googleapis.com/web-dev-uploads/image/WlD8wC6g8khYWPJUsQceQkhXSlv1/HRs9MPufa1J1h5glNhut.png" height="60" alt="Install from Chrome Web Store">
</a>

<br><br>

<!-- Demo GIF coming soon: showing Alt+Shift+M on docs.anthropic.com → clean Markdown pasted into Claude -->
<sub>Demo GIF recording in progress — check back soon</sub>

</div>

---

## Works with

Compatible with every major LLM and AI development tool built for the modern AI stack:

- **LLMs**: Anthropic Claude · OpenAI GPT · Google Gemini · Meta Llama · xAI Grok · Mistral · Cohere
- **AI-native IDEs**: Cursor · GitHub Copilot · Windsurf · Zed · Continue
- **Knowledge tools**: Obsidian · Notion · Logseq · Roam · Reflect
- **Frameworks**: LangChain · LlamaIndex · Vercel AI SDK · OpenAI Agents SDK · Anthropic MCP · Haystack

Any tool that reads Markdown — which is essentially every LLM built for developers.

## Why Page2AI

Modern AI platforms — Anthropic Claude, OpenAI GPT, Google Gemini, Meta Llama, Cursor — work best with clean, structured Markdown context. Most documentation sites render dynamically, hide code samples behind tabs (Python vs TypeScript vs cURL), and clutter output with navigation, tracking scripts, and marketing widgets.

Page2AI captures the actual content — including hidden tabs — and outputs LLM-ready Markdown with rich metadata frontmatter. Reduces friction for developers building RAG pipelines, AI workflows, and knowledge bases.

## Install

### Chrome Web Store (recommended)

[**Install Page2AI from the Chrome Web Store**](https://chromewebstore.google.com/detail/dlpaaijcnbbmlfeohlphjpnbbcnomnno) — one click, then hit `Alt+Shift+M` on any page.

Works in **Chrome, Edge, Brave, Arc, Vivaldi**, and any Chromium-based browser.

### Load unpacked (developers / early adopters)

```powershell
git clone https://github.com/igorsaevets/page2ai-extension.git
cd page2ai-extension
npm install
npm run build

# chrome://extensions -> Developer mode -> Load unpacked -> select .output\chrome-mv3\
```

## Usage

1. Open any webpage — documentation, blog post, research paper, product page.
2. Hit **`Alt+Shift+M`** (or click the toolbar icon).
3. Click **Extract** — or leave the profile on **Auto** (recommended).
4. Markdown lands in your clipboard automatically. Paste into Claude, ChatGPT, Cursor, or your RAG pipeline.

Live progress log shows in the popup. Cached results survive popup close (badge shows ✓ when ready).

## What makes Page2AI different

Feature-by-feature comparison of what Page2AI handles that other extensions miss:

| Capability | Page2AI | Web2MD | Obsidian Web Clipper | MarkSnip | SingleFile |
|---|:---:|:---:|:---:|:---:|:---:|
| **Free & open source** | ✅ MIT | ❌ $9/mo Pro | ✅ | ✅ | ✅ |
| **Hidden-tab code capture** (Python + TS + cURL) | ✅ | ⚠️ Reddit/X only | ❌ | ❌ | N/A |
| **Auto site-profile detection** | ✅ 5 profiles | ⚠️ per-site rules | ❌ | ❌ | N/A |
| **MDX / JSX components** (Mintlify, Docusaurus, Starlight, Shiki, Nextra) | ✅ | ❌ | ❌ | ❌ | N/A |
| **Rich frontmatter** (OG, Twitter, JSON-LD, article:*) | ✅ | ❌ | ⚠️ Obsidian-only | ❌ | N/A |
| **Table colspan handling** | ✅ | ❌ | ❌ | ❌ | N/A |
| **Recursive blockquotes** (bold, links, nested) | ✅ | ❌ | ⚠️ partial | ❌ | N/A |
| **Quality gate + auto-fallback** | ✅ | ❌ | ❌ | ❌ | N/A |
| **`llms.txt` short-path** | ✅ | ❌ | ❌ | ❌ | N/A |
| **100% local, zero telemetry** | ✅ | ❌ | ✅ | ✅ | ✅ |
| **Minimum permissions** (no `<all_urls>`) | ✅ | ❌ | ❌ | ❌ | ❌ |

## Features

- **Profile-aware extraction.** Auto-detects the site kind (docs, marketing, research, dashboard, WordPress marketing) and tunes the strategy per profile.
- **Hidden-tab code capture.** DOM-position-aware capture of tabbed panels (Python vs TypeScript vs cURL) with dedup — you get the code from every tab, not just the active one.
- **MDX / JSX post-processing.** Turns Mintlify components (`<Note>`, `<CodeGroup>`, `<Tabs>`, `<AccordionGroup>`), Docusaurus admonitions, Starlight cards, Shiki-highlighted blocks into clean Markdown.
- **`llms.txt` discovery.** If the site publishes an official `.md` alongside the page, Page2AI uses it directly (short path, best fidelity).
- **Quality gate.** Counts `<pre>` blocks vs plain-text baseline to catch under-extraction, then falls back to permissive rendering automatically.
- **Rich frontmatter YAML.** Every extraction ships with OpenGraph, Twitter Card, JSON-LD Article, `article:published`/`modified`/`author`, canonical URL. RAG pipelines reading only frontmatter get the full context.
- **Table colspan handling.** Merged header cells expand into proper Markdown table structure.
- **Recursive blockquote rendering.** Bold, links, code, nested blockquotes inside `> ...` are preserved.
- **Structured-data appendix.** JSON-LD, OpenGraph, Microdata, framework internal state (Next.js `__NEXT_DATA__`, Nuxt, Remix) hoisted into a machine-readable appendix.
- **PII masking (opt-in).** Emails, phones, SSN-like patterns replaceable with placeholders.
- **One hotkey.** `Alt+Shift+M` opens the popup; Enter runs extraction.
- **Cached-result recovery.** Close the popup mid-extraction, reopen it, the result is waiting.

## Privacy

**Page2AI does not send data anywhere.**

- No analytics, no telemetry, no crash reports.
- No cloud service. No account. No sign-in.
- Nothing is stored beyond your local preferences (`chrome.storage.local`).
- Nothing is shared cross-site or cross-tab beyond the tab you clicked on.

The extension only reads the page you explicitly acted on (`activeTab` gesture). Full details: [PRIVACY.md](PRIVACY.md).

## Permissions

| Permission | Why |
|---|---|
| `activeTab` | Access the currently active tab **only** after you click the toolbar icon or hit `Alt+Shift+M`. Not persistent, not blanket. |
| `scripting` | Programmatically inject the extraction script into that tab. |
| `clipboardWrite` | Copy the generated Markdown to your clipboard. |
| `storage` | Persist your profile preference and last-used options locally. |

**No `host_permissions`. No `<all_urls>`. No `tabs` API.** Chrome will not warn you that the extension can "read all your data on all sites", because it can't.

## Ecosystem

Page2AI is built on and interoperates with open technical standards from the US AI developer ecosystem:

- **Chrome Extensions Manifest V3** (Google) — modern extension model, deprecating MV2's persistent background pages.
- **[WXT framework](https://wxt.dev)** (open source, MIT) — the WebExtension framework that ships this extension cross-browser.
- **CommonMark / GitHub Flavored Markdown** — the lingua franca of LLM context windows.
- **JSON-LD** (W3C standard) — surfaced in the frontmatter for schema-aware RAG pipelines.
- **[`llms.txt` proposal](https://llmstxt.org)** — respected as a short-path when the site publishes one.
- **Chrome Web Store** (Google) — distribution channel with automated review, users, and update infrastructure.
- **GitHub** (Microsoft) — code hosting, CI/CD via GitHub Actions, release automation.

Downstream consumers of Page2AI Markdown include the frontier US-based AI platforms — Anthropic Claude, OpenAI GPT, Google Gemini, Meta Llama, xAI Grok — as well as AI-native developer tools like Cursor, GitHub Copilot, Windsurf, Vercel AI SDK, LangChain, and LlamaIndex.

See [docs/USE_CASES.md](docs/USE_CASES.md) for real-world adoption examples and metrics.

## Architecture

```
popup (drives UX)
   ↓ chrome.runtime.sendMessage
background service worker (thin)
   ↓ chrome.scripting.executeScript
extractor.js (isolated world, on-demand)
   ↓ chrome.runtime.sendMessage → background → storage.session → popup
result: markdown + quality report
```

- **`lib/core/`** — pure extraction library, 13 modules, ~4,300 lines of strict TypeScript. Ported from a battle-tested DevTools console script (Rev-032v2) after 32 revisions of field iteration.
- **`entrypoints/background.ts`** — thin service worker; injects the extractor and caches the result to `storage.session` keyed by tab id (badge shows ✓ when ready).
- **`entrypoints/extractor.ts`** — unlisted script; runs in the tab's isolated world; sends progress + result via `runtime.sendMessage`.
- **`entrypoints/popup/`** — vanilla TypeScript + CSS, no framework. Profile selector, progress log with 300-entry ring buffer, auto-clipboard, download, cached-result recovery.

Built with [WXT](https://wxt.dev), Manifest V3, TypeScript strict.

## Contributing

Bug reports, site profile reports, and PRs welcome. See [CONTRIBUTING.md](CONTRIBUTING.md).

Development:

```powershell
npm run dev          # WXT dev server + HMR
npm run build        # Production build -> .output\chrome-mv3\
npm run compile      # tsc --noEmit type check
npm run icons        # Regenerate PNG icons from SVG sources
```

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for release notes. Latest: **v1.2.0** (July 2026) — table colspan support, recursive blockquotes, extraction performance improvements.

## Credits

Built by [Igor Saevets](https://github.com/igorsaevets), AI Expert and Entrepreneur.

Prototype: `Sequential AI Markdown Exporter Rev-032v2` — 2,024 lines of DevTools console script, 32 revisions of field iteration, ported to a proper extension in July 2026.

## License

MIT — see [LICENSE](LICENSE). Copyright © 2026 Igor Saevets.
