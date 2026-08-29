# AIProcessing · API 参考

> 导入：`import { AIProcessing } from '@kdocs/kdesign'`

#### Message 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| className | 自定义 CSS class | string | - | - |
| icon | 自定义 icon (设置该属性时，type 为默认样式) | string |  | -- |
| message | 消息文字 | string / HTMLElement | -- | Generating...|
| btnText | 按钮文字 | string  | -- | Stop Esc  |
| getContainer | 自定义容器 | function / HTMLElement | -- | -- |
| duration | 显示时间, 毫秒。设为 0 则不会自动关闭 | number | -- | 3000 |
| top | 距离顶部的位置 | number | -- | 72 |
| showClose | 是否显示关闭按钮 | boolean | -- | false |
| fullViewport | 沙盒环境下是否将 message 提升到外部 | boolean | -- | true |

#### AI Processing 事件

| 参数 | 说明 | 类型 |
| --- | --- | --- |
| onStop | 停止加载的回调函数，点击关闭按钮时会回传 event 对象 | (e?: React.SyntheticEvent) => void |

#### AI Processing 方法

| 参数    | 说明                | 类型     |
| ------- | ------------------- | -------- |
| close |  AIProcessing.close(); | function |
