# KdRadio / KdRadioGroup / KdRadioButton · API 参考

导入均来自 **`@kdocs/kdesign-vue3`**。

## 样式（按需引入）

```text
@kdocs/kdesign-vue3/es/components/radio/style/css
```

```ts
import '@kdocs/kdesign-vue3/es/components/radio/style/css'
import '@kdocs/kdesign-vue3/lib/components/radio/style/css'
```

## 类型导入示例

```ts
import type { RadioGroupProps, RadioProps } from '@kdocs/kdesign-vue3'
```

## `KdRadio` Props（摘要）

| 属性 | 说明 | 类型 / 约束 | 默认值 |
|------|------|----------------|--------|
| `model-value` / `v-model` | 绑定值 | `string` \| `number` \| `boolean` | — |
| `label` | 选项值（组内） | `string` \| `number` \| `boolean` | `''` |
| `disabled` | 禁用 | `boolean` | `false` |
| `border` | 边框样式 | `boolean` | `false` |
| `size` | 尺寸 | 尺寸枚举 | — |
| `name` | 原生 `name` | `string` | `''` |

## `KdRadio` Emits

| 事件名 | 载荷 |
|--------|------|
| `update:modelValue` | 当前值 |
| `change` | 当前值 |

## `KdRadioGroup` Props（摘要）

| 属性 | 说明 | 类型 / 约束 | 默认值 |
|------|------|----------------|--------|
| `model-value` / `v-model` | 选中值 | `string` \| `number` \| `boolean` | `''` |
| `disabled` | 整组禁用 | `boolean` | `false` |
| `size` | 尺寸 | 尺寸枚举 | — |
| `fill` / `text-color` | 按钮态激活色 | `string` | — |
| `label` | `aria-label` | `string` | — |
| `name` | 原生 `name` | `string` | — |
| `validate-event` | 触发表单校验 | `boolean` | `true` |
| `layout` | `horizontal` \| `vertical` | `string` | `horizontal` |

## `KdRadioGroup` Emits

同 **`KdRadio`**：`update:modelValue`、`change`。

## `KdRadioButton`

与按钮组外观组合 **`kd-radio-group`** 使用。
