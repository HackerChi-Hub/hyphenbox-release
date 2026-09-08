# 黑粉盒子 HyphenBox

> **免费大模型 API 雷达 + 本地统一路由。** 持续整理免费资源，并区分来源信息与实际调用验证；
> 你的 Key 只存在自己电脑里，一个本地接口接进 Cursor / Cline / OpenCode。
>
> 当前阶段：**初步构建 · 预览版**（macOS universal + Windows x64 + Linux x64）。功能在快速迭代，
> 界面与行为以最新版本为准。

![今日免费池](screenshots/dashboard.png)

## 它解决什么问题

想白嫖大模型 API 的人都干过同一件事：搜一份免费清单，挨个申请，然后发现一半
链接已经死了，剩下一半额度早改了，好不容易拿到的 Key 填进客户端还报错。
问题不在免费资源少，而在**没人替你持续验证**。

黑粉盒子做四件事：

| 环节 | 做法 |
|---|---|
| **找** | 从官方页面与参考项目收集候选，定期更新来源观察与复测结果；候选、官方声明和实测通过分开标识，以应用内日期与状态为准 |
| **验** | 每个模型用你自己的 Key 真发一次对话请求，通过才进列表；打分器、下线端点、假免费一律挡在外面 |
| **标** | 每个模型带**费用五档**标识：完全免费 / 免费额度 / 扣余额 / 价格未知 / 自费——「查不到价格」不会被谎称成免费 |
| **接** | 一个本地接口（`http://127.0.0.1:17688/v1`）接进任何 OpenAI 兼容客户端；选 `free` 仅在符合免费条件的候选中换路；选 `auto` 综合已知能力、请求大小与失败冷却选路，也可能使用你已添加的付费路线。额度通常在请求时才由上游确认，并非实时全知。对话之外还直通 `/v1/embeddings`（向量）、翻译旧版 `/v1/completions`（老客户端）与新方言 `/v1/responses`（Codex CLI 已实测跑通完整智能体循环，含工具调用），浏览器类工具的跨域预检也放行——鉴权仍是本地令牌 |

## 界面

**免费 API 雷达** —— 每家写明额度、申请条件、接口地址、最后复测日期；
已核验的可展开**免费模型清单**（如硅基流动官方 L0 档 16 个型号，逐个带限速与核对日期）：

![免费 API](screenshots/free-api.png)

**模型与路由** —— 列表顺序即推荐顺序：完全免费且可跑 agent 的排最前，
自费的垫底；每行两枚徽标（费用档 + 可用度）：

![模型与路由](screenshots/routes.png)

**一键连接** —— OpenCode 可直接写入配置（默认模型设为 `auto`，可随时撤销），
Cursor / Cline 给可粘贴指引；本地令牌屏幕上默认打码：

![一键连接](screenshots/connect.png)

## 下载安装

- **[Windows 0.4.68 安装包](https://github.com/HackerChi-Hub/hyphenbox-release/releases/download/v0.4.68/HyphenBox_0.4.68_x64-setup.exe)**：常规安装，另有 MSI。
- **[Linux 0.4.68 下载](https://github.com/HackerChi-Hub/hyphenbox-release/releases/tag/v0.4.68)**：AppImage / deb / rpm，x64，需桌面密钥环。
- **[macOS 0.4.67 通用包](https://github.com/HackerChi-Hub/hyphenbox-release/releases/download/v0.4.67/HyphenBox_0.4.67_universal.dmg)**：Intel / Apple 芯片通用；0.4.68 Mac 包待维护者手动构建后补充。
- 要求：macOS 13 及以上 / Windows 10/11 x64 / Linux x64（桌面发行版）
- 每个 Release 附 `.sha256` 校验文件；免费下载，无注册、无账号体系

### 首次打开

预览版使用自签名证书（非 Apple 开发者证书）。首次打开若被拦截：
**系统设置 → 隐私与安全性 → 仍要打开**，只需一次。

### 三步接入客户端

1. 「密钥保险箱」保存你自己申请的 Key（使用对应平台的系统凭据存储；Linux 需要可用的桌面密钥环）
2. 「模型与路由」拉取模型列表并一键核验
3. 「一键连接」把 Base URL 与本地令牌填进客户端——只用免费路线选 `free`；允许在已添加的路线中自动挑选则选 `auto`。遇到限额会按规则尝试其他可用候选；全部候选不可用时会如实报错，不保证无限续用

## 自动更新

Windows / Linux **0.4.68** 已提供手动下载，修复额度冷却、自检及空回答换路。此批安装件尚无更新器签名。
当前自动更新入口继续提供完整签名发行 **0.4.67**；待 0.4.68 Mac 包与离线签名补齐后再切换，避免影响现有 Mac 用户。
源码仓库与数据目录保持私有，本仓库只提供下载、说明与更新元数据。

顶栏「一键更新」同时检查两样东西：签名目录（验签通过自动套用，不用发版）和应用新版本。
macOS 版走应用内自动更新：读取
`https://github.com/HackerChi-Hub/hyphenbox-release/releases/latest/download/latest.json`，
更新包使用离线私钥签名，客户端内置公钥验签后才会应用。
0.4.60 起 Windows 与 Linux 也走应用内自动更新：安装包由 CI 构建后在离线机器上用同一把私钥签名再发布，
客户端验签通过才安装（更早版本会提示手动下载）。

### 排障日志

运行日志写在文件里，反馈问题时把它一起发来即可（不含 Key、提示词或模型回答）：

- Windows：`%LOCALAPPDATA%\top.hyphentech.hyphenbox\logs\hyphenbox.log`
- macOS：`~/Library/Logs/top.hyphentech.hyphenbox/hyphenbox.log`
- Linux：`~/.local/share/top.hyphentech.hyphenbox/logs/hyphenbox.log`

## 隐私：Key 与对话不上传黑粉盒子的目录服务

密钥保存在本机对应平台的凭据存储中。调用模型时，必要的认证信息与提示词从你的电脑
发往你选择的提供商，模型回答也直接返回本机；它们不经过黑粉盒子的目录或统计服务器。

匿名使用统计默认开启，可在应用内随时关闭；每个 UTC 日最多上报一次，
内容仅为：

```json
{ "app": "hyphenbox", "device_hash": "<64 位十六进制>",
  "version": "0.4.39", "platform": "macos", "arch": "aarch64", "day": 20696 }
```

不上报 API Key、提示词、模型回答、用量数字、文件路径、用户名或 IP，
**也不上报你用了哪些提供商或哪些模型**——那等于暴露你在哪些平台有账号。
`device_hash` 是系统机器 ID 加本应用专属命名空间后的 SHA-256，无法与其他软件的统计关联。
统计后台只展示聚合计数，需要口令查看，不公开。

## 数据更新边界

本仓库不托管免费 API 目录。桌面软件通过受控的私有数据服务定期读取经过签名的
目录更新；服务端数据源和生成流程保持私有。客户端收到的数据仍会在本机完成
签名、版本和文件哈希验证。

任何真实 API Key、账号凭据、用户提示词和模型回答都不得进入本仓库、Issue、日志或截图。

## 如实声明

- **预览版与签名**：macOS 使用固定本地签名，未做 Apple 公证；Windows 安装包没有商业代码签名，可能出现 SmartScreen 提示。完整自动更新发行由独立更新器签名保护；本次 0.4.68 Windows / Linux 仅手动下载，尚无更新器签名。手动下载可核对 Release 中的 `.sha256`。Windows / Linux 支持范围是 x64，macOS 通用包覆盖 Apple 芯片与 Intel
- **免费额度随时会变**：来源定期采集，实测取决于可用凭据和提供商状态；软件不会把网页零价等同于每个账号都能用，也不能保证你申请时额度仍在
- 「免费 Key」只指你从官方渠道自行领取的凭据；共享账号、Key 池、绕额度中转一律不收录

---

黑粉科技 · [更多自制软件与文章](https://github.com/HackerChi-Hub)
