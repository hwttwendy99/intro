# KdTimePicker · API 参考

> 组件标签：`<kd-time-picker>` · 包：`@kdocs/kdesign-vue`

## Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| value / v-model | 绑定值 | date(TimePicker) / string(TimeSelect) | — | — |
| readonly | 完全只读 | boolean | — | false |
| disabled | 禁用 | boolean | — | false |
| editable | 文本框可输入 | boolean | — | true |
| clearable | 是否显示清除按钮 | boolean | — | true |
| size | 输入框尺寸 | string | medium / small / mini | — |
| placeholder | 非范围选择时的占位内容 | string | — | — |
| start-placeholder | 范围选择时开始日期的占位内容 | string | — | — |
| end-placeholder | 范围选择时开始日期的占位内容 | string | — | — |
| is-range | 是否为时间范围选择，仅对<kd-time-picker>有效 | boolean | — | false |
| arrow-control | 是否使用箭头进行时间选择，仅对<kd-time-picker>有效 | boolean | — | false |
| align | 对齐方式 | string | left / center / right | left |
| popper-class | TimePicker 下拉框的类名 | string | — | — |
| picker-options | 当前时间日期选择器特有的选项参考下表 | object | — | {} |
| range-separator | 选择范围时的分隔符 | string | - | '-' |
| value-format | 可选，仅TimePicker时可用，绑定值的格式。不指定则绑定值为 Date 对象 | string | 见日期格式 | — |
| default-value | 可选，选择器打开时默认显示的时间 | Date(TimePicker) / string(TimeSelect) | 可被new Date()解析(TimePicker) / 可选值(TimeSelect) | — |
| name | 原生属性 | string | — | — |
| prefix-icon | 自定义头部图标的类名 | string | — | kd-icon-time |
| clear-icon | 自定义清空图标的类名 | string | — | kd-icon-circle-close |

## Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| start | 开始时间 | string | — | 09:00 |
| end | 结束时间 | string | — | 18:00 |
| step | 间隔时间 | string | — | 00:30 |
| minTime | 最小时间，小于该时间的时间段将被禁用 | string | — | 00:00 |
| maxTime | 最大时间，大于该时间的时间段将被禁用 | string | — | — |

## Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| selectableRange | 可选时间段，例如'18:30:00 - 20:30:00'或者传入数组['09:30:00 - 12:00:00', '14:30:00 - 18:30:00'] | string / array | — | — |
| format | 时间格式化(TimePicker) | string | 小时：HH，分：mm，秒：ss，AM/PM A | 'HH:mm:ss' |

## Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| value / v-model | 绑定值 | Number/String/Date | 可被dayjs()解析 | — |
| defaultValue | 可选，选择器打开时默认显示的时间 | Number/String/Date | 可被dayjs()解析 | — |
| disabled | 禁用选择器 | Boolean | — | false |
| readonly | 只读 | Boolean | — | false |
| inline | 内嵌选择器组件，不以popover形式弹出 | Boolean | — | false |
| items | 可选的时间单位 | Array | 'h', 'm', 's' | ['h', 'm', 's'] |
| step | 时间单位步长。支持传入数组分开设置步长， 取值按items数组顺序 | Number / Numer[] | — | 1 |
| disabledTime | 禁选时间函数，当返回值为true的时间会被禁选。 | (date: Date) => Boolean | — | — |
| valueFormat | 指定选择器内置触发器(输入框)时间展示格式 以及 回调方法参数dateStr 的时间格式 | String | 参考dayjs() format格式 | 'HH:mm:ss' |
| popperProps | 透传给面板弹窗popover的属性, disabled/trigger/value/content除外 | 参考kd-popover props类型 | — | — |
| inputProps | 透传给选择器内置触发器(输入框)属性, disabled/readonly/value除外 | 参考kd-input props类型 | — | — |
| lang | 语种 | String | 参考dayjs国际化语种 | 'zh' |
| translations | 翻译资源 | Record<[key in lang]?: Record<[key]?: string>> | — | 内置中文简体，中文繁体，英文翻译。具体内容查看多语言部分 |

## Events

| 事件名称 | 说明 | 回调参数 |
| --- | --- | --- |
| pick | 用户确认选定的值时触发 | (date: Date, { dateStr: String }), 选中的日期和格式化的日期字符串 |
| timeHover | 用户滚动或点击到时间时触发，参数为上一次选中时间 | (date: Date, { dateStr: String })，选择中的日期和格式化的日期字符串 |
| open | 打开面板时触发 | - |
| close | 关闭面板时触发 | - |

## Methods

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| pick | 使时间选择器选中时间 | (date: Date),选中的日期 |
| clear | 使时间选择器清空选中时间 | — |
| updateSelecting | 使时间选择器变成正在选择传入时间状态， 如滚轮面板样式变化 | (date: Date), 选择中的日期 |
| open | 使以弹窗形式弹出的日期选择器面板打开 | — |
| close | 使以弹窗形式弹出的日期选择器面板关闭 | —\n    排序：\n |

