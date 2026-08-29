# Divider 分割线

## 水平分割线

- `border-top: 1px solid #E5E5E5` (line-regular)
- `margin: 24px 0`
- 使用 `<div>`，**不用 `<hr>`**

## 水平带文字

- `border-top: 0`, `margin: 16px 0`
- Font-size: 16px, font-weight 400, line-height 24px, color `#1A1A1A`
- `::before`/`::after`: `flex: 1; border-top: 1px solid #E5E5E5`
- Text padding: `0 1em`

## 垂直分割线

- `border-left: 1px solid #E5E5E5`（用 border-left，不用 background）
- Height: 0.9em, `margin: 0 8px`, `vertical-align: middle`, `top: -0.06em`

## 虚线

- `border-style: dashed`

## HTML 参考

```html
<!-- [Divider: horizontal] -->
<div class="kd-divider kd-divider-horizontal"></div>

<!-- [Divider: horizontal with text] -->
<div class="kd-divider kd-divider-horizontal kd-divider-with-text kd-divider-with-text-center">
  <span class="kd-divider-inner-text">分组</span>
</div>

<!-- [Divider: vertical inline] -->
<span>左侧</span>
<span class="kd-divider kd-divider-vertical"></span>
<span>右侧</span>
```

## CSS 来源

完整样式见 [`_css/divider.css`](_css/divider.css)，生成 HTML 时直接复制该文件内容到 `<style>` 中。
