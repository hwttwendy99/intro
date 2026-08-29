# 导航

## 使用范围

本文件定义管理后台标准导航组件在表格页中的使用方式。

## 组件来源

- 左侧导航必须使用 KD 标准组件 `导航 Navigation`。
- HTML 预览可使用同构结构模拟，但必须标记为 `data-kd-component="Navigation"` 并遵守 `导航 Navigation/ 导航选项` 的尺寸、层级、图标和状态规则。
- 写入 Figma 时不得手绘导航，需要复用 KD 组件库中的 `导航 Navigation` 组件。
- HTML 预览优先直接复制 `kd-components/_css/navigation-sidebar.css` 作为 Navigation 的 CSS 事实源，不得只手写一份“看起来像 KDesign”的近似 Navigation。
- 管理后台场景补充层（`navigation-shell`、`nav-list`、`nav-footer`、icon-only 收起态等）优先复用 `references/_css/page-shell.css`，不要在每个后台页面里再抄一份局部导航样式。

## 外层结构边界

- 允许新增 sidebar、slot、nav-list、footer 等场景外壳容器。
- 外壳层只负责场景布局，不得改写 `kd-navigation-item` 的核心尺寸、状态层、selected 规则和层级缩进语义。
- 管理后台的局部视觉/交互补充必须限制在场景作用域内（如 `.navigation-shell`），不得反向修改 `kd-components/_css/navigation-sidebar.css` 的全局实例参数。
- 允许在管理后台作用域内补充以下规则：`kd-navigation-item` 占满 `nav-list`、父子级分组容器显隐、右侧展开箭头颜色/朝向、选项圆角、“文本主导高度”的多行场景特例，以及侧栏 `icon-only` 收起态；这些补充不改变全局 Navigation CSS 实例的 SSOT。

## 层级规则

管理后台导航支持一级、二级、三级、四级导航：

1. 一级导航可带 KDIcon pro 图标。
2. 二级导航不显示业务图标，按二级缩进展示。
3. 三级导航不显示业务图标，按三级缩进展示。
4. 四级导航不显示业务图标，按四级缩进展示。
5. 不同层级必须通过缩进表达层级关系，不得只依赖字号、颜色或加粗。
6. 当前选中项使用 KDesign selected 状态。

## 标准缩进

读取 Figma `导航 Navigation` 后，导航实例总宽为 212px，内部 Slot x=16、宽 180px；所有导航选项宽 180px、高 32px，选项垂直间距为 4px。完整展开高度可超过页面高度，因此页面内必须启用导航区域纵向滚动。

- Navigation 实例：宽 212px。
- Navigation Slot：x=16，宽 180px。
- 管理后台预览中的 `nav-list` 不再额外设置左右 padding；导航项直接占满 180px 宽度。
- 管理后台预览中的 `kd-navigation-item` 必须显式 `width: 100%`，占满 `nav-list` 的 180px 可用宽度；不得把“占满宽度”的责任下沉给临时子容器。
- 管理后台左侧 sidebar 总宽固定为 212px，内部承载 180px 宽的 Navigation 组件。
- 管理后台一级导航项使用 `min-height: 32px` 而非固定 `height: 32px`；默认单行时视觉高度仍为 32px，多行时 item 背景、hover 与 selected 高度随内容增长。
- 管理后台一级导航项：宽 180px，左右 padding 仍保持 `0 4px 0 8px` 的水平关系；当启用多行文本时，应改写为等价的纵向内边距方案，保证默认单行高度仍落在 32px。
- 管理后台一级导航文本允许最多展示两行，超过两行使用省略截断；不得无限增高把侧栏节奏打散。
- 二级导航项：宽 180px，不放业务图标，使用 `padding-left: 36px`。
- 三级导航项：宽 180px，不放业务图标，使用 `padding-left: 48px`。
- 四级导航项：宽 180px，不放业务图标，使用 `padding-left: 60px`。
- 二级、三级、四级不得额外插入业务图标占位；缩进只由对应层级 padding 控制，避免重复缩进。

## 一级导航

- 一级导航可包含左侧图标、文本、右侧展开/收起箭头。
- 左侧图标必须来自 KDIcon pro。
- 管理后台场景中，前图标盒与后图标盒高度应与文本行高保持一致；图标本身仍维持 `16px` 盒宽，不得因为多行文本把图标放大。
- 右侧展开/收起箭头必须使用 KDIcon pro：
  - 展开态：`arrow_up_s`
  - 收起态：`arrow_down_s`
- 管理后台场景中，带子级的父项必须使用 `button`，并显式同步 `aria-expanded`、`aria-controls` 与子级容器显隐。
- 管理后台场景中，右侧展开箭头默认使用 `kd-color-icon-secondary`；当父项本身进入 selected 态时，箭头跟随文本色一起切换为 `currentColor`。
- 管理后台场景中，右侧箭头不依赖 `margin-left: auto` 的剩余空间挤位；应优先使用“左侧 label/text fill、右侧 caret fixed”的布局关系。
- 管理后台场景中，右侧箭头图标盒右边缘到 item 状态背景右边缘为 `8px`。
- 如果一级导航没有子项，可以不显示展开箭头。

## 二级导航

- 二级导航无业务图标。
- 二级导航如果存在三级子项，可显示展开/收起箭头。
- 二级导航文本缩进必须大于一级导航。

## 三级导航

- 三级导航无业务图标。
- 三级导航文本缩进必须大于二级导航。
- 三级导航如果存在四级子项，可显示展开/收起箭头。

## 四级导航

- 四级导航无业务图标。
- 四级导航文本缩进必须大于三级导航。
- 四级导航通常作为叶子节点，不显示展开/收起箭头。

## 滚动与展开

- 导航项完整展开后如果高度超过可视区域，必须在 Navigation / nav-list 内启用垂直滚动。
- 左侧 Sidebar 本身不应撑开页面高度；`nav-list` 使用 `flex: 1`、`min-height: 0`、`overflow-y: auto`。
- 展开/收起必须真实控制子级显隐，并同步 `aria-expanded` 与箭头图标。
- 折叠父级时，其所有后代层级必须隐藏；重新展开时，只恢复该父级下已展开分支的可见子项。
- 管理后台父子级结构建议使用单独的分组容器（如 `.nav-group`）承载子项，并在折叠态使用 `[hidden]` 或等价显隐规则；如果分组容器声明了 `display: flex`，则必须额外补 `.[scope] .nav-group[hidden] { display: none; }`，避免作者样式抵消浏览器默认隐藏行为。
- 管理后台父级与其第一条子级之间必须保留 `4px` 间距；当子级被包入分组容器后，需要显式恢复首条子级的 `margin-top: 4px`，避免被 `.kd-navigation-item:first-child` 的通用规则抵消。
- 管理后台右侧箭头朝向使用场景特例：收起态朝下、展开态朝上；该朝向规则只在管理后台导航作用域内生效，不得回写到全局 Navigation CSS 实例。
- 管理后台文本区在 `nav-label` 内必须左对齐；多行时文本块从首行起左对齐，不得出现视觉居中或被右侧箭头牵引的假对齐。

## 侧栏收起态

- 管理后台左侧导航允许切换为 `icon-only` 收起态；该能力属于场景交互，不属于通用 Navigation CSS 实例默认能力。
- 收起态侧栏总宽为 `64px`。
- 收起态 `kd-navigation-vertical` 宽度为 `32px`，左右 margin 各 `16px`，与展开态的导航列中心线保持一致。
- 收起态仅保留一级导航图标；导航文本、父级右侧展开箭头、所有子级分组以及底部“查看全部”入口必须隐藏。
- 收起态一级导航项仍保持可点击与 hover / active / focus-visible / selected 状态，不得因为隐藏文本而丢失交互反馈。
- 收起态前图标右侧 `4px` 间距必须去掉，使图标在 `32px` 宽度内几何居中。
- 收起态底部展开/收起按钮与上方 icon-only 导航项必须共用同一条 `32px` 视觉轨道；不得沿用展开态 footer 的宽度/留白关系。
- 收起态底部展开/收起按钮自身使用 `32px × 32px` 盒模型，`padding: 0`，内容严格居中。
- 收起态底部按钮图标使用右向双箭头；展开态使用左向双箭头。优先直接切换左右向图标语义，不建议依赖视觉不对称的旋转补偿。

## 查看全部与侧栏收起

- “查看全部”入口必须在导航底部。
- “查看全部”应像一级导航一样左对齐，包含左侧 KDIcon pro 图标和文本。
- “查看全部”右侧的侧栏收起入口必须使用 Light Icon Button，不得把收起图标直接塞进查看全部文字按钮内。
- 侧栏收起 Light Icon Button 内使用 KDIcon pro `arrow_left_double_s`。
- 底部入口必须是 button 或等价可聚焦控件。
- 侧栏展开态 hover 底部按钮时，tooltip 文案为“收起导航”；侧栏收起态 hover 时，tooltip 文案为“展开导航”。
- 该 tooltip 必须复用 KD Tooltip 标准实例（`.kd-tooltip` / `.kd-tooltip-content` / `.kd-tooltip-arrow`），箭头朝向展开/收起按钮。
- 管理后台底部展开/收起按钮的 tooltip 与按钮本体之间使用 `10px` 的内容框间距；该间距属于场景特例，只在 `.nav-footer-tooltip` 作用域内覆盖，不回写全局 KD Tooltip 实例。
- 点击底部按钮触发侧栏状态切换时，tooltip 必须立即消失；不得出现“点击后 tooltip 悬停残留”的状态错位。允许通过点击时临时抑制 tooltip 显示并主动 blur 按钮来关闭提示层。

## 颜色与状态

- 侧边导航悬停状态必须使用 KD `导航 Navigation` 组件状态变量 `场景/状态/kd-color-state-hover`，不得硬编码临时灰色。
- 管理后台左侧导航栏背景统一使用 `场景/背景/kd-color-background-base`，不得写死颜色或误用 `场景/填充/kd-color-fill-base`。
- 每个可点击导航项必须具备 hover、active、focus-visible、selected 状态。
- 管理后台导航项允许在 `.navigation-shell` 作用域内把 `kd-navigation-item` 的圆角覆盖为 `var(--kd-radius-md)`；该规则仅适用于管理后台，不改变通用 Navigation CSS 实例的 `4px` 圆角基线。
- 管理后台左侧导航图标与底部侧栏展开/收起按钮图标，允许在场景作用域内把 SVG `stroke-width` 覆盖为 `1`；该规则只影响导航区域，不应波及命令栏、表格、分页等其他图标。

## 语义与交互

1. 跳转型导航项优先使用 a 标签或标准导航组件语义。
2. 展开/收起型导航项使用 button 或支持 Enter/Space 的等价组件。
3. 不得用 div + click 作为唯一交互实现。

## 生成前结构判定

生成管理后台 HTML 预览时，先按语义判定每个导航项属于哪一类，再决定是否接入展开/收起和侧栏收起交互：

1. 只有跳转语义、没有子级的导航项：按普通一级/二级/三级/四级导航生成，不显示右侧展开箭头。
2. 带子级的父项：必须生成 `button` 语义，并同步 `aria-expanded`、`aria-controls`、子级容器显隐和右侧箭头方向。
3. 所有子级项：必须包入明确的分组容器中，不得只是“视觉上缩进”而没有真实父子关系。
4. 页面需要支持 icon-only 收起态时：必须同时生成底部展开/收起按钮、tooltip、以及收起态显隐规则；不得只做一个静态图标按钮。

## 必要的 HTML 标记约定

管理后台导航交互依赖以下类名与 `data-*` 标记；若缺少这些锚点，共享 JS 与规则映射都无法稳定工作：

| 标记 / 类名 | 作用于 | 说明 |
|---|---|---|
| `.navigation-shell` | 侧栏根容器 | 管理后台导航所有局部覆盖和交互状态的统一作用域 |
| `.kd-navigation-vertical[data-kd-component="Navigation"]` | Navigation 主体 | 标记为 Navigation 同构结构 |
| `.nav-list` | 可滚动导航区 | 承担纵向滚动和剩余高度填充 |
| `[data-nav-toggle]` | 带子级的父项按钮 | 标识父项开关，值与 `data-nav-group` 对应 |
| `aria-controls` | 带子级的父项按钮 | 指向对应子级容器 id |
| `[data-nav-caret]` | 父项右侧箭头图标 | JS 用于同步方向 |
| `.nav-group[data-nav-group]` | 子级容器 | 真实承载父项后代导航 |
| `[data-nav-sidebar-toggle]` | 底部展开/收起按钮 | 侧栏 `icon-only` 收起态的唯一开关 |
| `[data-nav-sidebar-toggle-icon]` | 底部按钮图标 | JS 用于同步左右双箭头状态 |
| `.nav-footer-tooltip` | 底部 tooltip 容器 | 复用 KD Tooltip 标准实例 |
| `[data-nav-sidebar-tooltip-label]` | tooltip 文案节点 | 展开态/收起态动态切换文案 |

## 展开/收起 JS 参考实现（确定性资产）

- 管理后台左侧导航的交互（父子级展开/收起、侧栏 `icon-only` 收起、底部按钮 tooltip 联动）建议优先复用 [`_js/navigation-sidebar.js`](./_js/navigation-sidebar.js)。
- 如页面结构遵循本文件中的类名与 `data-*` 约定，应优先直接内联或外链该脚本，而不是在每个 HTML 页面里重新手写一份近似逻辑。
- 如需扩展交互，优先在该参考脚本上追加能力，再同步回本规范；避免多个页面各自演化出不兼容的导航行为。
- 该脚本属于“确定性资产”：规范先定义结构和状态机，脚本只负责稳定落实这些规则；不得把脚本本身当成唯一规范来源。

## 规则到代码映射（HTML 预览，附录）

本附录用于把本规范中的管理后台导航规则映射到 HTML / CSS / JS 落地结构，方便生成预览和做代码核对。它有保留价值，但优先级低于前面的“结构规则 / 标记约定 / JS 参考实现”；当附录与正文冲突时，一律以正文为准。

| 规则 | 代码落点 | 说明 |
|---|---|---|
| 侧栏场景作用域 | `.navigation-shell` | 管理后台局部覆盖统一挂在该根容器下，避免污染全局 Navigation CSS 实例 |
| Navigation 主体 | `.kd-navigation-vertical[data-kd-component="Navigation"]` | 标记为 Navigation 同构结构 |
| 可滚动导航区 | `.nav-list` | 负责 `flex: 1`、`min-height: 0`、`overflow-y: auto` |
| 一级项本体 | `.kd-navigation-item` | 复用全局 Navigation item 基线，管理后台局部再补圆角、多行等特例 |
| 文本主导高度 | `.navigation-shell .kd-navigation-item` | 管理后台局部把固定 `height` 改为 `min-height: 32px`，允许 hover / selected 随内容增高 |
| 左侧信息组填充 | `.nav-item-row` + `.nav-label` + `.nav-item-text` | 使用“label/text fill + caret fixed”布局，不依赖 `margin-left: auto` |
| 最多两行文本 | `.nav-item-text` | 负责左对齐、两行截断、省略和多行文本排版 |
| 一级前图标盒 | `.kd-navigation-item__icon` | 展开态保留 `margin-right: 4px`；收起态在 `.navigation-shell.is-collapsed` 下清零 |
| 父级右侧箭头 | `.nav-caret[data-nav-caret]` | 固定在右侧，默认次要图标色，selected 时跟随 `currentColor` |
| 父项开关语义 | `[data-nav-toggle]` + `aria-expanded` + `aria-controls` | 仅带子级的父项使用，点击后切换显隐和箭头方向 |
| 子级容器 | `.nav-group[data-nav-group]` | 承载父项的后代导航，折叠态配合 `[hidden]` 真正隐藏 |
| `hidden` 显隐闭环 | `.navigation-shell .nav-group[hidden]` | 防止作者样式 `display:flex` 抵消浏览器默认隐藏行为 |
| 父子首项间距 | `.navigation-shell .nav-group > .kd-navigation-item:first-child` | 显式恢复首条子级 `margin-top: 4px` |
| 侧栏收起态根状态 | `.navigation-shell.is-collapsed` | 所有 icon-only 行为、尺寸和显隐规则的唯一开关 |
| 收起态导航列轨道 | `.navigation-shell.is-collapsed .kd-navigation-vertical` | `32px` 宽，左右 `16px` margin |
| 收起态内容隐藏 | `.navigation-shell.is-collapsed .nav-item-text`、`.nav-group`、`.nav-footer .kd-navigation-item:first-child`、`.nav-item-row > .kd-icon:last-child` | 分别隐藏文本、子级、“查看全部”和父级右箭头 |
| 底部区域 | `.nav-footer` | 承载“查看全部”和侧栏展开/收起按钮 |
| 底部切换按钮 | `[data-nav-sidebar-toggle]` | 控制侧栏展开/收起，更新 `aria-label` / `aria-expanded` |
| 底部切换图标 | `[data-nav-sidebar-toggle-icon]` | 展开态左双箭头，收起态右双箭头；如用旋转实现，需额外验证视觉中心 |
| 底部 tooltip 容器 | `.kd-tooltip.nav-footer-tooltip` | 必须复用 KD Tooltip 标准实例，不单独发明 tooltip 结构 |
| tooltip 文案节点 | `[data-nav-sidebar-tooltip-label]` | 展开态“收起导航”，收起态“展开导航” |
| tooltip 间距特例 | `.nav-footer-tooltip.kd-tooltip-right .kd-tooltip-content` | 管理后台局部把 `left` 覆盖到 `calc(100% + 10px)` |
| tooltip 点击关闭 | `.nav-footer-tooltip.is-tooltip-suppressed` | 点击侧栏切换按钮时短暂抑制 tooltip，再通过 `blur()` 关闭焦点态显示 |
| 导航图标粗细特例 | `.navigation-shell .kd-navigation-item .kd-icon svg`、`.navigation-shell [data-nav-sidebar-toggle-icon] svg` | 管理后台局部 `stroke-width: 1`，不影响其他区域图标 |
| JS 参考入口 | `references/_js/navigation-sidebar.js` | 推荐作为管理后台导航交互的单一脚本事实源 |

## Navigation 组件状态变量补充

读取 KD 标准 `导航 Navigation` 组件后，导航选项状态必须按以下变量执行：

| 状态 | 背景/状态层 | 文字/图标 | 字重 |
|---|---|---|---|
| Normal | `场景/状态/kd-color-state-normal` | `var(--kd-color-text-primary)` / `kd-color-icon-primary` | 400 |
| Hover | `场景/状态/kd-color-state-hover` | 不变 | 400 |
| Active / Pressed | `场景/状态/kd-color-state-pressed` | 不变 | 400 |
| Selected | `场景/状态/kd-color-state-pressed-public` | `kd-color-text-public` / `kd-color-icon-public` | 600 |

- 不得把导航 hover 直接写成 `场景/填充/kd-color-fill-light`，除非组件库状态变量无法读取且用户接受降级。
- 一级导航图标必须来自 KDIcon pro；二级、三级、四级导航无业务图标且不再保留图标位占位。
- HTML 预览如无法加载 KDIcon pro 资源，只能使用同名 SVG 符号模拟，并必须在说明中标明“预览模拟，不等同真实 KDIcon pro 实例”。
