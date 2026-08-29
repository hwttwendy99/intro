# Tooltip · 分场景示例

以下为常见用法；导入均为 `@kdocs/kdesign`。

## 1. 基础用法

```jsx
function TooltipDemo() {
  return (
    <div>
      <Tooltip title="这是一个tooltip">
        <Button type="secondary">基础用法</Button>
      </Tooltip>
    </div>
  );
}
```

## 2. 位置

```jsx
function TooltipPlacement() {
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
    <div className="basic-tooltip">
      <div className="top">
        {tops.map((item, index) => (
          <Tooltip placement={item[0]} title={item[1]} key={index}>
            <Button type="secondary">{item[0]}</Button>
          </Tooltip>
        ))}
      </div>

        <div className="left">
          {left.map((item, index) => (
            <Tooltip placement={item[0]} title={item[1]} key={index}>
              <Button type="secondary">{item[0]}</Button>
            </Tooltip>
          ))}
        </div>

        <div className="right">
          {right.map((item, index) => (
            <Tooltip placement={item[0]} title={item[1]} key={index}>
              <Button type="secondary">{item[0]}</Button>
            </Tooltip>
          ))}
        </div>
      <div className="bottom">
        {bottom.map((item, index) => (
          <Tooltip placement={item[0]} title={item[1]} key={index}>
            <Button type="secondary">{item[0]}</Button>
          </Tooltip>
        ))}
      </div>
    </div>
  );
}
```

## 3. 自定义显隐
> 通过`visible`、`onVisibleChange` 可进行显隐控制

```jsx
function TooltipDemo () {
  const content = <div>自定义显示隐藏</div>;
  const [show, setShow] = useState(false);
  function onVisibleChange(v){
    setTimeout(()=>{
      setShow(v)
    }, v ? 1000 : 0)
  }
  return (
    <div className="mr-8">
      <Tooltip title={content} visible={show} onVisibleChange={onVisibleChange}>
        <Button type="secondary">{show ? '关闭' : '打开'}Tooltip</Button>
      </Tooltip>
    </div>
  ); 
}
```

## 4. 最大宽度

```jsx
function TooltipDemo() {
  const content = 'KDesign是一个适应性强的指南、组件和工具系统，支持用户界面设计的最佳实践。在开源代码的支持下，KDesign 简化了设计人员和开发人员之间的协作，并帮助团队快速构建精美的产品。';
  return (
    <div>
      <Tooltip title={content}>
        <Button type="secondary">基础用法</Button>
      </Tooltip>
    </div>
  );
}
```

## 5. 自定义 content

```jsx
function TooltipDemo() {
  const context = (
    <div>
      <div>自定义的一行信息</div>
      <div>2行信息</div>
    </div>
  );
  return (
    <div>
      <Tooltip placement="bottom" title={context}>
        <Button type="secondary">自定义content</Button>
      </Tooltip>
    </div>
  );
}
```
## 6. disabled
```jsx
function TooltipDemo(){
  return (
    <Tooltip placement="top" title="disabled" disabled>
      <Button type="secondary">disabled</Button>
    </Tooltip>
  )
}
```


## 7. 控制延迟展示时间

```jsx
function TooltipDemo() {
  return (
    <div className="mr-8">
      <Tooltip placement="top" title={<div>立即出现的Tooltip</div>} delay={0}>
        <Button type='secondary'>无延迟Tooltip</Button>
      </Tooltip>
      <Tooltip placement="top" title={<div>正常Tooltip（默认延迟400ms）</div>}>
        <Button type="secondary">正常Tooltip</Button>
      </Tooltip>
      <Tooltip placement="top" title={<div>延迟1秒出现的Tooltip</div>} delay={1000}>
        <Button type="secondary">延迟1秒出现的Tooltip</Button>
      </Tooltip>
    </div>
  );
}
```
