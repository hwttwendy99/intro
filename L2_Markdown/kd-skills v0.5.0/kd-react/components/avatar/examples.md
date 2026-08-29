# Avatar · 分场景示例

以下为常见用法；导入均为 `@kdocs/kdesign`。

## 1. 基础用法

```jsx
function AvatarDemo() {
    const imgSrc = 'https://imagebucket.test.wpscdn.cn/280036702?imageMogr2/thumbnail/180x180!&k=1628761051461110215'
    return (
        <div className='flex'>
            <div className='mr-8'>
                <Avatar size='small' src={imgSrc}></Avatar>
                <Avatar size='small' icon={<Icon name='brand' size={20}></Icon>}></Avatar>
                <Avatar size='small'>99</Avatar>
                <br />
                <br />
                <Avatar src={imgSrc}></Avatar>
                <Avatar icon={<Icon name='brand'></Icon>}></Avatar>
                <Avatar>99</Avatar>
                <br />
                <br />
                <Avatar size='large' src={imgSrc}></Avatar>
                <Avatar size='large' icon={<Icon name='brand' size='large'></Icon>}></Avatar>
                <Avatar size='large'>99</Avatar>
                <br />
                <br />
                <Avatar size='x-large' src={imgSrc}></Avatar>
                <Avatar size='x-large' icon={<Icon name='brand' size={24}></Icon>}></Avatar>
                <Avatar size='x-large'>99</Avatar>
            </div>
            <div className='mr-8' style={{marginLeft: '60px'}}>
                <Avatar shape='square' size='small' src={imgSrc}></Avatar>
                <Avatar shape='square' size='small' icon={<Icon name='brand' size={20}></Icon>}></Avatar>
                <Avatar shape='square' size='small'>99</Avatar>
                <br />
                <br />
                <Avatar shape='square' src={imgSrc}></Avatar>
                <Avatar shape='square' icon={<Icon name='brand'></Icon>}></Avatar>
                <Avatar shape='square'>99</Avatar>
                <br />
                <br />
                <Avatar shape='square' size='large' src={imgSrc}></Avatar>
                <Avatar shape='square' size='large' icon={<Icon name='brand' size='large'></Icon>}></Avatar>
                <Avatar shape='square' size='large'>99</Avatar>
                <br />
                <br />
                <Avatar shape='square' size='x-large' src={imgSrc}></Avatar>
                <Avatar shape='square' size='x-large' icon={<Icon name='brand' size={24}></Icon>}></Avatar>
                <Avatar shape='square' size='x-large'>99</Avatar>
            </div>
        </div>
    )
}

```

## 2. 头像组合

```jsx
function AvatarDemo() { 
    const imgSrc = 'https://imagebucket.test.wpscdn.cn/280036702?imageMogr2/thumbnail/180x180!&k=1628761051461110215'
    return (
        <div>
            <Avatar.Group maxCount={3} size='small'>
                <Avatar src={imgSrc}></Avatar>
                <Avatar icon={<Icon name='brand'></Icon>}></Avatar>
                <Avatar src={imgSrc}></Avatar>
                <Avatar icon={<Icon name='brand'></Icon>}></Avatar>
                <Avatar src={imgSrc}></Avatar>
                <Avatar icon={<Icon name='brand'></Icon>}></Avatar>
                <Avatar src={imgSrc}></Avatar>
                <Avatar icon={<Icon name='brand'></Icon>}></Avatar>
            </Avatar.Group>
            <br />
            <Avatar.Group maxCount={3} size='medium'>
                <Avatar src={imgSrc}></Avatar>
                <Avatar icon={<Icon name='brand'></Icon>}></Avatar>
                <Avatar src={imgSrc}></Avatar>
                <Avatar icon={<Icon name='brand'></Icon>}></Avatar>
                <Avatar src={imgSrc}></Avatar>
                <Avatar icon={<Icon name='brand'></Icon>}></Avatar>
                <Avatar src={imgSrc}></Avatar>
                <Avatar icon={<Icon name='brand'></Icon>}></Avatar>
            </Avatar.Group>
            <br />
            <Avatar.Group maxCount={3} size='large'>
                <Avatar src={imgSrc}></Avatar>
                <Avatar src={imgSrc}></Avatar>
                <Avatar src={imgSrc}></Avatar>
                <Avatar src={imgSrc}></Avatar>
            </Avatar.Group>
            <br />
             <Avatar.Group maxCount={3} size='x-large'>
                <Avatar src={imgSrc}></Avatar>
                <Avatar src={imgSrc}></Avatar>
                <Avatar src={imgSrc}></Avatar>
                <Avatar src={imgSrc}></Avatar>
            </Avatar.Group>
        </div>
    )
}
```
