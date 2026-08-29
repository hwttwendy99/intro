# KdImage · API 参考

导入均来自 **`@kdocs/kdesign-vue3`**。

## 样式（按需引入）

```text
@kdocs/kdesign-vue3/es/components/image/style/css
```

```ts
import '@kdocs/kdesign-vue3/es/components/image/style/css'
```

```ts
// CommonJS / lib 构建
import '@kdocs/kdesign-vue3/lib/components/image/style/css'
```

## 类型导入示例

```ts
import type { ImageEmits, ImageLoadError, ImageProps } from '@kdocs/kdesign-vue3'
```

**`ImageEmits`** 可用于对 **`@load` / `@error`** 处理器做类型标注；**`ImageLoadError`** 为 **`error`** 事件的载荷类型。

## `KdImage` Props

| 属性 | 说明 | 类型 / 约束 | 默认值 |
|------|------|-------------|--------|
| `src` | 图片地址，同原生 `<img src>` | `string` | `''` |
| `width` | 容器宽度，数字单位 px，字符串可含单位（如 `'100%'`） | `string \| number` | — |
| `height` | 容器高度，数字单位 px，字符串可含单位 | `string \| number` | — |
| `fit` | 图片填充方式，同 CSS `object-fit` | `'' \| 'contain' \| 'cover' \| 'fill' \| 'none' \| 'scale-down'` | `''` |
| `alt` | 原生 `alt` 属性 | `string` | `''` |
| `referrer-policy` | 原生 `referrerpolicy` 属性 | `'' \| 'no-referrer' \| 'no-referrer-when-downgrade' \| 'origin' \| 'origin-when-cross-origin' \| 'same-origin' \| 'strict-origin' \| 'strict-origin-when-cross-origin' \| 'unsafe-url'` | — |
| `crossorigin` | 原生 `crossorigin` 属性 | `'' \| 'anonymous' \| 'use-credentials'` | — |
| `lazy` | 是否启用懒加载（进入视口再请求） | `boolean` | `false` |
| `scroll-container` | 懒加载时监听滚动的容器；CSS 选择器字符串或 DOM 元素 | `string \| HTMLElement` | — |
| `preview-src-list` | 开启预览大图；传入图片 URL 数组，点击图片弹出查看器 | `string[]` | `[]` |
| `z-index` | 图片预览查看器的 z-index | `number` | `2000` |
| `initial-index` | 预览时初始显示的图片下标（不得超过列表长度） | `number` | `0` |
| `placeholder-src` | 加载期间显示的低质量占位图地址（内置渐进式效果） | `string` | `''` |

## `KdImage` Emits

| 事件名 | 载荷 | 触发时机 |
|--------|------|----------|
| `load` | 原生 `Event` | 图片加载成功 |
| `error` | `ImageLoadError` | 图片加载失败 |

### `ImageLoadError` 类型

```ts
interface ImageLoadError extends Error {
  src: string   // 失败的图片地址
  native: Event // 原生 error 事件对象
}
```

## `KdImage` Slots

| 名称 | 说明 |
|------|------|
| `placeholder` | 图片加载中时渲染的占位内容；传入后替代默认 Loading 图标（若同时设置了 `placeholder-src`，也会被此插槽完全覆盖） |
| `error` | 图片加载失败时渲染的内容；传入后替代默认错误提示 |

> `KdImage` 无 `defineExpose`，不提供公开实例方法。

## 预览查看器

当 **`preview-src-list`** 非空时，组件内部自动挂载 `ImageViewer`。可通过 **`initial-index`** 设置打开预览时默认显示第几张，通过 **`z-index`** 控制查看器层级。
