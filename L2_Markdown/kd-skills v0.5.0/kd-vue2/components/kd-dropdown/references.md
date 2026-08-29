# KdDropdown · API 参考

> 组件标签：`<kd-dropdown>` · 包：`@kdocs/kdesign-vue`

## Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| trigger | 一级菜单打开的触发方式 | string | hover / click / contextmenu | click |
| menu-trigger | 子菜单打开的触发方式 | string | hover / click | hover |
| reference | trigger 等于 contextmenu 时，为右键菜单可点区域节点 id；其它情况为触发元素节点 | — | — | — |
| disabled | 禁用 | boolean | — | false |
| selectable | 开启可选 | boolean | — | false |
| popper-append-to-body | 是否将弹出框插入至 body 元素 | boolean | — | false |
| close-on-select | 点击菜单项后关闭一级菜单控制 | boolean | — | true |
| loading | 加载中状态 | boolean | — | auto |
| loading-text | 加载时显示的文字 | string | — | 加载中 |
| placement | 出现位置 | string | top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end | bottom-start |
| popper-class | 一级菜单下拉框的类名 | string | — | — |
| max-width | 一级菜单最大宽度（单位 px） | number | — | — |
| max-height | 一级菜单最大高度（单位 px） | number | — | 600 |

## Events

| 事件名称 | 说明 | 回调参数 |
| --- | --- | --- |
| select | 菜单激活回调 | index: 选中菜单项的 index，item: 选中菜单项的实例 |
| open | 一级菜单打开 | — |
| close | 一级菜单关闭 | — |

## Methods

| 方法名称 | 说明 | 参数 |
| --- | --- | --- |
| show | 打开一级菜单 | — |
| hide | 关闭一级菜单 | — |

