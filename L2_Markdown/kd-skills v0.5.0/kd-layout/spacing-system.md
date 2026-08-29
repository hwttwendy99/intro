# 间距系统

## 基础单位

KDesign 间距以 **4px** 为基础倍数。2px 仅用于极紧密关联的元素。

## 间距阶梯

| 名称 | 值 | CSS 变量建议 | 用途 |
|---|---|---|---|
| xxs | 2px | `--kd-spacing-xxs` | 图标与文字紧密关联 |
| xs | 4px | `--kd-spacing-xs` | 组件内部间距（图标与文字、标签与控件） |
| sm | 8px | `--kd-spacing-sm` | 同组元素间距（按钮之间、Tag 之间） |
| md | 12px | `--kd-spacing-md` | 子模块间距（卡片内标题与内容、网格 gap） |
| lg | 16px | `--kd-spacing-lg` | 模块间距（卡片内边距、组内容之间） |
| xl | 24px | `--kd-spacing-xl` | 区域间距（表单项之间、信息组之间） |
| xxl | 32px | `--kd-spacing-xxl` | 页面块间距（页面标题与内容区） |
| xxxl | 48px | `--kd-spacing-xxxl` | 大区域分隔（仅宽松密度页面） |

## 组件内间距

> 各组件的精确内边距（Button/Input/Modal/Menu/Tooltip/Tag/Table 等）→ 见 [`kd-components/`](../kd-components/) 对应子文件。
> 本文件只负责「组件之间」和「区域之间」的间距规则。

## 组件间间距速查

| 场景 | 间距 | 变量 |
|---|---|---|
| 按钮与按钮 | 8px | sm |
| 按钮内图标与文字 | 4px | xs |
| 表单项之间 | 24px（标准），16px（小表单） | xl / lg |
| 信息组之间 | 24px | xl |
| 页面标题与第一个信息组 | 32px | xxl |
| 卡片网格 gap | 12px | md |
| 列表项间距 | 0（border 分隔）或 4px（树形结构） | - / xs |
| Tag 之间 | 8px | sm |
| 导航项之间 | 4px（margin-top） | xs |
| Tab 之间 | 20px（margin-left） | 特殊值 |
| Checkbox/Radio label 与框 | 4px | xs |
| Menu item 之间 | 4px（margin-bottom） | xs |
| Form label colon 后 | 8px（margin-right） | sm |
| 必填 * 与 label | 4px（margin-right） | xs |
| Error text 与控件 | 4px（margin-top） | xs |

## 区域间距速查

| 区域关系 | 间距 | 说明 |
|---|---|---|
| 全局导航 ↔ 内容 | 0 | 直接紧邻 |
| 侧边栏 ↔ 内容区 | 0 | border 分隔 |
| 页面顶栏 ↔ 内容 | 0 | header 在 content 区之上 |
| 内容区 padding top | 32px | 页面级上边距 |
| 内容区 padding sides | 自适应 | 居中布局由 max-width 控制 |
| 信息组标题 ↔ 内容 | 12px | md |
| 信息组 ↔ 信息组 | 24px | xl |
| 卡片行 ↔ 卡片行 | 12px | md（grid gap） |

## 密度模式间距

| 间距场景 | 紧凑 | 标准 | 宽松 |
|---|---|---|---|
| 表单项间距 | 16px | 24px | 32px |
| 信息组间距 | 16px | 24px | 32px |
| 卡片内边距 | 12px | 16px | 20px |
| 段落间距 | 8px | 12px | 16px |
| 页面顶部 padding | 16px | 32px | 48px |
