# Radio · 分场景示例

## 1. 单选组

```vue
<kd-radio-group v-model="mode">
  <kd-radio label="a">选项 A</kd-radio>
  <kd-radio label="b">选项 B</kd-radio>
</kd-radio-group>
```

## 2. 按钮样式

```vue
<kd-radio-group v-model="mode">
  <kd-radio-button label="day">日</kd-radio-button>
  <kd-radio-button label="week">周</kd-radio-button>
</kd-radio-group>
```

## 3. 垂直排列

```vue
<kd-radio-group v-model="x" layout="vertical">...</kd-radio-group>
```

## 4. 禁用

```vue
<kd-radio-group v-model="x" disabled>...</kd-radio-group>
```

## 5. 带边框

```vue
<kd-radio label="1" border>选项</kd-radio>
```

## 6. 表单字段

与 **`kd-form-item`**、校验规则一起使用，**`prop`** 绑定 **`v-model`** 字段。
