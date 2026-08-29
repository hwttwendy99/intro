# KdSidePanel · API 参考

> 组件标签：`<kd-side-panel>` · 包：`@kdocs/kdesign-vue`

## `Sidepanel` Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| showClose | 展示关闭按钮值 | boolean | — | true |
| showBack | 是否返回按钮 | boolean | — | false |
| title | 标题 | string/Array | — | — |
| defaultIndex | 当title为数组时，指定默认选中的项的 | number | — | 0 |
| maxWidth | 最大宽度 | string | — | 480px |
| closeOnPressEscape | 按esc触发close事件 | boolean | — | true |

## `Sidepanel` Events

| 事件名称 | 说明 | 回调参数 |
| --- | --- | --- |
| close | 点击关闭按钮时触发 | — |
| back | 点击返回按钮时触发 | — |
| navigationChange | title为数组时生效， 当前选中标题项发生变化时触发 | (index: string) |

