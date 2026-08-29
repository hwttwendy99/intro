# Tooltip · 分场景示例

## 1. 文案提示

```vue
<kd-tooltip content="说明文字" placement="top">
  <kd-button>悬停</kd-button>
</kd-tooltip>
```

## 2. 自定义内容插槽

```vue
<kd-tooltip>
  <template #content>支持 <b>HTML</b> 结构（需配合 raw-content 等安全策略）</template>
  <span>触发</span>
</kd-tooltip>
```

## 3. 点击触发

```vue
<kd-tooltip content="说明" trigger="click">...</kd-tooltip>
```

## 4. 受控显隐

```vue
<kd-tooltip v-model:visible="show" content="...">...</kd-tooltip>
```

## 5. 延时

```vue
<kd-tooltip content="..." :show-after="200" />
```

## 6. 禁用

```vue
<kd-tooltip content="..." disabled>...</kd-tooltip>
```
