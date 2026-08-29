# DateTimePanel · 分场景示例

## 1. 内嵌日期时间

```vue
<kd-date-time-panel v-model="dt" />
```

## 2. 带区间高亮

```vue
<kd-date-time-panel
  v-model="segment"
  :range-calendar-value="[start, end]"
/>
```

## 3. 禁用与格式

```vue
<kd-date-time-panel
  v-model="dt"
  value-format="YYYY-MM-DD HH:mm:ss"
  :disabled-date="(d) => d.getDay() === 6"
/>
```
