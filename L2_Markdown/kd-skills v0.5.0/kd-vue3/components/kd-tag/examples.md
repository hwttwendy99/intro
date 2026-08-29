# Tag · 分场景示例

## 1. 文案

```vue
<kd-tag text="标签" />
```

## 2. 可关闭

```vue
<kd-tag closable @close="onClose">可删</kd-tag>
```

## 3. 可选中

```vue
<kd-tag checkable :checked="sel" @change="toggle">筛选</kd-tag>
```

## 4. 前缀图标

```vue
<kd-tag :prefix-icon="TagIcon">分类</kd-tag>
```

## 5. 尺寸

```vue
<kd-tag size="small">小标签</kd-tag>
```

## 6. 与列表

```vue
<kd-tag v-for="t in tags" :key="t" closable @close="remove(t)">{{ t }}</kd-tag>
```
