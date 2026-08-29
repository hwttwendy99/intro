# Popover · 分场景示例

以下为常见用法；导入均为 `@kdocs/kdesign`。

## 1. 基础用法

```jsx
function PopoverDemo() {
  const content = <div>基础用法</div>;
  return (
    <div className="mr-8">
      <Popover content={content} trigger="hover">
        <Button type="primary">Hover Me</Button>
      </Popover>
      <Popover content={content} trigger="click">
        <Button type="primary">Click Me</Button>
      </Popover>
    </div>
  );
}
```



## 2. 位置 Placement

```jsx
function PopoverDemo() {
  
  const tops = [
    ['top-start', 'TopStart'],
    ['top', 'Top'],
    ['top-end', 'TopEnd'],
  ];
  const right = [
    ['right-start', 'RightStart'],
    ['right', 'Right'],
    ['right-end', 'RightEnd'],
  ];
  const bottom = [
    ['bottom-start', 'BottomStart'],
    ['bottom', 'Bottom'],
    ['bottom-end', 'BottomEnd'],
  ];
  const left = [
    ['left-start', 'LeftStart'],
    ['left', 'Left'],
    ['left-end', 'LeftEnd'],
  ];
  return (
    <div className="basic-popover">
      <div className="top">
        {tops.map((item, index) => (
          <Popover placement={item[0]} content={item[1]} key={index}>
            <Button type="secondary">{item[0]}</Button>
          </Popover>
        ))}
      </div>
      <div className="left">
        {left.map((item, index) => (
          <Popover placement={item[0]} content={item[1]} key={index}>
            <Button type="secondary">{item[0]}</Button>
          </Popover>
        ))}
      </div>

      <div className="right">
        {right.map((item, index) => (
          <Popover placement={item[0]} content={item[1]} key={index}>
            <Button type="secondary">{item[0]}</Button>
          </Popover>
        ))}
      </div>
      <div className="bottom">
        {bottom.map((item, index) => (
          <Popover placement={item[0]} content={item[1]} key={index}>
            <Button type="secondary">{item[0]}</Button>
          </Popover>
        ))}
      </div>
    </div>
  );
}
```
## 3. 自定义显隐
> 通过`visible`、`onVisibleChange` 可进行显隐控制

```jsx
function PopoverDemo () {
  const content = <div>自定义显示隐藏</div>;
  const [show, setShow] = useState(false);
  function onVisibleChange(v){
    setTimeout(()=>{
      setShow(v)
    }, v ? 1000 : 0)
  }
  return (
    <div className="mr-8">
      <Popover content={content} trigger="click" visible={show} onVisibleChange={onVisibleChange}>
        <Button type="secondary">{show ? '关闭' : '打开'}Popover</Button>
      </Popover>
    </div>
  ); 
}
```


## 4. 不展示

```jsx
function PopoverDemo () {
  const content = <div>关闭展示</div>;
  return (
    <div className="mr-8">
      <Popover content={content} trigger="hover" visible={false}>
        <Button type="secondary">visible为false</Button>
      </Popover>
    </div>
  ); 
}
```

## 5. 箭头

```jsx
function PopoverDemo() {
  return (
    <div>
      <Popover content="展示箭头" visibleArrow={true} trigger="click">
        <Button type="secondary">展示箭头</Button>   
      </Popover>  
      <Popover content="隐藏箭头" visibleArrow={false} trigger="click">
        <Button type="secondary">隐藏箭头</Button>
      </Popover>
    </div>
  );
}
```

## 6. 自定义内容

```jsx
function PopoverDemo() {
  
  const content = (
    <div>
      <p className="title">什么是AirSheet？</p>
      <p>
        <b>AirSheet</b>
        在线表格主要服务于“在线协同场景”用户；除了提供基础的“多人编辑”能力外；未来会更侧重于在「
        <b>数据规范</b>、<b>协作可控</b>、<b>过程追溯</b>」三个能力上的升级
      </p>
    </div>
  );
  return (
    <Popover content={content} visibleArrow>
      <Button prefixIcon={<KsheetFormat size="16" fill="#409EFF" />} type="light" active>
        什么是AirSheet
      </Button>
    </Popover>
  );
}
```

## 7. 偏移量 offset

```jsx
function PopoverDemo() {
  
  return (
    <div className="mr-8">
      <Popover placement="top" offset={{ x: 0, y: 30 }} content="Y轴向上偏移30">
        <Button type="secondary">Y轴向上偏移30</Button>
      </Popover>
      <Popover placement="top" offset={{ x: 30, y: 20 }} content="X轴向右30，Y轴向上20">
        <Button type="secondary">X轴向右30，Y轴向上20</Button>
      </Popover>
      <Popover placement="right" offset={{ x: 20, y: 0 }} content="右偏移20">
        <Button type="secondary">右偏移20</Button>
      </Popover>
    </div>
  );
}
```
