# AILoading · 分场景示例

以下为常见用法；导入均为 `@kdocs/kdesign`。

## 1. 基础用法

```jsx
function Demo() {
  return (
    <div>
      <div className="box_50">
        <AILoading size="small"></AILoading>
      </div>
      <br />
      <div className="box_50">
        <AILoading size="medium">自定义</AILoading>
      </div>
      <br />
      <div className="box_100">
        <AILoading size="large">加载中...</AILoading>
      </div>
    </div>
  );
}
```
