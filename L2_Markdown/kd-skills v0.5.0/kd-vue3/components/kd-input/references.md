# KdInput · API 参考

导入均来自 **`@kdocs/kdesign-vue3`**。

## 样式（按需引入）

```text
@kdocs/kdesign-vue3/es/components/input/style/css
```

```ts
import '@kdocs/kdesign-vue3/es/components/input/style/css'
import '@kdocs/kdesign-vue3/lib/components/input/style/css'
```

## 类型导入示例

```ts
import type { InputEmits, InputInstance, InputProps } from '@kdocs/kdesign-vue3'
```

## `KdInput` Props（摘要）

| 属性 | 说明 | 类型 / 约束 | 默认值 |
|------|------|----------------|--------|
| `model-value` / `v-model` | 绑定值 | `string` \| `number` 等 | `''` |
| `type` | 原生类型 | `string` | `text` |
| `size` | 尺寸 | 尺寸枚举 | — |
| `disabled` / `readonly` | 禁用 / 只读 | `boolean` | — |
| `placeholder` | 占位 | `string` | — |
| `clearable` | 可清空 | `boolean` | `false` |
| `show-password` | 密码可见切换 | `boolean` | `false` |
| `prefix-icon` / `suffix-icon` | 前 / 后缀图标 | 图标组件 | — |
| `loading` | 加载态 | `boolean` | `false` |
| `status` | 状态样式（如错误） | `string` | — |
| `text-align` | `left` \| `center` \| `right` | `string` | `left` |
| `show-word-limit` | 字数统计 | `boolean` | `false` |
| `autocomplete` | 原生 | `string` | `off` |
| `validate-event` | 触发表单校验 | `boolean` | `true` |
| `input-style` | 输入框样式 | 对象 / 数组 / 字符串 | — |

## `KdInput` Emits（摘要）

| 事件名 | 载荷 |
|--------|------|
| `update:modelValue` | 字符串 |
| `input` / `change` | 字符串 |
| `focus` / `blur` | 焦点事件 |
| `clear` | — |
| `keydown` 等 | 键盘 / 合成事件 |

## `KdInput` Slots

| 名称 | 说明 |
|------|------|
| `prefix` / `suffix` | 自定义前 / 后缀（与 icon 等组合时以实际为准） |
