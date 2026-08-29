# KdDropdown · API 参考

导入均来自 **`@kdocs/kdesign-vue3`**。

## 样式（按需引入）

```text
@kdocs/kdesign-vue3/es/components/dropdown/style/css
```

```ts
import '@kdocs/kdesign-vue3/es/components/dropdown/style/css'
import '@kdocs/kdesign-vue3/lib/components/dropdown/style/css'
```

## 类型导入示例

```ts
import type { DropdownInstance } from '@kdocs/kdesign-vue3'
```

## `KdDropdown` Props（摘要）

继承 Tooltip / Popper 相关能力，常见项如下：

| 属性 | 说明 | 类型 / 约束 | 默认值 |
|------|------|----------------|--------|
| `trigger` | 触发方式 | `click` \| `hover` \| `contextmenu` | `click` |
| `menu-trigger` | 菜单悬停/点击 | `click` \| `hover` | `hover` |
| `placement` | 浮层位置 | Popper `placement` | `bottom-start` |
| `model-value` | 与菜单选中值同步（视场景） | `string` \| `number` | — |
| `visible` | 是否展开 | `boolean` | — |
| `disabled` | 禁用 | `boolean` | `false` |
| `mode` | 菜单模式 | `default` \| `single` \| `multiple` | `default` |
| `close-on-select` | 点选项后关闭 | `boolean` | `true` |
| `selectable` | 可选 | `boolean` | `false` |
| `loading` / `loading-text` | 加载态 | `boolean` / `string` | — |
| `max-height` | 面板最大高度 | `number` | — |
| `min-width` / `max-width` | 面板宽度 | `number` \| `auto` | — |
| `popper-class` | 浮层类名 | `string` | — |
| `popper-append-to-body` | 挂载到 body | `boolean` | `false` |
| `popper-options` | Popper 配置 | `object` | `{}` |

## `KdDropdown` Emits

| 事件名 | 载荷 |
|--------|------|
| `update:visible` | `boolean` |
| `update:model-value` | `string` \| `number` |
| `select` | `key`，菜单项实例 |
| `change` | `string` \| `number` |
| `open` / `close` | — |

## `KdDropdown` Slots

| 名称 | 说明 |
|------|------|
| `reference` | 触发元素 |
| `default` | 下拉内容（一般为 **`kd-menu`**） |
| `empty` | 空状态 |
