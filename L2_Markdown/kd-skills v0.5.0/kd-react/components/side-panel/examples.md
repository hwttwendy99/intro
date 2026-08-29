# SidePanel · 分场景示例

以下为常见用法；导入均为 `@kdocs/kdesign`。

## 1. 基础用法

```jsx
function SidePanelDemo() {
  return (
    <div style={{ width: '300px', height: '452px' }}>
      <SidePanel title="标题很长很长很长很长很长很长很长很长">内容</SidePanel>
    </div>
  );
}
```

## 2. 最大宽度

```jsx
function SidePanelDemo() {
  return (
    <div style={{ height: '452px' }}>
      <SidePanel maxWidth="480px" title="标题很长很长很长很长很长很长很长很长">
        内容
      </SidePanel>
    </div>
  );
}
```

## 3. 调整大小(resize)

拖拽自定义调整大小会受到父容器宽度和组件自身最大最小宽度属性限制。

#### 拖动左边框：resize = 'left'

```jsx
function SidePanelDemo() {
  return (
    <section style={{ position: 'relative', width: '100%', height: '452px', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', right: 0, top: '0', width: '300px', height: '452px' }}>
        <SidePanel title="标题很长很长很长很长很长很长很长很长" resize="left">
          内容
        </SidePanel>
      </div>
    </section>
  );
}
```

#### 拖动右边框：resize = 'right'

可通过属性 minWidth 和 maxWidth 控制拖动范围。

```jsx
function SidePanelDemo() {
  return (
    <div style={{ width: '300px', height: '452px' }}>
      <SidePanel
        maxWidth="480px"
        minWidth="150px"
        title="标题很长很长很长很长很长很长很长很长"
        resize="right"
      >
        内容
      </SidePanel>
    </div>
  );
}
```

## 4. 导航标签标题

```jsx
function SidePanelDemo() {
  const [title, setTitle] = useState([
    { key: 1, value: '标题1' },
    { key: 2, value: '标题2' },
  ]);
  const [curIndex, setCurIndex] = useState(1);
  const navigationChange = (index) => {
    setCurIndex(index);
  };
  return (
    <div style={{ width: '300px', height: '452px' }}>
      <SidePanel title={title} defaultIndex="1" navigationChange={navigationChange}>
        {title.map((item) => (
          <div key={item.key} style={{ display: item.key === curIndex ? 'block' : 'none' }}>
            {item.value}-内容
          </div>
        ))}
      </SidePanel>
    </div>
  );
}
```

## 5. 带返回按钮

```jsx
function SidePanelDemo() {
  const [isShow, setIsShow] = useState(true);
  const back = () => {
    setIsShow(false);
  };
  return (
    <div style={{ width: '300px', height: '452px' }}>
      <SidePanel title="一级界面" style={{ display: !isShow ? 'block' : 'none' }}>
        一级界面内容
        <Button
          type="primary"
          size="medium"
          onClick={() => {
            setIsShow(true);
          }}
        >
          二级页面
        </Button>
      </SidePanel>
      <SidePanel
        title="二级界面"
        showBack
        style={{ display: isShow ? 'block' : 'none' }}
        back={back}
      >
        二级界面内容
      </SidePanel>
    </div>
  );
}
```

## 6. 按 esc 按钮触发关闭事件

```jsx
function SidePanelDemo() {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button
        type="primary"
        size="medium"
        onClick={() => {
          setOpen(true);
        }}
      >
        展示侧边栏
      </Button>
      {open && (
        <div style={{ width: '300px', height: '452px' }}>
          <SidePanel close={handleClose} title="标题很长很长很长很长很长很长很长很长">
            内容
          </SidePanel>
        </div>
      )}
    </>
  );
}
```

## 7. 点击侧边栏外部关闭

```jsx
function SidePanelDemo() {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button
        type="primary"
        size="medium"
        onClick={() => {
          setOpen(true);
        }}
      >
        展示侧边栏
      </Button>
      {open && (
        <div style={{ width: '300px', height: '452px' }}>
          <SidePanel
            closeOnClickModal
            close={handleClose}
            title="标题很长很长很长很长很长很长很长很长"
          >
            内容
          </SidePanel>
        </div>
      )}
    </>
  );
}
```

## 8. 自定义标题内容

```jsx
function SidePanelDemo() {
  return (
    <div style={{ width: '300px', height: '452px' }}>
      <SidePanel
        titleSlot={
          <div className="custom-title" style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ marginRight: '8px' }}>自定义标题</span>
            <emojis size={16} fill="var(--kd-color-icon-secondary)" />
          </div>
        }
      >
        内容
      </SidePanel>
    </div>
  );
}
```

## 9. 文本徽标

```jsx
function SidePanelDemo() {
  const customStyles = {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '4px',
    color: 'rgba(13, 13, 13, 0.9)',
    background: 'rgb(237, 244, 255)',
    border: 0
  };
  return (
    <div style={{ width: '300px', height: '452px' }}>
      <SidePanel
        titleSlot={
          <div className="custom-title" style={{ display: 'flex', alignItems: 'center' }}>
            <span>标题</span>
            <Badge value={'自定义'} style={customStyles} />
          </div>
        }
      >
        内容
      </SidePanel>
    </div>
  );
}
```

## 10. 添加操作按钮

```jsx
function SidePanelDemo() {
  return (
    <div style={{ width: '300px', height: '452px' }}>
      <SidePanel
        title="标题很长很长很长很长很长很长很长很长"
        actions={
          <Button
            className="kdv-side-panel__close"
            size="small"
            icon={<emojis size={16} fill="var(--kd-color-icon-secondary)" />}
          />
        }
      >
        内容
      </SidePanel>
    </div>
  );
}
```
