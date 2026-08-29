# KdSkeleton · API 参考

> 组件标签：`<kd-skeleton>` · 包：`@kdocs/kdesign-vue`

## `SkeletonItem` Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| variant | 当前显示的占位元素的样式 | Enum(string) | p / title / button / image / circle | p |
| size | 当variant为circle时，可选值为(small/ medium / large / x-large)[默认为medium] / 当variant为p或者title时，可选值为( medium / large )[默认为medium] | string | small/ medium / large / x-large | - |
| style | 样式 style | string/object |  |  |

## Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| animated | 是否使用动画 | boolean | true / false | true |
| count | 渲染多少个 template, 建议使用尽可能小的数字 | number | integer | 1 |
| loading | 是否显示 skeleton 骨架屏 | boolean | true / false | true |
| rows | 骨架屏段落数量 | number | 正整数 | 4 |
| throttle | 延迟占位 DOM 渲染的时间, 单位是毫秒 | number | 正整数 | 0 |
| size | 默认variant为p，可以直接设置尺寸 | string | medium / large | medium |

