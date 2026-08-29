# 页面骨架

## 标准层级

管理后台表格页分为上、下两大结构：

```text
页面
├─ 顶部信息栏
└─ 基础区
   ├─ 左侧：管理后台导航
   └─ 右侧：内容区
```

## 页面背景

- 页面背景使用 `场景/背景/kd-color-background-base`（浏览器视口与基础区底层背景）。
- 顶部信息栏和左侧导航背景同样使用该 Token，不得硬编码临时颜色。
- 内容区背板使用 `场景/背景/kd-color-background-bottom`（详见"内容区背板"一节）。
- 不得把页面背景和内容区背板混用。
- HTML 预览优先复用 `references/_css/page-shell.css` 承接 App Shell 场景层 CSS；页面内只补业务特有布局，不再逐页重写顶部栏 / 基础区 / 内容背板的同构样式。

## 顶部信息栏

> 三段式结构（企业信息 Hug / 搜索容器 Fill / 个人信息 Hug）和核心约束见 [saas/SKILL.md](../../SKILL.md)。以下仅列管理后台补充的实现细节。

Figma 来源：`开放平台 Daily 2025 / node-id=10182-14602`（[链接](https://www.figma.com/design/ga8pTy4ori9dexlWzMHjaq/%E5%BC%80%E6%94%BE%E5%B9%B3%E5%8F%B0-Daily-2025?node-id=10182-14602)）

- 左右内边距：左 32px，右 16px。
- Auto Layout：`layoutMode=HORIZONTAL`，主轴 `SPACE_BETWEEN`，交叉轴 `CENTER`，`itemSpacing=12`，`layoutWrap=NO_WRAP`。
- 顶部搜索两层结构：外层搜索容器（Fill、Hug 高度、横向 Auto Layout、主轴/交叉轴居中）+ 内层 Text Field（Fixed 367px x 32px，在容器内水平居中）。
- 内层搜索输入必须使用 KD 标准 Text Field L（`data-kd-component="Text Field / KDTextField"`），样式从 `kd-components/_css/input.css` 复制，不得自写搜索框样式。前置图标使用 KDIcon pro `magnifier`。
- 企业认证标签仅在需要时展示。
- 个人信息内边距 `8px 8px 4px 4px`（以组件实例为准），欢迎语 + 20px 头像 + 12px `arrow_down_s`。
- 如业务无全局搜索入口，仍保留中间 Fill 容器作为弹性空间。
- 所有可点击入口必须使用真实 `button` / `a` 或 KD 组件语义。

## 基础区

基础区位于顶部信息栏下方，是左右 Auto Layout：

```text
基础区
├─ 管理后台导航：固定宽度（212px，见 saas/SKILL.md）
└─ 内容区：占据剩余宽度
```

- 导航与内容区之间通过内容区背板与背景层级形成视觉分区，不使用 `border-right`。
- 内容区宽度为 1154px 时，内部设置区宽度为 1138px（右侧 16px 由 Content Shell padding 提供）。

## 内容区

内容区是 Content Stack 内部的上下 Auto Layout，具体内容因页面类型而异。

### 表格列表页

自上而下固定顺序：

| 模块 | 高度 | 说明 |
|---|---:|---|
| 面包屑 Breadcrumb | 40px | 当前业务路径，顶部 padding 8px |
| 描述栏 | 32px | 当前页面说明，不重复页面标题 |
| 命令栏 | 40px | 左筛选组 + 右页面动作组，筛选组内控件 M 号 28px，查询/搜索与重置跟随筛选组件 |
| 表格区域 | 按内容自适应 | 承载 Table（高度约束见"内容区背板"） |
| 分页器区域 | 52px | 默认紧贴表格最后一行；表格内容超过内容区一屏高度时允许吸底，内容回到一屏内后恢复跟随表格末尾（详细规则见 `table-list-page/pagination.md`） |

> 各模块的详细规格见 `table-list-page/` 子目录。

### Dashboard / 设置列表页

> 待定义。占位见 `dashboard/README.md` 和 `settings-list/README.md`。

## 内容区背板

> padding 层级说明：Content Shell 负责外围右侧 16px padding（将内容区与页面右边缘隔开）；Content Stack 内部各模块（命令栏、表格区域）自带上 12px、左右 20px padding，两者分属不同容器层级。

1. Content Shell 是无视觉样式容器，只保留布局能力和右侧 16px padding；不得设置背景、圆角或阴影。
2. Content Stack 承载内容区视觉背板：填充 `场景/背景/kd-color-background-bottom`，阴影 `浅色/阴影/kd-box-shadow-small`，左上、右上圆角 8px。
3. Content Stack 高度必须撑满 Content Shell 的可用高度（HTML 中作为 `flex: 1 1 auto` 子项），而非按内容高度收缩。
4. Content Stack 只负责外层背板撑满；内部 Table Area 按内容自适应，不得用 `flex: 1` 永久撑高表格区域来固定 Pagination。
5. 内容区内部模块不得越过 Content Shell 右侧 padding。

## 面包屑

Figma 来源：`管理后台 PC Daily 2026 / node-id=1371-19580`（[链接](https://www.figma.com/design/Mjt3I1fQwxPEdXS4mpcvgM/%E7%AE%A1%E7%90%86%E5%90%8E%E5%8F%B0-PC-Daily-2026?node-id=1371-19580)）

- 必须使用 Breadcrumb 组件，尺寸 M；整体高度 40px，顶部 padding 8px，内容底对齐。
- 横向 Auto Layout（`layout-mode: horizontal`，交叉轴居中，item gap 按组件实例）；HTML 预览使用 inline-flex / flex 同构。
- 每个文本项 Hug 内容，不得固定宽度；长文本可截断但不得压缩箭头图标盒。
- 分隔箭头使用 KDIcon pro `arrow_right_s`，16×16 图标盒作为独立子项居中放置；箭头图标盒中心线与文字行盒中心线视觉对齐，不得按基线/顶部/底部硬对齐。不得使用 `/`、`>`、左箭头或纯文本字符替代。
- 如果当前模块为会员功能，最后一级面包屑打开增值标识属性，展示 `vip_service` 会员图标。

## 描述栏

- 只展示描述文案，不得额外添加页面标题或把面包屑当前项重复成标题。
- 描述栏高度固定为 `32px`。
- 描述栏文本默认在行高内做底对齐；HTML 预览可用 `align-items: flex-end` 或等价 Auto Layout 实现，不使用垂直居中模拟。
- 描述栏只承载单行 `13px / 20px` 的说明文案，不得混入按钮、标签、状态元素。

## 自适应

- Figma 生成页面默认画板 1366×768；HTML 预览必须铺满浏览器视口（宽高均 fill），不得用固定尺寸容器模拟画布，也不得把 `.app` 固定为 1366px 宽或 768px 高。
- 表格宽度不得超出 Content Stack 内部左右 20px padding 形成的可用区域。
- 列内容无法完整展示时，表格内部横向滚动，并仅在发生横向溢出时启用操作列固定。
