# KdCheckbox / KdCheckboxGroup / KdCheckboxButton · API 参考

导入均来自 **`@kdocs/kdesign-vue3`**。

## 样式（按需引入）

```text
@kdocs/kdesign-vue3/es/components/checkbox/style/css
```

```ts
import '@kdocs/kdesign-vue3/es/components/checkbox/style/css'
import '@kdocs/kdesign-vue3/lib/components/checkbox/style/css'
```

## 类型导入示例

```ts
import type {
  CheckboxGroupInstance,
  CheckboxGroupProps,
  CheckboxInstance,
  CheckboxProps,
} from '@kdocs/kdesign-vue3'
```

## `KdCheckbox` Props（摘要）

| 属性 | 说明 | 类型 / 约束 | 默认值 |
|------|------|----------------|--------|
| `model-value` / `v-model` | 绑定值 | `string` \| `number` \| `boolean` | — |
| `label` | 在组内的选项值 | `string` \| `number` \| `boolean` \| `object` | — |
| `indeterminate` | 半选样式 | `boolean` | `false` |
| `disabled` | 禁用 | `boolean` | `false` |
| `border` | 带边框样式 | `boolean` | `false` |
| `size` | 尺寸 | 尺寸枚举 | — |
| `true-label` / `false-label` | 选中 / 未选中取值 | `string` \| `number` | — |
| `validate-event` | 是否触发表单校验 | `boolean` | `true` |

## `KdCheckbox` Emits

| 事件名 | 载荷 |
|--------|------|
| `update:modelValue` | 当前值 |
| `change` | 当前值 |

## `KdCheckboxGroup` Props（摘要）

| 属性 | 说明 | 类型 / 约束 | 默认值 |
|------|------|----------------|--------|
| `model-value` / `v-model` | 选中值数组 | 数组 | `[]` |
| `disabled` | 整组禁用 | `boolean` | `false` |
| `min` / `max` | 可选数量上下限 | `number` | — |
| `size` | 尺寸 | 尺寸枚举 | — |
| `fill` / `text-color` | 按钮样式激活态 | `string` | — |
| `tag` | 根元素标签 | `string` | `div` |
| `layout` | `horizontal` \| `vertical` | `string` | `horizontal` |
| `validate-event` | 是否触发表单校验 | `boolean` | `true` |

## `KdCheckboxGroup` Emits

| 事件名 | 载荷 |
|--------|------|
| `update:modelValue` | 当前数组 |
| `change` | 当前数组 |

## `KdCheckboxGroup` Slots

| 名称 | 说明 |
|------|------|
| `default` | 多个 **`kd-checkbox`** 或 **`kd-checkbox-button`** |

## `KdCheckboxButton`

与 **`KdCheckbox`** 类似，用于按钮组外观；与 **`kd-checkbox-group`** 组合使用。
