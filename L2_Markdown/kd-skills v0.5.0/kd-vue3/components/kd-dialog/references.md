# KdDialog · API 参考

导入均来自 **`@kdocs/kdesign-vue3`**。

## 样式（按需引入）

```text
@kdocs/kdesign-vue3/es/components/dialog/style/css
```

将路径中的 `es` 替换为 `lib` 可对应 `lib` 构建产物下的同名路径。

```ts
import '@kdocs/kdesign-vue3/es/components/dialog/style/css'
```

## 类型导入示例

```ts
import type {
  DialogBeforeCloseFn,
  DialogEmits,
  DialogHandler,
  DialogMethodOptions,
  DialogProps,
} from '@kdocs/kdesign-vue3'
```

## `KdDialog` Props（摘要）

头部与内容区外观（居中、全屏、尺寸、关闭图标等）与弹层行为（遮罩、延时、挂载、`before-close` 等）由同一套 props 描述，常见项如下：

| 属性 | 说明 | 类型 / 约束 | 默认值 |
|------|------|----------------|--------|
| `model-value` / `v-model` | 是否显示 | `boolean` | — |
| `title` | 标题文案 | `string` | `''` |
| `subtitle` | 副标题 | `string` | `''` |
| `size` | 尺寸 | `''` \| `large` \| `medium` \| `small` | `''` |
| `center` | 头尾区域居中 | `boolean` | `false` |
| `align-center` | 对话框整体垂直水平居中 | `boolean` | `false` |
| `fullscreen` | 全屏 | `boolean` | `false` |
| `draggable` | 可拖拽（**全屏时无效**；拖拽时 **`width`** 不宜用百分比） | `boolean` | `false` |
| `show-close` | 显示关闭按钮 | `boolean` | `true` |
| `show-back` | 显示返回按钮 | `boolean` | `false` |
| `append-to-body` | 将对话框根节点挂到 `body`；**嵌套弹窗时内层建议为 `true`** | `boolean` | `false` |
| `destroy-on-close` | 关闭后销毁内容区 | `boolean` | `false` |
| `close-on-click-modal` | 点击遮罩关闭 | `boolean` | `true` |
| `close-on-press-escape` | `Esc` 关闭（无遮罩或非模态场景下行为以实际为准） | `boolean` | `true` |
| `lock-scroll` | 打开时锁定 `body` 滚动 | `boolean` | `true` |
| `modal` | 是否显示遮罩 | `boolean` | `true` |
| `modal-class` | 遮罩层额外 class | `string` | — |
| `before-close` | 关闭前钩子，调用传入的 **`done`** 才会真正关闭 | `DialogBeforeCloseFn` | — |
| `open-delay` / `close-delay` | 打开 / 关闭前延迟（毫秒） | `number` | `0` |
| `width` / `top` | 宽度 / 顶部偏移（如 `15vh`） | `string` \| `number` | — |
| `z-index` | 层级 | `number` | — |
| `transition` | 过渡 `name` | `string` | `dialog-fade` |
| `trap-focus` | 焦点陷阱 | `boolean` | `false` |
| `header-aria-level` | 标题语义层级 | `string` | `'2'` |
| `virtual-ref` / `virtual-triggering` | 无遮罩时对齐虚拟触发元，用于「非模态框」等场景（与 Popper 触发器能力一致） | 见类型定义 | — |
| `custom-class` ^(deprecated) | 自定义容器 class，建议改用原生 **`class`** | `string` | `''` |

## `KdDialog` Emits

| 事件名 | 载荷 |
|--------|------|
| `update:modelValue` | `boolean` |
| `open` / `opened` | — |
| `close` / `closed` | 可选关闭来源 `string` |
| `open-auto-focus` / `close-auto-focus` | — |

## `KdDialog` Slots

| 名称 | 说明 |
|------|------|
| `default` | 主体内容 |
| `header` | 自定义标题区（保留关闭等外壳行为） |
| `title` ^(deprecated) | 与 **`header`** 类似，**新用法请优先 `header`** |
| `footer` | 底部操作区 |
| `prefix` / `suffix` | 标题区前 / 后缀 |
| `actions` | 标题区后置操作 |

## 命令式 `KdDialogFn`

无需在模板中声明 **`<kd-dialog>`**，通过函数打开；返回 **`{ close }`** 用于主动关闭，**`KdDialogFn.closeAll()`** 可关闭所有命令式实例。

**`DialogMethodOptions`** 在 **`DialogProps`**（去掉 **`modelValue`** 及虚拟触发专用字段）基础上增加 **`content` / `header` / `footer`**（字符串、`VNode` 或渲染函数）以及 **`onOpen` / `onOpened` / `onClose` / `onClosed`**。命令式默认 **`appendToBody: true`**（见实现侧默认值）。

```ts
import { KdDialogFn } from '@kdocs/kdesign-vue3'

const { close } = KdDialogFn({ title: '提示', content: '正文' })
```
