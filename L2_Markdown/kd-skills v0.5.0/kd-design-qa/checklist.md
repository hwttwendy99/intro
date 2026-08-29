# 设计稿检查清单

## 输入清洗合规（Mode 2）

> 仅当输入为截图/草图/竞品参考时必做，Mode 1/3 跳过。详见 [`AGENTS.md`](../../AGENTS.md) 的「输入处理协议」。

### 流程声明检查

- [ ] 已声明输入模式
- [ ] 已列出 IA 提取清单
- [ ] 已列出 VL 丢弃清单
- [ ] 已输出「截图 → KDesign 对照表」（逢差异必明写来源）

### 红线关键词检测（grep 一次 HTML/CSS 源码）

以下任何一条命中 → **本次必须重做**：

- [ ] 代码注释里无："参照截图"、"参考截图"、"截图样式"、"截图特征"、"截图中…为…"、"原图中…"
- [ ] 代码注释里无："区别于 KDesign…"、"本对话框直接以…呈现"、"此处不走 KDesign…"、"这里更合理"等合理化偏离的措辞
- [ ] 未新造 KDesign 规范外的 CSS variant class（如 `kd-button-pill` / `kd-dialog-custom` / `kd-modal-flat` 等）

### 视觉回归检查

- [ ] 生成结果无参考图特有配色残留（强调色/装饰色/品牌色叠加色均来自 Token）
- [ ] 间距节奏符合 KDesign 阶梯（非复刻参考图的像素值）
- [ ] 无参考图装饰元素残留（渐变/毛玻璃/插画/emoji/自定义图标风格）

### 组件结构完整性（常见违规点）

- [ ] **Modal 弹窗**：C1/C2 内容直接在底板上（**无白卡片**）；C3 遵循 [底板 + 白卡片](../kd-patterns/modal-pattern.md#档位与内容承载架构) 两层结构
- [ ] **Modal 标题**：14px / 600，未用 16/18/20/24px
- [ ] **Modal 内 Tabs**：Small (13px) + **黑色 ink**（#0D0D0D），未用 Middle/Large 或蓝色 ink
- [ ] **Modal footer**：取消 = Secondary Medium、确认 = Primary Medium，未用 Link 替代
- [ ] **Button 圆角**：默认 radius-md (6px)；未出现 radius-full / pill 形按钮
- [ ] **输入框/下拉**：默认 size 与同区其它控件保持一致（32px Large 或 28px Medium）

## Token 合规（指纹校验 — 可量化）

### 指纹检查（判定 CSS 是否真正复制自 _css/）

- [ ] `<style>` 中存在 `/* @kd-registry: tokens v2.0 */` 指纹（证明 tokens.css 是复制的）
- [ ] `<style>` 中存在 `/* @kd-registry: reset v2.0 */` 指纹（证明 reset.css 是复制的）
- [ ] 页面用到的每个组件都有对应的 `/* @kd-registry: {component} v2.0 */` 指纹（如用了 Button 则必有 `/* @kd-registry: button v2.0 */`）
- [ ] `:root {}` 块的 CSS 变量声明数 **>= 80**（`_css/tokens.css` 有 ~90 个变量；少于 80 说明被删减或手写）

### HEX 硬编码扫描

- [ ] 在 `:root {}` **以外**的 CSS 中，不存在硬编码 HEX 色值（`#` 后跟 3-8 位十六进制）。所有颜色必须引用 `var(--kd-color-*)` 或 `var(--kd-box-shadow-*)` 变量
- [ ] 若发现 HEX 值（如 `#D4D4D4`、`#E5E5E5`、`#F5F5F5`），说明组件 CSS 是手写的而非复制的 —— **必须重做**

### 变量引用检查

- [ ] 页面布局 CSS 中的颜色引用 `var(--kd-color-*)` 变量
- [ ] 页面布局 CSS 中的字号引用 `var(--kd-font-size-*)` 变量
- [ ] 页面布局 CSS 中的圆角引用 `var(--kd-border-radius-*)` 变量
- [ ] 页面布局 CSS 中的阴影引用 `var(--kd-box-shadow-*)` 变量
- [ ] 间距值为 4px 的整数倍
- [ ] 禁用状态统一使用 `opacity: var(--kd-opacity-disabled)`

## 组件合规

### HTML 元素默认样式重置

- [ ] 所有 `<button>` 元素已重置浏览器默认样式（`border: none; background: transparent;`），或已由 `reset.css` 全局覆盖
- [ ] 所有 `<a>` 元素已重置 `text-decoration: none; color: inherit;`，或已由 `reset.css` 全局覆盖
- [ ] 页面中使用 `<button>` 作为非按钮组件容器时（如导航项、用户信息入口），样式中显式包含 `border: none; background: transparent;`

### 按钮

- [ ] 同一视图内 Primary 按钮仅出现一次
- [ ] 按钮高度匹配尺寸规格（sm=24, m=28, lg=32, xl=36）
- [ ] 同一区域内按钮 size 一致
- [ ] Light 按钮背景为 `transparent`（不是灰色）
- [ ] Secondary 按钮背景为 `#FFFFFF`（不是灰色）
- [ ] 危险操作使用 `kd-button-danger` 叠加类名
- [ ] 禁用按钮使用 `disabled` 属性 + `opacity: 0.4`

### 表单控件

- [ ] Input/Select/Checkbox/Radio 默认字号为 13px
- [ ] Form label 字号为 14px（Form 例外）
- [ ] Input wrap padding 为 `0 4px 0 8px`（非对称）
- [ ] Focus 状态仅改变 `border-color`，不添加 `box-shadow`
- [ ] Error 状态 `border-color: #E12F3C` + `box-shadow: none`
- [ ] 同一表单内所有控件 size 一致
- [ ] Input 内的可点击图标（`<button>`）有 `border: none; background: transparent;`
- [ ] Checkbox/Radio 的 `::after` 伪元素有 `box-sizing: content-box`
- [ ] **每个 `.kd-select-trigger` 内的 `.kd-input-wrap` 都包含一个 `<input class="kd-input-inner">`**（不允许用 span/div 替代；非文本内容如色块、图标作为 prefix 放在 input 前，不替代 input）

### 弹窗/浮层

- [ ] **Modal 外壳使用底板色 `var(--kd-color-background-plate)` (#F5F5F5)**，不是白色
- [ ] **C3 Modal body 内有白色内容卡片 `var(--kd-color-background-bottom)` (#FFFFFF, radius 12px, padding 12px 12px)**；**C1/C2 无白卡片**
- [ ] Modal border `1px solid rgba(13,13,13,0.12)`, border-radius `12px`, box-shadow `0 32px 48px rgba(13,13,13,0.20)`
- [ ] Modal Header 高度 44px, padding `10px 12px 0 16px`, 标题 14px Semibold
- [ ] Modal Header 无 `border-bottom`
- [ ] **C3 白卡片内**只用标题+间距分组，不加分割线、不嵌套卡片；C3b 仅 1 张白卡片
- [ ] **组标题**：13px, font-weight 600, line-height 20px（C1/C2 在底板上，C3 在卡片内）
- [ ] **组间距**：16px（section 之间）
- [ ] 首组紧跟顶部，无需组标题（Tab 名或弹窗标题已说明）
- [ ] **C1/C2 未出现 `.kd-modal-body-card`**（内容直接在底板上）
- [ ] Modal Footer padding 16px, gap 16px, `justify-content: space-between`
- [ ] Modal footer 右侧：取消 = Secondary，确认 = Primary
- [ ] **Modal footer 左侧辅助按钮 = Secondary**（不是 Light）
- [ ] Modal footer 按钮使用 **Medium size (28px)**，不是 Large
- [ ] Modal footer 按钮 `min-width: 72px`
- [ ] **弹窗内嵌 Tabs 使用 Small size (13px)**
- [ ] **Small size Tabs 激活 ink bar 颜色 = `#0D0D0D` (text-primary 黑)**，不是蓝色
- [ ] Small size Tabs 激活 label = `#0D0D0D` + font-weight 600
- [ ] **Tabs 导航底部默认不画通栏分割线**（ink bar 已承担激活指示功能，加底线会造成视觉冗余）
- [ ] 分组内部的描边盒子（如预览区）是**内容容器**不是分组容器，可保留
- [ ] Tooltip padding 为 `6px 12px`
- [ ] Popover padding 为 `8px`
- [ ] 下拉面板（Menu）padding 为 `8px`，`border-radius: 8px`

### 导航

- [ ] 垂直导航项高度 32px，padding `0 4px 0 8px`
- [ ] 导航激活态 `font-weight: 400`（不加粗）
- [ ] **Tabs 导航默认无通栏底部分割线**（只靠激活 tab 下方的 ink bar 指示）
- [ ] Tab 间距 `gap: 20px`
- [ ] **Tabs size 按场景选择**：弹窗内 = Small(13px)；页面内容切换 = Middle(14px)；展示型大区块 = Large(16px)
- [ ] **Tabs 激活 ink 色**：Small = 黑色 `#0D0D0D`；Middle/Large = 蓝色 `#0A6CFF`
- [ ] Tabs 激活态 font-weight 600
- [ ] **Tabs 未激活 label 颜色 = `var(--kd-color-text-primary)` (#0D0D0D)**（不是 secondary 灰；靠字重 + ink 区分激活态）

### 对话框档位与字重（bug 高发区）

> 完整规则见 [`kd-patterns/modal-pattern.md`](../kd-patterns/modal-pattern.md)

- [ ] 已判定本弹窗档位（C1 / C2 / C3a / C3b）并在 Modal 根元素 HTML 注释里声明，如 `<!-- [Modal: md C2] ... -->`
- [ ] **C1/C2 无 `.kd-modal-body-card`**（出现即违规）
- [ ] **C3b 场景下只存在 1 张白卡片**（Tabs 与多张 `.kd-modal-body-card` 并存即违规）
- [ ] 每个 **600 加粗的标题**下方都存在 **≥ 2 个独立子 label + 子控件**（若仅 1 个或 0 个，必须降为 `.kd-field-label` 400）
- [ ] 每个 **label + 单控件** 的 label 字重 = 400（Radio group / Checkbox group / Segmented 视为单控件，其 label 必 400）
- [ ] 组标题（`.kd-modal-section-title`）字号 13px、字重 600、line-height 20，无一超 14px
- [ ] 无 `<strong>` / `<b>` / `font-weight: 600` inline 作用于字段 label
- [ ] **所有 label（弹窗标题 / 组标题 / 字段 label）颜色 = `var(--kd-color-text-primary)` (#0D0D0D)**，未使用 secondary (#6B6B6B)
- [ ] **C1 弹窗内无任何组标题**（按定义 C1 就无真组，出现即档位判错）
- [ ] C2 至少有 1 个真组；C3a/C3b 的档位判定依据已写入 Mode 2 声明段

### 数据展示

- [ ] Table 表头背景 `#F5F5F5`，高度 36px，字号 13px
- [ ] Table 行 hover 背景 `rgba(0,0,0,0.04)`
- [ ] Tag 默认字号 13px（不是 12px）
- [ ] Badge 使用 `border: 2px solid #FFFFFF`

### 交互脚本

- [ ] 页面含 Tabs / Navigation / Select / Checkbox / Radio / Switch 时已在 `</body>` 前内联 `interactions.js`（或外链）
- [ ] Select 根元素已添加 `data-select-mode="single|multiple"` 属性
- [ ] 未引入 React / Vue / jQuery 等外部 JS 框架或库
- [ ] 自定义交互逻辑（如 Modal 开关、Menu 触发）使用原生 JS，遵循事件委托模式

## 图标合规

- [ ] 所有功能图标均通过 KDicon-pro 索引检索获取（`AGENTS.md` 图标获取协议），无手写 path data
- [ ] HTML 内联 SVG 来源为 CDN `global-volc.wpscdn.cn/icons/pro/` 而非 AI 自行编写
- [ ] 图标使用内联 SVG（生成时从 CDN curl 获取后内联，HTML 中不保留运行时 `<link>` / `<script>` 外部依赖）
- [ ] SVG 尺寸 16x16px，viewBox `0 0 16 16`
- [ ] SVG stroke-width `1`（细线风格）
- [ ] 图标使用单色（`currentColor` 或灰度色）
- [ ] 无彩色/多色填充图标
- [ ] 无 emoji 作为功能图标（装饰性 emoji 除外）

## 布局合规

- [ ] 使用语义化 HTML 标签（nav/main/aside/section）
- [ ] 组件边界有注释标注：`<!-- [ComponentName: variant size] -->`
- [ ] 信息组间距一致
- [ ] 卡片网格对齐，间距 12px
- [ ] 页面结构：全局导航(40px) → 页面顶栏(40px) → 内容区
- [ ] 侧边栏宽度在 240-332px 范围内
- [ ] **页面大背景使用 `--kd-color-background-base: #F0F0F0`**，导航栏/侧边栏/卡片等面板用 `--kd-color-fill-base: #FFFFFF`
- [ ] **分组方式不叠加**：标题分组、卡片分组、分割线三选一，禁止同一层级重复使用
- [ ] 已有"组标题 + 间距"时不再使用分割线
- [ ] 已用卡片分组时不再在卡片内叠加分割线

### 宽度预算与溢出检查（bug 高发区）

- [ ] 多列 grid/flex **已验算宽度预算**：`列数 × 最小列宽 + gap × (列数-1) ≤ 容器可用宽`
  - Modal 卡片可用宽 = 外壳宽 - 50px（见 [modal-pattern.md#Modal 尺寸与内容区宽度预算](../kd-patterns/modal-pattern.md#modal-尺寸与内容区宽度预算)）
  - 默认最小列宽：96px（含 Input Medium）
- [ ] Grid 直接子项写了 `min-width: 0`（特别是列内含 `<input>` / `<textarea>` / `<select>`）
- [ ] Flex 直接子项需要收缩时写了 `min-width: 0; flex: 1 1 0;`
- [ ] 未见 `grid-template-columns: 148px 148px ...` 等固定列宽（若容器小于总和会直接溢出）
- [ ] 未见 `white-space: nowrap` 作用于容器级，且容器无 `overflow` 处理
- [ ] `<img>` / `<video>` 等替换元素有 `max-width: 100%`（html-output-rules 兜底已覆盖，但不得覆盖移除）
- [ ] 浏览器打开后**视觉检查**：最右一列、最下一行未超出容器边界

## 浏览器兼容合规（Chromium 104 基线）

> 完整黑白名单见 [`kd-foundation/browser-baseline.md`](../kd-foundation/browser-baseline.md)

### CSS 选择器

- [ ] **无 `:has()` 选择器**（Chrome 105+）。Checkbox/Radio/Switch 状态使用 `.is-checked`/`.is-disabled` class + `interactions.js`
- [ ] 无 CSS Nesting 语法（`& .child {}` 或 `.parent { .child {} }`），所有选择器写完整路径

### CSS 颜色函数

- [ ] **无 `color-mix()`**（Chrome 111+）。透明度变体使用 `rgba(var(--kd-color-xxx-N), alpha)` 或预计算色值
- [ ] 无 `oklch()` / `oklab()` / `lab()` / `lch()` / `color()` 函数（Chrome 111+），仅用 `rgb()`/`rgba()`/`hsl()`/`hsla()`

### CSS 布局 & 容器

- [ ] 无 `@container` 容器查询（Chrome 106+），使用 `@media` 或固定断点
- [ ] 无 `subgrid`（Chrome 117+），使用嵌套独立 grid 或 flex

### CSS 单位 & 函数

- [ ] 无 `dvh`/`svh`/`lvh`/`dvw`/`svw`/`lvw` 动态视口单位（Chrome 108+），仅用 `vh`/`vw`
- [ ] 无 `round()`/`mod()`/`rem()` 数学函数（Chrome 125+），仅用 `calc()`/`min()`/`max()`/`clamp()`
- [ ] 无 `text-wrap: balance` / `text-wrap: pretty`（Chrome 114+）

### CSS 其他

- [ ] 无 `@scope`（Chrome 118+）
- [ ] 无 `@starting-style`（Chrome 117+）
- [ ] 无 `light-dark()` 函数（Chrome 123+），使用 `[data-theme]` 属性选择器
- [ ] 无 `anchor()` 锚点定位（Chrome 125+）

### 交互脚本

- [ ] 页面含 Checkbox/Radio/Switch 时已引入 `interactions.js`（不再依赖 CSS `:has(:checked)` 纯 CSS 交互）

## 无障碍合规

- [ ] 正文对比度 ≥ 4.5:1
- [ ] 大文本对比度 ≥ 3:1
- [ ] 图标按钮有 `aria-label`
- [ ] 必填字段有视觉标记（红色星号）和 `aria-required`
- [ ] Modal 有 `role="dialog"` 和 `aria-modal="true"`
- [ ] 错误信息有 `role="alert"`

## 主题合规（如涉及 Dark 模式）

- [ ] `<html>` 标注 `data-theme="dark"`
- [ ] Dark 模式下功能色向浅一档偏移（-6 → -5）
- [ ] Dark 模式下文字色使用 `rgba` 透明度
- [ ] Dark 模式下阴影加重

## 多语言合规（如涉及）

- [ ] `<html>` 标注 `lang` 属性
- [ ] 按钮不固定宽度（使用 `min-width` + `padding`）
- [ ] 文案区域预留 30% 以上扩展空间
- [ ] 数字使用 `tabular-nums`（等宽数字）
