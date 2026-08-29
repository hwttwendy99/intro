# Switch 开关

| 轨道 w × h | 滑块尺寸 | OFF transform | ON transform |
|---|---|---|---|
| **28 × 16px** | 12 × 12px | `translate(2px, 2px)` | `translate(14px, 2px)` |

- 轨道 radius: 999px; OFF bg: `#D4D4D4`; ON bg: `#0A6CFF`
- 轨道 transition: `background-color .3s, border-color .3s`
- 滑块: bg `#FFFFFF`, `box-shadow: 0 1px 3px rgba(0,0,0,.2)`, transition `transform .3s`
- Disabled: opacity 0.4

## HTML 参考

```html
<!-- [Switch: off] — 外层必须用 <label> 包裹以启用点击切换 -->
<label class="kd-switch">
  <input type="checkbox" class="kd-switch-original" />
  <span class="kd-switch-handle"></span>
</label>

<!-- [Switch: on] -->
<label class="kd-switch is-checked">
  <input type="checkbox" class="kd-switch-original" checked />
  <span class="kd-switch-handle"></span>
</label>

<!-- [Switch: disabled] -->
<label class="kd-switch is-disabled">
  <input type="checkbox" class="kd-switch-original" disabled />
  <span class="kd-switch-handle"></span>
</label>
```

## 交互能力

**需引入 `interactions.js`**：脚本监听 `change` 事件自动 toggle `.is-checked` class。外层必须使用 `<label>` 元素（不是 `<span>` 或 `<div>`），点击 label 即可触发内部 input 的 change 事件。

## CSS 来源

完整样式见 [`_css/switch.css`](_css/switch.css)，生成 HTML 时直接复制该文件内容到 `<style>` 中。
