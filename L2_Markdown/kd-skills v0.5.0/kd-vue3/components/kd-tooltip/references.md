# KdTooltip · API 参考

导入均来自 **`@kdocs/kdesign-vue3`**。

## 样式（按需引入）

```text
@kdocs/kdesign-vue3/es/components/tooltip/style/css
```

```ts
import '@kdocs/kdesign-vue3/es/components/tooltip/style/css'
import '@kdocs/kdesign-vue3/lib/components/tooltip/style/css'
```

## 类型导入示例

```ts
import type { KdTooltipProps, TooltipInstance } from '@kdocs/kdesign-vue3'
```

## `KdTooltip` Props（摘要）

由 Popper + Tooltip 组合而成，常见项包括：

| 属性 | 说明 |
|------|------|
| `content` | 文本内容（可与插槽互斥） |
| `placement` | 浮层位置 |
| `trigger` | `hover` / `click` / `focus` 等 |
| `disabled` | 禁用 |
| `visible` / `v-model:visible` | 受控显隐 |
| `show-arrow` | 是否显示箭头 |
| `offset` / `show-after` / `hide-after` | 偏移与延时 |
| `teleported` | 是否传送到 body |
| `effect` | 主题效果 |
| `raw-content` | 是否按 HTML 渲染（注意安全） |
| `enterable` | 是否可进入浮层 |

完整字段以 **`KdTooltipProps`** 为准。

## `KdTooltip` 事件（摘要）

含 **`before-show` / `before-hide` / `show` / `hide` / `open` / `close` / `toggle`** 等（以类型导出为准）。

## `KdTooltip` Slots

| 名称 | 说明 |
|------|------|
| `default` | 触发元素 |
| `content` | 自定义浮层内容 |
