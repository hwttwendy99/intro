# KdTextarea · API 参考

> 组件标签：`<kd-textarea>` · 包：`@kdocs/kdesign-vue`

## Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| value / v-model | 绑定值 | string / number | — | — |
| readonly | 原生属性，是否只读 | boolean | — | false |
| disabled | 禁用 | boolean | — | false |
| status | 控制输入框为告警状态 | string | error | — |
| maxlength | 原生属性，最大输入长度 | number | — | — |
| show-word-limit | 是否显示输入字数统计 | boolean | — | false |
| blur-on-esc | 按下esc时是否同时触发失焦 | boolean | — | true |
| count-only | 是否根据maxLength, 输入超过最大值时不做截断处理 | boolean | — | false |
| placeholder | 输入框占位文本 | string | — | — |
| clearable | 是否可清空 | boolean | — | false |
| rows | 输入框行数 | number | — | 2 |
| autosize | 自适应内容高度，可传入对象，如，{ minRows: 2, maxRows: 6 } | boolean / object | — | false |
| validate-event | 输入时是否触发表单的校验 | boolean | — | true |
| label | 输入框关联的label文字 | string | — | — |

## Events

| 事件名称 | 说明 | 回调参数 |
| --- | --- | --- |
| blur | 在 Textarea 失去焦点时触发 | (event: Event) |
| focus | 在 Textarea 获得焦点时触发 | (event: Event) |
| change | 仅在输入框失去焦点时触发 | (value: string \| number) |
| input | 在 Textarea 值改变时触发 | (value: string \| number) |
| clear | 在点击由 clearable 属性生成的清空按钮时触发 | — |
| esc | 在键盘点击esc时触发, 请结合blurOnEsc使用，谨慎识别与blur事件的触发区别 | (event: Event) |

## Methods

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| focus | 使 textarea 获取焦点 | — |
| blur | 使 textarea 失去焦点 | — |
| select | 选中 textarea 中的文字 | — |

