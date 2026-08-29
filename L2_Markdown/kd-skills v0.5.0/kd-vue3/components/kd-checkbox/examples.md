# Checkbox · 分场景示例

## 1. 单个复选框

```vue
<kd-checkbox v-model="checked">记住我</kd-checkbox>
```

## 2. 组选（数组）

```vue
<kd-checkbox-group v-model="ids">
  <kd-checkbox label="a">选项 A</kd-checkbox>
  <kd-checkbox label="b">选项 B</kd-checkbox>
</kd-checkbox-group>
```

## 3. 数量限制

```vue
<kd-checkbox-group v-model="ids" :min="1" :max="2">...</kd-checkbox-group>
```

## 4. 垂直排列

```vue
<kd-checkbox-group v-model="ids" layout="vertical">...</kd-checkbox-group>
```

## 5. 半选（全选场景）

在父级用 `indeterminate` 表示子项部分选中，并同步 **`update:modelValue`** / **`change`**。

```vue
<kd-checkbox v-model="allChecked" :indeterminate="indeterminate" @change="onCheckAll" />
```

## 6. 按钮样式

```vue
<kd-checkbox-group v-model="ids">
  <kd-checkbox-button label="x">X</kd-checkbox-button>
  <kd-checkbox-button label="y">Y</kd-checkbox-button>
</kd-checkbox-group>
```
