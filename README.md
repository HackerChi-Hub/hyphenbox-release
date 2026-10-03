# 黑粉盒子 HyphenBox

免费 AI API 雷达、本机模型核验与统一路由。把分散的平台信息、自己申请的密钥和核验通过的模型放在一起，用一个本地接口接入 OpenCode、Cursor、Cline 或兼容客户端。

**黑粉盒子已经正式推出，开始正式迭代。当前正式发行版为 1.0.0，支持 macOS、Windows 与 Linux。**

[下载最新版](https://github.com/HackerChi-Hub/hyphenbox-release/releases/latest) · [1.0.0 发行说明](https://github.com/HackerChi-Hub/hyphenbox-release/releases/tag/v1.0.0) · [反馈问题](https://github.com/HackerChi-Hub/hyphenbox-release/issues)

![黑粉盒子 1.0.0：今日免费池与本地统一接口](screenshots/dashboard.png)

截图拍摄于 2026 年 10 月 4 日，来自 macOS 上实际运行的 1.0.0 正式版。提供商、模型与用量数字是拍摄时这台电脑的状态，不是所有用户默认可用的数量；资料卡与待核验候选也不等于全部实测通过。

## 它能做什么

免费清单解决“到哪里找”，却不能回答“我这把密钥现在能不能用”。黑粉盒子把资源发现和本机调用分开处理：先看官方条件，再用自己的账户核验，最后接入客户端。

| 功能 | 当前能力 |
|---|---|
| 免费 API 雷达 | 搜索和筛选资源，查看免费类型、额度、申请门槛、接口地址、模型清单、风险、官方证据及核对日期；区分资料卡和待核验候选 |
| 密钥保险箱 | 保存自己从官方渠道取得的密钥，使用系统凭据存储；界面默认遮罩，支持多把密钥 |
| 模型发现与核验 | 用自己的密钥拉取模型列表，筛选免费模型、批量加入并发送最小真实请求；对话和向量模型按用途验证，不把向量模型拿去做聊天测试 |
| 费用与能力标识 | 区分完全免费、免费额度、扣余额、价格未知和自费；展示核验状态、工具调用能力等信息，未知价格不会自动算免费 |
| 本地统一路由 | 只监听 `127.0.0.1`，提供兼容接口、多密钥尝试、限流冷却和故障切换；免费路线与一般自动路线分开 |
| 客户端接入 | OpenCode 配置可备份后写入、可撤销；Cursor、Cline 和兼容 SDK 提供可复制参数及接入指引 |
| 调用诊断与统计 | 查看本机请求与词元用量；最近调用诊断显示输出预算、结束原因等信息，帮助区分输出长度限制、限流和上游错误 |
| 独立目录更新 | 软件定期读取受控的签名目录，验证签名、版本和文件哈希；更新资源信息不必重新下载安装包 |

### 免费 API 雷达

免费档、一次性试用、限时活动与开源自托管不是同一回事。先看免费类型、申请条件和核对日期，再回到平台官方页面确认自己账户的权益。资料卡里的模型清单也不能代替本机真实调用。

![免费 API 雷达：资料卡、候选、条件与核对日期](screenshots/free-api.png)

### 模型与路由

模型列表来自你自己的凭据，路由资格来自本机核验结果。可以批量加入免费模型、核验待验证路线，也可以重新核验、停用或删除单条路线。向量模型走向量接口；语音、图像、视频与重排序等用途目前不能全部自动核验，也不会混入聊天接口。

![模型与路由：免费模型加入、真实请求核验与能力标识](screenshots/routes.png)

### 一键连接

统一地址是 `http://127.0.0.1:17688/v1`，客户端使用黑粉盒子的本地统一令牌，不需要逐个平台填写上游密钥。OpenCode 可以直接写入配置并撤销；其他客户端按应用内指引手动填写。面向智能体客户端的模型列表会筛掉已实测不支持工具调用的路线。

![一键连接：回环地址、默认遮罩令牌与真实连通性自检](screenshots/connect.png)

## free 与 auto 怎么选

- `free`：只在符合已知免费条件、通过核验且适合当前请求的路线中尝试。免费档可能有每日、每分钟或账户额度限制，不能保证无限调用。
- `auto`：综合模型能力、请求大小、费用信息和失败冷却自动选路，**可能使用你已添加的付费路线**。只想用免费范围时，请选 `free`。
- 手选模型：明确指定某条路线；该模型是否支持工具、上下文长度及输出限制，仍受上游约束。

遇到限流、额度不足或服务错误，路由器会按错误分类冷却并尝试其他合格候选。全部候选不可用时会如实返回错误。已经向客户端输出内容的流式请求不会被承诺无缝换成另一个模型；软件也不能凭空恢复平台额度。

## 下载安装

[最新版下载入口](https://github.com/HackerChi-Hub/hyphenbox-release/releases/latest)会随正式发行更新。下面是当前 **1.0.0** 的安装件：

| 系统 | 安装包 | 要求 |
|---|---|---|
| macOS | [通用 DMG](https://github.com/HackerChi-Hub/hyphenbox-release/releases/download/v1.0.0/HyphenBox_1.0.0_universal.dmg) | macOS 13 及以上，Apple 芯片 / Intel |
| Windows | [常规安装 EXE](https://github.com/HackerChi-Hub/hyphenbox-release/releases/download/v1.0.0/HyphenBox_1.0.0_x64-setup.exe) · [MSI](https://github.com/HackerChi-Hub/hyphenbox-release/releases/download/v1.0.0/HyphenBox_1.0.0_x64_en-US.msi) | Windows 10 / 11，x64 |
| Linux | [AppImage](https://github.com/HackerChi-Hub/hyphenbox-release/releases/download/v1.0.0/HyphenBox_1.0.0_amd64.AppImage) · [deb](https://github.com/HackerChi-Hub/hyphenbox-release/releases/download/v1.0.0/HyphenBox_1.0.0_amd64.deb) · [rpm](https://github.com/HackerChi-Hub/hyphenbox-release/releases/download/v1.0.0/HyphenBox-1.0.0-1.x86_64.rpm) | x64 桌面发行版，需要可用的系统密钥环 / Secret Service |

软件免费下载，不需要注册黑粉盒子账号；调用平台 API 通常仍需自行注册平台账户和申请凭据。部分平台需要国际网络，地区、实名、支付与额度条件以平台官方要求为准。

### 三步开始使用

1. 在「免费 API」查看资源条件，到平台官方入口申请自己的密钥，再存入「密钥保险箱」。
2. 在「模型与路由」拉取模型列表、加入候选并核验；通过后才能作为可用路线使用。
3. 在「一键连接」按指引接入客户端，先做真实连通性自检；仅使用免费范围时选择 `free`。

### 首次打开与签名

正式推出不等于已取得商业代码签名：macOS 当前使用固定本地签名，尚未完成 Apple Developer ID 签名和公证；Windows 安装件尚无商业代码签名，可能出现 SmartScreen 提示。macOS 被拦截时，可在确认来源后按「系统设置 → 隐私与安全性 → 仍要打开」处理。

请只从本仓库的发行页下载，并核对随发行提供的 SHA-256 校验文件。**更新器签名与系统商业代码签名是两件事。**

## 接口与兼容范围

提供 `/v1/models`、`/v1/chat/completions`（含流式）、`/v1/embeddings`，以及旧版 `/v1/completions` 和 `/v1/responses` 的兼容转换。请求需要本地统一令牌，模型能力与可用范围取决于实际路线。

兼容接口不代表每家提供商都支持全部功能。工具调用、思考签名、多模态、输出上限等仍有模型和协议差异；图片、视频、音频及重排序生成不能一概当成已由本地聊天接口支持。长回答截断时，可先在「一键连接 → 最近调用与结束原因」查看输出预算及结束原因，再核对客户端参数和平台限制。

## 软件更新与资源更新

顶栏「一键更新」检查签名目录和软件新版本。目录更新通过验证后独立应用，不要求每次都发新安装包；应用升级读取公开发行页的更新清单。

当前 1.0.0 发行已经提供 macOS、Windows 与 Linux 安装件、更新器签名及更新清单。更新包使用离线私钥签名，客户端用内置公钥验证后才应用。若旧版无法自动升级，可从最新版入口手动安装。

## 隐私与公开边界

- 平台密钥保存在本机系统凭据存储中。本地统一令牌保存在应用数据目录，用于本机回环接口鉴权。
- 模型调用从本机发往所选提供商，必要的认证信息、提示词与回答**不经过黑粉盒子的目录或统计服务器**。提供商仍会收到调用数据，请阅读其隐私政策。
- 匿名版本统计默认开启，可在应用内关闭；每个 UTC 日最多上报一次，字段包含匿名设备哈希、软件版本、系统、架构与日期，不包含密钥、对话、用量或所用提供商和模型。
- 本仓库只公开下载、说明、截图与更新元数据。**源码、免费资源目录、原始采集与核验资料、私有服务配置、签名私钥均不在此公开。**
- 不采集或分享泄露密钥，不提供共享账户或绕过额度限制的密钥池。“免费 API”指平台允许的免费权益，不是永久可用保证。

## 反馈问题

请在 [Issues](https://github.com/HackerChi-Hub/hyphenbox-release/issues) 附上系统、黑粉盒子版本、客户端名称、复现步骤及脱敏错误。运行日志路径：

- Windows：`%LOCALAPPDATA%\top.hyphentech.hyphenbox\logs\hyphenbox.log`
- macOS：`~/Library/Logs/top.hyphentech.hyphenbox/hyphenbox.log`
- Linux：`~/.local/share/top.hyphentech.hyphenbox/logs/hyphenbox.log`

日志有认证信息脱敏处理，但提交前仍请检查内容。**不要把完整密钥、令牌、账号信息、私人对话或私有服务地址放进 Issue、日志附件和截图。**

---

黑粉科技 · [更多自制软件与文章](https://github.com/HackerChi-Hub)
