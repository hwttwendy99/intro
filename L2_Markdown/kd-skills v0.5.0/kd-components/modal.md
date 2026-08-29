# Modal 弹窗

> 设计决策 → [component-decision.md](../kd-design-language/component-decision.md#反馈组件选型)
> **Modal 组合模式（所有输出目标共享）** → [modal-pattern.md](../kd-patterns/modal-pattern.md)
> 包含：C1/C2/C3 分档判定、三层文字角色、字重判定口诀、Footer 按钮规则、分组通则。
> 以下为 HTML 目标的具体 CSS 实现和 HTML 模板。

## CSS 类名体系

> 字重判定规则、C1-C3 分档判定 → 权威来源见 [modal-pattern.md](../kd-patterns/modal-pattern.md)
> 反模式红线 → 权威来源见 [checklist.md](../kd-design-qa/checklist.md#对话框档位与字重bug-高发区)

| CSS 类名 | 对应角色 | font-weight |
|----------|---------|-------------|
| `.kd-modal-title` | 弹窗标题（14px / 600） | 600 |
| `.kd-modal-section-title` | 组标题（13px / 600）— 仅用于真组（下层 ≥ 2 子字段） | 600 |
| `.kd-field-label` | 字段 label（13px / 400）— 必须显式写 `font-weight: 400` | 400 |

## 规格（Figma 权威数值）

| 部位 | 规格 |
|---|---|
| **外壳** | bg `var(--kd-color-background-plate)` (#F5F5F5), `border: 1px solid rgba(13,13,13,0.12)`, `border-radius: 12px`, `box-shadow: 0 32px 48px rgba(13,13,13,0.20)` |
| **Header** | height 44px, padding `10px 12px 0 16px`, gap 4px, **无** border-bottom |
| **标题** | font-size **14px**, font-weight 600, line-height 22px, color `var(--kd-color-text-primary)` (#0D0D0D) |
| **关闭按钮** | 24x24px, Button Icon Light Small, color `var(--kd-color-icon-secondary)` (#757575) |
| **内容区 wrap（C1/C2）** | padding `4px 16px 8px`（内容直接在底板上，**无白卡片**）|
| **内容区 wrap（C3）** | padding `0 16px` |
| **内容白卡片（仅 C3）** | bg `var(--kd-color-background-bottom)` (#FFFFFF), border-radius 12px, padding `12px 12px`（**C1/C2 无此层**）|
| **多卡片间距（C3a）** | `gap: 8px`（仅 C3a 场景，C3b 为单卡片）|
| **分组 gap** | 16px（section 之间） |
| **每组内 gap** | 4px（组标题与控件之间） |
| **组标题** | font-size 13px, font-weight 600, line-height 20px, color `var(--kd-color-text-primary)` (#0D0D0D) |
| **字段 label** | font-size 13px, font-weight 400, line-height 20px, color `var(--kd-color-text-primary)` (#0D0D0D) |
| **Footer** | padding 16px, gap 16px, `justify-content: space-between` |
| **Mask** | `rgba(0,0,0,.45)`, z-index 999 |
| **入场动画** | translateY(-20px) → 0, opacity 0→1, .3s ease |

## 档位声明（生成时必写）

> 按钮规范、C1-C3 分档判定、决策流 → 权威来源见 [modal-pattern.md](../kd-patterns/modal-pattern.md)

每个弹窗的 Modal 根元素注释中必须声明档位：

```html
<!-- [Modal: sm C1] 纯字段型 / 无白卡片 / 无组标题 -->
<!-- [Modal: md C2] 线性复合型 / 无白卡片 / 多个组标题 -->
<!-- [Modal: lg C3a] 多卡片复杂型 / 3 张白卡片 / 横向布局 -->
<!-- [Modal: lg C3b] 切换型 / Tabs 下单张白卡片 -->
```

### 骨架示例 1：C1 纯字段型（无真组、无白卡片）

**场景**：偏好设置——3 个独立字段纵向罗列，每个字段都是 `label + 单控件`，无任何子层级。所以 **0 个真组 = C1**，全部 label 用 `.kd-field-label` (400)。**内容直接置于底板上，不包裹白卡片。**

```html
<!-- [Modal: sm C1] 纯字段型 / 无白卡片 / 0 个真组 -->
<div class="kd-modal kd-modal-sm">
  <div class="kd-modal-content">
    <div class="kd-modal-header">
      <div class="kd-modal-title">偏好设置</div>
      <button class="kd-modal-close" aria-label="关闭">×</button>
    </div>
    <!-- body-wrap 直接承载字段，无 body-card -->
    <div class="kd-modal-body-wrap">

      <!-- 字段 1：主题（label + 单 Select）-->
      <div class="kd-field">
        <div class="kd-field-label">主题</div>
        <!-- [Select: large] -->
      </div>

      <!-- 字段 2：语言（label + 单 Select）-->
      <div class="kd-field">
        <div class="kd-field-label">语言</div>
        <!-- [Select: large] -->
      </div>

      <!-- 字段 3：自动保存（label + 单 Switch）-->
      <div class="kd-field">
        <div class="kd-field-label">自动保存</div>
        <!-- [Switch] -->
      </div>

    </div>
    <div class="kd-modal-footer">...</div>
  </div>
</div>
```

> C1 骨架里**不出现** `.kd-modal-section-title`，也不出现任何 600 加粗的标题（弹窗标题除外）。**不出现** `.kd-modal-body-card`。

### 骨架示例 2：C2 线性复合型（≥ 1 个真组、无白卡片）

**场景**：新建用户——2 个独立字段（姓名、邮箱）+ 1 个真组（权限，下含 3 个独立 checkbox 子字段）。因出现 1 个真组 → **C2**。**内容直接置于底板上，不包裹白卡片。**

```html
<!-- [Modal: md C2] 线性复合型 / 无白卡片 / 1 个真组 -->
<div class="kd-modal kd-modal-md">
  <div class="kd-modal-content">
    <div class="kd-modal-header">
      <div class="kd-modal-title">新建用户</div>
      <button class="kd-modal-close" aria-label="关闭">×</button>
    </div>
    <!-- body-wrap 直接承载字段和组，无 body-card -->
    <div class="kd-modal-body-wrap">

      <!-- 字段 1：姓名（label + 单 Input）[400] -->
      <div class="kd-field">
        <div class="kd-field-label">姓名</div>
        <!-- [Input: large] -->
      </div>

      <!-- 字段 2：邮箱（label + 单 Input）[400] -->
      <div class="kd-field">
        <div class="kd-field-label">邮箱</div>
        <!-- [Input: large] -->
      </div>

      <!-- 真组：权限（≥ 2 个独立子字段 → 600 加粗）-->
      <div class="kd-modal-section">
        <div class="kd-modal-section-title">权限</div>

        <!-- 子字段 1：读（子 label + checkbox）[400] -->
        <div class="kd-field">
          <div class="kd-field-label">读取</div>
          <!-- [Checkbox] -->
        </div>

        <!-- 子字段 2：写（子 label + checkbox）[400] -->
        <div class="kd-field">
          <div class="kd-field-label">编辑</div>
          <!-- [Checkbox] -->
        </div>

        <!-- 子字段 3：删（子 label + checkbox）[400] -->
        <div class="kd-field">
          <div class="kd-field-label">删除</div>
          <!-- [Checkbox] -->
        </div>
      </div>

    </div>
    <div class="kd-modal-footer">...</div>
  </div>
</div>
```

> 反例：如果把"姓名""邮箱"也写成 `.kd-modal-section-title`，它们不是真组（下层无子字段），违反字重判定口诀，会被 QA 判违规。**C2 不出现** `.kd-modal-body-card`。

### 骨架示例 3：C3a 多卡片复杂型（无 tabs）

```html
<!-- [Modal: lg C3a] 多卡片复杂型 / 3 张卡片 -->
<div class="kd-modal kd-modal-lg">
  <div class="kd-modal-content">
    <div class="kd-modal-header">
      <div class="kd-modal-title">字体</div>
      <button class="kd-modal-close" aria-label="关闭">×</button>
    </div>

    <!-- body-wrap 内用 flex-column + gap:8px 承载多卡片 -->
    <div class="kd-modal-body-wrap kd-modal-body-multi">

      <!-- 第 1 张卡片：对齐方式 -->
      <div class="kd-modal-body-card kd-modal-body-card-c3">
        <div class="kd-modal-section">
          <div class="kd-modal-section-title">对齐方式</div>
          <!-- radio group -->
        </div>
      </div>

      <!-- 第 2 张卡片：字体设置（checkbox 群组）-->
      <div class="kd-modal-body-card kd-modal-body-card-c3">
        <div class="kd-modal-section">
          <div class="kd-modal-section-title">字体设置</div>
          <!-- checkbox group -->
        </div>
      </div>

      <!-- 第 3 张卡片：字体/字形/字号（横向 3 列）-->
      <div class="kd-modal-body-card kd-modal-body-card-c3">
        <div class="kd-row-3col">
          <div class="kd-field-group"><div class="kd-field-label">字体(F)</div>...</div>
          <div class="kd-field-group"><div class="kd-field-label">字形(L)</div>...</div>
          <div class="kd-field-group"><div class="kd-field-label">字号(Z)</div>...</div>
        </div>
      </div>
    </div>

    <div class="kd-modal-footer">...</div>
  </div>
</div>
```

```css
/* C3a 特有：body-wrap 变身为多卡片容器 */
.kd-modal-body-multi {
  display: flex; flex-direction: column; gap: 8px;
}
/* C3 卡片 padding 对称 */
.kd-modal-body-card-c3 { padding: 12px; }
/* 3 列横向（记得防溢出） */
.kd-row-3col { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }
.kd-row-3col > * { min-width: 0; }
```

### 骨架示例 4：C3b 切换型（有 tabs）

```html
<!-- [Modal: lg C3b] 切换型 / Tabs 下单卡片 -->
<div class="kd-modal kd-modal-lg">
  <div class="kd-modal-content">
    <div class="kd-modal-header">
      <div class="kd-modal-title">字体</div>
      <button class="kd-modal-close" aria-label="关闭">×</button>
    </div>

    <div class="kd-modal-body-wrap">

      <!-- Tabs 直接浮在底板色上，不进任何卡片 -->
      <div class="kd-tabs kd-tabs-line kd-tabs-small">
        <div class="kd-tabs-nav">
          <div class="kd-tabs-nav-list">
            <div class="kd-tabs-tab-bar kd-tabs-tab-bar-active">
              <div class="kd-tabs-tab-bar-btn"><span class="kd-tabs-tab-bar-label">字体(N)</span></div>
              <div class="kd-tabs-tab-bar-ink"></div>
            </div>
            <div class="kd-tabs-tab-bar">
              <div class="kd-tabs-tab-bar-btn"><span class="kd-tabs-tab-bar-label">字符间距(R)</span></div>
              <div class="kd-tabs-tab-bar-ink"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- 有且仅有 1 张白卡片（不论 tab 内部多少组，共享此卡片）-->
      <div class="kd-modal-body-card kd-modal-body-card-c3">
        <div class="kd-modal-section">
          <div class="kd-modal-section-title">对齐方式</div>
          <!-- 字段 -->
        </div>
        <div class="kd-modal-section">
          <div class="kd-modal-section-title">效果</div>
          <!-- 字段 -->
        </div>
      </div>

    </div>

    <div class="kd-modal-footer">...</div>
  </div>
</div>
```

> **C3b 强制约束**：只要出现 Tabs / Segmented，**本弹窗内有且仅有 1 张白卡片**。出现 `.kd-modal-body-card × N` 即视为违规，必须重构为「单卡片内多 section」。

### 分组通则（适用于所有档位）

- 组与组之间 `margin-top: 16px`
- 组内标题与控件 `gap: 4px`
- 禁止加分割线区分组
- 禁止嵌套小卡片（C3 白卡片内也不允许再嵌套）
- 横向并排字段用 grid（务必加 `min-width: 0` 防溢出，见本文件「多列布局硬规则」）
- **C1/C2**：section 直接在 `.kd-modal-body-wrap` 里
- **C3**：section 在 `.kd-modal-body-card` 白卡片里

## 弹窗内嵌 Tabs

> Tabs 上下文使用规则（size / ink 色 / 激活色）→ 权威来源见 [context-constraints.md](../kd-design-language/context-constraints.md#tabs-上下文使用规则)

弹窗内 Tabs 使用 `.kd-tabs-small`，放置在 Header 和内容卡片之间（底板色承载，不进卡片）。

## CSS 来源

完整样式见 [`_css/modal.css`](_css/modal.css)，生成 HTML 时直接复制该文件内容到 `<style>` 中。

## HTML 参考（标准结构）

### C1/C2 模板（无白卡片）

```html
<!-- [Modal: md C2] 线性复合型 / 无白卡片 -->
<div class="kd-modal-root" role="dialog" aria-modal="true" aria-labelledby="modal-title">
  <div class="kd-modal-mask"></div>
  <div class="kd-modal-wrap">
    <div class="kd-modal kd-modal-md">
      <div class="kd-modal-content">

        <div class="kd-modal-header">
          <div class="kd-modal-title" id="modal-title">弹窗标题</div>
          <button class="kd-modal-close" aria-label="关闭">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><line x1="4" y1="4" x2="12" y2="12"/><line x1="12" y1="4" x2="4" y2="12"/></svg>
          </button>
        </div>

        <!-- 内容直接在底板上，无 body-card -->
        <div class="kd-modal-body-wrap">
          <div class="kd-modal-section">
            <!-- 字段 -->
          </div>
          <div class="kd-modal-section">
            <div class="kd-modal-section-title">组标题 2</div>
            <!-- 字段 -->
          </div>
        </div>

        <div class="kd-modal-footer">
          <div class="kd-modal-footer-left"></div>
          <div class="kd-modal-footer-right">
            <button class="kd-button kd-button-secondary kd-button-m" style="min-width:72px">取消</button>
            <button class="kd-button kd-button-primary kd-button-m" style="min-width:72px">确认</button>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>
```

### C3 模板（有白卡片）

```html
<!-- [Modal: lg C3b] 切换型 / 单张白卡片 -->
<div class="kd-modal-root" role="dialog" aria-modal="true" aria-labelledby="modal-title">
  <div class="kd-modal-mask"></div>
  <div class="kd-modal-wrap">
    <div class="kd-modal kd-modal-lg">
      <div class="kd-modal-content">

        <div class="kd-modal-header">
          <div class="kd-modal-title" id="modal-title">弹窗标题</div>
          <button class="kd-modal-close" aria-label="关闭">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><line x1="4" y1="4" x2="12" y2="12"/><line x1="12" y1="4" x2="4" y2="12"/></svg>
          </button>
        </div>

        <!-- C3 body-wrap 使用 -c3 类名 -->
        <div class="kd-modal-body-wrap kd-modal-body-wrap-c3">
          <!-- 白色内容卡片 -->
          <div class="kd-modal-body-card">
            <div class="kd-modal-section">
              <!-- 字段 -->
            </div>
            <div class="kd-modal-section">
              <div class="kd-modal-section-title">组标题 2</div>
              <!-- 字段 -->
            </div>
          </div>
        </div>

        <div class="kd-modal-footer">
          <div class="kd-modal-footer-left"></div>
          <div class="kd-modal-footer-right">
            <button class="kd-button kd-button-secondary kd-button-m" style="min-width:72px">取消</button>
            <button class="kd-button kd-button-primary kd-button-m" style="min-width:72px">确认</button>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>
```

## 弹窗内嵌表单（最佳实践）

```html
<!-- [Modal: medium with form] -->
<div class="kd-modal kd-modal-md">
  <div class="kd-modal-content">
    <div class="kd-modal-header">
      <div class="kd-modal-title">新建用户</div>
      <button class="kd-modal-close" aria-label="关闭">×</button>
    </div>
    <div class="kd-modal-body">
      <form class="kd-form kd-form-vertical">
        <div class="kd-form-item">
          <label class="kd-form-item-label kd-form-item-label-required">姓名</label>
          <div class="kd-form-item-control">
            <div class="kd-form-item-control-input">
              <div class="kd-input kd-input-medium" style="width:100%">
                <div class="kd-input-wrap"><input class="kd-input-inner" placeholder="请输入" /></div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
    <div class="kd-modal-footer">
      <button class="kd-button kd-button-secondary kd-button-lg" style="min-width:72px">取消</button>
      <button class="kd-button kd-button-primary kd-button-lg" style="min-width:72px">保存</button>
    </div>
  </div>
</div>
```

## 弹窗内嵌 Tabs + 多分组（默认推荐模式）

适用场景：字体设置、偏好设置、打印选项等多维度切换 + 每个维度多个信息组的弹窗。
**默认使用全白底 + 标题间距分组**，不要用灰底卡片。

```html
<!-- [Modal: large with tabs, default grouping] -->
<div class="kd-modal kd-modal-lg">
  <div class="kd-modal-content">
    <!-- Header -->
    <div class="kd-modal-header">
      <div class="kd-modal-title">字体</div>
      <button class="kd-modal-close" aria-label="关闭">×</button>
    </div>

    <!-- [Tabs: line small] — 弹窗内必用 small -->
    <div class="kd-tabs kd-tabs-line kd-tabs-small" style="margin: 0 -16px; padding: 0 16px;">
      <div class="kd-tabs-nav-list">
        <div class="kd-tabs-tab-bar kd-tabs-tab-bar-active">
          <div class="kd-tabs-tab-bar-btn"><span class="kd-tabs-tab-bar-label">字体(N)</span></div>
        </div>
        <div class="kd-tabs-tab-bar">
          <div class="kd-tabs-tab-bar-btn"><span class="kd-tabs-tab-bar-label">字符间距(R)</span></div>
        </div>
      </div>
    </div>

    <!-- Body：全白底，不加灰底、不加卡片 -->
    <div class="kd-modal-body">

      <!-- 第一组：紧跟 tab，无需组标题（tab 名已表明） -->
      <div class="kd-modal-section">
        <!-- 字段行：中文字体/字形/字号 + 西文字体 -->
      </div>

      <div class="kd-modal-section">
        <div class="kd-modal-section-title">复杂文种</div>
        <!-- 字段行 -->
      </div>

      <div class="kd-modal-section">
        <div class="kd-modal-section-title">所有文字</div>
        <!-- 字段行 -->
      </div>

      <div class="kd-modal-section">
        <div class="kd-modal-section-title">效果</div>
        <!-- checkbox grid -->
      </div>

      <div class="kd-modal-section">
        <div class="kd-modal-section-title">预览</div>
        <!-- 预览内容：内部可用描边盒子强调，不是分组容器 -->
        <div class="preview-box">...</div>
        <p class="preview-hint">这是一种 TrueType 字体，同时适用于屏幕和打印机。</p>
      </div>
    </div>

    <!-- Footer：左侧辅助按钮用 Secondary -->
    <div class="kd-modal-footer has-left">
      <div class="kd-modal-footer-left">
        <!-- [Button: secondary large] 辅助操作 -->
        <button class="kd-button kd-button-secondary kd-button-lg" style="min-width:72px">默认(D)...</button>
        <button class="kd-button kd-button-secondary kd-button-lg" style="min-width:72px">文本效果(E)...</button>
      </div>
      <div class="kd-modal-footer-right">
        <button class="kd-button kd-button-secondary kd-button-lg" style="min-width:72px">取消</button>
        <button class="kd-button kd-button-primary kd-button-lg" style="min-width:72px">确定</button>
      </div>
    </div>
  </div>
</div>
```
