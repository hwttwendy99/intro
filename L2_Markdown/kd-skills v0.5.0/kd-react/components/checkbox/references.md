# Checkbox · API 参考

> 导入：`import { Checkbox } from '@kdocs/kdesign'`

#### Checkbox 属性

| 参数          | 说明                                    | 类型    | 可选值 | 默认值 |
| ------------- | --------------------------------------- | ------- | ------ | ------ |
| label         | 文案                                    | string  | --     | --     |
| disabled      | 按钮禁用                                | boolean | --     | false  |
| checked       | 当前是否勾选                            | boolean | --     | false  |
| indeterminate | 设置 indeterminate 状态，只负责样式控制 | boolean | --     | false  |

#### Checkbox 事件

| 参数     | 说明                     | 回调参数 |
| -------- | ------------------------ | -------- |
| onChange | 当绑定值变化时触发的事件 | value    |

#### CheckboxGroup 属性

| 参数   | 说明           | 类型     | 可选值                    | 默认值     |
| ------ | -------------- | -------- | ------------------------- | ---------- |
| value  | 指定选中的选项 | string[] | --                        | []         |
| layout | 排版           | string   | 'horizontal' / 'vertical' | horizontal |

#### CheckboxGroup 事件

| 参数     | 说明                     | 回调参数 |
| -------- | ------------------------ | -------- |
| onChange | 当绑定值变化时触发的事件 | value    |
