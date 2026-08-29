# Switch · 分场景示例

## 1. 布尔

```vue
<kd-switch v-model="enabled" />
```

## 2. 自定义取值

```vue
<kd-switch v-model="mode" active-value="on" inactive-value="off" />
```

## 3. 文字

```vue
<kd-switch v-model="x" active-text="开" inactive-text="关" />
```

## 4. 加载

```vue
<kd-switch v-model="x" loading />
```

## 5. before-change

```vue
<kd-switch v-model="x" :before-change="beforeToggle" />
```

## 6. 表单

```vue
<kd-form-item label="通知" prop="notify">
  <kd-switch v-model="form.notify" />
</kd-form-item>
```
