# Link · 分场景示例

以下为常见用法；导入均为 `@kdocs/kdesign`。

## 1. 基础用法

```jsx
function Demo() {
  return (
    <div>
      <Link href="https://www.kdocs.cn">链接</Link>
    </div>
  );
}
```

## 2. target

```jsx
function Demo() {
  return (
    <div>
      <Link href="https://www.kdocs.cn" target="_blank">
        _blank
      </Link>
      <p></p>
      <Link href="https://www.kdocs.cn" target="_self">
        _self
      </Link>
    </div>
  );
}
```

## 3. 类型

```jsx
function Demo() {
  return (
    <div>
      <Link>链接</Link>
      <p></p>
      <Link type="primary">链接</Link>
    </div>
  );
}
```

## 4. 图标

```jsx
function Demo() {
  const icon = <Emojis size="16"></Emojis>;
  return (
    <div>
      <Link icon={icon}>链接</Link>
    </div>
  );
}
```

## 5. 禁用

```jsx
function Demo() {
  const icon = <Emojis size="16"></Emojis>;
  return (
    <div>
      <Link disabled href="https://www.kdocs.cn">
        禁用链接
      </Link>
      <p></p>
      <Link disabled icon={icon}>
        禁用链接
      </Link>
      <p></p>
      <Link disabled type="primary" icon={icon}>
        禁用链接
      </Link>
      <p></p>
      <Link disabled icon={<Emojis size="16"></Emojis>} type="primary">
        禁用链接
      </Link>
    </div>
  );
}
```

## 6. underline

```jsx
function Demo() {
  const icon = <ArrowDownS size="14"></ArrowDownS>;
  return (
    <div>
      <Link underline>链接</Link>
      <p></p>
      <Link underline icon={icon}>
        链接
      </Link>
      <p></p>
      <Link underline type="primary">
        链接
      </Link>
      <p></p>
      <Link underline icon={icon} type="primary">
        链接
      </Link>
    </div>
  );
}
```
