# Checkbox · 分场景示例

以下为常见用法；导入均为 `@kdocs/kdesign`。

## 1. 基础用法

```jsx
function Demo() {
  return (
    <div className='mr-16'>
      <Checkbox alt={{"alt-ignore":"true"}}>备选项</Checkbox>
      <Checkbox checked>备选项checked</Checkbox>
    </div>
  );
}
```

## 2. 禁用状态

```jsx
function Demo() {
  return (
    <div className='mr-16'>
      <Checkbox disabled>备选项</Checkbox>
      <Checkbox checked disabled>
        checked
      </Checkbox>
      <Checkbox indeterminate disabled>
        indeterminate
      </Checkbox>
    </div>
  );
}
```

## 3. checked

```jsx
function Demo() {
  const [checked, setChecked] = useState(false);

  const onToggle = () => {
    setChecked(!checked);
  };

  return (
    <div>
      <Button type="primary" onClick={onToggle}>
        点击切换
      </Button>
      <br />
      <br />
      <Checkbox checked={checked}>绑定测试</Checkbox>
    </div>
  );
}
```

## 4. indeterminate 状态

indeterminate 属性用以表示 checkbox 的不确定状态，一般用于实现全选的效果

```jsx
function Demo() {
  const [checkAll, setCheckAll] = useState(false);
  const [isIndeterminate, setIsIndeterminate] = useState(true);
  const [checkedCities, setCheckedCities] = useState(['上海', '北京']);
  const cities = ['上海', '北京', '广州', '深圳'];

  const handleCheckAllChange = (checked) => {
    setIsIndeterminate(false);
    setCheckAll(checked);
    setCheckedCities(checked ? cities : []);
  };

  const handleCheckedCitiesChange = (value) => {
    const checkedCount = value.length;
    const citiesLength = cities.length;
    setCheckedCities(value);
    setCheckAll(checkedCount === citiesLength);
    setIsIndeterminate(checkedCount > 0 && checkedCount < citiesLength);
  };

  return (
    <div>
      <Checkbox checked={checkAll} indeterminate={isIndeterminate} onChange={handleCheckAllChange}>全选</Checkbox>
      <Checkbox.Group value={checkedCities} onChange={handleCheckedCitiesChange}>
        {cities.map((city, index) => (
          <Checkbox key={index} label={city}></Checkbox>
        ))}
      </Checkbox.Group>
    </div>
  )
}
```

## 5. 多选框组 Group

```jsx
function Demo() {
  const [checkList, setCheckList] = useState(['复选框 A', '选中且禁用']);

  const onChange = (data) => {
    console.log(data);
  };

  return (
    <div>
      <Checkbox.Group value={checkList} onChange={onChange}>
        <Checkbox label="复选框 A"></Checkbox>
        <Checkbox label="复选框 B"></Checkbox>
        <Checkbox label="复选框 C"></Checkbox>
        <Checkbox label="禁用" disabled></Checkbox>
        <Checkbox label="选中且禁用" disabled></Checkbox>
      </Checkbox.Group>
    </div>
  );
}
```

## 6. 多选框组 Group layout

```jsx
function Demo() {
  const [checkList, setCheckList] = useState(['复选框 A', '选中且禁用']);

  const onChange = (data) => {
    console.log(data);
  };

  return (
    <div>
      <Checkbox.Group value={checkList} layout="vertical" onChange={onChange}>
        <Checkbox label="复选框 A"></Checkbox>
        <Checkbox label="复选框 B"></Checkbox>
        <Checkbox label="复选框 C"></Checkbox>
        <Checkbox label="禁用" disabled></Checkbox>
        <Checkbox label="选中且禁用" disabled></Checkbox>
      </Checkbox.Group>
    </div>
  );
}
```
