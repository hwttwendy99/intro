# KdAvatar / KdAvatarGroup · API 参考

导入均来自 **`@kdocs/kdesign-vue3`**。

## 样式（按需引入）

```text
@kdocs/kdesign-vue3/es/components/avatar/style/css
```

```ts
import '@kdocs/kdesign-vue3/es/components/avatar/style/css'
```

```ts
import '@kdocs/kdesign-vue3/lib/components/avatar/style/css'
```

## 类型导入示例

```ts
import type { AvatarGroupInstance, AvatarInstance, AvatarProps } from '@kdocs/kdesign-vue3'
```

## `KdAvatar` Props

| 属性 | 说明 | 类型 / 约束 | 默认值 |
|------|------|----------------|--------|
| `size` | 尺寸 | `number` 或组件尺寸枚举 | `large` |
| `shape` | 形状 | `circle` \| `square` | `circle` |
| `icon` | 图标组件 | 图标类型 | — |
| `src` | 图片地址 | `string` | `''` |
| `alt` | 图片 `alt` | `string` | — |
| `src-set` | 响应式图源 | `string` | — |
| `fit` | 图片 `object-fit` | CSS `object-fit` | `cover` |

## `KdAvatar` Emits

| 事件名 | 载荷 |
|--------|------|
| `error` | 图片加载失败 `Event` |

## `KdAvatar` Slots

| 名称 | 说明 |
|------|------|
| `default` | 自定义内容（与 `src` / `icon` 等组合时按实际渲染为准） |

## `KdAvatarGroup` Props

| 属性 | 说明 | 类型 / 约束 | 默认值 |
|------|------|----------------|--------|
| `max-count` | 最多展示头像数，超出折叠 | `number` | `4` |
| `size` | 子头像尺寸 | 同 `KdAvatar` 的 `size` | 同 `avatar` 默认 |

## `KdAvatarGroup` Slots

| 名称 | 说明 |
|------|------|
| `default` | 多个 **`kd-avatar`** |
