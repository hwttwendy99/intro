# KdSwitch · API 参考

导入均来自 **`@kdocs/kdesign-vue3`**。

## 样式（按需引入）

```text
@kdocs/kdesign-vue3/es/components/switch/style/css
```

```ts
import '@kdocs/kdesign-vue3/es/components/switch/style/css'
import '@kdocs/kdesign-vue3/lib/components/switch/style/css'
```

## 类型导入示例

```ts
import type { SwitchProps } from '@kdocs/kdesign-vue3'
```

## `KdSwitch` Props（摘要）

| 属性 | 说明 | 类型 / 约束 | 默认值 |
|------|------|----------------|--------|
| `model-value` / `v-model` | 绑定值 | `boolean` \| `string` \| `number` | `false` |
| `active-value` / `inactive-value` | 开 / 关对应值 | `boolean` \| `string` \| `number` | `true` / `false` |
| `disabled` / `loading` | 禁用 / 加载 | `boolean` | — |
| `size` | 尺寸 | 组件尺寸 | — |
| `width` | 开关宽度 | `string` \| `number` | `''` |
| `inline-prompt` | 滑块内文字/图标 | `boolean` | `false` |
| `active-text` / `inactive-text` | 文案 | `string` | `''` |
| `active-icon` / `inactive-icon` 等 | 图标 | 图标组件 | — |
| `before-change` | 切换前钩子 | `() => boolean \| Promise<boolean>` | — |
| `validate-event` | 触发表单校验 | `boolean` | `true` |

## `KdSwitch` Emits

| 事件名 | 载荷 |
|--------|------|
| `update:modelValue` | 当前值 |
| `change` | 当前值 |
| `input` | 当前值 |
