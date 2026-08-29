# DatePicker · API 参考

> 导入：`import { DatePicker } from '@kdocs/kdesign'`

#### 类型声明

```js
export type DateValue = string | number | Date;

export type DateMultipleValue = DateValue[];

export interface DisableDateObj {
  from?: string;
  to?: string;
  before?: string;
  after?: string;
}

export type DisableDate = DateValue[] | DisableDateObj | ((date: DateValue) => boolean);

export type PresetDateItem = {
  label: string;
  value: Date | (() => Date) | Date[] | (() => Date[]);
};

export type PresetDate = PresetDateItem[];

export type DatePickerValueType =
  | 'time-stamp'
  | 'Date'
  | 'YYYY'
  | 'YYYY-MM'
  | 'YYYY-MM-DD'
  | 'YYYY-MM-DD HH'
  | 'YYYY-MM-DD HH:mm'
  | 'YYYY-MM-DD HH:mm:ss'
  | 'YYYY-MM-DD HH:mm:ss:SSS';

export type DateTime = Pick<
  DatePickerCellProps,
  | 'additional'
  | 'active'
  | 'highlight'
  | 'hoverHighlight'
  | 'startOfRange'
  | 'endOfRange'
  | 'hoverStartOfRange'
  | 'hoverEndOfRange'
  | 'value'
>;

type TranslationKeys =
  | 'back_to_today'
  | 'back_to_cur_month'
  | 'back_to_cur_year'
  | 'pick_now'
  | 'set_time'
  | 'pick_today'
  | 'confirm'
  | 'trigger_placeholder'
  | 'hour_short'
  | 'minute_short'
  | 'second_short'
  | 'disable_pick_now';

type LocaleType = 'zh-cn' | 'en' | 'zh-tw' | 'zh-hk' | 'ja' | 'th';

type Translation = Record<LocaleType, Record<TranslationKeys, string>>;

export enum LANGUAGE_ENUM {
  ZH_CN = 'zh-cn',
  ZH_HK = 'zh-hk',
  EN_US = 'en',
  ZH_TW = 'zh-tw',
  JA_JP = 'ja',
  TH_TH = 'th',
}

export enum PickerType {
  YEAR = 'year',
  MONTH = 'month',
  DATE = 'date',
}

```

#### DatePickerProps

| 参数                  | 说明                                                                                           | 类型                                                                                                   | 可选值                                                                                                    | 默认值           |
|-----------------------|------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------|------------------|
| value                 | 选中值                                                                                         | DateValue \| DateMultipleValue                                                                         | -                                                                                                         | ''               |
| defaultValue          | 选中值，非受控属性                                                                             | DateValue \| DateMultipleValue                                                                         | -                                                                                                         | ''               |
| disabled              | 是否禁用组件                                                                                   | boolean                                                                                                | -                                                                                                         | -                |
| readonly              | 是否只读                                                                                       | boolean                                                                                                | -                                                                                                         | -                |
| inline                | inline 模式，内嵌选择器组件，不以 popover 形式弹出                                             | boolean                                                                                                | -                                                                                                         | false            |
| disableDate           | 禁用日期：支持数组，数组内为需要禁用的日期支持对象，对象内包含 from、to、before、after 四个属性，分别表示禁用范围支持函数，函数内返回 true 表示禁用 | DisableDate                                                                                            | -                                                                                                         | -                |
| yearRange             | 年份可选择范围（如 [2000, 2020]）                                                              | number[]                                                                                               | -                                                                                                         | -                |
| defaultTime           | 时间选择器默认值，当 value/defaultValue 未设置值时有效                                         | string                                                                                                 | -                                                                                                         | '00:00:00'       |
| enableTimePicker      | 是否显示时间选择                                                                               | boolean                                                                                                | -                                                                                                         | false            |
| disableTime           | 禁用时间的函数                                                                                 | (time: Date) => Partial<{ hour: number[]; minute: number[]; second: number[]; millisecond: number[]; }> | -                                                                                                         | -                |
| type                  | 选择器类型                                                                                     | PickerType                                                                                             | PickerType.YEAR、PickerType.MONTH、PickerType.DATE                                                        | -                |
| lang                  | 语种                                                                                           | LANGUAGE_ENUM                                                                                          | -                                                                                                         | -                |
| translations          | 内置中文简体，中文繁体，英文翻译。如需自定义翻译内容可传入                                      | Translation                                                                                            | -                                                                                                         | -                |
| triggerElement        | 自定义触发器元素                                                                               | React.ReactNode                                                                                        | -                                                                                                         | -                |
| inputProps            | 输入框属性                                                                                     | InputProps                                                                                             | -                                                                                                         | { placeholder: '请选择' } |
| popupProps            | 弹出框属性                                                                                     | IPopoverProps                                                                                          | -                                                                                                         | -                |
| firstDayOfWeek        | 第一天从星期几开始（1 到 7）                                                                   | number                                                                                                 | -                                                                                                         | 7（星期日）      |
| format                | 时间格式                                                                                       | string                                                                                                 | -                                                                                                         | -                |
| valueType             | 日期输出格式                                                                                   | DatePickerValueType                                                                                    | 'time-stamp'、'Date'、'YYYY'、'YYYY-MM'、'YYYY-MM-DD'、'YYYY-MM-DD HH'、'YYYY-MM-DD HH:mm'、'YYYY-MM-DD HH:mm:ss'、'YYYY-MM-DD HH:mm:ss:SSS' | -                |
| presets               | 预设日期                                                                                       | PresetDate                                                                                             | -                                                                                                         | []               |
| needConfirm           | 决定在日期时间选择器的场景下（type='date' && enableTimePicker=true）是否需要点击确认按钮才完成选择动作 | boolean                                                                                                | -                                                                                                         | true             |
| onConfirm             | 点击 “确定” 按钮时触发                                                                         | (context: { date: Date \| Date[]; e?: MouseEvent; partial?: TimeRangePickerPartial; }) => void          | -                                                                                                         | -                |
| showTimePickerEntry   | 是否展示【设置时间】入口                                                                       | boolean                                                                                                | -                                                                                                         | false            |
| defaultShowTimePicker | 【设置时间】默认是否选中                                                                       | boolean                                                                                                | -                                                                                                         | false            |
| renderExtraFooter     | 渲染额外内容                                                                                   | () => React.ReactNode \| string                                                                        | -                                                                                                         | -                |
| onShowTimePickerChange| 【设置时间】入口的复选框事件回调                                                               | (checked: boolean) => void                                                                             | -                                                                                                         | -                |
| onPresetClick         | 点击 “预设” 按钮时触发                                                                         | (preset) => void                                                                                       | -                                                                                                         | -                |
| hidePickCurrentPreset | 是否显示 “选择今天、选择此刻” 按钮                                                             | boolean                                                                                                | -                                                                                                         | false            |
| onTimeChange          | 时间切换发生变化时触发                                                                         | (context: { time: string; date: Date \| Date[]; trigger: string; partial?: TimeRangePickerPartial; e?: MouseEvent; }) => void | -                                                                                                         | -                |
| onPick                | 面板选中值后触发                                                                               | (value: DateValue, { e, partial }) => void                                                             | -                                                                                                         | -                |
| onChange              | 选中值发生变化时触发                                                                           | (value: DateValue \| DateMultipleValue, { dayjsValue, trigger }) => void                               | -                                                                                                         | -                |
