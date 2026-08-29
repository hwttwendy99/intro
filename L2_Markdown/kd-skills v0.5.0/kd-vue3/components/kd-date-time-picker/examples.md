# DateTimePicker · 分场景示例

## 1. 基础

```vue
<kd-date-time-picker v-model="dt" placeholder="选择日期时间" />
```

## 2. 格式化输出

```vue
<kd-date-time-picker
  v-model="text"
  model-value-mode="formatted"
  value-format="YYYY-MM-DD HH:mm:ss"
/>
```

## 3. 禁用日期与时间

```vue
<kd-date-time-picker
  v-model="dt"
  :disabled-date="(d) => d.getDate() === 1"
  :disabled-time="() => ({ disabledHours: () => [0] })"
/>
```

## 4. 无底部栏

```vue
<kd-date-time-picker v-model="dt" :show-footer="false" />
```
