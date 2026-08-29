# Table · 分场景示例

以下为常见用法；导入均为 `@kdocs/kdesign`。

## 1. 基础用法

```jsx
function TableDemo() {
  const dataSource = [
    {
      id: '1',
      name: '小明',
      age: 20,
      hight: '174'
    },{
      id: '2',
      name: '小华',
      age: 23,
      hight: '182'
    },{
      id: '3',
      name: '小刘',
      age: 19,
      hight: '172'
    }
  ]

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      width: 100
    },{
      title: '姓名',
      dataIndex: 'name'
    },{
      title: '年龄',
      dataIndex: 'age'
    },{
      title: '身高',
      dataIndex: 'hight'
    }
  ]

  return (
    <div className="table-box">
      <Table dataSource={dataSource} columns={columns} />
    </div>
  )
}
```

## 2. JSX风格的API

```jsx
function TableDemo() {
  const dataSource = [
    {
      id: '1',
      name: '小明',
      age: 20,
      hight: '174'
    },{
      id: '2',
      name: '小华',
      age: 23,
      hight: '182'
    },{
      id: '3',
      name: '小刘',
      age: 19,
      hight: '172'
    }
  ]

  return (
    <div className="table-box">
      <Table dataSource={dataSource}>
        <Column dataIndex="id" title="ID" width={100} />
        <Column dataIndex="name" title="姓名" />
        <Column dataIndex="age" title="年龄" />
        <Column dataIndex="hight" title="身高" />
      </Table>
    </div>
  )
}
```

## 3. 不可选择

```jsx
function TableDemo() {
  const dataSource = [
    {
      id: '1',
      name: '小明',
      age: 20,
      hight: '174'
    },{
      id: '2',
      name: '小华',
      age: 23,
      hight: '182'
    },{
      id: '3',
      name: '小刘',
      age: 19,
      hight: '172'
    }
  ]

  const columns = [
    {
      width: 32,
      dataIndex: 'no-selector'
    },{
      title: 'ID',
      dataIndex: 'id',
      width: 100
    },,{
      title: '姓名',
      dataIndex: 'name'
    },{
      title: '年龄',
      dataIndex: 'age'
    },{
      title: '身高',
      dataIndex: 'hight'
    }
  ]

  return (
    <div className="table-box">
      <Table dataSource={dataSource} columns={columns} showHoverBack={false} rowSelection={{ hideSelect: true }} />
    </div>
  )
}
```

## 4. 自定义选择项

```jsx
function TableDemo() {
  const dataSource = [
    {
      id: '1',
      name: '小明',
      age: 20,
      hight: '174'
    },{
      id: '2',
      name: '小华',
      age: 23,
      hight: '182'
    },{
      id: '3',
      name: '小刘',
      age: 19,
      hight: '172'
    },{
      id: '4',
      name: '小黄',
      age: 29,
      hight: '168'
    }
  ]


  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      width: 100
    },{
      title: '姓名',
      dataIndex: 'name'
    },{
      title: '年龄',
      dataIndex: 'age'
    },{
      title: '身高',
      dataIndex: 'hight'
    }
  ]

  const [selectedKeys, setSelectedKeys] = useState([])

  // 处理选中事件
  const onSelect = (type) => {
    switch(type) {
      case 'even': 
        return setSelectedKeys(dataSource.filter(item => item.id % 2 === 0).map(item => item.id))
      case 'odd': 
        return setSelectedKeys(dataSource.filter(item => item.id % 2 !== 0).map(item => item.id))
      case 'all': 
        return setSelectedKeys(dataSource.map(item => item.id))
      default:
        return
    }
  }

  return (
    <div className="table-box control-box">
      <Button type='secondary' onClick={() => onSelect('even')}>选择偶数行</Button>
      <Button type='secondary' onClick={() => onSelect('odd')}>选择奇数行</Button>
      <Button type='secondary' highlight onClick={() => onSelect('all')}>全选</Button>
      <Button type='secondary' danger onClick={() => setSelectedKeys([])}>清空选中</Button>
      <Table 
        dataSource={dataSource}
        columns={columns} 
        rowSelection={{
          selectedRowKeys: selectedKeys
        }}
      />
    </div>
  )
}
```

## 5. 自定义列内容

```jsx
function TableDemo() {
  const dataSource = [
    {
      id: '1',
      name: '小明',
      age: 20,
      hight: '174',
      hobbies: ["篮球", "读书"]
    },{
      id: '2',
      name: '小华',
      age: 23,
      hight: '182',
      hobbies: ["足球", "旅行", "读书"]
    },{
      id: '3',
      name: '小刘',
      age: 19,
      hight: '172',
      hobbies: ["跑步", "音乐", "电影"]
    }
  ]

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      width: 100
    },{
      title: '姓名',
      dataIndex: 'name'
    },{
      title: '年龄',
      dataIndex: 'age'
    },{
      title: '身高',
      dataIndex: 'hight'
    },{
      title: '爱好',
      dataIndex: 'hobbies',
      render: (_, record) => {
        return (
          <>{record.hobbies.map(item => <Tag>{item}</Tag>)}</>
        )
      }
    }
  ]

  return (
    <div className="table-box">
      <Table dataSource={dataSource} columns={columns} />
    </div>
  )
}
```

## 6. 可展开

```jsx
function TableDemo() {
  const dataSource = [
    {
      id: '1',
      name: '小明',
      age: 20,
      hight: '174'
    },{
      id: '2',
      name: '小华',
      age: 23,
      hight: '182'
    },{
      id: '3',
      name: '小刘',
      age: 19,
      hight: '172'
    }
  ]

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      width: 100
    },{
      title: '姓名',
      dataIndex: 'name'
    },{
      title: '年龄',
      dataIndex: 'age'
    },{
      title: '身高',
      dataIndex: 'hight'
    }
  ]

  return (
    <div className="table-box">
      <Table 
        dataSource={dataSource}
        columns={columns}
        expandable={{
          showExpandColumn: true,
          defaultExpandedRowKeys: ["1"],
          expandedRowRender: (record, index) => {
            return (
              <div>
                {`我叫${record.name}，我今年${record.age}岁了，身高${record.hight}`}
              </div>
            )
          }
        }}
      />
    </div>
  )
}
```

## 7. 右键菜单

```jsx
function TableDemo() {
  const Item = Menu.Item
  const Divider = Menu.Divider

  const dataSource = [
    {
      id: '1',
      name: '小明',
      age: 20,
      hight: '174'
    },{
      id: '2',
      name: '小华',
      age: 23,
      hight: '182'
    },{
      id: '3',
      name: '小刘',
      age: 19,
      hight: '172'
    }
  ]

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      width: 100
    },{
      title: '姓名',
      dataIndex: 'name'
    },{
      title: '年龄',
      dataIndex: 'age'
    },{
      title: '身高',
      dataIndex: 'hight'
    }
  ]

  return (
    <div className="table-box">
      <Table 
        dataSource={dataSource}
        columns={columns}
        contextMenu={() => {
           return (
            <Menu selectable>
              <Item selected>item1</Item>
              <Item>item2</Item>
              <Divider />
              <Item>item3</Item>
            </Menu>
          )}
        }
      />
    </div>
  )
}
```

## 8. 操作列

```jsx
function TableDemo() {
  const dataSource = [
    {
      id: '1',
      name: '小明',
      age: 20,
      hight: '174'
    },{
      id: '2',
      name: '小华',
      age: 23,
      hight: '182'
    },{
      id: '3',
      name: '小刘',
      age: 19,
      hight: '172'
    }
  ]

  return (
    <div className="table-box">
      <Table dataSource={dataSource}>
        <Column dataIndex="id" title="ID" width={100} />
        <Column dataIndex="name" title="姓名" />
        <Column dataIndex="age" title="年龄" />
        <Column dataIndex="hight" title="身高" />
        <OperationColumn  
          menuItemsOption={
            column => {
              return { disabled: column.dataIndex === 'name' }
            }
          }
          onInfoClick={() => Message.info('更多信息图标点击事件')}
          render={() => <Button type="primary" onClick={(e) => e.stopPropagation()}>按钮</Button>}
        />
      </Table>
    </div>
  )
}
```

## 9. 隐藏表头

```jsx
function TableDemo() {
  const dataSource = [
    {
      id: '1',
      name: '小明',
      age: 20,
      hight: '174'
    },{
      id: '2',
      name: '小华',
      age: 23,
      hight: '182'
    },{
      id: '3',
      name: '小刘',
      age: 19,
      hight: '172'
    }
  ]

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      width: 100
    },{
      title: '姓名',
      dataIndex: 'name'
    },{
      title: '年龄',
      dataIndex: 'age'
    },{
      title: '身高',
      dataIndex: 'hight'
    }
  ]

  return (
    <div className="table-box">
      <Table dataSource={dataSource} columns={columns} showHeader={false} />
    </div>
  )
}
```

## 10. 固定表头

```jsx
function TableDemo() {
  const dataSource = Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,
    name: `Name${Math.random().toString(36).substring(7)}`,
    age: Math.floor(Math.random() * 99) + 1,
    hight: Math.floor(Math.random() * (200 - 160 + 1)) + 160
  }))


  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      width: 150
    },{
      title: '姓名',
      dataIndex: 'name',
      width: 200
    },{
      title: '年龄',
      dataIndex: 'age',
      width: 200
    },{
      title: '身高',
      dataIndex: 'hight'
    }
  ]

  return (
    <div className="table-box">
      <Table dataSource={dataSource} columns={columns} scroll={{ y: 500 }} />
    </div>
  )
}
```

## 11. 键盘事件

```jsx
function TableDemo() {
  const dataSource = Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,
    name: `Name${Math.random().toString(36).substring(7)}`,
    age: Math.floor(Math.random() * 99) + 1,
    hight: Math.floor(Math.random() * (200 - 160 + 1)) + 160
  }))


  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      width: 150
    },{
      title: '姓名',
      dataIndex: 'name',
      width: 200
    },{
      title: '年龄',
      dataIndex: 'age',
      width: 200
    },{
      title: '身高',
      dataIndex: 'hight'
    }
  ]

  return (
    <div className="table-box">
      <Table 
        dataSource={dataSource}
        className="keyboard-box"
        columns={columns} 
        scroll={{ y: 500 }}
        keyboardProps={{ disableKeyboardEvents: false }} 
        scrollSelector=".keyboard-box-body" 
      />
    </div>
  )
}
```

## 12. 虚拟列表

```jsx
function TableDemo() {
  const dataSource = Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    name: `Name${Math.random().toString(36).substring(7)}`,
    age: Math.floor(Math.random() * 99) + 1,
    hight: Math.floor(Math.random() * (200 - 160 + 1)) + 160
  }))


  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      width: 150
    },{
      title: '姓名',
      dataIndex: 'name',
      width: 200
    },{
      title: '年龄',
      dataIndex: 'age',
      width: 200
    },{
      title: '身高',
      dataIndex: 'hight'
    }
  ]

  return (
    <div className="table-box virtual-table">
      <Table 
        dataSource={dataSource} 
        columns={columns} 
        virtual={true} 
        scrollSelector=".virtual-table" 
      />
    </div>
  )
}
```

## 13. 自定义骨架屏

```jsx
function TableDemo() {
  const dataSource = [
    {
      id: '1',
      name: '小明',
      age: 20,
      hight: '174'
    },{
      id: '2',
      name: '小华',
      age: 23,
      hight: '182'
    },{
      id: '3',
      name: '小刘',
      age: 19,
      hight: '172'
    }
  ]

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      width: 100
    },{
      title: '姓名',
      dataIndex: 'name'
    },{
      title: '年龄',
      dataIndex: 'age',
      skeleton: { 
        render: () => <Skeleton style={{ width: '300px' }}></Skeleton> // 自定义骨架屏
      }
    },{
      title: '身高',
      dataIndex: 'hight'
    }
  ]

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  // 获取列表数据
  const getData = () => {
    setTimeout(() => {
      setData(dataSource)
      setLoading(false)
    }, 1500)
  }

  // 刷新列表
  const onRefresh = () => {
    setData([])
    setLoading(true)
    getData()
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="table-box skeleton-box">
      <Button type='primary' onClick={onRefresh}>刷新</Button>
      <Table 
        dataSource={data} 
        columns={columns} 
        loading={loading} 
        showSkeleton={true} 
      />
    </div>
  )
}
```

## 14. 自定义加载中状态

```jsx
function TableDemo() {
  const dataSource = [
    {
      id: '1',
      name: '小明',
      age: 20,
      hight: '174'
    },{
      id: '2',
      name: '小华',
      age: 23,
      hight: '182'
    },{
      id: '3',
      name: '小刘',
      age: 19,
      hight: '172'
    }
  ]

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      width: 100
    },{
      title: '姓名',
      dataIndex: 'name'
    },{
      title: '年龄',
      dataIndex: 'age'
    },{
      title: '身高',
      dataIndex: 'hight'
    }
  ]

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  // 获取列表数据
  const getData = () => {
    setTimeout(() => {
      setData(dataSource)
      setLoading(false)
    }, 1500)
  }

  // 刷新列表
  const onRefresh = () => {
    setData([])
    setLoading(true)
    getData()
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="table-box loading-box">
      <Button type='primary' onClick={onRefresh}>刷新</Button>
      <Table 
        dataSource={data} 
        columns={columns} 
        loading={{isLoading: loading, render: () => <div className="loading">自定义加载中.....</div>}} 
      />
    </div>
  )
}
```

## 15. 自定义空状态

```jsx
function TableDemo() {
  const dataSource = [
    {
      id: '1',
      name: '小明',
      age: 20,
      hight: '174'
    },{
      id: '2',
      name: '小华',
      age: 23,
      hight: '182'
    },{
      id: '3',
      name: '小刘',
      age: 19,
      hight: '172'
    }
  ]

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      width: 100
    },{
      title: '姓名',
      dataIndex: 'name'
    },{
      title: '年龄',
      dataIndex: 'age'
    },{
      title: '身高',
      dataIndex: 'hight'
    }
  ]

  const [data, setData] = useState(dataSource)

  // 渲染空状态
  const renderEmpty = () => {
    return (
      <div className="empty">
        <div>暂无数据</div>
        <Button type='primary' onClick={() => setData(dataSource)}>恢复列表数据</Button>
      </div>
    )
  }

  return (
    <div className="table-box empty-box">
      <Button type='primary' onClick={() => setData([])}>清空列表数据</Button>
      <Table 
        dataSource={data} 
        columns={columns} 
        empty={renderEmpty()} 
      />
    </div>
  )
}
```
