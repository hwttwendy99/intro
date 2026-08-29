# Dropdown · API 参考

> 导入：`import { Dropdown } from '@kdocs/kdesign'`

#### Dropdown 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| trigger | 触发方式 | string | `click`\|`hover`\|`contextMenu` | `click` |
| disabled | 菜单是否禁用 | `boolean` | -- | `false` |
| loading | dropdown处于loading状态，不可触发弹出层 | `boolean` |  | `false`|
| minWidth | 弹出层最小宽度 | `string`\|`number` | -- | -- |
| panel |  Dropdown 内容 | `React.ReactNode` | `HTMLElement` | -- | -- |
| panelClassName |  弹出层样式名 | `string` |-- | -- | -- |
| placement | 弹出位置 | `string` | bottomLeft | `bottom-start`\|`bottom-end`\|`top-start`\|`top-end` |
| visible | 是否展示 | Boolean | -- | false |
| hideOnEsc | 响应ESC,关闭下拉框 | boolean |  | true |
| hideOnClick | 在弹出层内点击时是否自动关闭弹出层 | boolean |  | true |
| hideOnClickOutside | 是否在点击弹出层之外的区域后关闭它 | boolean |  | true |
| onVisibleChange| 弹出层显示状态改变时调用 | `(visible: boolean) => void` | --| --|

#### Dropdown.Button 菜单按钮
> 除了和Dropdown属性相同之外，还有如下属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| type | 菜单按钮类型，和 `Button` 一致 | string | `primary`\|`secondary`\|`light` | `primary` |
| size | 菜单按钮尺寸，和 `Button` 一致 | string | `small`\|`medium`\|`large`\|`x-large` | `large` |
| className | 菜单按钮ClassName | string |-- | -- | -- |
| buttonProps | 除了`type`和`size`之外的`Button`属性, 与 `Button` 一致 | `ButtonProps` | --- | ---|

#### Dropdown.SplitButton 分裂按钮
> 除了和Dropdown属性相同之外，还有如下属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| type | Split按钮类型，和 `Button` 一致 | string | `primary`\|`secondary`\|`light` | `primary` |
| size | Split按钮尺寸，和 `Button` 一致 | string | `small`\|`medium`\|`large`\|`x-large` | `large` |
| className | Split按钮ClassName | string |-- | -- | -- |
| onLeftClick | 点击左侧按钮回调 | `(event) => {}` | -- | -- |
| triggerIcon | 右侧按钮自定义图标 | `React.ReactElement` | -- | -- |
| leftButtonProps | 左侧按钮拓展参数 | `Button`属性 | -- | -- |
| triggerProps | 右侧按钮拓展参数 | `Button`属性 | -- | -- |

#### 方法
| 名称 | 描述 |
| --- | --- |
|show()| 主动展开弹出层 |
|close()| 主动关闭弹出层 |
