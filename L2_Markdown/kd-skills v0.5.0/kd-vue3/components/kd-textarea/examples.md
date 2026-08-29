# Textarea · 分场景示例

## 1. 基础

```vue
<kd-textarea v-model="note" placeholder="请输入" />
```

## 2. 自适应高度

```vue
<kd-textarea v-model="note" :autosize="{ minRows: 3, maxRows: 8 }" />
```

## 3. 字数限制

```vue
<kd-textarea v-model="note" :maxlength="200" show-word-limit />
```

## 4. 可清空

```vue
<kd-textarea v-model="note" clearable />
```

## 5. 辅助说明

```vue
<kd-textarea v-model="note" helper-text="将展示在表单中" />
```

## 6. 与表单项

```vue
<kd-form-item label="备注" prop="remark">
  <kd-textarea v-model="form.remark" />
</kd-form-item>
```
