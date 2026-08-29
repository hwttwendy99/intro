# Image · API 参考

> 导入：`import { Image } from '@kdocs/kdesign'`

#### Image 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| src | 图片加载地址 | string | -- | -- |
| className | 标签 class 名称 | string | -- | -- |
| width | 图片宽度 | number/string | -- | -- |
| height | 图片高度 | number/string | -- | -- |
| fit | 确定图片如何适应容器框，同原生 object-fit | string | fill / contain / cover / none / scale-down | -- |
| lazy | 是否开启懒加载 | boolean | -- | -- |
| alt | 原生 alt | string | -- | -- |
| fallback | 图片加载失败时的替代占位 | string / React.ReactNode | -- | -- |
| placeholder | 图片加载前的占位内容 | string | -- | -- |
| crossOrigin | 跨域属性 | string | 'anonymous' / 'use-credentials' / '' | -- |
| scrollContainer | 懒加载时的滚动容器 | string | -- | -- |

#### Image 事件

| 参数        | 说明             | 回调参数 |
| ----------- | ---------------- | -------- |
| onLoad      | 图片加载回调     |          |
| onError     | 图片加载失败回调 |          |
| onClick     | 点击事件         |          |
| getImageRef | 获取图片元素     | ImageRef |
