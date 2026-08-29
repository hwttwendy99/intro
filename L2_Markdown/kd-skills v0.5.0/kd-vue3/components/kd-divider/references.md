# KdDivider · API 参考

导入均来自 **`@kdocs/kdesign-vue3`**。

## 样式（按需引入）

```text
@kdocs/kdesign-vue3/es/components/divider/style/css
```

```ts
import '@kdocs/kdesign-vue3/es/components/divider/style/css'
import '@kdocs/kdesign-vue3/lib/components/divider/style/css'
```

## 类型导入示例

```ts
import type { DividerInstance, DividerProps } from '@kdocs/kdesign-vue3'
```

## `KdDivider` Props

| 属性 | 说明 | 类型 / 约束 | 默认值 |
|------|------|----------------|--------|
| `direction` | 方向 | `horizontal` \| `vertical` | `horizontal` |
| `content-position` | 文案在横线上的位置 | `left` \| `center` \| `right` | `center` |
| `border-style` | 线型 | CSS `border-style` | `solid` |

## `KdDivider` Slots

| 名称 | 说明 |
|------|------|
| `default` | 分割线中间文案（**`horizontal`** 时有效） |
