---
name: kd-components
description: KDesign 组件精确规格与 HTML 仿真代码：按钮、表单、表格、弹窗、导航、反馈等。使用具体组件时加载。Keywords：button, input, table, modal, tag, menu, tabs, tooltip, form.
version: 2.0.0
---

# KDesign 组件规格

> **设计决策** → 参考 [kd-design-language/component-decision.md](../kd-design-language/component-decision.md)
> **生成后验证** → 参考 [kd-design-qa/checklist.md](../kd-design-qa/checklist.md)

## 核心工作流（v2：调用模式）

生成 HTML 设计稿时，组件样式从 `_css/` 目录**直接复制**，不再从 Markdown 中重写。

### 步骤

1. **确定组件清单**：根据页面需求，列出用到的组件
2. **复制 CSS 到 `<style>`**：
   - 必须复制 `_css/tokens.css`（`:root` 变量）
   - 必须复制 `_css/reset.css`（全局重置）
   - 按需复制用到的组件 CSS（如 `_css/button.css`、`_css/input.css`）
   - 或者直接复制 `_css/all.css`（包含所有组件）
3. **阅读组件 Markdown**：了解 HTML 模板和选型指导
4. **编写 HTML 结构**：使用正确的 `kd-*` class 名
5. **编写布局 CSS**：仅在 `<style>` 中补充页面级布局样式
6. **引入交互脚本**：在 `</body>` 前引入 `_css/interactions.js`（内联或外链）。该脚本覆盖 Tabs、Navigation 侧边导航、Select 下拉选择、Checkbox、Radio、Switch 的点击交互。Select 需在根元素添加 `data-select-mode="single|multiple"` 属性。

### 关键原则

- **组件 CSS 是确定性资产**：从 `_css/*.css` 文件原样复制，不得修改组件样式值
- **布局 CSS 是创造性工作**：根据页面需求编写 grid/flex 布局、间距、定位
- **两者分离**：组件样式和布局样式在 `<style>` 中用注释分隔

```html
<style>
  /* ── KDesign Token 变量（复制自 _css/tokens.css） ── */
  :root { ... }

  /* ── 全局重置（复制自 _css/reset.css） ── */
  ...

  /* ── 组件样式（复制自 _css/*.css） ── */
  ...

  /* ── 页面布局样式（按需编写） ── */
  ...
</style>
```

## CSS 注册表（_css/ 目录）

| 文件 | 内容 |
|------|------|
| `_css/tokens.css` | 完整 `:root` 变量定义 |
| `_css/reset.css` | 全局重置 |
| `_css/all.css` | 所有组件 CSS 拼接版（下方文件的合集） |
| `_css/interactions.js` | 交互脚本（Tabs/Navigation/Select/Checkbox/Radio/Switch 交互） |
| `_css/button.css` | Button 按钮 |
| `_css/input.css` | Input 输入框 |
| `_css/textarea.css` | Textarea 文本域 |
| `_css/checkbox.css` | Checkbox 复选框 |
| `_css/radio.css` | Radio 单选框 |
| `_css/switch.css` | Switch 开关 |
| `_css/select.css` | Select 下拉选择 |
| `_css/table.css` | Table 表格 |
| `_css/modal.css` | Modal 弹窗 |
| `_css/tabs.css` | Tabs 选项卡 |
| `_css/tag.css` | Tag 标签 |
| `_css/menu.css` | Menu 下拉菜单 |
| `_css/navigation-sidebar.css` | Navigation 侧边导航 |
| `_css/link.css` | Link 链接 |
| `_css/form.css` | Form 表单 |
| `_css/divider.css` | Divider 分割线 |
| `_css/tooltip.css` | Tooltip 文字提示 |
| `_css/popover.css` | Popover 气泡弹框 |
| `_css/message.css` | Message 全局提示 |
| `_css/badge.css` | Badge 角标 |
| `_css/loading.css` | Loading 加载 |
| `_css/progress.css` | Progress 进度条 |
| `_css/segmented.css` | Segmented 分段控制器 |
| `_css/skeleton.css` | Skeleton 骨架屏 |
| `_css/rate.css` | Rate 评分 |
| `_icons/arrow_down_s.svg` | Select 下拉箭头（收起态，向下） |
| `_icons/arrow_up_s.svg` | Select 下拉箭头（展开态，向上） |
| `_icons/success_normal.svg` | Message 成功图标（实心绿圆 + 白勾） |
| `_icons/mistake_normal.svg` | Message 错误图标（实心红圆 + 白×） |
| `_icons/warn_normal.svg` | Message 警告图标（实心橙三角 + 白!） |
| `_icons/info_normal.svg` | Message 信息图标（实心蓝圆 + 白i） |
| `_icons/loading.svg` | Loading 渐变弧线图形 |
| `_icons/magnifier.svg` | 搜索图标（Input 搜索后缀） |

## 全局规则

### 默认字号警告

大多数组件的默认 font-size 是 **13px**（`--kd-font-size-sub-base`），**不是 14px**。

例外：Table body（14px）、Form label（14px）、Tabs middle label（14px）。

### HTML 仿真规范

1. 所有组件使用 `kd-[component]` 类名前缀
2. 组件边界用 HTML 注释标注：`<!-- [ComponentName: variant size] -->`
3. 图标使用内联 SVG（16x16, stroke-width 1.3, round cap）
4. **`<button>` 元素必须显式重置**：`border: none; background: transparent;`（浏览器默认会加灰色边框）
5. **伪元素 `::before`/`::after` 必须加 `box-sizing: content-box`**（防止全局 `border-box` 导致用 border 模拟的图形变形）
6. **表单控件（Checkbox/Radio/Switch）外层必须用 `<label>` 包裹**：点击 label 自动 toggle 内部 input，`interactions.js` 会同步更新 `.is-checked` class
7. **Tabs/Navigation/Select/Checkbox/Radio/Switch 需引入 interactions.js 才能响应点击**：在 `</body>` 前内联或外链该脚本。Select 还需在根元素添加 `data-select-mode` 属性

### 组件尺寸体系

| Size | 高度 | 典型场景 |
|---|---|---|
| Small (sm) | 24px | 表格行内操作、紧凑标签 |
| Medium (m) | 28px | 工具栏、弹窗内表单 |
| Large (lg) | 32px | 页面级操作（默认） |
| X-Large (xl) | 36px | 引导按钮（极少使用） |

**同一区域内所有控件必须保持同一 size。**

### 交互状态映射

| 状态 | 背景变化 | 边框变化 | 文字变化 |
|---|---|---|---|
| Normal | 组件默认 | 组件默认 | 组件默认 |
| Hover | 浅一档或 `var(--kd-color-state-hover)` | 深一档 | 不变 |
| Active/Pressed | 深一档或 `var(--kd-color-state-pressed)` | 不变 | 不变 |
| Focus | 不变 | `var(--kd-color-line-public)` | 不变 |
| Disabled | 不变 | 不变 | `opacity: var(--kd-opacity-disabled)` |
| Error | 不变 | `var(--kd-color-error-normal)` | `var(--kd-color-text-error)` |

## 组件文档索引（选型指导 + HTML 模板）

### 表单组件

| 文件 | 组件 | CSS |
|---|---|---|
| [button.md](button.md) | Button 按钮 | `_css/button.css` |
| [input.md](input.md) | Input 输入框 | `_css/input.css` |
| [textarea.md](textarea.md) | Textarea 文本域 | `_css/textarea.css` |
| [select.md](select.md) | Select 下拉选择 | `_css/select.css` |
| [checkbox.md](checkbox.md) | Checkbox 复选框 | `_css/checkbox.css` |
| [radio.md](radio.md) | Radio 单选框 | `_css/radio.css` |
| [switch.md](switch.md) | Switch 开关 | `_css/switch.css` |
| [form.md](form.md) | Form 表单 | `_css/form.css` |

### 数据展示

| 文件 | 组件 | CSS |
|---|---|---|
| [table.md](table.md) | Table 表格 | `_css/table.css` |
| [tag.md](tag.md) | Tag 标签 | `_css/tag.css` |
| [badge.md](badge.md) | Badge 角标 | `_css/badge.css` |
| [progress.md](progress.md) | Progress 进度条 | `_css/progress.css` |
| [skeleton.md](skeleton.md) | Skeleton 骨架屏 | `_css/skeleton.css` |
| [rate.md](rate.md) | Rate 评分 | `_css/rate.css` |

### 导航

| 文件 | 组件 | CSS |
|---|---|---|
| [navigation-sidebar.md](navigation-sidebar.md) | Navigation 侧边导航 | `_css/navigation-sidebar.css` |
| [menu.md](menu.md) | Menu 下拉菜单 / 右键菜单 | `_css/menu.css` |
| [tabs.md](tabs.md) | Tabs 选项卡 | `_css/tabs.css` |
| [segmented.md](segmented.md) | Segmented 分段控制器 | `_css/segmented.css` |

### 反馈

| 文件 | 组件 | CSS |
|---|---|---|
| [modal.md](modal.md) | Modal 弹窗 | `_css/modal.css` |
| [message.md](message.md) | Message 全局提示 | `_css/message.css` |
| [tooltip.md](tooltip.md) | Tooltip 文字提示 | `_css/tooltip.css` |
| [popover.md](popover.md) | Popover 气泡弹框 | `_css/popover.css` |
| [loading.md](loading.md) | Loading 加载 | `_css/loading.css` |

### 布局

| 文件 | 组件 | CSS |
|---|---|---|
| [divider.md](divider.md) | Divider 分割线 | `_css/divider.css` |
| [link.md](link.md) | Link 链接 | `_css/link.css` |
