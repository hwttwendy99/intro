# KdProgress · API 参考

导入均来自 **`@kdocs/kdesign-vue3`**。

## 样式（按需引入）

```text
@kdocs/kdesign-vue3/es/components/progress/style/css
```

```ts
import '@kdocs/kdesign-vue3/es/components/progress/style/css'
import '@kdocs/kdesign-vue3/lib/components/progress/style/css'
```

## 类型导入示例

```ts
import type { ProgressInstance, ProgressProps } from '@kdocs/kdesign-vue3'
```

## `KdProgress` Props（摘要）

| 属性 | 说明 | 类型 / 约束 | 默认值 |
|------|------|----------------|--------|
| `type` | `line` \| `circle` \| `dashboard` | `string` | `line` |
| `percentage` | 进度 0–100 | `number` | `0` |
| `status` | `success` \| `exception` \| `warning` 等 | `string` | `''` |
| `indeterminate` | 不确定进度动画 | `boolean` | `false` |
| `duration` | 动画周期（秒） | `number` | `3` |
| `stroke-width` | 线宽 | `number` | `6` |
| `text-inside` | 条内文案（`line`） | `boolean` | `false` |
| `size` | 环形尺寸 | `large` \| `medium` \| `small` \| `x-small` | `medium` |
| `width` | 环形画布宽 | `number` | — |
| `show-text` | 显示百分比 | `boolean` | `true` |
| `color` | 颜色或分段色 | `string` / 数组 / 函数 | `''` |
| `striped` / `striped-flow` | 条纹 / 流动 | `boolean` | `false` |
| `format` | 文案格式化 | `(percentage) => string` | 默认 `%` |
