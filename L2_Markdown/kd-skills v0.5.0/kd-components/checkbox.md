# Checkbox 复选框

- Box: **14x14px**, `border: 1px solid #B8B8B8` (line-heavy), `border-radius: 2px`
- 勾选: bg `#0A6CFF`, **border-color: transparent**（不是蓝色边框）
- 勾选 hover: bg `#3B89FF`
- Checkmark `::after`: `box-sizing: content-box; top:1px left:4px w:3px h:6px border:2px solid #fff border-top:0 border-left:0` rotate(45deg)
- **必须** `box-sizing: content-box`（防止全局 border-box 导致勾形变形）
- 背景/边框 transition: `.25s cubic-bezier(.71,-.46,.29,1.46)`
- Checkmark transition: `transform .15s cubic-bezier(.71,-.46,.88,.6) .05s`（0.05s 延迟）
- Label: `padding-left: 4px`, font-size 13px, line-height 20px
- 半选 `::before`: `top:50% left:3px right:3px margin-top:-1px border-top:2px solid #fff`
- Disabled: bg `#F5F5F5`, border `#F5F5F5`, opacity 0.4

```html
<!-- [Checkbox: unchecked] -->
<label class="kd-checkbox">
  <span class="kd-checkbox-input">
    <span class="kd-checkbox-inner"></span>
    <input type="checkbox" class="kd-checkbox-original" />
  </span>
  <span class="kd-checkbox-label">选项文字</span>
</label>

<!-- [Checkbox: checked] -->
<label class="kd-checkbox">
  <span class="kd-checkbox-input is-checked">
    <span class="kd-checkbox-inner"></span>
    <input type="checkbox" class="kd-checkbox-original" checked />
  </span>
  <span class="kd-checkbox-label">已勾选</span>
</label>
```

## 交互能力

**需引入 `interactions.js`**：脚本监听 `change` 事件自动 toggle `.is-checked` class。外层必须使用 `<label>` 包裹，点击 label 即可触发内部 input 的 change 事件。

## CSS 来源

完整样式见 [`_css/checkbox.css`](_css/checkbox.css)，生成 HTML 时直接复制该文件内容到 `<style>` 中。
