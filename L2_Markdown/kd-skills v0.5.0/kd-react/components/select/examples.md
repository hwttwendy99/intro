# Select · 分场景示例

以下为常见用法；导入均为 `@kdocs/kdesign`。

## 1. 基础用法

```jsx
function Demo() {
  const options = [
    {
      value: '选项0',
      label: '加了两千克24k纯金的黄金糕',
    },
    {
      value: '选项1',
      label: '黄金糕',
    },
    {
      value: '选项2',
      label: '双皮奶',
    },
    {
      value: '选项3',
      label: '蚵仔煎',
    },
    {
      value: '选项4',
      label: '龙须面',
    },
  ];

  const updateValue = (newValues) => {
    console.log('new select', newValues);
  };

  return (
    <div className="mr-16">
      <Select
        defaultValue={'选项0'}
        onChange={updateValue}
        options={options}
        size={'large'}
        style={{ width: 200 }}
      />
      <Select
        defaultValue={'选项0'}
        onChange={updateValue}
        options={options}
        style={{ width: 200, marginLeft: 20 }}
      />
      <Select
        defaultValue={'选项0'}
        onChange={updateValue}
        size={'small'}
        options={options}
        style={{ width: 200, marginLeft: 20 }}
      />
    </div>
  );
}
```

## 2. 有禁用选项

```jsx
function Demo() {
  const options = [
    {
      value: '选项1',
      label: '黄金糕',
    },
    {
      value: '选项2',
      label: '双皮奶',
      disabled: true,
    },
    {
      value: '选项3',
      label: '蚵仔煎',
    },
    {
      value: '选项4',
      label: '龙须面',
    },
    {
      value: '选项5',
      label: '北京烤鸭',
    },
  ];

  const updateValue = (newValues) => {
    console.log('new select', newValues);
  };

  return (
    <div className="mr-16">
      <Select
        defaultValue={'选项0'}
        onChange={updateValue}
        options={options}
        style={{ width: 200 }}
      />
    </div>
  );
}
```

## 3. 禁用状态

```jsx
function Demo() {
  const options = [
    {
      value: '选项1',
      label: '黄金糕',
    },
    {
      value: '选项2',
      label: '双皮奶',
      disabled: true,
    },
    {
      value: '选项3',
      label: '蚵仔煎',
    },
    {
      value: '选项4',
      label: '龙须面',
    },
    {
      value: '选项5',
      label: '北京烤鸭',
    },
  ];

  const updateValue = (newValues) => {
    console.log('new select', newValues);
  };

  return (
    <div className="mr-16">
      <Select
        defaultValue={'选项0'}
        onChange={updateValue}
        options={options}
        disabled={true}
        style={{ width: 200 }}
      />
    </div>
  );
}
```

## 4. 可清空单选

```jsx
function Demo() {
  const [values, setValues] = useState('选项1');
  const options = [
    {
      value: '选项1',
      label: '黄金糕',
    },
    {
      value: '选项2',
      label: '双皮奶',
      disabled: true,
    },
    {
      value: '选项3',
      label: '蚵仔煎',
    },
    {
      value: '选项4',
      label: '龙须面',
    },
    {
      value: '选项5',
      label: '北京烤鸭',
    },
  ];

  const updateValue = (newValues) => {
    console.log('new select', newValues);
    setValues(newValues);
  };

  return (
    <div className="mr-16">
      <Select
        value={values}
        onChange={updateValue}
        allowClear={true}
        options={options}
        style={{ width: 200 }}
      />
    </div>
  );
}
```

## 5. 基础多选

```jsx
function Demo() {
  const [values, setValues] = useState(['选项1']);
  const options = [
    {
      value: '选项1',
      label: '黄金糕',
    },
    {
      value: '选项2',
      label: '双皮奶',
    },
    {
      value: '选项3',
      label: '蚵仔煎',
    },
    {
      value: '选项4',
      label: '龙须面',
    },
    {
      value: '选项5',
      label: '北京烤鸭',
    },
  ];

  const updateValue = (newValues) => {
    console.log('new select', newValues);
    setValues(newValues);
  };

  return (
    <div className="mr-16">
      <Select
        value={values}
        onChange={updateValue}
        mode="multiple"
        options={options}
        style={{ width: 300 }}
      />
      <Select
        value={values}
        onChange={updateValue}
        mode="multiple"
        options={options}
        maxShowCount={2}
        style={{ width: 300, marginLeft: 20 }}
      />
    </div>
  );
}
```

## 6. 分组

```jsx
function Demo() {
  const [values, setValues] = useState('');
  const options = [
    {
      title: '热门城市',
      options: [
        {
          value: 'Shanghai',
          label: '上海',
        },
        {
          value: 'Beijing',
          label: '北京',
        },
      ],
    },
    {
      title: '城市名',
      options: [
        {
          value: 'Chengdu',
          label: '成都',
        },
        {
          value: 'Shenzhen',
          label: '深圳',
        },
        {
          value: 'Guangzhou',
          label: '广州',
        },
        {
          value: 'Dalian',
          label: '大连',
        },
      ],
    },
  ];

  const updateValue = (newValues) => {
    console.log('new select', newValues);
    setValues(newValues);
  };

  return (
    <div className="mr-16">
      <Select value={values} onChange={updateValue} options={options} style={{ width: 300 }} />
    </div>
  );
}
```

## 7. 可搜索

```jsx
function Demo() {
  const [values, setValues] = useState('');
  const options = [
    {
      value: '选项1',
      label: '黄金糕',
    },
    {
      value: '选项2',
      label: '双皮奶',
    },
    {
      value: '选项3',
      label: '蚵仔煎',
    },
    {
      value: '选项4',
      label: '龙须面',
    },
    {
      value: '选项5',
      label: '北京烤鸭',
    },
  ];

  const updateValue = (newValues) => {
    console.log('new select', newValues);
    setValues(newValues);
  };

  return (
    <div className="mr-16">
      <Select
        value={values}
        showSearch={true}
        onChange={updateValue}
        options={options}
        style={{ width: 300 }}
      />
    </div>
  );
}
```

## 8. 远程搜索

```jsx
function Demo() {
  const [values, setValues] = useState('');
  const [loading, setLoading] = useState(false);
  const options = [
    {
      value: '选项1',
      label: '黄金糕',
    },
    {
      value: '选项2',
      label: '双皮奶',
    },
    {
      value: '选项3',
      label: '蚵仔煎',
    },
    {
      value: '选项4',
      label: '龙须面',
    },
    {
      value: '选项5',
      label: '北京烤鸭',
    },
  ];

  const updateValue = (newValues) => {
    console.log('new select', newValues);
    setValues(newValues);
  };

  const searchValue = (value) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="mr-16">
      <Select
        value={values}
        showSearch={true}
        onChange={updateValue}
        onSearch={searchValue}
        options={options}
        loading={loading}
        style={{ width: 300 }}
      />
    </div>
  );
}
```

## 9. 创建条目

```jsx
function Demo() {
  const options = [
    {
      value: '选项1',
      label: '黄金糕',
    },
    {
      value: '选项2',
      label: '双皮奶',
    },
    {
      value: '选项3',
      label: '蚵仔煎',
    },
    {
      value: '选项4',
      label: '龙须面',
    },
    {
      value: '选项5',
      label: '北京烤鸭',
    },
  ];

  const updateValue = (newValues) => {
    console.log('new select', newValues);
  };

  return (
    <div className="mr-16">
      <Select
        mode="multiple"
        allowCreate={true}
        showSearch={true}
        onChange={updateValue}
        options={options}
        style={{ width: 300 }}
      />
    </div>
  );
}
```
