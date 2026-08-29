# Skeleton · 分场景示例

以下为常见用法；导入均为 `@kdocs/kdesign`。

## 1. Skeleton 基础用法

```jsx
function Demo() {
  return (
    <div>
      <Skeleton></Skeleton>
    </div>
  );
}
```

## 2. 自定义样式

```jsx
function Demo() {
  return (
    <div>
      <Skeleton style={{ width: '300px' }}></Skeleton>
      <p></p>
      <Skeleton style={{ width: '120px', height: '120px' }}></Skeleton>
      <p></p>
      <Skeleton style={{ width: '48px', height: '48px', borderRadius: '50%' }}></Skeleton>
    </div>
  );
}
```

## 3. Skeleton.Title

```jsx
function Demo() {
  return (
    <div>
      <Skeleton.Title></Skeleton.Title>
    </div>
  );
}
```

## 4. Skeleton.Image

```jsx
function Demo() {
  return (
    <div>
      <Skeleton.Image></Skeleton.Image>
      <p></p>
      <Skeleton.Image shape="circle"></Skeleton.Image>
    </div>
  );
}
```

## 5. Skeleton.File

```jsx
function Demo() {
  return (
    <div>
      <Skeleton.File></Skeleton.File>
      <p></p>
      <Skeleton.File style={{ width: '56px', height: '64px' }}></Skeleton.File>
    </div>
  );
}
```

## 6. Skeleton.Button

```jsx
function Demo() {
  return (
    <div>
      <Skeleton.Button></Skeleton.Button>
    </div>
  );
}
```

## 7. Skeleton.Paragraph

```jsx
function Demo() {
  return (
    <div>
      <Skeleton.Paragraph></Skeleton.Paragraph>
    </div>
  );
}
```

## 8. Skeleton.Paragraph rows

```jsx
function Demo() {
  return (
    <div>
      <Skeleton.Paragraph rows="5"></Skeleton.Paragraph>
    </div>
  );
}
```

## 9. 动画

```jsx
function Demo() {
  return (
    <div>
      <Skeleton active></Skeleton>
      <p></p>
      <Skeleton.Title width="30%" active></Skeleton.Title>
      <p></p>
      <Skeleton.Image active></Skeleton.Image>
      <p></p>
      <Skeleton.Image shape="circle" active></Skeleton.Image>
      <p></p>
      <Skeleton.File active></Skeleton.File>
      <p></p>
      <Skeleton.Button active></Skeleton.Button>
      <p></p>
      <Skeleton.Paragraph active></Skeleton.Paragraph>
    </div>
  );
}
```

## 10. 自由组合示例

```jsx
function Demo() {
  return (
    <div className="skeleton-group-demo">
      <div className="skeleton-group-demo-left">
        <Skeleton.Image shape="circle"></Skeleton.Image>
      </div>
      <div className="skeleton-group-demo-right">
        <Skeleton.Title></Skeleton.Title>
        <Skeleton.Paragraph></Skeleton.Paragraph>
      </div>
    </div>
  );
}
```
