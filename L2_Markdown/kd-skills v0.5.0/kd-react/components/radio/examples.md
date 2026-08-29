# Radio · 分场景示例

以下为常见用法；导入均为 `@kdocs/kdesign`。

## 1. 基础用法

```jsx
function Demo() {
  const [radio1, setRadio1] = useState(1);

  const onChange = (data) => {
    setRadio1(data);
  };

  return (
    <div className='mr-16'>
      <Radio value="1" disabled checked={radio1 === 1} onChange={onChange}>
        备选项1
      </Radio>
      <Radio value="2" checked={radio1 === 2} onChange={onChange}>
        备选项2
      </Radio>
    </div>
  );
}
```

## 2. 禁用状态

```jsx
function Demo() {
  return (
    <div className='mr-16'>
      <Radio value="1" disabled={true}>
        禁用
      </Radio>
      <Radio value="2" disabled={true} checked>
        Checked 禁用
      </Radio>
    </div>
  );
}
```

## 3. 单选框组

```jsx
function Demo() {
  const [radio1, setRadio1] = useState('3');

  const onChange = (data) => {
    setRadio1(data);
  };

  return (
    <div>
      <Radio.Group value={radio1} onChange={onChange}>
        <Radio value="3">备选项3</Radio>
        <Radio value="6">备选项6</Radio>
        <Radio value="9">备选项9</Radio>
      </Radio.Group>
    </div>
  );
}
```

## 4. 单选框组 layout

```jsx
function Demo() {
  const [radio1, setRadio1] = useState('3');

  const onChange = (data) => {
    setRadio1(data);
  };

  return (
    <div>
      <Radio.Group value={radio1} onChange={onChange}>
        <Radio value="3">横排1</Radio>
        <Radio value="6">横排2</Radio>
        <Radio value="9">横排3</Radio>
      </Radio.Group>
      <p></p>
      <Radio.Group value={radio1} onChange={onChange} layout="vertical">
        <Radio value="13">竖排1</Radio>
        <Radio value="16">竖排2</Radio>
        <Radio value="19">竖排3</Radio>
      </Radio.Group>
    </div>
  );
}
```
