# Avatar · API 参考

> 导入：`import { Avatar } from '@kdocs/kdesign'`

#### Avatar
|  参数   | 说明  | 类型  | 默认值  |
|  ----   | ---- | ----  | ----  |
| shape  | 头像形状  | `circle` \| `square` | `circle` |
| size  | 头像尺寸  | `small` \| `medium` \| `large` \| `x-large` | `large` |
| src  | 头像地址  | `string` | - |
| icon | 图标头像 | `ReactNode` | - | - |
| alt | 图像无法显示时的替代文本 |`string` | - |
| active | 激活/选中状态 |`boolean` | `false` |
| strokeColor | 激活状态的描边颜色 |`string` | - |
| strokeWidth | 激活状态的描边宽度 | `number` | - |

#### Avatar.Group
|  参数   | 说明  | 类型  | 默认值  |
|  ----   | ---- | ----  | ----  |
| shape  | 头像类型  | 同`Avatar.shape`| `circle` |
| size  | 头像尺寸  | 同`Avatar.size`| `medium` |
| maxCount | 头像组堆叠最大头像个数 | `number` | `4` |
