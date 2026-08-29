# KdRangePicker · API 参考

**`modelValue`** 类型为 **`PickerMultipleValue`**（一般为两项的数组）。**`rangePickerEmits`** 与单值选择器事件名一致，载荷为区间数组。

## 样式（按需引入）

```ts
import '@kdocs/kdesign-vue3/es/components/range-picker/style/css'
```

将路径中的 `es` 换成 `lib` 可对应构建产物中的 `lib` 入口（按需样式文件名一致）。

## 类型

```ts
import type {
  DisabledTimeProps,
  PickerMultipleValue,
  RangePickerInstance,
  RangePickerProps,
  RangePickerType,
  RangeType,
} from '@kdocs/kdesign-vue3'
```

## Props（要点）

| 属性 | 说明 |
|------|------|
| `model-value` / `v-model` | 区间值；未选时默认 `[]` |
| `type` | `daterange` \| `weekrange` \| `monthrange` \| `quarterrange` \| `yearrange` \| `timerange` \| `datetimerange`；默认 `daterange` |
| `placeholder` | 二元数组：`[开始占位, 结束占位]`；默认 `[]` |
| `default-value` | 初始定位区间 |
| `show-footer` | 是否展示面板底部操作区；**默认 `true`** |
| `same-date-expand` | 同一周期内起点与终点落在同一「天/周/月/季/年」时，将输出区间扩展为该周期的起止边界；**`datetimerange` 不生效**；默认 `false` |
| `separator` | 触发器中间分隔符 |
| `disabled-date` | 按日禁用（无日期面板的类型不生效） |
| `disabled-time` | `(current: Date, type?: 'start' \| 'end') => DisabledTimeProps` |
| 其余 | 与 **`commonProps`** 一致 |

## Emits

| 事件名 | 说明 |
|--------|------|
| `update:modelValue` | 区间值变化 |
| `change` | 确认后 |
| `visible-change` | 显隐 |
| `clear` | 清空 |
| `focus` | `FocusEvent`，可选第二参数 **`RangeType`** |
| `blur` | 失焦 |
