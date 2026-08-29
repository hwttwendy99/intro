# Image · 分场景示例

以下为常见用法；导入均为 `@kdocs/kdesign`。

## 1. 基础用法

```jsx
function Demo() {
  return (
    <div>
      <Image src="/react/img/image-demo3.jpeg" height={300} />
    </div>
  );
}
```

## 2. 占位内容

```jsx
function Demo() {
  return (
    <div className="demo-image-placeholder">
      <div>
        <Image src="/react/img/KD-logo.xxx" width={300} height={300} />
        <span>加载失败</span>
      </div>
      <div>
        <Image src={''} width={300} height={300} />
        <span>加载中</span>
      </div>
      <div>
        <Image
          src="/react/img/KD-logo.xxx"
          width={300}
          height={300}
          fallback="/react/img/image-demo2.jpeg"
          fit="cover"
        />
        <span>自定义占位</span>
      </div>
    </div>
  );
}
```

## 3. 懒加载

```jsx
function Demo() {
  return (
    <div className="demo-image-lazy">
      <Image src="/react/img/image-demo2.jpeg" lazy />
      <Image
        src="/react/img/image-demo1.jpeg"
        height={300}
        lazy
        scrollContainer="demo-image-lazy"
      />
      <Image src="/react/img/image-demo3.jpeg" lazy scrollContainer="demo-image-lazy" />
      <Image src="/react/img/image-demo4.jpeg" lazy scrollContainer="demo-image-lazy" />
    </div>
  );
}
```
