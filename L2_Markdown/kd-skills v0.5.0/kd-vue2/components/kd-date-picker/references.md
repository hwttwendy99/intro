# KdDatePicker · API 参考

> 组件标签：`<kd-date-picker>` · 包：`@kdocs/kdesign-vue`

## Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| value / v-model | 绑定值 | date(DatePicker) / array(DateRangePicker) | — | — |
| readonly | 完全只读 | boolean | — | false |
| disabled | 禁用 | boolean | — | false |
| editable | 文本框可输入 | boolean | — | true |
| clearable | 是否显示清除按钮 | boolean | — | true |
| size | 输入框尺寸 | string | large, small, mini | — |
| placeholder | 非范围选择时的占位内容 | string | — | — |
| start-placeholder | 范围选择时开始日期的占位内容 | string | — | — |
| end-placeholder | 范围选择时结束日期的占位内容 | string | — | — |
| type | 显示类型 | string | year/month/date/dates/ week/datetime/datetimerange/ daterange/monthrange | date |
| format | 显示在输入框中的格式 | string | 见日期格式 | yyyy-MM-dd |
| align | 对齐方式 | string | left, center, right | left |
| popper-class | DatePicker 下拉框的类名 | string | — | — |
| picker-options | 当前时间日期选择器特有的选项参考下表 | object | — | {} |
| range-separator | 选择范围时的分隔符 | string | — | '-' |
| default-value | 可选，选择器打开时默认显示的时间 | Date | 可被new Date()解析 | — |
| default-time | 范围选择时选中日期所使用的当日内具体时刻 | string[] | 数组，长度为 2，每项值为字符串，形如12:00:00，第一项指定开始日期的时刻，第二项指定结束日期的时刻，不指定会使用时刻 00:00:00 | — |
| value-format | 可选，绑定值的格式。不指定则绑定值为 Date 对象 | string | 见日期格式 | — |
| name | 原生属性 | string | — | — |
| unlink-panels | 在范围选择器里取消两个日期面板之间的联动 | boolean | — | false |
| prefix-icon | 自定义头部图标的类名 | string | — | el-icon-date |
| clear-icon | 自定义清空图标的类名 | string | — | el-icon-circle-close |
| validate-event | 输入时是否触发表单的校验 | boolean | - | true |

## Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| shortcuts | 设置快捷选项，需要传入 { text, onClick } 对象用法参考 demo 或下表 | Object[] | — | — |
| disabledDate | 设置禁用状态，参数为当前日期，要求返回 Boolean | Function | — | — |
| cellClassName | 设置日期的 className | Function(Date) | — | — |
| firstDayOfWeek | 周起始日 | Number | 1 到 7 | 7 |
| onPick | 选中日期后会执行的回调，只有当 daterange 或 datetimerange 才生效 | Function({ maxDate, minDate }) | — | — |

## Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| text | 标题文本 | string | — | — |
| onClick | 选中后的回调函数，参数是 vm，可通过触发 'pick' 事件设置选择器的值。例如 vm.$emit('pick', new Date()) | function | — | — |

## Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| type | 选择器类型 | String | year/month/date/date-time | date |
| value / v-model | 绑定值 | Number/String/Date | 可被dayjs()解析 | — |
| defaultValue | 选择器打开时默认显示的时间 | Number/String/Date | 可被dayjs()解析 | — |
| disabled | 禁用选择器 | Boolean | — | false |
| readonly | 只读 | Boolean | — | false |
| inline | 内嵌选择器组件，不以popover形式弹出 | Boolean | — | false |
| yearRange | 年份可选择范围 | Array | Eg: [2000, 2020] | [此刻年份 - 10, 此刻年份 + 10] |
| firstDayOfWeek | 周起始日 | Number | 1 到 7 | 7 |
| disabledDate | 禁选时间函数，当返回值为true的时间会被禁选。 | (date: Date) => Boolean | — | — |
| valueFormat | 指定选择器内置触发器(输入框)时间展示格式 以及 回调方法参数dateStr 的时间格式 | String | 参考dayjs() format格式 | 年份选择器: 'YYYY', 月份选择器: 'YYYY-MM', 日期选择器: 'YYYY-MM-DD', 日期时间选择器: 'YYYY-MM-DD HH:mm:ss' |
| popperProps | 透传给面板弹窗popover的属性, disabled/trigger/value/content除外 | 参考kd-popover props类型 | — | — |
| inputProps | 透传给选择器内置触发器(输入框)属性, disabled/readonly/value除外 | 参考kd-input props类型 | — | — |
| timePickerProps | 仅type="date-time"时有效，透传给date-time面板时间选择器的属性 | 参考kd-time-picker props类型 | — | — |
| lang | 语种 | String/Object | 参考dayjs国际化语种 | 'zh' |
| translations | 翻译资源 | Record<[key in lang]?: Record<[key]?: string>> | — | 内置中文简体，中文繁体，英文，阿拉伯语翻译。具体内容查看多语言部分 |

## Events

| 事件名称 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 用户确认选定的值时触发 | 组件绑定值。格式与绑定值一致，可受 value-format 控制 |
| blur | 当 input 失去焦点时触发 | 组件实例 |
| focus | 当 input 获得焦点时触发 | 组件实例 |

## Events

| 事件名称 | 说明 | 回调参数 |
| --- | --- | --- |
| pick | 用户确认选定的值时触发 | (date: Date, { dateStr: String }), 选中的日期和格式化的日期字符串 |
| timeHover | 用户鼠标hover到可选的时间时触发 / 离开面板时触发，参数为上一次选中时间 | (date: Date, { dateStr: String })，选择中的日期和格式化的日期字符串 |
| open | 打开面板时触发 | - |
| close | 关闭面板时触发 | - |

## Methods

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| focus | 使 input 获取焦点 | — |

## Methods

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| pick | 使日期选择器选中日期 | (date: Date), 选中的日期 |
| clear | 使日期选择器清空选中日期 | — |
| updateSelecting | 使日期选择器变成正在选择传入日期状态， 如面板定位到选择中日期 | (date: Date), 选择中的日期 |
| open | 使以弹窗形式弹出的日期选择器面板打开 | — |
| close | 使以弹窗形式弹出的日期选择器面板关闭 | —默认 |

