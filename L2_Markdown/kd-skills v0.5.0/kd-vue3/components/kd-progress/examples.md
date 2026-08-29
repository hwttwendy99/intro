# Progress · 分场景示例

## 1. 条形

```vue
<kd-progress :percentage="50" />
```

## 2. 状态

```vue
<kd-progress :percentage="100" status="success" />
```

## 3. 环形

```vue
<kd-progress type="circle" :percentage="75" />
```

## 4. 条内文字

```vue
<kd-progress :percentage="60" text-inside />
```

## 5. 不确定

```vue
<kd-progress indeterminate />
```

## 6. 自定义文案

```vue
<kd-progress :percentage="40" :format="(p) => `${p} 完成`" />
```
