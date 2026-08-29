# Pagination · 分场景示例

## 1. 基础

```vue
<kd-pagination
  v-model:current-page="page"
  v-model:page-size="size"
  :total="total"
  layout="total, prev, pager, next"
/>
```

## 2. 每页条数选择

```vue
<kd-pagination
  v-model:current-page="page"
  v-model:page-size="size"
  :total="total"
  layout="sizes, prev, pager, next"
  :page-size-options="[10, 20, 50]"
/>
```

## 3. 单页隐藏

```vue
<kd-pagination :total="total" hide-on-single-page />
```

## 4. 对齐

```vue
<kd-pagination align="center" ... />
```

## 5. 监听变更

```vue
<kd-pagination @change="onPageChange" @size-change="onSizeChange" />
```

## 6. 禁用

```vue
<kd-pagination disabled ... />
```
