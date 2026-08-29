# KdMessageBanner · API 参考

导入均来自 **`@kdocs/kdesign-vue3`**。

## 样式（按需引入）

```text
@kdocs/kdesign-vue3/es/components/message-banner/style/css
```

```ts
import '@kdocs/kdesign-vue3/es/components/message-banner/style/css'
import '@kdocs/kdesign-vue3/lib/components/message-banner/style/css'
```

## 类型导入示例

```ts
import type { MessageBannerProps } from '@kdocs/kdesign-vue3'
```

## `KdMessageBanner` Props（摘要）

| 属性 | 说明 | 类型 / 约束 | 默认值 |
|------|------|----------------|--------|
| `text` | 主文案 | `string` | `''` |
| `sub-text` | 辅助说明 | `string` | `''` |
| `type` | 类型 | `success` \| `info` \| `warning` \| `error` | `info` |
| `prefix-icon` | 是否显示前置图标 | `boolean` | `true` |
| `show-close` | 显示关闭 | `boolean` | `false` |
| `icon` | 自定义图标 | 图标组件 | — |
| `action` | 操作（按钮或链接） | `object` | — |
| `duration` | 自动关闭毫秒，`0` 为不自动关 | `number` | `0` |
| `layout` | `center` \| `full` | `string` | `center` |
| `safe-margin` | 居中布局安全边距 | `number` \| `string` | — |
| `align` | `left` \| `center` | `string` | `left` |
| `checkbox` | 勾选配置 | `object` | — |

## `KdMessageBanner` Emits

| 事件名 | 载荷 |
|--------|------|
| `close` | — |
| `destroy` | — |

## `KdMessageBannerActions`

用于自定义操作区的子组件，以当前包导出为准。
