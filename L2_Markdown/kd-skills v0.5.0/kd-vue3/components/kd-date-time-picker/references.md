# KdDateTimePicker · API 参考

在 **`commonProps`** 基础上合并时间封装字段；**`type`** 固定为 **`datetime`**，**`show-footer`** 默认 **`true`**。

## 样式（按需引入）

```ts
import '@kdocs/kdesign-vue3/es/components/date-time-picker/style/css'
```

## 类型

```ts
import type {
  DateTimePickerInstance,
  DateTimePickerProps,
  DisabledTimeProps,
  PickerValue,
} from '@kdocs/kdesign-vue3'
```

## Props（要点）

| 属性 | 说明 |
|------|------|
| `model-value` / `v-model` | 当前日期时间 |
| `type` | 封装内为 **`datetime`** |
| `value-format` / `model-value-mode` | 默认格式常为 `YYYY-MM-DD HH:mm:ss`（未设 `value-format` 时见官方表） |
| `show-footer` | 底部操作区 |
| `disabled-date` | 按日禁用 |
| `disabled-time` | `(current: Date) => DisabledTimeProps` |
| `first-day-of-week` | 周起始 |
| 其余 | 与 **`KdDatePicker`** / **`KdTimePicker`** 通用字段一致（`size`、`width`、`popper-*` 等） |

## Emits

与 **`KdDatePicker`** 相同：**`update:modelValue`**、**`change`**、**`visible-change`**、**`clear`**、**`focus`**、**`blur`**。
