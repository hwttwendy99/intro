---
name: kd-foundation
description: KDesign 基础规范：Token 速查、图标、主题、无障碍、多语言。所有 HTML 设计稿输出必加载。Keywords：KDesign tokens, css variables, icons, a11y, i18n, theme.
version: 3.0.0
---

# KDesign 基础设计规范

> **所有 HTML 设计稿输出必须加载本 Skill。**

## 硬性约束（禁止 AI 绕过）

1. **组件样式必须从 `_css/*.css` 原样复制**，禁止重写组件 CSS
2. **页面布局 CSS 中所有颜色必须使用 CSS 变量**（`--kd-color-*`），禁止硬编码 HEX/RGB 值
3. **页面布局 CSS 中所有字号必须使用 CSS 变量**（`--kd-font-size-*`），禁止硬编码 px 值
4. **页面布局 CSS 中所有圆角必须使用 CSS 变量**（`--kd-border-radius-*`），禁止硬编码 px 值
5. **页面布局 CSS 中所有阴影必须使用 CSS 变量**（`--kd-box-shadow-*`），禁止自行推断阴影值
6. **间距值必须是 4px 的整数倍**（2px 仅用于 spacing-xxs）
7. **图标必须走检索流程获取**（见 `AGENTS.md` 图标获取协议），禁止手写 SVG path data
8. **禁用状态统一使用 `opacity: var(--kd-opacity-disabled)`**，不使用灰色替代
9. **页面大背景使用 `--kd-color-background-base`**（不是纯白），导航栏/侧边栏/卡片等面板用 `--kd-color-fill-base`
10. **浏览器兼容基线为 Chromium 104** — 禁止使用 `:has()`、`color-mix()`、CSS Nesting、`@container` 等 Chrome 105+ 才支持的 CSS 特性。完整黑名单见 [browser-baseline.md](browser-baseline.md)

## CSS 变量模板

每个 HTML 设计稿的 `<head>` 中必须包含 Token 变量定义。

**v3 工作流**：直接复制 [`kd-components/_css/tokens.css`](../kd-components/_css/tokens.css) 的完整内容到 `<style>` 中。`tokens.css` 是唯一事实源（synced from `@kdocs/kdesign-theme@2.4.8`），与 `tokens-reference.md` 和 `tokens.json` 同源，不要手写或修改值。

文件已包含 `:root`（Light）和 `[data-theme="dark"]` 两个选择器块，无需手动拆分。色板使用 RGB 三元组架构（如 `--kd-color-blue-6: 31, 105, 224`），语义色通过 `rgba(var(--kd-color-xxx-N), alpha)` 引用色板变量，切换主题时色板自动传导。

## 子文件索引

| 文件 | 内容 | 何时查阅 |
|---|---|---|
| [browser-baseline.md](browser-baseline.md) | 浏览器兼容基线（Chromium 104）+ CSS 特性黑白名单 | 生成任何 CSS 时 |
| [tokens-reference.md](tokens-reference.md) | CSS 变量完整速查表 | 编写任何样式时 |
| [icons.md](icons.md) | KDicon-pro 图标规格、颜色、检索流程、命名转换 | 需要使用图标时 |
| [icons/kdicon-pro-quick-index.md](icons/kdicon-pro-quick-index.md) | 184 条高频图标速查索引 | 图标检索第一级 |
| [icons/kdicon-pro-full-index.md](icons/kdicon-pro-full-index.md) | 9438 条完整母体索引 | 图标检索第二级（quick 未命中时） |
| [multi-theme.md](multi-theme.md) | Light/Dark 主题 + 多品牌色 | 需要考虑主题切换时 |
| [accessibility.md](accessibility.md) | WCAG AA 对比度 + 键盘可访问性 | 所有设计输出前自检 |
| [i18n.md](i18n.md) | 多语言/RTL 布局约束 | 涉及多语言场景时 |

## 机器可读 Token

完整 Token JSON 文件：[tokens.json](tokens.json)
