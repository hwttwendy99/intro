# KdRangePanel · API 参考

**`rangePanelProps`** 由 **`rangePickerPropsObj`** 与 **`panelCommonProps`** 合并而成。**`rangePanelEmits`** 在 **`panelEmits`** 上扩展 **`clear`**；**`update:modelValue`** 与 **`confirm`** 的载荷为 **`PickerMultipleValue`**。

纯面板无输入触发器、无弹层：与 **`commonProps`** 里和触发器 / 弹层相关的项（如 **`width`**、**`popper-class`**、**`append-to`**、**`teleported`** 等）仅保持类型兼容，不参与实际 UI，说明口径与 [Date Panel](https://kdesign.kdocs.cn/vue3/zh-CN/component/date-panel) 文档中「通用 Attributes」一致。

## 样式（按需引入）

```ts
import '@kdocs/kdesign-vue3/es/components/range-panel/style/css'
```

将路径中的 `es` 换成 `lib` 可对应构建产物中的 `lib` 入口（按需样式文件名一致）。

## 类型

```ts
import type {
  DisabledTimeProps,
  PickerMultipleValue,
  RangePanelInstance,
  RangePanelProps,
  RangePickerType,
  RangeType,
} from '@kdocs/kdesign-vue3'
```

## Props（要点）

| 属性 | 说明 |
|------|------|
| `model-value` / `v-model` | 区间，一般为两项；未选时默认 `[]` |
| `type` | `daterange` \| `weekrange` \| `monthrange` \| `quarterrange` \| `yearrange` \| `timerange` \| `datetimerange`；默认 `daterange` |
| `placeholder` | 二元数组；默认 `[]` |
| `default-value` | 初始区间定位 |
| `show-header` | 子面板顶栏；默认 `true` |
| `show-footer` | 是否展示底部「清空 / 确认」等操作区；**默认 `false`**（与 **`KdRangePicker`** 面板默认 **`show-footer`** 为 **`true`** 不同） |
| `same-date-expand` | 与 **`KdRangePicker`** 相同语义；**`datetimerange` 不生效** |
| `separator` | 无触发器 UI，属性仅作类型兼容 |
| `disabled-date` / `disabled-time` | 区间下 **`disabled-time`** 可带第二参数 **`start`** \| **`end`**；**`datetimerange`** 内时间禁用会按当前编辑端注入第二参数 |
| `value-format` / `model-value-mode` | 与日期选择器族一致 |

**`type="datetimerange"`**：无独立起点/终点触发器时交互与 **`KdRangePicker`** 不同，官方文档建议在 Panel 形态下谨慎接入。

## Emits

与 **`rangePanelEmits`** 类型相比，**`KdRangePanel` 当前实现**向父级实际触发的主要是下表所列事件；**`panel-change`**、**`cell-hover`**、**`cell-leave`** 由子面板进入组合逻辑后在内层处理（用于双栏游标与区间预览），**不会以同名事件向父组件透出**。

| 事件名 | 说明 |
|--------|------|
| `update:modelValue` | 区间值同步；日历 / 时间选择过程中与 **`pick`** 常成对出现 |
| `pick` | 区间选择过程中，两端或时间轴更新后的区间载荷（**`PickerMultipleValue`**） |
| `confirm` | 底部确认（需 **`show-footer`** 且区间完整） |
| `clear` | 在 **`show-footer`** 为 **`true`** 且为日期类区间时，点击底部清空链接触发；随后 **`update:modelValue`** 为 **`[]`** |
