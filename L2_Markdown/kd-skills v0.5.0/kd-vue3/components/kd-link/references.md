# KdLink · API 参考

导入均来自 **`@kdocs/kdesign-vue3`**。

## 样式（按需引入）

```text
@kdocs/kdesign-vue3/es/components/link/style/css
```

```ts
import '@kdocs/kdesign-vue3/es/components/link/style/css'
import '@kdocs/kdesign-vue3/lib/components/link/style/css'
```

## 类型导入示例

```ts
import type { LinkInstance, LinkProps } from '@kdocs/kdesign-vue3'
```

## `KdLink` Props

| 属性 | 说明 | 类型 / 约束 | 默认值 |
|------|------|----------------|--------|
| `type` | 类型 | `primary` \| `secondary` | `secondary` |
| `underline` | 下划线 | `boolean` | `false` |
| `disabled` | 禁用 | `boolean` | `false` |
| `href` | 链接地址 | `string` | `''` |
| `target` | `a` 的 `target` | `string` | `_blank` |
| `icon` | 图标组件 | 图标类型 | — |
| `icon-size` | 图标大小 | `number` | `16` |

## `KdLink` Emits

| 事件名 | 载荷 |
|--------|------|
| `click` | `MouseEvent` |

## `KdLink` Slots

| 名称 | 说明 |
|------|------|
| `default` | 链接文案 |
