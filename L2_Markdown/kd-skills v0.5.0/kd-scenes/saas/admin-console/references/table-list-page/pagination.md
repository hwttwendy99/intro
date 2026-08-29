# 分页器

## Pagination 区域

分页器区域高度为 52px。标准管理后台表格页中，Pagination 组件外部需要套一层 frame，用于控制位置和内边距。

- Pagination 默认必须紧贴表格最后一行展示，不得被永久推到页面底部独立悬浮。
- 当表格内容高度超过内容区可视高度时，Pagination 允许在内容区底部吸附（例如 `position: sticky; bottom: 0`）；内容回到一屏内后必须恢复“紧跟表格末尾”。
- 表格区域高度应跟随表格内容自适应，不得用 `flex: 1` 永久撑满剩余高度把 Pagination 固定在底部。
- Pagination 必须跟随在列表表格下方，紧贴表格最后一行后的分页器 frame 展示。
- Pagination 位于设置区底部，宽度跟随设置区，不是全页面 footer。
- 在 1138px 设置区中，统计文本从 x=20 开始，Pagination 主体高度为 28px。
- 除 Pagination Area 外，不得在表格上方或命令栏下方额外生成第二套“每页条数 / 页码 / 上一页 / 下一页 / 总条数”条带。

标准结构：

```text
Pagination Area 52px
└─ Pagination Component 28px high
   ├─ 左侧统计：flex 1
   └─ 右侧分页操作
      ├─ 页码按钮组
      ├─ 每页条数 Select
      └─ 跳页输入组
```

## 标准资产

HTML 设计稿生成分页器时，必须复用以下标准资产，不要在页面内重复手写分页 DOM、分页联动逻辑或分页器专属 CSS。

- 样式资产：`references/table-list-page/_css/pagination.css`
- 交互实例：`references/table-list-page/_js/pagination.js`

页面中只保留一个空容器：

```html
<footer id="adminPagination"></footer>
```

加载资产后调用：

```html
<link rel="stylesheet" href="references/table-list-page/_css/pagination.css">
<script src="references/table-list-page/_js/pagination.js"></script>
<script>
  var pagination = KdAdminPagination.create(document.getElementById('adminPagination'), {
    total: rows.length,
    selectedCount: selectedIds.size,
    currentPage: 1,
    pageSize: 20,
    pageSizeOptions: [10, 20, 50],
    onChange: function(state) {
      currentPage = state.currentPage;
      pageSize = state.pageSize;
      renderTable();
      pagination.setState({
        total: rows.length,
        selectedCount: selectedIds.size,
        currentPage: currentPage,
        pageSize: pageSize
      });
    }
  });
```

实例会自动生成标准 `Pagination Area` 结构、页码按钮、每页条数 Select、跳页 Text Field、KDIcon pro 箭头，并同步 `currentPage`、`pageSize`、`total`、`selectedCount`。页面业务代码只负责根据实例回调刷新表格数据。

若生成环境需要单文件 HTML，可以将 `_css/pagination.css` 原样复制进 `<style>`，将 `_js/pagination.js` 原样复制进 `<script>`；不得把分页器样式或结构拆散后手工改写。

## Pagination 组件规则

1. 必须使用 Pagination 组件或严格同构结构，不得散乱手工拼装。
2. 左侧统计信息示例：`已选 3 条，共 200 条`。
3. 右侧页码组包含上一页、页码、更多、下一页。
4. 上一页/下一页使用 Light Icon Button M，按钮占位为 28px × 28px，不得复用带文字页码按钮的横向 padding。
5. 上一页/下一页箭头图标使用 `场景/图标/kd-color-icon-secondary` 或等价 KD 次要图标色，不得沿用页码文本主色。
6. 页码使用 Light Button M，最小宽度 28px；当前页使用选中态：背景为 `场景/填充/kd-color-fill-base`，边框为强调边框色 `场景/线条/kd-color-line-public`，文本为 `kd-color-text-public`，不改成 Primary 或蓝底按钮。
7. 更多使用 KDIcon pro `more` 图标，不使用文本省略号替代。
8. 每页条数选择器使用 Select M，右侧箭头使用 KDIcon pro `arrow_down_s`。
9. 每页条数选择器建议使用最小宽度，不得无意义拉宽。
   - 标准宽度参考：88px。
10. 右侧分页操作内部间距必须明确声明：
    - `.pagination-main` 使用横向布局，`gap: 16px`，用于分隔页码按钮组与扩展操作组。
    - `.page-extra` 使用横向布局，`gap: 16px`，用于分隔每页条数 Select 与跳页输入组。
    - 跳页输入组内部使用 `column-gap: 8px`，用于分隔 `前往`、Text Field、`页`。
11. 每页条数 Select 的 `.kd-input-wrap` 在 Pagination 场景中使用左 `7px`、右 `5px` 内边距；`.kd-select-arrow` 与输入文本之间保持 `margin-left: 8px`。
12. 跳页组包含文本 `前往`、`Text Field / KDTextField` M、文本 `页`。
13. 跳页页码不得使用裸 input；必须使用 Text Field 同构结构，并标记 `data-kd-component="Text Field / KDTextField"`。
14. 跳页 Text Field 的 `.kd-input-wrap` 左右内边距均为 `7px`；输入文本必须在输入框内水平、垂直居中。
    - 标准宽度参考：48px。
15. Pagination 左侧统计 `.pagination-summary` 使用 KD 主要文本颜色，不使用次要文本颜色。
16. Pagination 内所有可点击元素必须具备 hover、active、focus-visible、disabled 状态。
17. 当 HTML 预览需要演示分页交互时，页码、上一页/下一页、每页条数 Select、跳页输入、总条数必须绑定同一数据源，不得各自写死。
18. 每页条数 Select 改变后，必须同步更新：表格可见行数、总页数、当前页（重置到 1 或按规则夹取）、页码按钮集合。
19. 页码按钮、上一页/下一页、跳页输入必须双向联动当前页；超出范围的页码输入需要自动夹取到合法区间。
20. 左侧统计信息中的总条数必须来源于真实数据集长度；`已选 N 条` 必须与当前全局勾选状态实时一致，不得硬编码。
