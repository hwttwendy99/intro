# Tag · API 参考

> 导入：`import { Tag } from '@kdocs/kdesign'`

#### Tag 属性

| 参数            | 说明                     | 类型    | 可选值                 | 默认值 |
| --------------- | ------------------------ | ------- | ---------------------- | ------ | ------ |
| size            | 尺寸                     | string  | small / medium / large | --     | medium |
| closable        | 是否可关闭               | boolean | --                     | false  |
| disabled        | 是否禁用                 | boolean | --                     | false  |
| closeTransition | 是否禁用关闭时的渐变动画 | boolean | --                     | false  |
| color           | 背景色                   | string  | --                     | --     |

#### Tag 事件

| 参数    | 说明                  | 回调参数 |
| ------- | --------------------- | -------- |
| onClose | 关闭 tag 时触发的事件 | value    |
