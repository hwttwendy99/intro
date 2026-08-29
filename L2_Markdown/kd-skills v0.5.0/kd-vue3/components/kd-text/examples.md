# Text · 分场景示例

## 1. 单行省略

```vue
<kd-text :content="longTitle" />
```

## 2. 多行

```vue
<kd-text :content="desc" :rows="3" />
```

## 3. 中间省略

```vue
<kd-text :content="filePath" mode="middle" />
```

## 4. 关闭 Tooltip

```vue
<kd-text :content="txt" :tooltip="false" />
```

## 5. 监听省略态

```vue
<kd-text :content="txt" @ellipsis-change="onEllipsis" />
```

## 6. 自定义省略号

```vue
<kd-text :content="txt" suffix="…" />
```
