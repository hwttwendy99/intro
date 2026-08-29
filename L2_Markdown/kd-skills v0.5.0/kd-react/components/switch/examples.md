# Switch · 分场景示例

以下为常见用法；导入均为 `@kdocs/kdesign`。

## 1. 基础用法

```jsx
function Demo() {
  return (
    <div className="mr-16">
      <Switch></Switch>
      <Switch checked={true}></Switch>
    </div>
  );
}
```

## 2. 禁用状态

```jsx
function Demo() {
  return (
    <div className="mr-16">
      <Switch checked={true} disabled></Switch>
      <Switch checked={false} disabled></Switch>
    </div>
  );
}
```

## 3. loading

```jsx
function Demo() {
  return (
    <div className="mr-16">
      <Switch checked={true} loading></Switch>
      <Switch checked={false} loading></Switch>
      <Switch checked={true} size="small" loading></Switch>
    </div>
  );
}
```

## 4. size: small/medium

```jsx
function Demo() {
  return (
    <div>
      <Switch checked={false} size="small"></Switch>
      <br />
      <Switch checked={false}></Switch>
    </div>
  );
}
```

## 5. checked

```jsx
function Demo() {
  const [checked, setChecked] = useState(false);

  const onToggle = () => {
    setChecked(!checked);
  };

  const onChange = (v) => {
    setChecked(v);
  };

  return (
    <div>
      <Button type="primary" onClick={onToggle}>
        点击切换
      </Button>
      <br />
      <Switch checked={checked} onChange={onChange}></Switch>
    </div>
  );
}
```

## 6. onChange 事件

```jsx
function Demo() {
  return (
    <div>
      <Switch onChange={(e) => console.log(e)}></Switch>
    </div>
  );
}
```
