# KdTimePicker · API 参考

与 **`KdDatePicker`** 共用 **`commonProps`**；封装层将 **`type`** 固定为 **`time`**，并增加 **`show-footer`**。

## 样式（按需引入）

```ts
import '@kdocs/kdesign-vue3/es/components/time-picker/style/css'
```

```ts
import '@kdocs/kdesign-vue3/lib/components/time-picker/style/css'
```

## 类型

```ts
import type {
  DisabledTimeProps,
  PickerValue,
  TimePickerInstance,
  TimePickerProps,
} from '@kdocs/kdesign-vue3'
```

## Props（要点）

| 属性 | 说明 |
|------|------|
| `model-value` / `v-model` | 当前时间值 |
| `type` | 封装内为 **`time`** |
| `value-format` / `model-value-mode` | 与通用选择器一致 |
| `placeholder` / `default-value` | 占位与初始定位 |
| `show-footer` | 是否显示底部操作区（如「此刻」） |
| `disabled-time` | `(current: Date) => DisabledTimeProps` |
| `disabled` / `readonly` / `clearable` / `size` / `width` / `error` | 通用 |
| `popper-class` / `popper-style` / `append-to` / `teleported` / `show-arrow` | 弹层 |
| `validate-event` | 表单校验 |

**`disabled-date`** 对纯时间选择无日历单元格时不生效。

## Emits

| 事件名 | 说明 |
|--------|------|
| `update:modelValue` | 值变化 |
| `change` | 确认后 |
| `visible-change` | 面板显隐 |
| `clear` | 清空 |
| `focus` | 聚焦 |
| `blur` | 失焦 |
