# Loading 加载

| Size | 直径 | text margin |
|---|---|---|
| Small (sm) | 16px | 6px |
| Default (md) | 20px | 8px |
| Large (lg) | 32px | 12px |

- 图形: SVG 渐变弧线（非 CSS border 模拟）
- 主色: `#1F69E0`，渐变从不透明到半透明
- Animation: `kd-spin .8s linear infinite`（整体旋转）
- 布局: 默认水平排列（icon + text），可加 `.kd-loading-vertical` 纵向排列

## Loading SVG 图标源码

```html
<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M8 14C8.34071 14 8.67479 13.9716 9 13.917" stroke="#1F69E0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M8 14C11.3137 14 14 11.3137 14 7.99996C14 4.6863 11.3137 2 8 2" stroke="url(#paint0_linear)" stroke-width="2" stroke-linejoin="round"/>
  <path d="M8 2C4.68629 2 2 4.6863 2 8C2 11.3137 4.68629 14 8 14" stroke="url(#paint1_linear)" stroke-width="2" stroke-linejoin="round"/>
  <defs>
    <linearGradient id="paint0_linear" x1="8" y1="12" x2="8" y2="3" gradientUnits="userSpaceOnUse">
      <stop stop-color="#1F69E0"/>
      <stop offset="1" stop-color="#1F69E0" stop-opacity="0.5"/>
    </linearGradient>
    <linearGradient id="paint1_linear" x1="7.5" y1="14" x2="8" y2="3" gradientUnits="userSpaceOnUse">
      <stop stop-color="#0A6CFF" stop-opacity="0"/>
      <stop offset="1" stop-color="#0A6CFF" stop-opacity="0.5"/>
    </linearGradient>
  </defs>
</svg>
```

> **注意**：当页面中出现多个 Loading 时，需要为每个实例的 `<linearGradient>` id 添加唯一后缀（如 `paint0_linear_1`、`paint0_linear_2`），避免 id 冲突导致渐变丢失。

## HTML 参考

```html
<!-- [Loading: default with text] -->
<div class="kd-loading kd-loading-md">
  <div class="kd-loading-icon">
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 14C8.34071 14 8.67479 13.9716 9 13.917" stroke="#1F69E0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 14C11.3137 14 14 11.3137 14 7.99996C14 4.6863 11.3137 2 8 2" stroke="url(#pl0)" stroke-width="2" stroke-linejoin="round"/><path d="M8 2C4.68629 2 2 4.6863 2 8C2 11.3137 4.68629 14 8 14" stroke="url(#pl1)" stroke-width="2" stroke-linejoin="round"/><defs><linearGradient id="pl0" x1="8" y1="12" x2="8" y2="3" gradientUnits="userSpaceOnUse"><stop stop-color="#1F69E0"/><stop offset="1" stop-color="#1F69E0" stop-opacity="0.5"/></linearGradient><linearGradient id="pl1" x1="7.5" y1="14" x2="8" y2="3" gradientUnits="userSpaceOnUse"><stop stop-color="#0A6CFF" stop-opacity="0"/><stop offset="1" stop-color="#0A6CFF" stop-opacity="0.5"/></linearGradient></defs></svg>
  </div>
  <div class="kd-loading-text">加载中...</div>
</div>

<!-- [Loading: vertical large] -->
<div class="kd-loading kd-loading-lg kd-loading-vertical">
  <div class="kd-loading-icon">
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 14C8.34071 14 8.67479 13.9716 9 13.917" stroke="#1F69E0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 14C11.3137 14 14 11.3137 14 7.99996C14 4.6863 11.3137 2 8 2" stroke="url(#pl2)" stroke-width="2" stroke-linejoin="round"/><path d="M8 2C4.68629 2 2 4.6863 2 8C2 11.3137 4.68629 14 8 14" stroke="url(#pl3)" stroke-width="2" stroke-linejoin="round"/><defs><linearGradient id="pl2" x1="8" y1="12" x2="8" y2="3" gradientUnits="userSpaceOnUse"><stop stop-color="#1F69E0"/><stop offset="1" stop-color="#1F69E0" stop-opacity="0.5"/></linearGradient><linearGradient id="pl3" x1="7.5" y1="14" x2="8" y2="3" gradientUnits="userSpaceOnUse"><stop stop-color="#0A6CFF" stop-opacity="0"/><stop offset="1" stop-color="#0A6CFF" stop-opacity="0.5"/></linearGradient></defs></svg>
  </div>
  <div class="kd-loading-text">加载中...</div>
</div>
```

## CSS 来源

完整样式见 [`_css/loading.css`](_css/loading.css)，生成 HTML 时直接复制该文件内容到 `<style>` 中。
