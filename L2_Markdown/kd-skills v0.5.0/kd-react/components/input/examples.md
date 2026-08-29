# Input · 分场景示例

以下为常见用法；导入均为 `@kdocs/kdesign`。

## 1. 基础用法

```jsx
function Demo() {
  return (
    <div>
      <Input size='small' placeholder="请输入内容" />
      <br />
      <Input placeholder="请输入内容" />
      <br />
      <Input size='large' placeholder="请输入内容" />
    </div>
  );
}
```

## 2. 不同类型

```jsx
function Demo() {
  return (
    <div>
      <Input type="text" placeholder="type=text" />
      <br />
      <br />
      <Input type="url" placeholder="type=url" />
      <br />
      <Input type="email" placeholder="type=email" />
      <br />
      <Input type="tel" placeholder="type=tel" />
    </div>
  );
}
```

## 3. 禁用状态

```jsx
function Demo() {
  const onPrefixIconClick = (e) => {
    console.log(e);
  };

  const customPrefixIcon = <Info size="14" />;

  return (
    <div>
      <Input disabled placeholder="请选择日期" />
      <br />
      <Input
        prefixIcon={customPrefixIcon}
        prefixIconDisabled
        placeholder="单个头部icon disabled"
        onPrefixIconClick={onPrefixIconClick}
      />
    </div>
  );
}
```

## 4. 文字对齐

```jsx
function Demo() {
  return (
    <div>
      <Input placeholder="文字居左" textAlign="left" />
      <br />
      <Input placeholder="文字居中" textAlign="center" />
      <br />
      <Input placeholder="文字居right" textAlign="right" />
    </div>
  );
}
```

## 5. 辅助文本

```jsx
function Demo() {
  return (
    <div>
      <Input placeholder="请输入内容" helpText="这是辅助文本"
      />
    </div>
  );
}
```

## 6. 输入框状态

```jsx
function Demo() {
  return (
    <div>
      <Input placeholder="请输入内容" helpText="测试文字" />
      <br />
      <Input placeholder="请输入内容" helpText="测试文字" status="error" helpText="测试文字" />
      <br />
      <Input placeholder="请输入内容" prepend="Http://" status="error" helpText="测试文字" />
    </div>
  );
}
```

## 7. 长度限制

```jsx
function Demo() {
  return (
    <div>
      <Input placeholder="请输入内容" maxLength="30" />
    </div>
  );
}
```

## 8. 显示字数

```jsx
function Demo() {
  const maxLengthObj = {
    length: 30,
    countOnly: true,
  };

  return (
    <div>
      <Input placeholder="请输入内容" maxLength="30" showCount />
      <br />
      <Input placeholder="请输入内容/不限制输入" maxLength={maxLengthObj} showCount />
      <br />
      <Input
        placeholder="请输入内容/不限制输入/自动报错"
        maxLength={maxLengthObj}
        showCount
        autoValid
      />
    </div>
  );
}
```

## 9. 显示清除按钮

```jsx
function Demo() {
  return (
    <div>
      <Input placeholder="请输入内容" showClean={true} />
    </div>
  );
}
```

## 10. 加载状态

```jsx
function Demo() {
  return (
    <div>
      <Input placeholder="请输入内容" loading />
    </div>
  );
}
```

## 11. 带icon输入框

```jsx
function Demo() {
  const handleIconClick = (e) => {
    console.log(e);
  };

  const customPrefixIcon = <Info />;
  const customSuffixIcon = <Help />;
  const customSuffixNode = (
    <React.Fragment>
      <span>页</span>
      <span>更多</span>
    </React.Fragment>
  );

  return (
    <div>
      <Input prefixIcon="time" placeholder="prefixIcon类" onPrefixIconClick={handleIconClick} />
      <br />
      <Input
        prefixIcon={customPrefixIcon}
        placeholder="自定义prefixIcon"
        onPrefixIconClick={handleIconClick}
      />
      <br />
      <Input suffixIcon="time" placeholder="suffixIcon" onSuffixIconClick={handleIconClick} />
      <br />
      <Input suffixIcon={customSuffixIcon} placeholder="自定义suffixIcon" />
      <br />
      <Input prepend={customSuffixIcon} placeholder="自定义suffixIcon" />
      <br />
      <Input suffixIcon={customSuffixNode} placeholder="自定义suffixIcon" />
    </div>
  );
}
```

## 12. 复合型输入框

```jsx
function Demo() {
  return (
    <div>
      <Input placeholder="请输入内容" prepend="Http://" size="large" />
      <br />
      <Input placeholder="请输入内容" prepend="Http://" />
      <br />
      <Input placeholder="请输入内容" append=".com" />
      <br />
      <Input placeholder="请输入内容" prepend="Http://" append={<div>搜索</div>} />
    </div>
  );
}
```

## 13. 尺寸

```jsx
function Demo() {
  return (
    <div>
      <Input placeholder="请输入内容 small 24" size="small"/>
      <br />
      <Input placeholder="请输入内容 默认medium 28" size="medium"/>
      <br />
      <Input placeholder="请输入内容 large 32" size="large"/>
      <br />
      <Input placeholder="请输入内容 x-large 36" size="x-large"/>
    </div>
  );
}
```

## 14. 事件

```jsx
function Demo() {
  const onCompositionStart = (e) => {
    console.log(e);
  };

  const onCompositionEnd = (e) => {
    console.log(e);
  };

  const onChange = (e) => {
    console.log(e);
  };

  return (
    <div>
      <Input
        onCompositionStart={onCompositionStart}
        onCompositionEnd={onCompositionEnd}
        onChange={onChange}
      />
    </div>
  );
}
```
