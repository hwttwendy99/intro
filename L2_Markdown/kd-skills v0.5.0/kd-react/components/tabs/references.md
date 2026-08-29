# Tabs · API 参考

> 导入：`import { Tabs } from '@kdocs/kdesign'`

#### Tabs

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| items | 需要配置的选项卡内容数组 | `ITabItem[]` | -- | [] |
| indicator | 自定义指示条样式 | `React.CSSProperties` | -- | null |
| animated | 选项卡切换过程中是否使用动画 | boolean | -- | true |
| activeKey | 当前激活 tab 面板的 key | string | -- | -- |
| defaultActiveKey | 默认选中的标签选项卡，如不指定默认选择第一个 | string | -- | -- |
| type | 标签页类型 | `line` \| `card ` | -- | `line` |
| size | 有三个尺寸可供选择 | `small` \| `middle` \| `large ` | -- | `middle` |
| position | 选项卡位置（提供水平/垂直两种类型） | `horizontal` \| `vertical` | -- | `horizontal` |
| destroyOnHide | 被隐藏时是否销毁 DOM 结构 | boolean | -- | false |
| style | tab bar 的样式对象 | `React.CSSProperties` | -- | -- |
| onChange | 切换选项卡面板的回调 | `(activeKey: string) => void ` | -- | -- |
| onTabClick | 点击选项卡的回调 | `(key: string, e: MouseEvent) => void` | -- | -- |

#### ITabItem

| 参数          | 说明                           | 类型              | 可选值  | 默认值 |
| ------------- | ------------------------------ | ----------------- | ------- | ------ |
| key           | 对应的唯一 key                 | string            | --      | --     |
| label         | 标签页栏显示文字               | `ReactNode`       | --      | --     |
| prefix        | 显示前置内容                   | `ReactNode`       | --      | --     |
| suffix        | 显示后置内容                   | `ReactNode`       | --      | --     |
| children      | 选项卡对应的显示内容           | `ReactNode`       | --      | --     |
| destroyOnHide | 被隐藏时是否销毁 DOM 结构      | boolean           | --      | false  |
| disabled      | 禁用某一项                     | boolean           | --      | false  |
| type          | 页签类型，默认为非图标类型页签 | `label` \| `icon` | `label` |
