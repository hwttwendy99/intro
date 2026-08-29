# List · 分场景示例

以下为常见用法；导入均为 `@kdocs/kdesign`。

## 1. 简单列表

```jsx
function ListDemo() {
  const [options, setOptions] = useState(['hovered', 'bordered', 'split']);

  const dataSource = Array.from({ length: 5 }, (_, i) => {
    return { key: `key-demo-1-${i + 1}`, text: `simple list item demo ${i + 1}` };
  });

  const renderItem = (item) => {
    return (
      <List.Item key={item.key} disabled={options.includes('disabled')}>
        {item.text}
      </List.Item>
    );
  };

  return (
    <div>
      <Checkbox.Group
        style={{ marginBottom: 10 }}
        value={options}
        onChange={(options) => setOptions([...options])}
      >
        <Checkbox label="bordered">展示列表边框</Checkbox>
        <Checkbox label="split">展示分割线</Checkbox>
        <Checkbox label="hovered">展示hover效果</Checkbox>
        <Checkbox label="disabled">展示禁用效果</Checkbox>
      </Checkbox.Group>
      <List
        dataSource={dataSource}
        renderItem={renderItem}
        hovered={options.includes('hovered')}
        bordered={options.includes('bordered')}
        split={options.includes('split')}
      />
    </div>
  );
}
```

## 2. 基础列表

```jsx
function ListDemo() {
  const [options, setOptions] = useState(['1', '2', '3', '4']);

  const dataSource = Array.from({ length: 5 }, (_, i) => {
    return {
      key: `key-demo-2-${i + 1}`,
      title: `KDesign meta title ${i + 1}`,
      desc: `This is a simple description demo ${i + 1}`,
    };
  });
  const isFixedHeight = options.includes('6');

  const renderItem = (item) => {
    const isShowAvatar = options.includes('1');
    const isShowTitle = options.includes('2');
    const isShowDesc = options.includes('3');
    const isShowActions = options.includes('4');
    const isShowTitleAndDesc = isShowTitle && isShowDesc;

    return (
      <List.Item
        key={item.key}
        isActive={options.includes('5') && item.key === 'key-demo-2-3'}
        actions={
          isShowActions && (
            <div>
              <Button type="light" size="small" highlight>
                查看
              </Button>
              <Button type="light" size="small" highlight danger>
                删除
              </Button>
            </div>
          )
        }
      >
        <List.Item.Meta
          prefix={isShowAvatar && <KingMeerkatAvatar size={isShowTitleAndDesc ? 32 : 16} />}
          title={isShowTitle && item.title}
          description={isShowDesc && item.desc}
        />
      </List.Item>
    );
  };

  return (
    <div>
      <Checkbox.Group
        style={{ marginBottom: 10 }}
        value={options}
        onChange={(options) => setOptions([...options])}
      >
        <Checkbox label="1">头像</Checkbox>
        <Checkbox label="2">标题</Checkbox>
        <Checkbox label="3">描述</Checkbox>
        <Checkbox label="4">操作项</Checkbox>
        <Checkbox label="5">选中第三项</Checkbox>
        <Checkbox label="6">列表高度固定</Checkbox>
      </Checkbox.Group>
      <List
        dataSource={dataSource}
        renderItem={renderItem}
        scrollListProps={isFixedHeight ? { scrollHeight: 200, bottomLoader: false } : null}
        bordered
        split
      />
    </div>
  );
}
```

## 3. 空列表

```jsx
function ListDemo() {
  const [option, setOption] = useState('1');

  const getEmptyPlaceholder = () => {
    switch (option) {
      case '2':
        return { empty: '自定义文案' };
      case '3':
        return { empty: <Empty description="自定义元素" /> };
      default:
        return undefined;
    }
  };

  return (
    <div>
      <Radio.Group style={{ marginBottom: 10 }} value={option} onChange={setOption}>
        <Radio value="1">默认效果</Radio>
        <Radio value="2">自定义文案</Radio>
        <Radio value="3">自定义元素</Radio>
      </Radio.Group>
      <List bordered placeholder={getEmptyPlaceholder()} />
    </div>
  );
}
```

## 4. 单选/复选列表

```jsx
function ListDemo() {
  const [selectedKeys, setSelectedKeys] = useState([]);
  const [option, setOption] = useState('1');
  const [options, setOptions] = useState([]);

  const dataSource = Array.from({ length: 6 }, (_, i) => {
    return {
      key: `key-demo-3-${i + 1}`,
      name: `${option === '1' ? 'Checkbox' : 'Radio'} item demo ${i + 1}`,
    };
  });

  const renderItem = (item) => {
    return (
      <List.Item key={item.key} rowData={item}>
        <List.Item.Meta title={item.name} />
      </List.Item>
    );
  };

  const getCheckAllTip = () => {
    if (!options.includes('1')) {
      return undefined;
    }

    if (selectedKeys.length === 0) {
      return '自定义全选';
    }

    return `已选择${selectedKeys.length}个（自定义）`;
  };

  const onChange = (option) => {
    setOption(option);
    setSelectedKeys([]);
  };

  const onSelect = ({ selected }) => {
    setSelectedKeys(selected);
  };

  const onSelectAll = (selected) => {
    setSelectedKeys(selected);
  };

  return (
    <div>
      <Radio.Group style={{ marginBottom: 10 }} value={option} onChange={onChange}>
        <Radio value="1">复选框</Radio>
        <Radio value="2">单选框</Radio>
      </Radio.Group>
      {option === '1' && (
        <Checkbox.Group
          style={{ marginBottom: 10 }}
          value={options}
          onChange={(options) => setOptions([...options])}
        >
          <Checkbox label="1">自定义全选文案</Checkbox>
          <Checkbox label="2">不展示全选按钮</Checkbox>
        </Checkbox.Group>
      )}
      <List
        rowKeyName="key"
        dataSource={dataSource}
        renderItem={renderItem}
        selection={{
          selectedKeys,
          onSelect,
          onSelectAll,
          type: option === '1' ? 'checkbox' : 'radio',
          isShowCheckAll: !options.includes('2'),
          checkAllTip: getCheckAllTip(),
        }}
        bordered
        split
      />
    </div>
  );
}
```

## 5. 加载更多

```jsx
function ListDemo() {
  const mockData = (length, start = 0) => {
    return Array.from({ length }, (_, i) => {
      const index = start + i;
      return {
        key: `key-demo-4-${index + 1}`,
        title: `KDesign meta title ${index + 1}`,
        desc: `This is a simple description demo ${index + 1}`,
        avatar: <KingMeerkatAvatar size={32} />,
      };
    });
  };

  const [dataSource, setDataSource] = useState(mockData(6));
  const [loading, setLoading] = useState(false);
  const [option, setOption] = useState('1');

  const loadMore = () => {
    setLoading(true);
    setTimeout(() => {
      const newData = mockData(6, dataSource.length);
      setDataSource((oldData) => [...oldData, ...newData]);
      setLoading(false);
    }, [1000]);
  };

  const renderItem = (item) => {
    return (
      <List.Item key={item.key}>
        <List.Item.Meta prefix={item.avatar} title={item.title} description={item.desc} />
      </List.Item>
    );
  };

  const getBottomLoader = () => {
    switch (option) {
      case '1':
        return undefined;
      case '2':
        return { loadMore: '自定义加载文案' };
      case '3':
        return {
          loadMore: (
            <Button size="small" onClick={loadMore}>
              自定义加载按钮
            </Button>
          ),
        };
    }
  };

  return (
    <div>
      <Radio.Group style={{ marginBottom: 10 }} value={option} onChange={setOption}>
        <Radio value="1">默认按钮</Radio>
        <Radio value="2">自定义文案</Radio>
        <Radio value="3">自定义元素</Radio>
      </Radio.Group>
      <List
        dataSource={dataSource}
        renderItem={renderItem}
        scrollListProps={{
          loading,
          autoLoad: false,
          hasMore: true,
          bottomLoader: getBottomLoader(),
          onScrollToBottom: loadMore,
          scrollHeight: 250,
        }}
        bordered
        split
      />
    </div>
  );
}
```

## 6. 滚动加载

```jsx
function ListDemo() {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);
  const [optionA, setOptionA] = useState('1');
  const [optionB, setOptionB] = useState('1');
  const hasMore = dataSource.length < 50;
  const timer = useRef();

  const mockData = (length, start = 0) => {
    return Array.from({ length }, (_, i) => {
      const index = start + i;
      return {
        key: `key-demo-5-${index + 1}`,
        title: `KDesign meta title ${index + 1}`,
        desc: optionA === '1' ? '' : `This is a simple description demo ${index + 1}`,
        avatar: <KingMeerkatAvatar size={optionA === '2' ? 32 : 16} />,
      };
    });
  };

  const loadMore = () => {
    setLoading(true);

    timer.current = setTimeout(() => {
      timer.current = 0;
      const newData = mockData(10, dataSource.length);
      setDataSource((oldData) => [...oldData, ...newData]);
      setLoading(false);
    }, [2000]);
  };

  const renderItem = (item) => {
    return (
      <List.Item key={item.key}>
        <List.Item.Meta prefix={item.avatar} title={item.title} description={item.desc} />
      </List.Item>
    );
  };

  const getBottomLoader = () => {
    switch (optionB) {
      case '1':
        return undefined;
      case '2':
        return { loading: '自定义文案 - 加载中...', loadFinish: '加载完成 - 自定义文案' };
      case '3':
        return {
          loading: <div>自定义元素 - 加载中...</div>,
          loadFinish: <div style={{ color: 'black' }}>加载完成 - 自定义元素</div>,
        };
    }
  };

  const getLoadingPlaceholder = () => {
    if (optionA === '2') {
      return Array.from({ length: 7 }, (_, i) => {
        return (
          <div style={{ display: 'flex', alignItems: 'center', height: 57 }}>
            <Skeleton.Image active style={{ width: '36px', height: '36px' }} />
            <div
              style={{
                flex: 1,
                marginLeft: 6,
                display: 'flex',
                justifyContent: 'space-around',
                flexDirection: 'column',
                height: 36,
              }}
            >
              <Skeleton.Title active style={{ width: '100%', height: 12 }} />
              <Skeleton.Title active style={{ width: '100%', height: 12 }} />
            </div>
          </div>
        );
      });
    }

    return undefined;
  };

  return (
    <div>
      <Radio.Group
        style={{ marginBottom: 10 }}
        value={optionA}
        onChange={(option) => {
          if (timer.current) {
            clearTimeout(timer.current);
          }

          setOptionA(option);
          setLoading(false);
          setDataSource([]);
        }}
      >
        <Radio value="1">默认首屏加载效果</Radio>
        <Radio value="2">自定义首屏加载元素</Radio>
      </Radio.Group>
      <Radio.Group style={{ marginBottom: 10 }} value={optionB} onChange={setOptionB}>
        <Radio value="1">默认底部加载</Radio>
        <Radio value="2">自定义底部加载文案</Radio>
        <Radio value="3">自定义底部加载元素</Radio>
      </Radio.Group>
      <List
        dataSource={dataSource}
        renderItem={renderItem}
        placeholder={{ loading: getLoadingPlaceholder() }}
        scrollListProps={{
          loading,
          hasMore,
          bottomLoader: getBottomLoader(),
          onScrollToBottom: loadMore,
          scrollHeight: 400,
          threshold: 40,
        }}
        bordered
        split
      />
    </div>
  );
}
```

## 7. 虚拟列表

```jsx
function ListDemo() {
  const [option, setOption] = useState('1');

  const dataSource = Array.from({ length: 50 }, (_, i) => {
    const isDouble = i % 2 === 0;

    return {
      key: `key-demo-6-${i + 1}`,
      name: `KDesign meta title ${i + 1}`,
      desc:
        isDouble && option === '1'
          ? `This is a simple description demo ${i + 1}. ${Array.from(
              { length: 10 },
              () => 'It is description!',
            ).join(' ')}`
          : `This is a simple description demo ${i + 1}`,
      avatar: <KingMeerkatAvatar size={32} />,
    };
  });

  const renderItem = (item) => {
    return (
      <List.Item key={item.key}>
        <List.Item.Meta prefix={item.avatar} title={item.name} description={item.desc} />
      </List.Item>
    );
  };

  return (
    <div>
      <Radio.Group
        style={{ marginBottom: 10 }}
        value={option}
        onChange={(option) => {
          setOption(option);
        }}
      >
        <Radio value="1">item动态高度</Radio>
        <Radio value="2">item固定高度</Radio>
      </Radio.Group>
      <List
        rowKeyName="key"
        dataSource={dataSource}
        renderItem={renderItem}
        virtual={
          option === '1'
            ? true
            : {
                itemHeight: 60,
              }
        }
        bordered
      />
    </div>
  );
}
```

## 8. 滚动加载的虚拟列表

```jsx
function ListDemo() {
  const mockData = (length, start = 0) => {
    return Array.from({ length }, (_, i) => {
      const index = start + i;
      return {
        key: `key-demo-7-${index + 1}`,
        name: `KDesign meta title ${index + 1}`,
        desc: `This is a simple description demo ${index + 1}`,
        avatar: <KingMeerkatAvatar size={32} />,
      };
    });
  };

  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);
  const hasMore = dataSource.length < 50;

  const loadMore = () => {
    setLoading(true);
    setTimeout(() => {
      const newData = mockData(10, dataSource.length);
      setDataSource((oldData) => [...oldData, ...newData]);
      setLoading(false);
    }, [2000]);
  };

  const renderItem = (item) => {
    return (
      <List.Item key={item.key}>
        <List.Item.Meta prefix={item.avatar} title={item.name} description={item.desc} />
      </List.Item>
    );
  };

  const renderLoadingPlaceholder = () => {
    return Array.from({ length: 9 }, (_, i) => {
      return (
        <div style={{ display: 'flex', alignItems: 'center', height: 57 }}>
          <Skeleton.Image active style={{ width: '36px', height: '36px' }} />
          <div
            style={{
              flex: 1,
              marginLeft: 6,
              display: 'flex',
              justifyContent: 'space-around',
              flexDirection: 'column',
              height: 36,
            }}
          >
            <Skeleton.Title active style={{ width: '100%', height: 12 }} />
            <Skeleton.Title active style={{ width: '100%', height: 12 }} />
          </div>
        </div>
      );
    });
  };

  return (
    <List
      rowKeyName="key"
      dataSource={dataSource}
      renderItem={renderItem}
      placeholder={{ loading: renderLoadingPlaceholder() }}
      scrollListProps={{
        loading,
        hasMore,
        onScrollToBottom: loadMore,
      }}
      virtual={{
        itemHeight: 60,
      }}
      bordered
    />
  );
}
```
