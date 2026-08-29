# Tag 标签

## 尺寸规格

| Size | 高度 | line-height |
|---|---|---|
| Small | 20px | 18px |
| Medium（默认） | 24px | 22px |
| Large | 28px | 26px |

> font-size: **13px**（不是 12px）, padding: `0 5px`, border-radius: 4px

## 类型颜色

| 类型 | 背景 | 边框 | 文字 |
|---|---|---|---|
| Default | `rgba(0,0,0,0.04)` | `rgba(0,0,0,0.04)` | `#1A1A1A` |
| Success | `#E9F6E3` | `#418F1F` | `#347317` |
| Error | `#FFF0F1` | `#E12F3C` | `#C72730` |
| Warning | `#FEF1EA` | `#E2651A` | `#C25010` |
| Info | `#ECF4FF` | `#0A6CFF` | `#0059DD` |

> 默认 Tag 的 border 与 bg 相同 = 无可见边框
> Close icon: 16x16px, color `#555555`

## HTML 参考

```html
<!-- [Tag: default medium] -->
<span class="kd-tag">默认标签</span>
<!-- [Tag: success medium] -->
<span class="kd-tag kd-tag--success">成功</span>
<!-- [Tag: closable] -->
<span class="kd-tag">
  标签文字
  <button class="kd-tag-close">
    <svg width="12" height="12" viewBox="0 0 12 12" stroke="#555555" stroke-width="1.5" stroke-linecap="round" fill="none"><line x1="3" y1="3" x2="9" y2="9"/><line x1="9" y1="3" x2="3" y2="9"/></svg>
  </button>
</span>
```

## CSS 来源

完整样式见 [`_css/tag.css`](_css/tag.css)，生成 HTML 时直接复制该文件内容到 `<style>` 中。
