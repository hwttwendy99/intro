# 表格

## JS 参考实现

1. 管理后台表格页的固定列滚动状态、行 hover、行 selected、全选 / 半选和分页联动，优先复用 `references/table-list-page/_js/table-list-page.js` 的 `KdAdminTable.create(...)`。
2. `KdAdminTable.create(...)` 是表格行为层确定性资产：负责同步 `.has-sticky-columns`、`.is-scrolling-none`、`.is-scrolling-left`、`.is-scrolling-middle`、`.is-scrolling-right`，并使用 1px 端点容差避免缩放或亚像素抖动。
3. 页面允许保留业务专属的列配置、行数据和 `renderRow`，但不得另写一套与标准资产冲突的固定列端点判断、hover 同步、selected 同步或全选逻辑。
4. 若页面同时使用分页器，分页器仍复用 `references/table-list-page/_js/pagination.js` 的 `KdAdminPagination.create(...)`；表格实例通过 `pagination.setState(...)` 与分页实例联动，不替代分页器标准资产。
5. 若业务必须自定义表格行为，必须保持与 `table-list-page.js` 等价的状态类、事件语义和销毁能力，并在页面代码中标注偏离原因。

本文件负责表格级规则：区域结构、行高、框架与滚动、悬停与选中、行操作、固定列、固定操作列、Checkbox 与 JS 行为参考。列类型选择和单元格样式见 `table-columns/README.md`。

## 表格区域

> HTML 预览中，表格列表页的场景层布局（`table-area`、`table-frame`、`table-scroll`、`kd-table-surface` 及 sticky 分割线 / 阴影视觉）优先复用 `references/table-list-page/_css/table-list-page.css`；行为层继续复用 `_js/table-list-page.js`。

1. 表格区域顶部不得额外添加统计文本。
2. 统计信息属于 Pagination 左侧信息区，例如 `已选 3 条，共 200 条`。
3. 表格文本严格使用 13px，对应 KD-Base-Style 的表格文本样式。
4. 表头文字使用常规字重，不得加粗。
5. 表头背景使用 KDesign 表头背景变量或等价 token。
6. 表头左上角和右上角必须有 6px 圆角。
7. 表格宽度不得超出内容区左右 20px padding 后的可用宽度。
8. 列过多且表格内容宽度超过可视区域时，表格主体横向滚动，操作列才固定在右侧；未溢出时操作列不默认 sticky。
9. 单元格无数据时使用 `-` 表示。
10. 空值 `-` 必须使用 `var(--kd-color-text-secondary)` 或对应 KD 次级文本变量。

## 行高与单元格

- 表格每行最小高度为 48px；不得把行高写死为固定高度。
- 单元格内容默认在当前行高内垂直居中。
- 单元格上下 padding 为 12px。
- HTML 预览中的行底部分割线优先使用 `inset box-shadow`、伪元素或等价的不占高方案绘制；禁止依赖真实 `border-bottom` 参与行高计算，否则会破坏 hover / selected 的 `1px` 空气层实现。
- 当某些列允许换行且内容超过当前列宽时，行高必须随内容自适应增长；同一行内所有单元格高度由该行最高内容统一撑开。
- 表格文本仍保持 13px。

## 列类型选择与单元格规范

列类型选择、单元格基础样式和各列类型的选型要点见 `table-columns/README.md`。生成表格时，按字段语义到 `table-columns/README.md` 查阅对应列类型；具体样本见 `table-columns/` 下的独立文件。

- 涉及“状态”字段时，必须按 `table-columns/status-column.md` 与 `table-columns/status-element.md` 生成，默认使用“图标 + 文本”的轻量状态元素，不是单纯蓝字，也不是自定义 pill。
- 涉及“推荐”“标签”类字段时，必须先判断是否命中 Tag 列语义；命中时按 `table-columns/tag-column.md` 生成，未命中时使用文本、状态元素或 `-`，不得出现“标签 + 默认文案”的混合表达。

## 表格框架与滚动

- 表格外层使用 `表格框架含Padding`，宽度跟随设置区，负责左右 20px padding 和顶部 12px padding。
- 表格滚动层必须放在 padding 内部，横向滚动不得侵入内容区左侧或右侧 20px padding。
- 当列宽总和超过可用宽度时，只有表格内部出现横向滚动条；此时默认只启用最右侧操作列 sticky，未溢出时不得默认固定操作列。
- 不得通过表格内层裁剪容器、额外 `overflow: hidden` 或等价手段隐藏横向滚动条；当发生横向溢出时，滚动条必须保持可见且可操作。
- 当表格底部出现横向滚动条时，默认固定表格最右侧操作列；横向滚动消失时取消固定。
- 左侧固定列必须由需求显式指定，例如“固定复选框列”“固定编号列”“固定标题列”；如无特殊说明，不得默认固定复选框列或任何左侧数据列。
- 公共联系人表格列宽参考：复选 48、成员标签 110、邮箱 200、属性 110、组织 200、部门 200、职位 110；操作列按行内按钮内容自适应。

## 表格悬停与选中

1. 表格组件的行悬停色因特殊原因使用 `场景/填充/kd-color-fill-light`。
2. 悬停行和选中行圆角为 6px。
3. 悬停或选中时，当前行底部分割线需要去掉。
4. 悬停或选中时，上一行与当前行相邻的分割线需要去掉。
5. HTML 预览必须显式处理上一行相邻分割线：JS 在 hover/selected 时为前一行添加 `.is-prev-hover` / `.is-prev-selected` class，CSS 据此去掉分割线；不能只去掉当前行底部分割线。
6. 第一行挨着表头时，悬停或选中不得删除表头底部分割线。
7. 选中行使用 KDesign selected 背景变量或等价状态。
8. HTML 预览中，hover / selected 的高亮底色不得覆盖到底部分割线占位；高亮区域应在单元格底部保留 `1px` 空气层或透明带，避免状态块与下一行直接粘连。
9. 当上一行分割线被去掉后，当前高亮行与下一行之间仍应保持 `1px` 视觉间距；不得把高亮块直接铺满整格高度。

## 表格选择与行操作

1. 首列为批量选择时，必须使用 Checkbox 组件或同等语义结构。
2. HTML 预览中应使用 `input[type="checkbox"]` 或 button + `role="checkbox"`。
3. Checkbox 必须可键盘聚焦，并同步 `checked` 或 `aria-checked` 状态。
4. 行选中状态必须同步到行容器，例如 `tr.is-selected` 或等价状态。
5. 行内编辑、删除等操作必须使用 KDButton 按钮。
6. 操作列任何情况下都不允许换行，按钮组必须保持单行排列。
7. 操作列行内按钮统一使用 M 号 28px 高度的 Light Button，不使用 Small。
8. 操作列宽度根据行内轻浅按钮宽度、按钮间 gap 和单元格左右 padding 自适应，不得固定为 120px。
9. 除危险操作（如删除、移除、作废）外，操作列内所有 Light Button 都必须叠加强调属性；危险操作使用 Light + Danger。
10. 删除或任何危险操作按钮必须排列在操作列最后一位，例如 `修改 / 详情 / 删除`。
11. 如果行操作是真实跳转，才可使用 a 标签和真实 URL。

## 固定列与固定操作列

1. 只有表格内容宽度超过表格滚动层可视宽度时，才启用固定列；未溢出时必须取消固定列的分割线与阴影状态。
2. HTML 预览默认优先使用与主表同一滚动上下文的原生 sticky（`th/td + left/right: 0`）实现固定列；仅当原生 sticky 无法稳定锚定在容器可视边界时，才回退到“主表保留固定列占宽 + 独立 overlay 固定列容器”的实现。
3. 原生 sticky 方案下，表体固定列选择器必须在最终生效规则中显式保持 `position: sticky`；不得被通用单元格规则覆盖成 `relative`。
4. 如无特殊说明，横向溢出时只固定最右侧操作列；左侧固定列必须由需求显式指定，不得因为存在复选框列、编号列或标题列就默认固定。
5. 操作列启用右侧 sticky 时宽度仍按内容自适应，不得固定为 120px；被显式指定为左侧固定列的列，按对应列类型的既有宽度执行。
6. 右侧固定操作列表体背景使用 `场景/背景/kd-color-background-bottom`；表头固定操作列背景始终保持表头背景（如 `var(--kd-color-fill-light)`），不得被表体背景规则污染。
7. 固定列表头和表体均必须由固定列本体绘制 1px 垂直分割线：左固定列末列使用 `border-right: 1px solid var(--kd-color-line-light)`，右固定列首列使用 `border-left: 1px solid var(--kd-color-line-light)`；分割线不得由阴影层、滚动层或普通数据列代画。
8. 固定列分割线必须与横向溢出状态绑定；无横向滚动条时，固定列分割线和阴影必须一同消失。
9. 横向滚动到某一侧端点时，该侧固定列的分割线和阴影也必须一同消失：滚动到最左侧时隐藏左固定列边界，滚动到最右侧时隐藏右固定列边界；滚动位于中间时两侧固定列边界均显示。
10. HTML 预览可通过 `.is-scrolling-left`、`.is-scrolling-middle`、`.is-scrolling-right` 等状态类控制端点表现；端点判断允许 1px 误差，避免亚像素或缩放导致状态抖动。
11. 固定列阴影只负责滚动内容与固定列之间的层次过渡，不得替代 1px 分割线。
12. HTML 预览不得使用带白色背景的宽伪元素、渐变白块或白色遮罩去实现固定列阴影；阴影伪元素应保持 `background: transparent`，避免形成可见白色实体带。
13. 若使用原生 sticky 单元格伪元素承载固定列边缘阴影，推荐使用透明单边 `inset` 阴影：左固定列右侧伪元素可用 `right: -24px; width: 24px; box-shadow: inset 24px 0 24px -24px rgb(13 13 13 / 8%)`；右固定列左侧伪元素可用 `left: -24px; width: 24px; box-shadow: inset -24px 0 24px -24px rgb(13 13 13 / 8%)`。具体宽度可按 KD large 阴影实测辐射范围微调，但不得重新引入白底实体带。
14. 若必须严格复用完整 `kd-box-shadow-large` 外投影参数，则必须使用透明阴影源 + 裁剪容器，只露出固定列外侧所需的一半阴影；不得直接把完整外投影挂到宽伪元素上导致左右双向阴影外溢。
15. 固定列阴影伪元素必须 `pointer-events: none`，不得阻断操作按钮、checkbox、链接等真实交互。
16. 固定列和普通列的 hover / selected 行态必须使用同一套状态逻辑，例如统一通过 `--row-state-bg` 或等价变量控制所有 `.kd-table-cell` 的状态背景；固定列不得另写一套灰色或蓝色状态色。
17. HTML 预览中 hover / selected 的高亮底色仍不得覆盖到底部分割线占位；高亮区域应在单元格底部保留 `1px` 空气层或透明带。
18. 固定列在 hover 和 selected 状态下，边缘圆角必须与行态同步：左固定列保留左上/左下 6px，右固定列保留右上/右下 6px。
19. 固定列背景裁剪方式必须左右一致；若采用单表原生 sticky 实现，左右固定列表头和表体统一使用 `background-clip: border-box`，避免固定列分割线与状态背景在左右两侧出现不一致的裁剪表现。
20. 表头固定列与表体固定列都必须参与固定列分割线与阴影核对；表头固定列不得只依赖阴影形成分割感。
21. 若圆角区域被底层滚动内容穿透，优先评估固定列底板 / 内层状态背景 / overlay panel 等稳定结构；补充遮挡层时不得形成可见白条，也不得替代固定列自身背景、分割线和阴影职责。
22. HTML 预览实现固定列时，禁止写 `.td-actions { box-shadow: ... }` 或等价逐行投影；阴影必须由固定列边缘伪元素、固定列整体容器或 overlay panel 统一承担。
23. 若采用 overlay 固定列容器，overlay 必须锚定在 `.table-frame` 可视边界，不得随横向滚动内容一起被推出容器，并必须同步主表行高、hover、selected、按钮顺序与按钮语义。

## 表格列宽与滚动硬性规则

- 表格必须包裹在 `表格框架含Padding` frame 内；frame 顶部 padding 为 12px，左右 padding 为 20px。
- 横向滚动层必须位于 padding 内部；滚动条和表格内容不得侵占内容区左/右 20px padding。
- 数据列默认使用 Fill 分配宽度；当页面宽度不足时，按内容最小宽度自适应，并只在表格滚动层内出现横向滚动。
- 单选列、复选列、拖拽列、操作列按内容自适应宽度；其它业务数据列使用 Fill 分配宽度，不得写死成不可伸缩固定宽度。
- HTML 预览可使用 `table-layout:auto`、数据列 `min-width` 与 `width:auto` 模拟 Fill + 内容自适应；不得使用全列 `table-layout:fixed` 强行压缩文本。
- 标题、分类、备注、描述等天然长文本列允许自动换行；分类列默认按单行文本展示，只有宽度不足时才自然换行；当视口变宽可以完整展示时，应自然回到较少行数和较低行高。

## Checkbox 尺寸

- 表格复选框组件总占位为 16px。
- 可视框为 14px x 14px。
- 可视框四周各保留 1px 留白，形成 16px 总尺寸。
- 复选框列的表头与单元格必须在当前单元格高度下水平、垂直居中。
- 勾选态背景使用 `kd-color-public-normal`，hover 使用 `kd-color-public-hover`，默认边框使用 `kd-color-line-heavy`。
- HTML 预览中的 Checkbox 优先复制 `kd-components/_css/checkbox.css` 的同构结构与伪元素几何，禁止只手写 14px 框体和勾号。
