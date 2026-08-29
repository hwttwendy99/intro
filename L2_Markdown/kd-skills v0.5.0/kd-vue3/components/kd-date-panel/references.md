# KdDatePanel · API 参考

在 **`datePickerPropsObj`** 与 **`panelCommonProps`** 上合并：**`show-header`**、**`show-footer`**、**`auto-confirm`**、**`is-date-time`**、**`panel-date`**、**`hover-date`** 等。独立使用时无触发器相关 UI。

## 样式（按需引入）

```ts
import '@kdocs/kdesign-vue3/es/components/date-panel/style/css'
```

## 类型

```ts
import type { DatePanelInstance, DatePanelProps, PickerModelValue, PickerValue } from '@kdocs/kdesign-vue3'
```

## Props（要点）

| 属性 | 说明 |
|------|------|
| `model-value` / `v-model` | 当前值 |
| `type` | `date` \| `week` \| `month` \| `quarter` \| `year` |
| `value-format` / `model-value-mode` | 与选择器一致 |
| `placeholder` / `default-value` | 面板定位（纯面板通常弱化占位） |
| `show-header` | 顶栏（日期子面板常始终有导航栏） |
| `show-footer` | 底部「今天」等区域 |
| `auto-confirm` | 点格是否直接走确认流 |
| `is-date-time` | 与 **`KdDateTimePanel`** 组合时为 `true`；独立 **`KdDatePanel`** 保持 `false` |
| `panel-date` / `hover-date` | 受控对齐与高亮 |
| `disabled` / `disabled-date` | 禁用 |
| `disabled-time` | 纯日期面板无时间轴时不生效 |
| `first-day-of-week` | 周起始 |
| `validate-event` | 表单校验 |

与 **`commonProps`** 中 **`popper-class`**、**`teleported`** 等字段类型兼容，独立面板一般不产生对应视觉效果。

## Emits

| 事件名 | 说明 |
|--------|------|
| `update:modelValue` | `pick` / `confirm` 时同步 |
| `pick` | 选择过程中 |
| `confirm` | 确认路径 |
| `panel-change` | 面板可视区域变化 |
| `cell-hover` / `cell-leave` | 单元格悬停 |
