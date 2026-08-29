# KdCheckbox · API 参考

> 组件标签：`<kd-checkbox>` · 包：`@kdocs/kdesign-vue`

## `CheckboxGroup` Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| value / v-model | 绑定值 | array | — | — |
| layout | 排版 | string | 'horizontal' / 'vertical' | horizontal |

## Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| value / v-model | 绑定值 | string / number / boolean | — | — |
| label | 选中状态的值（只有在checkbox-group或者绑定对象类型为array时有效） | string / number / boolean | — | — |
| disabled | 是否禁用 | boolean | — | false |
| indeterminate | 设置 indeterminate 状态，只负责样式控制 | boolean | — | false |

## `CheckboxGroup` Events

| 事件名称 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 当绑定值变化时触发的事件 | 更新后的值 |

## Events

| 事件名称 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 当绑定值变化时触发的事件 | 更新后的值 |

