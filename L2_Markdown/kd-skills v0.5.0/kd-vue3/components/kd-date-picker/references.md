# KdDatePicker · API 参考

导入来自 **`@kdocs/kdesign-vue3`**。与 **`KdTimePicker`**、**`KdDateTimePicker`**、**`KdRangePicker`** 共用一套通用属性（`commonProps`），再叠加本封装允许的 **`type`** 与单值 **`modelValue`** 语义。

## 样式（按需引入）

路径中目录名为发布包内 **`date-picker`**（整包日期时间组件共用同一样式入口）：

```text
@kdocs/kdesign-vue3/es/components/<组件目录名>/style/css
```

```ts
import '@kdocs/kdesign-vue3/es/components/date-picker/style/css'
```

CommonJS 可将 **`es`** 换为 **`lib`**：

```ts
import '@kdocs/kdesign-vue3/lib/components/date-picker/style/css'
```

## 类型

```ts
import type {
  DatePickerInstance,
  DatePickerProps,
  DisabledTimeProps,
  ModelValueMode,
  PickerModelValue,
  PickerValue,
} from '@kdocs/kdesign-vue3'
```

## Props（常用）

### 与通用选择器一致（节选）

| 属性 | 说明 | 备注 |
|------|------|------|
| `model-value` / `v-model` | 当前值 | `PickerValue` |
| `value-format` | 展示与解析格式（dayjs） | 未设时按 `type` 默认 |
| `model-value-mode` | `date` 输出 `Date`；`formatted` 输出字符串 | 默认 `date` |
| `disabled` | 禁用 | |
| `readonly` | 只读输入 | |
| `clearable` | 可清空 | 默认 `true` |
| `size` | `medium` \| `large` | 以类型为准 |
| `width` | 触发器宽度 | |
| `error` | 错误态 | |
| `placeholder` | 占位 | |
| `default-value` | 无值时面板初始定位 | |
| `popper-class` / `popper-style` | 弹层样式 | |
| `append-to` / `teleported` / `show-arrow` | 弹层挂载与箭头 | |
| `disabled-date` | 按日禁用 | `(date: Date) => boolean` |
| `disabled-time` | 按时分秒禁用 | 纯日期类型通常不涉及 |
| `separator` | 区间分隔符 | 单值选择器少用 |
| `validate-event` | 是否触发表单校验 | |
| `first-day-of-week` | 周起始日 `1`–`7` | |
| `autocomplete` | 原生属性 | 默认 `off` |

### 本封装特有

| 属性 | 说明 | 可选值 | 默认 |
|------|------|--------|------|
| `type` | 面板粒度 | `date` \| `week` \| `month` \| `quarter` \| `year` | `date` |

## Emits

| 事件名 | 说明 |
|--------|------|
| `update:modelValue` | 值变化 |
| `change` | 确认或等价确认后 |
| `visible-change` | 面板显隐 |
| `clear` | 清空 |
| `focus` | 聚焦 |
| `blur` | 失焦 |

## 实例

**`DatePickerInstance`** 可用于 **`ref`** 类型标注；未对外暴露面板控制方法时，以包内类型声明为准。
