<!-- evergreen:intro:start -->
![HyphenBox · HyphenTech](screenshots/readme-hero.svg)

# HyphenBox · Free AI API discovery, model verification and unified routing

**Find suitable AI APIs, test them with your own credentials, and connect them to your coding tools.**

HyphenBox is a desktop API management application by HyphenTech. It combines a resource radar, a local credential vault, model verification and a unified local endpoint. Use it to compare free API conditions, manage providers and connect OpenCode, Cursor, Cline or compatible clients. Resource cards include official evidence and review dates; availability is determined by real requests from your own account.

The application is free to download and requires no HyphenBox account. Apply for your own provider accounts and credentials. Some providers require international network access; regional, identity, payment and quota conditions are set by each provider.

<p align="center"><a href="README.md">简体中文</a> | <a href="README.zh-TW.md">繁體中文</a> | <a href="README.en.md">English</a></p>

<p align="center"><a href="https://github.com/HackerChi-Hub/hyphenbox-release/releases/latest"><img alt="Download" src="https://img.shields.io/badge/Download-18181b?style=for-the-badge&amp;logo=github" /></a> <a href="https://hyphentech.top"><img alt="Website" src="https://img.shields.io/badge/Website-334155?style=for-the-badge" /></a></p>
<!-- evergreen:intro:end -->

<!-- recent-features:start -->
## Recent features and improvements (5 items)

- **1.0.0** · Corrected official free-tier conditions; candidates without a verified request from your own account do not enter the free pool.
- **0.4.70** · Sponsorship prompts remain passive and do not gate application features.
- **0.4.70** · Large-number displays no longer append an unnecessary .0.
- **0.4.69** · Updated the bundled catalog and restored daily signed catalog publishing.
- **0.4.69** · The health endpoint now reports the active catalog version immediately.
<!-- recent-features:end -->

<!-- evergreen:demos:start -->
## ▶ Watch a practical demo

**Bilibili: saving keys, OpenCode configuration and an MCP test. YouTube: full introduction**

| Bilibili | YouTube |
| :---: | :---: |
| [![Watch on Bilibili](https://img.shields.io/badge/Bilibili-00a1d6?style=for-the-badge&logo=bilibili&logoColor=white)](https://www.bilibili.com/video/BV1Hutu6KEoW/) | [![Watch on YouTube](https://img.shields.io/badge/YouTube-ff0033?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/watch?v=EQlq59rqQ0I) |

These videos show the versions available when recorded. Use the current release information on this page for downloads and capabilities. Narration is in Chinese.
<!-- evergreen:demos:end -->

**Current stable release: 1.0.0** · [Release notes](https://github.com/HackerChi-Hub/hyphenbox-release/releases/tag/v1.0.0)

## Download and install

The [latest release](https://github.com/HackerChi-Hub/hyphenbox-release/releases/latest) always points to the current official packages. Only actually uploaded installers appear below.

| System | Installer | Requirements |
|---|---|---|
| macOS | [Universal DMG](https://github.com/HackerChi-Hub/hyphenbox-release/releases/download/v1.0.0/HyphenBox_1.0.0_universal.dmg) | macOS 13+, Apple Silicon / Intel |
| Windows | [EXE installer](https://github.com/HackerChi-Hub/hyphenbox-release/releases/download/v1.0.0/HyphenBox_1.0.0_x64-setup.exe) | Windows 10 / 11, x64 |
| Windows | [MSI](https://github.com/HackerChi-Hub/hyphenbox-release/releases/download/v1.0.0/HyphenBox_1.0.0_x64_en-US.msi) | Windows 10 / 11, x64 |
| Linux | [AppImage](https://github.com/HackerChi-Hub/hyphenbox-release/releases/download/v1.0.0/HyphenBox_1.0.0_amd64.AppImage) | x64 desktop Linux; system keyring / Secret Service required |
| Linux | [deb](https://github.com/HackerChi-Hub/hyphenbox-release/releases/download/v1.0.0/HyphenBox_1.0.0_amd64.deb) | x64 desktop Linux; system keyring / Secret Service required |
| Linux | [rpm](https://github.com/HackerChi-Hub/hyphenbox-release/releases/download/v1.0.0/HyphenBox-1.0.0-1.x86_64.rpm) | x64 desktop Linux; system keyring / Secret Service required |

![HyphenBox dashboard, Chinese application UI](screenshots/dashboard.png)

Screenshots were captured on 2026-10-04 from the actual macOS 1.0.0 stable release. Provider, model and usage counts describe that captured session, not quantities guaranteed to every user. Resource cards and unverified candidates are not successful local tests. Documentation translations do not imply a translated application UI.

<!-- evergreen:capabilities:start -->
## What HyphenBox does

| Feature | Capability |
| --- | --- |
| Free API radar | Search resources by free tier type, quota and application conditions; inspect endpoints, models, risks, official evidence and review dates; distinguish information cards from unverified candidates |
| Credential vault | Store your own officially obtained credentials in the system credential store; masked display and multiple keys |
| Model verification | Fetch models with your credentials, select free candidates and send small real requests; verify chat and embedding models with their respective endpoints |
| Cost and capability labels | Separate fully free, limited free quota, balance deductions, unknown prices and paid usage; unknown prices do not automatically qualify as free |
| Local routing | Listen only on `127.0.0.1`; provide a compatible endpoint, multiple-key attempts, rate-limit cooldown and failover |
| Client setup | Back up, write and undo OpenCode configuration; provide copyable settings and instructions for Cursor, Cline and compatible SDKs |
| Diagnostics | Inspect local requests, token usage, output budgets and finish reasons to distinguish truncation, rate limits and upstream errors |
| Independent catalog updates | Verify the controlled catalog's signatures, version and file hashes before applying resource updates without reinstalling the app |

### Discover resources, then test your own account

Free tiers, one-time trials, temporary promotions and self-hosted open-source models have different conditions. Check the official provider page and your own account entitlements. A model appearing on a card does not prove that your key can call it.

![Free API radar: cards, candidates and review dates](screenshots/free-api.png)

### Verify models and route by capability

Model lists come from your credentials; local verification determines usable routes. Add free candidates in batches, test them, re-test or disable individual routes. Embeddings use embedding endpoints. Audio, image, video and reranking capabilities are not all automatically verified and are not inserted into the chat model pool.

![Model routes and real-request verification](screenshots/routes.png)

### Connect a client

Use `http://127.0.0.1:17688/v1` and HyphenBox's local unified token instead of entering every upstream key in the client. OpenCode configuration can be written and undone; other clients use the in-app instructions. Agent-facing model lists exclude routes tested as lacking tool calling.

![Client setup and actual connectivity check](screenshots/connect.png)

### Choose free or auto

- `free`: try only routes that meet known free conditions, pass verification and suit the request. Daily, per-minute and account limits still apply; unlimited calls are not guaranteed.
- `auto`: choose by capabilities, request size, cost information and cooldowns. **It may use paid routes you have added.** Select `free` if you only want the eligible free pool.
- An explicit model: select a particular route; upstream context, output and tool limitations still apply.

The router cools down failing routes and tries eligible alternatives. It returns an error if none work. A streaming response that already emitted content is not guaranteed to switch seamlessly to another model, and the software cannot restore an exhausted provider quota.
<!-- evergreen:capabilities:end -->

<!-- evergreen:installation-privacy:start -->
## Start in three steps

1. Read the resource conditions, apply at the official provider, and save your own key in the vault.
2. Fetch models, add candidates and verify them before using them as routes.
3. Follow client setup and perform an actual connectivity check. Select `free` for the eligible free pool.

## First launch and signatures

The macOS package uses a fixed local signature and has no Apple Developer ID signing or notarization. If blocked, confirm the download source and allow it through System Settings → Privacy & Security. Windows installers have no commercial code signing and may show SmartScreen prompts.

Download only from this repository's releases and compare the supplied SHA-256 files. Updater signatures and operating-system commercial code signatures serve different purposes.

## API compatibility

The local token protects `/v1/models`, streaming `/v1/chat/completions`, `/v1/embeddings`, and compatibility conversions for `/v1/completions` and `/v1/responses`. Available features depend on the actual routes. Tool calls, reasoning signatures, multimodal inputs and output limits vary by model and protocol. Image, video, audio and reranking generation are not universally supported through the local chat endpoint. For truncated answers, inspect the recent-request budget and finish reason, then check client settings and provider limits.

## Application and resource updates

The top-bar update control checks both the signed catalog and application releases. Valid catalog updates apply independently; application updates read the release metadata. Packages are signed with an offline private key and verified by the embedded public key. If your platform has no updater entry or an older version cannot upgrade, download an available installer manually.

## Privacy and repository boundaries

- Provider keys stay in the local system credential store. The local unified token stays in the app data directory and authenticates the loopback endpoint.
- Requests go directly from your computer to the chosen provider. Keys, prompts and responses do not pass through HyphenBox's catalog or statistics servers. The provider still receives request data and applies its own privacy policy.
- Anonymous version statistics are enabled by default and can be disabled. At most once per UTC day, the app reports an anonymous device hash, version, OS, architecture and date. It does not report credentials, conversations, usage or selected providers/models.
- This repository contains downloads, documentation, screenshots and update metadata. Application source, the resource catalog, raw research/probe data, private service settings and signing private keys are not public here.
- HyphenBox does not collect leaked keys, distribute shared accounts or bypass quotas. “Free API” means a provider-authorized entitlement, not permanent availability.
<!-- evergreen:installation-privacy:end -->

<!-- evergreen:use-cases:start -->
## Use cases and questions

| Need | Approach |
| --- | --- |
| Discover free model APIs | Compare official free conditions, quotas, application requirements and review dates |
| Configure a coding assistant | Follow client setup using the local endpoint and token |
| Manage providers and keys | Obtain your own credentials, store them locally and verify actual model calls |
| Diagnose rate limits or truncation | Inspect recent requests, budgets and finish reasons against provider constraints |

**Are free APIs unlimited forever?** No. Providers may change free tiers, trials and promotions; catalog entries do not prove your account works.

**How do I avoid paid routes?** Choose `free`; `auto` may select paid routes you added.

**Does it run local models?** Its main purpose is API management and routing. Use LocalBrain for models running on your computer.

**Does it apply for accounts or keys for me?** No. Meet each provider's official conditions yourself, then verify your credentials.
<!-- evergreen:use-cases:end -->

## Report an issue

Include OS, version, client, steps and sanitized errors in [Issues](https://github.com/HackerChi-Hub/hyphenbox-release/issues). Log locations:

- Windows: `%LOCALAPPDATA%\top.hyphentech.hyphenbox\logs\hyphenbox.log`
- macOS: `~/Library/Logs/top.hyphentech.hyphenbox/hyphenbox.log`
- Linux: `~/.local/share/top.hyphentech.hyphenbox/logs/hyphenbox.log`

Check attachments despite automatic redaction. Never post complete keys, tokens, account details, private conversations or private service addresses.

<!-- evergreen:discovery:start -->
## More from HyphenTech

| Application | Purpose | Official download |
| --- | --- | --- |
| LocalBrain | Local models, file and media tools | [LocalBrain](https://github.com/HackerChi-Hub/localbrain-releases) |
| HyphenScreen | Screen recording, editing, captions and animation | [HyphenScreen](https://github.com/HackerChi-Hub/HyphenScreen-Releases) |
| ScreenLex | Movie English, vocabulary and review | [ScreenLex](https://github.com/HackerChi-Hub/screenlex-download) |
| HyphenBox | API discovery, verification and routing | [HyphenBox](https://github.com/HackerChi-Hub/hyphenbox-release) |

Share this repository homepage so others can choose the latest installer. Follow [Bilibili](https://space.bilibili.com/1846717524), [YouTube](https://www.youtube.com/@hyphentech_top), or the [HyphenTech website](https://hyphentech.top). On WeChat, search for 黑粉科技.
<!-- evergreen:discovery:end -->
