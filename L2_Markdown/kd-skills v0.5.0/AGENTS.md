# KDesign Skills 使用指引

> 本文件告诉 AI 在不同任务下该加载哪些 Skill，避免漏加载或过度加载。

## 输入处理协议（所有任务进入 Skill 之前必读）

### 输入的三种模式

| Mode | 输入形式 | 特征关键词 |
|---|---|---|
| 1 | PRD / 需求文档 / 功能说明 | "需求是…"、"要实现…"、纯文字描述功能 |
| 2 | 截图 / 草图 / 竞品示例 | 用户附带图片、说"参考这个"、"做成这样" |
| 3 | 纯自然语言 | "给我做一个带 XX 的 XX 页面"，无视觉参照 |

### Mode 2 的清洗规则（强制）

参考图只用于**信息架构**，不作为**视觉语言**来源。

**可保留（Information Architecture）**：页面分区与比例、信息组归属、功能入口位置、交互流程走向、字段的必选/选填关系、操作按钮的语义（而非样式）。

**必须丢弃（Visual Language）**：配色方案、字体/字号、圆角大小、阴影强度、具体间距像素、按钮形状、icon 风格、装饰图形、插画/emoji、渐变/毛玻璃/光效。

**必须重判**：
- 组件选型 → 按 [`skills/kd-design-language/component-decision.md`](skills/kd-design-language/component-decision.md) 决策树
- 信息密度 → 按 [`skills/kd-design-language/layout-thinking.md`](skills/kd-design-language/layout-thinking.md)
- 分组方式 → 按 layout-thinking 的「分组策略（硬性规则）」

### 生成前必写的声明段

Mode 2 下生成任何代码前，先输出两段（缺一不可）：

**第一段：模式声明 + IA/VL 拆解**
```
本次输入为 Mode 2（截图/草图参考）。
从参考中提取的 IA：{分区 / 字段 / 流程}
丢弃的视觉信息：{配色 / 字号 / 圆角 / 阴影 / 间距节奏 / 装饰}
按 KDesign 重建的决策：{密度选择 / 组件选型变更 / 分组策略}
```

**第二段：截图 → KDesign 对照表**（逐项翻译，逢差异必明写）
```
| 截图中观察到 | KDesign 对应规范 | 来源 |
|---|---|---|
| 示例：20px 粗体标题 | 14px / 600（Modal 标题） | modal.md#Modal |
| 示例：蓝色 pill 按钮 | Primary Button radius-md (6px) | button.md#Button |
| 示例：16px 蓝色 underline Tabs | Small 13px 黑色 ink（弹窗内必用） | tabs.md#Tabs |
| 示例：弹窗内容直接白底无分层 | C1/C2 内容直接在底板上（无白卡片）；C3 才用底板 + 白卡片两层 | modal.md#Modal |
| 示例："取消"为蓝色文字 link | Secondary Button Medium | modal.md#Modal 按钮规范 |
| 示例：截图有 3 个并列无标题卡片 | C3a，卡片间 gap 8px，卡片 padding 12px 12px | modal.md#信息复杂度三档 |
| 示例：label + 单控件（如 "应用到 + Select"） | 字段 label 400，不加粗 | modal.md#字重判定口诀 |
| 示例：label 下 ≥ 2 独立子字段（如 "页边距 + 4 个输入框"） | 组标题 600，加粗 | modal.md#字重判定口诀 |
```

**第三段（仅对话框任务必填）：档位声明**

如果本次输出是对话框/弹窗，生成前还必须声明：

```
本对话框档位：{C1 / C2 / C3a / C3b}
判定依据：{是否有 tabs / 真组数量 / 是否横向布局或需多卡片}
（真组 = 一个标题下有 ≥ 2 个独立子字段的结构；全是 `label + 单控件` 的零真组弹窗即 C1）
```

档位判定规则见 [`skills/kd-patterns/modal-pattern.md`](skills/kd-patterns/modal-pattern.md)。选定档位后，Modal 根元素的 HTML 注释必须写 `<!-- [Modal: size C档位] ... -->`。

Mode 1 / Mode 3 可简化声明（一行"本次为 Mode X"即可），但**对话框任务无论 Mode 几都要写档位声明**。

### 绝对红线（Mode 2 生成代码时任何一条都不得违反）

以下行为视为 **VL 污染**，一旦出现必须立即重做：

1. **禁止在代码注释中出现以下关键词作为设计依据**：
   - "参照截图"、"参考截图"、"截图样式"、"截图特征"、"截图中…为…"、"原图中…"
   - "区别于 KDesign…"、"本对话框直接以…呈现"、"此处不走 KDesign…"
   - 任何试图用"参考图这样做"来合理化偏离 KDesign 规范的表述

2. **禁止创建 KDesign 规范里不存在的 CSS variant class**：
   - 例：`kd-button-pill`、`kd-dialog-custom`、`kd-modal-flat`、`kd-tabs-xl-blue`
   - 遇到参考图里的异形组件 → 必须映射回现有 variant，不允许自创

3. **禁止"就近妥协"**：当 KDesign 规范与参考图冲突时，**一律以 KDesign 为准**，不得在注释里说"这里参照截图更合理"

4. **组件的核心结构不得简化**：
   - Modal C3 必须底板 + 白卡片两层；**C1/C2 不使用白卡片**，内容直接在底板上
   - Modal 内 Tabs 必须 Small + 黑色 ink，不得用 Middle/Large 或蓝色 ink
   - Footer 取消/确认必须 Secondary + Primary Button，不得用 Link 替代

违反任意一条 → Round 0 自检直接判失败，全部重做。

5. **禁止背景 / 边框等高频变量与规范不一致**：
   - 生成 CSS 后，必须将输出中的 `background`、`border`、`border-bottom` 属性值与场景 Skill（如 `saas/SKILL.md`、`page-skeleton.md`）中声明的变量逐一比对
   - 发现变量名不一致（如规范写 `--kd-color-background-base` 而代码写了 `--kd-color-fill-base`）必须立即修正
   - 发现规范明确禁止的属性（如"不绘制分割线"但代码写了 `border-bottom`）必须立即删除
   - 此步骤不可省略，即使 AI 认为"截图中是这样的"也不构成豁免理由

### 用户显式覆盖

仅当用户明确要求「保留原配色」「按参考风格」时才能跳过清洗，且需**复述确认一次**再执行，例如："你确认要保留参考图的 pill 按钮形状而不使用 KDesign Button 规范，对吗？"

## 输出目标判定（加载 Skill 前必做）

确定输入模式（Mode 1/2/3）后，**在加载任何目标 Skill 之前**，必须先判定输出目标。

### 判定规则

| 用户表述特征 | 判定目标 | 加载的目标 Skill |
|-------------|---------|-----------------|
| "设计稿"、"HTML"、"原型"、"页面效果" | html | `kd-components` |
| "React"、"@kdocs/kdesign"、"JSX" | react | `kd-react` |
| "Vue2"、"Vue 2" | vue2 | `kd-vue2` |
| "Vue3"、"Vue 3"、"Composition API" | vue3 | `kd-vue3` |
| "QT"、"JSON 结构"、"中间层" | qt-json | `kd-qt-json` |
| 未明确指定框架或格式 | **询问用户** | — |

> 当用户未明确指定输出目标时，**必须主动询问**，不要默认为 HTML。

### 各目标的完整加载清单

**HTML 设计稿**（v2 调用模式）：
- `kd-foundation` + `kd-design-language` + `kd-components` + `kd-layout` + `kd-design-qa`
- **浏览器兼容基线 Chromium 104** — 页面布局 CSS 禁止使用 `:has()`、`color-mix()`、CSS Nesting、`@container` 等 Chrome 105+ 特性。完整黑名单见 [`skills/kd-foundation/browser-baseline.md`](skills/kd-foundation/browser-baseline.md)
- **组件 CSS 从 `kd-components/_css/` 直接复制**到 `<style>` 中，不要重写。详见 `kd-components/SKILL.md` 的"核心工作流"
- **⚠️ 必须复制 `_css/reset.css` 的完整内容**。该文件包含 `button { border: none; background: transparent; }` 等关键重置——自写 reset 极易遗漏，导致浏览器默认边框泄漏到 `<button>` 元素上。**禁止用自写 reset 替代 `_css/reset.css`。**

**React 代码**：
- `kd-foundation`（理解 Token 体系）+ `kd-design-language`（选型判断）+ `kd-react`

**Vue2 / Vue3 代码**：
- `kd-foundation` + `kd-design-language` + `kd-vue2` / `kd-vue3`

**QT JSON**：
- `kd-foundation` + `kd-design-language` + `kd-qt-json`

**共同规则**：
- 涉及页面级布局时，所有目标均额外加载 `kd-layout`
- 涉及 Modal/Dialog 组合时，所有目标均额外加载 `kd-patterns/modal-pattern.md`
- **跨层组件名不一致提醒**：设计模式层统一使用「Modal」术语，但不同技术栈的实际组件名不同（HTML 用 `.kd-modal`、React 用 `Modal`、Vue3 用 `KdDialog`）。生成代码前必须查阅 [`kd-patterns/modal-pattern.md`](skills/kd-patterns/modal-pattern.md) 顶部的映射表，使用目标技术栈的正确组件名。**Vue3 中没有 `KdModal`，必须使用 `KdDialog`。**
- 涉及具体业务模块时，先读取 `kd-scenes/SKILL.md` 的**场景注册表**，根据关键词匹配加载对应产品的 SKILL.md；若产品 SKILL.md 声明了 `tech-stack`，则自动加载对应目标层（react → kd-react, vue2 → kd-vue2, qt → kd-qt-json, vue3 → kd-vue3）；若未匹配到任何场景，询问用户所属业务线和产品

### 目标特有的 QA 规则

- **html** → 生成后必须执行 `kd-design-qa` 的多轮自检流程
- **react / vue2 / vue3 / qt-json** → 暂无独立 QA Skill，在各目标 Skill 内遵循其使用流程中的验证要点（如：props 是否来自文档、import 路径是否正确）

## 图标获取协议（所有代码输出目标强制）

当生成的页面/组件需要图标时，**必须**执行以下流程。此协议对所有输入 Mode（1/2/3）和所有输出目标均生效，无例外。

### 强制规则

1. **禁止手写 SVG path data** — 必须从 KDicon-pro 索引检索后获取真实 SVG，不得凭记忆或推理自行编写 path 坐标
2. **两级索引检索**：
   - 第一级：grep [`kd-foundation/icons/kdicon-pro-quick-index.md`](skills/kd-foundation/icons/kdicon-pro-quick-index.md)（184 条高频图标，覆盖 ~90% 场景）
   - 第二级（未命中时）：grep [`kd-foundation/icons/kdicon-pro-full-index.md`](skills/kd-foundation/icons/kdicon-pro-full-index.md)（完整 9438 条母体索引）
   - 索引的 desc 字段含丰富中文别名，可用中文关键词直接 grep（如"最近""删除""收藏"）
3. **确定英文名后**，按输出目标执行：

   | 目标 | 操作 |
   |------|------|
   | **html** | `curl https://global-volc.wpscdn.cn/icons/pro/{英文名}.svg` 获取 SVG 源码 → 内联到 HTML |
   | **react** | 英文名 snake_case → PascalCase → `import { PascalName } from '@kdocs/kdesign-icons-react'` |
   | **vue3** | 英文名 → PascalCase → 加 `KdIcon` 前缀 → Resolver 自动从 `@kdocs/kdesign-icons-vue3-pro` 导入 |

   **批量执行要求**：当页面需要多个图标时，**必须将所有 curl 合并为一次 shell 调用**（用 Python 脚本或 shell for 循环），禁止逐个图标分别调用 curl。这样用户只需确认一次网络权限。示例：
   ```
   for name in clock star shared folder; do curl -s "https://global-volc.wpscdn.cn/icons/pro/${name}.svg"; echo "<!--SPLIT:${name}-->"; done
   ```

4. **SVG 预览确认**（React / Vue3）：确定英文名后，将所有待确认图标的 curl 合并为一次 shell 调用，查看 SVG 源码确认图形语义匹配后再写 import，避免名不对图
5. **仅当 KDicon-pro 确实无对应图标时**，允许使用 [`kd-foundation/icons.md`](skills/kd-foundation/icons.md) 定义的标准兜底模板手写内联 SVG（16x16, stroke 1, round cap）
6. 命名转换规则详见 [`kd-foundation/icons.md`](skills/kd-foundation/icons.md) 的「命名转换规则」段落

### 绝对红线

- 禁止在代码中出现「手写 path data」而未走检索流程
- 禁止从 Font Awesome / Material Icons 等外部库获取图标
- 禁止在 HTML 设计稿中用 `<link>` / `<script>` 引入图标 CDN（curl 获取后内联是允许的）
- **禁止对 CDN 获取的 SVG 做任何修改** — 包括但不限于：去掉 `<style>` 块、将 CSS class 引用替换为硬编码色值、简化路径坐标精度、删除 `<desc>` / `requiredCustomFeatures` 等 metadata 属性。curl 获取的 SVG **必须原样内联**。唯一允许的修改是：当同一页面内联多个 SVG 导致 `id` 属性冲突时，可对 `id` 值做去重后缀处理

## 核心原则

- **HTML 设计稿类任务**（生成页面、组件、原型）→ 必须加载 `kd-foundation` + `kd-components` + `kd-layout` + `kd-design-language` + `kd-design-qa` 五件套；组件 CSS 从 `kd-components/_css/` 直接复制，不重写
- **React 代码类任务**（使用 @kdocs/kdesign 编写组件/页面）→ 加载 `kd-foundation` + `kd-design-language` + `kd-react`
- **Vue2 / Vue3 代码类任务** → 加载 `kd-foundation` + `kd-design-language` + `kd-vue2` / `kd-vue3`
- **QT JSON 结构输出** → 加载 `kd-foundation` + `kd-design-language` + `kd-qt-json`
- **具体业务场景**（管理后台某模块、文档编辑等）→ 读取 `kd-scenes/SKILL.md` 场景注册表，按关键词匹配加载对应产品 SKILL.md + 按 `tech-stack` 自动加载目标层
- **只问设计判断 / 组件选型**（不生成代码）→ 只加载 `kd-design-language` 即可
- **Token 查询 / 变量速查** → 只读 `kd-foundation/tokens-reference.md`

## 层级速查

| Layer | Skill | 职责 | 加载条件 |
|---|---|---|---|
| 0 | `kd-foundation` | Token / 图标 / 主题 / a11y / i18n 基础约束 | 所有代码输出目标 |
| 0 | `kd-design-language` | 产品气质 / 布局思维 / 组件决策 / 跨端 | 需要做设计判断时 |
| 1 | `kd-layout` | Web/H5 栅格 + 间距系统 | 搭建页面骨架时 |
| 1-T | `kd-components` | HTML+CSS 仿真规格 | 目标=html |
| 1-T | `kd-react` | React @kdocs/kdesign API 与 JSX 示例 | 目标=react |
| 1-T | `kd-vue2` | Vue2 @kdocs/kdesign-vue API 与示例 | 目标=vue2 |
| 1-T | `kd-vue3` | Vue3 @kdocs/kdesign-vue3 API 与 SFC 示例 | 目标=vue3 |
| 1-T | `kd-qt-json` | QT JSON schema（future） | 目标=qt-json |
| 2 | `kd-patterns` | 页面模式（Modal 组合、表单/列表/详情等） | 生成含 Modal 等组合组件时 |
| 3 | `kd-scenes` | 业务场景 | 做具体业务模块时 |
| 4 | `kd-design-qa` | 自检流程与 HTML 输出格式 | 目标=html，生成后验收 |

> **1-T** = Layer 1 Target（目标层），同属 Layer 1 组件层但按输出目标**互斥加载**——每次任务只加载一个。

## 单一事实源（避免信息打架）

| 数据 | 权威来源 | 禁止在其他处重复写具体数值 |
|---|---|---|
| CSS 变量完整值 | `kd-components/_css/tokens.css`（运行时，synced from `@kdocs/kdesign-theme@2.4.8`）+ `kd-foundation/tokens-reference.md`（文档，含 Light/Dark 双列） | |
| 组件 CSS 样式 | `kd-components/_css/*.css`（唯一事实源） | 组件 `.md` 不含 CSS 代码，只含选型指导 |
| 间距阶梯 | `kd-layout/spacing-system.md` | `kd-design-language` 只谈思路，不列数值 |
| 组件 HTML 模板 | `kd-components/*.md` 对应组件 | `kd-layout` 只负责组件之间 / 区域之间 |
| @kdocs/kdesign React API | `kd-react/components/*/references.md` | `kd-components` 不含 React props |
| Vue2 组件 API | `kd-vue2/components/kd-*/references.md` | `kd-react` 不含 Vue2 API |
| Vue3 组件 API | `kd-vue3/components/kd-*/references.md` | `kd-react` 不含 Vue3 API |
| QT JSON schema | `kd-qt-json/`（future） | |
| Modal 组合模式（C1-C3 分档、字重体系、尺寸预算） | `kd-patterns/modal-pattern.md` | `kd-components/modal.md` 仅含 HTML 实现，不重复设计规则 |
| 上下文约束（Tabs size、控件尺寸一致性、防溢出） | `kd-design-language/context-constraints.md` | |
| 栅格 / 断点 | `kd-layout/web-grid.md` / `mobile-grid.md` | |
| 自检清单 | `kd-design-qa/checklist.md` | `SKILL.md` 只列流程，不重复条目 |
| HTML 输出模板 | `kd-design-qa/html-output-rules.md` | 引用 `_css/tokens.css` + `_css/reset.css` |
| KDicon-pro 图标完整索引（英文名 + 中文语义 + 尺寸） | `kd-foundation/icons/kdicon-pro-full-index.md`（9438 条） | |
| KDicon-pro 高频图标子集 | `kd-foundation/icons/kdicon-pro-quick-index.md`（184 条） | |
| KDicon-pro SVG 源码（运行时） | CDN `https://global-volc.wpscdn.cn/icons/pro/{name}.svg` | |
| 浏览器兼容基线 + CSS 特性黑白名单 | `kd-foundation/browser-baseline.md`（Chromium >= 104） | |

| 业务线代号表 + 产品标准命名 | `GOVERNANCE.md`（唯一权威源） | `kd-scenes/SKILL.md` 引用，不重复维护 |
| 场景注册表（AI 路由） | `kd-scenes/SKILL.md` | 新产品入驻时必须在此注册 |

新增内容前请先检查以上表格，避免把相同信息再写一份。

## 治理与变更

- 治理文档：[`skills/GOVERNANCE.md`](skills/GOVERNANCE.md)（审批层级、PR 流程、破坏性变更规范）
- 新增场景 Skill：见 [`skills/kd-scenes/SKILL.md`](skills/kd-scenes/SKILL.md)
- 归档内容：`_archive/` 下是已退役的旧版 Skill（如 `kdesign-system` 用过不同的 Token 命名方案 `--kd-color-brand-6`，**不要参考**）
