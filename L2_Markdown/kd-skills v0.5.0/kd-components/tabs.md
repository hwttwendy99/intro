# Tabs 选项卡

> **上下文使用规则（所有输出目标共享）** → [context-constraints.md](../kd-design-language/context-constraints.md#tabs-上下文使用规则)
> 包含：按上下文选 size、激活色按 size 区分、未激活 label 颜色、导航底部线规则。
> 以下为 HTML 目标的具体 CSS 实现和 HTML 模板。

## 反模式红线（弹窗/浮层内 Tabs）

以下是 Mode 2 参考截图时最常见的污染写法，**任何一条命中即重做**：

| 红线 | 错误示例 | 正确做法 |
|---|---|---|
| 弹窗内用 Middle/Large Tabs | `.kd-tabs-middle` (14px) / `.kd-tabs-large` (16px) | **必用 `.kd-tabs-small` (13px)** |
| 弹窗内 Tabs 使用蓝色 ink | `background: var(--kd-color-public-normal)` | **必用黑色 ink `var(--kd-color-text-primary)` (#0D0D0D)** |
| 弹窗内 Tabs 加通栏底线 | `border-bottom: 1px solid ...` | 不画（Ink bar 已起指示作用，画线会"双分割线"） |
| 对 label 直接写 `font-size: 16px` | 忽略 size class | 通过 `.kd-tabs-small/middle/large` 控制，label 无需显式 size |
| 自创 size（如 xl / pill-style） | `.kd-tabs-xl`、自定义 radius | 只允许 Small / Middle / Large 三档 |
| **未激活 label 用 secondary（灰色）** | `.kd-tabs-tab-bar-label { color: #6B6B6B }` | 必 `var(--kd-color-text-primary)` (#0D0D0D)，靠字重 + ink bar 区分激活态 |

> 设计原理：弹窗本身已是蓝色焦点区，再用蓝色 ink 会"蓝上加蓝"。Small + 黑色 ink 是 KDesign 为浮层场景专门设计的差异化搭配。

## Line 型（默认）

| Size | tab padding | font-size | 典型场景 |
|---|---|---|---|
| Small | `6px 0` | 13px | **弹窗内、侧边面板、紧凑卡片内** |
| Middle（默认） | `8px 0` | 14px | 页面级主导航（非弹窗内） |
| Large | `10px 0` | 16px | 落地页/首页/展示型大标题切换 |

> **注意**：Middle size 的 font-size 是 **14px** 而不是 16px（此为修正，早期文档误写为 16px）；激活态 font-weight 600。16px 仅用于 Large size。
>
> **场景选择规则**：
> - 弹窗/Drawer/Popover 等浮层内部 → 必用 **Small**（13px）
> - 页面级内容切换 → Middle（14px）
> - 引导/展示型大区块 → Large（16px）
> - 同一视图内禁止混用多种 size

## 激活色规则（所有 size 统一黑色）

| Size | Ink bar 颜色 | 激活 label 颜色 | 激活 label 字重 | 适用场景 |
|---|---|---|---|---|
| **Small** | `var(--kd-color-text-primary)` **#0D0D0D（黑）** | `#0D0D0D` | 600 | 弹窗内、侧边紧凑面板 |
| **Middle** | `var(--kd-color-text-primary)` #0D0D0D（黑） | `#0D0D0D` | 600 | 页面级内容切换 |
| **Large** | `var(--kd-color-text-primary)` #0D0D0D（黑） | `#0D0D0D` | 600 | 展示型大区块 |

> **设计原理**：所有尺寸统一使用黑色激活态（文本 + ink bar），通过字重加粗 + ink bar 指示当前选中项，视觉统一且不与页面其他蓝色元素冲突。

## Hover 未选中项

| 状态 | Ink bar 表现 |
|---|---|
| 未选中 + 未 hover | ink bar 透明（不可见） |
| 未选中 + hover | ink bar 显示为 `var(--kd-color-line-regular)` 浅灰色 |
| 选中 | ink bar 为黑色 `var(--kd-color-text-primary)` |

## 导航底部线（重要）

**默认不画任何导航底部通栏分割线**。Ink bar 本身就是激活指示，画一条通栏的线反而会造成视觉冗余和"双分割线"。

| 场景 | 是否画通栏底线 |
|---|---|
| **默认**（包括弹窗内 Tabs、页面级 Tabs、设置页 Tabs）| **不画** |
| 仅当 Tabs 需要与下方内容形成强视觉区隔（如内容区背景色和 Tabs 区相同，且中间无任何间距或 padding）| 可选加 `1px solid var(--kd-color-line-regular)` |

> **反模式**：弹窗内 Tabs 下方加通栏线 → 与下方内容白卡片之间会形成"一条灰底缝隙 + 灰线 + 白卡片圆角"，视觉混乱。弹窗内容卡片的圆角边已起到自然分隔作用，无需再画线。

## 其他规格

- Ink 指示线高度: `2px`, border-radius `999px`, transition `left/width .2s cubic-bezier(.34,.69,.1,1)`
- Tab 间距: `gap: 20px`
- 内容区: `padding-top: 16px`（页面级）/ `padding-bottom: 8px`（弹窗内）
- 禁用: `opacity: 0.3`
- 未激活 label 颜色: `var(--kd-color-text-primary)` (#0D0D0D), 字重 400（**不是 secondary**——KDesign 的 Tabs 靠 ink bar + 字重区分激活态，label 本色始终保持 primary）

## Card 型

- Tab: `padding: 8px 16px`, `margin-left: 2px`, `border-radius: 8px 8px 0 0`
- 激活: bg white, border `#f0f0f0`; nav bg `rgba(0,0,0,0.02)`

## HTML 参考

```html
<!-- [Tabs: line small] 弹窗/紧凑面板内使用 -->
<div class="kd-tabs kd-tabs-horizontal kd-tabs-line kd-tabs-small">
  <div class="kd-tabs-nav">
    <div class="kd-tabs-nav-list">
      <div class="kd-tabs-tab-bar kd-tabs-tab-bar-active">
        <div class="kd-tabs-tab-bar-btn">
          <span class="kd-tabs-tab-bar-label">字体</span>
        </div>
      </div>
      <div class="kd-tabs-tab-bar">
        <div class="kd-tabs-tab-bar-btn">
          <span class="kd-tabs-tab-bar-label">字符间距</span>
        </div>
      </div>
      <div class="kd-tabs-tab-bar-ink"></div>
    </div>
  </div>
  <div class="kd-tabs-pane-list">
    <div class="kd-tabs-pane kd-tabs-pane-active">选项卡一的内容</div>
  </div>
</div>

<!-- [Tabs: line middle] 页面级内容切换 -->
<div class="kd-tabs kd-tabs-horizontal kd-tabs-line kd-tabs-middle">
  <!-- 结构同上，不同 size class -->
</div>
```

## 交互能力

**需引入 interactions.js**：Tabs 无法通过纯 CSS 实现点击切换，需在 HTML 底部引入 `_css/interactions.js`。脚本通过事件委托自动处理：
- 点击 `.kd-tabs-tab-bar` 自动切换 `.kd-tabs-tab-bar-active`
- 同步切换对应的 `.kd-tabs-pane-active`（按 index 对应）

```html
<!-- 在 </body> 前引入 -->
<script src="interactions.js"></script>
```

或直接将脚本内容内联到 `<script>` 标签中。

## CSS 来源

完整样式见 [`_css/tabs.css`](_css/tabs.css)，生成 HTML 时直接复制该文件内容到 `<style>` 中。
