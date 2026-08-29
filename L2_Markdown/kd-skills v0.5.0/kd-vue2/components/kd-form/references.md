# KdForm · API 参考

> 组件标签：`<kd-form>` · 包：`@kdocs/kdesign-vue`

## `FormItem` Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| prop | 表单域 model 字段，在使用 validate、resetFields 方法的情况下，该属性是必填的 | string | 传入 Form 组件的 model 中的字段 | — |
| label | 标签文本 | string | — | — |
| label-width | 表单域标签的的宽度，例如 '50px'。支持 auto。 | string | — | — |
| required | 是否必填，如不设置，则会根据校验规则自动生成 | boolean | — | false |
| rules | 表单验证规则 | object | — | — |
| error | 表单域验证错误信息, 设置该值会使表单验证状态变为error，并显示该错误信息 | string | — | — |
| show-message | 是否显示校验错误信息 | boolean | — | true |
| inline-message | 以行内形式展示校验信息 | boolean | — | false |
| size | 用于控制该表单域下组件的尺寸 | string | medium / small / mini | - |

## Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| model | 表单数据对象 | object | — | — |
| rules | 表单验证规则 | object | — | — |
| inline | 行内表单模式 | boolean | — | false |
| label-position | 表单域标签的位置，如果值为 left 或者 right 时，则需要设置 label-width | string | right/left/top | right |
| label-width | 表单域标签的宽度，例如 '50px'。作为 Form 直接子元素的 form-item 会继承该值。支持 auto。 | string | — | — |
| label-suffix | 表单域标签的后缀 | string | — | — |
| hide-required-asterisk | 是否隐藏必填字段的标签旁边的红色星号 | boolean | — | false |
| show-message | 是否显示校验错误信息 | boolean | — | true |
| inline-message | 是否以行内形式展示校验信息 | boolean | — | false |
| status-icon | 是否在输入框中显示校验结果反馈图标 | boolean | — | false |
| validate-on-rule-change | 是否在 rules 属性改变后立即触发一次验证 | boolean | — | true |
| size | 用于控制该表单内组件的尺寸 | string | medium / small / mini | — |
| disabled | 是否禁用该表单内的所有组件。若设置为 true，则表单内组件上的 disabled 属性不再生效 | boolean | — | false |

## `FormItem` Methods

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| resetField | 对该表单项进行重置，将其值重置为初始值并移除校验结果 | - |
| clearValidate | 移除该表单项的校验结果 | - |

## Methods

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| validate | 对整个表单进行校验的方法，参数为一个回调函数。该回调函数会在校验结束后被调用，并传入两个参数：是否校验成功和未通过校验的字段。若不传入回调函数，则会返回一个 promise | Function(callback: Function(boolean, object)) |
| validateField | 对部分表单字段进行校验的方法 | Function(props: array \| string, callback: Function(errorMessage: string)) |
| resetFields | 对整个表单进行重置，将所有字段值重置为初始值并移除校验结果 | — |
| clearValidate | 移除表单项的校验结果。传入待移除的表单项的 prop 属性或者 prop 组成的数组，如不传则移除整个表单的校验结果 | Function(props: array \| string) |

