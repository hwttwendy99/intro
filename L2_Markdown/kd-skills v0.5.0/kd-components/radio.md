# Radio 单选框

- Circle: **14x14px**, `border: 1px solid #D4D4D4` (line-medium, 比 Checkbox 浅一档)
- Dot `::after`: **6x6px**, color `#3B89FF`（public-hover, 不是 public-normal）
- 勾选: border `#0A6CFF`, dot scale(0→1)
- Hover（未选中）: bg `rgba(0,0,0,0.04)` ; 勾选 hover: bg `#ECF4FF`
- Label: `padding-left: 4px`, font-size 13px

```html
<!-- [Radio: unchecked] -->
<label class="kd-radio">
  <span class="kd-radio-input">
    <span class="kd-radio-inner"></span>
    <input type="radio" class="kd-radio-original" name="group" />
  </span>
  <span class="kd-radio-label">选项</span>
</label>
```

## 交互能力

**需引入 `interactions.js`**：脚本监听 `change` 事件自动 toggle `.is-checked` class，同 name 的 Radio 自动互斥。外层必须使用 `<label>` 包裹。

## CSS 来源

完整样式见 [`_css/radio.css`](_css/radio.css)，生成 HTML 时直接复制该文件内容到 `<style>` 中。
