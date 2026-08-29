# AIButton · 分场景示例

以下为常见用法；导入均为 `@kdocs/kdesign`。

## 1. 基础用法

```jsx
function ButtonDemo() {
  return (
    <div className="mr-8">
      <AIButton>主要按钮</AIButton>
      <AIButton active>激活状态</AIButton>
      <AIButton disabled>禁用状态</AIButton>
      <AIButton loading>加载中</AIButton>
    </div>
  );
}
```

## 2. 菜单按钮

```jsx
function ButtonDemo() {
  return (
    <div className="mr-8">
      <AIButton dropdown>主要按钮</AIButton>
      <AIButton dropdown active>激活状态</AIButton>
    </div>
  );
}
```
