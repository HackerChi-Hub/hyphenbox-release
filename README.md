# 黑粉盒子软件下载

这是 HyphenBox（黑粉盒子）的唯一公开仓库，只用于提供软件安装包、版本说明和文件校验值。

软件源码、免费 API 目录、采集系统、签名系统、原始证据、测试凭据和用户数据均为私有内容，不在本仓库公开，也不会通过 GitHub Pages 提供。

## 下载

安装包统一从 [GitHub Releases](https://github.com/HackerChi-Hub/hyphenbox-release/releases) 下载，DMG、EXE 和 MSI 不直接提交进 Git 历史。

当前只保留最新版：

- `0.3.2` macOS Apple Silicon 预发行版；
- Windows 安装包尚未完成真实构建验收；
- Intel Mac 安装包尚未发布；
- macOS 当前为 ad-hoc 开发签名，尚未完成 Developer ID 正式签名和苹果公证。

当前 DMG SHA-256：

```text
a4222fe117c8513e6768b3ce0bd43d87f7279fb9630b618db6640e042f443349
```

对应的 `.sha256` 文件会作为同一 GitHub Release 的下载资产提供。下载后校验值不一致时不要安装。

## 数据更新边界

本仓库不托管免费 API 目录。后续桌面软件将通过受控的私有数据服务定期读取经过签名的目录更新；服务端数据源和生成流程保持私有。客户端收到的数据仍会在本机完成签名、版本和文件哈希验证。

任何真实 API Key、账号凭据、用户提示词和模型回答都不得进入本仓库、Issue、日志或截图。
