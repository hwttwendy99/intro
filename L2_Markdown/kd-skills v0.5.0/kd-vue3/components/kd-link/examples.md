# Link · 分场景示例

## 1. 文字链接

```vue
<kd-link href="https://example.com">查看详情</kd-link>
```

## 2. 主色

```vue
<kd-link type="primary" href="/docs">文档</kd-link>
```

## 3. 下划线

```vue
<kd-link underline href="#">条款</kd-link>
```

## 4. 禁用

```vue
<kd-link disabled>不可用</kd-link>
```

## 5. 带图标

```vue
<kd-link :icon="ExternalIcon" href="https://example.com">外链</kd-link>
```

## 6. 点击拦截

```vue
<kd-link href="#" @click.prevent="onClick">操作</kd-link>
```
