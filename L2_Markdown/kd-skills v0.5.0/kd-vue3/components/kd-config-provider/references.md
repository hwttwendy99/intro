# KdConfigProvider · API 参考

以下内容供按需加载；导入均来自 **`@kdocs/kdesign-vue3`**。

## 样式（按需引入）

在 **按需注册组件** 且 **未** 通过全量包或构建插件自动注入样式时，需手动引入该组件样式。路径模式为：

```text
@kdocs/kdesign-vue3/es/components/<组件目录名>/style/css
```

本组件目录名为 **`config-provider`**，示例：

```ts
import '@kdocs/kdesign-vue3/es/components/config-provider/style/css'
```

若构建链路要求 **CommonJS** 产物，可将 **`es`** 换为 **`lib`**：

```ts
import '@kdocs/kdesign-vue3/lib/components/config-provider/style/css'
```

使用 **Vite / webpack** 等时，请确保 `css` 侧参与打包；具体以当前工程配置为准。

## 类型导入示例

```ts
import type {
  ConfigProviderInstance,
  ConfigProviderProps,
  ExperimentalFeatures,
  TextDirection,
} from '@kdocs/kdesign-vue3'
```

## `KdConfigProvider` Props

| 属性 | 说明 | 类型 / 约束 | 默认值 |
|------|------|----------------|--------|
| `a11y` | 是否启用无障碍相关能力 | `boolean` | `true` |
| `locale` | 语言包对象 | `Language`（来自 locale 包） | — |
| `size` | 全局组件尺寸 | 尺寸枚举 | — |
| `button` | 按钮默认配置 | `{ autoInsertSpace?: boolean }` | — |
| `experimentalFeatures` | 实验特性 | `ExperimentalFeatures` | — |
| `keyboardNavigation` | 是否处理键盘导航 | `boolean` | `true` |
| `message` | 全局 **Message** 配置 | `{ max?: number }` | — |
| `z-index` | 全局初始 z-index | `number` | — |
| `namespace` | 样式类名前缀 | `string` | `kdv` |
| `popper` | Popper 全局配置 | `{ getPopperContainer?: HTMLElement \| string }` | 对象默认含未定义的容器 |
| `firstDayOfWeek` | DatePicker 全局周起始日（`1` = 周一，`7` = 周日） | `number`（`1`–`7`） | `1` |
| `direction` | 全局文字方向（RTL/LTR 支持）；设置后同步写入文档根 `dir` | `TextDirection`（`'ltr' \| 'rtl'`） | — |

**`popper`** 的具体字段与默认值以 **`ConfigProviderProps['popper']`** 及运行时为准。

## `KdConfigProvider` Slots

| 名称 | 说明 |
|------|------|
| `default` | 子应用 / 子树；**作用域参数**：`config`（全局配置对象） |

## 实例类型

**`ConfigProviderInstance`** 可用于 **`ref`** 标注；若需调用实例方法，以当前版本导出为准。
