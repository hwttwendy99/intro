# Navigation · 分场景示例

## 1. 顶部导航

```vue
<kd-navigation :default-active-index="0" @change="onNavChange">
  <kd-navigation-item :index="0">首页</kd-navigation-item>
  <kd-navigation-item :index="1">文档</kd-navigation-item>
</kd-navigation>
```

## 2. 带图标

```vue
<kd-navigation-item :index="0" :icon="HomeIcon">首页</kd-navigation-item>
```

## 3. 禁用项

```vue
<kd-navigation-item :index="2" disabled>未开放</kd-navigation-item>
```

## 4. 尺寸

```vue
<kd-navigation size="medium">...</kd-navigation>
```

## 5. 与路由同步

在 **`change`** 内 **`router.push`**，或用 **`default-active-index`** 与路由计算属性绑定。

## 6. 溢出「更多」

导航项过多时组件内部可收纳为「更多」菜单（行为以当前版本为准）。
