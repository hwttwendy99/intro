# SplitButton · 分场景示例

## 1. 主操作 + 下拉

```vue
<kd-split-button
  text="保存"
  :options="[
    { label: '另存为', value: 'saveAs' },
    { label: '导出', value: 'export' },
  ]"
  @click="onSave"
  @select="onMenuSelect"
/>
```

## 2. 类型与加载

```vue
<kd-split-button type="primary" text="提交" :loading="pending" :options="opts" />
```

## 3. 禁用

```vue
<kd-split-button text="操作" disabled :options="opts" />
```

## 4. 菜单位置

```vue
<kd-split-button placement="bottom-end" ... />
```

## 5. 监听打开

```vue
<kd-split-button @open="onOpen" @close="onClose" />
```

## 6. 自定义宽度

```vue
<kd-split-button text="宽按钮" :width="200" :options="opts" />
```
