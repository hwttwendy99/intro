# RangePicker · 分场景示例

## 1. 日期区间

```vue
<kd-range-picker
  v-model="range"
  type="daterange"
  :placeholder="['开始', '结束']"
/>
```

## 2. 时间区间

```vue
<kd-range-picker v-model="tr" type="timerange" />
```

## 3. 日期时间区间

```vue
<kd-range-picker v-model="dtr" type="datetimerange" />
```

## 4. 自定义分隔符与宽度

```vue
<kd-range-picker v-model="range" separator="至" width="360px" />
```

## 5. 同一周期内自动扩展区间（`same-date-expand`）

适用于 `daterange` / `weekrange` / `monthrange` / `quarterrange` / `yearrange`：当起点与终点落在同一周期单元上时，将 `v-model` 扩展为该周期的起止边界；**`datetimerange` 不生效**。

```vue
<kd-range-picker
  v-model="range"
  type="weekrange"
  same-date-expand
/>
```

## 6. 无底部栏的轻量弹层（`show-footer`）

```vue
<kd-range-picker v-model="range" type="daterange" :show-footer="false" />
```
