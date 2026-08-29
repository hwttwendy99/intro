# KdNavigation · API 参考

> 组件标签：`<kd-navigation>` · 包：`@kdocs/kdesign-vue`

## Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| icon | 设置导航的前置图标，参考 Icon 组件 | object |  |  |
| disabled | 设置导航是否可用 | boolean | true / false | false |
| size | 设置导航前置图标的尺寸 | string | large / medium | medium |
| index | 导航为文本类型时，唯一标识项，用于判断哪个是激活态 | number |  |  |

## Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| size | layout为'vertical'设置图标导航图标的尺寸 | string | small / medium | small |
| type | 设置导航类型（text为文本导航，icon为图标导航） | string | text / icon |  |
| iconSize | layout为'horizontal'的导航为图标类型时，统一控制图标大小 | number |  | 16 |
| layout | 排版 | string | 'horizontal' / 'vertical' | horizontal |
| defaultActiveIndex | 导航为文本类型时，默认激活的项 | number |  | 0 |
| dropdownValue | 导航为文本类型时，有下拉菜单选中项value | string |  |  |

