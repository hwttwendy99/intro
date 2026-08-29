# KdButton / KdButtonGroup · API 参考

以下内容供按需加载；导入均来自 **`@kdocs/kdesign-vue3`**。

## 样式（按需引入）

在 **按需注册组件** 且 **未** 通过全量包或构建插件自动注入样式时，需手动引入该组件样式。路径模式为：

```text
@kdocs/kdesign-vue3/es/components/<组件目录名>/style/css
```

本组件目录名为 **`button`**，示例：

```ts
import '@kdocs/kdesign-vue3/es/components/button/style/css'
```

若构建链路要求 **CommonJS** 产物，可将 **`es`** 换为 **`lib`**：

```ts
import '@kdocs/kdesign-vue3/lib/components/button/style/css'
```

使用 **Vite / webpack** 等时，请确保 `css` 侧参与打包；具体以当前工程配置为准。

## 类型导入示例

```ts
import type {
  ButtonGroupInstance,
  ButtonInstance,
  ButtonProps,
} from '@kdocs/kdesign-vue3'
```

## `KdButton` Props

| 属性 | 说明 | 类型 / 约束 | 默认值 |
|------|------|----------------|--------|
| `size` | 尺寸 | `''` \| `x-large` \| `large` \| `medium` \| `small` | 由组 / 全局 / 内部回退解析 |
| `disabled` | 禁用 | `boolean` | `false` |
| `type` | 视觉类型 | 含 `primary`、`secondary`、`light`、`text`（`text` 可能弃用）等 | `''`（经解析后有效） |
| `icon` | 图标按钮模式 | `boolean` | — |
| `native-type` | 原生 `type` | `button` \| `submit` \| `reset` | `button` |
| `loading` | 加载中 | `boolean` | `false` |
| `danger` | 危险样式 | `boolean` | `false` |
| `active` | 激活态 | `boolean` | `false` |
| `highlight` | 强调 | `boolean` | `false` |
| `loading-icon` | 自定义加载图标 | 图标组件 | `null` |
| `plain` | 朴素按钮 | `boolean` | `false` |
| `text` | 文本按钮 | `boolean` | `false` |
| `link` | 链接风 | `boolean` | `false` |
| `bg` | 文本按钮背景等 | `boolean` | `false` |
| `autofocus` | 原生 autofocus | `boolean` | `false` |
| `round` / `circle` | 圆角 / 圆形 | `boolean` | `false` |
| `color` | 自定义主色 | `string` | — |
| `dark` | 深色模式颜色推导 | `boolean` | `false` |
| `auto-insert-space` | 两汉字间自动间距 | `boolean` | `undefined`（可与全局配置合并） |
| `tag` | 根标签 | `string` 或组件 | `button` |
| `icon-size` | 图标尺寸 | `number` \| `string` | `16` |
| `icon-color` | 图标颜色 | `string` \| `string[]` | `undefined` |
| `prefix-icon` / `suffix-icon` | 前 / 后置图标 | 图标组件 | `undefined` |
| `menu` | 菜单按钮（箭头） | `boolean` | `false` |

## `KdButton` Emits

| 事件名 | 载荷 |
|--------|------|
| `click` | `MouseEvent` |

## `KdButton` Slots

| 名称 | 说明 |
|------|------|
| `default` | 主内容 |
| `loading` | 自定义加载中区域 |

## `KdButton` Expose（`ButtonInstance`）

| 名 | 含义 |
|----|------|
| `ref` | 根元素 |
| `size` / `type` / `disabled` | 解析后的计算值 |
| `shouldAddSpace` | 双字中文间隔样式是否生效 |

## `KdButtonGroup`

| 属性 | 说明 |
|------|------|
| `size` | 组内默认尺寸 |
| `type` | 组内默认类型 |

**插槽**：`default` — 多个 **`kd-button`**。
