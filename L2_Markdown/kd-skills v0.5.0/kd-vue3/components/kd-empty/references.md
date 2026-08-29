# KdEmpty · API 参考

导入均来自 **`@kdocs/kdesign-vue3`**。

## 样式（按需引入）

```text
@kdocs/kdesign-vue3/es/components/empty/style/css
```

```ts
import '@kdocs/kdesign-vue3/es/components/empty/style/css'
import '@kdocs/kdesign-vue3/lib/components/empty/style/css'
```

## 类型导入示例

```ts
import type { EmptyProps } from '@kdocs/kdesign-vue3'
```

## `KdEmpty` Props

| 属性 | 说明 | 类型 / 约束 | 默认值 |
|------|------|----------------|--------|
| `image` | 图片 URL | `string` | `''` |
| `image-size` | 图片宽度 | `number` | — |
| `description` | 描述 | `string` | `''` |
| `title` | 标题 | `string` | `''` |

## `KdEmpty` Slots

| 名称 | 说明 |
|------|------|
| `image` | 自定义图片区 |
| `title` | 标题 |
| `description` | 描述 |
| `default` | 底部区域（如操作按钮） |
