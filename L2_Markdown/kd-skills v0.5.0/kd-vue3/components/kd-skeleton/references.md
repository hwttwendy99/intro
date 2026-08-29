# KdSkeleton / KdSkeletonItem · API 参考

导入均来自 **`@kdocs/kdesign-vue3`**。

## 样式（按需引入）

```text
@kdocs/kdesign-vue3/es/components/skeleton/style/css
```

```ts
import '@kdocs/kdesign-vue3/es/components/skeleton/style/css'
import '@kdocs/kdesign-vue3/lib/components/skeleton/style/css'
```

## 类型导入示例

```ts
import type { SkeletonItemProps, SkeletonProps } from '@kdocs/kdesign-vue3'
```

## `KdSkeleton` Props

| 属性 | 说明 | 类型 / 约束 | 默认值 |
|------|------|----------------|--------|
| `loading` | 是否显示骨架 | `boolean` | `true` |
| `animated` | 是否动画 | `boolean` | `true` |
| `count` | 重复块数 | `number` | `1` |
| `rows` | 行数（无模板插槽时） | `number` | `4` |
| `throttle` | 延迟显示（毫秒） | `number` | — |
| `size` | `large` \| `medium` | `string` | — |

## `KdSkeleton` Slots

| 名称 | 说明 |
|------|------|
| `template` | **`loading`** 为 `true` 时渲染的骨架模板（可含 **`kd-skeleton-item`**） |
| `default` | **`loading`** 为 `false` 时展示的真实内容 |

## `KdSkeletonItem` Props

| 属性 | 说明 | 类型 / 约束 | 默认值 |
|------|------|----------------|--------|
| `variant` | `circle` / `rect` / `text` / `h1` / `image` / `button` / `title` 等 | `string` | `p` |
| `size` | `x-large` ~ `small` | `string` | `medium` |
