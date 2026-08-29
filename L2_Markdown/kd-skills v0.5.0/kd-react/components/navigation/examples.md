# Navigation · 分场景示例

以下为常见用法；导入均为 `@kdocs/kdesign`。

## 1. 基础用法
- `defaultVal`用于设置默认值
- `onChange` 导航变化时调用
- `min` 控制宽度不足时保留导航数
- 试试缩小可视区域

```jsx
function Demo() {
const ref = useRef()
   const items = [
    {
      key: '1',
      label: '导航菜单1',
      icon: <TransmitDownload />,
    },
    {
      key: '2',
      label: '导航菜单2',
      icon: <TransmitDownload />,
      suffix: (
        <Button
          className="kd-navigation-item__suffix"
          onClick={(e) => alert(1)}
          type="light"
          icon={<Emojis />}
        />
      )
    },
    { key: '3', label: '导航菜单3', disabled: true, icon: <TransmitDownload /> },
    { key: '4', label: '导航菜单4', disabled: true, icon: <TransmitDownload /> },
    { key: '5', label: '导航菜单5', disabled: true, icon: <TransmitDownload /> },
  ];


  const style = { width: '100%'}
  const onChange =(item) => {
    console.log('onChange', item)
  }
  return (
    <div className="test" style={style}>
      <Navigation ref={ref} defaultVal={1} min={2} onChange={onChange} items={items}></Navigation>
    </div>
  );
}
```

```jsx
function Demo() {
const ref = useRef()
   const items = [
    {
      key: '1',
      label: '导航菜单1',
      icon: <TransmitDownload />,
      children: [
        {
          key: '11',
          label: '导航菜单1-1',
          icon: <TransmitDownload />,
          children: [{ key: '111', label: '导航菜单1-1-1' }],
        },
        { key: '12', label: '导航菜单1-2', icon: <TransmitDownload /> },
      ],
    },
    {
      key: '2',
      label: '导航菜单2',
      icon: <TransmitDownload />,
      suffix: (
        <Button
          className="kd-navigation-item__suffix"
          onClick={(e) => alert(1)}
          type="light"
          icon={<Emojis />}
        />
      ),
      children: [
        {
          key: '21',
          label: '导航菜单2-1',
          icon: <TransmitDownload />,
          children: [{ key: '211', label: '导航菜单1-1-1' }],
        },
        { key: '22', label: '导航菜单2-2', icon: <TransmitDownload /> },
      ]
    },
    { key: '3', label: '导航菜单3', disabled: true, icon: <TransmitDownload /> },
  ];


  const style = { width: '100%'}
  const onChange =(item) => {
    console.log('onChange', item)
  }
  return (
    <div className="test" style={style}>
      <Navigation ref={ref} defaultVal={1} min={2} onChange={onChange} items={items}></Navigation>
    </div>
  );
}
```
####  受控组件
配合 `value` 和`onClick` 达到受控组件效果，
```jsx
function Demo() {
  const items = [
    {
      key: '1',
      label: '导航菜单1',
      icon: <TransmitDownload />,
      children: [
        {
          key: '11',
          label: '导航菜单1-1',
          icon: <TransmitDownload />,
          children: [{ key: '111', label: '导航菜单1-1-1' }],
        },
        { key: '12', label: '导航菜单1-2', icon: <TransmitDownload /> },
      ],
    },
    {
      key: '2',
      label: '导航菜单2',
      icon: <TransmitDownload />,
      suffix: (
        <Button
          className="kd-navigation-item__suffix"
          onClick={(e) => alert(1)}
          type="light"
          icon={<Emojis />}
        />
      ),
    },
    { key: '3', label: '导航菜单3', icon: <TransmitDownload /> },
  ];
  const [value, setValue] = useState('1');
  const onClick = (item) => {
    console.log('onClick', item)
    // setValue(item.key);
  };
  return (
    <div className="test">
      <Navigation value={value} onClick={onClick} items={items}></Navigation>
    </div>
  );
}
```

#### click
`trigger`设置为 'click'
```jsx
function Demo() {
   const items = [
    {
      key: '1',
      label: '导航菜单1',
      icon: <TransmitDownload />,
      children: [
        {
          key: '11',
          label: '导航菜单1-1',
          icon: <TransmitDownload />,
          children: [{ key: '111', label: '导航菜单1-1-1' }],
        },
        { key: '12', label: '导航菜单1-2', icon: <TransmitDownload /> },
      ],
    },
    {
      key: '2',
      label: '导航菜单2',
      icon: <TransmitDownload />,
      suffix: (
        <Button
          className="kd-navigation-item__suffix"
          onClick={(e) => alert(1)}
          type="light"
          icon={<Emojis />}
        />
      ),
    },
    { key: '3', label: '导航菜单3', icon: <TransmitDownload /> },
  ];


  const style = { width: '100%'}
  const onChange =(item) => {
    console.log('onChange', item)
  }
  return (
    <div className="test" style={style}>
      <Navigation trigger='click' defaultVal={'1'} onChange={onChange} items={items}></Navigation>
    </div>
  );
}
```

#### 图标导航
为icon导航设置`type` 为`icon`
```jsx
function Demo() {
  const items = [
    {
      key: '1',
      icon: <TransmitDownload />,
      children: [
        {
          key: '11',
          label: '导航菜单1-1-1',
          icon: <TransmitDownload />,
          children: [{ key: '111', label: '导航菜单abc' }],
        },
        { key: '12', label: '导航菜单1-2', icon: <TransmitDownload /> },
      ],
      type: 'icon'
    },
    {
      key: '2',
      label: '导航菜单2',
      icon: <TransmitDownload />,
      suffix: (
        <Button
          className="kd-navigation-item__suffix"
          onClick={(e) => alert(1)}
          type="light"
          icon={<Emojis />}
        />
      ),
    },
    { key: '3', label: '导航菜单3', icon: <TransmitDownload />, type: 'icon' },
  ];

  const onClick = (item) => {
    console.log('onClick', item)
    // setValue(item.key);
  };


  const style = { width: '100%'}
  return (
    <div className="test" style={style}>
      <Navigation onClick={onClick} defaultVal={'1'} items={items}></Navigation>
    </div>
  );
}
```

#### 侧边导航

```jsx
function Demo() {
  const Item = Menu.Item;
  const items = [
   {
      key: '1',
      label: '导航菜单1',
      icon: <TransmitDownload />,
      children: [
        {
          key: '11',
          label: '导航菜单1-1',
          icon: <TransmitDownload />,
          children: [{ key: '111', label: '导航菜单1-1-1' }],
          suffix: '开发中'
        },
        { key: '12', label: '导航菜单1-2', icon: <TransmitDownload /> },
      ],
    },
    {
      key: '2',
      label: '导航菜单2',
      icon: <TransmitDownload />,
      suffix: (
        <Button
          className="kd-navigation-item__suffix"
          onClick={(e) => alert(1)}
          type="light"
          icon={<Emojis />}
        />
      ),
    },
    { key: '3', label: '导航菜单3', icon: <TransmitDownload />, suffix: '随手技能用', disabled: true },
  ];
  const [value, setValue] = useState(0);
  const onClick = (item) => {
    console.log('onClick', item)
    // setValue(item.key);
  };
  return (
    <div className="test" style={{ width: '200px'}}>
      <Navigation onClick={onClick} layout="vertical" defaultVal={'1'}  items={items}></Navigation>
    </div>
  );
}
```

#### 导航中图标大小设置
```jsx
function Demo() {
  const [iconSize, setSize] = useState('small')
  const Item = Menu.Item;
  const items = [
   {
      key: '1',
      label: '导航菜单1',
      icon: <TransmitDownload />,
      children: [
        {
          key: '11',
          label: '导航菜单1-1',
          icon: <TransmitDownload />,
          children: [{ key: '111', label: '导航菜单1-1-1' }],
          suffix: '开发中'
        },
        { key: '12', label: '导航菜单1-2', icon: <TransmitDownload /> },
      ],
      suffix: 'i dont know what to write'
    },
    {
      key: '2',
      label: '导航菜单2',
      icon: <TransmitDownload />,
      suffix: 'me too'
    },
    { key: '3', label: '导航菜单3', icon: <TransmitDownload />, suffix: '随手技能用', disabled: true },
  ];
  const [value, setValue] = useState(0);
  return (
    <div className="test">
      <div style={{'margin-bottom': '20px'}}>
        <Button style={{ 'margin-right': '8px'}} type='primary' onClick={() => setSize('small')}>small/default</Button>
        <Button style={{ 'margin-right': '8px'}} type='primary' onClick={() => setSize('medium')}>medium</Button>
        <Button sstyle={{ 'margin-right': '8px'}} type='primary' onClick={() => setSize(32)}>large</Button>
      </div>

      <Navigation layout="vertical" iconSize={iconSize} defaultVal={'1'} items={items}/>
      <br/>
      <Navigation iconSize={iconSize} defaultVal={'1'}  items={items}/>
    </div>
  );
}
```
