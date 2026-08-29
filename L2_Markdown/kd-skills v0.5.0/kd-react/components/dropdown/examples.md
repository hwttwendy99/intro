# Dropdown · 分场景示例

以下为常见用法；导入均为 `@kdocs/kdesign`。

## 1. 基础用法

```jsx
function DropdownDemo() {
  const onItemClick = (e, itemValue) => {
    console.log('e', itemValue, e);
  };
  const menu = (
    <Menu>
      <Menu.Item selected>金山文档</Menu.Item>
      <Menu.Item value="kdocs" onClick={onItemClick}>金山文档</Menu.Item>
      <Menu.Item>金山文档</Menu.Item>
      <Menu.Item>金山文档</Menu.Item>
    </Menu>
  );
  return (
    <div className="mr-8 ">
      <Dropdown panel={menu}>
        <Button type="secondary">
          Click Me
        </Button>
      </Dropdown>
      <Dropdown panel={menu} trigger="hover">
        <Button type="secondary">
          Hover Me
        </Button>
      </Dropdown>
    </div>
  );
}
```

## 2. 自定义显隐
> 通过`visible`、`onVisibleChange` 可进行显隐控制

```jsx
function DropdownDemo() {
  const [show,setShow] = useState(false)
  function onVisibleChange (visible) {
    setTimeout(()=>{
      setShow(visible)
    }, visible?1000:0)
  }
  const menu = (
    <Menu>
      <Menu.Item selected>金山文档</Menu.Item>
      <Menu.Item value="kdocs">金山文档</Menu.Item>
      <Menu.Item>金山文档</Menu.Item>
      <Menu.Item>金山文档</Menu.Item>
    </Menu>
  );
  return (
    <Dropdown panel={menu} visible={show} onVisibleChange={onVisibleChange}>
      <Button type="secondary">
        {show ? '关闭': '1s后显示'}菜单
      </Button>
    </Dropdown>
  );
}

```

## 3. 禁用菜单

```jsx
function DropdownDemo() {
  const menu = (
    <Menu>
      <Menu.Item selected>金山文档</Menu.Item>
      <Menu.Item value="kdocs">金山文档</Menu.Item>
      <Menu.Item>金山文档</Menu.Item>
      <Menu.Item>金山文档</Menu.Item>
    </Menu>
  );
  return (
    <Dropdown panel={menu} disabled>
      <Button type="light" type="primary">
        不可弹出
      </Button>
    </Dropdown>
  );
}
```

## 4. 弹出位置

> 支持 4 个弹出位置。`bottom-start` \ `bottom-end` \ `top-start` \ `top-end`

```jsx
function DropdownDemo() {
  const menu = (
    <Menu checkable>
      <Menu.Item>✨ 金山文档</Menu.Item>
      <Menu.Item>🦆 金山文档</Menu.Item>
      <Menu.Item>😘 金山文档</Menu.Item>
      <Menu.Item>🧡 金山文档</Menu.Item>
    </Menu>
  );
  const dropdown = React.createRef();
  const refs = React.createRef();
  return (
    <div className="mr-8 ">
      <Dropdown panel={menu}>
        <Button type="secondary">bottom-start/默认</Button>
      </Dropdown>
      <Dropdown panel={menu} placement="bottom-end">
        <Button type="secondary">bottom-end</Button>
      </Dropdown>
      <Dropdown panel={menu} placement="top-start">
        <Button type="secondary">top-start</Button>
      </Dropdown>
      <Dropdown panel={menu} placement="top-end">
        <Button type="secondary">top-end</Button>
      </Dropdown>
    </div>
  );
}
```

## 5. 右键菜单

> trigger="contextMenu

```jsx
function DropdownDemo() {
  const [show, setShow] = useState(false);
  const menu = (
    <Menu selectable>
      <Menu.Item selected>👍 金山办公</Menu.Item>
      <Menu.Item disabled>🧡 kdocs</Menu.Item>
      <Menu.Item>📌 WPS</Menu.Item>
      <Menu.Item>💋 KDesign</Menu.Item>
    </Menu>
  );
  function handleVisibleChange(visible) {
    console.log(`${!visible ? '右键菜单关闭': '右键菜单打开'}`)
    setShow(visible);
  }

  return (
    <Dropdown
      panel={menu}
      onVisibleChange={handleVisibleChange}
      trigger="contextMenu"
      hideOnClick={false}
    >
      <div
        style={{
          textAlign: 'center',
          height: 200,
          width: '100%',
          lineHeight: '200px',
          color: '#777',
          background: 'rgba(var(--kd-color-gray-2), 1)',
          userSelect: 'none',
        }}
      >
        在 这 里 右 键 {show ? '🧡🧡🧡' : '😍😍😍'}
      </div>
    </Dropdown>
  );
}
```

## 6. Dropdown.Button

```jsx
function DropdownDemo() {
  const [show, setShow] = useState(false)
  function onVisibleChange(v){
    console.log('dropdown 菜单按钮', v)
    setShow(v)
  }
  const menu = (
    <Menu selectable>
      <Menu.Item selected>金山文档</Menu.Item>
      <Menu.Item>金山文档</Menu.Item>
      <Menu.Item>金山文档</Menu.Item>
      <Menu.Item>金山文档</Menu.Item>
    </Menu>
  );
  const buttonProps = {
    // type: 'light',
    className: 'button-class',
    // loading: true,
    // active: true,
    disabled: false,
    danger: true,
  };
  return (
    <div className="mr-8 ">
      <Dropdown.Button
        panel={menu}
        disabled={true}
        trigger="click"
        buttonProps={buttonProps}
        hideOnEsc={true}
        className="panel-class"
      >
        菜单按钮
      </Dropdown.Button>
      <Dropdown.Button type="secondary" panel={menu}  trigger="click" visible={show} onVisibleChange={onVisibleChange}>
        菜单按钮
      </Dropdown.Button>
      <Dropdown.Button type="light" panel={menu} trigger="click">
        菜单按钮
      </Dropdown.Button>
      <Dropdown.Button panel={menu} trigger="click" loading>
        菜单按钮
      </Dropdown.Button>
      <Dropdown.Button panel={menu} trigger="click" disabled>
        菜单按钮
      </Dropdown.Button>
    </div>
  );
}
```

## 7. Dropdown.SplitButton

```jsx
function DropdownDemo() {
  const [show, setShow] = useState(false)
  let [count, setCount] = useState(0)
  function handleVisibleChange(v){
    if(!v){
      setCount(0)
    }
    setShow(v)
  }
  const [loading, setLoading] = useState(false);
  const menu = (
    <Menu selectable>
      <Menu.Item selected>金山文档</Menu.Item>
      <Menu.Item>金山文档</Menu.Item>
      <Menu.Item>金山文档</Menu.Item>
      <Menu.Item>金山文档</Menu.Item>
    </Menu>
  );
  function handleLeftClick(e) {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert('提交成功');
    }, 2000);
  }
  const leftButtonProps = {
    // active: true
  };
  function onLeftClick2(){
    if(!show) return
    setCount(count+1)
    if(count === 4){
      setShow(false)
      setCount(0)
    }
  }
  return (
    <div className="mr-8 ">
      <Dropdown.SplitButton
        type="primary"
        leftButtonProps={leftButtonProps}
        triggerProps={leftButtonProps}
        hideOnEsc={true}
        loading={loading}
        panel={menu}
        placement="bottom-start"
        onLeftClick={handleLeftClick}
      >
        {loading ? '提交中' : '提交'}
      </Dropdown.SplitButton>
      <Dropdown.SplitButton type="secondary" panel={menu} placement="bottom-start">
        主要按钮
      </Dropdown.SplitButton>
      <Dropdown.SplitButton type="secondary" panel={menu} placement="bottom-start" visible={show} onVisibleChange={handleVisibleChange} onLeftClick={onLeftClick2}>
        点5下可关闭({count})
      </Dropdown.SplitButton>

      <Dropdown.SplitButton type="light" panel={menu} placement="bottom-start">
        主要按钮
      </Dropdown.SplitButton>
    </div>
  );
}
```
## 8. Dropdown.SplitButton 文本溢出显示省略

```jsx
function DropdownDemo() {
  return (
    <div className="mr-8 ">
      <p>不作限制</p>
      <Dropdown.SplitButton type="secondary" placement="bottom-start">
        主要按钮
      </Dropdown.SplitButton>
      <Dropdown.SplitButton type="light" placement="bottom-start">
        主要按钮
      </Dropdown.SplitButton>
      <p style={{marginTop: '20px'}}>父元素宽度限制</p>
      <div style={{display: 'inline-flex', width: '84px', marginRight: '8px'}}>
        <Dropdown.SplitButton type="secondary" placement="bottom-start">
          主要按钮
        </Dropdown.SplitButton>
      </div>
      <div style={{display: 'inline-flex', width: '74px'}}>
        <Dropdown.SplitButton type="secondary" placement="bottom-start">
          主要按钮
        </Dropdown.SplitButton>
      </div>
      <p style={{marginTop: '20px'}}>自身宽度限制</p>
      <Dropdown.SplitButton className='custom-split-button' type="secondary" placement="bottom-start">
        主要按钮
      </Dropdown.SplitButton>
      <Dropdown.SplitButton className='custom-split-button2' type="light" placement="bottom-start">
        主要按钮
      </Dropdown.SplitButton>
    </div>
  );
}
```

## 9. 自定义Dropdown.SplitButton图标

```jsx
function DropdownDemo(){
  const menu = (
    <Menu selectable>
      <Menu.Item selected>金山文档</Menu.Item>
      <Menu.Item>金山文档</Menu.Item>
      <Menu.Item>金山文档</Menu.Item>
      <Menu.Item>金山文档</Menu.Item>
    </Menu>
  );
  const triggerProps= {
    // prefixIcon: <Info/>
  }
  return (
    <Dropdown.SplitButton panel={menu} triggerProps={triggerProps} triggerIcon={<ArrowDownS size={12}/>} placement="bottom-start" >SplitButton</Dropdown.SplitButton>
  )
}
```
