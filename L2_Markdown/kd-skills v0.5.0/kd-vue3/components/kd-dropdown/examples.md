# Dropdown · 分场景示例

## 1. 点击展开菜单

```vue
<kd-dropdown trigger="click">
  <template #reference>
    <kd-button menu>更多</kd-button>
  </template>
  <kd-menu>
    <kd-menu-item index="1">项一</kd-menu-item>
    <kd-menu-item index="2">项二</kd-menu-item>
  </kd-menu>
</kd-dropdown>
```

## 2. 受控显隐

```vue
<kd-dropdown v-model:visible="open">...</kd-dropdown>
```

## 3. 加载中

```vue
<kd-dropdown loading loading-text="加载中">...</kd-dropdown>
```

## 4. 空状态

```vue
<kd-dropdown>
  <template #reference><kd-button>打开</kd-button></template>
  <template #empty>暂无数据</template>
</kd-dropdown>
```

## 5. 限制高度

```vue
<kd-dropdown :max-height="320">...</kd-dropdown>
```

## 6. 右键菜单

```vue
<kd-dropdown trigger="contextmenu" :reference="refEl">...</kd-dropdown>
```
