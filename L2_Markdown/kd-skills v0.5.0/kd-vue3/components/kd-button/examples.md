# Button · 分场景示例

以下为常见组合说明与片段；导入均为 **`@kdocs/kdesign-vue3`**，模板标签为 **`kd-*`**。

## 1. 主操作提交

主按钮 + 点击提交；适用于表单页主操作。

```vue
<kd-button type="primary" native-type="submit" @click="onSubmit">提交</kd-button>
```

## 2. 次要操作 + 加载态

保存类操作，提交中禁用重复点击。

```vue
<kd-button type="secondary" :loading="saving" @click="save">保存</kd-button>
```

## 3. 前置图标 + 文案

用 `prefix-icon` 传入图标组件（图标包按需引入）。

```vue
<kd-button type="light" :prefix-icon="SomeIcon">导出</kd-button>
```

## 4. 按钮组统一尺寸/类型

外层 `kd-button-group` 为子按钮提供默认 `type` / `size`。

```vue
<kd-button-group type="secondary">
  <kd-button>取消</kd-button>
  <kd-button type="primary">确定</kd-button>
</kd-button-group>
```

## 5. 危险操作 / 菜单样式

危险操作用 `danger`；带下拉菜单入口可用 `menu` 与业务 Popover/Dropdown 组合。

```vue
<kd-button type="primary" danger @click="remove">删除</kd-button>
<kd-button type="light" menu @click="openMenu">更多</kd-button>
```

## 6. 禁用与纯展示

仅展示、禁用点击时使用 `disabled`；或配合业务 `tooltip` 说明原因。

```vue
<kd-button type="primary" disabled>暂不可用</kd-button>
```
