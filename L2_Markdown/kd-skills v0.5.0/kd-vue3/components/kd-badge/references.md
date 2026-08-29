# KdBadge · API 参考

导入均来自 **`@kdocs/kdesign-vue3`**。

## 样式（按需引入）

```text
@kdocs/kdesign-vue3/es/components/badge/style/css
```

```ts
import '@kdocs/kdesign-vue3/es/components/badge/style/css'
import '@kdocs/kdesign-vue3/lib/components/badge/style/css'
```

## 类型导入示例

```ts
import type { BadgeProps } from '@kdocs/kdesign-vue3'
```

## `KdBadge` Props

| 属性 | 说明 | 类型 / 约束 | 默认值 |
|------|------|----------------|--------|
| `value` | 展示文案或数字 | `string` \| `number` | `''` |
| `max` | 数字上限，超出显示 `{max}+` | `number` | — |
| `is-dot` | 仅显示小圆点 | `boolean` | `false` |
| `hidden` | 隐藏 | `boolean` | `false` |
| `type` | 类型 | `success` \| `warning` \| `info` \| `danger` \| `''` | `''` |
| `color` | 文本色 | `string` | — |
| `background` | 背景色 | `string` | — |
| `borderless` | 无边框 | `boolean` | `false` |

## `KdBadge` Slots

| 名称 | 说明 |
|------|------|
| `default` | 触发元素（如图标、头像），徽标覆盖其上 |
