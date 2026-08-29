# KdSplitButton · API 参考

导入均来自 **`@kdocs/kdesign-vue3`**。

## 样式（按需引入）

```text
@kdocs/kdesign-vue3/es/components/split-button/style/css
```

```ts
import '@kdocs/kdesign-vue3/es/components/split-button/style/css'
import '@kdocs/kdesign-vue3/lib/components/split-button/style/css'
```

## 类型导入示例

```ts
import type { SplitButtonOption, SplitButtonProps } from '@kdocs/kdesign-vue3'
```

## `KdSplitButton` Props（摘要）

| 属性 | 说明 | 类型 / 约束 | 默认值 |
|------|------|----------------|--------|
| `type` | `primary` \| `secondary` \| `light` | `string` | `light` |
| `size` | 尺寸 | 尺寸枚举 | — |
| `text` | 主按钮文案 | `string` | — |
| `options` | 下拉项 | `SplitButtonOption[]` | `[]` |
| `disabled` / `loading` / `active` | 状态 | `boolean` | — |
| `width` | 按钮宽度 | `string` \| `number` | — |
| `placement` | 菜单位置 | 四种角 | `bottom-start` |
| `popper-options` | Popper 配置（不含 placement） | `object` | `{}` |
| `tooltip-placement` | 主按钮 Tooltip | `Placement` | `top` |

## `KdSplitButton` Emits

| 事件名 | 载荷 |
|--------|------|
| `click` | `MouseEvent` |
| `right-click` | `MouseEvent` |
| `select` | `key`，菜单项实例 |
| `open` / `close` | — |
