# TimePicker · API 参考

> 导入：`import { TimePicker } from '@kdocs/kdesign'`

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

export type TimePickerValue = string;

export type TimeRangeValue = TimePickerValue[];

```

#### TimePickerProps

| 参数              | 说明                 | 类型                                                                                                   | 可选值 | 默认值                       |
|-------------------|----------------------|--------------------------------------------------------------------------------------------------------|--------|------------------------------|
| lang              | 语种                 | LANGUAGE_ENUM                                                                                          | -      | -                            |
| translations      | 自定义翻译           | Translation                                                                                            | -      | -                            |
| steps             | 步骤                 | (string \| number)\[\]                                                                                 | -      | -                            |
| format            | 格式                 | string                                                                                                 | -      | -                            |
| value             | 值                   | TimePickerValue \| TimeRangeValue                                                                      | -      | -                            |
| defaultValue      | 默认值               | DateValue \| DateMultipleValue                                                                         | -      | -                            |
| disabled          | 是否禁用             | boolean                                                                                                | -      | -                            |
| readonly          | 是否只读             | boolean                                                                                                | -      | -                            |
| hideDisabledTime  | 是否隐藏禁用时间     | boolean                                                                                                | -      | -                            |
| autoSwap          | 是否自动调换左右区间 | boolean                                                                                                | -      | true                         |
| inputProps        | 输入框属性           | InputProps                                                                                             | -      | { placeholder: '请选择' }     |
| popupProps        | 弹出框属性           | IPopoverProps                                                                                          | -      | -                            |
| presets           | 预设日期             | PresetDate                                                                                             | -      | \[\]                         |
| disableTime       | 禁用时间的函数       | (h: number, m: number, s: number, ms: number, context?: { partial: TimeRangePickerPartial }) => Partial<{ hour: number[]; minute: number[]; second: number[] }> | -      | -                            |
| onPick            | 选中时触发           | (value: TimePickerValue \| TimeRangeValue) => void                                                     | -      | -                            |
| onChange          | 值变化时触发         | (val: TimePickerValue \| TimeRangeValue) => void                                                       | -      | -                            |
