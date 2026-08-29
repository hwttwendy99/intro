# InputNumber · 分场景示例

以下为常见用法；导入均为 `@kdocs/kdesign`。

## 1. 基础用法

```jsx
function InputNumberDemo() {
  const [value, setValue] = useState(10);

  const onChange = (data)=>{
    console.log(data);
  }

  return (<div>
    <InputNumber defaultValue={value} onChange={onChange} increaseAttrs={{"alt-ignore":'true'}} decreaseAttrs={{"alt-ignore":'true'}}></InputNumber>
    <br />
    <InputNumber defaultValue={value} onChange={onChange} unit="$"></InputNumber>
  </div>
  );
}

```

## 2. 设置阈值

```jsx
function InputNumberDemo() {

  const [value, setValue] = useState(10);

  const onChange = (data)=>{
    console.log('onChange: ',data);
  }

  return (<div>
    <InputNumber defaultValue={value} onChange={onChange} min="-100" max="100"></InputNumber>
  </div>
  );
}

```



## 3. 禁用状态

```jsx
function InputNumberDemo() {

  const [value, setValue] = useState(10);

  const onChange = (data)=>{
    console.log(data);
  }

  return (<div>
    <InputNumber defaultValue={value} onChange={onChange} disabled></InputNumber>
  </div>
  );
}

```


## 4. 尺寸

```jsx
function InputNumberDemo() {

  const [value, setValue] = useState(10);

  const onChange = (data)=>{
    console.log(data);
  }

  return (<div>
    <InputNumber defaultValue={value} onChange={onChange} size="small" unit="small"></InputNumber>
    <br />
    <InputNumber defaultValue={value} onChange={onChange} size="medium" unit="medium"></InputNumber>
    <br />
    <InputNumber defaultValue={value} onChange={onChange} size="large" unit="large"></InputNumber>
    <br />
    <InputNumber defaultValue={value} onChange={onChange} size="x-large" unit="x-large"></InputNumber>
  </div>
  );
}

```


## 5. 设置步数

```jsx
function InputNumberDemo() {
  const [value, setValue] = useState(10);

  const onChange = (data)=>{
    console.log(data);
  }

  return (<div>
    <InputNumber defaultValue={value} onChange={onChange} step="5"></InputNumber>
  </div>
  );
}

```
