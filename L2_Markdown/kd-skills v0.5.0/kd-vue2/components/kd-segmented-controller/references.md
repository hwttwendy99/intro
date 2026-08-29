# KdSegmentedController · API 参考

> 组件标签：`<kd-segmented-controller>` · 包：`@kdocs/kdesign-vue`

## `Segmentedcontroller` Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| active | 当前激活项，单选传string，多选传array | string/array | — | — |
| multi | 是否多选 | boolean | — | false |

## `Segmenteditem` Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| name | 名称，必填 | string | — | - |
| disabled | 禁用 | boolean | — | false |
| icon | 图标 | object | — | - |
| tooltip | 是否展示 tooltip，配置项见 tooltip 组件 | object | — | - |
| text | 文案，长度大于20字符则省略号标识(中英文都为一个字符长度计算) | string | — | - |

