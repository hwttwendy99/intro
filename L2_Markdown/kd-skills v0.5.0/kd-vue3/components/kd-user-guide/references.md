# KdUserGuide · API 参考

导入均来自 **`@kdocs/kdesign-vue3`**。

## 样式（按需引入）

```text
@kdocs/kdesign-vue3/es/components/user-guide/style/css
```

```ts
import '@kdocs/kdesign-vue3/es/components/user-guide/style/css'
import '@kdocs/kdesign-vue3/lib/components/user-guide/style/css'
```

## 类型导入示例

```ts
import type {
  KdUserGuideSimpleStepProps,
  KdUserGuideStepProps,
  UserGuideProps,
} from '@kdocs/kdesign-vue3'
```

## `KdUserGuide` Props（摘要）

| 属性 | 说明 | 类型 / 约束 | 默认值 |
|------|------|----------------|--------|
| `model-value` / `v-model` | 是否显示引导 | `boolean` | `false` |
| `type` | `default` \| `primary` | `string` | `default` |
| `current` | 当前步骤序号 | `number` | `1` |
| `mask` | 是否显示遮罩 | `boolean` | `true` |
| `step` | 单步配置 | `KdUserGuideSimpleStepProps` | `{}` |
| `steps` | 多步配置 | `KdUserGuideStepProps[]` | `[]` |
| `animation` | 动画 | `boolean` | `true` |
| `capture-keyboard-event` | 捕获键盘 | `boolean` | `true` |
| `target-area-clickable` | 高亮区可点 | `boolean` | `true` |
| `hide-on-click-outside` | 点击外部关闭 | `boolean` \| `follow-popover` | `follow-popover` |
| `gap` | 高亮与浮层间距 | `{ offset, radius }` | `{ offset: 8, radius: 4 }` |

## `KdUserGuide` Emits

| 事件名 | 载荷 |
|--------|------|
| `update:modelValue` | `boolean` |
| `close` | 当前步序号 `number` |
| `change` | 当前步序号 `number` |

## 步骤项 `KdUserGuideStepProps`（摘要）

常见字段：**`target`**（选择器或元素）、**`title`**、**`description`**、**`placement`**、**`cover`**、**`mask`**、**`show-arrow`**、**`show-close`**、**`prev-button-props`** / **`next-button-props`** 等。完整定义见类型导出。

## `KdUserGuidePopoverProps`

Popover 子层配置在组件内部使用，业务侧以 **`UserGuideProps`** 与步骤 **`placement`** 等为主。
