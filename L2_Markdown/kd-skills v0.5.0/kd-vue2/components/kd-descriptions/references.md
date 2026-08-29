# KdDescriptions · API 参考

> 组件标签：`<kd-descriptions>` · 包：`@kdocs/kdesign-vue`

## `DescriptionsItem` Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| label | 标签文本 | string | — | — |
| span | 列的数量 | number | — | 1 |
| labelClassName | 自定义标签类名 | string | — | — |
| contentClassName | 自定义内容类名 | string | — | — |
| labelStyle | 自定义标签样式 | object | — | — |
| contentStyle | 自定义内容样式 | object | — | — |

## Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| border | 是否带有边框 | boolean | — | false |
| column | 一行 Descriptions Item 的数量 | number | — | 3 |
| direction | 排列的方向 | string | vertical / horizontal | horizontal |
| size | 列表的尺寸 | string | medium / small / mini | — |
| title | 标题文本，显示在左上方 | string | — | — |
| extra | 操作区文本，显示在右上方 | string | — | — |
| colon | 是否显示冒号 | boolean | — | true |
| labelClassName | 自定义标签类名 | string | — | — |
| contentClassName | 自定义内容类名 | string | — | — |
| labelStyle | 自定义标签样式 | object | — | — |
| contentStyle | 自定义内容样式 | object | — | — |

## `DescriptionsItem` Slots

| Name | 说明 |
| --- | --- |
| label | 自定义标签文本点击打开 Dialog |

## Slots

| Name | 说明 |
| --- | --- |
| title | 自定义标题，显示在左上方 |
| extra | 自定义操作区，显示在右上方 |

