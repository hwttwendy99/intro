# Menu · API 参考

> 导入：`import { Menu } from '@kdocs/kdesign'`

#### Menu
|  参数   | 说明  | 类型  | 可选值 | 默认值  |
|  ----   | ----  |----  |----  | ---- |
| className | 根节点类名 | `string` | - | - |
| style | 根节点样式 | `React.CSSProperties` | - | - | 
| selectable | 是否允许选中 | `boolean` | - | false |
| checkable | 是否允许多选 | `boolean` | - | false |
| triggerSubMenuAction | 子菜单触发方式 | `string` | `hover` \| `click` | `click` |

#### Menu.Item
|  参数   | 说明  | 类型  | 默认值  | 备注 |
|  ----   | ----  |----  |  ----  | ---- |
| className | 菜单项类名 | `string` |
| style | 菜单项样式 | `React.CSSProperties` |
| value | 用于 onClick 时传回去的参数 |
| icon | 菜单项图标 | `React.ReactNode` |
| selected | 是否选中，配合Menu selectable属性使用 | `boolean` | `false` |
| checked | 是否选中，配合Menu checkable属性使用 | `boolean` | `false` |
| disabled | 是否禁用 | `boolean` | `false` |
| onClick | 点击时的回调 | `(e: React.SyntheticEvent, item: itemValue) => void` |

#### Menu.Group
|  参数   | 说明  | 类型  | 默认值  |
|  ----   | ----  |----  |----   |
| className | 子菜单项类名 | `string` |
| label | 菜单组名称 | `React.ReactNode` |

#### Menu.SubMenu
|  参数   | 说明  | 类型  | 默认值  |
|  ----   | ----  |----  |----   |
| className | 子菜单项类名 | `string` |
| label | 菜单项名称 | `React.ReactNode` |
| icon |  菜单项图标 | `React.ReactNode` |
| open | 是否展开 | `boolean` | `false` |
| onOpenChange | 当展示/隐藏 subMenu | `(data: {open: boolean, element: HTMLElement, parent: HTMLElement}) => void` |
