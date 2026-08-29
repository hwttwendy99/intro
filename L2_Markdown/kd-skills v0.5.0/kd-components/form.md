# Form 表单

- Item `margin-bottom: 24px`（small: 16px）
- Label: height 32px, font-size **14px**（例外，非 13px）, 右对齐
- Label colon: `::after { content: ':'; margin-left: 2px; margin-right: 8px }`
- 必填 `*`: `color: #C72730`, font-size 14px, `margin-right: 4px`
- Error text: `color: #C72730`, font-size 14px, line-height 1.5
- Control min-height: 32px（small 24px, large 40px）
- Vertical 布局: `flex-direction: column`, label `padding-bottom: 4px`, 无 colon

## HTML 参考

```html
<!-- [Form: horizontal with required field] -->
<form class="kd-form">
  <div class="kd-form-item">
    <label class="kd-form-item-label kd-form-item-label-required">用户名</label>
    <div class="kd-form-item-control">
      <div class="kd-form-item-control-input">
        <div class="kd-input kd-input-medium" style="width:100%">
          <div class="kd-input-wrap">
            <input class="kd-input-inner" placeholder="请输入用户名" />
          </div>
        </div>
      </div>
    </div>
  </div>
</form>
```

## CSS 来源

完整样式见 [`_css/form.css`](_css/form.css)，生成 HTML 时直接复制该文件内容到 `<style>` 中。
