# List · API 参考

> 导入：`import { List } from '@kdocs/kdesign'`

#### List

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| bordered | 是否展示边框 | `boolean` | - | `false` |
| className | 根节点类名 | `string` | - | - |
| children | List 内容渲染，dataSource 优先级更高（使用此方式无法进行 单选、复选、滚动加载、虚拟列表 等操作，需要自行支持） | `string` | - | - |
| dataSource | 列表数据源 | `T[]` | - | - |
| hovered | 是否展示 hover 效果 | `boolean` | - | `true` |
| lang | 默认文案多语言的配置 | `string` | `zh-CN` `zh-HK` `en` `ja` | `zh-CN` |
| minWidth | 列表最小宽度 | `number` | - | `150` |
| placeholder | 缺省状态自定义内容 | `PlaceholderProps` | - | - |
| renderItem | 配合 dataSource 使用，自定义渲染行内容 | `(row: T) => ReactNode` | - | - |
| rowKeyName | 指定 dataSource 中作为唯一标识符的关键字（若启用 selection、virtual 则必传） | `string` | - | - |
| scrollListProps | 触底滚动加载，参数配置 | `ScrollListProps` | - | - |
| selection | 列表是否启用勾选及其配置 | `SelectionProps` | - | - |
| split | 是否展示分割线 | `boolean` | - | `false` |
| styles | 根节点行内样式 | `CSSProperties` | - | - |
| virtual | 是否启用虚拟列表及其配置 | `boolean` `VirtualListProps` | - | - |
| onScroll | 滚动触发事件 | `(e: Event) => void` | - | - |

#### List.Item

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| actions | 拓展操作插槽 | `ReactNode` | - | - |
| className | 节点类名 | `string` | - | - |
| disabled | 是否展示禁用效果 | `boolean` | - | `false` |
| extra | 拓展内容插槽 | `ReactNode` | - | - |
| isActive | 是否展示 active 效果 | `boolean` | - | `false` |
| rowData | 当前行的源数据（与 dataSource 相关），若是启用了 selection 需要必传 | `T` | - | - |
| styles | 节点行内样式 | `CSSProperties` | - | - |

#### List.Item.Meta

| 参数        | 说明         | 类型            | 可选值 | 默认值 |
| ----------- | ------------ | --------------- | ------ | ------ |
| className   | 节点类名     | `string`        | -      | -      |
| description | 描述插槽     | `ReactNode`     | -      | -      |
| prefix      | 前置插槽     | `ReactNode`     | -      | -      |
| styles      | 节点行内样式 | `CSSProperties` | -      | -      |
| title       | 标题插槽     | `ReactNode`     | -      | -      |

#### 类型定义

##### BottomLoaderType

| 参数       | 说明         | 类型                 | 可选值 | 默认值 |
| ---------- | ------------ | -------------------- | ------ | ------ |
| loading    | 正在加载状态 | `string` `ReactNode` | -      | -      |
| loadMore   | 加载更多状态 | `string` `ReactNode` | -      | -      |
| loadFinish | 加载完成状态 | `string` `ReactNode` | -      | -      |

##### PlaceholderProps

| 参数    | 说明                          | 类型                 | 可选值 | 默认值 |
| ------- | ----------------------------- | -------------------- | ------ | ------ |
| empty   | 列表为空时的展示内容          | `string` `ReactNode` | -      | -      |
| loading | 列表首次加载 loading 展示内容 | `string` `ReactNode` | -      | -      |

##### ScrollListProps

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| autoLoad | 是否触底自动加载下一页 | `boolean` | - | `true` |
| bottomLoader | 底部 loading 自定义展示内容 | `boolean` `BottomLoaderType` | - | - |
| className | 滚动列表容器类名 | `string` | - | - |
| hasMore | 列表是否还有更多数据 | `boolean` | - | - |
| loading | 列表是否正在加载 | `boolean` | - | - |
| loadMoreLoader | 自定义加载更多按钮 | `string` `ReactNode` | - | - |
| scrollHeight | 滚动区域高度，此优先级比虚拟列表的`containerHeight`高 | `number` | - | `500` |
| styles | 滚动列表容器行内样式 | `CSSProperties` | - | - |
| threshold | 用户自定义滚动触底 触发距离阈值 | `number` | - | `100` |
| onScrollToBottom | 列表触底回调函数 | `() => void` | - | - |

##### SelectionProps

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| checkAllTip | 自定义全选框旁边的文案 | `string` `ReactNode` | - | - |
| disabledKeys | 禁用复选框所在列表项的标识符 | `string[]` | - | - |
| isShowCheckAll | 是否展示全选框 | `boolean` | - | `true` |
| selectedKeys | 已选中唯一标识符值 | `string[]` | - | - |
| type | 指定选择类型，单选还是多选 | `radio` `checkbox` | - | `checkbox` |
| onSelect | 选择操作回调 | `({ selected: string[], row: T }) => void` | - | - |
| onSelectAll | 全选/取消全选操作回调，仅复选模式有效 | `(selected: string[]) => void` | - | - |

##### VirtualListProps

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| containerHeight | 虚拟列表可见区域容器高度，此参数受到滚动参数 scrollHeight 的影响 | `number` | - | `500` |
| itemHeight | 列表项元素固定高度（未指定则为灵活高度，为了提高列表的性能，最好指定这个参数） | `number` | - | - |
| threshold | 不可见区域 预留渲染元素个数（防止翻页太快出现空白） | `number` | - | `5` |
