# 按需构建 · 参考

## 两个 npm 包（对应仓库 `plugins/`）

| 包名 | 作用 |
|------|------|
| `@kdocs/kdesign-vue3-auto-import-resolver` | 为 `unplugin-vue-components` / `unplugin-auto-import` 提供 **`KDesignVue3Resolver()`**，按组件名解析 `Kd*` 与指令，并注入样式 side-effect |
| `@kdocs/unplugin-kdesign-vue3` | 独立 **unplugin**，在 Vite/Webpack/Rollup 等中 transform 源码，按需处理与 `kdesign-vue3` 相关的样式等（默认 `lib: '@kdocs/kdesign-vue3'` 等，见包内 `Options`） |

## 安装（文档惯例）

**自动导入方案**需安装（devDependencies）：

- `unplugin-vue-components`
- `unplugin-auto-import`
- `@kdocs/kdesign-vue3-auto-import-resolver`

**单插件方案**需安装：

- `@kdocs/unplugin-kdesign-vue3`

## `KDesignVue3Resolver` 选项（摘要）

类型与默认值以 **`@kdocs/kdesign-vue3-auto-import-resolver`** 导出的 `KDesignVue3ResolverOptions` 为准。常见项：

| 选项 | 含义 |
|------|------|
| `importStyle` | `false` / `true` / `'css'` / `'sass'`；控制是否注入组件样式 side-effect |
| `ssr` | 为 `true` 时使用 `lib` + 主题侧 `*.css` 等路径（与 SSR 构建一致） |
| `directives` | 是否解析指令（如 `v-loading` 等对应的解析）；默认 `true` |
| `exclude` | 排除匹配的组件名 |
| `version` | 指定解析所用组件库版本（默认取已安装包版本） |

解析规则要点（实现层）：组件名需匹配 **`Kd` + 大驼峰**；`KdIcon*` 会解析到 **`@kdocs/kdesign-icons-vue3-pro`** 并带图标样式 side-effect。

## `@kdocs/unplugin-kdesign-vue3`

- 入口：`@kdocs/unplugin-kdesign-vue3/vite`、`/webpack` 等（与构建工具一致）。
- 默认选项包含 `include`/`exclude` 文件范围、`lib`、`prefix: 'Kd'` 等；进阶配置请读包内 **`Options`** 类型。

## 主题与「仅 API」

- **主题**：业务入口需引入 **`@kdocs/kdesign-theme/default.css`**（或文档/项目统一的主题入口），与是否使用上述插件无关。
- **仅 API**（如 `KdMessage`、`KdLoading` 仅 JS 调用）：**自动按需**通常**不会**为这类用法补全样式，需按文档手动引入 **`@kdocs/kdesign-vue3/es/components/<组件目录>/style/css`** 等。
