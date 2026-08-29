# 命令栏

## 标准结构

> HTML 预览中，命令栏在管理后台表格页的场景层布局（`command-bar`、`filter-group`、`page-actions`、筛选项宽度约束等）优先复用 `references/table-list-page/_css/table-list-page.css`；页面内只补业务特有差异，不再逐页手写命令栏外层布局。

命令栏默认单行高度为 40px，是一个横向 Auto Layout。结构分为“筛选组”和“页面动作组”，其中搜索与重置属于筛选组，不属于右侧页面动作组：

```text
Command Bar
├─ 筛选组 Filters：左侧，flex: 1，gap 8
│  ├─ 筛选组件 1..N
│  ├─ 查询 / 搜索 Button
│  ├─ 重置 Button
│  └─ 展开 / 收起 Button（仅溢出时出现）
└─ 页面动作组 Actions：右侧，hug 内容，gap 8
```

- 命令栏左右两组之间 gap 固定为 32；不得因视口收窄或页面动作组较宽自行改成 16、24 等临时值。
- 左侧筛选组自适应占满剩余宽度。
- 右侧页面动作组宽度由按钮内容撑开，只承载新增、导入、导出、批量操作等页面级动作，不承载查询/搜索和重置。
- 命令栏页面动作组必须与筛选组件第一行顶对齐；当左侧筛选组换行或收起时，右侧页面动作组仍停留在命令栏区域顶部。
- 操作区不得脱离命令栏外置，也不得和筛选组拆成上下两块。
- **HTML / Figma 同构硬性结构**：页面级动作组必须是 Command Bar 的直接子项，与筛选组互为同级；HTML 预览中推荐结构为 `.command-bar > .filter-group + .page-actions`。
- **禁止反模式**：不得在 Command Bar 后另起 `.toolbar`、`.action-bar`、`.batch-actions` 等独立区域承载新增、导入、导出、批量删除、批量操作等页面级动作。截图或旧系统中即使出现上下两行，也必须按 KDesign 重建为命令栏右侧页面动作组。
- 默认单行命令栏使用顶部 12px padding、左右 20px padding，控件高度 28px。
- 后台类命令栏的右侧页面动作组始终固定在第一行右侧，不能被筛选项挤到第二行。
- 查询/搜索与重置按钮必须紧跟在最后一个可见筛选组件之后，与筛选组件处于同一 Auto Layout 容器；不得放入右侧页面动作组，也不得独立成第二行。
- 当命令栏无页面级动作时，仍保留筛选组内部“筛选组件 → 查询/搜索 → 重置 → 展开/收起”的顺序；不得为了左右对齐把查询/重置推到最右侧。

## Figma 对齐来源

查询/搜索与重置按钮的跟随布局参考以下 Figma 节点：

- `开放平台 Daily 2025 / node-id=10133-144824`
  `https://www.figma.com/design/ga8pTy4ori9dexlWzMHjaq/%E5%BC%80%E6%94%BE%E5%B9%B3%E5%8F%B0-Daily-2025?node-id=10133-144824`
- `开放平台 Daily 2025 / node-id=10128-144658`
  `https://www.figma.com/design/ga8pTy4ori9dexlWzMHjaq/%E5%BC%80%E6%94%BE%E5%B9%B3%E5%8F%B0-Daily-2025?node-id=10128-144658`

从这两个节点抽象出的生成规则：

1. 筛选组是一个具备展开能力的 Auto Layout 容器，内部顺序必须保持业务读取顺序；默认收起态必须按单行渲染，不得直接换行。
2. 查询/搜索按钮与重置按钮是筛选组尾部子项，跟随筛选控件流式排布。
3. 页面动作组是独立的右侧 Hug 容器，仅用于页面级动作。
4. 当筛选组宽度不足时，收起态必须自动计算第一行可用宽度，按业务顺序尽量展示更多筛选组件；只有确实放不下的靠后非核心筛选组件才进入展开区，同时确保查询/搜索、重置、展开/收起仍与可见筛选组件保持同一行。
5. 展开态展示全部筛选组件时，查询/搜索和重置仍跟随筛选组件末尾，不得移动到页面动作组。

## 生成前结构判定

生成管理后台表格页时，先把所有按钮按语义分组：

1. 查询、搜索、重置、清空、全部：属于筛选组尾部，留在 `.filter-group` 内。
2. 新增、添加、导入、导出、批量删除、批量操作：属于页面动作组，必须放入 `.page-actions`。
3. 行内修改、详情、删除：属于表格操作列，不进入命令栏。

完成分组后再生成 DOM。只要页面存在任意页面级动作，Command Bar 必须有两个直接子项：左侧 `.filter-group` 与右侧 `.page-actions`。不得先生成筛选命令栏，再在其下方补一个工具栏承载页面动作。

## 展开与收起

当筛选项或按钮过多导致单行无法完整容纳时，必须启用后台类命令栏展开/收起能力：

1. 收起态是默认态，筛选组必须保持单行：HTML 预览使用 `flex-wrap: nowrap` 或等价实现，Figma 使用单行 Auto Layout；不得因为筛选项过多让默认态自然换到第二行。
2. 收起态不是固定隐藏若干项，而是“单行最大填充”：在扣除右侧页面动作组、32px 左右组 gap、查询/搜索、重置、展开/收起按钮后，按筛选项业务顺序和宽度逐个判断是否能放入当前行；能放下的必须展示，放不下的才收起。
3. 展开态才允许筛选组 `flex-wrap` 换行；展开后展示全部筛选组件，允许形成两行或多行，但查询/搜索、重置仍跟随最后一个筛选组件末尾。
4. 右侧页面动作组始终保持在第一行右侧，使用 `shrink-0` 或等价 Auto Layout。
5. 查询/搜索、重置、展开/收起按钮放在筛选组末尾，并按“查询/搜索 → 重置 → 展开/收起”的顺序排列。
6. 展开/收起按钮使用 `轻浅 Light + 强调 Highlight` 属性的 Button M，后置图标使用 KDIcon pro `arrow_down_s` / `arrow_up_s`。
7. 展开/收起按钮状态必须与 `aria-expanded` 同步：`false` 对应“展开 + arrow_down_s”，`true` 对应“收起 + arrow_up_s”；若使用同一图标节点，必须基于 `aria-expanded` 做可感知方向切换（例如旋转），禁止文案和箭头方向不一致。
8. 展开/收起按钮必须设置最小宽度，且 `white-space: nowrap`，浏览器宽度不足时不得出现文本竖排。
9. 收起态只展示第一行筛选项；展开态展示全部筛选项。
10. 只有当左侧筛选组在当前宽度下无法完整展示时才显示展开/收起按钮；如果当前宽度可完整展示全部筛选组件，必须隐藏展开/收起按钮并展示全部筛选项。
11. 页面宽度不足时优先收起筛选组内靠后的非核心筛选组件，保留查询、重置、展开/收起按钮；其它筛选组件按从右向左逐个收起。
12. 页面宽度变宽时，已收起筛选组件按从左向右逐个放出，直到全部展示；展开态强制展示全部筛选项。
13. 查询、重置、展开/收起按钮必须保持同一行；如果任一按钮即将换行，必须继续向前收起一个或多个筛选组件，直到按钮组保持单行。
14. 生成 HTML 时，非核心筛选项必须具备可被收起的稳定标记，例如 `data-collapse-priority` 或 `.is-collapsible`，并通过运行时测量或等价布局计算决定收起态展示数量；不得只依赖固定媒体查询或固定隐藏数量，否则会在宽屏下留下可继续放置控件的大空白。

- 展开态 Command Bar 不额外增加底部 padding；不得设置 `padding-bottom: 8px`。
- 当筛选组内组件全部展示时，展开/收起按钮必须隐藏；这是硬性规则，不得为了占位或保持布局稳定而显示。

## 控件尺寸

- 命令栏内 Text Field、Select、Button 均使用 M 号。
- M 号高度为 28px。
- 命令栏自身高度仍为 40px，内部控件垂直居中。
- 推荐宽度：Text Field 160px、Select 168px、DateEdit / DateRange 252px、查询按钮 72px、重置按钮 72px、展开/收起轻浅强调按钮最小宽度 64px。
- **admin-console 表格页场景特例**：首个主搜索输入框默认固定宽度 `240px`；除非页面级 reference 另行声明，不得回落到通用 `160px`。
- 命令栏筛选控件必须保证文本可读性，宽度不足时优先收起靠后的非核心筛选项或在展开态换行，不得通过过度压缩控件宽度来维持单行。
- HTML 预览中筛选项外层必须使用 `flex: 0 0 auto`、`flex-shrink: 0` 或等价约束；Text Field / Select / DateEdit 必须设置与推荐宽度一致的 `min-width`。禁止在筛选项外层使用会导致控件被压扁的 `flex: 0 1 auto; min-width: 0` 组合。
- Text Field / Select 内部文本区可以 `min-width: 0` 以避免内容溢出外壳，但外层控件本身不得低于语义最小宽度；Select 的当前值、Input 的 placeholder、日期输入的开始/结束文案必须在默认状态下可读。
- **admin-console 表格页命令栏 Select 特例**：当 HTML 预览需要更贴近业务文案宽度时，筛选区 Select 可以不使用统一固定宽度，而改为“按默认 placeholder 文案实测最小宽度”。
- 上述实测规则只适用于 **admin-console 场景的命令栏筛选 Select**，不回写到通用 `kd-components` 的 Input / Select 组件规范。
- 实测宽度公式：`ceil(placeholder 文案实测宽度 + 外壳左右 padding + 外壳左右 border + 箭头前间距 + 箭头自身宽度 + 2px 安全余量)`。
- 实测后的宽度应直接写回筛选项外层容器的 `width` 与 `min-width`，并保持整数像素；不得只改内部 `.kd-input-inner` 宽度。
- 若页面已提供更高优先级的业务宽度声明，按页面级 reference 执行；否则优先使用实测宽度而不是继续固化 `168px`。
- 命令栏内 Text Field、Select、DateEdit、Button 必须使用 KD 标准组件或严格同构结构；HTML 预览需标记 `data-kd-component`。

## 筛选组

1. 筛选组内禁止外置 label。
2. 字段语义必须融合进控件 placeholder。
3. 正确示例：
   - `请输入名称或邮箱地址`
   - `请输入负责人姓名`
   - `请输入成员姓名或部门`
   - `请选择联系人属性`
4. 错误示例：
   - 外置 `联系人` label + 输入框 placeholder `请输入名称`
   - 外置 `部门` label + 输入框 placeholder `请输入部门`
5. 当命令栏存在多个搜索形态 `Text Field / KDTextField` 时，只有第一个输入框拥有前置搜索图标。
6. 第二个及之后的文本输入框必须设置 `PrefixIcon=false` 或等价结构。
7. 输入框内部必须使用 Auto Layout，文本区必须允许收缩，避免 placeholder 贴近右侧或溢出。
8. Text Field 没有输入值时不得展示清空按钮；清空按钮仅在控件已有实际 value 时出现。

## 查询与重置

1. 查询按钮使用强调状态的 Secondary Button。
2. 重置按钮使用普通 Secondary Button。
3. 查询和重置不得同时使用强调状态。
4. 查询按钮跟随筛选组，位于筛选控件之后；重置按钮紧随查询按钮之后。
5. 命令栏按钮文本使用常规字重，不因强调或主要状态加粗。
6. 次要按钮和次要强调按钮的 hover 状态优先检测组件库；无法检测时使用 `场景/填充/kd-color-fill-light`。
7. 查询/搜索与重置按钮禁止放入右侧页面动作组；右侧页面动作组只放页面级动作。
8. 如果筛选组只有一个搜索输入框，结构仍为 `Text Field → 查询/搜索 → 重置`，不得将查询/重置右对齐到命令栏末端。
9. 查询/搜索按钮与重置按钮均不得带前置图标、后置图标或 icon-only 形态；按钮内容只保留文本。
10. 查询按钮的 highlight 语义必须同时作用于文本和边框，禁止出现“蓝字 + 灰边框”的半实现状态。

## 按钮颜色变量

> 各按钮类型（Primary / Secondary / Light 及其 Highlight / Danger 变体）的完整状态色值表见 `kd-components/button.md` 和 `kd-components/_css/button.css`。命令栏中使用时严格遵守组件规范，不得自定义临时色值。

命令栏中涉及的按钮类型：Primary、Secondary、Secondary + Highlight、Secondary + Danger、Light、Light + Highlight。

- Button focus 使用 KD Button Focus：外层 `var(--kd-color-public-normal)`，内层 `var(--kd-color-fill-base)`；Light + Highlight 不得因此出现可见蓝色边框。
- Button pressed / active 只允许改变状态颜色，不得通过 `transform`、位置偏移或文字偏移表达点击状态。
- Disabled / Loading 按组件库属性处理，禁用态不得自行改成新颜色，HTML 可用组件同构的 opacity/禁用语义表达。
- 如 HTML 预览需要补齐 Highlight 变体，必须补齐默认、hover、active、focus-visible 的完整状态，而不是只写一个改字色的临时类。

## 按钮组

1. 必须先定义唯一主操作，例如新增、添加、保存。
2. 主操作使用 Primary Button，固定放在最右侧。
3. 如无页面级 reference 或明确业务说明，**管理后台表格页面右上角的主操作按钮默认不带前置图标、后置图标或 icon-only 装饰**；标准形态为纯文字 Primary Button。
3. 次要操作使用 Secondary Button，位于主操作左侧。
4. 页面动作组中的危险操作必须使用 **Secondary + Danger Button**，位于主操作左侧；例如批量删除、批量移除、作废。不得在命令栏页面动作组中使用 Primary Danger。
5. 批量导入、导出等次要操作使用 Secondary Button。
6. 同一按钮组内按钮之间 gap 8。

### 页面动作组危险按钮

- 命令栏右侧 `.page-actions` 内的删除、移除、作废、批量删除等危险操作，一律使用 Secondary + Danger 属性。
- Secondary + Danger 的默认态必须有红色危险边框，HTML 预览中应显式定义 `--kd-color-line-error` 或等价错误线条变量，并让 `.kd-button-danger` 默认 `border-color` 指向该变量；不得让 `.kd-button-secondary` 的普通灰色边框覆盖危险按钮默认态。
- Primary Danger 仅用于强确认场景中的唯一主按钮，例如确认弹窗 Footer 的“确认删除”，不得用于表格页命令栏的页面动作组。
- 当页面动作组同时存在危险操作和主操作时，顺序为：危险操作 / 次要操作 / 主操作；主操作仍固定最右。

## 可访问性与交互

- 命令栏内按钮必须是 button 或标准按钮组件语义。
- 禁止用 div/span 模拟按钮。
- 所有按钮必须具备 hover、active、focus-visible、disabled 状态。
- 搜索输入支持 Enter 触发查询；重置按钮清空筛选项后刷新列表。

## 组件状态硬性规则

- 命令栏内 Button M 必须遵守 KD Button Medium：高度 28px，padding `2px 11px`，font-size 13px，font-weight 400，radius 6px。
- 展开/收起按钮必须使用 Light Button + Highlight，不得使用 Secondary Button + Highlight；hover / active 继承 Light Button 状态层，文字/图标颜色使用 Highlight 的 public 状态色。
- Light + Highlight 的默认、hover、active、focus-visible 均不得出现蓝色边框；边框必须保持 transparent。
- Light Button M 仅用于真正的轻浅文字按钮，使用 `padding: 2px 8px`。
- Secondary Button hover 使用 KD Secondary hover 背景，active 使用 KD Secondary active 背景，不得自行加粗或改变字号。
- Text Field / Select M 必须遵守 KD Input Medium：高度 28px，外壳 padding `0 4px 0 8px`，内部文字 13px。
- Text Field / Select hover 只改变边框到 `kd-color-line-medium`。
- Text Field / Select focus 只改变边框到 `kd-color-line-public` / public normal，禁止添加 focus box-shadow。
- Text Field 输入内容后才展示清空按钮；空值或仅 placeholder 状态不得展示清空按钮。清空按钮必须是可聚焦 button，hover/active 使用 KD 状态层变量，不得只是静态图标。
- Select 右侧箭头必须使用 KDIcon pro `arrow_down_s`，打开态旋转或切换为对应打开状态。
- 命令栏中的 Select、Date、Pagination 等附属箭头，如采用内联 SVG 模拟，必须遵守 `icons.md` 的 16x16、线性、单色、圆角端点 / 连接规则。

## 展开/收起 JS 参考实现（确定性资产）

生成 HTML 预览时必须包含以下功能等价的运行时逻辑。可逐行复制或等价改写，但不得省略核心测量和隐显逻辑。

> 完整 JS 源码见 [`_js/command-bar-collapse.js`](_js/command-bar-collapse.js)，生成时直接内联或外链该文件。

该参考实现除负责筛选项收起/展开外，还应在初始化与 `resize` 时同步执行命令栏 Select 的 placeholder 宽度测量：
- 仅测量 `.command-bar .select-field.kd-select-trigger`。
- 测量节点使用与 `.kd-input-inner` 相同的字体与字距配置。
- 结果使用 `Math.ceil(...)` 取整，并额外预留 `2px` 安全余量。
- 先同步 Select 外层宽度，再执行收起态单行测量，避免仍按旧宽度判断是否需要折叠。

### 必要的 HTML 标记约定

上述 JS 依赖以下 `data-kd-role` 标记：

| 标记 | 作用于 | 说明 |
|---|---|---|
| `data-kd-role="tail-btn"` | 搜索按钮、重置按钮 | 始终保留在筛选组末尾的尾部按钮 |
| `data-kd-role="toggle-expand"` | 展开/收起按钮 | 控制展开/收起切换 |
| `data-kd-role="toggle-label"` | 展开/收起按钮内的文本 span | JS 动态切换文案 |
| `data-kd-role="toggle-icon"` | 展开/收起按钮内的图标 span | JS 动态旋转图标 |

筛选项仍保留 `.filter-item` 类名和可选的 `data-collapse-priority` 属性；JS 按 DOM 顺序从后向前收起。
