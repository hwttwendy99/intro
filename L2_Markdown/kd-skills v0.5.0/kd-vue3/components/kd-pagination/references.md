# KdPagination · API 参考

导入均来自 **`@kdocs/kdesign-vue3`**。

## 样式（按需引入）

```text
@kdocs/kdesign-vue3/es/components/pagination/style/css
```

```ts
import '@kdocs/kdesign-vue3/es/components/pagination/style/css'
import '@kdocs/kdesign-vue3/lib/components/pagination/style/css'
```

## 类型导入示例

```ts
import type { PaginationEmits, PaginationProps } from '@kdocs/kdesign-vue3'
```

## `KdPagination` Props（摘要）

| 属性 | 说明 | 类型 / 约束 | 默认值 |
|------|------|----------------|--------|
| `type` | 分页器类型 | 见常量 `PAGINATION_TYPES` | `default` |
| `current-page` | 当前页 | `number` | — |
| `page-size` | 每页条数 | `number` | — |
| `default-current` / `default-page-size` | 非受控默认 | `number` | — |
| `total` | 总条数 | `number` | — |
| `page-count` | 总页数 | `number` | — |
| `page-size-options` | 每页条数选项 | `number[]` | 内置默认 |
| `pager-count` | 页码按钮数 | `number` | — |
| `layout` | 子部件布局，逗号分隔 | `string` | `''` |
| `hide-on-single-page` | 仅一页时隐藏 | `boolean` | `false` |
| `disabled` | 禁用 | `boolean` | `false` |
| `align` | 对齐 | 多种枚举 | `start` |
| `multi-page-step` | 多页步进 | `number` | — |

## `KdPagination` Emits

| 事件名 | 载荷 |
|--------|------|
| `update:currentPage` | `number` |
| `update:pageSize` | `number` |
| `current-change` | `number` |
| `size-change` | `number` |
| `change` | `currentPage`, `pageSize` |
| `prev-click` / `next-click` | `number` |
