# KdPopover · API 参考

导入均来自 **`@kdocs/kdesign-vue3`**。

## 样式（按需引入）

```text
@kdocs/kdesign-vue3/es/components/popover/style/css
```

```ts
import '@kdocs/kdesign-vue3/es/components/popover/style/css'
import '@kdocs/kdesign-vue3/lib/components/popover/style/css'
```

## 类型导入示例

```ts
import type { PopoverInstance, PopoverProps } from '@kdocs/kdesign-vue3'
```

## `KdPopover` Props（摘要）

| 属性 | 说明 | 类型 / 约束 | 默认值 |
|------|------|----------------|--------|
| `trigger` | 触发方式 | 与 Tooltip 一致 | — |
| `placement` | 位置 | Popper `placement` | `bottom` |
| `disabled` | 禁用 | `boolean` | `false` |
| `visible` / `v-model:visible` | 显隐 | `boolean` | — |
| `title` | 标题 | `string` | — |
| `content` | 内容（与默认插槽配合） | 见类型 | — |
| `width` / `max-width` | 宽度 | `string` \| `number` | — |
| `teleported` | 传送至 body | `boolean` | — |
| `show-arrow` | 显示箭头 | `boolean` | `false` |
| `enterable` | 内容区可悬停 | `boolean` | `true` |
| `offset` / `show-after` / `hide-after` / `open-delay` / `close-delay` | 偏移与延时 | `number` | — |
| `effect` | 主题效果 | `string` | `''` |
| `persistent` | 关闭后保留 DOM | `boolean` | `true` |

## `KdPopover` Emits

| 事件名 | 载荷 |
|--------|------|
| `update:visible` | `boolean` |
| `before-enter` / `before-leave` / `after-enter` / `after-leave` | — |

## `KdPopover` Slots

| 名称 | 说明 |
|------|------|
| `reference` | 触发元素 |
| `default` | 弹出层内容 |

## 指令

包内可能导出 **`KdPopoverDirective`**，用法见安装版本说明。
