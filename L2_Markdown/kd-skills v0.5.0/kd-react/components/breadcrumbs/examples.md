# Breadcrumbs · 分场景示例

以下为常见用法；导入均为 `@kdocs/kdesign`。

## 1. 基础用法

```jsx
function demo() {
  const items = [
    { id: '1', name: '首页' },
    { id: '2', name: '第二级页面' },
    { id: '3', name: '第三级页面' },
  ];

  const itemsWithIcon = [
    { id: '1', name: '首页', icon: <Emojis /> },
    { id: '2', name: '第二级页面', icon: <Emojis /> },
    { id: '3', name: '第三级页面', icon: <Emojis /> },
  ];

  return (
    <div>
      <Breadcrumbs items={items} />
      <br />
      <Breadcrumbs items={itemsWithIcon} />
    </div>
  );
}
```

## 2. 超长折叠

```jsx
function demo() {
  const items = [
    { id: '1', name: '首页' },
    { id: '2', name: '第二级页面' },
    { id: '3', name: '超长的面包屑超长的面包屑超长的面包屑' },
    {
      id: '4',
      name: '超长的面包屑超长的面包屑超长的面包屑超长的面包屑超长的面包屑超长的面包屑',
    },
  ];

  const itemsWithIcon = [
    { id: '1', name: '首页', icon: <Emojis /> },
    { id: '2', name: '第二级页面', icon: <Emojis /> },
    { id: '3', name: '超长的面包屑超长的面包屑超长的面包屑', icon: <Emojis /> },
    {
      id: '4',
      name: '超长的面包屑超长的面包屑超长的面包屑超长的面包屑超长的面包屑超长的面包屑',
      icon: <Emojis />,
    },
  ];

  return (
    <div>
      <Breadcrumbs items={items} />
      <br />
      <Breadcrumbs items={itemsWithIcon} />
    </div>
  );
}
```

## 3. 尺寸

提供两种尺寸，默认为 medium

```jsx
function demo() {
  const items = [
    { id: '1', name: '首页', icon: <Emojis /> },
    { id: '2', name: '第二级页面', icon: <Emojis /> },
    { id: '3', name: '第三级页面', icon: <Emojis /> },
    { id: '4', name: '第四级页面', icon: <Emojis /> },
  ];

  const [size, setSize] = useState();

  return (
    <div>
      <div className="mr-8">
        <Button type="primary" onClick={() => setSize('small')}>
          Small
        </Button>
        <Button type="primary" onClick={() => setSize('medium')}>
          Medium
        </Button>
      </div>
      <br />
      <Breadcrumbs items={items} size={size} />
    </div>
  );
}
```

## 4. 自定义分隔符

```jsx
function demo() {
  const items = [
    { id: '1', name: '首页', icon: <Emojis /> },
    { id: '2', name: '第二级页面', icon: <Emojis /> },
    { id: '3', name: '第三级页面', icon: <Emojis /> },
    { id: '4', name: '第四级页面', icon: <Emojis /> },
  ];

  return <Breadcrumbs items={items} separator={<SymbolSlash />} />;
}
```

## 5. 自定义渲染

```jsx
function demo() {
  const items = [
    { id: '1', name: '首页', icon: <Emojis /> },
    { id: '2', name: '第二级页面', icon: <Emojis /> },
    { id: '3', name: '第三级页面', icon: <Emojis /> },
    { id: '4', name: '第四级页面', icon: <Emojis /> },
  ];

  const menu = (
    <Menu>
      <Menu.Item selected>金山文档</Menu.Item>
      <Menu.Item>金山文档</Menu.Item>
      <Menu.Item>金山文档</Menu.Item>
      <Menu.Item>金山文档</Menu.Item>
    </Menu>
  );

  const customRender = (item) => {
    return (
      <Dropdown.SplitButton type="secondary" panel={menu}>
        {item.name}
      </Dropdown.SplitButton>
    );
  };

  return <Breadcrumbs items={items} renderItem={customRender} />;
}
```

## 6. 自定义最大宽度

```jsx
function demo() {
  const items = [
    { id: '1', name: '首页', icon: <Emojis /> },
    { id: '2', name: '第二级页面', icon: <Emojis /> },
    { id: '3', name: '超长的面包屑超长的面包屑超长的面包屑', icon: <Emojis />, maxWidth: 100 },
    {
      id: '4',
      maxWidth: 200,
      name: '超长的面包屑超长的面包屑超长的面包屑超长的面包屑超长的面包屑超长的面包屑',
      icon: <Emojis />,
    },
  ];

  return <Breadcrumbs items={items} />;
}
```
