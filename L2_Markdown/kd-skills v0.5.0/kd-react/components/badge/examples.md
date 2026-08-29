# Badge · 分场景示例

以下为常见用法；导入均为 `@kdocs/kdesign`。

## 1. 基础用法

```jsx
function demo() {
    return (
        <div>
            <Badge value={ 9 }>
                <Button type='secondary' size="small">评论</Button>
            </Badge>
            <p></p>
            <Badge value={ 99 }>
                <Button type='secondary' size="small">评论</Button>
            </Badge>
            <p></p>
            <Badge value={ 999 }>
                <Button type='secondary' size="small">评论</Button>
            </Badge>
        </div>
    )
}

```

## 2. 最大值

```jsx
function demo() {
    return (
        <div>
            <Badge value={ 200 } max={ 99 }>
                <Button type='secondary' size="small">评论</Button>
            </Badge>
            <p></p>
            <Badge value={ 200 } max={ 99 } ellipsis="...">
                <Button type='secondary' size="small">评论</Button>
            </Badge>
        </div>
    )
}
```

## 3. 自定义内容

```jsx
function demo() {
    return (
        <div>
            <Badge value={ 'New' }>
                <Button type='secondary' size="small">评论</Button>
            </Badge>
            <p></p>
            <Badge value={ 'Hot' }>
                <Button type='secondary' size="small">评论</Button>
            </Badge>
        </div>
    )
}
```

## 4. 自定义样式

```jsx
function demo() {
    const customStyles = {
     height: '20px',
     background: '#f5f5f5',  
     color: 'rgba(13, 13, 13, 0.46)',  
    };  

    return (
        <div>
            <Badge value={ 'Beta' } style={customStyles} >
                <Button type='secondary' size="small">评论</Button>
            </Badge>
        </div>
    )
}
```

## 5. 小红点

```jsx
function demo() {
    return (
        <div>
            <Badge isDot>
                数据查询
            </Badge>
            <p></p>
            <Badge isDot>
                <Button type="primary">评论</Button>
            </Badge>
        </div>
    )
}
```
