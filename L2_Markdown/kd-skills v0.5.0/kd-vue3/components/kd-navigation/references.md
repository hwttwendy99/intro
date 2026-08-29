# KdNavigation / KdNavigationItem · API 参考

导入均来自 **`@kdocs/kdesign-vue3`**。

## 样式（按需引入）

```text
@kdocs/kdesign-vue3/es/components/navigation/style/css
```

```ts
import '@kdocs/kdesign-vue3/es/components/navigation/style/css'
import '@kdocs/kdesign-vue3/lib/components/navigation/style/css'
```

## 类型导入示例

```ts
import type { NavigationItemProps, NavigationProps } from '@kdocs/kdesign-vue3'
```

## `KdNavigation` Props

| 属性 | 说明 | 类型 / 约束 | 默认值 |
|------|------|----------------|--------|
| `layout` | 布局 | `string` | `horizontal` |
| `size` | `small` \| `medium` | `string` | `small` |
| `type` | 展示类型 | `string` | `text` |
| `icon-size` | 图标尺寸 | `number` | — |
| `default-active-index` | 默认激活项 | `number` | — |
| `dropdown-value` | 下拉关联值 | `string` | — |

## `KdNavigation` Emits

| 事件名 | 载荷 |
|--------|------|
| `change` | `string` \| `number` |

## `KdNavigationItem` Props（摘要）

| 属性 | 说明 |
|------|------|
| `index` | 项索引 |
| `icon` | 图标 |
| `disabled` | 禁用 |
| `inner-type` | 内部类型 |
| `size` | `large` \| `medium` \| `small` |
