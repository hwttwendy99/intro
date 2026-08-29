# Badge 角标

- 数字: height 18px, `padding: 0 4px`, line-height 14px, font-size 12px
- 描边: `border: 2px solid #FFFFFF`（2px，不是 1px）
- 背景: `#E2651A` (orange-6), text white
- Radius: 12px（接近胶囊）
- 定位: `top: 0; right: 10px; transform: translateY(-50%) translateX(100%)`
- 红点: 10x10px, bg `#E12F3C`, border-radius 50%, right 5px

```html
<!-- [Badge: number] -->
<div style="position:relative; display:inline-block">
  <button class="kd-button kd-button-light kd-button-lg">消息</button>
  <sup class="kd-badge-content is-fixed">5</sup>
</div>
<!-- [Badge: dot] -->
<div style="position:relative; display:inline-block">
  <button class="kd-button kd-button-light kd-button-lg">通知</button>
  <sup class="kd-badge-content is-fixed is-dot"></sup>
</div>
```
