# KdTextarea · API 参考

导入均来自 **`@kdocs/kdesign-vue3`**。

## 样式（按需引入）

```text
@kdocs/kdesign-vue3/es/components/textarea/style/css
```

```ts
import '@kdocs/kdesign-vue3/es/components/textarea/style/css'
import '@kdocs/kdesign-vue3/lib/components/textarea/style/css'
```

## 类型导入示例

```ts
import type { TextareaProps } from '@kdocs/kdesign-vue3'
```

## `KdTextarea` Props（摘要）

| 属性 | 说明 | 类型 / 约束 | 默认值 |
|------|------|----------------|--------|
| `model-value` / `v-model` | 绑定值 | `string` | `''` |
| `placeholder` | 占位 | `string` | 内置默认 |
| `rows` | 行数 | `number`（≥1） | `2` |
| `disabled` / `readonly` | 禁用 / 只读 | `boolean` | — |
| `maxlength` | 最大长度 | `number` \| `string` | — |
| `show-word-limit` | 字数统计 | `boolean` | `false` |
| `autosize` | 自适应高度 | `boolean` \| `{ minRows?, maxRows? }` | `false` |
| `clearable` | 可清空 | `boolean` | `false` |
| `resize` | resize 控制 | `none` \| `both` \| `horizontal` \| `vertical` | `none` |
| `helper-text` | 辅助说明 | `string` | `''` |
| `status` | 状态样式 | `string` | — |
| `validate-event` | 触发表单校验 | `boolean` | `true` |
| `blur-on-esc` | Esc 失焦 | `boolean` | `true` |
| `count-only` | 仅计数截断 | `boolean` | `false` |

## `KdTextarea` Emits（摘要）

| 事件名 | 载荷 |
|--------|------|
| `update:modelValue` | `string` |
| `input` / `change` | `string` |
| `focus` / `blur` | 焦点事件 |
| `clear` | — |
| `esc` | `KeyboardEvent` |
