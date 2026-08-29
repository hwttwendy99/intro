# Changelog

格式基于 [Keep a Changelog](https://keepachangelog.com/)。

---

## [0.5.15] - 2026-05-22

### Changed

- `references/table-list-page/_js/table-page-runtime.js`：新增表格列表页共享 runtime，统一承接滚动高度同步、分页实例装配、表格实例装配、选择态联动和 resize / observer 生命周期，减少后续列表页在 HTML 内联重复 bootstrap
- `references/table-list-page/page-config-pattern.md`：新增页面配置模式规范，约束列表页优先采用“共享 runtime + 页面 config”而不是继续复制 `seedRows / state / renderRow / pagination` 内联脚本
- `references/table-list-page/_js/table-cell-renderers.js`：`status()` 支持页面级 `statusMap`，避免不同后台模块把业务状态枚举不断堆入共享 helper
- `references/table-list-page/table-columns/rendering-patterns.md`、`references/table-list-page/checklist.md`：同步补充 `statusMap` 和 `table-page-runtime + page config` 约束
- `SKILL.md`：Reference 加载索引补充 `table-page-runtime.js` 与 `page-config-pattern.md`，版本号更新为 `0.5.15`

## [0.5.14] - 2026-05-22

### Changed

- `references/table-list-page/_css/table-list-page.css`：新增表格列表页模式层 CSS 资产，统一承接命令栏外层布局、筛选项宽度约束、表格区域 / 滚动层 / sticky 视觉以及列表页按钮变体，减少后续列表页复制页面内联样式
- `references/_css/page-shell.css`：新增管理后台共享页面壳层 CSS 资产，统一承接顶部信息栏、左侧导航场景层、内容区背板、面包屑、描述栏等页面级样式，减少后续后台页面重复手写近似结构
- `references/table-list-page/_css/table-cell-renderers.css`：新增表格单元格共享样式资产，统一主副双行文本、状态元素、缩略图占位、操作按钮组等易漂移片段
- `references/table-list-page/_js/table-cell-renderers.js`：新增表格单元格渲染 helper，统一状态图标路径、双行文本结构和操作按钮组合输出
- `references/table-list-page/table-columns/rendering-patterns.md`：新增“列类型确定后如何稳定渲染”的规范入口，约束 `renderRow()` 优先复用共享 helper，而不是逐页重写视觉片段
- `references/page-skeleton.md`、`references/navigation.md`、`references/table-list-page/table-columns/README.md`、`references/table-list-page/checklist.md`：同步登记新资产入口与 QA 约束
- `SKILL.md`：Reference 加载索引补充 `page-shell.css`、`table-cell-renderers.css`、`table-cell-renderers.js` 与 `rendering-patterns.md`，版本号更新为 `0.5.14`

## [0.5.13] - 2026-05-21

### Changed

- `references/table-list-page/table.md`：将“固定操作列”扩展为“固定列与固定操作列”，沉淀原生 sticky 优先、默认只固定最右侧操作列、左侧固定列必须由需求显式指定、无横向溢出时分割线与阴影一同取消、滚动到端点时销毁对应侧固定列边界、表头/表体固定列本体绘制 1px 分割线、透明 inset 单边阴影、固定列行态统一、左右固定列 `background-clip: border-box` 等规则
- `references/table-list-page/_js/table-list-page.js`：新增表格行为层确定性资产，统一承载固定列滚动端点状态、横向溢出状态、行 hover / selected、全选 / 半选、可选行渲染和分页器状态联动
- `references/table-list-page/checklist.md`：新增默认不固定复选框列、左侧固定列显式指定、固定列 sticky 计算样式、分割线状态绑定、端点状态同步、透明阴影伪元素、`pointer-events: none`、行态统一、表头表体分割线一致、圆角穿透处理等核对项
- `references/table-list-page/checklist.md`：新增 `KdAdminTable.create(...)` / `_js/table-list-page.js` 标准资产核对，避免后续表格页面各自手写不兼容行为逻辑
- `SKILL.md`：加载索引补充 `references/table-list-page/_js/table-list-page.js`，版本号更新为 `0.5.13`

## [0.5.11] - 2026-05-20

### Changed

- `references/navigation.md`：补充底部展开/收起按钮 tooltip 的 `10px` 场景间距特例，并写入规则到代码映射附录
- `references/table-list-page/checklist.md`：同步新增 tooltip `10px` 间距核对要求
- 当前新闻列表 HTML 已按共享 `navigation-sidebar.js` 同版逻辑对齐导航交互实现，减少页面内联逻辑与参考资产漂移
- `SKILL.md` 版本号更新为 `0.5.11`

## [0.5.12] - 2026-05-20

### Changed

- `references/table-list-page/command-bar.md`：沉淀 admin-console 命令栏筛选 Select 的场景特例，允许按 placeholder 文案实测最小宽度，并明确“整数像素 + 2px 安全余量 + 仅限 admin-console 命令栏”的边界
- `references/table-list-page/checklist.md`：新增对应核对项，避免后续把该规则误扩散到通用组件层或遗漏安全余量
- `references/table-list-page/_js/command-bar-collapse.js`：补齐命令栏 Select placeholder 宽度测量参考实现，并在初始化 / resize 时先同步宽度再执行收起态测量
- `references/table-list-page/command-bar.md`：新增 admin-console 表格页右上角主操作按钮默认纯文字、无图标的场景规则
- `references/table-list-page/checklist.md`：新增对应核对项，约束主操作按钮在无特殊说明时不带前置/后置图标

## [0.5.10] - 2026-05-19

### Changed

- `references/navigation.md`：按 `command-bar.md` 的组织方式重构导航交互章节，补充“生成前结构判定”“必要的 HTML 标记约定”“展开/收起 JS 参考实现（确定性资产）”
- `references/navigation.md`：保留“规则到代码映射（HTML 预览）”作为附录，降级为实现核对辅助材料，不再作为主规范主体
- `SKILL.md` 版本号更新为 `0.5.10`

## [0.5.9] - 2026-05-19

### Changed

- `references/_js/navigation-sidebar.js`：新增管理后台左侧导航交互参考实现，统一承载父子级展开/收起、侧栏 `icon-only` 收起与底部 tooltip 联动逻辑
- `references/navigation.md`：新增 “JS 参考实现” 章节，并把共享脚本登记为管理后台导航交互的优先事实源
- `references/table-list-page/checklist.md`：新增“优先复用 navigation-sidebar.js”核对项，降低后续 HTML 页面各自手写导航逻辑的跑偏风险
- `SKILL.md` 版本号更新为 `0.5.9`

## [0.5.8] - 2026-05-19

### Changed

- `references/navigation.md`：新增“规则到代码映射（HTML 预览）”清单，把管理后台左侧导航的场景规则映射到具体类名、`data-*` 属性与交互职责
- `SKILL.md` 版本号更新为 `0.5.8`

## [0.5.7] - 2026-05-19

### Changed

- `references/navigation.md`：补充管理后台左侧导航 `64px` icon-only 收起态规则，明确收起态轨道、文本/子级/底部入口显隐、底部按钮 `32×32` 几何与图标切换要求
- `references/navigation.md`：补充底部展开/收起按钮的 KD Tooltip 标准实例要求，以及点击切换时 tooltip 立即关闭的交互规则
- `references/table-list-page/checklist.md`：新增收起态轨道、icon-only 显隐、底部按钮几何与 tooltip 联动的核对项
- `SKILL.md` 版本号更新为 `0.5.7`

## [0.5.6] - 2026-05-19

### Changed

- `references/table-list-page/table.md`：整理固定操作列本轮会话沉淀规则，正式补充 overlay 固定列稳定实现、固定列本体绘制左侧分割线、表头底部 1px 底线保留等要求，并修正“表头 sticky 时 `box-shadow: none`”与表头底线实现的冲突表述
- `references/table-list-page/checklist.md`：新增 overlay 固定列锚定可视右侧、overlay panel 自绘左侧分割线、overlay 行高 / hover / selected / 按钮顺序同步等核对项
- `SKILL.md` 版本号更新为 `0.5.6`

## [0.5.5] - 2026-05-19

### Changed

- `references/navigation.md`：补充管理后台左侧导航“文本主导高度”规则，明确多行文本最多两行、默认单行 32px 视觉高度、hover / selected 高度跟随内容增长
- `references/navigation.md`：补充前后图标盒与文本行高一致、右侧 caret fixed + 右边缘 8px、文本左对齐、导航图标 `stroke-width: 1` 的管理后台特例
- `references/table-list-page/checklist.md`：新增对应的多行导航、右侧箭头布局与图标粗细核对项
- `SKILL.md` 版本号更新为 `0.5.5`

## [0.5.4] - 2026-05-19

### Changed

- `references/navigation.md`：并入本轮管理后台左侧导航复盘规则，明确通用 CSS 实例与 `.navigation-shell` 场景局部覆盖边界
- `references/navigation.md`：补充导航项 `width: 100%`、父子级分组显隐、`[hidden]` 显隐闭环、父子项 4px 间距、右侧箭头颜色/朝向的管理后台特例
- `references/navigation.md`：修正 Selected 字重表述为 `600`，与组件状态定义保持一致
- `references/table-list-page/checklist.md`：新增导航局部覆盖、分组显隐、父子级间距、箭头颜色/朝向等专项核对项
- `references/navigation-addendum-2026-05-18.md`：标记为历史补充，避免与主 reference 双维护冲突

## [0.5.3] - 2026-05-19

### Changed

- `command-bar.md`：新增 admin-console 表格页主搜索框默认 `240px` 的场景特例，避免回落到通用 `160px`
- `table.md`：补充 hover / selected 底部 `1px` 空气层、操作列表头背景隔离、固定列左侧裁剪 / 遮罩层允许方案
- `checklist.md`：新增对应的场景级核对项，后续生成管理后台表格页必须逐项校验
- `SKILL.md` 版本号更新为 `0.5.3`

## [0.5.2] - 2026-05-19

### Changed

- 将 `page-skeleton` / `navigation` / `command-bar` / `table` / `checklist` 的 2026-05-18 addendum 并回主 reference，减少双维护
- 同步更新 `SKILL.md` 版本号到 `0.5.2`
- 按合并后的 reference 继续收敛管理后台新闻列表 HTML 的导航、命令栏、表格与分页实现

## [0.5.1] - 2026-05-18

### Added

- `references/page-skeleton-addendum-2026-05-18.md` — 描述栏底对齐等页面骨架补充规则
- `references/navigation-addendum-2026-05-18.md` — Navigation CSS 实例复用与图标模拟边界
- `references/table-list-page/command-bar-addendum-2026-05-18.md` — 查询按钮 Highlight 边框与附属箭头图标补充规则
- `references/table-list-page/table-addendum-2026-05-18.md` — 状态列 / 推荐列路由、Checkbox 与分割线补充规则
- `references/table-list-page/checklist-addendum-2026-05-18.md` — 本轮复盘新增的页面级专项核对项

### Changed

- 将 2026-05-18 管理后台表格页复盘结果按页面骨架、导航、命令栏、表格、清单五类归档到对应目录，避免后续继续依赖会话记忆口头传递

---

## [0.5.0] - 2026-05-14

### Changed

- **多页面结构**：`references/` 从扁平结构重构为按页面类型分组——共享模块（page-skeleton、navigation、icons、interaction-states）保留在根目录，表格列表页专属模块移入 `table-list-page/` 子目录
- **frontmatter 扩展**：pages 新增 Dashboard（draft）和 Settings list（draft）占位
- **Reference 加载索引**：按共享 / 页面类型分组重写，路径同步更新
- **page-skeleton.md**：内容区章节按页面类型拆分描述，标注 Dashboard / Settings list 待定义

### Added

- `references/table-list-page/` — 表格列表页专属模块目录
- `references/dashboard/README.md` — Dashboard 页面占位
- `references/settings-list/README.md` — 设置列表页占位

---

## [0.4.0] - 2026-05-14

### Changed

- **SSOT 治理**：移除所有列规范中的"当前样本使用到的变量"段落（24 文件），替换为 tokens-reference.md 引用
- **命令栏瘦身**：按钮颜色变量表替换为 kd-components/button.md 引用；JS 参考实现提取为 `_js/command-bar-collapse.js`
- **文本展示列合并**：8 个结构一致的纯文本列（编号/价格/容量/网络地址/联系方式/邮箱/日期时间/地点）合并为 `text-display-columns.md`
- **saas 共享规范上浮**：顶部信息栏和左侧导航框架核心约束上浮至 `saas/SKILL.md`，页面骨架.md 精简为补充细节
- **命名统一**：8 个中文命名的 reference 文件重命名为英文短横线（命令栏→command-bar、导航→navigation、页面骨架→page-skeleton、交互状态→interaction-states、分页器→pagination、图标→icons、校对→checklist、表格→table），同步更新所有交叉引用

### Removed

- `id-column.md`、`price-column.md`、`capacity-column.md`、`url-column.md`、`contact-column.md`、`email-column.md`、`datetime-column.md`、`location-column.md`（已合并至 `text-display-columns.md`）

---

## [0.3.0] - 2026-05-12

### Changed

- **消除双入口**：将 `管理后台_表格页.md` 独有内容合并至 `SKILL.md`，删除该文件
- **SKILL.md 重写**：补充双用途声明（HTML 设计稿 + Vue2 代码）、整合生成前检查和缺失数据清单
- **校对.md 瘦身**：从 125 行规则复述改为 50 项引用式检查清单，每项指向规则来源文件
- **表格.md / 表格列 README.md 边界厘清**：列类型选择和单元格规范迁入 `表格列/README.md`，`表格.md` 仅保留表格级规则
- **表格列 README.md 补充通用列头规范**：抽取 10 个列样本共有的列头样式为单一事实源
- **列样本去重复**：10 个含重复列头规范的样本文件改为引用 README.md
- **中文文件名迁移英文**：24 个列样本文件从中文名重命名为 kebab-case 英文名

## [0.2.0] - 2026-05-12

### Changed

- 迁移至 `kd-scenes/saas/admin-console/`
- 补齐 SKILL.md frontmatter（version / business-line / product / tech-stack / platform / depends-on / pages）
- 输出路径从 Windows 绝对路径改为相对路径

## [0.1.0] - 2026-04-29

### Added

- 初始版本：管理后台表格页场景 Skill
  - 页面清单：表格列表页
  - 覆盖模块：导航、页面骨架、命令栏、表格、表格列（22种列类型）、分页器、交互状态、图标、校对
  - 覆盖平台：web
