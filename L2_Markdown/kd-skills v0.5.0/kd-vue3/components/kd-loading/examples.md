# Loading · 分场景示例

## 1. 指令包裹区域

```vue
<div v-loading="loading">内容区域</div>
```

## 2. 组件

```vue
<kd-loading text="加载中..." layout="vertical" />
```

## 3. 服务全屏（示意）

```ts
const inst = KdLoadingService({ fullscreen: true, text: '请稍候' })
inst.close()
```

（参数名以当前 **`LoadingOptions`** 为准。）

## 4. 与异步请求

```vue
<div v-loading="pending">
  <Content v-if="data" :data="data" />
</div>
```

## 5. 自定义文案与布局

```vue
<kd-loading text="提交中" layout="horizontal" size="large" />
```

## 6. 图标色

```vue
<kd-loading icon-color="white" text="处理中" />
```
