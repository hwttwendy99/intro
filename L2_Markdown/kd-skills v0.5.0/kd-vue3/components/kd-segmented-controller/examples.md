# SegmentedController · 分场景示例

## 1. 单选片段

```vue
<kd-segmented-controller v-model="active">
  <kd-segmented-item name="a" text="视图 A" />
  <kd-segmented-item name="b" text="视图 B" />
</kd-segmented-controller>
```

```ts
const active = ref<string[]>(['a'])
```

## 2. 多选

```vue
<kd-segmented-controller v-model="active" multi>...</kd-segmented-controller>
```

## 3. 图标

```vue
<kd-segmented-item name="list" :icon="ListIcon" text="列表" />
```

## 4. 禁用项

```vue
<kd-segmented-item name="x" text="不可用" disabled />
```

## 5. Tooltip

```vue
<kd-segmented-item name="y" text="项" :tooltip="{ content: '说明' }" />
```

## 6. 监听变更

```vue
<kd-segmented-controller v-model="active" @change="onChange" />
```
