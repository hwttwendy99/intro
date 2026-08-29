# Badge · 分场景示例

## 1. 包裹图标

```vue
<kd-badge :value="12">
  <kd-icon :icon="BellIcon" />
</kd-badge>
```

## 2. 数字封顶

```vue
<kd-badge :value="120" :max="99">...</kd-badge>
```

## 3. 小红点

```vue
<kd-badge is-dot>...</kd-badge>
```

## 4. 语义类型

```vue
<kd-badge :value="3" type="danger">...</kd-badge>
```

## 5. 自定义颜色

```vue
<kd-badge value="NEW" color="#fff" background="#f56c6c" borderless>...</kd-badge>
```

## 6. 条件隐藏

```vue
<kd-badge :value="n" :hidden="n === 0">...</kd-badge>
```
