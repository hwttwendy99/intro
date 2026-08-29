# Tooltip 文字提示

- Content: `padding: 6px 12px`, `border-radius: 6px`, `border: 1px solid #E5E5E5`, box-shadow-large
- Font-size: 13px, line-height: 20px, color `#1A1A1A`, bg white
- Arrow: 8x8px 旋转方块, border `#E5E5E5`, rotate(45deg), 作为 content 的子元素
- Max-width: 300px

## 箭头实现原理

箭头是 `.kd-tooltip-content` 的**子元素**，使用旋转 45° 的方块实现。通过隐藏两条边框（与内容框相邻的边），内容框的背景自然覆盖接合处，实现无缝效果。

| Placement | 箭头位置 | 隐藏的边 |
|---|---|---|
| top | content 底部中央 | border-top + border-left |
| bottom | content 顶部中央 | border-bottom + border-right |
| left | content 右侧中央 | border-top + border-left |
| right | content 左侧中央 | border-bottom + border-right |

## HTML 参考

```html
<!-- [Tooltip: top] 箭头必须作为 content 的子元素 -->
<div class="kd-tooltip kd-tooltip-top">
  <button class="kd-button kd-button-secondary kd-button-m">触发元素</button>
  <div class="kd-tooltip-content">
    提示文字
    <div class="kd-tooltip-arrow"></div>
  </div>
</div>

<!-- [Tooltip: bottom] -->
<div class="kd-tooltip kd-tooltip-bottom">
  <button class="kd-button kd-button-secondary kd-button-m">触发元素</button>
  <div class="kd-tooltip-content">
    提示文字
    <div class="kd-tooltip-arrow"></div>
  </div>
</div>

<!-- [Tooltip: left] -->
<div class="kd-tooltip kd-tooltip-left">
  <button class="kd-button kd-button-secondary kd-button-m">触发元素</button>
  <div class="kd-tooltip-content">
    提示文字
    <div class="kd-tooltip-arrow"></div>
  </div>
</div>

<!-- [Tooltip: right] -->
<div class="kd-tooltip kd-tooltip-right">
  <button class="kd-button kd-button-secondary kd-button-m">触发元素</button>
  <div class="kd-tooltip-content">
    提示文字
    <div class="kd-tooltip-arrow"></div>
  </div>
</div>
```

> **重要**：`.kd-tooltip-arrow` 必须是 `.kd-tooltip-content` 的**子元素**（不是兄弟），这样内容框的背景能自然覆盖箭头与边框的接合处，避免视觉重叠。

## CSS 来源

完整样式见 [`_css/tooltip.css`](_css/tooltip.css)，生成 HTML 时直接复制该文件内容到 `<style>` 中。
