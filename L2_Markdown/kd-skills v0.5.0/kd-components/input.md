# Input 输入框

> **多列布局防溢出规则（所有输出目标共享）** → [context-constraints.md](../kd-design-language/context-constraints.md#多列布局防溢出规则)
> **控件尺寸一致性规则** → [context-constraints.md](../kd-design-language/context-constraints.md#控件尺寸一致性规则)

## 红线：作为 Grid / Flex 子项时

`<input>` 是替换元素，有默认 intrinsic 宽度（~148px）。在多列布局里会**撑破容器**导致溢出。

**硬性要求**（任何把 Input 放到 grid / flex 里的场景）：

```css
/* Grid 父容器 */
.some-grid { display: grid; grid-template-columns: repeat(N, 1fr); gap: 8px; }
.some-grid > * { min-width: 0; }    /* ← 必加，否则最后一列溢出 */

/* Flex 父容器 */
.some-flex { display: flex; gap: 8px; }
.some-flex > * { min-width: 0; flex: 1 1 0; }  /* ← 允许收缩 */
```

- ❌ 反模式：`grid-template-columns: repeat(4, 1fr)` + grid item 无 `min-width: 0` + 内含 Input → 必溢出
- ❌ 反模式：Input 直接写 `width: 148px` 等固定值
- ✅ 正确：Input 外层 `width: 100%`，grid/flex 父容器的直接子项带 `min-width: 0`

> 详细原理与更多场景见 [`kd-layout/web-grid.md#grid--flex-防溢出规则硬性所有布局必读`](../kd-layout/web-grid.md)

## 尺寸规格

| Size | class | 高度 | inner padding | wrap radius |
|---|---|---|---|---|
| Small | `kd-input-small` | 24px | `0` | 4px |
| Medium | `kd-input-medium` | 28px | `2px 0` | 6px |
| Large（默认） | `kd-input-large` | 32px | `4px 0` | 6px |
| X-Large | `kd-input-x-large` | 36px | `6px 0` | 6px |

> Wrap padding 非对称: `0 4px 0 8px`（右 4px，左 8px）
> Inner font-size: 13px（所有 size），line-height: 22px

## 前置/后缀图标（Prefix / Suffix Icon）

Input 支持在输入框内部放置前置图标（prefix）和后缀图标（suffix）。

### 布局结构

```
┌─ .kd-input-wrap ────────────────────────────────┐
│ [prefix-icon]  <input>  [suffix-icon / button] │
└─────────────────────────────────────────────────┘
```

### 规格

| 属性 | class | 位置 | 尺寸 | 颜色 | 说明 |
|---|---|---|---|---|---|
| 前置图标 | `.kd-input-prefix` | input 左侧 | 16x16px | `#757575` (icon-secondary) | 不可点击时为装饰性 |
| 后缀图标 | `.kd-input-suffix` | input 右侧 | 16x16px | `#757575` (icon-secondary) | 不可点击时为装饰性 |
| 可点击图标 | `.kd-input-icon` | prefix 或 suffix 位置 | 16x16px + 4px padding | `#757575` → hover `#555` | 用 `<button>` 包裹 |

> **图标按钮**：Input 内的可点击图标（如搜索、密码显隐切换）使用 `<button class="kd-input-icon">`，必须显式重置 `border: none; background: transparent;`

### HTML 结构

```html
<!-- [Input: 前置图标（装饰性）] -->
<div class="kd-input kd-input-medium">
  <div class="kd-input-wrap">
    <span class="kd-input-prefix">
      <svg width="16" height="16" ...>...</svg>
    </span>
    <input class="kd-input-inner" placeholder="搜索..." />
  </div>
</div>

<!-- [Input: 后缀图标（可点击）] -->
<div class="kd-input kd-input-medium">
  <div class="kd-input-wrap">
    <input class="kd-input-inner" placeholder="搜索..." />
    <button class="kd-input-icon">
      <svg width="16" height="16" ...>...</svg>
    </button>
  </div>
</div>

<!-- [Input: 前置 + 后缀图标] -->
<div class="kd-input kd-input-medium">
  <div class="kd-input-wrap">
    <span class="kd-input-prefix">
      <svg width="16" height="16" ...>...</svg>
    </span>
    <input class="kd-input-inner" placeholder="请输入" />
    <button class="kd-input-icon">
      <svg width="16" height="16" ...>...</svg>
    </button>
  </div>
</div>
```

### 搜索图标 SVG 源码

搜索类 Input 使用 magnifier 图标（16x16px, stroke `#757575`, stroke-width 1），可作为 prefix 或 suffix：

```html
<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M13 7C13 10.3137 10.3137 13 7 13C3.68629 13 1 10.3137 1 7C1 3.68629 3.68629 1 7 1C10.3137 1 13 3.68629 13 7Z" stroke="#757575"/><path d="M11.5 11.5L15 15" stroke="#757575" stroke-linecap="round"/></svg>
```

图标源文件：`_icons/magnifier.svg`

## 状态

| 状态 | 边框 | box-shadow | 说明 |
|---|---|---|---|
| Normal | `#E5E5E5` (line-regular) | 无 | - |
| Hover | `#D4D4D4` (line-medium) | 无 | 变深一档 |
| Focus | `#0A6CFF` (line-public) | **无** | 仅 border-color |
| Error | `#E12F3C` | **none**（显式清除） | 无红色阴影 |
| Disabled | bg `#EBEBEB`, border `#B8B8B8` | 无 | opacity 0.4 |

## HTML 参考

```html
<!-- [Input: medium default] -->
<div class="kd-input kd-input-medium">
  <div class="kd-input-wrap">
    <input class="kd-input-inner" placeholder="请输入内容" />
  </div>
</div>

<!-- [Input: medium error] -->
<div class="kd-input kd-input-medium kd-input-status-error">
  <div class="kd-input-wrap">
    <input class="kd-input-inner" value="错误内容" />
  </div>
</div>
<div class="kd-input-help" style="color: var(--kd-color-text-error); font-size: 12px; margin-top: 4px;">
  请输入有效的邮箱地址
</div>
```

## CSS 来源

完整样式见 [`_css/input.css`](_css/input.css)，生成 HTML 时直接复制该文件内容到 `<style>` 中。
