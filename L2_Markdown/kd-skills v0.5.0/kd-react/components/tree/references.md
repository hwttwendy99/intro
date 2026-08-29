# Tree · API 参考

> 导入：`import { Tree } from '@kdocs/kdesign'`

#### Tree

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| autoExpandParent | 是否自动展开父节点 | boolean | -- | true |
| checkStrictly | 勾选时是否取消父子节点关联 | boolean | -- | false |
| draggable | 是否可拖拽 | boolean | -- | false |
| allowDrop | 是否允许拖拽时放置在该节点 | AllowDrop | -- | () => boolean |
| checkedKeys | 选中复选框的树节点（多选、受控） | string[] | -- | -- |
| checkedStrategy | 定制回填方式。`all`: 返回所有选中的节点;`parent`: 父子节点都选中时只返回父节点;`child`: 只返回子节点 | `all` \| `parent` \| `child`| `all` \| `parent` \| `child` | `all` |
| className | 节点类名 | string ｜ string[] | -- | -- |
| defaultCheckedKeys | 默认选中的节点(多选) | string[] | -- | -- |
| defaultExpandedKeys | 默认展开的节点 | string[] | -- | -- |
| defaultSelectedKeys | 默认选中的节点(单选) | string[] | -- | -- |
| expandedKeys | 展开的节点(受控) | string[] | -- | -- |
| fieldNames | 指定 key,title,isLeaf,disabled,children 对应的字段 | FieldNamesType | -- | -- |
| fieldNames | 指定 key,title,isLeaf,disabled,children 对应的字段 | FieldNamesType | -- | -- |
| halfCheckedKeys | 半选状态的节点.仅在 checkable 且 checkStrictly 时生效 | string[] | -- | -- |
| height | 设置后开启虚拟列表| number | -- | -- |
| style | 节点样式 | CSSProperties | -- | -- |
| selectable | 是否可以选择 | boolean | -- | true |
| selectedKeys | 选中的节点(单选、受控) | string[] | -- | -- |
| treeData | 通过传入treeData,生成对应的树结构 | TreeDataType[] | -- | -- |
| loadMore | 异步加载数据的回调，返回一个 Promise | `(node: NodeInstance) => Promise<void>` | -- | -- |
| onDragEnd | 节点结束拖拽的回调 | `(e: DragEvent<HTMLSpanElement>, node: NodeInstance) => void` | -- | -- |
| onDragLeave | 节点离开可释放目标上时的回调 | `(e: DragEvent<HTMLSpanElement>, node: NodeInstance) => void` | -- | -- |
| onDragOver | 节点被拖拽至可释放目标上时的回调 | `(e: DragEvent<HTMLSpanElement>, node: NodeInstance) => void` | -- | -- |
| onDragStart | 节点开始拖拽的回调 | `(e: DragEvent<HTMLSpanElement>, node: NodeInstance) => void` | -- | -- |
| onDrop | 	节点在可释放目标上释放时的回调 | `(info: {e: DragEvent<HTMLSpanElement>;dragNode: NodeInstance ｜｜ null;dropNode: NodeInstance ｜｜ null;dropPosition: number;}) => void` | -- | -- |
| onCheck | 点击树节点复选框的回调(多选) | `(checkedKeys: string[],extra: {node: NodeInstance;checkedNodes: NodeInstance[];checked: boolean;halfCheckedKeys: string[];halfCheckedNodes: NodeInstance[];e: Event;}) => void` | -- | -- |
| onExpand | 点击展开/关闭的回调 | `(expandedKeys: string[],exra?: { expanded: boolean; node: NodeInstance; expandedNodes: NodeInstance[] }) => void` | -- | -- |
| onSelect | 点击树节点的回调(单选) | `(selectedKeys: string[],extra: {selected: boolean;selectedNodes: NodeInstance[];node: NodeInstance;e: Event;}) => void` | -- | -- |
| renderExtra | 渲染额外节点 | `(props: NodeProps) => ReactNode` | -- | -- |
| renderTitle | 自定义 title 的渲染 | `(props: NodeProps) => ReactNode` | -- | -- |

#### TreeDataType
```typescript
export interface TreeDataType {
    // 该节点显示的标题
    title?: string | ReactNode;
    // 是否允许选中
    selectable?: boolean;
    // 是否禁用节点
    disabled?: boolean;
    // 是否禁用复选框
    disableCheckbox?: boolean;
    // 该节点个性化显示的图标
    icon?: ReactNode;
    // 是否是叶子节点。动态加载时有效
    isLeaf?: boolean;
    // 当前节点是否可拖拽;
    draggable?: boolean;
      key?: string;
    _index?: number;
    children?: TreeDataType[];
    [key: string]: any;
}

export type FieldNamesType = {
  key?: string;
  title?: string;
  disabled?: string;
  children?: string;
  isLeaf?: string;
  disableCheckbox?: string;
};
```
