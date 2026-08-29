# KdDateTimePanel · API 参考

由 **`dateTimePickerPropsObj`** 与 **`panelCommonProps`** 合并，并增加 **`range-calendar-value`**、**`hover-date`**（与单段 **`model-value`** 解耦，用于区间高亮等）。

## 样式（按需引入）

```ts
import '@kdocs/kdesign-vue3/es/components/date-time-panel/style/css'
```

## 类型

```ts
import type {
  DateTimePanelInstance,
  DateTimePanelProps,
  PickerModelValue,
  PickerMultipleValue,
  PickerValue,
} from '@kdocs/kdesign-vue3'
```

## Props（要点）

| 属性 | 说明 |
|------|------|
| `model-value` / `v-model` | 当前段日期时间 |
| `type` | **`datetime`** |
| `range-calendar-value` | 区间 `[start, end]` 时用于日历范围展示 |
| `hover-date` | 悬停高亮 |
| `value-format` / `model-value-mode` | 通用 |
| `disabled-date` / `disabled-time` | 日、时刻禁用 |
| `show-header` / `show-footer` | 面板结构 |
| `disabled` / `readonly` / `clearable` / `validate-event` | 通用 |

## Emits

与 **`panelEmits`** 一致：**`update:modelValue`**、**`pick`**、**`confirm`**、**`panel-change`**、**`cell-hover`**、**`cell-leave`**。
