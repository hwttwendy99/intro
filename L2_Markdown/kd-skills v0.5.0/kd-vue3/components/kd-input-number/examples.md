# InputNumber · 分场景示例

## 1. 基础

```vue
<kd-input-number v-model="n" />
```

## 2. 范围与步长

```vue
<kd-input-number v-model="n" :min="0" :max="100" :step="5" />
```

## 3. 小数精度

```vue
<kd-input-number v-model="price" :precision="2" :step="0.01" />
```

## 4. 单位

```vue
<kd-input-number v-model="amount" prefix-unit="¥" />
```

## 5. 无步进按钮

```vue
<kd-input-number v-model="n" :controls="false" />
```

## 6. 只读展示

```vue
<kd-input-number v-model="n" readonly />
```
