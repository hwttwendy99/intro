# Menu · 分场景示例

以下为常见用法；导入均为 `@kdocs/kdesign`。

## 1. 基础用法

```jsx
function demo() {
    const Item = Menu.Item
    return (
        <Menu selectable style={{width: 120}}>
            <Menu.Item>item1</Menu.Item>
            <Menu.Item>item2</Menu.Item>
            <Menu.Item>item3</Menu.Item>
            <Menu.Item selected>item4</Menu.Item>
            <Menu.Item>item5</Menu.Item>
        </Menu>
    )
}
```
## 2. 可配置icon

```jsx
function demo() {
    return (
        <Menu selectable style={{display: 'inline-block'}}>
            <Menu.Item icon={<KdLogoOrigin size="14"/>}>item1</Menu.Item>
            <Menu.Item icon={<KdLogoOrigin size="14"/>}>item2</Menu.Item>
            <Menu.Item icon={<KdLogoOrigin size="14"/>}>item3</Menu.Item>
            <Menu.Item icon={<KdLogoOrigin size="14"/>} selected>item4</Menu.Item>
            <Menu.Item icon={<KdLogoOrigin size="14"/>}>item5</Menu.Item>
        </Menu>
    )
}
```

## 3. 多选菜单

```jsx
function demo() {
    const Item = Menu.Item;
    return (
        <Menu className="menu-1" checkable>
            <Item value='test' checked>item1</Item>
            <Item disabled>item2</Item>
            <Item key='2'>item3</Item>
            <Item>item4</Item>
            <Item>item5</Item>
        </Menu>
    )
}
```

## 4. 多级菜单

```jsx
function demo() {
    function onOpenChange(v){
      console.log('onOpenChange', v)
    }
    const Item = Menu.Item;
    return (
        <div className='flex'>
            <Menu className='menu-1'>
                <Item>item1</Item>
                <Menu.SubMenu label='item2'>
                    <Menu.SubMenu label='Submenu item1'>
                        <Menu.SubMenu label='SubSubmenu item1'>
                            <Item>SSSubmenu item1</Item>
                            <Item>SSSubmenu item2</Item>
                            <Item>SSSubmenu item3</Item>
                        </Menu.SubMenu>
                        <Item>SubSubmenu item2</Item>
                        <Item>SubSubmenu item3</Item>
                    </Menu.SubMenu>
                    <Item>Submenu item2</Item>
                    <Item>Submenu item3</Item>
                </Menu.SubMenu>
                <Item>item3</Item>
            </Menu>
            <br />
            <Menu className="menu-1" triggerSubMenuAction='hover'>
                <Item>item1</Item>
                <Menu.SubMenu label='item2'>
                    <Item>Submenu item1</Item>
                    <Item>Submenu item2</Item>
                    <Menu.SubMenu label='Submenu item3'>
                        <Item>SubSubmenu item1</Item>
                        <Item>SubSubmenu item2</Item>
                        <Menu.SubMenu label='SubSubmenu item3'>
                            <Item>SSSubmenu item1</Item>
                            <Item>SSSubmenu item2</Item>
                            <Item>SSSubmenu item3</Item>
                        </Menu.SubMenu>
                    </Menu.SubMenu>
                </Menu.SubMenu>
                <Item>item3</Item>
            </Menu>
        </div>
    )
}
```

## 5. 分割线

```jsx
function demo() {
    const Item = Menu.Item;
    const Divider = Menu.Divider;
    return (
        <Menu className="menu-3">
            <Item>item1</Item>
            <Item>item2</Item>
            <Divider />
            <Item>item3</Item>
        </Menu>
    )
}
```

## 6. 分组标题

```jsx
function demo() {
    const Item = Menu.Item;
    const Group = Menu.Group;
    return (
        <Menu className="menu-3">
            <Group label='分组1'>
                <Item>item1</Item>
            </Group>
            <Group label='分组2'>
                <Item>item2</Item>
            </Group>
        </Menu>
    )
}
```

## 7. 可滚动menu

```jsx
function demo() {
    const Item = Menu.Item;
    return (
        <Menu className="menu-4" style={{maxHeight: 300}}>
            <Item>item1</Item>
            <Item>item2</Item>
            <Item>item3</Item>
            <Item>item4</Item>
            <Item>item5</Item>
            <Item>item6</Item>
            <Item>item7</Item>
            <Item>item8</Item>
            <Item>item9</Item>
            <Item>item10</Item>
            <Item>item11</Item>
            <Item>item12</Item>
            <Item>item13</Item>
            <Item>item14</Item>
            <Item>item15</Item>
            <Item>item16</Item>
            <Item>item17</Item>
            <Item>item18</Item>
            <Item>item19</Item>
            <Item>item20</Item>
        </Menu>
    )
}
```
