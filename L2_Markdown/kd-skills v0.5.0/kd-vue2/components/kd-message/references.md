# KdMessage · API 参考

> 组件标签：`<kd-message>` · 包：`@kdocs/kdesign-vue`

## Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| message | 消息文字 | string / VNode | — | — |
| type | 主题 | string | success/warning/info/error/loading/default(default值为普通类型传空即可) | default |
| duration | 显示时间, 毫秒。设为 0 则不会自动关闭 | number | — | 3000 |
| showClose | 是否显示关闭按钮 | boolean | — | false |
| top | Message 距离窗口顶部的偏移量 | number | — | 72 |
| getContainer | 自定义容器 | HTMLElement | — | body |
| actions | 自定义按钮区域 | VNode / undefined | — | undefined |

