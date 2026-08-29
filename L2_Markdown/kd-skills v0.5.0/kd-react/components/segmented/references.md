# Segmented · API 参考

> 导入：`import { Segmented } from '@kdocs/kdesign'`

#### Segmented

##### Props

| 参数 | 说明 | 类型 | 是否必须 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| options | 选项列表，支持复杂类型和简单类型 | `Array<string︱number︱(SegmentedItemProps & SegmentedItemEvents)>` | ✔️ | — | — |
| size | 按钮尺寸 | `ButtonSize` | ✖️ | `small` <br /> `medium` <br /> `large` <br /> `x-large` | `medium` |
| multi | 是否多选 | `boolean` | ✖️ | — | — |
| active | 初始激活项，多选传数组 | `string︱number︱(string︱number)[]` | ✖️ | — | — |

##### Events

| 事件名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| onChange | 选中值发生变化时触发 | `(value: null︱string︱number︱(string︱number)[]) => void` | — |

##### Methods

| 方法名        | 说明           | 类型                                              |
| ------------- | -------------- | ------------------------------------------------- |
| setItemActive | 手动修改激活项 | `(name: string︱number, active: boolean) => void` |

#### Segmented.Item

##### Props

| 参数     | 说明                           | 类型             | 是否必须 | 可选值 | 默认值 |
| -------- | ------------------------------ | ---------------- | -------- | ------ | ------ |
| name     | 名称，唯一标识                 | `string︱number` | ✔️       | —      | —      |
| text     | 展示文案，超过五个字则省略展示 | `string`         | ✖️       | —      | —      |
| icon     | 选项按钮图标                   | `ReactElement`   | ✖️       | —      | —      |
| disabled | 是否禁用                       | `boolean`        | ✖️       | —      | false  |

##### Events

| 事件名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| onChange | 选中值发生变化时触发 | `(name: string︱number, active: boolean) => void` | — |
| onBeforeChange | 选中值发生变化前触发（受控模式） | `() => promise<void>` | — |

#### Segmented.Controller

##### Props

| 参数 | 说明 | 类型 | 是否必须 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| size | 按钮尺寸 | `ButtonSize` | ✖️ | `small` <br /> `medium` <br /> `large` <br /> `x-large` | `medium` |
| multi | 是否多选 | `boolean` | ✖️ | — | — |
| active | 初始激活项，多选传数组 | `string︱number︱(string︱number)[]` | ✖️ | — | — |

##### Events

| 事件名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| onChange | 选中值发生变化时触发 | `(value: null︱string︱number︱(string︱number)[]) => void` | — |

##### Methods

| 方法名        | 说明           | 类型                                              |
| ------------- | -------------- | ------------------------------------------------- |
| setItemActive | 手动修改激活项 | `(name: string︱number, active: boolean) => void` |
