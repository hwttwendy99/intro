---
name: kd-vue2
description: "@kdocs/kdesign-vue Vue2 组件 API、Attributes/Events/Slots 表。输出目标为 Vue2 时加载。Keywords: Vue2, Options API, @kdocs/kdesign-vue, kd-*, component API, attributes."
version: 1.0.0
---

# KDesign Vue2 组件 API（@kdocs/kdesign-vue）

> **定位**：本 Skill 用于生成 **Vue2 代码**，提供 `@kdocs/kdesign-vue` 组件库的完整 API 参考。
> **如果任务是输出 HTML 设计稿**，请使用 `kd-components`（HTML+CSS 仿真规格）。
> **如果任务是输出 React 代码**，请使用 `kd-react`。
> **如果任务是输出 Vue3 代码**，请使用 `kd-vue3`。
> **组件选型判断** → 参考 [kd-design-language/component-decision.md](../kd-design-language/component-decision.md)
> **Modal 组合模式（C1-C3 分档、字重体系等）** → 参考 [kd-patterns/modal-pattern.md](../kd-patterns/modal-pattern.md)——生成含 Dialog 的页面时必读。
> **命名注意**：设计模式层（`modal-pattern.md`）中的「Modal」概念，在 Vue2 技术栈中对应 **`KdDialog`** 组件（`<kd-dialog>`），**不存在 `KdModal`**。生成 Vue2 弹窗代码时，将设计文档中所有 "Modal" 映射为 `KdDialog`。
> **上下文约束（Tabs size、控件尺寸一致性等）** → 参考 [kd-design-language/context-constraints.md](../kd-design-language/context-constraints.md)——生成含多组件组合时必读。

本 Skill **自包含**：完整的 API 参考均在 **本 Skill 目录下**，可脱离项目中的源码单独使用。

## 文档位置（Skill 内）

| 路径 | 说明 |
|------|------|
| `components/kd-<slug>/references.md` | 组件 API 参考（Attributes / Events / Slots / Methods） |

以上路径均相对于本 Skill 根目录（`.cursor/skills/kd-vue2/`）。回答组件用法时**以这些文档为准**。

## 何时加载本 Skill

- 用户明确要求输出 Vue2 代码
- 用户提及 `@kdocs/kdesign-vue`、`Options API`、Vue2 组件
- 用户使用 `kd-*` kebab-case 标签且上下文为 Vue2
- AGENTS.md 输出目标判定为 `vue2`
- 场景 Skill `tech-stack` 声明为 `vue2`

**不加载本 Skill 的情况**：输出 HTML 设计稿（走 kd-components）、输出 React 代码（走 kd-react）、输出 Vue3 代码（走 kd-vue3）、输出 QT JSON（走 kd-qt-json）。

## 何时读取文档

- 用户询问某个组件的用法、属性或示例 → 读取 `components/kd-<slug>/references.md`
- 用户泛问"有哪些组件" → 参考下方组件清单，再按需读取

## 组件清单

已收录 **62** 个组件（按字母序）：

alert · avatar · backtop · badge · breadcrumb · button · calendar · card · carousel · cascader · checkbox · collapse · color-picker · container · date-picker · date-time-picker · descriptions · dialog · divider · drawer · dropdown · empty · form · icon · image · infinite-scroll · input · input-number · layout · link · loading · menu · menu-button · message · message-box · navigation · notification · page-header · pagination · popconfirm · popover · progress · radio · rate · result · segmented-controller · select · side-panel · skeleton · slider · steps · switch · table · tabs · tag · textarea · time-picker · timeline · tooltip · transfer · tree · upload

组件目录与标签对应：`components/kd-button/` → `<kd-button>` 组件。

## 安装与引入

- 安装：`npm i @kdocs/kdesign-vue`（内部 registry）
- 完整引入：

```js
import Vue from 'vue'
import KDesignVue from '@kdocs/kdesign-vue'
import '@kdocs/kdesign-vue/lib/theme/index.css'

Vue.use(KDesignVue)
```

- 按需引入（配合 `babel-plugin-component`）：

```js
import { KdButton, KdSelect } from '@kdocs/kdesign-vue'
```

## 全局编码约定

- **包名**：`@kdocs/kdesign-vue`
- **Vue 版本**：Vue 2.x（Options API）
- **模板**：标签使用 `kd-` 前缀 kebab-case（如 `<kd-button>`、`<kd-input>`）
- **双向绑定**：Dialog 等组件使用 `.sync` 修饰符（如 `:visible.sync="dialogVisible"`），而非 Vue3 的 `v-model:`
- **事件**：使用 `@事件名` 或 `v-on:事件名`
- **引入**：按需命名导出，避免全量导入

## 与 Vue3 版本的关键差异

| 差异点 | Vue2 (`@kdocs/kdesign-vue`) | Vue3 (`@kdocs/kdesign-vue3`) |
|--------|----------------------------|------------------------------|
| 双向绑定 | `:visible.sync="val"` | `v-model="val"` |
| 组件注册 | `Vue.use()` / `Vue.component()` | `app.use()` / `app.component()` |
| 脚本风格 | Options API | Composition API / `<script setup>` |
| 样式引入 | `lib/theme/index.css` | `@kdocs/kdesign-theme/default.css` |
| Dialog 组件名 | `KdDialog` / `<kd-dialog>` | `KdDialog` / `<kd-dialog>` |

## 使用流程

1. **确定组件**：根据用户需求从组件清单中确定要用的组件。组件选型可参考 [kd-design-language/component-decision.md](../kd-design-language/component-decision.md)。
2. **确定图标**：若页面需要图标，按 `AGENTS.md` 图标获取协议检索 KDicon-pro 索引。
3. **读取 API**：打开 `components/kd-<slug>/references.md`，查阅 Attributes / Events / Slots / Methods。
4. **编写代码**：基于 API 参考编写 Vue2 Options API 风格的组件代码。

回答时请引用文档中的内容，避免编造 API 或示例。

## 版本与文档

- 官方文档：<https://kdesign.kdocs.cn/vue/>
- API 数据来源：从官方文档站自动提取
