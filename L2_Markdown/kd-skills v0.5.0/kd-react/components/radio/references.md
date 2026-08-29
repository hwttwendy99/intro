# Radio · API 参考

> 导入：`import { Radio } from '@kdocs/kdesign'`

#### Radio 属性

| 参数     | 说明             | 类型            | 可选值 | 默认值 |
| -------- | ---------------- | --------------- | ------ | ------ |
| checked  | Radio 是否被选中 | boolean         | --     | false  |
| value    | Radio 的 value   | string / number | --     | --     |
| disabled | 是否禁用         | boolean         | --     | false  |

#### Radio 事件

| 参数     | 说明                     | 回调参数 |
| -------- | ------------------------ | -------- |
| onChange | 当绑定值变化时触发的事件 | value    |

#### RadioGroup 属性

| 参数   | 说明           | 类型            | 可选值                    | 默认值     |
| ------ | -------------- | --------------- | ------------------------- | ---------- |
| value  | Radio 的 value | string / number | --                        | --         |
| layout | 排版           | string          | 'horizontal' / 'vertical' | horizontal |

#### RadioGroup 事件

| 参数     | 说明                     | 回调参数 |
| -------- | ------------------------ | -------- |
| onChange | 当绑定值变化时触发的事件 | value    |
