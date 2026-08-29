# Slider · 分场景示例

## 1. 单值

```vue
<kd-slider v-model="volume" :max="100" />
```

## 2. 区间

```vue
<kd-slider v-model="range" range :max="100" />
```

```ts
const range = ref<[number, number]>([20, 80])
```

## 3. 显示刻度

```vue
<kd-slider v-model="v" :marks="{ 0: '0', 50: '中', 100: '满' }" />
```

## 4. 竖向

```vue
<kd-slider v-model="v" vertical />
```

## 5. 禁用

```vue
<kd-slider v-model="v" disabled />
```

## 6. 自定义提示

```vue
<kd-slider v-model="v" :format-tooltip="(n) => `${n}°`" />
```
