# DatePicker · 分场景示例

以下为常见用法；导入均为 `@kdocs/kdesign`。

## 1. 基础使用

#### 日期选择器

```jsx
function Demo() {
  const props = {
    value: null,
    type: 'date',
    firstDayOfWeek: 7,
    format: 'YYYY-MM-DD',
    onChange: (v, context) => {
      console.log('demo onChange', v, context);
    },
    onPick: (v) => {
      console.log('demo onPick', v);
    },
  };

  return (
    <div className="DatePicker-box">
      <DatePicker {...props} />
    </div>
  );
}
```

#### 日期时间选择器

```jsx
function Demo() {
  const props = {
    value: null,
    type: 'date',
    enableTimePicker: true,
    firstDayOfWeek: 7,
    format: 'YYYY-MM-DD HH:mm:ss',
    onChange: (v, context) => {
      console.log('demo onChange', v, context);
    },
    onPick: (v) => {
      console.log('demo onPick', v);
    },
  };

  return (
    <div className="DatePicker-box">
      <DatePicker {...props} />
    </div>
  );
}
```

#### 年份选择器

```jsx
function Demo() {
  const props = {
    value: null,
    type: 'year',
    firstDayOfWeek: 7,
    format: 'YYYY',
    onChange: (v, context) => {
      console.log('demo onChange', v, context);
    },
    onPick: (v) => {
      console.log('demo onPick', v);
    },
  };

  return (
    <div className="DatePicker-box">
      <DatePicker {...props} />
    </div>
  );
}
```

#### 月份选择器

```jsx
function Demo() {
  const props = {
    value: null,
    type: 'month',
    firstDayOfWeek: 7,
    format: 'YYYY-MM',
    onChange: (v, context) => {
      console.log('demo onChange', v, context);
    },
    onPick: (v) => {
      console.log('demo onPick', v);
    },
  };

  return (
    <div className="DatePicker-box">
      <DatePicker {...props} />
    </div>
  );
}
```

## 2. 内嵌的日期选择器

#### 日期选择器

```jsx
function Demo() {
  const [value, setValue] = useState('2025-06-25');
  const onChange = (v, context) => {
    console.log('demo onChange', v, context);
    setValue(v);
  };
  const props = {
    value,
    type: 'date',
    firstDayOfWeek: 7,
    format: 'YYYY-MM-DD',
    onChange,
    onPick: (v) => {
      console.log('demo onPick', v);
    },
    inline: true,
  };

  return (
    <div className="DatePicker-box">
      <DatePicker {...props} />
    </div>
  );
}
```

#### 日期时间选择器

```jsx
function Demo() {
  const [value, setValue] = useState(null);
  const onChange = (v, context) => {
    console.log('demo onChange', v, context);
    setValue(v);
  };
  const props = {
    value,
    type: 'date',
    enableTimePicker: true,
    firstDayOfWeek: 7,
    format: 'YYYY-MM-DD HH:mm:ss',
    onChange,
    onPick: (v) => {
      console.log('demo onPick', v);
    },
    inline: true,
  };

  return (
    <div className="DatePicker-box">
      <DatePicker {...props} />
    </div>
  );
}
```

#### 年份选择器

```jsx
function Demo() {
  const props = {
    value: null,
    type: 'year',
    firstDayOfWeek: 7,
    format: 'YYYY',
    onChange: (v, context) => {
      console.log('demo onChange', v, context);
    },
    onPick: (v) => {
      console.log('demo onPick', v);
    },
    inline: true,
  };

  return (
    <div className="DatePicker-box">
      <DatePicker {...props} />
    </div>
  );
}
```

#### 月份选择器

```jsx
function Demo() {
  const props = {
    value: null,
    type: 'month',
    firstDayOfWeek: 7,
    format: 'YYYY-MM',
    onChange: (v, context) => {
      console.log('demo onChange', v, context);
    },
    onPick: (v) => {
      console.log('demo onPick', v);
    },
    inline: true,
  };

  return (
    <div className="DatePicker-box">
      <DatePicker {...props} />
    </div>
  );
}
```

## 3. 日期选择器默认值

```jsx
function Demo() {
  const props = {
    defaultValue: '2025-05-01',
    type: 'date',
    firstDayOfWeek: 7,
    format: 'YYYY-MM-DD',
    onChange: (v, context) => {
      console.log('demo onChange', v, context);
    },
    onPick: (v) => {
      console.log('demo onPick', v);
    },
  };

  return (
    <div className="DatePicker-box">
      <DatePicker {...props} />
    </div>
  );
}
```

## 4. 禁用日期选择器

#### 日期选择器

```jsx
function Demo() {
  const props = {
    value: '2025-05-01',
    type: 'date',
    disabled: true,
    firstDayOfWeek: 7,
    format: 'YYYY-MM-DD',
    onChange: (v, context) => {
      console.log('demo onChange', v, context);
    },
    onPick: (v) => {
      console.log('demo onPick', v);
    },
  };

  return (
    <div className="DatePicker-box">
      <DatePicker {...props} />
    </div>
  );
}
```

#### 日期区间选择器

```jsx
function Demo() {
  const props = {
    value: ['2025-05-01', '2025-05-05'],
    type: 'date',
    disabled: true,
    firstDayOfWeek: 7,
    format: 'YYYY-MM-DD',
    onChange: (v, context) => {
      console.log('demo onChange', v, context);
    },
    onPick: (v) => {
      console.log('demo onPick', v);
    },
  };

  return (
    <div className="DatePicker-box">
      <DateRangePicker {...props} />
    </div>
  );
}
```

## 5. 只读的日期选择器

```jsx
function Demo() {
  const props = {
    value: '2025-05-01',
    type: 'date',
    readonly: true,
    firstDayOfWeek: 7,
    format: 'YYYY-MM-DD',
    onChange: (v, context) => {
      console.log('demo onChange', v, context);
    },
    onPick: (v) => {
      console.log('demo onPick', v);
    },
  };

  return (
    <div className="DatePicker-box">
      <DatePicker {...props} />
    </div>
  );
}
```

## 6. 不可输入的日期选择器

```jsx
function Demo() {
  const props = {
    value: '2025-05-01',
    type: 'date',
    inputProps: {
      readOnly: true,
    },
    firstDayOfWeek: 7,
    format: 'YYYY-MM-DD',
    onChange: (v, context) => {
      console.log('demo onChange', v, context);
    },
    onPick: (v) => {
      console.log('demo onPick', v);
    },
  };

  return (
    <div className="DatePicker-box">
      <DatePicker {...props} />
    </div>
  );
}
```

## 7. 配置内置触发器

#### 日期选择器

```jsx
function Demo() {
  const props = {
    type: 'date',
    triggerElement: <div>自定义触发器元素</div>,
    // inputProps: {
    //   placeholder: '自定义的触发器占位符',
    // },
    firstDayOfWeek: 7,
    format: 'YYYY-MM-DD',
    onChange: (v, context) => {
      console.log('demo onChange', v, context);
    },
    onPick: (v) => {
      console.log('demo onPick', v);
    },
  };

  return (
    <div className="DatePicker-box">
      <DatePicker {...props} />
    </div>
  );
}
```

#### 日期区间选择器

```jsx
function Demo() {
  const props = {
    type: 'date',
    // triggerElement: <div>自定义触发器元素</div>,
    inputProps: {
      placeholder: ['自定义开始时间占位符', '自定义结束时间占位符'],
    },
    firstDayOfWeek: 7,
    format: 'YYYY-MM-DD',
    onChange: (v, context) => {
      console.log('demo onChange', v, context);
    },
    onPick: (v) => {
      console.log('demo onPick', v);
    },
  };

  return (
    <div className="DatePicker-box">
      <DateRangePicker {...props} />
    </div>
  );
}
```

## 8. 配置弹窗面板样式

```jsx
function Demo() {
  const props = {
    type: 'date',
    popupProps: {
      className: 'popup1',
      popupClassName: 'popup2',
    },
    firstDayOfWeek: 7,
    format: 'YYYY-MM-DD',
    onChange: (v, context) => {
      console.log('demo onChange', v, context);
    },
    onPick: (v) => {
      console.log('demo onPick', v);
    },
  };

  return (
    <div className="DatePicker-box">
      <DatePicker {...props} />
    </div>
  );
}
```

## 9. 指定年份的可选范围

```jsx
function Demo() {
  const props = {
    value: null,
    type: 'date',
    enableTimePicker: true,
    firstDayOfWeek: 7,
    yearRange: [1900, 2100],
    format: 'YYYY-MM-DD',
    onChange: (v, context) => {
      console.log('demo onChange', v, context);
    },
    onPick: (v) => {
      console.log('demo onPick', v);
    },
    inline: true,
    disableTime: (date) => {
      return {
        hour: [22, 23],
        minute: [30, 31],
      };
    },
    disableDate: (date) => date.getTime() <= Date.now(),
  };

  return (
    <div className="DatePicker-box">
      <DatePicker {...props} />
    </div>
  );
}
```

## 10. 设置禁用时间

```jsx
function Demo() {
  const props = {
    value: null,
    type: 'date',
    enableTimePicker: true,
    firstDayOfWeek: 7,
    format: 'YYYY-MM-DD HH:mm:ss',
    onChange: (v, context) => {
      console.log('demo onChange', v, context);
    },
    onPick: (v) => {
      console.log('demo onPick', v);
    },
    inline: true,
    disableDate: (date) => date.getTime() <= Date.now(),
  };

  return (
    <div className="DatePicker-box">
      <DatePicker {...props} />
    </div>
  );
}
```

## 11. 日期区间选择器

#### 日期区间选择器

```jsx
function Demo() {
  const props = {
    type: 'date',
    firstDayOfWeek: 7,
    format: 'YYYY-MM-DD',
    onChange: (v, context) => {
      console.log('demo onChange', v, context);
    },
    onPick: (v) => {
      console.log('demo onPick', v);
    },
  };

  return (
    <div className="DatePicker-box">
      <DateRangePicker {...props} />
    </div>
  );
}
```

#### 日期时间区间选择器

```jsx
function Demo() {
  const props = {
    type: 'date',
    enableTimePicker: true,
    firstDayOfWeek: 7,
    format: 'YYYY-MM-DD HH:mm:ss',
    onChange: (v, context) => {
      console.log('demo onChange', v, context);
    },
    onPick: (v) => {
      console.log('demo onPick', v);
    },
  };

  return (
    <div className="DatePicker-box">
      <DateRangePicker {...props} />
    </div>
  );
}
```

#### 内嵌的日期区间选择器

```jsx
function Demo() {
  const props = {
    type: 'date',
    firstDayOfWeek: 7,
    format: 'YYYY-MM-DD',
    onChange: (v, context) => {
      console.log('demo onChange', v, context);
    },
    onPick: (v) => {
      console.log('demo onPick', v);
    },
    inline: true,
  };

  return (
    <div className="DatePicker-box">
      <DateRangePicker {...props} />
    </div>
  );
}
```

#### 内嵌的日期时间区间选择器

```jsx
function Demo() {
  const props = {
    type: 'date',
    enableTimePicker: true,
    firstDayOfWeek: 7,
    format: 'YYYY-MM-DD HH:mm:ss',
    onChange: (v, context) => {
      console.log('demo onChange', v, context);
    },
    onPick: (v) => {
      console.log('demo onPick', v);
    },
    inline: true,
  };

  return (
    <div className="DatePicker-box">
      <DateRangePicker {...props} />
    </div>
  );
}
```

#### 年份区间选择器

```jsx
function Demo() {
  const props = {
    type: 'year',
    firstDayOfWeek: 7,
    format: 'YYYY',
    onChange: (v, context) => {
      console.log('demo onChange', v, context);
    },
    onPick: (v) => {
      console.log('demo onPick', v);
    },
  };

  return (
    <div className="DatePicker-box">
      <DateRangePicker {...props} />
    </div>
  );
}
```

#### 月份区间选择器

```jsx
function Demo() {
  const props = {
    type: 'month',
    firstDayOfWeek: 7,
    format: 'YYYY-MM',
    onChange: (v, context) => {
      console.log('demo onChange', v, context);
    },
    onPick: (v) => {
      console.log('demo onPick', v);
    },
  };

  return (
    <div className="DatePicker-box">
      <DateRangePicker {...props} />
    </div>
  );
}
```

## 12. 带快捷标签的日期选择器（预设）

#### 日期时间选择器(预设)

```jsx
function Demo() {
  const props = {
    value: null,
    type: 'date',
    enableTimePicker: true,
    firstDayOfWeek: 7,
    format: 'YYYY-MM-DD HH:mm:ss',
    onChange: (v, context) => {
      console.log('demo onChange', v, context);
    },
    onPick: (v) => {
      console.log('demo onPick', v);
    },
    presets: [
      { label: '今日', value: new Date() },
      { label: '昨日', value: () => new Date(+new Date() - 86400000 * 1) },
    ],
  };

  return (
    <div className="DatePicker-box">
      <DatePicker {...props} />
    </div>
  );
}
```

#### 日期时间选择器(区间预设)

```jsx
function Demo() {
  const props = {
    value: null,
    type: 'date',
    enableTimePicker: true,
    firstDayOfWeek: 7,
    format: 'YYYY-MM-DD HH:mm:ss',
    onChange: (v, context) => {
      console.log('demo onChange', v, context);
    },
    onPick: (v) => {
      console.log('demo onPick', v);
    },
    presets: [
      {
        label: '最近7天',
        value: [new Date(+new Date() - 86400000 * 6), new Date()],
      },
      { label: '最近3天', value: [new Date(+new Date() - 86400000 * 2), new Date()] },
      { label: '今明两天', value: () => [new Date(), new Date(+new Date() + 86400000 * 1)] },
    ],
  };

  return (
    <div className="DatePicker-box">
      <DateRangePicker {...props} />
    </div>
  );
}
```

#### 日期区间选择器

```jsx
function Demo() {
  const props = {
    value: null,
    type: 'date',
    firstDayOfWeek: 7,
    format: 'YYYY-MM-DD HH:mm:ss',
    onChange: (v, context) => {
      console.log('demo onChange', v, context);
    },
    onPick: (v) => {
      console.log('demo onPick', v);
    },
    presets: [
      {
        label: '最近7天',
        value: [new Date(+new Date() - 86400000 * 6), new Date()],
      },
      { label: '最近3天', value: [new Date(+new Date() - 86400000 * 2), new Date()] },
      { label: '今天', value: [new Date(), new Date()] },
    ],
  };

  return (
    <div className="DatePicker-box">
      <DateRangePicker {...props} />
    </div>
  );
}
```

## 13. 日期输出格式

#### 输出时间戳格式

```jsx
function Demo() {
  const props = {
    value: null,
    type: 'date',
    firstDayOfWeek: 7,
    format: 'YYYY-MM-DD',
    onChange: (v, context) => {
      console.log('demo onChange', v, context);
    },
    onPick: (v) => {
      console.log('demo onPick', v);
    },
    valueType: 'time-stamp',
  };

  return (
    <div className="DatePicker-box">
      <DateRangePicker {...props} />
    </div>
  );
}
```

#### 输出 Date 格式

```jsx
function Demo() {
  const props = {
    value: null,
    type: 'date',
    firstDayOfWeek: 7,
    format: 'YYYY-MM-DD',
    onChange: (v, context) => {
      console.log('demo onChange', v, context);
    },
    onPick: (v) => {
      console.log('demo onPick', v);
    },
    valueType: 'Date',
  };

  return (
    <div className="DatePicker-box">
      <DateRangePicker {...props} />
    </div>
  );
}
```

## 14. 面板弹窗显示隐藏事件回调

#### 日期选择器

```jsx
function Demo() {
  const props = {
    value: null,
    type: 'date',
    firstDayOfWeek: 7,
    format: 'YYYY-MM-DD',
    onChange: (v, context) => {
      console.log('demo onChange', v, context);
    },
    onPick: (v) => {
      console.log('demo onPick', v);
    },
    popupProps: {
      onVisibleChange: (visible) => {
        console.log('demo onVisibleChange', visible);
      },
    },
  };

  return (
    <div className="DatePicker-box">
      <DatePicker {...props} />
    </div>
  );
}
```

#### 日期区间选择器

```jsx
function Demo() {
  const props = {
    value: null,
    type: 'date',
    firstDayOfWeek: 7,
    format: 'YYYY-MM-DD',
    onChange: (v, context) => {
      console.log('demo onChange', v, context);
    },
    onPick: (v) => {
      console.log('demo onPick', v);
    },
    popupProps: {
      onVisibleChange: (visible) => {
        console.log('demo onVisibleChange', visible);
      },
    },
  };

  return (
    <div className="DatePicker-box">
      <DateRangePicker {...props} />
    </div>
  );
}
```

## 15. 新增 enableTimePicker

```jsx
function Demo() {
  const props = {
    value: null,
    type: 'date',
    enableTimePicker: true,
    onChange: (v, context) => {
      console.log('demo onChange', v, context);
    },
    onPick: (v) => {
      console.log('demo onPick', v);
    },
    popupProps: {
      onVisibleChange: (visible) => {
        console.log('demo onVisibleChange', visible);
      },
    },
  };

  return (
    <div className="DatePicker-box">
      <DatePicker {...props} />
    </div>
  );
}
```

## 16. 在面板中添加额外的页脚

新增 renderExtraFooter、showTimePickerEntry 和 defaultShowTimePicker 以及回调事件 onShowTimePickerChange

```jsx
function Demo() {
  const [enableTimePicker, setEnableTimePicker] = useState(false);
  const [defaultShowTimePicker, setDefaultShowTimePicker] = useState(false);

  // 在onShowTimePickerChange回调事件中根据返回值true或者false来动态设置defaultShowTimePicker和enableTimePicker的值
  const onShowTimePickerChange = (v) => {
    console.log('demo onShowTimePickerChange', v);
    setEnableTimePicker(v);
    setDefaultShowTimePicker(v);
  };

  const props = {
    value: null,
    type: 'date',
    // inline: true,
    enableTimePicker,
    showTimePickerEntry: true,
    // 是否显示“选择今天、选择此刻”按钮
    hidePickCurrentPreset: true,
    defaultShowTimePicker,
    renderExtraFooter: () => (
      <div>
        <i>note：</i>自定义页脚
      </div>
    ),
    firstDayOfWeek: 7,
    onShowTimePickerChange,
    onChange: (v, context) => {
      console.log('demo onChange', v, context);
    },
    onPick: (v) => {
      console.log('demo onPick', v);
    },
    popupProps: {
      onVisibleChange: (visible) => {
        console.log('demo onVisibleChange', visible);
      },
    },
  };

  return (
    <div className="DatePicker-box">
      <DatePicker {...props} />
    </div>
  );
}
```

## 17. lang 设置

```jsx
function Demo() {
  const props = {
    lang: 'zh-cn',
    translations: {
      'zh-cn': {
        back_to_today: '我是中文自定义的【回到今天】',
        back_to_cur_month: '点击回到当前月份',
        back_to_cur_year: '点击回到当前年份',
        pick_now: '选择当前时间',
        set_time: '设置时间',
        pick_today: '选择今天',
        confirm: '好的',
        trigger_placeholder: '请选择时间',
        hour_short: '-时',
        minute_short: '-分',
        second_short: '-秒',
        disable_pick_now: '当前时刻不可选',
      },
    },
    value: null,
    type: 'date',
    enableTimePicker: true,
    onChange: (v, context) => {
      console.log('demo onChange', v, context);
    },
    onPick: (v) => {
      console.log('demo onPick', v);
    },
    popupProps: {
      onVisibleChange: (visible) => {
        console.log('demo onVisibleChange', visible);
      },
    },
  };

  return (
    <div className="DatePicker-box">
      <DatePicker {...props} />
    </div>
  );
}
```

## 18. 多语言适配

Step1: 引入 dayjs 多语言文件。语言种类参考 dayjs 国际化

```jsx
import 'dayjs/locale/zh';
```

Step2: 给 DatePicker 传入 lang

```jsx
const TRANSLATION = {
  'zh-cn': {
    back_to_today: '回到今天',
    back_to_cur_month: '回到当前月份',
    back_to_cur_year: '回到当前年份',
    pick_now: '选择此刻',
    set_time: '设置时间',
    pick_today: '选择今天',
    confirm: '确认',
    trigger_placeholder: '请选择',
    hour_short: '时',
    minute_short: '分',
    second_short: '秒',
    disable_pick_now: '当前时刻不可选',
  },
  en: {
    back_to_today: 'Back To Today',
    back_to_cur_month: 'Back To Current Month',
    back_to_cur_year: 'Back To Current Year',
    pick_now: 'Now',
    set_time: 'Set Time',
    pick_today: 'Today',
    confirm: 'OK',
    trigger_placeholder: 'Please Select',
    hour_short: '',
    minute_short: '',
    second_short: '',
    disable_pick_now: 'The current moment is not selectable',
  },
  'zh-tw': {
    back_to_today: '回到今天',
    back_to_cur_month: '回到目前月份',
    back_to_cur_year: '回到目前年份',
    pick_now: '選擇此刻',
    set_time: '設定時間',
    pick_today: '選擇今天',
    confirm: '確認',
    trigger_placeholder: '請選擇',
    hour_short: '時',
    minute_short: '分',
    second_short: '秒',
    disable_pick_now: '當下時刻不可選',
  },
  'zh-hk': {
    back_to_today: '回到今天',
    back_to_cur_month: '回到當前月份',
    back_to_cur_year: '回到當前年份',
    pick_now: '選擇此刻',
    set_time: '設定時間',
    pick_today: '選擇今天',
    confirm: '確認',
    trigger_placeholder: '請選擇',
    hour_short: '時',
    minute_short: '分',
    second_short: '秒',
    disable_pick_now: '當前時刻不可選',
  },
  ja: {
    back_to_today: '今日に戻って',
    back_to_cur_month: '現在の月に戻る',
    back_to_cur_year: '現在の年に戻る',
    pick_now: '今を選択',
    set_time: '時間の設定',
    pick_today: '今日を選択',
    confirm: '確認',
    trigger_placeholder: '選択してください',
    hour_short: '时',
    minute_short: '分',
    second_short: '秒',
    disable_pick_now: '現在の時刻はオプションではありません',
  },
  th: {
    back_to_today: 'ย้อนกลับไปในวันนี้',
    back_to_cur_month: 'ย้อนกลับไปในเดือนปัจจุบัน',
    back_to_cur_year: 'ย้อนกลับไปในปีปัจจุบัน',
    pick_now: 'เลือกช่วงเวลา',
    set_time: 'ตั้งค่าเวลา',
    pick_today: 'เลือกวันนี้',
    confirm: 'ยืนยัน',
    trigger_placeholder: 'กรุณาเลือก',
    hour_short: 'เวลา',
    minute_short: 'คะแนน',
    second_short: 'วินาที',
    disable_pick_now: 'ช่วงเวลาปัจจุบัน ไม่จำเป็น',
  },
};
```
