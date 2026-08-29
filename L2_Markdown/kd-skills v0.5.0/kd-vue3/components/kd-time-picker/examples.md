# TimePicker · 分场景示例

## 1. 基础时间

```vue
<kd-time-picker v-model="t" placeholder="选择时间" />
```

## 2. 字符串输出

```vue
<kd-time-picker
  v-model="text"
  model-value-mode="formatted"
  value-format="HH:mm:ss"
/>
```

## 3. 隐藏底部栏

```vue
<kd-time-picker v-model="t" :show-footer="false" />
```

## 4. 禁用部分时刻

```vue
<kd-time-picker
  v-model="t"
  :disabled-time="() => ({ disabledHours: () => [0, 1, 2] })"
/>
```
