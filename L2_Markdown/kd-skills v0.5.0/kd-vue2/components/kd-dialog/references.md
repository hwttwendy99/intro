# KdDialog · API 参考

> 组件标签：`<kd-dialog>` · 包：`@kdocs/kdesign-vue`

## Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| visible | 是否显示 Dialog，支持 .sync 修饰符 | boolean | — | false |
| title | Dialog 的标题，也可通过具名 slot （见下表）传入 | string | — | — |
| subtitle | Dialog 的副标题 | string | — | — |
| size | Dialog 的尺寸 | string | small/medium/large | small |
| modal | 是否需要遮罩层，若 close-on-click-modal 同时置为 false 则底层可操作（非模态框不支持） | boolean | — | true |
| draggable | 是否可拖拽 | boolean | — | false |
| modal-append-to-body | 遮罩层是否插入至 body 元素上，若为 false，则遮罩层会插入至 Dialog 的父元素上 | boolean | — | true |
| append-to-body | Dialog 自身是否插入至 body 元素上（非模态框不支持）。嵌套的 Dialog 必须指定该属性并赋值为 true | boolean | — | false |
| lock-scroll | 是否在 Dialog 出现时将 body 滚动锁定（非模态框不支持） | boolean | — | true |
| custom-class | Dialog 的自定义类名 | string | — | — |
| close-on-click-modal | 是否可以通过点击 modal 关闭 Dialog | boolean | — | true |
| close-on-press-escape | 是否可以通过按下 ESC 关闭 Dialog（无遮罩层则不支持） | boolean | — | true |
| show-close | 是否显示关闭按钮 | boolean | — | true |
| show-back | 是否显示返回按钮 | boolean | — | false |
| before-close | 关闭前的回调，会暂停 Dialog 的关闭 | function(done)，done 用于关闭 Dialog | — | — |
| destroy-on-close | 关闭时销毁 Dialog 中的元素 | boolean | — | false |
| universal | 是否应用统一版样式（灰底小字号弹窗） | boolean | — | undefined |

## Events

| 事件名称 | 说明 | 回调参数 |
| --- | --- | --- |
| open | Dialog 打开的回调 | — |
| close | Dialog 关闭的回调 | position |

## Slots

| name | 说明 |
| --- | --- |
| — | Dialog 的内容 |
| title | Dialog 标题区的内容 |
| footer | Dialog 按钮操作区的内容 |
| reference | 指定 Dialog 为非模态框，基于reference元素定位 |
| prefix | 标题区前置元素 |
| suffix | 标题区辅助元素 |
| actions | 标题区后置元素 |

