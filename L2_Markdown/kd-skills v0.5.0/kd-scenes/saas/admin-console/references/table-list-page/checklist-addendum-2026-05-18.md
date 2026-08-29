# Checklist Addendum (2026-05-18)

本补充文件记录 2026-05-18 新增的页面级专项核对项，用于配合 `checklist.md`。

## 页面骨架

- 描述栏文本是否在 32px 高度内做底对齐，而非简单垂直居中。

## 导航

- HTML 预览的左侧 Navigation 是否直接复用 `navigation-sidebar.css` 的同构结构，而不是手写近似版。

## 命令栏

- 查询按钮的 `Secondary + Highlight` 是否同时作用在文本和边框，而不是只显示蓝字 + 灰边框。
- 命令栏、分页器和日期输入器的箭头图标是否全部按 `icons.md` 的 KDIcon pro 语义和风格同构实现。

## 表格

- 状态列是否按 `status-column.md` / `status-element.md` 使用“图标 + 文本”语义，而不是单纯蓝字或自定义 pill。
- 推荐 / 标签类字段是否已明确判定到 Tag 列或普通文本，不存在“标签 + 默认文案”的混合表达。
- Checkbox 是否直接复用 `checkbox.css` 的同构几何，无“勾号只显示一半”等裁剪问题。
- 行 hover / selected 是否同时去掉当前行与上一行之间的相邻分割线。

## 分页

- 当表格内容不满一屏高度时，Pagination 是否紧跟表格最后一行，而不是被 flex / sticky 策略推到底部。
