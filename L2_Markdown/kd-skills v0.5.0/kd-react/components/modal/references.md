# Modal · API 参考

> 导入：`import { Modal } from '@kdocs/kdesign'`

|  参数   | 说明  | 类型  | 可选值  | 默认值  |
|  ----   | ---- | ----  | ----   |  ----  |
| visible  | 设置对话框是否可见  | `boolean` | - | | - |
| title  | 对话框标题  | `ReactNode` | - | - |
| size  | 对话框尺寸 | `string` | `small` \| `medium` \| `large` | `small` |
| width | 设置对话框宽度。string类型需携带单位，例如'400px' | `string`\| `number` | - | `480` |
| style | 设置对话框样式 | `React.CSSProperties` | - | - |
| position | 对话框定位 | `{top: number, right: number, left: number, bottom: number}` | - | - |
| closable | 是否显示关闭按钮 | `boolean` | - | `true` |
| mask | 是否展示遮罩 | `boolean` | - | `true` |
| maskClosable | 点击遮罩是否关闭弹窗 | `boolean` | - | `true` |
| draggable | 是否可拖拽 | `boolean` | - | `mask`为`true`时，默认值为`false`，否则为`true` |
| okText | 设置确认按钮文本 | `ReactNode` | - | `'Confirm'` |
| cancelText | 设置取消按钮文本 | `ReactNode` | - | `'Cancel'` |
| okButtonProps | 确认按钮属性设置 | `ButtonProps` | - | - |
| cancelButtonProps | 取消按钮属性设置 | `ButtonProps` | - | - |
| zIndex | 对话框层级 | `number` | - | - |
| animation | 对话框弹出/关闭动画 | `string` | `fade` \| `bounce` | `fade` |
| destroyOnClose | 弹窗关闭时是否销毁DOM | `boolean` | - | `true` |
| needUpdateStyle | 是否需要监听面板变化而更新style | `boolean` | - | `true` |
| keyboard | 是否支持键盘 esc 关闭 | `boolean` | - | `true` |
| lockScroll | body是否可滚动 | `boolean` | - | `false` |
| onOk | 确认按钮点击事件回调 | `function` | - | - |
| onCancel | 取消按钮点击事件回调 | `function` | - | - |
| onClose | 点击关闭按钮和蒙层的事件回调 | `function` | - | - |
| onDragMove | 拖拽回调 | `function` | - | - |
| afterShow | modal展示动画结束回调 | `function` | - | - |
| useKeyEventCapture | 控制键盘事件的触发阶段（捕获阶段或冒泡阶段） | `boolean` | - | true |
| focusOnMount | 控制组件挂载时是否​​自动将焦点移动到容器内部​​ | `boolean` | - | true |
| enableScrollOnOverflow | 是否开启高度不够时内容区允许滚动 | `boolean` | - | `false` |
| enableI18nZoom | 是否启用多语言缩放 | `boolean` | - | `false` |

### 多语言缩放比例
> 传参`enableI18nZoom`，相对中文，各种语种缩放比例如下（当前仅支持对以下语种进行缩放）

|  语种   | url 参数  | 倍数  | 
|  ----  | ---- | ---- |
| 中文  | lang=zh-CN | 1  |
| 英文  | lang=en-US | 1.15  |
| 泰文  | lang=th-TH | 1.15  |
| 日文  | lang=ja-JP | 1.15 | 
| 俄文  | lang=ru-RU | 1.25 |
| 葡萄牙文 | lang=pt-PT | 1.25 |
| 西班牙文 | lang=es-ES | 1.25 |
| 德文 | lang=de-DE | 1.25 |
| 法文 | lang=fr-FR | 1.25 |
