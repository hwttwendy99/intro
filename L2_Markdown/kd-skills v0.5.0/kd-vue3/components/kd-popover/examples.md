# Popover · 分场景示例

## 1. 点击弹出

```vue
<kd-popover title="标题" trigger="click">
  <template #reference>
    <kd-button>打开</kd-button>
  </template>
  内容区
</kd-popover>
```

## 2. 受控显隐

```vue
<kd-popover v-model:visible="open">...</kd-popover>
```

## 3. 带箭头

```vue
<kd-popover show-arrow placement="top">...</kd-popover>
```

## 4. 宽度

```vue
<kd-popover :width="320">...</kd-popover>
```

## 5. Hover

```vue
<kd-popover trigger="hover">...</kd-popover>
```

## 6. 延时打开

```vue
<kd-popover :show-after="300">...</kd-popover>
```
