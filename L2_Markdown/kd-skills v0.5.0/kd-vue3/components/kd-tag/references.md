# KdTag · API 参考

导入均来自 **`@kdocs/kdesign-vue3`**。

## 样式（按需引入）

```text
@kdocs/kdesign-vue3/es/components/tag/style/css
```

```ts
import '@kdocs/kdesign-vue3/es/components/tag/style/css'
import '@kdocs/kdesign-vue3/lib/components/tag/style/css'
```

## 类型导入示例

```ts
import type { TagProps } from '@kdocs/kdesign-vue3'
```

## `KdTag` Props（摘要）

| 属性 | 说明 | 类型 / 约束 | 默认值 |
|------|------|----------------|--------|
| `text` | 文案 | `string` | — |
| `closable` | 可关闭 | `boolean` | `false` |
| `color` | 背景色 | `string` | `''` |
| `css-style` | 行内样式对象 | `object` | — |
| `prefix-icon` | 前缀图标 | 图标组件 | — |
| `icon-color` | 图标色 | `string` | — |
| `size` | `medium` \| `small` \| `''` | `string` | `''` |
| `disabled` | 禁用 | `boolean` | `false` |
| `checked` | 选中态（配合 `checkable`） | `boolean` | `false` |
| `checkable` | 是否可选 | `boolean` | `false` |

## `KdTag` Emits

| 事件名 | 载荷 |
|--------|------|
| `close` | `MouseEvent` |
| `change` | `MouseEvent` |

## `KdTag` Slots

| 名称 | 说明 |
|------|------|
| `default` | 标签内容（可与 `text` 二选一） |
