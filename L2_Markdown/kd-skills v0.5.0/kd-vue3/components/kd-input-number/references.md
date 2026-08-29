# KdInputNumber · API 参考

导入均来自 **`@kdocs/kdesign-vue3`**。

## 样式（按需引入）

```text
@kdocs/kdesign-vue3/es/components/input-number/style/css
```

```ts
import '@kdocs/kdesign-vue3/es/components/input-number/style/css'
import '@kdocs/kdesign-vue3/lib/components/input-number/style/css'
```

## 类型导入示例

```ts
import type { InputNumberProps } from '@kdocs/kdesign-vue3'
```

## `KdInputNumber` Props（摘要）

| 属性 | 说明 | 类型 / 约束 | 默认值 |
|------|------|----------------|--------|
| `model-value` / `v-model` | 当前值 | `number` | — |
| `default-value` | 非受控默认值 | `number` | `0` |
| `placeholder` | 占位 | `string` | — |
| `min` / `max` | 最小 / 最大 | `number` | 安全整数范围 |
| `step` | 步长 | `number`（>0） | `1` |
| `step-strictly` | 严格按步长 | `boolean` | `false` |
| `precision` | 小数位数 | `number`（整数 ≥0） | — |
| `prefix-unit` / `post-unit` | 前 / 后置单位 | `string` | — |
| `disabled` / `readonly` | 禁用 / 只读 | `boolean` | — |
| `size` | 尺寸 | 尺寸枚举 | — |
| `controls` | 控制按钮 | `boolean` | `true` |
| `mode` | `pc` \| `mobile` | `string` | `pc` |
| `validate-event` | 触发表单校验 | `boolean` | `true` |
| `autofocus` | 自动聚焦 | `boolean` | `false` |

## `KdInputNumber` Emits（摘要）

| 事件名 | 载荷 |
|--------|------|
| `update:modelValue` | `number` |
| `change` / `input` | `number` |
| `focus` / `blur` | 焦点事件 |
| `increase` / `decrease` | `number` |
