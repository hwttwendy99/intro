# Textarea · 分场景示例

以下为常见用法；导入均为 `@kdocs/kdesign`。

## 1. 基础用法

```jsx
function Demo() {
  return (
    <div>
      <TextArea placeholder="请输入内容" name="textarea-demo" />
    </div>
  );
}
```

## 2. readOnly / autoFocus

```jsx
function Demo() {
  return (
    <div>
      <TextArea placeholder="readOnly" name="textarea-demo" readOnly /><br />
      <TextArea placeholder="autoFocus" name="textarea-demo" autoFocus />
    </div>
  );
}
```

## 3. 禁用状态

```jsx
function Demo() {
  return (
    <div>
      <TextArea disabled placeholder="请输入内容" /><br />
      <TextArea disabled placeholder="请输入内容" value="金山办公设计系统" />
    </div>
  );
}
```

## 4. clean 按钮

```jsx
function Demo() {
  return (
    <div>
      <TextArea placeholder="showClean" /><br />
      <TextArea showClean={false} placeholder="showClean={false}" />
    </div>
  );
}
```

## 5. resize

```jsx
function Demo() {
  return (
    <div>
      <TextArea placeholder="resize" resize="both" />
    </div>
  );
}
```

## 6. value

```jsx
function Demo() {
  const [value, setValue] = useState('金山办公设计系统');

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <TextArea value={value} maxLength="3" placeholder="请输入内容" onChange={onChange} />
    </div>
  );
}
```

## 7. status

```jsx
function Demo() {
  return (
    <div>
      <TextArea status="error" placeholder="请输入内容" />
    </div>
  );
}
```

## 8. showCount / maxLength

```jsx
function Demo() {
  const maxLengthObj = {
    length: 100,
    countOnly: true,
  };

  const onChange = (value, e) => {};

  return (
    <div>
      <TextArea maxLength={100} placeholder="限制100字符" onChange={onChange} /><br />
      <TextArea
        showCount
        maxLength={100}
        placeholder="限制100字符 / 字数统计"
        onChange={onChange}
      /><br />
      <TextArea
        showCount
        maxLength={maxLengthObj}
        placeholder="限制100字符的显示 / 字数统计 / 不限制字符输入"
        onChange={onChange}
      />
    </div>
  );
}
```

## 9. autoValid

```jsx
function Demo() {
  const maxLengthObj = {
    length: 10,
    countOnly: true,
  };
  return (
    <div>
      <TextArea autoValid placeholder="请输入内容" maxLength={maxLengthObj} /><br />
      <TextArea autoValid placeholder="请输入内容" maxLength={maxLengthObj} showCount />
    </div>
  );
}
```

## 10. 自动高度

```jsx
function Demo() {
  const [value, setValue] = useState('');

  return (
    <div>
      <TextArea type="textarea" autoSize={true} placeholder="autoSize" />
      <div style={{ marginBottom: '20px' }}></div>
      <TextArea autoSize={{ minRows: 2, maxRows: 4 }} placeholder="minRows: 2, maxRows: 4" />
    </div>
  );
}
```

## 11. 事件

```jsx
function Demo() {
  const onCompositionStart = (e) => {
    console.log(e);
  };

  const onCompositionEnd = (e) => {
    console.log(e);
  };

  const onChange = (e) => {
    console.log(e);
  };

  const onFocus = (e) => {
    console.log(e);
  };

  const onBlur = (e) => {
    console.log(e);
  };

  const onKeyDown = (e) => {
    console.log(e);
  };

  return (
    <div>
      <TextArea
        placeholder="onCompositionStart onCompositionEnd onChange onFocus onBlur onKeyDown"
        onCompositionStart={onCompositionStart}
        onCompositionEnd={onCompositionEnd}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
      />
    </div>
  );
}
```
