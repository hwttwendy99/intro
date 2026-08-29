# AIProcessing · 分场景示例

以下为常见用法；导入均为 `@kdocs/kdesign`。

## 1. 基础用法

```jsx
function Demo() {
  const open = () => {
    AIProcessing({
      btnText: '停止 Esc',
      message: '正在生成中...',
      onStop: () => { alert('Stop!'); }
    });
  };

  return (
    <div>
      <Button type="primary" onClick={open}>
        打开消息提示
      </Button>
    </div>
  );
}
```
