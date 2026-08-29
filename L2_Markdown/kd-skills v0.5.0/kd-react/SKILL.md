---
name: kd-react
description: "@kdocs/kdesign React 组件 API、Props 表与 JSX 示例。输出目标为 React 时加载。Keywords: React, JSX, @kdocs/kdesign, component API, props."
version: 1.0.0
---

# KDesign React 组件 API（@kdocs/kdesign）

> **定位**：本 Skill 用于生成 **React 代码**，提供 `@kdocs/kdesign` 组件库的完整 API 与 JSX 示例。
> **如果任务是输出 HTML 设计稿**，请使用 `kd-components`（HTML+CSS 仿真规格）。
> **如果任务是输出 Vue3 代码**，请使用 `kd-vue3`。
> **组件选型判断** → 参考 [kd-design-language/component-decision.md](../kd-design-language/component-decision.md)
> **Modal 组合模式（C1-C3 分档、字重体系等）** → 参考 [kd-patterns/modal-pattern.md](../kd-patterns/modal-pattern.md)——生成含 Modal 的页面时必读。
> **上下文约束（Tabs size、控件尺寸一致性等）** → 参考 [kd-design-language/context-constraints.md](../kd-design-language/context-constraints.md)——生成含 Tabs / 表格 / 多列表单时必读。

本 Skill **自包含**：完整的 API 参考与场景示例均在 **本 Skill 目录下**，可脱离项目中的 site 目录单独使用。

## 文档位置（Skill 内）

| 路径 | 说明 |
|------|------|
| `components/<name>/references.md` | 组件 API 参考（Props / Events / Methods 表格、类型声明等） |
| `components/<name>/examples.md` | 组件分场景 JSX 示例 |
| `home.md` | 快速上手、安装、引入方式 |
| `changelog.md` | 更新日志 |

以上路径均相对于本 Skill 根目录（`.cursor/skills/kd-react/`）。回答组件用法时**以这些文档为准**。

## 何时加载本 Skill

- 用户明确要求输出 React 代码
- 用户提及 `@kdocs/kdesign`、`JSX`、React 组件
- AGENTS.md 输出目标判定为 `react`

**不加载本 Skill 的情况**：输出 HTML 设计稿（走 kd-components）、输出 Vue 代码（走 kd-vue2/kd-vue3）、输出 QT JSON（走 kd-qt-json）。

## 何时读取文档

- 用户询问某个组件的用法、属性或示例 → 读取 `components/<name>/references.md`（API 速查）或 `examples.md`（场景代码）。
- 用户问安装、引入、主题时 → 读取 `home.md`。
- 用户泛问"有哪些组件"或写页面需要选组件时 → 可先参考下方组件清单，再按需读取对应文档。

## 组件清单

**基础组件**（components/）：
avatar、badge、breadcrumbs、button、checkbox、date-picker、divider、dropdown、empty、form、icon、image、input、input-number、link、list、loading、markdown、menu、message、modal、navigation、popover、progress、radio、select、segmented、side-panel、skeleton、switch、table、tabs、tag、textarea、time-picker、tooltip、tree。

**AI 组件**（components/）：
ai-badge、ai-button、ai-loading、ai-processing。

组件目录与组件名对应：`components/button/` → Button 组件，`components/ai-button/` → AIButton 组件。

## 安装与引入（摘要）

以 **home.md** 为准，核心如下：

- 安装：`npm i @kdocs/kdesign @kdocs/kdesign-theme --registry=http://registry.npm.wps.cn`
- 常规引入：`import { Button } from '@kdocs/kdesign'`；入口引入主题：`import '@kdocs/kdesign-theme/default.css'`
- weboffice 等需按需引用时：`import Button from '@kdocs/kdesign/es/components/button'`，主题：`import '@kdocs/kdesign-theme/src/default.less'`

## 使用流程

1. **确定组件**：根据用户需求从组件清单中确定要用的组件（及是否用 AI 组件）。组件选型可参考 [kd-design-language/component-decision.md](../kd-design-language/component-decision.md)。
2. **确定图标**：若页面需要图标，按 `AGENTS.md` 图标获取协议检索 KDicon-pro 索引（先 grep [quick-index](../kd-foundation/icons/kdicon-pro-quick-index.md)，未命中再 grep [full-index](../kd-foundation/icons/kdicon-pro-full-index.md)），确定英文名后：
   - 安装：`npm install @kdocs/kdesign-icons-react --save`
   - 导入：英文名 snake_case → PascalCase，如 `import { Clock, Star, KnowledgeBase } from '@kdocs/kdesign-icons-react'`
   - 使用：`<Clock size={16} />` 或作为 props 传入 `prefixIcon={<Clock />}`
   - 确认：curl CDN 获取 SVG 预览（`https://global-volc.wpscdn.cn/icons/pro/{英文名}.svg`），确保图形语义匹配
   - 命名转换规则详见 [kd-foundation/icons.md](../kd-foundation/icons.md) 的「命名转换规则」
3. **读取 API**：打开 `components/<name>/references.md`，查阅 Props / Events / Methods 表格和类型声明。
4. **查看示例**：需要代码参考时，打开同目录下的 `examples.md`，按用户场景选取或组合。
5. **给出答案**：按文档中的 API、可选值、默认值和示例代码回答或生成代码。
6. **安装/引入**：若用户未配置过项目，同时说明安装与主题引入方式（见上节或 home.md）。

回答时请引用文档中的内容，避免编造 API 或示例。
