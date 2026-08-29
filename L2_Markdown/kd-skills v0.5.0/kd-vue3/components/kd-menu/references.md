# KdMenu 系列 · API 参考

导入均来自 **`@kdocs/kdesign-vue3`**。

## 样式（按需引入）

```text
@kdocs/kdesign-vue3/es/components/menu/style/css
```

```ts
import '@kdocs/kdesign-vue3/es/components/menu/style/css'
import '@kdocs/kdesign-vue3/lib/components/menu/style/css'
```

## `KdMenu` Props（摘要）

| 属性 | 说明 | 类型 / 约束 | 默认值 |
|------|------|----------------|--------|
| `model-value` / `v-model` | 当前激活 | `string` \| `number` | — |
| `mode` | 选择模式 | `default` \| `single` \| `multiple` | `default` |
| `default-active` | 默认激活 | `string` \| `number` | `''` |
| `default-openeds` | 默认展开的 submenu | `array` | — |
| `unique-opened` | 是否只展开一个子菜单 | `boolean` | — |
| `router` | 是否使用 vue-router | `boolean` | — |
| `menu-trigger` | 子菜单触发 | `hover` \| `click` | `hover` |
| `collapse` | 折叠侧栏 | `boolean` | `false` |
| `selectable` | 可选 | `boolean` | `false` |
| `background-color` / `text-color` / `active-text-color` | 主题色 | `string` | — |

## `KdMenu` Emits

| 事件名 | 载荷 |
|--------|------|
| `update:modelValue` | `string` \| `number` |
| `select` | `index`，菜单项实例 |
| `change` | `string` \| `number` |
| `open` / `close` | `index`，子菜单实例 |
| `click-submenu-native` | 原生子菜单点击 |

## `KdSubmenu` Props（摘要）

| 属性 | 说明 |
|------|------|
| `index` / `value` | 子菜单标识 |
| `disabled` | 禁用 |
| `popper-append-to-body` | 浮层挂载 |
| `show-timeout` / `hide-timeout` | 悬停延时 |
| `max-width` / `max-height` / `min-width` | 浮层尺寸 |
| `popper-class` | 浮层类名 |

## `KdMenuItem` Props（摘要）

| 属性 | 说明 |
|------|------|
| `index` | 项标识（必填） |
| `route` | 路由 |
| `disabled` / `divided` | 禁用 / 分隔线 |
| `title` / `subtitle` | 文案 |
| `close-on-select` | 点击后关闭（下拉场景） |

## `KdMenuItemGroup` Props

| 属性 | 说明 |
|------|------|
| `title` | 分组标题 |
| `divided` | 顶部分隔 |
