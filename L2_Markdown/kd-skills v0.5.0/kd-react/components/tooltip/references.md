# Tooltip · API 参考

> 导入：`import { Tooltip } from '@kdocs/kdesign'`

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| trigger | 触发方式 | string | `hover`\| `click` | `hover` |
| className | 弹出层样式名 | string |  |  |
| title | 显示的内容 | string / HTMLElement | -- | -- |
| placement | 弹层的出现方向 | string | top, top-start, top-end, bottom, bottom-start, bottom-end, left, left-start, left-end, right, right-start, right-end | bottom |
| visible | 是否展示 | Boolean | -- | false |
| disabled | Tooltip 是否可用 | Boolean | -- | false |
| zIndex | 弹层层级 | number | -- | 1000 |
| maxWidth | 弹层最大宽度 | number | -- | 320 |
| onVisibleChange | 显隐回调 | (visible: boolean)=>{} | -- | -- |
| delay | 延迟展示时间，单位毫秒 | number | -- | 400 |
| delayClose | 延迟关闭时间，单位毫秒 | number | -- | 100 |
| fullViewport | 沙盒环境下是否将弹出层提升到外部 | boolean | -- | true |
