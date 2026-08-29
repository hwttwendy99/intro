# KdText · API 参考

导入均来自 **`@kdocs/kdesign-vue3`**。

## 样式（按需引入）

```text
@kdocs/kdesign-vue3/es/components/text/style/css
```

```ts
import '@kdocs/kdesign-vue3/es/components/text/style/css'
import '@kdocs/kdesign-vue3/lib/components/text/style/css'
```

## 类型导入示例

```ts
import type { TextProps } from '@kdocs/kdesign-vue3'
```

## `KdText` Props

| 属性 | 说明 | 类型 / 约束 | 默认值 |
|------|------|----------------|--------|
| `content` | 文本 | `string` | `''` |
| `mode` | `end` \| `middle` 省略 | `string` | `end` |
| `rows` | 最大行数 | `number`（≥1） | `1` |
| `tooltip` | 是否/如何展示 Tooltip | `boolean` \| `object` | `true` |
| `suffix` | 省略号字符 | `string` | `...` |

## `KdText` Emits

| 事件名 | 载荷 |
|--------|------|
| `ellipsis-change` | 是否处于省略 `boolean` |
