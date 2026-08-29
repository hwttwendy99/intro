# Skeleton 骨架屏

- 默认块: height 32px, border-radius 6px, bg `rgba(0,0,0,0.04)`
- Shimmer gradient: `linear-gradient(90deg, rgba(0,0,0,0.04) 25%, rgba(0,0,0,0.08) 37%, rgba(0,0,0,0.04) 63%)`
- Animation: `kd-skeleton-loading 1.4s ease infinite`（bg-position 100%→0）
- 段落: 行高 22px, 最后行 50% 宽, 行距 12px

```html
<!-- [Skeleton: article] -->
<div class="kd-skeleton">
  <div class="kd-skeleton-title kd-skeleton-loading"></div>
  <div class="kd-skeleton-paragraphs">
    <div class="kd-skeleton-paragraph kd-skeleton-loading"></div>
    <div class="kd-skeleton-paragraph kd-skeleton-loading"></div>
    <div class="kd-skeleton-paragraph kd-skeleton-loading" style="width:50%"></div>
  </div>
</div>
```
