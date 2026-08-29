# RangePanel · 分场景示例

## 1. 日期区间面板

```vue
<kd-range-panel v-model="range" type="daterange" />
```

## 2. 时间区间

```vue
<kd-range-panel v-model="tr" type="timerange" />
```

## 3. 占位与初始区间

```vue
<kd-range-panel
  v-model="range"
  type="monthrange"
  :placeholder="['开始月', '结束月']"
/>
```

## 4. 开启底部栏：清空与确认

日期类区间在 **`show-footer`** 为 **`true`** 时展示底部操作区：清空会触发 **`clear`** 并将 **`v-model`** 置为 **`[]`**，确认在区间完整时触发 **`confirm`** 并写回 **`v-model`**。

```vue
<kd-range-panel v-model="range" type="daterange" show-footer />
```

## 5. 周 / 季等日历区间

```vue
<kd-range-panel v-model="wk" type="weekrange" />
```

```vue
<kd-range-panel v-model="qr" type="quarterrange" />
```

## 6. 输出格式化字符串

与 **`KdDatePicker`** 族相同：配合 **`value-format`** 与 **`model-value-mode="formatted"`** 让 **`v-model`** 为格式化后的 **`string[]`**。

```vue
<kd-range-panel
  v-model="range"
  type="daterange"
  value-format="YYYY-MM-DD"
  model-value-mode="formatted"
/>
```
