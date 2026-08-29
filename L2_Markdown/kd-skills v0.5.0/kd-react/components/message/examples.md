# Message · 分场景示例

以下为常见用法；导入均为 `@kdocs/kdesign`。

## 1. 基础用法

```jsx
function Demo() {
  const open = () => {
    Message('这是一条消息提示');
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

## 2. 不同状态

用来显示「成功、警告、消息、错误、加载中」类的操作反馈。

```jsx
function Demo() {
  const success = () => {
    Message.success('这是一条成功消息提示');
  };

  const warning = () => {
    Message.warning('这是一条警告消息提示');
  };

  const info = () => {
    Message.info('这是一条消息提示');
  };

  const error = () => {
    Message.error('这是一条错误消息提示');
  };

  const loading = () => {
    Message.loading('这是一条加载中消息提示');
  };

  return (
    <div className="basic-message mr-8">
      <Button type='secondary' onClick={success}>成功</Button>
      <Button type='secondary' onClick={warning}>警告</Button>
      <Button type='secondary' onClick={info}>消息</Button>
      <Button type='secondary' onClick={error}>错误</Button>
      <Button type='secondary' onClick={loading}>加载中</Button>
    </div>
  );
}
```

## 3. 可关闭

```jsx
function Demo() {
  const onClick = () => {
    Message({
      showClose: true,
      message: '这是一条成功消息',
      type: 'success',
    });
  };

  return (
    <div className="basic-message">
      <Button type='primary' onClick={onClick}>可关闭message</Button>
    </div>
  );
}
```

## 4. 设置停留时长

```jsx
function Demo() {
  const onClick = () => {
    Message({
      duration: 8000,
      message: '一条常规消息提示',
    });
  };

  return (
    <div className="basic-message">
      <Button type='primary' onClick={onClick}>设置时长</Button>
    </div>
  );
}
```

## 5. 修改位置

```jsx
function Demo() {
  const top50 = () => {
    Message({
      message: 'top-50',
      type: 'success',
      top: 50,
    });
  };

  const top100 = () => {
    Message({
      message: 'top-100',
      type: 'success',
      top: 100,
    });
  };

  const top150 = () => {
    Message({
      message: 'top-150',
      type: 'success',
      top: 150,
    });
  };

  return (
    <div className="basic-message mr-8">
      <Button type='secondary' onClick={top50}>top 50</Button>
      <Button type='secondary' onClick={top100}>top 100</Button>
      <Button type='secondary' onClick={top150}>top 150</Button>
    </div>
  );
}
```

## 6. close 接口

```jsx
function Demo() {
  const onClick = () => {
    Message({
      message: '点击手动关闭',
      type: 'success',
      duration: 60000,
    });
  };

  const onClose = () => {
    Message.close();
  };

  return (
    <div className="basic-message mr-8">
      <Button type='primary' onClick={onClick}>打开</Button>
      <Button type='secondary' onClick={onClose}>手动关闭</Button>
    </div>
  );
}
```

## 7. 自定义 icon

```jsx
function Demo() {
  const onStringIcon = () => {
    Message({
      message: 'string icon',
      type: 'success',
      duration: 60000,
      icon: 'icon-test',
    });
  };

  const onComponentIcon = () => {
    Message({
      message: 'component icon',
      type: 'success',
      duration: 60000,
      icon: <TriangleDown size="16"></TriangleDown>,
    });
  };

  return (
    <div className="basic-message mr-8">
      <Button type='secondary' onClick={onStringIcon}>string icon</Button>
      <Button type='secondary' onClick={onComponentIcon}>component icon</Button>
    </div>
  );
}
```

## 8. 自定义 container

```jsx
function Demo() {
  const onStringIcon = () => {
    Message({
      getContainer: document.querySelector('.message-container'),
      message: '中getContainer文',
      type: 'success',
      duration: 60000,
    });
  };

  return (
    <div className="basic-message">
      <Button type='primary' onClick={onStringIcon}>getContainer</Button>
      <div
        className="message-container"
        style={{ height: '200px', backgroundColor: 'gray', position: 'relative' }}
      ></div>
    </div>
  );
}
```
