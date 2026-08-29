# Table · API 参考

> 导入：`import { Table } from '@kdocs/kdesign'`

#### Table
|  参数   | 说明  | 类型  | 可选值  | 默认值  |
|  ----   | ---- | ----  | ----   |  ----  |
| bordered  | 是否展示外边框和列边框   | `boolean` |- | false |
| className | 表格类名 | `string` |- | - |
| columns | 列数据模板 | `Column[]` | - | - |
| components | 覆盖默认的 table 元素 | `object` | - | - |
| customization | 定制能力 | `object` | - | - |
| contextMenu | 右键菜单配置 | `(record) => ReactNode` | - | - |
| dataSource | 数据数组 | `object[]`|- | - |
| empty | 空状态显示 | `string` \| `ReactNode` | - | - |
| expandable | 展开属性配置 | `object` | - | - |
| id  | 组件ID标识  | `string` | - | - |
| keyboardProps | 键盘事件配置 | `object` | - | - |
| loading | 加载状态 | `boolean` \| `object` | - | - |
| rowKey  | 数据行 key | `string` \| `() => string` |- | - |
| rowSelection | 行选择配置 | `object` | - | - |
| rowHeight  | 虚拟列表行高，每行固定行高 | `number` |- | - |
| rowClassName | 行类名 | `(record, index) => string` | - | - |
| showHeader | 是否展示表头 | `boolean` | - | `true` |
| showSkeleton | 是否展示骨架屏 | `boolean` | - | `false` |
| showHoverBack | 是否显示hover背景色 | `boolean` | - | `true` |
| scrollSelector  | 滚动容器类名，用于键盘事件与虚拟列表 | `string` |- | - |
| scroll | 固定滚动范围配置 | `object` | - | - |
| virtual | 支持虚拟列表 | `boolean` | - | `false` |
| onBlur | 失焦事件回调 | `(event) => void` | - | - |
| onDrag | 行拖拽事件回调 | `(target, record, event) => void` | - | - |
| onRow | 行操作配置 | `(record, index) => string` | - | - |
| onScroll | 滚动事件回调 | `(event) => void` | - | - |

#### rowSelection
|  参数   | 说明  | 类型  | 可选值  | 默认值  |
|  ----   | ---- | ----  | ----   |  ----  |
| clickRowSelect | 点击行选中 | `boolean` \| `(record) => boolean` |- | true |
| defaultSelectedRowKeys | 指定默认选中项的 key 数组 | `string[]` |- | - |
| disabledRowKeys | 勾选框禁用的行的 key 数组  | `string[]` |- | - |
| hideSelect | 隐藏勾选框 | `boolean` |- | false |
| hoverShowSelect | 默认隐藏复选框hover时才展示,若有选中项则勾选框常显 | `boolean` |- | false |
| selectedRowKeys | 指定选中项的 key 数组  | `string[]` |- | - |
| onChange | 选中项发生变化的回调 | `(selectedRowKeys, selected, index, changeRow) => void` |- | - |
| onBatchSelect | 用户使用键盘 shift 选择多行的回调 | `(selectedRowKeys, selected, changeKeys) => void` |- | - |
| onSelectAll | 用户手动选择/取消所有行的回调 | `(selectedRowKeys, selected, changeKeys) => void` |- | - |

#### columns
|  参数   | 说明  | 类型  | 可选值  | 默认值  |
|  ----   | ---- | ----  | ----   |  ----  |
| align | 设置列的对齐方式   | `string` | left / center / right | `left` |
| className | 列类名 | `string` |- | - |
| dataIndex | 列数据在数据项中对应的路径 | `string`|- | - |
| ellipsis | 超过宽度将自动省略   | `boolean` |- | false |
| hide | 是否隐藏列 | `boolean` |- | false |
| minWidth | 最小列宽 | `string` \| `number` |- | - |
| skeleton | 自定义骨架屏   | `object` |- | - |
| title | 列名 | `string` \| `(headerData) => ReactNode` |- | - |
| width | 列宽  | `string` \| `number` |- | - |
| render | 自定义列渲染 | `(value, record, index) => ReactNode` |- | - |

#### loading
|  参数   | 说明  | 类型  | 可选值  | 默认值  |
|  ----   | ---- | ----  | ----   |  ----  |
| isLoading | 是否正在加载 | `boolean`|- | false |
| render | 自定义loading | `() => ReactNode` |- | - |

#### scroll
|  参数   | 说明  | 类型  | 可选值  | 默认值  |
|  ----   | ---- | ----  | ----   |  ----  |
| y | 设置纵向滚动 | `string` \| `number` |- | - |

#### components
|  参数   | 说明  | 类型  | 可选值  | 默认值  |
|  ----   | ---- | ----  | ----   |  ----  |
| body | 覆盖body元素 | `{ row: ReactNode }`|- | - |

#### customization
|  参数   | 说明  | 类型  | 可选值  | 默认值  |
|  ----   | ---- | ----  | ----   |  ----  |
| changeColumns | 修改表格列 | `(columns) => Column[]`|- | - |
| changeDataSource | 修改表格数据 | `(dataSource) => object[]` |- | - |
| getMemoData  | 获取当前虚拟滚动渲染数据   | `(memoData) => void` |- | - |
| getRef  | 获取表格ref   | `(ref) => void` |- | - |
| getTableCell  | 获取表格单元格   | `(fn: (rowKeyValue, dataIndex) => HTMLTableCellElement) => void` |- | - |

#### expandable
|  参数   | 说明  | 类型  | 可选值  | 默认值  |
|  ----   | ---- | ----  | ----   |  ----  |
| defaultExpandedRowKeys  | 默认展开的行   | `string[]` |- | - |
| expandedRowKeys | 展开的行，控制属性 | `string[]` |- | - |
| expandedRowClassName  | 展开行的 className   | `string` |- | - |
| showExpandColumn  | 设置是否展示行展开列   | `boolean` |- | false |
| expandIconRender  |  自定义展开图标  | `(record, expanded) => ReactNode` |- | - |
| expandedRowRender  | 额外的展开行   | `(record, index) => ReactNode` |- | - |
| onExpand  | 展开图标触发回调  | `(record, expanded) => void` |- | - |

#### keyboardProps
|  参数   | 说明  | 类型  | 可选值  | 默认值  |
|  ----   | ---- | ----  | ----   |  ----  |
| autoFocus | 是否自动聚焦到table上 | `boolean`|- | false |
| disableKeyboardEvents | 是否禁用键盘事件 | `boolean` |- | true |
| onKeyboard  | 键盘事件触发回调  | `(event, type, record, selectedRowKeys) => void` |- | - |
