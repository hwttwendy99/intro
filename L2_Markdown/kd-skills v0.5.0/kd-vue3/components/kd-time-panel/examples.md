# TimePanel · 分场景示例

## 1. 单段

```vue
<kd-time-panel v-model="t" />
```

## 2. 禁用小时

```vue
<kd-time-panel
  v-model="t"
  :disabled-time="() => ({ disabledHours: () => [0, 1] })"
/>
```

## 3. 隐藏底部

```vue
<kd-time-panel v-model="t" :show-footer="false" />
```
