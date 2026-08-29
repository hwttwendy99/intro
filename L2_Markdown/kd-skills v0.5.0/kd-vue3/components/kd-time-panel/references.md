# KdTimePanel · API 参考

由 **`timePickerPropsObj`** 与 **`panelCommonProps`** 合并，并含 **`is-range`**。

## 样式（按需引入）

```ts
import '@kdocs/kdesign-vue3/es/components/time-panel/style/css'
```

## 类型

```ts
import type { DisabledTimeProps, PickerValue, TimePanelInstance, TimePanelProps } from '@kdocs/kdesign-vue3'
```

## Props（要点）

| 属性 | 说明 |
|------|------|
| `model-value` / `v-model` | 当前时间 |
| `type` | **`time`** |
| `is-range` | 是否处于区间子段语境 |
| `show-header` / `show-footer` | 面板结构 |
| `value-format` / `model-value-mode` | 与通用一致 |
| `disabled-time` | `(current: Date) => DisabledTimeProps` |
| `disabled` / `readonly` / `clearable` / `size` / `error` | 通用 |

## Emits

与 **`KdDatePanel`** 相同（**`panelEmits`**）：**`update:modelValue`**、**`pick`**、**`confirm`**、**`panel-change`**、**`cell-hover`**、**`cell-leave`**。
