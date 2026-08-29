# KdMenu · API 参考

> 组件标签：`<kd-menu>` · 包：`@kdocs/kdesign-vue`

## `MenuItemGroup` Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| title | 分组标题 | string | — | — |
| divided | 在菜单项上方增加分割线 | boolean | — | false |

## `MenuItem` Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| value | 用于存放业务数据 | — | — | — |
| index | 唯一标识（使用 number 类型和 string 类型数值相等会被认为是同一个标识 | string/number/null | — | null |
| divided | 在菜单项上方增加分割线 | boolean | — | false |
| disabled | 是否禁用 | boolean | — | false |
| selected | 是否选中 | boolean | — | false |
| close-on-select | 点击菜单项后关闭一级菜单控制(只在右键菜单情景，并且一级菜单同时设置 close-on-select 为 true 才生效) | boolean | — |  |
| subtitle | 次级标题 | string | — | — |

## Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| menu-trigger | 子菜单打开的触发方式 | string | hover / click | hover |
| selectable | 开启一级菜单可选（未选中时左边会空出勾选图标位置） | boolean | — | false |

## `Submenu` Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| value | 用于存放业务数据 | — | — | — |
| index | 唯一标识（使用 number 类型和 string 类型数值相等会被认为是同一个标识 | string/number/null | — | null |
| disabled | 禁用 | boolean | — | false |
| selectable | 开启可选（未选中时左边会空出勾选图标位置） | boolean | — | false |
| popper-append-to-body | 是否将弹出框插入至 body 元素 | boolean | — | false |
| close-on-mouseleave | 鼠标移出后关闭子级菜单控制（仅在 menu-trigger 等于 hover 情况下有效） | boolean | — | true |
| placement | 出现位置 | string | left-start/left-end/right-start/right-end | right-start |
| popper-class | Submenu 下拉框的类名 | string | — | — |
| max-width | 当前子菜单最大宽度（单位 px） | number | — | — |
| max-height | 当前子菜单最大高度（单位 px），设置此属性会导致子级菜单弹出框插入至 body 元素 | number | — | — |

## Events

| 事件名称 | 说明 | 回调参数 |
| --- | --- | --- |
| select | 菜单激活回调 | index: 选中菜单项的 index，item: 选中菜单项的实例 |
| open | submenu 打开的回调 | index: 打开的 submenu 的 index，item: 选中菜单项的实例 |
| close | submenu 关闭的回调 | index: 关闭的 submenu 的 index，item: 选中菜单项的实例 |

## Methods

| 方法名称 | 说明 | 参数 |
| --- | --- | --- |
| open | 打开指定的 submenu | index: 需要打开的 submenu 的 index |
| close | 关闭指定的 submenu | index: 需要关闭的 submenu 的 index |

