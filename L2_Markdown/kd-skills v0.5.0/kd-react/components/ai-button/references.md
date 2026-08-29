# AIButton · API 参考

> 导入：`import { AIButton } from '@kdocs/kdesign'`

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| className | 类名 | `string` | - | - |
| style | 按钮样式 | `CSSProperties` | - | - |
| size | 按钮尺寸 | `string` | `small` \| `medium` \| `large` \| `x-large` | `large` |
| icon | 纯图标按钮 | `ReactNode` \| - | - | - |
| prefixIcon | 按钮前置图标 | `ReactNode` | - | - |
| suffixIcon | 按钮后置图标 | `ReactNode` | - | - |
| disabled | 按钮是否为禁用状态 | `boolean` | - | `false` |
| loading | 设置按钮 loading 状态 | `boolean` | - | `false` |
| active | 按钮是否为激活状态 | `boolean` | - | `false` |
| spin | 是否翻转下拉箭头，配合下拉按钮使用 | `boolean` | - | `true` |
| onClick | 按钮点击事件回调 | `(e: MouseEvent) => void` | - | - |
