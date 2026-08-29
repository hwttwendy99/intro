# Table Addendum (2026-05-18)

本补充文件记录 2026-05-18 在管理后台表格页复盘中确认的表格实现级硬规则，用于补强 `table.md` 与列级 reference。

## 列类型路由

- 涉及“状态”字段时，必须按 `table-columns/status-column.md` 与 `table-columns/status-element.md` 生成。
- 状态列默认是“图标 + 文本”的轻量状态元素，不是单纯蓝字，也不是自定义 pill。

- 涉及“推荐”“标签”类字段时，必须先判断是否命中 Tag 列语义：
  - 命中 Tag 列：按 `table-columns/tag-column.md` 生成。
  - 未命中 Tag 列：使用文本、状态元素或 `-`，不得出现“标签 + 默认文案”的混合表达。

- 若字段没有明确 reference 支持，应先回到 `table-columns/README.md` 做列类型判定，不得凭常见后台经验自行补出蓝字、金色标签、默认文案等临时表达。

## Checkbox

- HTML 预览中的 Checkbox 优先复制 `kd-components/_css/checkbox.css` 的同构结构与伪元素几何。
- 禁止只手写 14px 框体和勾号，这会导致勾选图形被裁半、不居中或留白不对等。

## 悬停与选中分割线

- 行 hover / selected 时，不仅去掉当前行底部分割线，还要显式处理上一行与当前行之间的相邻分割线。
- HTML 预览通过 JS 为前一行添加 `.is-prev-hover` / `.is-prev-selected` class 实现（不使用 `:has()` 选择器，因 Chromium 104 不支持）；只处理当前行视为不合格。
