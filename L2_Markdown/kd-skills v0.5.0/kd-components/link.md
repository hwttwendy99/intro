# Link 链接

## 规格

- Height: 22px, line-height: 22px, font-size: 13px
- 默认 color: `#1A1A1A`（text-primary，不是蓝色）
- Hover/Active: `#0A6CFF`
- Primary type: 默认 `#0A6CFF`
- Underline: 默认 none; `.is-underline` → `text-decoration: underline`
- Disabled: opacity 0.3, cursor not-allowed
- Icon: 14x14px, `margin-left: 5px`

## HTML 参考

```html
<!-- [Link: default] -->
<a class="kd-link">默认链接（灰色→hover蓝）</a>
<!-- [Link: primary] -->
<a class="kd-link kd-link-primary">主要链接（默认蓝色）</a>
<!-- [Link: primary with icon] -->
<a class="kd-link kd-link-primary">
  文档
  <svg class="kd-link-icon" width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M2 7h10M7 2l5 5-5 5"/></svg>
</a>
<!-- [Link: disabled] -->
<a class="kd-link is-disabled">禁用链接</a>
```

## CSS 来源

完整样式见 [`_css/link.css`](_css/link.css)，生成 HTML 时直接复制该文件内容到 `<style>` 中。
