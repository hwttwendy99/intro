# Command Bar Addendum (2026-05-18)

本补充文件记录 2026-05-18 在命令栏复盘中确认的实现级硬规则，用于补强 `command-bar.md`。

## 查询按钮

- 查询按钮是 `Secondary + Highlight`，其 highlight 语义必须同时作用于文本和边框。
- 禁止出现“蓝字 + 灰边框”的半实现状态。
- 如 HTML 预览需要补齐 Highlight 变体，必须补齐默认、hover、active、focus-visible 的完整状态，而不是只写一个改字色的临时类。

## 附属箭头图标

- 命令栏中的 Select、Date、Pagination 等附属箭头，如采用内联 SVG 模拟，必须遵守 `icons.md` 的 16x16、线性、单色、圆角端点 / 连接规则。
- 同一页面内的下拉箭头、上一页、下一页、面包屑箭头必须映射到对应 KDIcon pro 语义图标，不能各写各的形态与色值。

## 输入控件可读性

- `Text Field / Select / Date` 外层遵守命令栏推荐宽度和 `flex: 0 0 auto` 约束。
- 占位文案、当前值、日期起止文案在默认状态下必须可读，不得依赖压缩控件宽度来维持单行。
