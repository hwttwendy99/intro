# KdSteps · API 参考

> 组件标签：`<kd-steps>` · 包：`@kdocs/kdesign-vue`

## `Step` Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| title | 标题 | string | — | — |
| description | 描述性文字 | string | — | — |
| icon | 图标 | 传入 icon 的 class 全名来自定义 icon，也支持 slot 方式写入 | string | — |
| status | 设置当前步骤的状态，不设置则根据 steps 确定状态 | wait / process / finish / error / success | - |  |

## Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| space | 每个 step 的间距，不填写将自适应间距。支持百分比。 | number / string | — | — |
| direction | 显示方向 | string | vertical/horizontal | horizontal |
| active | 设置当前激活步骤 | number | — | 0 |
| process-status | 设置当前步骤的状态 | string | wait / process / finish / error / success | process |
| finish-status | 设置结束步骤的状态 | string | wait / process / finish / error / success | finish |
| align-center | 进行居中对齐 | boolean | - | false |
| simple | 是否应用简洁风格 | boolean | - | false |

## `Step` Slots

| name | 说明 |
| --- | --- |
| icon | 自定义图标 |
| title | 自定义标题 |
| description | 自定义描述性文字 |

