# Tree · 分场景示例

## 1. 基础数据

```vue
<kd-tree :data="treeData" node-key="id" :props="{ label: 'name', children: 'children' }" />
```

## 2. 可勾选

```vue
<kd-tree
  show-checkbox
  :data="treeData"
  node-key="id"
  :default-expanded-keys="[1]"
  @check-change="onCheck"
/>
```

## 3. 懒加载

```vue
<kd-tree lazy :load="loadNode" :props="defaultProps" />
```

## 4. 高亮当前

```vue
<kd-tree highlight-current :data="treeData" node-key="id" @current-change="onCurrent" />
```

## 5. 过滤

```vue
<kd-input v-model="filterText" />
<kd-tree ref="treeRef" :data="treeData" :filter-node-method="filterNode" />
```

```ts
watch(filterText, (v) => treeRef.value?.filter(v))
```

## 6. 默认展开

```vue
<kd-tree default-expand-all :data="treeData" />
```
