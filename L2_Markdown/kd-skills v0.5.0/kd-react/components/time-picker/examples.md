# TimePicker · 分场景示例

以下为常见用法；导入均为 `@kdocs/kdesign`。

## 1. 时分秒选择器

```jsx
function Demo() {
  const props = {
    value: null,
    type: 'date',
    format: 'HH:mm:ss',
    onChange: (v, context) => {
      console.log('demo onChange', v, context);
    },
    onPick: (v) => {
      console.log('demo onPick', v);
    },
  };

  return (
    <div className="DatePicker-box">
      <TimePicker {...props} />
    </div>
  );
}
```

## 2. 时间区间选择器

```jsx
function Demo() {
  const props = {
    value: null,
    type: 'date',
    onChange: (v, context) => {
      console.log('demo onChange', v, context);
    },
    onPick: (v) => {
      console.log('demo onPick', v);
    },
  };

  return (
    <div className="DatePicker-box">
      <TimeRangePicker {...props} />
    </div>
  );
}
```

## 3. 自定义步长时间选择器

```jsx
function Demo() {
  const props = {
    value: null,
    type: 'date',
    format: 'HH:mm:ss',
    steps: [1, 5, 10],
    onChange: (v, context) => {
      console.log('demo onChange', v, context);
    },
    onPick: (v) => {
      console.log('demo onPick', v);
    },
  };

  return (
    <div className="DatePicker-box">
      <TimePicker {...props} />
    </div>
  );
}
```
