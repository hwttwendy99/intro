---
name: kd-vue3
description: "@kdocs/kdesign-vue3 Vue3 组件 API、Props/Emits/Slots 表与 SFC 示例。输出目标为 Vue3 时加载。Keywords: Vue3, Composition API, @kdocs/kdesign-vue3, kd-*, component API, props."
version: 1.5.0
---

# KDesign Vue3 组件 API（@kdocs/kdesign-vue3）

> **定位**：本 Skill 用于生成 **Vue3 代码**，提供 `@kdocs/kdesign-vue3` 组件库的完整 API 与 SFC 示例。
> **如果任务是输出 HTML 设计稿**，请使用 `kd-components`（HTML+CSS 仿真规格）。
> **如果任务是输出 React 代码**，请使用 `kd-react`。
> **组件选型判断** → 参考 [kd-design-language/component-decision.md](../kd-design-language/component-decision.md)
> **Modal 组合模式（C1-C3 分档、字重体系等）** → 参考 [kd-patterns/modal-pattern.md](../kd-patterns/modal-pattern.md)——生成含 Dialog 的页面时必读。
> **命名注意**：设计模式层（`modal-pattern.md`）中的「Modal」概念，在 Vue3 技术栈中对应 **`KdDialog`** 组件（`<kd-dialog>`），**不存在 `KdModal`**。生成 Vue3 弹窗代码时，将设计文档中所有 "Modal" 映射为 `KdDialog`。
> **上下文约束（Tabs size、控件尺寸一致性等）** → 参考 [kd-design-language/context-constraints.md](../kd-design-language/context-constraints.md)——生成含多组件组合时必读。

本 Skill **自包含**：完整的 API 参考、场景示例与最佳实践均在 **本 Skill 目录下**，可脱离项目中的源码单独使用。

## 文档位置（Skill 内）

| 路径 | 说明 |
|------|------|
| `components/kd-<slug>/references.md` | 组件 API 参考（Props / Emits / Slots / Expose / 样式路径） |
| `components/kd-<slug>/examples.md` | 组件高频场景代码片段 |
| `best-practices/styles.md` | 样式引入路径、插件接管判断 |
| `best-practices/forms.md` | 表单字段、校验、提交流程 |
| `best-practices/dialog-workflow.md` | 弹窗异步提交闭环 |
| `plugins/references.md` | `KDesignVue3Resolver` 选项、unplugin 参数参考 |
| `plugins/examples.md` | Vite / Webpack 构建配置片段 |

以上路径均相对于本 Skill 根目录（`.cursor/skills/kd-vue3/`）。回答组件用法时**以这些文档为准**。

## 何时加载本 Skill

- 用户明确要求输出 Vue3 代码
- 用户提及 `@kdocs/kdesign-vue3`、`Composition API`、Vue3 组件
- 用户使用 `kd-*` kebab-case 标签且上下文为 Vue
- AGENTS.md 输出目标判定为 `vue3`

**不加载本 Skill 的情况**：输出 HTML 设计稿（走 kd-components）、输出 React 代码（走 kd-react）、输出 Vue2 代码（走 kd-vue2）、输出 QT JSON（走 kd-qt-json）。

## 何时读取文档

- 用户询问某个组件的用法、属性或示例 → 读取 `components/kd-<slug>/references.md`（API 速查）或 `examples.md`（场景代码）。
- 用户问安装、引入、样式、构建插件 → 读取 `plugins/` 或 `best-practices/styles.md`。
- 用户问表单/弹窗最佳实践 → 读取 `best-practices/` 对应文件。
- 用户泛问"有哪些组件" → 参考下方组件清单，再按需读取。

## 组件清单

已收录 **45** 个组件（按字母序）：

avatar · badge · button · cascader · checkbox · config-provider · date-panel · date-picker · date-time-panel · date-time-picker · dialog · divider · dropdown · empty · image · input · input-number · link · loading · markdown · menu · message · message-banner · navigation · pagination · popover · progress · radio · range-panel · range-picker · segmented-controller · select · skeleton · slider · split-button · steps · switch · tag · text · textarea · time-panel · time-picker · tooltip · tree · user-guide

组件目录与标签对应：`components/kd-button/` → `<kd-button>` 组件。

## 安装与引入（摘要）

以 `plugins/` 与 `best-practices/styles.md` 为准，核心如下：

- 安装：`npm i @kdocs/kdesign-vue3 @kdocs/kdesign-theme --registry=http://registry.npm.wps.cn`
- 按需引入：`import { KdButton } from '@kdocs/kdesign-vue3'`
- 主题：`import '@kdocs/kdesign-theme/default.css'`
- 按需样式：`import '@kdocs/kdesign-vue3/es/components/<slug>/style/css'`
- 推荐使用 `unplugin-vue-components` + `KDesignVue3Resolver()` 自动注入样式

## 全局编码约定

- **包名**：`@kdocs/kdesign-vue3`
- **引入**：按需命名导出，避免默认全量导入整个库
- **模板**：标签使用 `kd-` 前缀 kebab-case（如 `<kd-button>`、`<kd-input>`）
- **脚本**：推荐 `<script setup lang="ts">`
- **类型**：优先使用包内导出的 `*Props`、`*Instance` 类型
- **样式**：按需路径模式 `@kdocs/kdesign-vue3/es/components/<slug>/style/css`

## 使用流程

1. **确定组件**：根据用户需求从组件清单中确定要用的组件。组件选型可参考 [kd-design-language/component-decision.md](../kd-design-language/component-decision.md)。
2. **确定图标**：若页面需要图标，按 `AGENTS.md` 图标获取协议检索 KDicon-pro 索引（先 grep [quick-index](../kd-foundation/icons/kdicon-pro-quick-index.md)，未命中再 grep [full-index](../kd-foundation/icons/kdicon-pro-full-index.md)），确定英文名后：
   - 安装：Resolver 自动处理（`KdIcon*` → `@kdocs/kdesign-icons-vue3-pro`）
   - 使用：英文名 → PascalCase → `KdIcon` 前缀，如 `<KdIconClock />`、`:prefix-icon="KdIconMagnifier"`
   - 确认：curl CDN 获取 SVG 预览（`https://global-volc.wpscdn.cn/icons/pro/{英文名}.svg`），确保图形语义匹配
   - 命名转换规则详见 [kd-foundation/icons.md](../kd-foundation/icons.md) 的「命名转换规则」
3. **读取 API**：打开 `components/kd-<slug>/references.md`，查阅 Props / Emits / Slots / Expose 和样式路径。
4. **查看示例**：需要代码参考时，打开同目录下的 `examples.md`，按用户场景选取或组合。
5. **最佳实践**：涉及表单/弹窗/样式时，读取 `best-practices/` 对应文件。
6. **安装/构建**：若用户未配置项目，说明安装与构建插件配置（见 `plugins/`）。

回答时请引用文档中的内容，避免编造 API 或示例。

## 版本与文档

- 组件语义、边界行为、实验特性以官方文档与当前安装包类型为准
- 官方文档：<https://kdesign.kdocs.cn/vue3/zh-CN/>
