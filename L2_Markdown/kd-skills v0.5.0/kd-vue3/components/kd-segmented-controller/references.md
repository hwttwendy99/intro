# KdSegmentedController / KdSegmentedItem · API 参考

导入均来自 **`@kdocs/kdesign-vue3`**。

## 样式（按需引入）

```text
@kdocs/kdesign-vue3/es/components/segmented-controller/style/css
```

```ts
import '@kdocs/kdesign-vue3/es/components/segmented-controller/style/css'
import '@kdocs/kdesign-vue3/lib/components/segmented-controller/style/css'
```

## 类型导入示例

```ts
import type { SegmentedControllerProps } from '@kdocs/kdesign-vue3'
```

## `KdSegmentedController` Props

| 属性 | 说明 | 类型 / 约束 | 默认值 |
|------|------|----------------|--------|
| `model-value` / `v-model` | 激活项 `name` 列表 | `string[]` | — |
| `multi` | 是否多选高亮 | `boolean` | `false` |
| `active` | 兼容旧 API | `string` \| `string[]` | — |

## `KdSegmentedController` Emits

| 事件名 | 载荷 |
|--------|------|
| `update:modelValue` | `string[]` |
| `change` | `string[]` |

## `KdSegmentedItem` Props（摘要）

| 属性 | 说明 | 类型 / 约束 | 默认值 |
|------|------|----------------|--------|
| `name` | 唯一标识（必填） | `string` | — |
| `text` | 文案 | `string` | — |
| `disabled` | 禁用 | `boolean` | `false` |
| `icon` | 图标 | 图标组件 | — |
| `tooltip` | Tooltip 配置 | `object`（与 Tooltip 能力对齐） | — |
| `icon-config` | 图标附加配置 | `object` | 默认颜色等 |

## `KdSegmentedItem` Emits

| 事件名 | 载荷 |
|--------|------|
| `change` | `name`，`active` |
