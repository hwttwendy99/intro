# Progress · 分场景示例

以下为常见用法；导入均为 `@kdocs/kdesign`。

## 1. 基础用法

```jsx
function Demo() {
  return (
    <div>
      <Progress percentage="10" className="test" data-xxx="test"></Progress>
      <p></p>
      <Progress percentage="10" type="circle"></Progress>
    </div>
  );
}
```

## 2. 状态

```jsx
function Demo() {
  return (
    <div>
      <Progress percentage="50"></Progress>
      <p></p>
      <Progress percentage="50" status="success"></Progress>
      <p></p>
      <Progress percentage="50" status="error"></Progress>
      <p></p>
      <Progress percentage="50" type="circle"></Progress>
      <p></p>
      <Progress percentage="50" status="success" type="circle"></Progress>
      <p></p>
      <Progress percentage="50" status="error" type="circle"></Progress>
    </div>
  );
}
```

## 3. 尺寸（仅 circle）

```jsx
function Demo() {
  return (
    <div>
      <Progress percentage="50" type="circle" circleSize="small"></Progress>
      <p></p>
      <Progress percentage="50" type="circle"></Progress>
      <p></p>
      <Progress percentage="50" type="circle" circleSize="large"></Progress>
    </div>
  );
}
```

## 4. 自定义大小（仅 circle）

```jsx
function Demo() {
  return (
    <div>
      <Progress percentage="50" type="circle" circleWidth="40"></Progress>
      <p></p>
      <Progress percentage="50" type="circle" circleWidth="80"></Progress>
      <p></p>
      <Progress percentage="50" type="circle" circleWidth="100"></Progress>
      <p></p>
      <Progress percentage="50" type="circle" circleWidth="200"></Progress>
    </div>
  );
}
```

## 5. 进度

```jsx
function Demo() {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPercentage(percentage + 5);
    }, 1000);

    return function () {
      clearInterval(timer);
    };
  }, [percentage]);

  return (
    <div>
      <Progress percentage={percentage}></Progress>
      <p></p>
      <Progress percentage={percentage} type="circle"></Progress>
    </div>
  );
}
```
