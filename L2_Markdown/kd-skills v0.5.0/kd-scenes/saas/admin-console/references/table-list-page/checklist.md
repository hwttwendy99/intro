# 校对

生成或修改管理后台表格页后，必须按本清单逐项检查。每项给出检查点和规则来源，具体数值和实现细节以来源文件为准。

## 页面与基础结构

| # | 检查点 | 规则来源 |
|---|---|---|
| 1 | 页面背景使用正确的 background-base 变量，未误用 fill-base | `../page-skeleton.md#页面背景` |
| 2 | 顶部信息栏结构：横向 Auto Layout、三段式（Hug / Fill / Hug）、无底部分割线 | `../page-skeleton.md#顶部信息栏` |
| 3 | 顶部搜索框固定尺寸且在 Fill 搜索容器内居中 | `../page-skeleton.md#顶部信息栏` |
| 4 | 顶部信息栏内箭头、图标使用 KDIcon pro，非字符替代 | `../page-skeleton.md#顶部信息栏` |
| 5 | 基础区为左右结构；导航右侧无分割线 | `../page-skeleton.md#基础区` |
| 6 | Content Shell 无视觉样式；Content Stack 有正确背景、圆角、投影，且撑满可用高度 | `../page-skeleton.md#内容区背板` |
| 7 | 内容区五层顺序和固定高度正确（面包屑 40 / 描述栏 32 / 命令栏 40 / 表格 / 分页 52） | `../page-skeleton.md#内容区` |
| 7.1 | 页面级 App Shell / 导航场景 CSS 优先复用 `references/_css/page-shell.css`，未在单页内漂移出第二套近似样式 | `../page-skeleton.md#页面背景`、`../navigation.md#使用范围` |

## 面包屑

| # | 检查点 | 规则来源 |
|---|---|---|
| 8 | 使用 Breadcrumb M，整体 40px，顶部 padding 8px | `../page-skeleton.md#面包屑` |
| 9 | 分隔箭头使用独立 16×16 图标盒，中心线与文字行盒中心对齐 | `../page-skeleton.md#面包屑` |
| 10 | 箭头为 KDIcon pro `arrow_right_s`，非字符 `/` `>` | `../page-skeleton.md#面包屑` |
| 11 | 会员模块最后一级面包屑增值标识正确 | `../page-skeleton.md#面包屑` |

## 导航

| # | 检查点 | 规则来源 |
|---|---|---|
| 12 | 导航宽度 212px，使用 KD Navigation 或严格同构 | `../navigation.md` |
| 13 | 仅一级有业务图标；二至四级无图标且不保留占位 | `../navigation.md` |
| 14 | hover / pressed / selected 使用正确的状态变量 | `../navigation.md`、`../interaction-states.md` |
| 14.1 | 管理后台特例仅在 `.navigation-shell` 等场景作用域内覆盖，未反向改写全局 `navigation-sidebar.css` | `../navigation.md#外层结构边界` |
| 14.2 | 导航项显式 `width: 100%` 占满 `nav-list`，右侧箭头不依赖临时子容器挤位 | `../navigation.md#标准缩进` |
| 14.3 | 管理后台导航启用文本主导高度：默认单行仍为 32px 视觉高度，文本超出时最多两行，hover / selected 高度随内容增长 | `../navigation.md#标准缩进` |
| 15 | 展开/收起同步 `aria-expanded`、子级显隐和图标切换；父级折叠后后代真实隐藏 | `../navigation.md#滚动与展开` |
| 15.1 | 子级包入分组容器后，`[hidden]` 显隐规则未被作者样式覆盖；不存在“状态切换了但子级仍显示” | `../navigation.md#滚动与展开` |
| 15.2 | 父级与第一条子级之间保留 4px 间距，未因 `:first-child` 规则贴在一起 | `../navigation.md#滚动与展开` |
| 15.3 | 管理后台右侧箭头默认次要图标色，父项 selected 时与文本同色；收起朝下、展开朝上 | `../navigation.md#一级导航`、`../navigation.md#滚动与展开` |
| 15.4 | 右侧箭头图标盒到 item 右边缘为 8px，布局采用左侧文本 fill + 右侧 caret fixed，而不是依赖动态 auto margin | `../navigation.md#一级导航` |
| 15.5 | 文本块在 `nav-label` 内左对齐，前后图标盒高度与文本行高一致，导航图标 `stroke-width` 场景特例为 `1` | `../navigation.md#一级导航`、`../navigation.md#颜色与状态` |
| 15.6 | 侧栏支持 `64px` 的 icon-only 收起态；收起态 `kd-navigation-vertical` 为 `32px` 且左右 margin 各 `16px` | `../navigation.md#侧栏收起态` |
| 15.7 | 收起态文本、子级、父级右侧箭头和底部“查看全部”真实隐藏，一级图标仍保留交互反馈 | `../navigation.md#侧栏收起态` |
| 15.8 | 收起态前图标 `margin-right` 清零，底部展开/收起按钮为 `32×32` 且与上方 icon-only 导航项共用同一条中心轨道 | `../navigation.md#侧栏收起态` |
| 16 | 导航超长时内部垂直滚动，不撑开整页 | `../navigation.md` |
| 17 | "查看全部"位于底部，左对齐 + KDIcon pro 图标 | `../navigation.md` |
| 17.1 | HTML 预览直接复用 `navigation-sidebar.css` 的同构结构，而不是手写近似版 | `../navigation.md#组件来源` |
| 17.2 | 底部展开/收起按钮 hover 使用 KD Tooltip 标准实例；展开态文案“收起导航”、收起态文案“展开导航”，tooltip 与按钮内容框间距为 10px，点击切换时 tooltip 立即关闭 | `../navigation.md#查看全部与侧栏收起` |
| 17.3 | 导航交互优先复用 `references/_js/navigation-sidebar.js`，未在页面内另写一份不兼容的展开/收起逻辑 | `../navigation.md#展开与收起-js-参考实现确定性资产` |

## 描述栏

| # | 检查点 | 规则来源 |
|---|---|---|
| 18 | 只展示描述文案，未重复页面标题或面包屑当前项 | `../page-skeleton.md#描述栏` |
| 18.1 | 描述栏文本在 32px 高度内做底对齐，而非简单垂直居中 | `../page-skeleton.md#描述栏` |

## 命令栏

| # | 检查点 | 规则来源 |
|---|---|---|
| 19 | 左筛选组 + 右页面动作组两个同级子项；HTML 中 `.command-bar > .filter-group + .page-actions` | `command-bar.md#标准结构` |
| 19.1 | 命令栏场景层布局优先复用 `references/table-list-page/_css/table-list-page.css`，未在单页内再漂移出第二套 `command-bar / filter-group / page-actions` 布局样式 | `command-bar.md#标准结构` |
| 20 | 页面级动作（新增/导入/导出/批量操作）在右侧页面动作组内，未外置为独立工具栏 | `command-bar.md#标准结构` |
| 21 | 查询/搜索 + 重置在筛选组末尾，未进入右侧页面动作组，且无图标 | `command-bar.md#查询与重置` |
| 22 | 控件均为 M 号 28px，筛选语义写入 placeholder | `command-bar.md` |
| 23 | 筛选控件保留可读最小宽度，未被压缩到文案不可读 | `command-bar.md#控件尺寸` |
| 23.1 | admin-console 表格页首个主搜索输入框默认固定宽度为 240px，未回落到通用 160px | `command-bar.md#控件尺寸` |
| 23.2 | 若命令栏 Select 使用 placeholder 实测宽度，则只作用于 admin-console 筛选 Select，且宽度结果为整数像素并包含 2px 安全余量 | `command-bar.md#控件尺寸` |
| 24 | 收起态保持单行；展开态才允许换行 | `command-bar.md#展开与收起` |
| 25 | 展开/收起按钮为 Light + Highlight，仅在溢出时出现 | `command-bar.md#展开与收起` |
| 26 | 展开/收起按钮同步 `aria-expanded`、按钮文案和箭头方向；禁止“收起 + 下箭头”等状态错配 | `command-bar.md#展开与收起` |
| 27 | 右侧页面动作组与筛选组件第一行顶对齐 | `command-bar.md#标准结构` |
| 28 | 危险按钮（批量删除等）使用 Secondary + Danger，非 Primary Danger | `command-bar.md#页面动作组危险按钮` |
| 28.1 | 如无特殊说明，右上角主操作按钮为纯文字 Primary Button，不带前置/后置图标 | `command-bar.md#按钮组` |
| 29 | Button 颜色变量来自 KD Button 组件规范，非临时色值 | `command-bar.md#按钮颜色变量` |
| 30 | Text Field / Select focus 只改边框，无额外 box-shadow | `command-bar.md` |
| 31 | Text Field 有值时提供清空按钮及其 hover/active | `command-bar.md` |
| 31.1 | 查询按钮的 Secondary + Highlight 同时作用于文本和边框，不是“蓝字 + 灰边框” | `command-bar.md#查询与重置` |
| 31.2 | 命令栏、分页器和日期输入器的箭头图标均按 `icons.md` 的 KDIcon pro 语义和风格同构实现 | `../icons.md` |

## 表格

> 硬性失败：表格固定列端点状态、行 hover / selected、全选 / 半选和分页联动必须检测到 `KdAdminTable.create(...)` 调用，或检测到页面明确引用 / 原样内联 `references/table-list-page/_js/table-list-page.js` 标准资产。若页面另写一套不可追溯且与标准状态类不兼容的表格行为逻辑，本轮 QA 判失败。

| # | 检查点 | 规则来源 |
|---|---|---|
| 32 | 表格外层有上 12px、左右 20px padding；横向滚动不侵占 padding | `table.md` |
| 32.1 | 表格场景层布局优先复用 `references/table-list-page/_css/table-list-page.css`，未在单页内重复手写 `table-area / table-frame / table-scroll` 近似规则 | `table.md#表格区域` |
| 33 | 文本 13px，表头不加粗；行高 48px，单元格内容 24px | `table.md` |
| 34 | hover 和 selected 行：6px 圆角、去掉当前行及相邻行分割线 | `table.md` |
| 35 | 空值使用 `-` + secondary 文字颜色 | `table.md` |
| 36 | 操作列按钮属性正确（编辑=强调，删除=危险） | `table.md` |
| 37 | 如无特殊说明，横向溢出时只固定最右侧操作列；未默认固定复选框列、编号列、标题列或其它左侧数据列 | `table.md#固定列与固定操作列` |
| 37.1 | 横向溢出时滚动条保持可见且可操作，未被表格内层裁剪容器或额外 `overflow: hidden` 隐藏 | `table.md#表格框架与滚动` |
| 37.2 | 若采用 overlay 固定列实现，固定列始终锚定在 `.table-frame` 可视边界，不会随横向滚动内容一起被推出容器 | `table.md#固定列与固定操作列` |
| 37.3 | 若采用原生 sticky 固定列，表体固定列最终计算样式仍为 `position: sticky`，未被 `.kd-table-cell` 等通用规则覆盖成 `relative` | `table.md#固定列与固定操作列` |
| 37.4 | 左侧固定列仅在需求明确指定时启用；被指定的左侧固定列按对应列类型宽度与顺序实现 | `table.md#固定列与固定操作列` |
| 37.5 | 无横向滚动条时取消固定列分割线与阴影状态 | `table.md#固定列与固定操作列` |
| 38 | 固定列表头和表体的 1px 垂直分割线均由固定列本体绘制：左固定列 `border-right`，右固定列 `border-left` | `table.md#固定列与固定操作列` |
| 38.1 | 固定列分割线与横向溢出状态绑定：无横向滚动条时分割线和阴影一同消失 | `table.md#固定列与固定操作列` |
| 38.2 | 横向滚动到最左侧时左固定列分割线和阴影消失，滚动到最右侧时右固定列分割线和阴影消失，中间态两侧均显示 | `table.md#固定列与固定操作列` |
| 38.3 | 端点状态类（如 `.is-scrolling-left/right`）与实际 `scrollLeft` 同步，端点判断允许 1px 误差且无状态抖动 | `table.md#固定列与固定操作列` |
| 38.4 | 固定列阴影只负责层次过渡，未替代 1px 分割线，且不存在白色实体伪元素 / 渐变白块 / 白色遮罩带 | `table.md#固定列与固定操作列` |
| 38.5 | 原生 sticky 阴影伪元素为透明背景、`pointer-events: none`，单边 inset 阴影方向与左右固定列一致 | `table.md#固定列与固定操作列` |
| 38.6 | 若严格复用完整 `kd-box-shadow-large` 外投影参数，则已使用透明阴影源 + 裁剪容器，只露出所需半边阴影 | `table.md#固定列与固定操作列` |
| 39 | 固定列表头背景始终为 `kd-color-fill-light`；右侧固定操作列表体背景使用 `kd-color-background-bottom`，未被表头规则污染 | `table.md#固定列与固定操作列` |
| 39.1 | 左右固定列表头和表体的 `background-clip` 保持一致，原生 sticky 方案下为 `border-box` | `table.md#固定列与固定操作列` |
| 39.2 | 固定列 hover / selected 与普通列共用同一套行态逻辑，未另写固定列专属灰色或蓝色状态色 | `table.md#固定列与固定操作列` |
| 39.3 | 固定列 hover / selected 圆角与行态同步：左固定列左上/左下 6px，右固定列右上/右下 6px | `table.md#固定列与固定操作列` |
| 39.4 | 若底层滚动内容穿透固定列圆角区域，已通过底板 / 内层状态背景 / overlay panel 等稳定结构处理，且未形成可见白条 | `table.md#固定列与固定操作列` |
| 39.5 | 若采用 overlay 固定列实现，overlay 行高、hover、selected、按钮顺序与主表对应行完全同步 | `table.md#固定列与固定操作列` |
| 39.6 | 表格行为优先复用 `KdAdminTable.create(...)` 或 `_js/table-list-page.js`，固定列端点状态、行态、选择态和全选逻辑未在页面内另写不兼容实现 | `table.md#JS 参考实现` |
| 39.7 | 若同时使用分页器，表格实例通过 `pagination.setState(...)` 与 `KdAdminPagination.create(...)` 联动，未替代分页器标准资产 | `table.md#JS 参考实现`、`pagination.md#标准资产` |
| 39.8 | 若页面声明 `renderRow()` 或等价行模板函数，状态图标、双行文本堆叠、操作按钮组优先复用 `table-cell-renderers` 共享资产，而非页面内散落自拼结构 | `table-columns/rendering-patterns.md` |
| 39.9 | 当页面已复用表格标准资产且仍需 mock 数据 / 分页状态 / `renderRow()` 装配时，优先收敛为 `table-page-runtime.js` + 页面级 config，而不是继续在 HTML 内联脚本中堆积业务 bootstrap | `../page-config-pattern.md` |
| 40 | Checkbox 总占位 16px、可视 14px | `table.md` |
| 40.1 | 状态列使用“图标 + 文本”语义，而不是单纯蓝字或自定义 pill | `table.md#列类型选择与单元格规范` |
| 40.2 | 推荐 / 标签类字段已明确判定到 Tag 列或普通文本，不存在“标签 + 默认文案”的混合表达 | `table.md#列类型选择与单元格规范` |
| 40.3 | Checkbox 复用 `checkbox.css` 同构几何，无“勾号只显示一半”等裁剪问题 | `table.md#checkbox-尺寸` |
| 40.4 | 行 hover / selected 时同时去掉当前行与上一行之间的相邻分割线 | `table.md#表格悬停与选中` |
| 40.5 | hover / selected 高亮区域未覆盖到底部分割线，单元格底部保留 1px 空气层 | `table.md#表格悬停与选中` |
| 40.6 | 行底部分割线使用不占高方案绘制，未通过真实 `border-bottom` 把分割线高度计入行高 | `table.md#行高与单元格` |
| 40.7 | 标题 / 名称类纯文本列未被机械实现为蓝色链接；只有真实跳转语义时才使用链接列与 hover 蓝色 | `table-columns/README.md`、`table-columns/link-column.md` |

## 分页器

> 硬性失败：表格页分页器必须检测到 `KdAdminPagination.create(...)` 调用，或检测到页面明确引用 / 原样内联 `references/table-list-page/_js/pagination.js` 与 `_css/pagination.css` 标准资产。若分页器为页面内散乱自绘结构且无法追溯到标准实例来源，本轮 QA 判失败。

| # | 检查点 | 规则来源 |
|---|---|---|
| 41 | 分页器区域 52px，默认紧跟表格最后一行；仅当表格超出可视高度时允许吸底 | `pagination.md` |
| 42 | 页面中只存在一套标准 Pagination Area，表格上方或命令栏下方没有第二套分页条 | `pagination.md` |
| 43 | Pagination 外层有 frame 包裹 | `pagination.md` |
| 44 | 跳页页码使用 Text Field M 同构，文本居中 | `pagination.md` |
| 45 | 上下页、更多、下拉箭头均使用 KDIcon pro | `pagination.md` |
| 45.1 | 上一页 / 下一页为 28px × 28px 的 Light Icon Button M，未复用带横向 padding 的数字页码按钮 | `pagination.md` |
| 45.2 | 上一页 / 下一页箭头使用次要图标色，未沿用页码文本主色 | `pagination.md` |
| 45.3 | `.pagination-main` 与 `.page-extra` 组间 gap 为 16px；跳页输入组内部 column-gap 为 8px | `pagination.md` |
| 45.4 | `.pagination-summary` 使用 KD 主要文本颜色；每页条数 Select 内边距为左 7px / 右 5px，跳页 Text Field 左右 7px 且文本居中 | `pagination.md` |
| 45.5 | 分页器样式来自 `_css/pagination.css` 标准资产，未在页面中另写一套不可追溯的分页器 CSS | `pagination.md#标准资产` |
| 45.6 | 分页器交互来自 `KdAdminPagination.create(...)` 或 `_js/pagination.js` 标准实例，未在页面中另写一套分页联动逻辑 | `pagination.md#标准资产` |
| 46 | 总条数、已选条数、页码数量、当前页、每页条数和表格可见行数由同一数据源计算并联动 | `pagination.md` |
| 46.1 | 表格内容不满一屏时，Pagination 紧跟表格最后一行，而不是被 flex / sticky 策略推到底部 | `pagination.md#Pagination 区域` |

## 语义与交互

| # | 检查点 | 规则来源 |
|---|---|---|
| 47 | 可点击元素使用 button / a / input / select 或 KD 组件语义 | `../interaction-states.md` |
| 48 | hover / active / focus-visible / selected / disabled 均可感知 | `../interaction-states.md` |
| 49 | Checkbox 可聚焦且同步行选中态 | `../interaction-states.md` |

## 全局

| # | 检查点 | 规则来源 |
|---|---|---|
| 50 | 所有文本使用 KD-Base-Style 文字变量，未手写裸字体/字号/字重 | `kd-foundation` |
| 51 | 所有图标使用 KDIcon pro 语义图标，未用字符替代 | `../icons.md` |
| 52 | HTML 预览铺满浏览器视口，未使用固定 1366×768 容器 | `../page-skeleton.md#自适应` |
| 53 | 关键区域标注 `data-kd-component` 或 `data-kd-pattern` | `SKILL.md#输出与验证` |
