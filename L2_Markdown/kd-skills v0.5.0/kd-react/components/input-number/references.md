# InputNumber · API 参考

> 导入：`import { InputNumber } from '@kdocs/kdesign'`

#### Input Number 属性
| 参数   | 说明 | 类型   | 可选值              | 默认值     |
| ------ | ---- | ------ | ------------------- | ---------- |
| defaultValue   | 默认值 | number |   |  0    |
| value   | 绑定值（外部修改） | number |   |      |
| size   | 尺寸 | string | small\|medium\|large  |  large    |
| step | 步数 | string |  | 1 |
| max | 最大值 | number |  | 无极限 |
| min | 最小值 | number |  | 0 |
| unit | 单位 | string |  |  |
| disabled | 禁用 | boolean |  | false |

#### Input Number 事件
|  参数   | 说明  | 回调参数 |
|  ----   | ----  |----  |
| onChange  | 当绑定值变化时触发的事件 | value |
| onIncrease  | 点击步进按钮-增加触发的事件 | value |
| onDecrease  | 点击步进按钮-减小触发的事件 | value |
