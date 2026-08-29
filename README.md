# 黑粉盒子软件下载

这是 HyphenBox（黑粉盒子）的唯一公开仓库，只用于提供软件安装包、版本说明和文件校验值。

软件源码、免费 API 目录、采集系统、签名系统、原始证据、测试凭据和用户数据均为私有内容，不在本仓库公开，也不会通过 GitHub Pages 提供。

## 这个软件是什么

把你**自己申请的**免费 AI API 额度，汇聚成本机上的一个统一 OpenAI 兼容接口，
供 Cursor、Cline、OpenCode 或任意 OpenAI SDK 调用，并在限流或故障时自动切换 Key。

黑粉盒子**不分发、不共享、不交换任何人的 API Key**。Key 由你从官方渠道申请，
保存在你本机的系统安全存储里，请求直连提供商，不经过黑粉盒子的服务器。

## 下载

安装包统一从 [GitHub Releases](https://github.com/HackerChi-Hub/hyphenbox-release/releases) 下载，DMG、EXE 和 MSI 不直接提交进 Git 历史。

当前只保留最新版：

- `0.4.1` macOS Apple Silicon（最低 macOS 13）；
- Windows 安装包尚未完成真实构建验收；
- Intel Mac 安装包尚未发布；
- macOS 当前为 ad-hoc 开发签名，尚未完成 Developer ID 正式签名和苹果公证。

当前 DMG SHA-256：

```text
b4de43f93fcc947bcdd5bcf5d791e910df09b040f59cec20d30fb5d5eaafe62e
```

对应的 `.sha256` 文件会作为同一 GitHub Release 的下载资产提供。下载后校验值不一致时不要安装。

### 首次打开

由于尚未完成苹果公证，首次打开会被 Gatekeeper 拦下。请到
「系统设置 → 隐私与安全性」，在被拦截的提示旁点一次「仍要打开」。

## 自动更新

应用启动时会检查
`https://github.com/HackerChi-Hub/hyphenbox-release/releases/latest/download/latest.json`，
更新包使用离线私钥签名，客户端内置公钥验签后才会应用。

## 匿名使用统计

默认开启，可在应用内「一键连接」页随时关闭；关闭后完全不发起相关网络请求。
每个 UTC 日最多上报一次，内容仅为：

```json
{ "app": "hyphenbox", "device_hash": "<64 位十六进制>",
  "version": "0.4.1", "platform": "macos", "arch": "aarch64", "day": 20694 }
```

不上报 API Key、提示词、模型回答、用量数字、文件路径、用户名或 IP，
**也不上报你用了哪些提供商或哪些模型**——那等于暴露你在哪些平台有账号。
`device_hash` 是系统机器 ID 加本应用专属命名空间后的 SHA-256，无法与其他软件的统计关联。
应用内会直接展示即将发送的完整载荷本身，而不是文字描述。

## 数据更新边界

本仓库不托管免费 API 目录。桌面软件通过受控的私有数据服务定期读取经过签名的目录更新；
服务端数据源和生成流程保持私有。客户端收到的数据仍会在本机完成签名、版本和文件哈希验证。

任何真实 API Key、账号凭据、用户提示词和模型回答都不得进入本仓库、Issue、日志或截图。
