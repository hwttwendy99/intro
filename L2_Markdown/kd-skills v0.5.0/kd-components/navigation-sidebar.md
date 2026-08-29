# Navigation 侧边导航（垂直）

> 设计决策 → [component-decision.md](../kd-design-language/component-decision.md#导航组件选型)

## 规格

- Item height: **32px**（固定高度，不用 padding 撑）
- Padding: `0 4px 0 8px`（右 4px，左 8px，非对称）
- **Gap: 8px**（子元素间距统一由 `gap` 控制，不在子元素上设 margin）
- Margin-top: 4px（项目间距，首项除外）
- Border-radius: **4px**（不是 6px）
- Font-size: 13px, font-weight: **400**（激活态也不加粗）
- Icon (`__icon`): 16x16px，无 margin（间距由父级 gap 控制）
- Label (`__label`): `width: 100%`，`text-align: left`，长文本溢出截断（ellipsis）
- Arrow (`__arrow`): 16x16px, 灰色图标，无 margin（间距由父级 gap 控制），用于展开/收起箭头
- Level 2 (`--level2`): padding-left: 36px，无业务图标
- Level 3 (`--level3`): padding-left: 48px
- Level 4 (`--level4`): padding-left: 60px

## 状态

| 状态 | 背景 | 文字 | font-weight |
|---|---|---|---|
| Normal | transparent | `#1A1A1A` | 400 |
| Hover | `rgba(0,0,0,0.04)` | `#1A1A1A` | 400 |
| Active | `rgba(0,0,0,0.08)` | `#1A1A1A` | 400 |
| **Selected** | `rgba(10,108,255,0.08)` | `#0A6CFF` | **600** |
| Disabled | transparent, opacity 0.3 | `#1A1A1A` | 400 |

> 激活态 font-weight 为 600（加粗），用于强调当前选中项。

## HTML 参考

```html
<!-- [Navigation: vertical sidebar - flat] -->
<nav class="kd-navigation kd-navigation-vertical">
  <div class="kd-navigation-item">
    <span class="kd-navigation-item__icon"><!-- 16x16 SVG --></span>
    <span class="kd-navigation-item__label">账号与安全</span>
  </div>
  <div class="kd-navigation-item is-active">
    <span class="kd-navigation-item__icon"><!-- 16x16 SVG --></span>
    <span class="kd-navigation-item__label">文档</span>
  </div>
</nav>

<!-- [Navigation: vertical sidebar - expandable with levels] -->
<nav class="kd-navigation kd-navigation-vertical">
  <button class="kd-navigation-item" type="button" aria-expanded="true">
    <span class="kd-navigation-item__icon"><!-- 16x16 SVG --></span>
    <span class="kd-navigation-item__label">内容管理</span>
    <span class="kd-navigation-item__arrow"><!-- arrow_up_s / arrow_down_s SVG --></span>
  </button>
  <a class="kd-navigation-item kd-navigation-item--level2 is-active" href="#">
    <span class="kd-navigation-item__label">新闻列表</span>
  </a>
  <a class="kd-navigation-item kd-navigation-item--level2" href="#">
    <span class="kd-navigation-item__label">说说列表</span>
  </a>
</nav>
```

## 交互能力

**需引入 interactions.js**：Navigation 无法通过纯 CSS 实现点击切换激活态，需引入 `_css/interactions.js`。脚本自动处理：
- 点击 `.kd-navigation-item` 自动切换 `.is-active`（同一 `.kd-navigation-vertical` 内互斥）

## CSS 来源

完整样式见 [`_css/navigation-sidebar.css`](_css/navigation-sidebar.css)，生成 HTML 时直接复制该文件内容到 `<style>` 中。
