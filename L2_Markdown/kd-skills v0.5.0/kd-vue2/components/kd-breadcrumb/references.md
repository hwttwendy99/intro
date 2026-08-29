# KdBreadcrumb · API 参考

> 组件标签：`<kd-breadcrumb>` · 包：`@kdocs/kdesign-vue`

## `BreadcrumbItem` Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| value | 值，用于传递业务数据 | 不限 | — | — |
| icon | 图标 | object | — | — |
| disabled | 禁用 | boolean | — | false |
| placement | Tooltip 的出现位置 | string | top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end | top |
| max-label-width | 文本最大宽度，优先级高于kd-breadcrumb | number | — | — |
| href | 原生 href 属性 | string | — | — |
| target | 设置跳转方式 | string | _blank / _self | _blank |
| to | 路由跳转对象，同 vue-router 的 to | string / object | — | — |
| replace | 在使用 to 进行路由跳转时，启用 replace 将不会向 history 添加新记录 | boolean | — | false |
| *clickable | 开启点击态，开启后关闭跳转功能，点击标签产生 click 事件 | boolean | — | false |

## Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| size | 标签尺寸 | string | default / large | default |
| max-level | 最大限制条目数 | number | — | 4 |
| max-label-width | 文本最大宽度 | number | — | 140 |
| trigger | 菜单弹窗打开的触发方式 | string | hover / click | hover |
| max-height | 菜单弹窗最大高度（单位 px） | number | — | — |

## `BreadcrumbItem` Events

| 事件名称 | 说明 | 回调参数 |
| --- | --- | --- |
| *click | clickable=true，无路由跳转情景下的点击事件 | instance: 当前点击项 vue 实例，event: 原生点击事件数据 |
| *contextmenu | 右键点击 | instance: 当前点击项 vue 实例，event: 原生点击事件数据 |
| *mouseenter | 鼠标进入 | instance: 当前点击项 vue 实例，event: 原生点击事件数据 |
| *mouseleave | 鼠标离开 | instance: 当前点击项 vue 实例，event: 原生点击事件数据 |
| *mousedown | 鼠标点击 | instance: 当前点击项 vue 实例，event: 原生点击事件数据 |
| *mouseup | 鼠标松开 | instance: 当前点击项 vue 实例，event: 原生点击事件数据主要按钮 |

## Events

| 事件名称 | 说明 | 回调参数 |
| --- | --- | --- |
| *select | 折叠菜单激活回调，使用此事件时，kd-breadcrumb-item需要传入唯一健 index | index: 选中菜单项的 index，item: 选中菜单项的实例，item.value: 选中菜单项对应的面包屑条目的实例 |

