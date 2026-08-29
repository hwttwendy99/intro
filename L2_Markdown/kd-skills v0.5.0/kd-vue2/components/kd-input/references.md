# KdInput · API 参考

> 组件标签：`<kd-input>` · 包：`@kdocs/kdesign-vue`

## Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| type | 类型 | string | text 和其他 原生 input 的 type 值，textarea请使用kd-textarea替代 | text |
| value / v-model | 绑定值 | string / number | — | — |
| text-align | 定义输入文本的对齐方式 | string | left / center / right | left |
| readonly | 原生属性，是否只读 | boolean | — | false |
| disabled | 禁用 | boolean | — | false |
| status | 控制输入框为告警状态 | string | error | — |
| loading | 控制输入框为加载状态 | boolean | - | false |
| maxlength | 原生属性，最大输入长度 | number | — | — |
| minlength | 原生属性，最小输入长度 | number | — | — |
| show-word-limit | 是否显示输入字数统计，只在  时有效type = "text" | boolean | — | false |
| placeholder | 输入框占位文本 | string | — | — |
| clearable | 是否可清空 | boolean | — | false |
| show-password | 是否显示切换密码图标 | boolean | — | false |
| size | 输入框尺寸 | string | large / middle / small | — |
| prefix-icon | 输入框头部图标 | string | — | — |
| suffix-icon | 输入框尾部图标 | string | — | — |
| show-placeholder-tooltip | 是否显示占位文本溢出提示 | boolean | true / false | true |

## Events

| 事件名称 | 说明 | 回调参数 |
| --- | --- | --- |
| blur | 在 Input 失去焦点时触发 | (event: Event) |
| focus | 在 Input 获得焦点时触发 | (event: Event) |
| change | 仅在输入框失去焦点或用户按下回车时触发 | (value: string \| number) |
| input | 在 Input 值改变时触发 | (value: string \| number) |
| clear | 在点击由 clearable 属性生成的清空按钮时触发 | — |

## Slots

| name | 说明 |
| --- | --- |
| prefix | 输入框头部内容，只对  有效type="text" |
| suffix | 输入框尾部内容，只对  有效type="text" |
| prepend | 输入框前置内容，只对  有效type="text" |
| append | 输入框后置内容，只对  有效 |

## Methods

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| focus | 使 input 获取焦点 | — |
| blur | 使 input 失去焦点 | — |
| select | 选中 input 中的文字 | — |

