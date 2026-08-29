# Loading · API 参考

导入均来自 **`@kdocs/kdesign-vue3`**（具体导出以当前包为准）。

## 样式（按需引入）

```text
@kdocs/kdesign-vue3/es/components/loading/style/css
```

```ts
import '@kdocs/kdesign-vue3/es/components/loading/style/css'
import '@kdocs/kdesign-vue3/lib/components/loading/style/css'
```

## 类型导入示例

```ts
import type { LoadingOptions, LoadingProps } from '@kdocs/kdesign-vue3'
```

## `KdLoading` 组件 Props

| 属性 | 说明 | 类型 / 约束 | 默认值 |
|------|------|----------------|--------|
| `text` | 提示文案 | `string` | `''` |
| `size` | 尺寸 | `x-large` \| `large` \| `medium` 等 | `medium` |
| `layout` | 排布 | `horizontal` \| `vertical` | `horizontal` |
| `icon-color` | 图标色 | `blue` \| `white` 等 | `blue` |

## 指令 `v-loading`

在元素上控制局部加载态；修饰符与选项以 **`LoadingOptions`** 及文档为准（如 **`fullscreen`**、**`lock`** 等）。

## 服务 `KdLoadingService`

以函数形式打开全屏或指定 **`target`** 的加载层，返回可关闭实例；选项见 **`LoadingOptions`**。
