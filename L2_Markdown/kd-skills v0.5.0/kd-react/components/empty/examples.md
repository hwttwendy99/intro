# Empty · 分场景示例

以下为常见用法；导入均为 `@kdocs/kdesign`。

## 1. 基础用法

```jsx
function Demo() {
  return (
    <div>
      <Empty description="你还没有添加相关应用"></Empty>
      <Empty description="以上展示区域需要显示您的内容。您可以编辑此段文字,写下您的产品介绍、详细内容或者其他相关说明。建议文案用字简短扼要,能够准确清晰地传达主要信息。"></Empty>
    </div>
  );
}
```

## 2. 自定义 description

```jsx
function Demo() {
  const description = (
    <div>
      你还没有添加相关应用<Link type="primary">添加应用</Link>
    </div>
  );

  return (
    <div>
      <Empty description={description}></Empty>
    </div>
  );
}
```

## 3. title

```jsx
function Demo() {
  return (
    <div>
      <Empty description="你还没有添加相关应用" title="没有应用"></Empty>
    </div>
  );
}
```

## 4. 自定义 footer

```jsx
function Demo() {
  const footer = (
    <div className='mr-8'>
      <Button type="secondary">查看更多</Button>
      <Button type="primary">添加应用</Button>
    </div>
  );
  return (
    <div>
      <Empty description="你还没有添加相关应用" title="没有应用" footer={footer}></Empty>
    </div>
  );
}
```
