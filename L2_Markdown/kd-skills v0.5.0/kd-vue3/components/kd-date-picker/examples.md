# DatePicker · 分场景示例

导入 **`KdDatePicker`** 自 **`@kdocs/kdesign-vue3`**，模板使用 **`kd-date-picker`**。

## 1. 基础日期

**`type="date"`**（默认），**`v-model`** 为单日。

```vue
<kd-date-picker v-model="value" placeholder="选择日期" />
```

## 2. 周 / 月 / 季 / 年

修改 **`type`** 为 **`week`**、**`month`**、**`quarter`**、**`year`**。

```vue
<kd-date-picker v-model="week" type="week" />
```

## 3. 输出格式化字符串

**`model-value-mode="formatted"`**，并配合 **`value-format`**（可与默认格式一致或自定义）。

```vue
<kd-date-picker
  v-model="text"
  model-value-mode="formatted"
  value-format="YYYY-MM-DD"
/>
```

## 4. 禁用部分日期

**`disabled-date`** 返回 `true` 的日期不可选。

```vue
<kd-date-picker v-model="d" :disabled-date="(date) => date.getDay() === 0" />
```

## 5. 尺寸与宽度

**`size`**、**`width`** 控制触发器展示（宽度也可通过外层样式约束）。

```vue
<kd-date-picker v-model="d" size="large" width="320" />
```
