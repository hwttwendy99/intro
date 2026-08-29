# Form · 分场景示例

以下为常见用法；导入均为 `@kdocs/kdesign`。

## 1. 基础用法

```jsx
function Demo() {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form onFinish={onFinish} onFinishFailed={onFinishFailed} labelCol={6} wrapperCol={12} autoComplete="off">
      <Form.Item
        label="用户名"
        name="userName"
        rules={[{ required: true, message: '请输入用户名！' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="密码"
        name="passWord"
        rules={[{ required: true, message: '请输入密码！' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item name="remember" label={null} valuePropName="checked">
        <Checkbox>记住我</Checkbox>
      </Form.Item>
      <Form.Item label={null}>
        <Button type="primary" htmlType="submit">
          提交
        </Button>
      </Form.Item>
    </Form>
  );
}
```

## 2. 表单方法调用

```jsx
function Demo() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  return (
    <Form onFinish={onFinish} form={form} labelCol={6} wrapperCol={12}>
      <Form.Item
        label="用户名"
        name="userName"
        rules={[{ required: true, message: '请输入用户名！' }]}
      >
        <Input placeholder="请输入用户名" />
      </Form.Item>
      <Form.Item
        label="密码"
        name="passWord"
        rules={[{ required: true, message: '请输入密码！' }]}
      >
        <Input placeholder="请输入用户名" />
      </Form.Item>
      <Form.Item label={null}>
        <div className="mr-8">
          <Button type="primary" htmlType="submit">
            提交
          </Button>
          <Button type="secondary" onClick={() => form.resetFields()}>
            重置
          </Button>
          <Button
            type="light"
            onClick={() => form.setFieldsValue({ userName: 'admin', passWord: '123456' })}
          >
            Fill Form
          </Button>
        </div>
      </Form.Item>
    </Form>
  );
}
```

## 3. 表单布局

```jsx
function Demo() {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState('horizontal');

  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };

  return (
    <Form
      form={form}
      onValuesChange={onFormLayoutChange}
      initialValues={{ layout: formLayout }}
      layout={formLayout}
    >
      <Form.Item label="Form Layout" name="layout">
        <Radio.Group value={formLayout}>
          <Radio value="horizontal">Horizontal</Radio>
          <Radio value="vertical">Vertical</Radio>
          <Radio value="inline">Inline</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Field A">
        <Input placeholder="请输入" />
      </Form.Item>
      <Form.Item label="Field B">
        <Input placeholder="请输入" />
      </Form.Item>
    </Form>
  );
}
```

## 4. 表单禁用

```jsx
function Demo() {
  const [componentDisabled, setComponentDisabled] = useState(true);

  return (
    <>
      <Checkbox
        checked={componentDisabled}
        onChange={(checked) => {
          console.log('checked', componentDisabled);
          setComponentDisabled(checked)
          }}
      >
        Form disabled
      </Checkbox>
      <Form
        disabled={componentDisabled}
        labelCol={4}
        wrapperCol={20}
      >
        <Form.Item label="Checkbox" valuePropName="checked">
          <Checkbox>Checkbox</Checkbox>
        </Form.Item>
        <Form.Item label="Radio">
          <Radio.Group>
           <Radio value="apple">Apple</Radio>
           <Radio value="pear">Pear</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Input">
          <Input placeholder="请输入" />
        </Form.Item>
        <Form.Item label="InputNumber" initialValue={0}>
          <InputNumber />
        </Form.Item>
        <Form.Item label="Switch" >
          <Switch />
        </Form.Item>
        <Form.Item label="Button">
          <Button type="primary">
            提交
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
```

## 5. 必选样式和冒号

```jsx
function Demo() {
  const [requiredMark, setRequiredMark] = useState(true);
  const [showColon, setShowColon] = useState(true);

  const onRequiredTypeChange = (changedValue, allValues) => {
    const { requiredMark, colon } = allValues;
    setRequiredMark(requiredMark);
    setShowColon(colon);
  };

  return (
    <Form
      onValuesChange={onRequiredTypeChange}
      initialValues={{ requiredMark }}
      requiredMark={requiredMark}
      colon={showColon}
      labelCol={6}
      wrapperCol={12}
    >
      <Form.Item label="RequiredMark" name="requiredMark">
        <Radio.Group value={requiredMark}>
          <Radio value={true}>Default</Radio>
          <Radio value="left">Left</Radio>
          <Radio value="right">Right</Radio>
          <Radio value={false}>None</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Colon" name="colon">
        <Radio.Group value={showColon}>
          <Radio value={true}>Show</Radio>
          <Radio value={false}>Hidden</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Field A" required>
        <Input placeholder="请输入" />
      </Form.Item>
      <Form.Item label="Field B" required>
        <Input placeholder="请输入" />
      </Form.Item>
    </Form>
  );
}
```

## 6. 表单尺寸

```jsx
function Demo() {
  const [componentSize, setComponentSize] = useState('medium');

  const onFormSizeChange = ({size}) => {
    setComponentSize(size);
  };

  return (
    <Form
      onValuesChange={onFormSizeChange}
      initialValues={{ size: componentSize }}
      size={componentSize}
      labelCol={6}
      wrapperCol={12}
    >
      <Form.Item label="Form Size" name="size">
        <Radio.Group value={componentSize}>
          <Radio value="small">Small</Radio>
          <Radio value="medium">Medium</Radio>
          <Radio value="large">Large</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Input">
          <Input placeholder="请输入" />
        </Form.Item>
        <Form.Item label="InputNumber" initialValue={0}>
          <InputNumber />
        </Form.Item>
        <Form.Item label="Switch" >
          <Switch />
        </Form.Item>
        <Form.Item label="Button">
          <Button type="primary">
            提交
          </Button>
        </Form.Item>
    </Form>
  );
}
```

## 7. 自定义校验

```jsx
function Demo() {

  return (
    <Form
      initialValues={{ userName: 'admin', passWord: '123456' }}
      labelCol={6}
      wrapperCol={12}
    >
      <Form.Item
        label="userName"
        name="userName"
        required
        rules={[
          {
            validator: (rule, value) => {
              if (value && value.length > 5) {
                return Promise.resolve();
              }
              return Promise.reject('用户名长度不能小于5!');
            },
          }
        ]}
        >
        <Input />
      </Form.Item>
      <Form.Item
        label="passWord"
        name="passWord"
        required
        rules={[{required: true, message: '请输入密码！'}]}
      >
        <Input />
      </Form.Item>
      <Form.Item label={null}>
        <Button type="primary" htmlType="submit">
          提交
        </Button>
      </Form.Item>
    </Form>
  );
}
```

## 8. 数据绑定

```jsx
function Demo() {
  const [form] = Form.useForm();

  return (
    <Form
      form={form}
      onFinish={(values) => {
        console.log('Success:', values);
      }}
      initialValues={{ positiveInt: '123', switch: false }}
      labelCol={6}
      wrapperCol={12}
    >
      <Form.Item 
        label="Positive Int" 
        name="positiveInt"
        extra="只有正整数才能输入！！！"
        getValueFromEvent={(e) => {
          const value = e.target.value;
          if (value && !/^[1-9]\d*$/.test(value)) {
            return undefined;
          }
          return value;
        }}
      >
        <Input placeholder="请输入正整数"/>
      </Form.Item>
      <Form.Item label="Switch" name="switch" valuePropName="checked">
        <Switch />
      </Form.Item>
      <Form.Item label={null}>
        <Button type="primary" htmlType="submit">
          提交
        </Button>
      </Form.Item>
    </Form>
  );
}
```

## 9. 字段监听

```jsx
function Demo() {

  const [form] = Form.useForm();
  const nameValue = Form.useWatch('name', form);
  const ageValue = Form.useWatch('age', form);

  return (
    <Form
      form={form}
      initialValues={{ name: 'admin', age: 18 }}
      layout="vertical"
    >
      <Form.Item label="Name" name="name">
        <Input />
      </Form.Item>
      <Form.Item label="Age" name="age">
        <InputNumber />
      </Form.Item>
      <div>
        <p>Name Value: {nameValue}</p>
        <p>Age Value: {ageValue}</p>
      </div>
    </Form>
  );
}
```
