# Progress 进度条

- Line bar height: 6px, border-radius 100px
- Track: `rgba(0,0,0,0.04)`, fill: `#0A6CFF`
- Text: `margin-left: 10px`, font-size 13px
- Success fill: `#418F1F`, Error fill: `#E12F3C`

```html
<!-- [Progress: line 60%] -->
<div class="kd-progress kd-progress-line">
  <div class="kd-progress-line-outer">
    <div class="kd-progress-line-inner" style="width:60%"></div>
  </div>
  <span class="kd-progress-text">60%</span>
</div>
```
