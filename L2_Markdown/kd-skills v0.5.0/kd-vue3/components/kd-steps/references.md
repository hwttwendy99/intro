# KdSteps / KdStep · API 参考

导入均来自 **`@kdocs/kdesign-vue3`**。

## 样式（按需引入）

```text
@kdocs/kdesign-vue3/es/components/steps/style/css
```

```ts
import '@kdocs/kdesign-vue3/es/components/steps/style/css'
import '@kdocs/kdesign-vue3/lib/components/steps/style/css'
```

## 类型导入示例

```ts
import type { StepProps, StepsProps } from '@kdocs/kdesign-vue3'
```

## `KdSteps` Props（摘要）

| 属性 | 说明 | 类型 / 约束 | 默认值 |
|------|------|----------------|--------|
| `active` | 当前步骤索引 | `number` | `0` |
| `space` | 步骤间距 | `number` \| `string` | `''` |
| `direction` | `horizontal` \| `vertical` | `string` | `horizontal` |
| `label-placement` | 标签相对连线位置 | `horizontal` \| `vertical` | `horizontal` |
| `type` | `default` \| `dot` | `string` | `default` |
| `process-status` / `finish-status` | 进行 / 完成态 | `wait` \| `process` \| `finish` \| `error` | — |
| `align-center` | 居中对齐 | `boolean` | `false` |
| `click-changeable` | 点击切换 | `boolean` | `false` |
| `line-less` | 隐藏连线 | `boolean` | `false` |
| `can-jump-on-error` | 出错时是否可跳 | `boolean` | `false` |
| `can-back-on-finish` | 完成后是否可回退 | `boolean` | `true` |

## `KdSteps` Emits

| 事件名 | 载荷 |
|--------|------|
| `update:active` | 新索引 |
| `change` | 新索引，旧索引 |

## `KdStep` Props（摘要）

| 属性 | 说明 |
|------|------|
| `title` / `description` | 标题与描述 |
| `icon` / `prefix-icon` / `inner-icon` | 图标 |
| `status` | 覆盖步骤状态 |
| `tooltip-props` | 点状模式 Tooltip |

## `KdStep` Emits

| 事件名 | 载荷 |
|--------|------|
| `click` | 步骤索引 |
