# DatePanel · 分场景示例

## 1. 内嵌单日历

```vue
<kd-date-panel v-model="d" type="date" />
```

## 2. 周 / 月视图

```vue
<kd-date-panel v-model="w" type="week" />
```

## 3. 受控面板月份

```vue
<kd-date-panel v-model="d" :panel-date="cursor" />
```

## 4. 先 pick 再自行确认

```vue
<kd-date-panel v-model="d" :auto-confirm="false" @pick="onPick" @confirm="onOk" />
```
