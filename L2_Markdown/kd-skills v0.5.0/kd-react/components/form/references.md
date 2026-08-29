# Form · API 参考

> 导入：`import { Form } from '@kdocs/kdesign'`

#### Form

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| colon | 是否显示label后面的冒号（layout为vertical时不生效） | boolean | -- | true |
| disabled | 表单组件禁用，仅对kd组件生效 | boolean | -- | false |
| form | 经`Form.useForm`创建的表单实例 | FormInstance | -- | -- |
| initialValues | 表单默认值，只有初始化和重置时生效 | object | -- | -- |
| labelAlign | label标签的对齐方式 | string | `left` \| `right` | `right` |
| labelCol | label标签布局，设置标签部分位置所占比例 | number | -- | -- |
| layout | 表单布局 | string | `horizontal` \| `vertical` \| `inline` | `horizontal` |
| requiredMark | 必填样式 | boolean/string | `left` \| `right` \| `boolean` | true |
| showErrorIcon | 是否展示错误提示图标 | boolean | -- | true |
| size | 字段组件的尺寸（仅限kd组件） | string | `small` \| `medium` \| `large` | `medium` |
| validateTrigger | 字段触发校验的时机 | string | -- | `onChange` |
| wrapperCol | 输入控件的布局，设置输入控件部分位置所占比例 | number | -- | -- |
| onFieldsChange | 字段更新时触发回调事件 | (changedFields, allFields) => void | -- | -- |
| onFinish | 提交表单时且数据校验成功后的回调 | (values) => void | -- | -- |
| onFinishFailed | 提交表单时且数据校验失败后的回调 | ({ values, errorFields}) => void | -- | -- |
| onValuesChange | 字段更新时触发回调事件 | (changedFields, allFields) => void | -- | -- |

#### Form.Item

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| colon | 是否显示label后面的冒号 | boolean | -- | true |
| extra | 额外的提示信息 | React.Node | -- | -- |
| getValueFromEvent | 如何将event的值转换成字段值 | (..args: any[]) => any | -- | -- |
| htmlFor | 设置子元素label的`htmlFor`属性 | string | -- | -- |
| initialValue | 子元素默认值，和Form的`initialValues`冲突以Form的为准 | string | -- | -- |
| label | `label`标签文本，当不需要label又需要对齐时可设置null | ReactNode | -- | -- |
| labelAlign | label标签的对齐方式 | string | `left` \| `right` | `right` |
| labelCol | label标签布局，设置标签部分位置所占比例 | number | -- | -- |
| name | 字段名 | string | -- | -- |
| required | 必填样式设置 | boolean | -- | false |
| rules | 校验规则 | Rule[] | -- | -- |
| validateTrigger | 字段触发校验的时机 | string | -- | `onChange` |
| valuePropName | 子节点值的属性，如表单控件为Switch、Checkbox，则该值应为`Checked` | string | -- | `value` |
| wrapperCol | 输入控件的布局，设置输入控件部分位置所占比例 | number | -- | -- |
| layout | 表单项布局 | string | `horizontal` \| `vertical` | `horizontal` |

#### FormInstance

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| getFieldsValue | 返回表单所有字段值 | () => void | -- | -- |
| getFieldValue | 获取对应字段名的值 | (name: string) => any | -- | -- |
| resetFields | 重置一组字段到`initialValues` | (name: string) => void | -- | -- |
| setFieldValue | 设置某个表单字段的值 | (name: string, value: any) => void | -- | -- |
| setFieldsValue | 设置整个表单的字段值 | (newStore: object) => void | -- | -- |
| submit | 提交表单 | () => void | -- | -- |
| validateFields | 触发表单验证 | () => Promise | -- | -- |

#### Rule

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| len | string 类型时为字符串长度；number 类型时为确定数字 | number | -- | -- |
| max | string 类型为字符串最大长度；number 类型时为最大值 | number | -- | -- |
| message | 自定义错误信息，不设置时会使用默认模板 | string | -- | -- |
| min | string 类型为字符串最小长度；number 类型时为最小值 | number | -- | -- |
| pattern | 正则表达式匹配 | RegExp | -- | -- |
| required | 是否为必选字段 | boolean	 | -- | -- |
| validator | 自定义校验，接收Promise作为返回值 | (rule, value) => Promise	 | -- | -- |
| whitespace | 如果字段仅包含空格则校验不通过，仅对字符串生效 | boolean | -- | -- |
