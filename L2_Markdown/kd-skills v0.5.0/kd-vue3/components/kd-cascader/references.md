# KdCascader · 参考

## 概述

级联选择器，适用于具有层级关系的数据选择场景，支持单选、多选、搜索、懒加载、标签折叠等能力。

## 样式引入

```ts
import '@kdocs/kdesign-vue3/es/components/cascader/style/css'
// lib 路径
import '@kdocs/kdesign-vue3/lib/components/cascader/style/css'
```

## Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `modelValue` / `v-model` | `CascaderValue \| null` | — | 绑定值 |
| `options` | `CascaderOption[]` | `[]` | 选项数据 |
| `props` | `CascaderProps` | `{}` | 级联配置项，见下方 CascaderProps 表 |
| `size` | `'medium' \| 'large'` | `'medium'` | 输入框尺寸 |
| `placeholder` | `string` | — | 输入框占位文本 |
| `disabled` | `boolean` | `false` | 是否禁用 |
| `readonly` | `boolean` | `false` | 是否只读 |
| `loading` | `boolean` | `false` | 是否显示加载状态 |
| `status` | `'' \| 'error'` | `''` | 输入框状态 |
| `clearable` | `boolean` | `false` | 是否可清空 |
| `clearIcon` | `Component` | `ClearNormal` | 自定义清空图标 |
| `filterable` | `boolean` | `false` | 是否可搜索 |
| `filterMethod` | `(node: CascaderNode, keyword: string) => boolean` | 包含关键字判断 | 自定义搜索逻辑 |
| `separator` | `string` | `' / '` | 路径分隔符 |
| `showAllLevels` | `boolean` | `true` | 单选时输入框是否显示完整路径 |
| `collapseTags` | `boolean` | `false` | 多选时是否折叠标签 |
| `maxCollapseTags` | `number` | `1` | 折叠标签时最多显示几个标签，需配合 `collapseTags` |
| `collapseTagsTooltip` | `boolean` | `false` | 鼠标悬浮折叠标签时是否弹出完整标签列表，需配合 `collapseTags` |
| `maxCollapseTagsTooltipHeight` | `string \| number` | — | 折叠标签 tooltip 最大高度（px），需配合 `collapseTagsTooltip` |
| `debounce` | `number` | `300` | 搜索输入防抖延迟（ms） |
| `beforeFilter` | `(value: string) => boolean \| Promise<any>` | `() => true` | 搜索前钩子，返回 `false` 或 rejected Promise 时终止搜索 |
| `placement` | `Placement` | `'bottom-start'` | 下拉面板位置 |
| `fallbackPlacements` | `Placement[]` | `['bottom-start', 'bottom', 'top-start', 'top', 'right', 'left']` | 下拉面板备选位置 |
| `popperClass` | `string \| object` | — | 下拉面板自定义类名 |
| `popperStyle` | `StyleValue` | — | 下拉面板自定义样式 |
| `teleported` | `boolean` | `true` | 下拉面板是否传送到 body |
| `effect` | `'light' \| 'dark'` | `'light'` | 下拉面板主题 |
| `tagType` | `string` | `'info'` | 多选标签类型 |
| `tagEffect` | `string` | `'light'` | 多选标签效果 |
| `validateEvent` | `boolean` | `true` | 是否触发表单验证 |
| `persistent` | `boolean` | `true` | 下拉关闭后是否保留 DOM |
| `showCheckedStrategy` | `'parent' \| 'child'` | `'child'` | 多选时选中值的显示策略：`child` 仅展示叶子节点，`parent` 优先展示父节点 |
| `checkOnClickNode` | `boolean` | `false` | 点击节点时是否直接勾选（多选） |
| `showPrefix` | `boolean` | `true` | 是否显示单选框 / 复选框前缀 |

### CascaderProps（`props` 配置项）

通过 `:props="{ ... }"` 传入，用于定制节点字段映射与交互行为。

| 字段 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `expandTrigger` | `'click' \| 'hover'` | `'click'` | 次级菜单展开触发方式 |
| `multiple` | `boolean` | `false` | 是否多选 |
| `checkStrictly` | `boolean` | `false` | 父子节点选中状态是否独立（不级联） |
| `emitPath` | `boolean` | `true` | 选中时是否返回路径数组；`false` 时仅返回叶子值 |
| `lazy` | `boolean` | `false` | 是否开启懒加载 |
| `lazyLoad` | `(node: CascaderNode, resolve: Resolve, reject?: Reject) => void` | — | 懒加载子节点的方法，`lazy: true` 时有效 |
| `value` | `string` | `'value'` | 节点值对应的字段名 |
| `label` | `string` | `'label'` | 节点标签对应的字段名 |
| `children` | `string` | `'children'` | 子节点对应的字段名 |
| `disabled` | `string \| isDisabled` | `'disabled'` | 节点禁用对应的字段名或判断函数 |
| `leaf` | `string \| isLeaf` | `'leaf'` | 叶子节点对应的字段名或判断函数 |
| `hoverThreshold` | `number` | `500` | `expandTrigger: 'hover'` 时的悬浮触发阈值（ms） |
| `checkOnClickNode` | `boolean` | `false` | 点击节点时是否直接勾选 |
| `checkOnClickLeaf` | `boolean` | `true` | 点击叶子节点时是否直接勾选 |
| `showPrefix` | `boolean` | `true` | 是否显示选择前缀 |

### CascaderOption 类型

```ts
interface CascaderOption {
  label?: string
  value?: string | number | Record<string, any>
  children?: CascaderOption[]
  disabled?: boolean
  leaf?: boolean
  [key: string]: unknown   // 支持自定义字段
}
```

### CascaderValue 类型

```ts
// 单选（emitPath: true）：路径数组，如 ['guangdong', 'guangzhou']
// 单选（emitPath: false）：叶子值，如 'guangzhou'
// 多选：上述两种形式的数组
type CascaderValue =
  | string | number | Record<string, any>
  | (string | number | Record<string, any>)[]
  | ((string | number | Record<string, any>) | (string | number | Record<string, any>)[])[]
```

## Emits

| 事件 | 参数 | 说明 |
|------|------|------|
| `update:modelValue` | `(value: CascaderValue \| null \| undefined)` | v-model 更新 |
| `change` | `(value: CascaderValue \| null \| undefined)` | 选中值变化时 |
| `focus` | `(event: FocusEvent)` | 输入框获焦时 |
| `blur` | `(event: FocusEvent)` | 输入框失焦时 |
| `clear` | `()` | 点击清空按钮时 |
| `visibleChange` | `(visible: boolean)` | 下拉面板显示/隐藏时 |
| `expandChange` | `(value: CascaderValue)` | 展开节点变化时（单击某一级时） |
| `removeTag` | `(value: CascaderNode['valueByOption'])` | 多选模式删除标签时 |

## Slots

| 插槽 | 参数 | 说明 |
|------|------|------|
| `default` | `{ node: CascaderNode, data: CascaderOption }` | 自定义节点内容 |
| `prefix` | — | 输入框前置内容 |
| `tag` | `{ data: Tag[], deleteTag: (tag: Tag) => void }` | 自定义多选标签区域（覆盖整个标签列表） |
| `header` | — | 下拉面板顶部区域 |
| `footer` | — | 下拉面板底部区域 |
| `empty` | — | 无选项 / 无搜索结果时的内容 |
| `suggestion-item` | `{ item: CascaderNode }` | 自定义搜索建议列表项 |

## Expose

| 名称 | 类型 | 说明 |
|------|------|------|
| `getCheckedNodes(leafOnly?: boolean)` | `CascaderNode[]` | 获取当前选中节点；`leafOnly: true` 仅返回叶子节点 |
| `cascaderPanelRef` | `CascaderPanelInstance \| null` | 内部级联面板实例 |
| `togglePopperVisible(visible?: boolean)` | `void` | 手动切换下拉面板显隐 |
| `contentRef` | `Ref` | 下拉内容区 DOM ref |
| `presentText` | `ComputedRef<string>` | 当前展示文本（单选） |
| `focus()` | `void` | 聚焦输入框 |
| `blur()` | `void` | 失焦输入框 |

## 边界行为

- **多选 + `checkStrictly: true`**：父子节点独立，可单独选中任意层级节点。
- **`emitPath: false`**：`v-model` 值为叶子节点的 `value` 而非路径数组。
- **懒加载**：根节点会在面板首次展开时触发 `lazyLoad`；子节点在展开时触发。`resolve([])` 表示无子节点（标记为叶子）。
- **`showCheckedStrategy: 'parent'`**：若父节点下所有子节点均已选中，`v-model` 中仅包含父节点。
- **`collapseTags` + `collapseTagsTooltip`**：超出 `maxCollapseTags` 的标签折叠为 `+N`，鼠标悬浮时在 tooltip 中展示完整列表。
- **搜索 + 多选**：搜索结果列表中已选项会显示勾选图标，再次点击可取消选中。
- **`beforeFilter`** 返回 `Promise` 时，仅在 Promise resolve 后执行搜索；reject 时终止搜索。
