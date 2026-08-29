# KdSelect / KdOption / KdOptionGroup · API 参考

以下内容供按需加载；导入均来自 **`@kdocs/kdesign-vue3`**。

## 样式（按需引入）

在 **按需注册组件** 且 **未** 通过全量包或构建插件自动注入样式时，需手动引入该组件样式。路径模式为：

```text
@kdocs/kdesign-vue3/es/components/<组件目录名>/style/css
```

本组件目录名为 **`select`**，示例：

```ts
import '@kdocs/kdesign-vue3/es/components/select/style/css'
```

若构建链路要求 **CommonJS** 产物，可将 **`es`** 换为 **`lib`**：

```ts
import '@kdocs/kdesign-vue3/lib/components/select/style/css'
```

使用 **Vite / webpack** 等时，请确保 `css` 侧参与打包；具体以当前工程配置为准。

## 类型导入示例

```ts
import type {
  SelectDropdownProps,
  SelectInstance,
  SelectModelValue,
  SelectOverflowTooltip,
  SelectProps,
} from '@kdocs/kdesign-vue3'
```

`options` 数组单项字段（`value`、`label`、`disabled`、`prefix`、`suffix` 等）与 **`SelectProps['options']`** 元素类型一致；子组件 props 类型可从模板与 **`KdOption` / `KdOptionGroup`** 声明处推断。

## `KdSelect` Props

### 值与选项

| 属性 | 说明 | 类型 / 约束 | 默认值 |
|------|------|----------------|--------|
| `model-value` / `v-model` | 绑定值 | `string` \| `number` \| `boolean` \| `object` \| `null` \| `undefined` \| 数组（多选） | — |
| `options` | 快捷选项列表，优先级低于默认插槽 | 见 **`SelectProps['options']`** | `[]` |
| `multiple` | 是否多选 | `boolean` | `false` |
| `multiple-limit` | 多选最多可选数，`0` 表示不限制 | `number` | `0` |

### 交互与状态

| 属性 | 说明 | 类型 / 约束 | 默认值 |
|------|------|----------------|--------|
| `disabled` | 是否禁用 | `boolean` | `false` |
| `readonly` | 是否只读 | `boolean` | `false` |
| `clearable` | 是否可清空（单选） | `boolean` | `false` |
| `filterable` | 是否可搜索 | `boolean` | `false` |
| `allow-create` | 是否允许创建新条目 | `boolean` | `false` |
| `loading` | 远程加载中 | `boolean` | `false` |
| `error` | 错误态样式 | `boolean` | `false` |
| `validate-event` | 值变更时是否触发表单校验 | `boolean` | `true` |

### 搜索与远程

| 属性 | 说明 | 类型 / 约束 | 默认值 |
|------|------|----------------|--------|
| `filter-method` | 自定义本地过滤 `(query: string) => void` | `function` | — |
| `remote` | 是否远程搜索 | `boolean` | `false` |
| `remote-method` | 远程搜索（需 `remote` + `filterable`）`(query: string) => void` | `function` | — |
| `debounce-ms` | 搜索防抖（毫秒） | `number` | `200` |
| `clear-query-on-select` | 选中后是否清空搜索关键字；`false` 适合远程多选保留关键词 | `boolean` | `true` |

### 文案与展示

| 属性 | 说明 | 类型 / 约束 | 默认值 |
|------|------|----------------|--------|
| `placeholder` | 占位 | `string` | 国际化默认 |
| `loading-text` | 加载中文案 | `string` | 国际化默认 |
| `no-match-text` | 无匹配 | `string` | 国际化默认 |
| `no-data-text` | 无数据 | `string` | 国际化默认 |
| `collapse-tags` | 多选折叠为 `+n` | `boolean` | `false` |
| `max-collapse-tags` | 折叠前最多展示的 tag 数（`collapse-tags` 为 true 时） | `number` | `1` |
| `max-tag-width` | 多选时每个 tag 最大宽度（px） | `number` | — |
| `overflow-tooltip` | 单选文案溢出是否 Tooltip，可传 `{ placement }` | `boolean` \| `object` | `true` |

### 尺寸与布局

| 属性 | 说明 | 类型 / 约束 | 默认值 |
|------|------|----------------|--------|
| `size` | 尺寸 | `medium` \| `large` | `medium` |
| `input-width` | 输入区宽度（**`style.width` 优先**） | `number` \| `auto` | `280` |
| `autocomplete` | 原生 `autocomplete` | `string` | `off` |

### 下拉与加载更多

| 属性 | 说明 | 类型 / 约束 | 默认值 |
|------|------|----------------|--------|
| `dropdown-props` | 下拉层：`popperClass`、`width`、`maxHeight`、`showAfter`、`hideAfter`、`teleported` 等 | `SelectDropdownProps` | `{}` |
| `load-more-method` | 选项列表滚动到底时触发，返回 `Promise`；不传则无加载更多 | `(query: string) => Promise<unknown>` | — |

## `KdSelect` Emits

| 事件名 | 载荷 |
|--------|------|
| `update:modelValue` | 当前值 |
| `change` | 当前值 |
| `visible-change` | 下拉是否展开 `boolean` |
| `remove-tag` | 多选移除的 `value` |
| `clear` | 清空（可清空单选） |
| `blur` | `FocusEvent` |
| `focus` | `FocusEvent` |

## `KdSelect` Slots

| 名称 | 说明 |
|------|------|
| `default` | 选项区（`kd-option` / `kd-option-group`） |
| `content` | 单选模式下展示已选文案（非搜索态）；作用域参数：`placeholder`、`selected-label` |
| `prefix` | 触发区前缀 |
| `suffix` | 触发区后缀 |
| `loading` | 自定义加载中区域 |
| `empty` | 无匹配 / 空数据时自定义内容（非 loading 时） |

## `KdSelect` 实例类型

**`SelectInstance`** 对应组件实例类型；若需 **ref** 类型标注，请使用：

```ts
import type { SelectInstance } from '@kdocs/kdesign-vue3'

const selectRef = ref<SelectInstance>()
```

当前实现未通过 **`defineExpose`** 暴露实例方法；若类型文件中列出方法，以 **`@kdocs/kdesign-vue3`** 导出为准。

## `KdOption` Props

| 属性 | 说明 | 类型 / 约束 | 默认值 |
|------|------|----------------|--------|
| `value` | 选项值（必填） | `string` \| `number` \| `boolean` | — |
| `label` | 展示文案（必填） | `string` | — |
| `disabled` | 禁用 | `boolean` | `false` |
| `prefix` | 前缀（字符串或组件） | `string` \| `Component` | — |
| `suffix` | 后缀（字符串或组件） | `string` \| `Component` | — |

## `KdOption` Slots

| 名称 | 说明 |
|------|------|
| `prefix` | 覆盖 `prefix` prop |
| `suffix` | 覆盖 `suffix` prop |

## `KdOptionGroup` Props

| 属性 | 说明 | 类型 / 约束 | 默认值 |
|------|------|----------------|--------|
| `label` | 分组标题（必填） | `string` | — |
| `disabled` | 禁用组内选项 | `boolean` | `false` |

## `KdOptionGroup` Slots

| 名称 | 说明 |
|------|------|
| `default` | 组内 `kd-option` |

## 其它导出名称

- **`KdSelectOption`**、**`KdSelectOptionGroup`** 为 **`KdOption`**、**`KdOptionGroup`** 的兼容别名，新代码建议用 **`KdOption`** / **`KdOptionGroup`**。
