> 文件用途：定义 Rate 评分组件的 KDesign 精确规格、属性、交互、HTML 预览与 Figma 生成约束。

# Rate 评分组件

> 设计决策 -> [component-decision.md](../kd-design-language/component-decision.md)  
> 关联组件 -> Tooltip 使用 [tooltip.md](tooltip.md) 中的 Tooltip / KD 标注组件规范  
> 图标来源 -> KDIcon-pro 图标库；Rate 组合层可引用 `16 / 20 / 24` 对应尺寸的星形图标实例

## 定义

Rate 用于离散评分输入与只读评分展示。它必须支持任意评分长度、半选、再次点击清除、禁用、只读、可替换图标字符、业务自定义选中/未选中颜色、逐项提示信息与富文案评分。

Rate 既可以作为表单输入组件，也可以作为数据展示组件：
- 作为输入组件时，必须可聚焦、可交互，并通过属性更新 `value`
- 作为展示组件时，使用 `readonly`，只呈现当前评分，不触发 hover / active / click 行为

## 目录

1. [组件规范](#组件规范)
2. [HTML 页面生成规范](#html-页面生成规范)
3. [Figma / Code Connect 附录](#figma--code-connect-附录)

## 组件规范

### 硬性规则

- 不允许把 Rate 简化为一排纯文本字符
- 不允许省略 `HalfMask`，即使当前实例没有半选，也要保留可扩展结构
- 不允许把 tooltip 样式写死在 Rate 内部；提示层必须关联 KDTooltip / 标注组件
- 图标源文件保持 KDIcon-pro 原始形态，填充效果只在 Rate 组合层中实现
- 只要是从 `KDIconPro` 库中引用的图标实例，均不允许改名字，必须保留图标库原始实例名
- `Rate Icons Slot` 在 Figma 中必须使用真实 `SLOT` 组件属性，不允许退化为普通 frame 命名占位
- `Rate Icons Slot` 下不得增加无意义图层；仅允许保留实现 mask、必要布局或可替换内容所需的最小层级
- 第 4 颗星必须负责表达半星/全星切换；第 5 颗星必须保持空星，禁止出现“第 4 颗灰色、第 5 颗高亮”的错误星序

### 属性

| Prop | Type | Default | 说明 |
|---|---|---:|---|
| `value` | `number` | `0` | 当前评分值，范围由 `count` 决定，支持 `0.5` 步进 |
| `count` | `number` | `5` | 评分项数量，允许业务传任意正整数 |
| `allowHalf` | `boolean` | `false` | 是否允许半选 |
| `allowClear` | `boolean` | `true` | 再次点击当前分值时是否清空为 `0` |
| `disabled` | `boolean` | `false` | 禁用态，不响应 hover / focus / click |
| `readonly` | `boolean` | `false` | 只读展示态，不响应交互，但语义上不是禁用 |
| `size` | `small \| medium \| large` | `medium` | 图标尺寸，任意长度评分默认使用 `medium` |
| `character` | `star \| heart \| smile-happy \| smile-neutral \| smile-sad \| sentiment \| custom` | `star` | 评分字符或图标类型 |
| `color` | `default \| semantic` | `default` | 颜色模式，语义模式由业务映射 token |
| `tooltips` | `string[]` | `[]` | 每个评分项的提示信息，文本必须支持 i18n |
| `selectedColor` | `string` | `var(--kd-color-icon-highlight)` | 选中图标颜色，允许业务传 token / CSS 变量 |
| `unselectedColor` | `string` | `var(--kd-color-fill-extra-heavy)` | 未选中图标颜色，允许业务传 token / CSS 变量 |
| `gap` | `string` | `var(--kd-spacing-sm)` | 评分项之间的间距，允许业务传 spacing token / CSS 变量 |
| `label` | `string` | - | 可选富文案评分，必须支持 i18n |

### 结构

```text
Rate
├── Rate Icons Slot
│   ├── Item × count
│   │   ├── Icon Base          # 未选中图标底层
│   │   ├── HalfMask           # 第 4 颗星的部分选中结构
│   │   │   ├── Mask Shape     # 50% 宽度 mask，打开时为半星
│   │   │   └── Icon Selected  # 选中图标覆盖层
│   │   ├── HoverLayer         # optional，hover / focus 命中层
│   │   └── TooltipAnchor      # optional，绑定 tooltips[index]
└── Label                      # optional，展示 value、tooltip 文案或富文案
```

说明：
- `Rate Icons Slot` 是 Figma 母版中的真实 `SLOT` 属性，也是 HTML/代码中的图标区语义容器
- 第 4 颗星默认是完整亮星；`50%` mask 打开后表现为半星；mask 关闭后表现为全星
- `HalfMask` 是逻辑结构名，不要求额外增加无意义中间层

### 尺寸与布局

| Size | 图标尺寸 | 推荐场景 |
|---|---:|---|
| `small` | 16px | 表格行内、紧凑评分、列表摘要 |
| `medium` | 20px | 默认尺寸，表单与普通业务评分 |
| `large` | 24px | 重点展示、评价结果、详情页评分 |

布局规则：
- Rate 根容器水平排列
- Item 之间 gap 默认使用 `var(--kd-spacing-sm)`，即 8px；允许通过 `gap` 业务传参覆盖
- Label 与评分列表之间 gap 使用 `var(--kd-spacing-md)`，即 12px
- 不换行，长 `count` 场景由外层容器决定横向空间或滚动策略
- RTL 场景下仅 Rate 组件实例跟随 `dir="rtl"`；预览页或研发说明页默认不翻转整页，除非业务明确要求整页 RTL 语言环境
- RTL 实例中图标区必须固定在物理右侧，`Label` 固定在物理左侧；`Label` 文案长度变化不得推动图标区位置
- RTL 场景下 `Label` 使用弹性槽位承载，图标区使用固定槽位承载；长文案必须在 `Label` 槽内省略或由外层容器处理，不允许挤压或移动星星
- RTL 场景下半选裁切从 inline-start 方向计算；RTL 的 inline-start 是物理右侧，因此 `HalfMask` 与内部选中 Icon 必须贴右对齐，避免黄色半星与灰色底星错位
- `Rate Icons Slot` 必须最终与对应 size 变体等高
- 显示或隐藏 `Label` 时，星星区高度、图标尺寸与图标垂直位置不得变化

### 状态与交互

| State | 行为 | 视觉 |
|---|---|---|
| Normal | 展示当前 `value` | 小于等于 value 的项为选中，其余为未选中 |
| Hover | 高亮 hover 项及之前所有项 | 高亮范围内图标整体 scale `1.1`，包含半星状态下的未选中底层图形；未高亮图标不缩放 |
| Active | 点击后提交新 `value` | 使用选中颜色，允许短暂 pressed 反馈 |
| Focus | 键盘聚焦当前项 | 使用 `2px solid var(--kd-color-public-normal)` 的圆角矩形 focus 边框，不改变评分值 |
| Disabled | 禁止交互 | `opacity: 0.4`，`cursor: not-allowed` |
| Readonly | 只读展示 | 不出现 hover / active / focus 交互反馈 |

交互规则：
1. hover 当前 Item 时，高亮当前 hover value 及之前所有 Item。
2. `allowHalf=true` 时，hover 必须按鼠标所在半区实时预览半星增减；不能在 hover 中退化为整星。
3. 点击 Item 时设置 `value`。
4. `allowHalf=true` 时，点击图标左半区设置半值；RTL 下按 inline-start 半区计算。
5. `allowClear=true` 且点击值等于当前 `value` 时，清空为 `0`，同步清空 hover 预览值，并立即重绘为未评分状态；鼠标不移开时也必须立刻全灰，不能等 `pointerleave` 后才清空。
6. `disabled=true` 时不响应 hover、focus、click。
7. `readonly=true` 时只展示，不响应 hover、focus、click。
8. `tooltips` 存在时，每个 Item 绑定对应提示文本；提示层使用 KDTooltip / 标注组件，且仅在鼠标 hover 期间显示，光标离开立即隐藏。Tooltip DOM 必须挂在对应 Item 的 `.kd-rate-icon-wrap` 内，以单颗图标中心作为定位锚点，禁止挂在 `.kd-rate-item` 外层导致与星星错位。
9. `label` 存在时展示富文案评分；文案由业务/i18n 提供，不在组件内写死；富文案评分的 tooltip 也遵循仅 hover 展示规则。
10. 当 `label` 用于表达与 `value` 对应的解释文本、评级文案或业务判断时，`label` 必须随当前评分值变化而同步更新；预览中的 hover、click、keyboard 变更都必须驱动对应文案变化。
11. 若业务同时需要“动态评分文案”和“静态补充说明”，静态说明不得复用 `label` 冒充动态评分结果，应以组件外说明文本或独立描述区承载。
12. 键盘操作必须支持：方向键按步进增减，`Home` 清到 0，`End` 设置满分，`Delete` / `Backspace` 清空；RTL 下左右方向键语义反转。
13. hover scale 作用于当前高亮范围内的整颗图标容器；若当前项为半星 hover，则该项未选中底层图形与选中覆盖层都必须同步缩放，避免底层图形保持静止。

### 视觉规则

| 部位 | 规则 |
|---|---|
| 选中图标 | 默认 `var(--kd-color-icon-highlight)`，允许 `selectedColor` 覆盖 |
| 未选中图标 | 默认 `var(--kd-color-fill-extra-heavy)`，允许 `unselectedColor` 覆盖 |
| 未评分 | `value=0` 时所有图标均使用未选中颜色 |
| 满分 | `value=count` 时所有图标均使用选中颜色 |
| 图标形态 | Rate 中的星星、心形、笑脸等均使用填充呈现 |
| 图标资源 | KDIcon-pro 源 SVG 不改为 fill；在 HTML/Figma 组合层中生成填充效果 |
| 半选 | 未选中图标作为底层，选中图标通过 `HalfMask` 实现 `50% mask` 覆盖 |
| Tooltip | 使用 KDTooltip / 标注组件样式，不在 Rate 内部重新定义 tooltip 视觉语言；内容区为白底深字、`1px solid #E5E5E5`、`radius 6px`、`box-shadow-large`，箭头必须为贴合浮层底边的三角形，不使用旋转方块 |

### 可访问性与国际化

- 交互态 Rate 使用 `role="radiogroup"`，Item 使用 `role="radio"`
- 只读展示态可使用 `role="img"` 并提供完整 `aria-label`
- 每个可点击 Item 必须有可替换的 `aria-label`
- Tooltip 与 Label 文案必须来自 i18n 或业务传参
- RTL 下评分顺序、半选命中区与 Label 排布必须跟随组件实例方向；研发预览页默认只切换组件实例，不切换整页方向
- RTL 下所有 Rate 实例必须统一“图标区在物理右侧、Label 在物理左侧”，不能出现某些实例反向、某些实例正向
- RTL 下数值型 label 默认保持 `value / count` 的语义顺序，不因方向切换而翻转为 `count / value`
- 禁用态不可聚焦；只读态按展示语义处理，不作为输入控件参与提交

## HTML 页面生成规范

### 1. 组件 HTML 实现规则

HTML 预览必须使用组合层裁切，不修改 SVG 源文件：

```css
.kd-rate-icon-wrap {
  position: relative;
  display: inline-flex;
  width: var(--kd-rate-icon-size);
  height: var(--kd-rate-icon-size);
}

.kd-rate-half-mask {
  position: absolute;
  inset-block: 0;
  inset-inline-start: 0;
  width: 0;
  overflow: hidden;
  color: var(--kd-rate-selected-color);
  pointer-events: none;
}

.kd-rate-item.is-half .kd-rate-half-mask {
  width: 50%;
}

.kd-rate-item:focus-visible {
  outline: 2px solid var(--kd-color-public-normal);
  outline-offset: 2px;
  box-shadow: none;
}
```

HTML 参考：

```html
<!-- [Rate: medium interactive allowHalf allowClear value=2.5] -->
<div
  class="kd-rate kd-rate-medium"
  role="radiogroup"
  aria-label="rating"
  data-value="2.5"
  data-count="5"
  data-allow-half="true"
  data-allow-clear="true"
  data-selected-color="var(--kd-color-icon-highlight)"
  data-unselected-color="var(--kd-color-fill-extra-heavy)"
>
  <div class="kd-rate-list">
    <button class="kd-rate-item is-selected" type="button" role="radio" aria-checked="true">
      <span class="kd-rate-icon-wrap">
        <span class="kd-rate-icon kd-rate-icon-base" aria-hidden="true"></span>
        <span class="kd-rate-half-mask" aria-hidden="true">
          <span class="kd-rate-icon kd-rate-icon-fill"></span>
        </span>
        <span class="kd-rate-hover-layer" aria-hidden="true"></span>
        <span class="kd-rate-tooltip" role="tooltip">Good</span>
      </span>
    </button>
  </div>
  <span class="kd-rate-label" data-i18n="rate.label">2.5 / 5</span>
</div>
```

说明：
- HTML 示例只展示单个 Item 的结构，真实渲染需按 `count` 重复生成
- 预览页必须可交互，不能只静态展示
- 所有可见文本必须通过 i18n key 或业务传参替换
- 默认交互样例中的评分 label 不得自行补充“当前值”等未在业务或规范中定义的前缀；若需要展示数值，默认使用纯 `value / count` 形式
- 若存在 tooltip，`.kd-rate-tooltip` 必须作为 `.kd-rate-icon-wrap` 的直接子元素插入，确保 tooltip 以单颗图标为锚点，不受 Rate 根容器、Label 或 RTL 布局影响

#### 1.1 CSS 精确实现

```css
.kd-rate {
  --kd-rate-icon-size: 20px;
  --kd-rate-selected-color: var(--kd-color-icon-highlight);
  --kd-rate-unselected-color: var(--kd-color-fill-extra-heavy);
  --kd-rate-gap: var(--kd-spacing-sm);
  display: inline-flex;
  align-items: center;
  gap: var(--kd-spacing-md);
  max-width: 100%;
  color: var(--kd-rate-unselected-color);
}

.kd-rate-small { --kd-rate-icon-size: 16px; }
.kd-rate-medium { --kd-rate-icon-size: 20px; }
.kd-rate-large { --kd-rate-icon-size: 24px; }

.kd-rate[dir="rtl"] {
  direction: ltr;
  flex-direction: row-reverse;
}

.kd-rate-list {
  display: inline-flex;
  align-items: center;
  gap: var(--kd-rate-gap);
  flex-wrap: nowrap;
  flex: 0 0 auto;
  min-width: 0;
}

.kd-rate[dir="rtl"] .kd-rate-list {
  direction: rtl;
}

.kd-rate-item {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--kd-rate-icon-size);
  height: var(--kd-rate-icon-size);
  padding: 0;
  border: none;
  background: transparent;
  color: var(--kd-rate-unselected-color);
  cursor: pointer;
  line-height: 1;
}

.kd-rate-icon-wrap,
.kd-rate-icon {
  display: inline-flex;
  width: var(--kd-rate-icon-size);
  height: var(--kd-rate-icon-size);
}

.kd-rate-icon-wrap {
  position: relative;
}

.kd-rate-icon svg {
  width: 100%;
  height: 100%;
  fill: currentColor;
}

.kd-rate-item.is-selected,
.kd-rate-item.is-hovered {
  color: var(--kd-rate-selected-color);
}

.kd-rate-item.is-selected .kd-rate-icon-wrap,
.kd-rate-item.is-hovered .kd-rate-icon-wrap {
  transform: scale(1.1);
}

.kd-rate-item:not(.is-selected):not(.is-hovered) .kd-rate-icon-wrap {
  transform: none;
}

.kd-rate-half-mask {
  position: absolute;
  inset-block: 0;
  inset-inline-start: 0;
  width: 0;
  overflow: hidden;
  color: var(--kd-rate-selected-color);
  pointer-events: none;
}

.kd-rate-half-mask .kd-rate-icon {
  position: absolute;
  inset-block: 0;
  inset-inline-start: 0;
}

.kd-rate-item.is-half {
  color: var(--kd-rate-unselected-color);
}

.kd-rate-item.is-half .kd-rate-half-mask {
  width: 50%;
}

.kd-rate[dir="rtl"] .kd-rate-half-mask,
[dir="rtl"] .kd-rate .kd-rate-half-mask {
  inset-inline-start: 0;
  inset-inline-end: auto;
}

.kd-rate[dir="rtl"] .kd-rate-half-mask .kd-rate-icon,
[dir="rtl"] .kd-rate .kd-rate-half-mask .kd-rate-icon {
  inset-inline-start: 0;
  inset-inline-end: auto;
}

.kd-rate.is-disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.kd-rate.is-disabled .kd-rate-item,
.kd-rate.is-readonly .kd-rate-item {
  cursor: default;
  pointer-events: none;
}

.kd-rate-item:focus-visible {
  outline: 2px solid var(--kd-color-public-normal);
  outline-offset: 2px;
  box-shadow: none;
}

.kd-rate-label {
  color: var(--kd-color-text-secondary);
  font-size: var(--kd-font-size-sub-base);
  line-height: 20px;
  white-space: nowrap;
  flex: 1 1 0;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
}

.kd-rate-tooltip {
  position: absolute;
  inset-block-end: calc(100% + 10px);
  inset-inline-start: 50%;
  transform: translateX(-50%);
  display: none;
  z-index: 3;
  padding: 6px 12px;
  border-radius: 6px;
  border: 1px solid #E5E5E5;
  background: #FFFFFF;
  box-shadow: 0 12px 32px rgba(26,26,26,.08);
  font-size: 13px;
  line-height: 20px;
  color: #1A1A1A;
  white-space: nowrap;
  pointer-events: none;
}

.kd-rate-tooltip::after {
  content: "";
  position: absolute;
  inset-block-start: 100%;
  inset-inline-start: 50%;
  width: 0;
  height: 0;
  border-inline-start: 6px solid transparent;
  border-inline-end: 6px solid transparent;
  border-block-start: 6px solid #FFFFFF;
  filter: drop-shadow(0 1px 0 #E5E5E5);
  transform: translateX(-50%);
}

.kd-rate-item.is-tooltip-visible .kd-rate-icon-wrap > .kd-rate-tooltip {
  display: block;
}
```

#### 1.2 JS 行为实现要点

交互实现可使用框架状态管理，但必须满足以下状态约束：

```js
function onRateItemClick(item, state, event) {
  const nextValue = pointerValueFromEvent(item, state, event);
  const shouldClear = state.allowClear && nextValue === state.value;

  state.value = shouldClear ? 0 : nextValue;
  state.hoverValue = shouldClear ? null : nextValue;
  state.focusIndex = Math.max(0, Math.min(state.count - 1, Math.ceil(state.value || 1) - 1));

  renderRate(state);
}
```

说明：
- `hoverValue` 只用于 hover 预览，不得覆盖真实 `value`
- 点击当前值触发清空时，必须同步把 `hoverValue` 置为 `null`
- 若清空后鼠标仍停在原星位上，视觉也必须立即显示 `0` 分状态
- Tooltip 文案更新只改 `.kd-rate-tooltip` 文本，不改变 tooltip 的 DOM 锚点

### 2. 页面结构要求

当任务目标是生成 Rate 的 HTML 规范页、组件页或演示页时，页面内容必须按以下结构组织，不允许只输出单个孤立组件。

#### 2.1 必带组件规则 / 规范区

- 页面必须附带与 Rate 对应的规则说明区，至少覆盖：组件定义、核心属性、尺寸支持、状态与交互、关联组件依赖（如 KDTooltip）、i18n / RTL 约束
- 规则区可以使用表格、说明卡片或代码块呈现，但内容必须与本文件保持一致，不得自行发明新的 variant、状态名或交互口径
- 若页面同时展示 Demo 与规范，规范区应先于或紧邻 Demo 区，保证“先规范、后样例”的阅读顺序

#### 2.2 必带样例分组

先看速查表，再看下方逐项展开规则。

| 样例类型 | 必须内容 | 默认展示要求 | 关键校验点 |
|---|---|---|---|
| 默认 5 颗星交互 | `count=5` 基础交互 | `medium` | hover / click / focus / keyboard / clear |
| LTR / RTL 成对样例 | 同一组件同时展示 `dir="ltr"` 与 `dir="rtl"` | `medium` | 双向布局、半选命中区、label 顺序 |
| 半星交互 | `allowHalf=true` | `medium` | `50%` 裁切、半区命中、步进一致 |
| 任意长度交互 | 任意正整数 `count` | `medium` | 一行不换行、真实可交互 |
| 其他字符 / 图标类型 | `heart` / `sentiment` / 其他图形 | `medium` | 支持业务传色，`sentiment` 优先可交互 |
| Tooltip 交互 | `tooltips[index]` 逐项绑定 | `medium` | 仅 hover 显示，复用 KDTooltip |
| 富文案评分 | `label` 文案 | `medium` | 文案可替换，不写死 |
| 点击清空 | repeated click 清空 | `medium` | 点击当前值回到 `0` |
| 键盘导航 | focus + 键盘操作 | `medium` | 圆角矩形 focus、焦点跟随、清空回首星 |
| 尺寸交互 | `small / medium / large` 三组纵向展示 | 三尺寸同时展示 | `medium` 用满星，不用半星 |
| 业务间距传参 | `gap` 传 token / CSS 变量 | `medium` | 间距可配且不破坏命中与布局 |

HTML 页面生成时，至少必须包含以下核心样例；所有样例都要支持 `small / medium / large` 三种尺寸能力，但除专门的尺寸样例区外，页面默认只展示 `medium` 尺寸实例，其他尺寸通过属性说明、规格表或补充说明表达，不要求每组都重复渲染三套：

1. 默认 5 颗星交互样例：
- 必须展示默认 `count=5` 的基础交互样例
- 必须支持 hover、click、focus、keyboard、`allowClear`
- 该样例是用户理解 Rate 基础行为的首个参考，不可缺失

2. LTR / RTL 成对样例：
- 必须在核心预览区同时提供一组固定 `LTR` 样例和一组固定 `RTL` 样例
- 这组样例不能只依赖页面顶部的全局方向切换按钮替代
- 至少验证：评分顺序、半选命中区、tooltip 对齐方向、`label` 的 `value / count` 顺序

3. 半星交互样例：
- 必须单独展示 `allowHalf=true` 的交互样例
- 半星必须通过 `50%` 宽度裁切实现，不允许通过缩放、替换图标或缩小高亮层伪造半星
- 半星 hover、点击命中与键盘步进必须一致

4. 任意长度评分可交互样例：
- 必须展示 `count` 可由业务传入任意正整数的交互示例
- 默认展示 `medium` 尺寸
- 必须可实际 hover、click、focus、keyboard 操作，不能仅做静态截图

5. 其他评分字符或图标类型样例：
- 必须展示除默认 `star` 以外的字符 / 图标类型，如 `heart`、`smile-happy`、`smile-neutral`、`smile-sad`、`sentiment` 或 `custom`
- `sentiment` 样例应优先作为可交互示例呈现，不应默认退化为只读
- 至少补充一种与 `heart / sentiment` 不同的图形类型，且可结合 Tooltip 展示业务自定义说明内容
- 必须明确 `selectedColor` 与 `unselectedColor` 支持业务传参，且颜色来源应为 token / CSS 变量，而非写死业务色值
- 当需要表达“业务自定义未选中颜色”时，允许使用更浅一档的填充色，例如从 `fill-heavy` 降到 `fill-regular`
- 默认展示 `medium` 尺寸

6. 带 tooltips 交互的样例：
- 必须展示逐项 tooltip 的交互效果
- Tooltip 文案必须逐项绑定 `tooltips[index]`
- Tooltip 视觉实现必须复用 KDTooltip / 标注组件规范，不得在页面里重新发明一套 tooltip 视觉语言
- Tooltip DOM 必须挂在对应星星的 `.kd-rate-icon-wrap` 内，hover 第 N 颗星时 tooltip 必须与第 N 颗星中心对齐
- 默认展示 `medium` 尺寸

7. 可选富文案评分样例：
- 必须展示带 `label` 的富文案评分场景
- `label` 可用于展示评分结果文案、业务评价文案或与 `value` 对应的解释文本
- 文案必须允许业务传参或 i18n 替换，不得在组件内部写死
- 若该样例用于表达“评分变化 -> 文案变化”，则必须在交互过程中实时更新富文案，不得固定成一条静态描述
- 默认展示 `medium` 尺寸

8. 点击清空样例：
- 必须至少有一组样例显式验证 repeated click 清空行为
- 当 `allowClear=true` 且点击当前值时，组件应立即清空为 `0`，并同步清空 hover 预览；鼠标停留不移开时也必须立即全灰

9. 无障碍键盘导航样例：
- 必须至少有一组样例显式验证键盘导航行为
- Focus 边框必须为圆角矩形，边框色使用 KDesign 颜色变量，不允许使用浏览器默认虚线框
- Focus 边框线宽固定为 `2px`，颜色固定为 `var(--kd-color-public-normal)`
- Focus 边框应跟随键盘导航移动
- 半星状态下，focus 边框仍停留在当前星位；只有进入下一颗星的值域时，focus 才移动到下一颗星
- 当值被清空为 `0` 时，focus 边框应回到第一颗未选中的灰星上
- `Esc` 不要求清除 focus。默认遵循标准键盘焦点语义，避免无依据地中断焦点链

10. 尺寸交互样例：
- 必须单独提供一组 `small / medium / large` 三种尺寸纵向排列的交互样例
- `medium` 尺寸样例使用满星状态，不使用半星，以便与单独的半星交互样例职责分离

11. 业务传参间距样例：
- 必须至少展示一组通过 `gap` 传入业务 spacing token / CSS 变量的样例
- 用于验证评分项间距可配置，且不会破坏交互命中与布局稳定性

#### 2.3 尺寸展示规则

- 页面必须明确说明 Rate 支持 `small / medium / large`
- 若无特殊要求，样例区默认仅渲染 `medium` 尺寸，避免同类内容重复铺陈
- 若确需补充 `small / large`，应作为补充规格或附加示例，不得挤占上述核心样例
- 唯一例外是“尺寸交互样例”本身，允许同时渲染三种尺寸，但必须纵向排列，避免三列挤压造成 label 或图标溢出

#### 2.4 i18n / RTL 要求

上述所有规则和样例都必须支持 i18n，至少包括：

- 规则区标题、说明文案、表头、辅助描述支持 i18n
- Rate 的 `aria-label`、Item 的可访问名称支持 i18n
- `tooltips` 数组文案支持 i18n
- `label` 富文案支持 i18n
- 任意长度评分中的计数文案、状态文案、说明文案支持 i18n
- RTL 场景下，评分顺序、半选命中区、Label 排布与 tooltip 对齐方向必须跟随 Rate 实例方向；研发预览页默认只翻转组件实例，不翻转页面说明内容
- RTL 下数值型 label 默认保持 `value / count` 的语义顺序，不因方向切换而翻转为 `count / value`
- 页面必须提供“整页保持原文案，仅组件实例切换方向”的实现；如需整页 RTL 语言页，必须作为独立业务场景声明，不得作为 Rate 组件默认预览行为
- 顶部 `RTL` 切换按钮若存在，应作用于所有 Rate 实例，但不得改变 `<html dir>` 或翻转页面说明区域

推荐做法：
- 页面所有可见文本使用 `data-i18n`、字典映射或业务传参
- 至少提供一组 LTR 与一组 RTL / 多语言展示，验证文案替换与方向切换不会破坏布局
- 若页面顶部存在 `RTL` 切换按钮，该按钮应作用于所有 Rate 样例区；页面主体说明文案保持原阅读方向，默认简中研发说明不随 RTL 翻转

#### 2.5 Rate 预览回归红线

生成或修改 Rate HTML 预览后，必须检查以下风险；命中任意一条即判定为不合格，需要修复后重新验收：

- RTL 切换导致整页、页面说明、卡片网格或顶部栏整体翻转
- RTL 下任意 Rate 实例出现“图标区在物理左侧、Label 在物理右侧”
- RTL 下 `Label` 文案变长时推动图标区移动
- RTL 半星出现在错误物理半区，或黄色半星与灰色底星错位
- Tooltip 箭头使用旋转方块，或箭头与白底圆角矩形不贴合
- Tooltip 与当前 hover 星星中心错位，或 tooltip 锚点挂在 Rate 根容器 / Item 外层而非 `.kd-rate-icon-wrap`
- 点击当前值清空后，鼠标不移开仍保持 hover 高亮
- `small / medium / large` 尺寸样例横向三列导致内容溢出卡片

## Figma / Code Connect 附录

### Figma 实现规则

Figma 写入必须优先使用 Figma 原生 `Use as Mask` 做半星裁切，不修改 SVG 源文件：
- 底层放置未选中 Icon
- 上层放置选中 Icon
- 在选中 Icon 上方放置宽度为 50% 的 mask 形状，并启用 `Use as Mask`
- 保留 `HalfMask` 图层命名，便于 Code Connect 与后续维护
- 第 4 颗星不新增独立“全星” Variant；第 4 颗星默认完整亮星，`50% mask` 打开为半星，关闭即为全星
- `Rate Icons Slot` 必须为真实 `SLOT` 属性
- `Rate Icons Slot` 高度必须最终与对应 size 变体高度一致；可通过 `slot` 垂直 `FILL` + 外层固定高度实现
- `Label` 的显隐只影响整体宽度，不影响星星区高度

### Figma Variant 策略

为避免 Variant 爆炸，Rate 只保留稳定视觉维度，动态数据通过属性控制。

唯一 Variant 维度：
- `size`: `small / medium / large`

不进入 Variant 的内容：
- `value` 不枚举，使用组件属性或实例标注控制
- `count` 不枚举，使用重复 Item 或实例标注控制
- `tooltips` 不枚举，由业务/i18n 文案传入
- `selectedColor` / `unselectedColor` 不枚举，由 token 或变量覆盖
- 半星 / 全星不枚举为独立 Variant；第 4 颗星统一通过 `50% mask` 可见性切换实现
- `Show Label`、`Label`、第 4 颗星半星开关均使用组件属性
- `character / color / mode` 作为业务能力保留，但不在当前母版中强制展开为 Variant

### Code Connect Props

```json
{
  "value": "number",
  "count": "number",
  "allowHalf": "boolean",
  "allowClear": "boolean",
  "disabled": "boolean",
  "readonly": "boolean",
  "size": "small | medium | large",
  "character": "star | heart | smile-happy | smile-neutral | smile-sad | sentiment | custom",
  "color": "default | semantic",
  "tooltips": "string[]",
  "selectedColor": "string | undefined",
  "unselectedColor": "string | undefined",
  "gap": "string | undefined",
  "label": "string | undefined"
}
```
