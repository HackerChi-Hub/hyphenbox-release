<!-- evergreen:intro:start -->
![HyphenBox · HyphenTech](screenshots/readme-hero.svg)

# 黑粉盒子 HyphenBox · 免费 AI API 雷达、模型核验与统一接口

**找到合适的免费 AI 接口，用自己的密钥测通，再接入常用 AI 编程工具。**

黑粉盒子是黑粉科技开发的桌面 AI API 管理工具，把免费资源发现、本机密钥保险箱、模型核验和本地统一路由放在一起。适合寻找免费大模型 API、管理多个提供商，或给 DeepSeek Harness、OpenCode、Cline 配置兼容接口的用户。资源条件有官方证据与核对日期；模型是否能用，以你自己的账户和真实请求为准。


软件免费下载，不需注册黑粉盒子账号。平台密钥需自行申请，部分平台需要国际网络；免费额度、地区和账户条件以平台为准。

<p align="center"><a href="README.md">简体中文</a> | <a href="README.zh-TW.md">繁體中文</a> | <a href="README.en.md">English</a></p>

<p align="center"><a href="https://github.com/HackerChi-Hub/hyphenbox-release/releases/latest"><img alt="立即下载" src="https://img.shields.io/badge/立即下载-18181b?style=for-the-badge&amp;logo=github" /></a> <a href="https://hyphentech.top"><img alt="官网" src="https://img.shields.io/badge/官网-334155?style=for-the-badge" /></a></p>
<!-- evergreen:intro:end -->

<!-- recent-features:start -->
## 近期新增与改进（最近 5 项）

- **1.0.5** · 移除底部固定栏，步骤编号保留在左侧与关键按钮，模型操作按钮排齐并按内容宽度显示。
- **1.0.5** · DeepSeek Harness 作为首选，保留备份后写入与撤销，其他 Agent 按选择展开。
- **1.0.5** · 按官方文档提供 OpenCode、Cline、Roo Code、Continue、Codex CLI 和通用兼容客户端配置；本轮未做真实调用实测。
- **1.0.5** · 首页合并重复内容，保留白嫖成果、今日概况与赞助码，明细和诊断按需展开。
- **1.0.5** · 手动配置默认 free，界面令牌保持遮罩，复制时才读取；移除不能直连本机的 Cursor 旧指引。
<!-- recent-features:end -->

<!-- evergreen:demos:start -->
## ▶ 使用演示

**早期版本的密钥保存、客户端配置与 MCP 演示；YouTube 为完整介绍。视频不展示新版 Harness 接入。**

| Bilibili | YouTube |
| :---: | :---: |
| [![B 站观看](https://img.shields.io/badge/Bilibili-00a1d6?style=for-the-badge&logo=bilibili&logoColor=white)](https://www.bilibili.com/video/BV1Hutu6KEoW/) | [![YouTube 观看](https://img.shields.io/badge/YouTube-ff0033?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/watch?v=EQlq59rqQ0I) |

视频演示的是拍摄时的版本；安装包与当前功能以本页正式发行信息为准。视频为中文讲解。
<!-- evergreen:demos:end -->

**当前正式版：1.0.5** · [发行说明](https://github.com/HackerChi-Hub/hyphenbox-release/releases/tag/v1.0.5)

![黑粉盒子 1.0.5：白嫖成果、今日概况与左侧步骤导航](screenshots/dashboard-1.0.5.png)

截图拍摄于 2026 年 10 月 31 日，来自安装后的 macOS 1.0.5 正式版。显示的是拍摄设备当时的状态，不代表所有用户都能调用相同数量的模型；未展示密钥、账户信息或私人对话。历史换路图另行标注版本。

<!-- evergreen:capabilities:start -->
## 它能做什么

免费清单解决“到哪里找”，却不能回答“我这把密钥现在能不能用”。黑粉盒子把资源发现和本机调用分开处理：先看官方条件，再用自己的账户核验，最后接入客户端。

| 功能 | 当前能力 |
|---|---|
| 免费 API 雷达 | 搜索和筛选资源，查看免费类型、额度、申请门槛、接口地址、模型清单、风险、官方证据及核对日期；区分资料卡和待核验候选 |
| 密钥保险箱 | 保存自己从官方渠道取得的密钥，使用系统凭据存储；界面默认遮罩，支持多把密钥 |
| 模型发现与核验 | 用自己的密钥拉取模型列表，筛选免费模型、批量加入并发送最小真实请求；对话和向量模型按用途验证，不把向量模型拿去做聊天测试 |
| 费用与能力标识 | 区分完全免费、免费额度、扣余额、价格未知和自费；展示核验状态、工具调用能力等信息，未知价格不会自动算免费 |
| 本地统一路由 | 只监听 `127.0.0.1`，提供兼容接口、多密钥尝试、限流冷却和故障切换；免费路线与一般自动路线分开 |
| Agent 接入 | 首选 DeepSeek Harness，可备份后写入和撤销；OpenCode、Cline、Roo Code、Continue、Codex CLI 与通用兼容客户端提供官方文档配置，未宣称本轮实测通过 |
| 自愿赞助 | 三平台首页直接显示随包赞助码，不依赖用量或网络；赞助不解锁功能，也不影响免费使用 |
| 调用诊断与统计 | 查看本机请求与词元用量；最近调用诊断显示输出预算、结束原因等信息，帮助区分输出长度限制、限流和上游错误 |
| 独立目录更新 | 软件定期读取受控的签名目录，验证签名、版本和文件哈希；更新资源信息不必重新下载安装包 |

### 免费 API 雷达

免费档、一次性试用、限时活动与开源自托管不是同一回事。先看免费类型、申请条件和核对日期，再回到平台官方页面确认自己账户的权益。资料卡里的模型清单也不能代替本机真实调用。

![免费 API 雷达：资料卡、候选、条件与核对日期](screenshots/free-api-1.0.5.png)

### 模型与路由

模型列表来自你自己的凭据，路由资格来自本机核验结果。可以批量加入免费模型、核验待验证路线，也可以重新核验、停用或删除单条路线。向量模型走向量接口；语音、图像、视频与重排序等用途目前不能全部自动核验，也不会混入聊天接口。

![模型操作：拉取、加入免费模型与批量核验](screenshots/routes-1.0.5.png)

### 接入 Agent

统一地址是 `http://127.0.0.1:17688/v1`，客户端使用黑粉盒子的本地统一令牌，不需要逐个平台填写上游密钥。DeepSeek Harness 可以直接写入配置并撤销；其他客户端按应用内指引手动填写。面向智能体客户端的模型列表会筛掉已实测不支持工具调用的路线。

Harness 使用官方原生 OpenAI 适配。写入只追加黑粉盒子的受管配置层，并在用户环境文件中保存本机令牌，不复制上游密钥；原有提供商与私人会话保留。首次连接后请新启 Harness 进程、建立新会话；已有会话的模型选择不变。存在免费候选时默认选择 `free`，`auto` 可能使用已添加的付费路线。撤销会移除这层配置及其令牌，不删除其他配置或会话。

![首选 Harness：受管接入与按需展开的接口参数](screenshots/connect-1.0.5.png)

按左侧编号依次完成 **1 添加密钥 → 2 核验模型 → 3 接入 Agent**，随后在接入页展开“4 开始使用”。底部不再放固定栏，关键操作按钮保留步骤号、按内容宽度排列。Harness 默认排在第一位；选择其他 Agent 后才展开对应参数。手动模板默认 `free`，令牌在界面遮罩、主动复制时填入；本轮只核对官方文档与配置格式，没有进行新的 Agent 真实调用。

![OpenCode：按官方文档生成配置，默认免费路线](screenshots/opencode-1.0.5.png)

[OpenCode](https://opencode.ai/docs/providers/#custom-provider)、[Cline](https://docs.cline.bot/provider-config/openai-compatible)、[Roo Code](https://docs.roocode.com/providers/openai-compatible)、[Continue](https://docs.continue.dev/customize/model-providers/top-level/openai) 和 [Codex CLI](https://developers.openai.com/codex/config-advanced/#custom-model-providers) 的指引核对于 2026-10-31。[Cursor 官方说明](https://cursor.com/docs/settings/api-keys)请求经过其服务器，不能将本机回环地址当成直接接入方案，旧指引已移除。

## free 与 auto 怎么选

- `free`：只在符合已知免费条件、通过核验且适合当前请求的路线中尝试。免费档可能有每日、每分钟或账户额度限制，不能保证无限调用。
- `auto`：综合模型能力、请求大小、费用信息和失败冷却自动选路，**可能使用你已添加的付费路线**。只想用免费范围时，请选 `free`。
- 手选模型：明确指定某条路线；该模型是否支持工具、上下文长度及输出限制，仍受上游约束。

遇到限流、额度不足或服务错误，路由器会按错误分类冷却并尝试其他合格候选。全部候选不可用时会如实返回错误。已经向客户端输出内容的流式请求不会被承诺无缝换成另一个模型；软件也不能凭空恢复平台额度。
### 免费候选尽量试完（1.0.3 起）

客户端选择 `free` 后，不再按固定换路次数或四把密钥上限提前停止。它会在本次已添加、已核验、启用且适合请求的免费候选中继续寻找；换路线时优先尚未尝试的平台。冷却、待授权、不支持所需能力或不再免费等候选会按当前状态跳过，派发前再次复核本机免费资格，不自动切入自费凭据或收费模型。

接通前总预算为 5 分钟，单次尝试最多 60 秒；有效流式输出开始后，不受这项换路预算截断。同一路线与凭据组合不重复派发，只保留一次明确参数上限的自愈重试。到时仍有候选未试完，会报告剩余路线和停止原因，不把“还没试完”写成“所有平台没额度”。客户端自己的超时可能更短，平台额度也不会因此被预留；`auto` 暂保留原有有界换路策略。

### 减少密码弹窗与中断接续（1.0.2 起）

普通调用不主动弹出系统密码框，同一密钥的并发读取合并，失败后退避。Mac 新增和迁移后的密钥保存在一个应用钥匙串条目中；可在「密钥保险箱 → 减少密码弹窗与恢复授权」前台授权。旧版独立条目首次迁移可能仍逐项询问；系统锁定、权限或签名变化仍可能要求再次授权，不能承诺永久只输入一次密码。密钥不改存明文文件。

某把密钥暂不可读时，`free`／`auto` 会隔离该凭据并尝试其他合格路线，不把本机授权失败说成上游额度用完。明确的结构化额度错误（包括 HTTP 200 包装的错误）会参与冷却与换路；正常回答或内容拒绝不会因提到额度而被判成额度错误。

当前工具轮已经交回全部工具结果时，可整理成已执行检查点，移除旧提供商签名后交给替代模型继续；不会自动重放旧工具调用。缺结果、编号冲突或已输出一半的流式回答仍不能保证无缝恢复。换路不保证模型能力或回答风格不变。最近五条记录可在「接入 Agent → 自动换路与工具接续记录」查看；接通上游不代表整个任务完成。

![添加密钥表单与授权说明入口（原生界面局部，裁去账户列表）](screenshots/vault-1.0.5.png)

下面是 1.0.3 的历史真实换路记录（2026-10-24，未改标为本版新图）：首家平台的账户令牌额度装不下请求，随后转到另一家免费路线。它是这次测试的结果，不代表所有账户或任务都能成功。

![真实换路示例：账户请求额度限制后改走另一家免费路线](screenshots/failover.png)
### 本机用量与当前标价估值

统计按实际使用凭据的当前声明分为免费额度、自费与未声明，未知不会自动计入免费成果。负数价格占位、非数字和无穷值不参与估值；没有有效单价和明确零价分别显示。当前单价估值不是账单，也不是已节省的金额，软件不再固定声称实付零元。

修改单价或计费声明会改变历史汇总；历史请求没有当时的账单快照。次数为请求记录，包含开始后中断的流式请求；模型数为平台与模型组合，不能等同于独立底座模型或完整任务成功数。

用量明细与统计口径可在首页“白嫖成果”展开查看；首页只保留累计成果和总体概况。

专用安全分类模型（如 Qwen3Guard、Llama Guard、GPT OSS Safeguard）按安全分类用途隔离，已有路由也不会再进入 free／auto 通用对话候选；不删除用户历史用量。
<!-- evergreen:capabilities:end -->

## 下载安装

[最新版下载入口](https://github.com/HackerChi-Hub/hyphenbox-release/releases/latest)会随正式发行更新。下面是当前 **1.0.5** 实际已上传的安装件；未列出的平台不代表已有本版安装包：

| 系统 | 安装包 | 要求 |
|---|---|---|
| macOS | [通用 DMG](https://github.com/HackerChi-Hub/hyphenbox-release/releases/download/v1.0.5/HyphenBox_1.0.5_universal.dmg) | macOS 13 及以上，Apple 芯片 / Intel |

本次 **1.0.5 提供 macOS 通用包**，同时支持 Apple 芯片和 Intel。Windows/Linux 尚无 1.0.5，保留 [1.0.4 平台安装包](https://github.com/HackerChi-Hub/hyphenbox-release/releases/tag/v1.0.4)，不会把旧包标成新版。

**本轮验证范围**：1.0.5 执行构建、离线回归、配置格式、实际安装和界面检查；没有新增上游模型、Agent 工具任务或自动换路的真实调用结论。[1.0.4 的历史验收](https://github.com/HackerChi-Hub/hyphenbox-release/releases/download/v1.0.4/HyphenBox_1.0.4_macos.validation.json)保持原版本标记。

本次 1.0.4 Windows/Linux 安装包使用内置签名目录，未预置在线目录服务；模型核验、路由和调用仍可使用自己的密钥。目录在线刷新需另行配置受控服务。

软件免费下载，不需要注册黑粉盒子账号；调用平台 API 通常仍需自行注册平台账户和申请凭据。部分平台需要国际网络，地区、实名、支付与额度条件以平台官方要求为准。

<!-- evergreen:installation-privacy:start -->
### 按步骤开始使用

1. 在「免费资源」查看资源条件，到平台官方入口申请自己的密钥，再存入「添加密钥」。
2. 在「核验模型」拉取模型列表、加入候选并核验；通过后才能作为可用路线使用。
3. 在「接入 Agent」选择首选 Harness 或其他 Agent，写入配置或复制参数。
4. 保持黑粉盒子运行，新启 Agent、新建会话，模型选 `free`，再执行自己的任务。

### 首次打开与签名

正式推出不等于已取得商业代码签名：macOS 当前使用固定本地签名，尚未完成 Apple Developer ID 签名和公证；Windows 安装件尚无商业代码签名，可能出现 SmartScreen 提示。macOS 被拦截时，可在确认来源后按「系统设置 → 隐私与安全性 → 仍要打开」处理。

请只从本仓库的发行页下载，并核对随发行提供的 SHA-256 校验文件。**更新器签名与系统商业代码签名是两件事。**

## 接口与兼容范围

提供 `/v1/models`、`/v1/chat/completions`（含流式）、`/v1/embeddings`，以及旧版 `/v1/completions` 和 `/v1/responses` 的兼容转换。请求需要本地统一令牌，模型能力与可用范围取决于实际路线。

兼容接口不代表每家提供商都支持全部功能。工具调用、思考签名、多模态、输出上限等仍有模型和协议差异；图片、视频、音频及重排序生成不能一概当成已由本地聊天接口支持。长回答截断时，可先在「接入 Agent → 最近调用与结束原因」查看输出预算及结束原因，再核对客户端参数和平台限制。

## 软件更新与资源更新

顶栏「一键更新」检查签名目录和软件新版本。目录更新通过验证后独立应用，不要求每次都发新安装包；应用升级读取公开发行页的更新清单。

安装件与更新清单以本版发行页为准。更新包使用离线私钥签名，客户端用内置公钥验证后才应用。若某个平台暂未提供更新器条目，或旧版无法自动升级，可从发行页手动下载该平台已有的安装件。

## 隐私与公开边界

- 平台密钥保存在本机系统凭据存储中。本地统一令牌保存在应用数据目录，用于本机回环接口鉴权。
- 模型调用从本机发往所选提供商，必要的认证信息、提示词与回答**不经过黑粉盒子的目录或统计服务器**。提供商仍会收到调用数据，请阅读其隐私政策。
- 匿名版本统计默认开启，可在应用内关闭；每个 UTC 日最多上报一次，字段包含匿名设备哈希、软件版本、系统、架构与日期，不包含密钥、对话、用量或所用提供商和模型。
- 开关位于「接入 Agent → 提升使用体验」，默认折叠；展开可查看统计范围、状态并关闭，不改变你已有的选择。
- 本仓库只公开下载、说明、截图与更新元数据。**源码、免费资源目录、原始采集与核验资料、私有服务配置、签名私钥均不在此公开。**
- 不采集或分享泄露密钥，不提供共享账户或绕过额度限制的密钥池。“免费 API”指平台允许的免费权益，不是永久可用保证。

## 反馈问题

请在 [Issues](https://github.com/HackerChi-Hub/hyphenbox-release/issues) 附上系统、黑粉盒子版本、客户端名称、复现步骤及脱敏错误。运行日志路径：

- Windows：`%LOCALAPPDATA%\top.hyphentech.hyphenbox\logs\hyphenbox.log`
- macOS：`~/Library/Logs/top.hyphentech.hyphenbox/hyphenbox.log`
- Linux：`~/.local/share/top.hyphentech.hyphenbox/logs/hyphenbox.log`

日志有认证信息脱敏处理，但提交前仍请检查内容。**不要把完整密钥、令牌、账号信息、私人对话或私有服务地址放进 Issue、日志附件和截图。**
<!-- evergreen:installation-privacy:end -->


---

黑粉科技 · [更多自制软件与文章](https://github.com/HackerChi-Hub)

<!-- evergreen:use-cases:start -->
## 适合哪些需求

| 需求 | 使用方法 |
| --- | --- |
| 找免费大模型 API | 按免费类型、额度、申请门槛和核对日期筛选官方资源 |
| 给 AI 编程工具配置接口 | 使用一键连接指引，配置本地统一地址与令牌 |
| 管理多平台模型和密钥 | 自己申请密钥，在本机保存、拉取模型并真实核验 |
| 处理限流或输出截断 | 看最近调用诊断，再核对路线、预算、结束原因和平台限制 |

## 常见问题

**免费 API 是永久无限使用吗？** 不是。免费档、试用与限时活动不同，平台可以调整权益；目录信息也不等于你的账户已通过调用验证。

**只想用免费路线该怎么选？** 使用 `free`。`auto` 可能调用你已添加的付费路线，费用仍受所选提供商规则约束。

**是本地大模型运行器吗？** 黑粉盒子主要管理提供商 API 与统一路由；需要在电脑上运行模型，可使用方寸智匣。

**会替我申请账号和密钥吗？** 不会。申请、地区与身份条件按平台官方要求完成，再用自己的凭据核验。
<!-- evergreen:use-cases:end -->

<!-- evergreen:discovery:start -->
## 黑粉科技自制软件

按需求选用，也可以组合使用：本地模型交给方寸智匣，云端接口交给黑粉盒子，录制教程用黑粉录屏，影视英语学习用光影词库。

| 软件 | 适合解决的问题 | 官方下载 |
| --- | --- | --- |
| 方寸智匣 LocalBrain | 本地大模型、文件与媒体工作台 | [下载方寸智匣](https://github.com/HackerChi-Hub/localbrain-releases) |
| 黑粉录屏 HyphenScreen | 屏幕录制、教程剪辑、字幕与动画 | [下载黑粉录屏](https://github.com/HackerChi-Hub/HyphenScreen-Releases) |
| 光影词库 ScreenLex | 看电影学英语、字幕查词、生词复习 | [下载光影词库](https://github.com/HackerChi-Hub/screenlex-download) |
| 黑粉盒子 HyphenBox | 免费 AI API 发现、模型核验与统一接口 | [下载黑粉盒子](https://github.com/HackerChi-Hub/hyphenbox-release) |

## 分享与反馈

分享给朋友时，请复制本仓库首页或[官方网站](https://hyphentech.top)，让对方按自己的系统下载当前安装包。欢迎收藏仓库、点亮 Star，或在本仓库 Issues 提交使用体验、需求和脱敏问题。

关注[哔哩哔哩「黑粉科技」](https://space.bilibili.com/1846717524)、[YouTube 黑粉科技频道](https://www.youtube.com/@hyphentech_top)；公众号和视频号搜索「黑粉科技」，查看实际演示与使用教程。
<!-- evergreen:discovery:end -->
