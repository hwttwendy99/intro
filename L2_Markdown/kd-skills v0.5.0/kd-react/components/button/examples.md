# Button · 分场景示例

以下为常见用法；导入均为 `@kdocs/kdesign`。

## 1. 基础用法

```jsx
function ButtonDemo() {
  return (
    <div className='mr-8'>
      <Button type='primary' prefixIcon={<Emojis className='emojis'/>}>主要按钮</Button>
      <Button type='secondary'>次要按钮</Button>
      <Button type='light'>轻浅按钮</Button>
      <Button icon={<Emojis />}></Button>
    </div>
  )
}
```

## 2. 主要按钮

```jsx
function ButtonDemo() {
  return (
    <div className='mr-8'>
      <Button type="primary">主要按钮</Button>
      <Button type="primary" active>激活状态</Button>
      <Button type="primary" disabled>禁用状态</Button>
      <Button type="primary" loading>加载中</Button>
    </div>
  )
}
```

## 3. 次要按钮

```jsx
function ButtonDemo() {
  return (
    <div className='mr-8'>
      <Button type="secondary">次要按钮</Button>
      <Button type="secondary" active>激活状态</Button>
      <Button type="secondary" disabled>禁用状态</Button>
      <Button type="secondary" loading>加载中</Button>
    </div>
  )
}
```

## 4. 轻浅按钮

```jsx
function ButtonDemo() {
  return (
    <div className='mr-8'>
      <Button type='light'>轻浅按钮</Button>
      <Button type='light' active>激活状态</Button>
      <Button type='light' disabled>禁用状态</Button>
      <Button type='light' loading>加载中</Button>
    </div>
  )

}
```

## 5. 图标按钮

```jsx
function ButtonDemo() {
  return (
    <>
      <div className='mr-8'>
        <Button type="primary" icon={<Emojis className='docs-emoji'/>}></Button>
        <Button type="secondary" icon={<Emojis />}></Button>
        <Button type="light" icon={<Emojis />}></Button>
      </div>
      <br />
      <div className='mr-8'>
        <Button type="primary" icon={<Emojis className='docs-emoji'/>} active></Button>
        <Button type="secondary" icon={<Emojis  fill="#0A6CFF"/>} active></Button>
        <Button type="light" icon={<Emojis  fill="#0A6CFF"/>} active></Button>
      </div>
    </>
  )
}
```

## 6. 强调和危险按钮

```jsx
function ButtonDemo() {
  return (
    <div className='mr-8'>
      <Button type='secondary' highlight>次要按钮</Button>
      <Button type='light' highlight>轻浅按钮</Button>
      <Button icon={<Emojis fill="currentColor"/>} highlight></Button>
      <br />
      <br />
      <Button type='primary' danger>主要按钮</Button>
      <Button type='secondary' danger>次要按钮</Button>
      <Button type='light' danger>轻浅按钮</Button>
      <Button icon={<Emojis fill="currentColor"/>} danger></Button>
    </div>
  )
}
```

## 7. 菜单按钮

```jsx
function ButtonDemo() {
  return (
    <div className='mr-8'>
      <Button type="primary" dropdown>菜单按钮</Button>
      <Button type="secondary" dropdown>菜单按钮</Button>
      <Button type="light" dropdown>菜单按钮</Button>
      <br />
      <br />
      <Button type="primary" dropdown active>菜单按钮</Button>
      <Button type="secondary" dropdown active>菜单按钮</Button>
      <Button type="light" dropdown active>菜单按钮</Button>
    </div>
  )
}
```

## 8. 不同尺寸

```jsx
function ButtonDemo() {
  return (
    <div className='mr-8'>
      <Button type='primary' size='x-large'>超大按钮</Button>
      <Button type='primary' size='large'>大按钮</Button>
      <Button type='primary' size='medium'>普通按钮</Button>
      <Button type='primary' size='small'>小按钮</Button>
      <br />
      <br />
      <Button type='secondary' size='x-large'>超大按钮</Button>
      <Button type='secondary' size='large'>大按钮</Button>
      <Button type='secondary' size='medium'>普通按钮</Button>
      <Button type='secondary' size='small'>小按钮</Button>
      <br />
      <br />
      <Button type='light' size='x-large'>超大按钮</Button>
      <Button type='light' size='large'>大按钮</Button>
      <Button type='light' size='medium'>普通按钮</Button>
      <Button type='light' size='small'>小按钮</Button>
    </div>
  )
}
```


## 9. 按钮组

```jsx
function ButtonDemo() {
  return (
    <div>
      <Button.Group>
        <Button type='secondary'>按钮1</Button>
        <Button type='secondary'>按钮2</Button>
        <Button type='secondary'>按钮3</Button>
      </Button.Group>
      <br />
      <br />
      <Button.Group noSplit>
        <Button type='secondary'>按钮1</Button>
        <Button type='secondary'>按钮2</Button>
        <Button type='secondary'>按钮3</Button>
      </Button.Group>
    </div>
  )
}
```

## 10. 溢出显示省略

当按钮长度有限制时，但内容文本过长，此时组件策略为显示省略

```jsx
function ButtonDemo() {
  return (
    <div className='mr-8'>
      <p>不做限制</p>
      <Button type="primary" dropdown>菜单按钮</Button>
      <Button type="secondary" dropdown>菜单按钮</Button>
      <Button type="light" dropdown>菜单按钮</Button>
      <p style={{marginTop: '20px'}}>父元素宽度限制</p>
      <div style={{ display: 'inline-flex', width: '80px', marginRight: '8px' }}>
        <Button type="primary" dropdown>菜单按钮</Button>
      </div>
      <div style={{ display: 'inline-flex', width: '80px', marginRight: '8px' }}>
        <Button type="secondary" dropdown>菜单按钮</Button>
      </div>
      <div style={{ display: 'inline-flex', width: '80px', marginRight: '8px' }}>
        <Button type="light" dropdown>菜单按钮</Button>
      </div>
      <p style={{marginTop: '20px'}}>自身宽度限制</p>
      <Button style={{ width: '80px' }} type="primary" dropdown>菜单按钮</Button>
      <Button style={{ width: '80px' }} type="secondary" dropdown>菜单按钮</Button>
      <Button style={{ width: '80px' }} type="light" dropdown>菜单按钮</Button>
    </div>
  )
}
```
