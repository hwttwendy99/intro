# KdSelect · API 参考

> 组件标签：`<kd-select>` · 包：`@kdocs/kdesign-vue`

## `OptionGroup` Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| label | 分组的组名 | string | — | — |
| disabled | 是否将该分组下所有选项置为禁用 | boolean | — | false |

## `Option` Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| value | 选项的值 | string/number/object | — | — |
| label | 选项的标签，若不设置则默认与 value 相同 | string/number | — | — |
| disabled | 是否禁用该选项 | boolean | — | false |

## Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| value / v-model | 绑定值 | boolean / string / number | — | — |
| multiple | 是否多选 | boolean | — | false |
| disabled | 是否禁用 | boolean | — | false |
| value-key | 作为 value 唯一标识的键名，绑定值为对象类型时必填 | string | — | value |
| size | 输入框尺寸 | string | normal / medium / small | — |
| clearable | 是否可以清空选项 | boolean | — | false |
| multiple-limit | 多选时用户最多可以选择的项目数，为 0 则不限制 | number | — | 0 |
| autocomplete | select input 的 autocomplete 属性 | string | — | off |
| placeholder | 占位符 | string | — | 请选择 |
| filterable | 是否可搜索 | boolean | — | false |
| allow-create | 是否允许用户创建新条目，需配合 filterable 使用 | boolean | — | false |
| filter-method | 自定义搜索方法 | function | — | — |
| remote | 是否为远程搜索 | boolean | — | false |
| remote-method | 远程搜索方法 | function | — | — |
| loading | 是否正在从远程获取数据 | boolean | — | false |
| loading-text | 远程加载时显示的文字 | string | — | 加载中 |
| no-match-text | 搜索条件无匹配时显示的文字，也可以使用设置slot="empty" | string | — | 无匹配数据 |
| no-data-text | 选项为空时显示的文字，也可以使用设置slot="empty" | string | — | 无数据 |
| popper-class | Select 下拉框的类名 | string | — | — |
| reserve-keyword | 多选且可搜索时，是否在选中一个选项后保留当前的搜索关键词 | boolean | — | false |
| default-first-option | 在输入框按下回车，选择第一个匹配项。需配合 filterable 或 remote 使用 | boolean | - | false |
| popper-append-to-body | 是否将弹出框插入至 body 元素。在弹出框的定位出现问题时，可将该属性设置为 false | boolean | - | true |
| automatic-dropdown | 对于不可搜索的 Select，是否在输入框获得焦点后自动弹出选项菜单 | boolean | - | false |
| width | 输入框自定义宽度 | String | 120px | - |
| dropdown-max-height | 下拉面板最大高度，超出显示滚动条 | String | 120px | auto |
| dropdown-width | 下拉面板自定义宽度，超出宽度则自动换行。不传则下拉面板最小宽度为输入框宽度 | String | 120px | auto |
| fit-input-width | 下拉框的宽度是否与输入框相同，若配置了dropdown-width，则该配置无效 | Boolean | true/false | true |

## Events

| 事件名称 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 选中值发生变化时触发 | 目前的选中值 |
| visible-change | 下拉框出现/隐藏时触发 | 出现则为 true，隐藏则为 false |
| remove-tag | 多选模式下移除 tag 时触发 | 移除的 tag 值 |
| clear | 可清空的单选模式下用户点击清空按钮时触发 | — |
| blur | 当 input 失去焦点时触发 | (event: Event) |
| focus | 当 input 获得焦点时触发 | (event: Event) |

## Slots

| name | 说明 |
| --- | --- |
| — | Option 组件列表 |
| prefix | Select 组件头部内容 |
| empty | 无选项时的列表 |

## Methods

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| focus | 使 input 获取焦点 | - |
| blur | 使 input 失去焦点，并隐藏下拉框 | - |

