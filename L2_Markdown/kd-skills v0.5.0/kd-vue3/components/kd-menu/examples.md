# Menu · 分场景示例

## 1. 纵向菜单

```vue
<kd-menu v-model="active" default-active="1">
  <kd-menu-item index="1">首页</kd-menu-item>
  <kd-menu-item index="2">设置</kd-menu-item>
</kd-menu>
```

## 2. 子菜单

```vue
<kd-menu v-model="active">
  <kd-submenu index="sub">
    <kd-menu-item index="a">A</kd-menu-item>
    <kd-menu-item index="b">B</kd-menu-item>
  </kd-submenu>
</kd-menu>
```

## 3. 分组

```vue
<kd-menu>
  <kd-menu-item-group title="分组一">
    <kd-menu-item index="1">一</kd-menu-item>
  </kd-menu-item-group>
</kd-menu>
```

## 4. 折叠侧栏

```vue
<kd-menu collapse>...</kd-menu>
```

## 5. 与下拉

将 **`kd-menu`** 放入 **`kd-dropdown`** 默认插槽，配合 **`close-on-select`**。

## 6. 路由模式

```vue
<kd-menu router :default-active="$route.path">...</kd-menu>
```
