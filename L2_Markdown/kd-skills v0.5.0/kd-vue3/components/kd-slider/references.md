# KdSlider · API 参考

导入均来自 **`@kdocs/kdesign-vue3`**。

## 样式（按需引入）

```text
@kdocs/kdesign-vue3/es/components/slider/style/css
```

```ts
import '@kdocs/kdesign-vue3/es/components/slider/style/css'
import '@kdocs/kdesign-vue3/lib/components/slider/style/css'
```

## 类型导入示例

```ts
import type { SliderMarks, SliderProps } from '@kdocs/kdesign-vue3'
```

## `KdSlider` Props（摘要）

| 属性 | 说明 | 类型 / 约束 | 默认值 |
|------|------|----------------|--------|
| `model-value` / `v-model` | 单值或区间 | `number` \| `[number, number]` | `0` |
| `range` | 区间模式 | `boolean` | `false` |
| `min` / `max` | 最小 / 最大 | `number` | `0` / `100` |
| `step` | 步长或 `mark` | `number` \| `mark` | `1` |
| `disabled` | 禁用 | `boolean` | `false` |
| `vertical` | 竖向 | `boolean` | `false` |
| `show-tooltip` | 是否/始终显示提示 | `boolean` \| `always` | `true` |
| `format-tooltip` | 提示格式化 | `(value: number) => string` | — |
| `marks` | 刻度 | `SliderMarks` | — |
| `show-button` | 显示拖块按钮 | `boolean` | `false` |
| `precision` | 精度（小数位） | `number` | `0` |
| `runway-fg-color` / `runway-bg-color` / `button-color` | 颜色 | `string` | — |
| `runway-width` / `runway-height` | 跑道尺寸 | `number` | — |

## `KdSlider` Emits

| 事件名 | 载荷 |
|--------|------|
| `update:modelValue` | `number` \| `[number, number]` |
| `change` / `input` | 同左 |
