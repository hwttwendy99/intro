# KdTree · API 参考

导入均来自 **`@kdocs/kdesign-vue3`**。

## 样式（按需引入）

```text
@kdocs/kdesign-vue3/es/components/tree/style/css
```

```ts
import '@kdocs/kdesign-vue3/es/components/tree/style/css'
import '@kdocs/kdesign-vue3/lib/components/tree/style/css'
```

## 类型导入示例

```ts
import type {
  LoadFunction,
  TreeData,
  TreeNodeData,
  TreeOptionProps,
  TreeProps,
} from '@kdocs/kdesign-vue3'
```

## `KdTree` Props（摘要）

| 属性 | 说明 |
|------|------|
| `data` | 树数据 `TreeData` |
| `node-key` | 节点唯一字段名 |
| `props` | 字段映射 `TreeOptionProps`（`label`、`children`、`disabled`、`isLeaf` 等） |
| `empty-text` | 空数据文案 |
| `render-after-expand` | 展开后再渲染子节点 |
| `load` | 懒加载函数 `LoadFunction` |
| `render-content` | 自定义节点内容 |
| `highlight-current` | 高亮当前节点 |
| `default-expand-all` / `expand-on-click-node` | 展开行为 |
| `show-checkbox` / `check-strictly` / `check-on-click-node` | 勾选 |
| `default-checked-keys` / `default-expanded-keys` | 默认勾选 / 展开 |
| `filter-node-method` | 过滤方法 |
| `draggable` / `allow-drag` / `allow-drop` | 拖拽（若启用） |

其余属性（如编辑、滚动、拖拽细节）见 **`TreeProps`**。

## `KdTree` Emits（摘要）

| 事件名 | 说明 |
|--------|------|
| `node-click` | 点击节点 |
| `check-change` / `check` | 勾选变化 |
| `current-change` | 当前节点变化 |
| `node-expand` / `node-collapse` | 展开 / 收起 |
| `node-contextmenu` | 右键菜单 |
| 拖拽相关 | `node-drag-start` / `node-drop` 等 |

完整列表见 **`TreeEmits`** 类型。

## `KdTree` 实例方法

通过 **`ref`** 调用 **`getCheckedNodes`**、**`setCheckedKeys`**、**`filter`** 等（以当前版本类型为准）。

## `KdTreeNode`

高级用法或内部节点展示时使用，以导出与文档为准。
