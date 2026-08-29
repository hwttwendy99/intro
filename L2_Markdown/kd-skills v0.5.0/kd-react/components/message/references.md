# Message · API 参考

> 导入：`import { Message } from '@kdocs/kdesign'`

#### Message 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| className | 自定义 CSS class | string | - | - |
| type | 主题 | string | success/warning/info/error/loading | -- |
| icon | 自定义 icon (设置该属性时，type 为默认样式) | string |  | -- |
| message | 消息文字 | string / HTMLElement | -- | -- |
| getContainer | 自定义容器 | function / HTMLElement | -- | -- |
| duration | 显示时间, 毫秒。设为 0 则不会自动关闭 | number | -- | 3000 |
| top | 距离顶部的位置 | number | -- | 72 |
| showClose | 是否显示关闭按钮 | boolean | -- | false |
| fullViewport | 沙盒环境下是否将 message 提升到外部 | boolean | -- | true |

#### Message 事件

| 参数    | 说明                                              | 类型                               |
| ------- | ------------------------------------------------- | ---------------------------------- |
| onClose | 关闭时的回调函数，点击关闭按钮时会回传 event 对象 | (e?: React.SyntheticEvent) => void |

#### Message 方法

| 参数    | 说明                | 类型     |
| ------- | ------------------- | -------- |
| success | Message.success({}) | function |
| warning | Message.warning({}) | function |
| info    | Message.info({})    | function |
| error   | Message.error({})   | function |
| loading | Message.loading({}) | function |
