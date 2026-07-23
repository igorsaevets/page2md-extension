# Page2AI Use Cases and Adoption

This document tracks real-world use cases, adoption metrics, community feedback, and contribution to the US AI developer ecosystem. Updated regularly.

## Adoption metrics

Snapshot as of **2026-07-23** (Page2AI is 2 days old — metrics will grow as launch proceeds):

- **Chrome Web Store installs**: pending review
- **CWS rating**: N/A yet
- **GitHub stars**: 0
- **GitHub forks**: 0
- **npm dependents**: N/A (via LangChain-community loader when published)

## Users and applications

### AI development workflows

Page2AI is designed for developers building on the following US-based AI platforms:

- **Anthropic Claude** — extracting API docs, model reference pages, cookbook examples for context windows
- **OpenAI GPT** — preparing knowledge base content for Assistants API and RAG pipelines
- **Google Gemini** — feeding docs into Google AI Studio for grounding
- **Meta Llama** — preparing training / fine-tuning corpora from web sources
- **xAI Grok** — API doc extraction for Grok API integrations
- **Mistral / Cohere** — reference content preparation

### RAG pipeline ingestion

Page2AI Markdown output is designed as clean input for RAG pipelines built with:

- **LangChain** (planned: community document loader PR)
- **LlamaIndex** (planned: community loader)
- **Vercel AI SDK** (planned: recipe "Preparing RAG context with Page2AI")
- **OpenAI Agents SDK**
- **Anthropic MCP** (Model Context Protocol) — as a data source

### AI-native IDEs

Developers using **Cursor**, **Windsurf**, **GitHub Copilot**, **Zed**, and **Continue** use Page2AI to pull docs into chat contexts without leaving their editor.

### Personal knowledge management

**Obsidian**, **Notion**, **Logseq**, **Roam**, and **Reflect** users clip documentation and research papers.

## Citations

Page2AI has been cited or mentioned in:

_(To be populated as PRs are merged and community adoption grows.)_

Planned submissions:

- **Anthropic Cookbook** (github.com/anthropics/anthropic-cookbook) — recipe: "Preparing RAG context with Page2AI"
- **Vercel AI SDK Recipes** (ai-sdk.dev/resources/recipes) — recipe
- **LangChain-community** — document loader
- **`kmaasrud/awesome-obsidian`** — Browser extensions section
- **`spencerpauly/awesome-notion`** — Web Clipper section
- **`themeselection/best-chrome-extensions`** — Productivity section
- **`swiftsimplify/awesome-open-source-ai-tools`** — Tools section

## Community feedback

_(Testimonials from public GitHub issues, Reddit posts, HackerNews Show HN thread will be captured here as they arrive.)_

## Star history

<a href="https://star-history.com/#igorsaevets/page2ai-extension&Date">
  <img src="https://api.star-history.com/svg?repos=igorsaevets/page2ai-extension&type=Date" alt="Star History Chart">
</a>

## Zenodo archive

Page2AI will be archived on Zenodo for citable reference once v1.2.0 is tagged. DOI will be published here.

## Contribution to US AI developer ecosystem

Page2AI is an open-source (MIT) contribution to the US-anchored AI developer infrastructure. Concretely:

1. **Reduces friction** for US-based AI developers preparing context for LLMs — Anthropic Claude, OpenAI GPT, Google Gemini, Meta Llama, xAI Grok. Every reference doc, blog post, or research page becomes clean context in one hotkey.

2. **Built on US open standards**:
   - Chrome Extensions Manifest V3 (Google)
   - WXT framework (open source, distributed via npm — MIT)
   - CommonMark specification (widely-adopted Markdown)
   - JSON-LD (W3C standard for structured metadata)
   - `llms.txt` proposal (community standard for LLM-consumable content)

3. **Distributed via US-operated infrastructure**:
   - Chrome Web Store (Google) — extension discovery, install, and update
   - GitHub Releases (Microsoft) — source distribution, release automation
   - GitHub Actions — CI/CD pipeline

4. **Interoperates with US AI-native tools**:
   - Cursor IDE, GitHub Copilot, Windsurf, Zed
   - Vercel AI SDK, LangChain, LlamaIndex
   - Anthropic Claude Code, OpenAI Codex

5. **Contributes back** via merged PRs into cookbooks, documentation, and community awesome-lists (planned — see Citations section above).

The tool is designed for daily use by AI engineers at US-based companies and research institutions building the next generation of AI-augmented developer workflows. Every extraction — done locally, without transmitting user data — becomes structured input that improves LLM output quality and reduces the friction of preparing context for retrieval-augmented generation, agent workflows, and knowledge base construction.

---

_This document is updated after significant adoption milestones. For source code and technical architecture, see [`README.md`](../README.md). For privacy policy, see [`PRIVACY.md`](../PRIVACY.md)._
