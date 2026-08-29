# {模块中文名}

<!-- 
  文件命名约定：
  - 所有 reference 文件统一使用英文短横线命名（如 command-bar.md、page-skeleton.md）
  - 子目录及其内部文件同样遵循英文短横线（如 table-columns/status-column.md）
-->

## 标准结构

{描述该模块的层级关系和布局方式。使用 ASCII 树或 Auto Layout 描述。}

```text
{Module Name}
├─ {子区域A} ({尺寸或布局方式})
│  ├─ {子组件A1}
│  └─ {子组件A2}
└─ {子区域B} ({尺寸或布局方式})
```

- {Auto Layout 方向和间距描述，如：横向 Auto Layout，gap 8}
- {尺寸约束，如：整体高度 40px，内部控件垂直居中}

## 精确规格

| 属性 | 值 | 来源 |
|------|-----|------|
| {如：整体高度} | {如：40px} | {如：Figma 节点 / 设计规范} |
| {如：内边距} | {如：上 12px 左右 20px} | |
| {如：子项间距} | {如：gap 8px} | |
| {如：圆角} | {如：6px} | |
| {如：背景} | {如：`var(--kd-color-fill-base)`} | |

## 组件选型

| 组件 | 变体 | 尺寸 | 用途 |
|------|------|------|------|
| {如：Button} | {如：Secondary + Highlight} | {如：M (28px)} | {如：查询按钮} |
| {如：Select} | {如：Default} | {如：M (28px)} | {如：筛选下拉} |

## 硬性规则

- {必须/禁止类规则，如：必须使用 KDIcon pro 语义图标，禁止用字符替代}
- {结构约束，如：右侧动作组必须是模块的直接子项，与左侧筛选组互为同级}
- {状态约束，如：控件 focus 只改边框，禁止添加 box-shadow}

## 交互状态

| 元素 | 状态 | 变化 | 变量 |
|------|------|------|------|
| {如：按钮} | hover | {如：背景变浅} | {如：`var(--kd-color-state-hover)`} |
| {如：按钮} | active | {如：背景加深} | {如：`var(--kd-color-state-pressed)`} |
| {如：输入框} | focus | {如：边框变蓝} | {如：`var(--kd-color-line-public)`} |
| {如：行} | selected | {如：背景高亮} | {如：`var(--kd-color-state-selected)`} |

## Figma 对齐来源

{本节为可选。如果有 Figma 节点作为规格来源，记录在此。}

| 模块/细节 | Figma 节点 | 提取日期 |
|-----------|-----------|---------|
| {如：标准结构} | `{文件名} / node-id={nodeId}` | {YYYY-MM-DD} |

{如果规则文件与 Figma 节点有冲突，以本文件的硬性规则为准（Figma 节点可能是旧版本）。}
