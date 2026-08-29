# Textarea · API 参考

> 导入：`import { Textarea } from '@kdocs/kdesign'`

#### TextArea 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| className | 自定义样式类 | string | -- | -- |
| name | textarea 名称 | string | -- | -- |
| disabled | 禁用 | boolean | -- | false |
| value | 绑定值 | string \| number | -- | '' |
| value | 默认值 | string \| number | -- | '' |
| placeholder | 输入框占位文本 | string | -- | -- |
| autoSize | 自适应内容高度，可传入对象，如，{ minRows: 2, maxRows: 6 } | boolean\|object | -- | -- |
| autoValid | 是否开启自动校验 | boolean | -- | false |
| readOnly | 原生属性，是否只读 | boolean | -- | false |
| autoFocus | 原生属性，是否聚焦 | boolean | -- | false |
| maxLength | 最大输入长度。countOnly 为 true 表示只做字数统计，不实际限制输入 | number / {length:number, countOnly: boolean} |  | -- | -- |
| minLength | TODO: | number | -- | -- |
| showClean | 是否显示清空按钮 | boolean | -- | true |
| showCount | 是否显示字数统计，maxLength 需同时传值 | boolean | -- | false |
| status | 状态 | string | '' / error | '' |

#### TextArea 事件

| 参数               | 说明                        | 类型 |
| ------------------ | --------------------------- | -------- |
| onFocus            | 当 input focus 时触发的事件 | function(e)    |
| onBlur             | 当 input blur 时触发的事件  | function(e)    |
| onChange           | 当绑定值变化时触发的事件     | function(e, value) |
| onCompositionStart | onCompositionstart          | function(e)    |
| onCompositionEnd   | onCompositionEnd            | function(e)    |

#### TextArea 方法

| 参数       | 说明                 | 参数 |
| ---------- | -------------------- | -------- |
| getElement | 获取到 textarea 节点 |          |
| focus      | 触发 textarea 聚焦   |          |
| blur       | 触发 textarea blur   |          |
