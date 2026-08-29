# SidePanel · API 参考

> 导入：`import { SidePanel } from '@kdocs/kdesign'`

#### SidePanel Attributes

| 参数               | 说明                                  | 类型         | 可选值          | 默认值   |
| ------------------ | ------------------------------------- | ------------ | -------------- | -------- |
| title              | 标题                                  | string/Array | —               | 文本标题 |
| defaultIndex       | 当 title 为数组时，指定默认选中的项的 | number        | —              | 0        |
| width              | 宽度                                | string      | —               | 300px    |
| maxWidth           | 最大宽度                              | string       | —               | 480px    |
| minWidth           | 最小宽度                              | string       | —               | 36px    |
| resize             | 调整大小                              | string       | 'left'/'right'  | null     |
| showClose          | 展示关闭按钮值                        | boolean      | —               | true     |
| showBack           | 是否返回按钮                          | boolean      | —               | false    |
| closeOnPressEscape | 按 esc 触发 close 事件                | boolean      | —               | true     |
| closeOnClickModal  | 点击遮罩层是否触发 close 事件          | boolean      | —               | false    |

#### SidePanel Events

| 事件名称         | 说明                                              | 回调参数                |
| ---------------- | ------------------------------------------------- | ----------------------- |
| close            | 点击关闭按钮时触发                                | (event) => void         |
| back             | 点击返回按钮时触发                                | (event) => void         |
| navigationChange | title 为数组时生效， 当前选中标题项发生变化时触发 | (index: string) => void |

#### SidePanel Slots

| name      | 说明             | 类型                      | 可选值 | 默认值 |
| --------- | ---------------- | ------------------------- | ------ | ------ |
| titleSlot | 用于自定义标题   | ReactNode/() => ReactNode | —      | null   |
| actions   | 用于添加操作按钮 | ReactNode/() => ReactNode | —      | null   |
