# Divider · 分场景示例

## 1. 水平分割线

```vue
<kd-divider />
```

## 2. 带文字

```vue
<kd-divider content-position="left">基本信息</kd-divider>
```

## 3. 垂直分隔

```vue
<div class="toolbar">
  <span>左侧</span>
  <kd-divider direction="vertical" />
  <span>右侧</span>
</div>
```

## 4. 虚线

```vue
<kd-divider border-style="dashed" />
```

## 5. 表单分区

```vue
<kd-divider>联系方式</kd-divider>
```

## 6. 与间距组合

在上下区块之间插入 **`kd-divider`**，由外层布局控制 **`margin`**。
