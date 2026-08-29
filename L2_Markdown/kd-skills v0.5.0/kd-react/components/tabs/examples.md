# Tabs · 分场景示例

以下为常见用法；导入均为 `@kdocs/kdesign`。

## 1. 基础用法

```jsx
function TabsDemo() {
  const tabs = [
    {
      key: 'tab-1',
      label: '我的云文档',
      children: <div>我的云文档</div>,
    },
    {
      key: 'tab-2',
      label: '团队文档',
      children: <div>团队文档</div>,
    },
    {
      key: 'tab-3',
      label: '我的设备',
      children: <div>我的设备</div>,
    },
  ];

  return (
    <div>
      <Tabs items={tabs} size="middle" />
    </div>
  );
}
```

## 2. 禁用

```jsx
function TabsDemo() {
  const tabs = [
    {
      key: 'tab-1',
      label: '我的云文档',
      children: <div>我的云文档</div>,
    },
    {
      key: 'tab-2',
      label: '团队文档',
      disabled: true,
      children: <div>团队文档</div>,
    },
    {
      key: 'tab-3',
      label: '我的设备',
      children: <div>我的设备</div>,
    },
  ];

  return (
    <div>
      <Tabs items={tabs} size="middle" />
    </div>
  );
}
```

## 3. 带图标的页签

```jsx
function TabsDemo() {
  const [active, setActive] = useState(1);

  const onChange = (data) => {
    setActive(data);
  };

  const tabs = new Map([
    [
      1,
      [
        {
          key: 'tab-11',
          label: '我的云文档',
          prefix: <Folder />,
          children: <div>我的云文档</div>,
        },
        {
          key: 'tab-21',
          label: '团队文档',
          prefix: <PeopleDouble />,
          children: <div>团队文档</div>,
        },
        {
          key: 'tab-31',
          label: '我的设备',
          prefix: <Equipment />,
          children: <div>我的设备</div>,
        },
      ],
    ],
    [
      2,
      [
        {
          key: 'tab-1-1',
          label: <Folder />,
          type: 'icon',
          children: <div>我的云文档</div>,
        },
        {
          key: 'tab-2-2',
          label: <PeopleDouble />,
          type: 'icon',
          children: <div>团队文档</div>,
        },
        {
          key: 'tab-3-3',
          label: <Equipment />,
          type: 'icon',
          children: <div>我的设备</div>,
        },
      ],
    ],
    [
      3,
      [
        {
          key: 'tab-1',
          label: '我的云文档',
          children: <div>我的云文档</div>,
          suffix: <Folder />,
        },
        {
          key: 'tab-2',
          label: '团队文档',
          children: <div>团队文档</div>,
          suffix: <PeopleDouble />,
        },
        {
          key: 'tab-3',
          label: '我的设备',
          children: <div>我的设备</div>,
          suffix: <Equipment />,
        },
      ],
    ],
  ]);

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
        <Radio value={1} checked={active === 1} onChange={onChange}>
          前置图标
        </Radio>
        <Radio value={2} checked={active === 2} onChange={onChange}>
          纯图标页签
        </Radio>
        <Radio value={3} checked={active === 3} onChange={onChange}>
          后置图标
        </Radio>
      </div>
      <Tabs items={tabs.get(active)} />
    </div>
  );
}
```

## 4. 边框

支持给标签页头部区域设置边框

```jsx
function TabsDemo() {
  const tabs = [
    {
      key: 'tab-1',
      label: '我的云文档',
      children: <div>我的云文档</div>,
    },
    {
      key: 'tab-2',
      label: '团队文档',
      children: <div>团队文档</div>,
    },
    {
      key: 'tab-3',
      label: '我的设备',
      children: <div>我的设备</div>,
    },
  ];

  return (
    <div>
      <Tabs items={tabs} size="middle" showDivider={true} />
    </div>
  );
}
```

## 5. 不同尺寸

通过 `size = "small | middle | large"` 设置标签页的尺寸，

```jsx
function TabsDemo() {
  const radioGroup = [
    {
      key: 'small',
      value: 'small',
    },
    {
      key: 'middle',
      value: 'middle',
    },
    {
      key: 'large',
      value: 'large',
    },
  ];

  const tabs = [
    {
      key: 'tab-1',
      label: '我的云文档',
      children: <div>我的云文档</div>,
    },
    {
      key: 'tab-2',
      label: '团队文档',
      disabled: true,
      children: <div>团队文档</div>,
    },
    {
      key: 'tab-3',
      label: '我的设备',
      children: <div>我的设备</div>,
    },
  ];

  const [size, setSize] = useState('small');

  const onChange = (value) => {
    setSize(value);
  };

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
        {radioGroup.map((ele) => (
          <Radio key={ele.key} value={ele.value} checked={ele.value === size} onChange={onChange} />
        ))}
      </div>
      <Tabs items={tabs} size={size} />
    </div>
  );
}
```

## 6. 位置

通过 `position="horizontal | vertical"` 设置位置，支持横向、纵向两种布局

```jsx
function TabsDemo() {
  const radioGroup = [
    {
      key: 'horizontal',
      value: 'horizontal',
    },
    {
      key: 'vertical',
      value: 'vertical',
    },
  ];

  const tabs = [
    {
      key: 'tab-1',
      label: '我的云文档',
      children: <div>我的云文档</div>,
    },
    {
      key: 'tab-2',
      label: '团队文档',
      children: <div>团队文档</div>,
    },
    {
      key: 'tab-3',
      label: '我的设备',
      children: <div>我的设备</div>,
    },
  ];

  const [pos, setPos] = useState('horizontal');

  const onChange = (value) => {
    setPos(value);
  };

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '40px' }}>
        {radioGroup.map((ele) => (
          <Radio key={ele.key} value={ele.value} checked={ele.value === pos} onChange={onChange} />
        ))}
      </div>
      <Tabs items={tabs} position={pos} />
    </div>
  );
}
```

## 7. 卡片式页签

另一种风格的页签, 不提供对应的垂直布局样式

```jsx
function TabsDemo() {
  const tabs = [
    {
      key: 'tab-1',
      label: '我的云文档',
      children: <div>我的云文档</div>,
    },
    {
      key: 'tab-2',
      label: '团队文档',
      children: <div>团队文档</div>,
    },
    {
      key: 'tab-3',
      label: '我的设备',
      children: <div>我的设备</div>,
    },
  ];

  return (
    <div>
      <Tabs items={tabs} type="card" />
    </div>
  );
}
```

## 8. 切换时销毁 DOM

通过设置 `destroyOnHide` 属性，标签页切换隐藏时会销毁 children 的 DOM 结构

```jsx
function TabsDemo() {
  const tabs = [
    {
      key: 'tab-1',
      label: '我的云文档',
      children: (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
          <strong>我的云文档</strong>
          <Checkbox>文件1</Checkbox>
          <Checkbox>文件2</Checkbox>
        </div>
      ),
    },
    {
      key: 'tab-2',
      label: '团队文档',
      children: (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
          <strong>团队文档</strong>
          <Checkbox>文件1</Checkbox>
          <Checkbox>文件2</Checkbox>
        </div>
      ),
    },
    {
      key: 'tab-3',
      label: '我的设备',
      children: (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
          <strong>我的设备</strong>
          <Checkbox>文件1</Checkbox>
          <Checkbox>文件2</Checkbox>
        </div>
      ),
    },
  ];

  return (
    <div>
      <Tabs items={tabs} destroyOnHide={true} />
    </div>
  );
}
```

## 9. 滑动

当横向空间不足时，可以左右滑动，容纳更多标签。

```jsx
function TabsDemo() {
  const tabs = [
    { key: 'tab-1', label: '导航选项1', children: <div>标签页1</div> },
    { key: 'tab-2', label: '导航选项2', children: <div>标签页2</div> },
    { key: 'tab-3', label: '导航选项3', children: <div>标签页3</div> },
    { key: 'tab-4', label: '导航选项4', children: <div>标签页4</div> },
    { key: 'tab-5', label: '导航选项5', children: <div>标签页5</div> },
    { key: 'tab-6', label: '导航选项6', children: <div>标签页6</div> },
    { key: 'tab-7', label: '导航选项7', children: <div>标签页7</div> },
    { key: 'tab-8', label: '导航选项8', children: <div>标签页8</div> },
    { key: 'tab-9', label: '导航选项9', children: <div>标签页9</div> },
    { key: 'tab-10', label: '导航选项10', children: <div>标签页10</div> },
    { key: 'tab-11', label: '导航选项11', children: <div>标签页11</div> },
    { key: 'tab-12', label: '导航选项12', children: <div>标签页12</div> },
    { key: 'tab-13', label: '导航选项13', children: <div>标签页13</div> },
    { key: 'tab-14', label: '导航选项14', children: <div>标签页14</div> },
    { key: 'tab-15', label: '导航选项15', children: <div>标签页15</div> },
    { key: 'tab-16', label: '导航选项16', children: <div>标签页16</div> },
    { key: 'tab-17', label: '导航选项17', children: <div>标签页17</div> },
    { key: 'tab-18', label: '导航选项18', children: <div>标签页18</div> },
    { key: 'tab-19', label: '导航选项19', children: <div>标签页19</div> },
    { key: 'tab-20', label: '导航选项20', children: <div>标签页20</div> },
    { key: 'tab-21', label: '导航选项21', children: <div>标签页21</div> },
    { key: 'tab-22', label: '导航选项22', children: <div>标签页22</div> },
    { key: 'tab-23', label: '导航选项23', children: <div>标签页23</div> },
    { key: 'tab-24', label: '导航选项24', children: <div>标签页24</div> },
    { key: 'tab-25', label: '导航选项25', children: <div>标签页25</div> },
    { key: 'tab-26', label: '导航选项26', children: <div>标签页26</div> },
    { key: 'tab-27', label: '导航选项27', children: <div>标签页27</div> },
    { key: 'tab-28', label: '导航选项28', children: <div>标签页28</div> },
    { key: 'tab-29', label: '导航选项29', children: <div>标签页29</div> },
    { key: 'tab-30', label: '导航选项30', children: <div>标签页30</div> },
  ];

  return (
    <div>
      <Tabs items={tabs} />
    </div>
  );
}
```
