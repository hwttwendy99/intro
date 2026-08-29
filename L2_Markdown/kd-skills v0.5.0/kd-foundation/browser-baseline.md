# 浏览器兼容基线

> **目标基线：Chromium >= 104**（2022 年 8 月发布）
> 所有 HTML 设计稿输出（组件 CSS + 页面布局 CSS + 内联 JS）均不得使用低于此版本的浏览器不支持的特性。

## CSS 特性黑名单（禁止使用）

以下特性在 Chromium 104 中**不支持或仅实验性支持**，生成代码时一律禁止。

| 禁用特性 | 最低 Chrome 版本 | 替代方案 |
|---|---|---|
| `:has()` 选择器 | 105 | class-based 选择器（`.is-checked`、`.is-disabled`）+ JS toggle |
| `@container` 容器查询 / `cqw`/`cqh` 单位 | 106 | `@media` 媒体查询，或固定宽度 + flex/grid 自适应 |
| 新视口单位 `dvh`/`svh`/`lvh`/`dvw`/`svw`/`lvw` | 108 | `vh`/`vw`（必要时 JS 修正移动端地址栏） |
| `color-mix()` | 111 | 预计算为具体色值，使用 `rgba()`；需要透明度叠加时用 `rgba(var(--kd-color-*), alpha)` |
| `oklch()` / `oklab()` | 111 | `rgb()` / `rgba()` / `hsl()` |
| `color()` 函数 | 111 | `rgb()` / `rgba()` |
| `lab()` / `lch()` | 111 | `rgb()` / `rgba()` / `hsl()` |
| `text-wrap: balance` / `text-wrap: pretty` | 114 | 不使用，或通过 `max-width` + 手动换行控制 |
| `scroll-timeline` / `animation-timeline` | 115 | JS `IntersectionObserver` 或 `scroll` 事件 |
| `subgrid` | 117 | 嵌套独立 `display: grid` 或 flex 布局替代 |
| `@starting-style` | 117 | 初始状态写在默认规则中 + `transition` |
| `@scope` | 118 | BEM class 命名隔离 / 组件前缀 |
| CSS Nesting（`& .child {}` 或 `.parent { .child {} }`） | 120 | 传统写法：手动写完整选择器 `.parent .child {}` |
| `light-dark()` 函数 | 123 | `[data-theme="dark"]` 属性选择器分别声明 |
| CSS `round()` / `mod()` / `rem()` 数学函数 | 125 | `calc()` 或预计算固定值 |
| `anchor()` 锚点定位 | 125 | JS 计算位置 + `position: absolute` |

### 快速判断口诀

> 颜色只用 `rgb/rgba/hsl/hsla` + CSS 变量；
> 选择器不用 `:has()`；
> 布局不用 `@container` / `subgrid`；
> 嵌套规则手写完整选择器；
> 视口单位只用 `vh/vw/vmin/vmax`。

## CSS 特性白名单（允许使用）

以下特性在 Chromium 104 中**已完全支持**，可放心使用。

| 特性 | Chrome 版本 |
|---|---|
| CSS 自定义属性 `var()` | 49 |
| `calc()` | 26 |
| Flexbox `gap` | 84 |
| `:focus-visible` | 86 |
| `inset` 简写 | 87 |
| `aspect-ratio` | 88 |
| Logical properties（`inset-block` 等） | 89 |
| `@layer` (Cascade Layers) | 99 |
| `hwb()` | 101 |
| `@media` Range Syntax（`(width >= 768px)`） | 104 |
| `display: grid` + `grid-template-*` | 57 |
| `clamp()` / `min()` / `max()` | 79 |
| `::backdrop` | 37 |
| `overscroll-behavior` | 63 |
| `-webkit-line-clamp` | 支持（需 `-webkit-` 前缀） |

## AI 生成页面布局 CSS 时的约束

1. **颜色值**：只使用 `rgb()`、`rgba()`、`hsl()`、`hsla()` 和 CSS 变量 `var(--kd-*)`。需要透明度变体时用 `rgba(var(--kd-color-xxx-N), 0.5)` 形式，禁止 `color-mix()`
2. **选择器**：不使用 `:has()`。需要基于子元素状态改变父元素样式时，通过 JS 在父元素上添加 class
3. **嵌套**：不使用 CSS Nesting 语法，所有选择器写完整路径
4. **容器查询**：不使用 `@container`，用 `@media` 或固定断点方案替代
5. **视口单位**：只用 `vh`/`vw`/`vmin`/`vmax`，不用 `dvh`/`svh`/`lvh` 等动态变体
6. **数学函数**：只用 `calc()`、`min()`、`max()`、`clamp()`，不用 `round()`/`mod()`/`rem()`

## QA 扫描关键词

自检时 grep 以下关键词，命中任意一个即为违规：

```
:has(
color-mix(
oklch(
oklab(
lab(
lch(
@container
@scope
@starting-style
@layer  ← 注意：@layer 是允许的，不要误判
light-dark(
anchor(
text-wrap:\s*(balance|pretty)
dvh|svh|lvh|dvw|svw|lvw
```

> `@layer` 在 Chrome 99 已支持，**不在禁止之列**，扫描时注意排除。
