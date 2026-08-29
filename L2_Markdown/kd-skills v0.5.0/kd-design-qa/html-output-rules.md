# HTML 输出格式规范

## 文件结构

每个 HTML 设计稿必须使用以下标准结构：

```html
<!DOCTYPE html>
<html lang="zh-CN" data-theme="light" data-platform="web">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[场景名称] - KDesign</title>
  <style>
    /* ══ KDesign Token 变量 ══
       直接复制 kd-components/_css/tokens.css 的完整内容到此处。
       tokens.css 是唯一事实源（synced from @kdocs/kdesign-theme@2.4.8），
       已包含 :root (Light) 和 [data-theme="dark"] 两个选择器块，
       不要手写或修改变量值。 */
    /* ... 复制 _css/tokens.css 完整内容 ... */

    /* ══ 全局重置 ══
       直接复制 kd-components/_css/reset.css 的完整内容到此处。 */

    /* ══ 组件样式 ══
       按页面用到的组件，从 kd-components/_css/ 复制对应的 .css 文件内容。
       也可直接复制 _css/all.css 包含全部组件。
       不要修改组件样式值，不要重写组件 CSS。 */

    /* ══ 页面布局样式（按需编写） ══
       仅在此处编写页面级的 grid/flex 布局、间距、定位等。 */
  </style>
</head>
<body>
  <!-- [Page: 场景名称] -->

  <!-- 页面内容 -->

</body>
</html>
```

> **关键原则**：组件样式从 `_css/*.css` 文件**原样复制**，不得修改值；布局样式按需编写。两者用注释分隔。

## 强制规则

### CSS 变量

1. **Token 变量**：直接复制 `kd-components/_css/tokens.css` 到 `:root {}`，不要手写或修改值
2. **组件样式**：直接复制 `kd-components/_css/*.css` 对应文件，不要重写组件 CSS
3. **布局样式**：仅页面级布局可自行编写，颜色/字号/圆角/阴影必须引用 `var(--kd-*)` 变量

### HTML 结构

1. **使用语义化标签**：`<nav>`、`<main>`、`<aside>`、`<section>`、`<footer>`
2. **组件边界注释**：每个组件块用注释标注类型和变体

```html
<!-- [Button: primary large] -->
<button class="kd-button kd-button-primary kd-button-lg">确认</button>

<!-- [Modal: medium] -->
<div class="kd-modal kd-modal-md">...</div>

<!-- [InfoGroup: 知识库概览] -->
<section class="info-group">...</section>
```

3. **图标使用内联 SVG**（生成时从 CDN curl 获取后内联，HTML 中不保留运行时外部依赖）

```html
<!-- 正确 -->
<svg width="16" height="16" viewBox="0 0 16 16" fill="none"
     stroke="currentColor" stroke-width="1.3"
     stroke-linecap="round" stroke-linejoin="round">
  <polyline points="3,6 8,11 13,6"/>
</svg>

<!-- 禁止 -->
<i class="fa fa-chevron-down"></i>
<link rel="stylesheet" href="https://cdn.../icons.css">
```

### CSS 规则

1. **不使用 `!important`**（除非覆盖状态优先级，如 error border）
2. **不使用 `id` 选择器**（仅用于 ARIA 关联）
3. **使用 class 命名遵循 KDesign 约定**：`kd-[component]-[variant]`
4. **过渡动画使用 Token 时间变量**：`transition: background var(--kd-time-fast) var(--kd-easing-ease)`
5. **浏览器兼容基线 Chromium 104** — 禁止使用以下 CSS 特性：
   - `:has()` 选择器、CSS Nesting（`&`）
   - `color-mix()`、`oklch()`、`oklab()`、`lab()`、`lch()`、`color()` 函数
   - `@container` 容器查询、`subgrid`
   - `dvh`/`svh`/`lvh` 等动态视口单位
   - `text-wrap: balance`、`@scope`、`@starting-style`、`light-dark()`、`anchor()`
   - 完整黑白名单见 [`kd-foundation/browser-baseline.md`](../kd-foundation/browser-baseline.md)

### 根元素属性

| 属性 | 值 | 说明 |
|---|---|---|
| `lang` | `zh-CN` / `en-US` / ... | 内容语言 |
| `data-theme` | `light` / `dark` | 主题 |
| `data-platform` | `web` / `h5` / `miniprogram` | 目标平台 |
| `data-brand` | `wps` / `et` / `wpp` / `pdf` | 产品线品牌色（可选） |

### 视口适配

```html
<!-- Web（1440px 基准） -->
<div class="kd-page" style="width: 1440px; margin: 0 auto;">

<!-- H5（375px 基准） -->
<div class="kd-page" style="width: 375px; margin: 0 auto;">
```

## 禁止事项

- **禁止**在 `<style>` 外使用 `style="color: #xxx"` 硬编码颜色
- **禁止**在 `<style>` 内对组件 CSS（`.kd-*` 选择器）使用硬编码 HEX 色值（如 `#E5E5E5`、`#D4D4D4`、`#F5F5F5`）。组件样式**必须**引用 `var(--kd-*)` 变量。HEX 值唯一允许出现的位置是 `:root {}` 变量定义块，且该块必须从 `_css/tokens.css` 完整复制
- **禁止**手写组件 CSS 规则。所有 `.kd-*` 选择器的样式**必须**来自 `_css/*.css` 的原样复制，复制后的 CSS 中必须保留 `/* @kd-registry: {component} v2.0 */` 指纹注释
- **禁止**引入外部 CSS 框架（Bootstrap/Tailwind/Ant Design）
- **禁止**使用 `<img>` 引用外部图片 URL（设计稿应自包含）
- **禁止**通过 `<script src="">` 引入外部 JS 框架或库（React、Vue、jQuery、Lodash 等）
- **禁止**使用 `<iframe>` 嵌入外部内容
- **禁止**生成超过 2000 行的单文件（应拆分为多个场景文件）

## 交互脚本

HTML 设计稿**不是纯静态页面**——组件交互通过 KDesign 内部脚本实现，与组件 CSS 同等地位。

### 确定性脚本（直接复制，不要重写）

| 脚本 | 覆盖组件 | 引入方式 |
|------|---------|---------|
| `kd-components/_css/interactions.js` | Tabs、Navigation、Select、Checkbox、Radio、Switch | 在 `</body>` 前内联或外链 |
| 场景 `_js/*.js`（如 admin-console） | 场景特有交互（分页、命令栏折叠等） | 按场景 Skill 说明引入 |

页面包含 Tabs / Navigation / Select / Checkbox / Radio / Switch 时**必须**引入 `interactions.js`，否则这些组件无法响应点击。

### 自定义交互（按需编写）

当确定性脚本未覆盖的组件需要交互时（如 Modal 开关、Menu 触发、Tooltip 显隐），允许在 `</body>` 前编写内联 `<script>`，但必须遵守：

1. **不引入外部库** — 所有逻辑用原生 JS 实现
2. **事件委托优先** — 参照 `interactions.js` 的模式，在 `document` 上监听
3. **只操作 class / style / display** — 不修改组件 DOM 结构
4. **自包含** — HTML 文件离线可运行，不依赖网络请求

### Checkbox / Radio / Switch 交互

Checkbox / Radio / Switch 通过 `interactions.js` 在 `change` 事件中 toggle `.is-checked` class 实现交互，必须引入该脚本。

## 自包含原则

设计稿必须**离线可用**——浏览器打开 HTML 文件无需网络即可完整渲染和交互。

- **构建时获取 + 内联**是允许的：如 `curl` 从 CDN 拉取 SVG 图标后内联到 HTML
- **运行时外部依赖**是禁止的：HTML 中不保留需要联网加载的 `<link>` / `<script>` / `<img>` 外部 URL

## 文件命名

```
[产品线]-[功能模块]-[状态/平台].html

示例：
wps-knowledge-home-web.html
wps-settings-dialog-web.html
et-table-list-h5.html
```
