# Button 按钮

> 设计决策 → [component-decision.md](../kd-design-language/component-decision.md#按钮层级判断)

## 尺寸规格

| Size | class | 高度 | padding | font-size | radius |
|---|---|---|---|---|---|
| Small | `kd-button-sm` | 24px | `0 5px` | 13px | 4px |
| Medium | `kd-button-m` | 28px | `2px 11px` | 13px | 6px |
| Large（默认） | `kd-button-lg` | 32px | `4px 15px` | 13px | 6px |
| X-Large | `kd-button-xl` | 36px | `6px 19px` | 16px | 6px |

> Light + Medium 覆盖: `padding: 2px 8px`
> Icon-only padding: sm=3px, m=5px, lg=7px, xl=9px

## 类型与颜色

| 类型 | 背景 | 边框 | 文字 | Hover 背景 | Active 背景 |
|---|---|---|---|---|---|
| Primary | `#0A6CFF` | transparent | `#FFFFFF` | `#3B89FF` | `#0059DD` |
| Secondary | `#FFFFFF` | `1px #D4D4D4` | `#1A1A1A` | `#F5F5F5` | `#EBEBEB` |
| Light（默认） | transparent | transparent | `#1A1A1A` | `rgba(0,0,0,0.04)` | `rgba(0,0,0,0.08)` |
| Light + Danger | transparent | transparent | `#E12F3C` | `rgba(0,0,0,0.04)` | - |
| Primary + Danger | `#E12F3C` | transparent | `#FFFFFF` | `#EF5560` | `#C72730` |

Disabled: `opacity: 0.4`, `cursor: not-allowed`

## HTML 参考

```html
<!-- [Button: primary large] -->
<button class="kd-button kd-button-primary kd-button-lg">确认</button>
<!-- [Button: secondary large] -->
<button class="kd-button kd-button-secondary kd-button-lg">暂存</button>
<!-- [Button: light large] -->
<button class="kd-button kd-button-light kd-button-lg">取消</button>
<!-- [Button: light danger large] -->
<button class="kd-button kd-button-light kd-button-lg kd-button-danger">删除</button>
<!-- [Button: primary large with icon] -->
<button class="kd-button kd-button-primary kd-button-lg">
  <span class="kd-button-prefix-icon">+</span>
  <span class="kd-button-children">新建</span>
</button>
```

## CSS 来源

完整样式见 [`_css/button.css`](_css/button.css)，生成 HTML 时直接复制该文件内容到 `<style>` 中。
