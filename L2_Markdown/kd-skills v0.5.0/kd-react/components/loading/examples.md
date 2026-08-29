# Loading · 分场景示例

以下为常见用法；导入均为 `@kdocs/kdesign`。

## 1. 基础用法

```jsx
function Demo() {
  return (
    <div>
      <div className="box_50">
        <Loading></Loading>
      </div>
      <br />
      <div className="box_50">
        <Loading>加载中</Loading>
      </div>
      <br />
      <div className="box_50">
        <Loading>
          自定义
          <a href="https://www.kdocs.cn">超链接</a>
        </Loading>
      </div>
    </div>
  );
}
```

## 2. 尺寸

```jsx
function Demo() {
  return (
    <div>
      <div className="box_50">
        <Loading size="small">small</Loading>
      </div>
      <br />
      <div className="box_50">
        <Loading>medium</Loading>
      </div>
      <br />
      <div className="box_50">
        <Loading size="large">large</Loading>
      </div>
    </div>
  );
}
```

## 3. 排版

```jsx
function Demo() {
  return (
    <div>
      <div className="box_100">
        <Loading>horizontal</Loading>
      </div>
      <br />
      <div className="box_100">
        <Loading layout="vertical">vertical</Loading>
      </div>
    </div>
  );
}
```

## 4. 自定义指示符

```jsx
function Demo() {
  return (
    <div>
      <div className="box_50">
        <Loading icon={<Emojis size={24} />}></Loading>
      </div>
    </div>
  );
}
```
