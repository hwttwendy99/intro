---
name: saas-admin-console
description: SaaS - 管理后台 (Admin Console)。用于生成、质检管理后台 PC 页面，包含表格/列表页、顶部信息栏、左侧导航、面包屑、描述栏、命令栏、表格、分页、交互状态等。
version: 0.5.15
business-line: saas
product: admin-console
tech-stack: vue2
platform: web
depends-on:
  - kd-design-language
  - kd-foundation
  - kd-layout
  - kd-patterns/modal-pattern
pages:
  - id: table-list-page
    name: 表格列表页
    keywords: [管理后台, 表格页, 列表页, 后台管理, 数字办公平台, Admin Console]
  - id: dashboard
    name: Dashboard
    keywords: [管理后台, Dashboard, 仪表盘, 概览, 数据看板, Admin Console]
    status: draft
  - id: settings-list
    name: 设置列表页
    keywords: [管理后台, 设置, Settings, 配置, 系统设置, Admin Console]
    status: draft
---

# 管理后台 (Admin Console)

## 产品概述

管理后台是面向企业管理员的 PC 端后台管理系统，包含表格列表页、Dashboard、设置列表页等多种页面类型。产品实际技术栈为 Vue2。

**输出目标说明**：本场景同时服务于两种输出：
- **HTML 设计稿**（默认）：加载 `kd-components`，组件 CSS 从 `kd-components/_css/` 直接复制
- **Vue2 代码**：当用户明确要求时加载 `kd-vue2`

AI 应根据用户实际需求判断输出目标；未明确输出目标时，按 `AGENTS.md` 主动询问用户。

## 使用流程

1. 按 `AGENTS.md` 判断输入模式（Mode 1/2/3）。Mode 2 只提取信息架构，丢弃视觉语言。
2. 判断输出目标（HTML 设计稿 / Vue2 代码），加载对应目标层。
3. 读取本文件了解页面结构和硬性规则。
4. 按任务涉及的模块，读取 `references/` 下对应文件（见下方加载索引）。
5. 若用户未提供必要数据，按"缺失数据提问清单"主动询问。
6. 输出前执行 `references/table-list-page/checklist.md` 的检查清单。

## Reference 加载索引

按需读取，不要一次性加载所有文件。共享模块在 `references/` 根目录，页面专属模块在各自子目录。

### 共享模块（所有页面通用）

| 任务 | 必读 reference |
|---|---|
| 页面骨架 / App Shell | `references/page-skeleton.md`、`references/_css/page-shell.css` |
| 左侧导航 | `references/navigation.md`、`references/_css/page-shell.css`、`references/_js/navigation-sidebar.js`、`references/icons.md`、`references/interaction-states.md` |
| 顶部信息栏、面包屑、内容区背板 | `references/page-skeleton.md`、`references/icons.md` |
| 图标映射 | `references/icons.md` |

### 表格列表页

| 任务 | 必读 reference |
|---|---|
| 表格页整体生成 | `references/page-skeleton.md`、`references/table-list-page/_css/table-list-page.css`、`references/table-list-page/_js/table-page-runtime.js`、`references/table-list-page/page-config-pattern.md`、`references/table-list-page/checklist.md` |
| 命令栏 / 筛选组 / 操作按钮 | `references/table-list-page/command-bar.md`、`references/table-list-page/_css/table-list-page.css`、`references/interaction-states.md` |
| 表格 / 固定操作列 / Checkbox | `references/table-list-page/table.md`、`references/table-list-page/_css/table-list-page.css`、`references/table-list-page/_js/table-list-page.js`、`references/interaction-states.md` |
| 表格列类型选择 / 单元格规范 | `references/table-list-page/table-columns/README.md`、`references/table-list-page/table-columns/rendering-patterns.md`，文本展示列见 `references/table-list-page/table-columns/text-display-columns.md` |
| 表格单元格渲染 helper | `references/table-list-page/table-columns/rendering-patterns.md`、`references/table-list-page/_css/table-cell-renderers.css`、`references/table-list-page/_js/table-cell-renderers.js`、`references/table-list-page/_js/table-page-runtime.js`、`references/table-list-page/page-config-pattern.md` |
| 分页器 / 跳页 / 每页条数 | `references/table-list-page/pagination.md`、`references/table-list-page/_css/pagination.css`、`references/table-list-page/_js/pagination.js`、`references/interaction-states.md` |
| 质检或修复已有页面 | `references/table-list-page/checklist.md`，再按问题模块读取对应 reference |

### Dashboard（draft）

> 待补充。占位见 `references/dashboard/README.md`。

### 设置列表页（draft）

> 待补充。占位见 `references/settings-list/README.md`。

## 核心页面结构

所有页面共享 App Shell（Top Info Bar + Base 左右结构），内容区按页面类型不同。

### App Shell（共享）

```text
Page
├─ Top Info Bar (64px)
└─ Base
   ├─ Navigation (212px)
   └─ Content Shell
      └─ Content Stack
         └─ (页面类型各自定义)
```

### 表格列表页 Content Stack

```text
Content Stack
├─ Breadcrumb (40px)
├─ Description Bar (32px)
├─ Command Bar (40px)
├─ Table Area
└─ Pagination Area (52px)
```

### Dashboard / 设置列表页

> 待后续定义。占位见各自 `references/` 子目录。

---

Figma 默认画板 `1366 x 768`。HTML 预览必须铺满浏览器视口，不得用固定尺寸容器模拟整页画布。

## 关键硬性规则

- 页面背景使用 `场景/背景/kd-color-background-base`。
- Top Info Bar 和左侧 Navigation 背景使用 `场景/背景/kd-color-background-base`。
- Content Shell 是无样式容器，仅保留布局 padding；视觉样式下沉到 Content Stack。
- Content Stack 使用 `场景/背景/kd-color-background-bottom`，左上/右上圆角 `8px`，投影 `浅色/阴影/kd-box-shadow-small`。
- 左侧 Navigation 宽 `212px`；内部 Slot x=`16px`、宽 `180px`。
- Navigation 支持一级至四级；仅一级可有业务图标，二至四级不保留业务图标占位。
- Command Bar 为左筛选组 + 右页面动作组；查询/搜索与重置必须跟随筛选组件放在筛选组末尾且不带图标；右侧页面动作组只承载页面级动作，并与筛选组件第一行顶对齐。
- Command Bar 展开/收起按钮只在筛选项展示不全时出现，且必须是 Light + Highlight Button。
- Command Bar 展开/收起按钮必须同步 `aria-expanded`、按钮文案和箭头方向：`false` 为“展开 + arrow_down_s”，`true` 为“收起 + arrow_up_s”。
- 表格区域外层必须有上 `12px`、左右 `20px` padding；横向滚动不得侵占 padding。
- 只有表格内容横向溢出时才启用固定列；如无特殊说明，默认只固定最右侧操作列，不默认固定复选框列或其它左侧列。
- 表格固定列端点状态、行 hover / selected、全选 / 半选和分页联动优先复用 `references/table-list-page/_js/table-list-page.js`；分页器自身仍复用 `pagination.js`。
- 如果页面存在 `renderRow()` 或等价的行模板函数，视觉片段优先复用 `references/table-list-page/_js/table-cell-renderers.js` 与 `references/table-list-page/_css/table-cell-renderers.css`，不得逐页重写状态图标、双行文本结构和操作按钮组样式。
- 当表格页已经进入共享资产路径后，优先继续拆为 `references/table-list-page/_js/table-page-runtime.js` + 页面级 `page config`；HTML 页面只保留 DOM 骨架、资产引用与最小 bootstrap。
- 所有文本优先使用 KD-Base-Style 文字变量，不得只手写字体、字号、字重。
- 图标必须使用 KDIcon pro 语义图标，不得用 `>`、`/`、`v`、`...` 等字符替代。
- 可点击元素必须使用真实语义元素（button / a / input / select），不得只用 div/span 模拟。

## Figma 节点索引

本场景的关键结构以下列 Figma 节点作为最新生成依据。如规则文件与旧模板冲突，以 `references/` 下的规则为准。

| 模块 | Figma 节点 | 对应规则 |
|---|---|---|
| 顶部信息栏 | `开放平台 Daily 2025 / node-id=10182-14602` | `references/page-skeleton.md#顶部信息栏` |
| 面包屑 | `管理后台 PC Daily 2026 / node-id=1371-19580` | `references/page-skeleton.md#面包屑` |
| 命令栏筛选组 | `开放平台 Daily 2025 / node-id=10133-144824`、`node-id=10128-144658` | `references/table-list-page/command-bar.md#标准结构` |

## 缺失数据提问清单

如果用户未提供以下数据，生成前需主动询问或做明确假设：

- 面包屑层级文案
- 描述栏说明文案
- 筛选字段和 placeholder 文案
- 页面按钮组（尤其唯一主操作按钮）
- 表格列名、列顺序、列宽优先级和空值展示
- 行操作类型（编辑、删除、详情等）
- 默认选中行、总条数、已选条数、当前页、每页条数

## 生成前检查

生成 HTML 或写入 Figma 前确认：

- 是否已加载对应目标层 Skill 和 depends-on 中的所有 Skill
- 是否已读取任务相关的 reference 文件
- 若为截图参考（Mode 2），是否已输出声明段和对照表
- 命令栏中的查询/搜索、重置是否在筛选组末尾（非右侧页面动作组）
- 命令栏筛选控件是否保留可读最小宽度
- 页面级动作是否在命令栏右侧页面动作组内（非独立工具栏）
- HTML 中 `.command-bar` 是否直接包含 `.filter-group` + `.page-actions` 两个同级子项
- 表格列宽总和是否可能超出可视宽度（需启用操作列 sticky）
- 顶部信息栏是否使用横向 Auto Layout（企业信息 Hug / 搜索容器 Fill / 个人信息 Hug）
- 面包屑箭头是否使用独立 16x16 图标盒并与文字行盒中心对齐
- 页面级场景 CSS 是否优先复用 `references/_css/page-shell.css`
- 若页面声明了 `renderRow()`，是否优先复用 `table-cell-renderers` 共享资产

## 输出与验证

1. HTML 预览文件放在工作目录下的 `admin-console-page-previews/`。
2. 本地预览优先使用 `http://127.0.0.1:8091/{file}`；分享给同事时优先提供局域网地址，避免 `file://`。
3. 语义检查：按钮用 `button`，跳转用 `a`，输入用 `input/select`，Checkbox 用真实语义。
4. 交互检查：hover、active/pressed、focus-visible、selected、disabled 必须可感知。
5. 预览可以用轻量 JS 模拟选择、分页、展开收起，但不能牺牲语义。
6. 同构标记：关键区域使用 `data-kd-component` 或 `data-kd-pattern` 标注。
