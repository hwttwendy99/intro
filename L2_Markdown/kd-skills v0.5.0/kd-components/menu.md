# Menu 下拉菜单 / 右键菜单

> 这是下拉/右键菜单，不是侧边导航。

## 规格

- Panel: `padding: 8px`, bg white, `border: 1px solid #E5E5E5`, `border-radius: 8px`, box-shadow-large
- Item: `padding: 5px 8px`, `margin-bottom: 4px`, `border-radius: 6px`, font-size 13px
- Item hover: bg `rgba(0,0,0,0.04)`
- Icon: `position: relative; top: 4px; margin-right: 6px`, 16x16px
- Divider: height 1px, `margin: 4px 0`, bg `#E5E5E5`
- Group title: `padding: 8px 8px 2px`, font-size 13px, font-weight 600

## Selectable 模式

- Item `padding-left: 32px`（留给 tick）
- Tick: `position: absolute; left: 14px; top: 50%`, 16x16px, color `#0A6CFF`
- 选中项文字颜色不变（仍 `#1A1A1A`），font-weight 400

## HTML 参考

```html
<!-- [Menu: standard dropdown] -->
<ul class="kd-menu">
  <li class="kd-menu-item">
    <span class="kd-menu-item-icon"><!-- 16x16 SVG --></span>
    <span class="kd-menu-item-content">重命名</span>
  </li>
  <li class="kd-menu-item">
    <span class="kd-menu-item-content">复制</span>
  </li>
  <div class="kd-menu-divider"></div>
  <li class="kd-menu-item kd-menu-item-disabled">
    <span class="kd-menu-item-content">无权限操作</span>
  </li>
</ul>
```

## CSS 来源

完整样式见 [`_css/menu.css`](_css/menu.css)，生成 HTML 时直接复制该文件内容到 `<style>` 中。
