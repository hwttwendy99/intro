# Tag · 分场景示例

以下为常见用法；导入均为 `@kdocs/kdesign`。

## 1. 基础用法

```jsx
function Demo() {
  return (
    <div className="basic-tag">
      <Tag>标签</Tag>
    </div>
  );
}
```

## 2. 禁用状态

```jsx
function Demo() {
  return (
    <div className="basic-tag">
      <Tag disabled>标签</Tag>
      <Tag disabled closable>
        {' '}
        标签
      </Tag>
    </div>
  );
}
```

## 3. 可移除标签

```jsx
function Demo() {
  return (
    <div className="basic-tag">
      <Tag closable>标签1</Tag>
      <Tag closable>标签2</Tag>
      <Tag closable>标签3</Tag>
      <Tag closable>标签4</Tag>
    </div>
  );
}
```

## 4. 尺寸

```jsx
function Demo() {
  return (
    <div className="basic-tag">
      <Tag size="small">小标签</Tag>
      <Tag>中标签</Tag>
      <Tag size="large">大标签</Tag>
    </div>
  );
}
```
