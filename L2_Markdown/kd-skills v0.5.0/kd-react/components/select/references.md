# Select · API 参考

> 导入：`import { Select } from '@kdocs/kdesign'`

#### Select

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| allowClear | 是否允许清空 | `boolean` | - | false |
| allowCreate | 是否允许创建条目 | `boolean` | - | false |
| className | 自定义容器类名 | `string` | - | - |
| defaultValue | 默认选中的值 | `SelectValue / SelectValue[]` | - | - |
| disabled | 是否禁用组件 | `boolean` | - | false |
| dropDownMaxHeight | 下拉菜单最大高度 | `number` | - | - |
| empty | 空状态展示内容 | `React.ReactNode` | - | - |
| filterOption | 自定义筛选逻辑 | `boolean / (inputValue: string, option: ISelectOption) => boolean` | - | - |
| loading | 加载状态 | `boolean` | - | false |
| maxCount | 最大选中数量（多选模式） | `number` | - | - |
| maxShowCount | 最大展示标签数量（多选模式） | `number` | - | - |
| mode | 选择模式 | `'single' / 'multiple'` | `single`/`multiple` | single |
| options | 选择器选项 | `ISelectOption[]` | - | - |
| placeholder | 占位文本 | `string` | - | - |
| placement | 下拉菜单弹出位置 | `'bottom-start' / 'bottom-end' / 'top-start' / 'top-end'` | - | - |
| popupClassName | 下拉菜单容器类名 | `string` | - | - |
| popupMatchSelectWidth | 下拉菜单匹配选择框宽度 | `boolean / number` | - | true |
| showSearch | 是否显示搜索框 | `boolean` | - | false |
| size | 选择器尺寸 | `'large' / 'medium' / 'small'` | `large`/`medium`/`small` | medium |
| status | 校验状态 | `'error' / 'warning'` | `error`/`warning` | - |
| style | 自定义内联样式 | `React.CSSProperties` | - | - |
| value | 当前选中的值 | `SelectValue / SelectValue[]` | - | - |
| onChange | 值变化时的回调 | `(values: SelectValue / SelectValue[]) => void` | - | - |
| onClear | 清除按钮点击回调 | `() => void` | - | - |
| onDropdownVisibleChange | 下拉菜单显示状态变化回调 | `(open: boolean) => void` | - | - |
| onFocus | 获得焦点时回调 | `() => void` | - | - |
| onBlur | 失去焦点时回调 | `() => void` | - | - |
| onSearch | 搜索框输入时回调 | `(inputValue: string) => void` | - | - |
| onSelect | 选中选项时回调 | `(value: SelectValue, option: ISelectOption) => void` | - | - |

#### Select.Option

| 参数      | 说明         | 类型          | 默认值 |
| --------- | ------------ | ------------- | ------ |
| className | 菜单项类名   | `string`      |
| disabled  | 是否禁用选项 | `boolean`     |
| value     | 选项的值     | `SelectValue` |

#### Select.Group

| 参数      | 说明     | 类型     | 默认值 |
| --------- | -------- | -------- | ------ |
| className | 分组类目 | `string` |
| title     | 分组标题 | `string` |

#### 类型定义

`SelectValue`

```typescript
type SelectValue = string | number;
```

`ISelectOption`

```typescript
interface ISelectOptionType {
  label?: string | React.ReactNode; // 标签名
  title?: string; // 区分是否为分组title
  key?: string;
  value: SelectValue; // label的值
  disabled?: boolean;
  className?: boolean;
}

interface ISelectOption extends ISelectOptionType {
  options?: ISelectOptionType[];
  isCreate?: boolean;
}
```
