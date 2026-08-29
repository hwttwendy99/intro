# Input · API 参考

> 导入：`import { Input } from '@kdocs/kdesign'`

#### Input 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| type | 类型 | string | 原生input类型 | text |
| value | 绑定值 | string / number | -- | -- |
| defaultValue | 默认值 | string / number | -- | -- |
| placeholder | 输入框占位文本 | string | -- | -- |
| disabled | 禁用 | boolean | -- | false |
| size | 输入框尺 | string | 'large' \| 'medium' \| 'small' | medium |
| readOnly | 原生属性，是否只读 | boolean | -- | false |
| prefixIcon | 输入框头部图标 | string/HTMLElement | -- | -- |
| suffixIcon | 输入框尾部图标 | string/HTMLElement | -- | -- |
| prefixIconDisabled | 禁用头部 icon | boolean | -- | false |
| suffixIconDisabled | 禁用尾部 icon | boolean | -- | false |
| prepend | 前置元素 | HTMLElement | -- | -- |
| append | 后置元素 | HTMLElement | -- | -- |
| maxLength | 最大输入长度。countOnly 为 true 表示只做字数统计，不实际限制输入 | number / {length:number, countOnly: boolean} |  | -- | -- |
| autoValid | 是否开启自动校验 | boolean | -- | false |
| showClean | 是否显示清空按钮 | boolean | -- | true |
| showCount | 是否显示字数统计 | boolean | -- | true |
| trim | 是否清除首尾空格，onChange回调时生效 | boolean | -- | true |
| loading | 是否显示 loading 按钮 | boolean | -- | false |
| status | 状态 | string | '' / error | '' |
| textAlign | 文字位置 | string | left / center / right | left |
| helpText | 帮助文字 | string |  |  |

#### Input 事件

| 参数               | 说明                           | 类型 |
| ------------------ | ----------------------------- | -------- |
| onFocus            | 当 input focus 时触发的事件    | function(e)    |
| onBlur             | 当 input blur 时触发的事件     | function(e)    |
| onChange           | 当绑定值变化时触发的事件        | function(e, value) |
| onPrefixIconClick  | 当头部 icon 点击时时触发的事件  | function(e)    |
| onSuffixIconClick  | 当尾部 icon 点击时时触发的事件  | function(e)    |
| onMouseEnter       | 当鼠标进入时触发的事件          | function(e)    |
| onMouseLeave       | 当鼠标移出时触发的事件          | function(e)    |
| onCompositionStart | compositionstart              | function(e)    |
| onCompositionEnd   | onCompositionEnd              | function(e)    |
