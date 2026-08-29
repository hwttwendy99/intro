# Message 全局提示

- 位置: `position: fixed; top: 88px; left: 50%; transform: translateX(-50%)`
- 单条: `padding: 9px 20px`, `border-radius: 8px`, `border: 1px solid`, box-shadow-large
- Font-size: 13px, line-height: 22px
- Icon: `margin-right: 8px` after icon
- 入场: translateY(-90%) opacity:0 → translateY(0) opacity:1, .3s ease

## 类型颜色

| 类型 | 背景 | 边框 |
|---|---|---|
| Success | `#E9F6E3` | `#418F1F` |
| Error | `#FFF0F1` | `#E12F3C` |
| Warning | `#FEF1EA` | `#E2651A` |
| Info / Loading | `#ECF4FF` | `#0A6CFF` |

## 图标规格

各类型使用实心填充圆形图标（16x16px），白色内部图案：

| 类型 | 图标形状 | 填充色 | 图标源文件 |
|---|---|---|---|
| Success | 圆形 + 勾 | `#418F1F` | `_icons/success_normal.svg` |
| Error | 圆形 + × | `#DD3332` | `_icons/mistake_normal.svg` |
| Warning | 三角形 + ! | `#E2651A` | `_icons/warn_normal.svg` |
| Info | 圆形 + i | `#1F69E0` | `_icons/info_normal.svg` |

## 强制约束：图标与类型必须一致

> **红线规则**：Message 的 class 类型与图标 SVG **必须严格配对**，不得混用。

| class | 必须使用的图标 | 违规示例 |
|---|---|---|
| `kd-message-success` | `success_normal.svg`（绿圆 + 勾） | ❌ 用 info 图标 + success class |
| `kd-message-error` | `mistake_normal.svg`（红圆 + ×） | ❌ 用 info 图标 + error class |
| `kd-message-warning` | `warn_normal.svg`（橙三角 + !） | ❌ 用 success 图标 + warning class |
| `kd-message-info` | `info_normal.svg`（蓝圆 + i） | ❌ 用 error 图标 + info class |

**语义选型指导**（帮助 AI 选对类型）：

| 场景语义 | 应使用类型 |
|---|---|
| 操作成功、保存完成、提交成功 | `success` |
| 操作失败、请求错误、拦截/阻断 | `error` |
| 风险提醒、不可撤销、即将过期 | `warning` |
| 中性通知、状态说明、系统维护通知 | `info` |

> 判断原则：**看结果而非原因**。例如"审核拦截"虽是审核系统发出的信息，但结果是操作被阻断 → 用 `error`，不用 `info`。

## HTML 参考

```html
<!-- [Message: success] -->
<div class="kd-message-root">
  <div class="kd-message kd-message-success">
    <span class="kd-message-icon">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><g clip-path="url(#cs)"><path d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z" fill="#418F1F"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12.6009 5.19891C12.9329 5.53086 12.9329 6.06905 12.6009 6.40099L7.78109 11.2208C7.44914 11.5528 6.91095 11.5528 6.57901 11.2208L3.89886 8.5407C3.56692 8.20876 3.56692 7.67057 3.89886 7.33862C4.23081 7.00668 4.769 7.00668 5.10094 7.33862L7.18005 9.41772L11.3989 5.19891C11.7308 4.86696 12.269 4.86696 12.6009 5.19891Z" fill="white"/></g><defs><clipPath id="cs"><rect width="16" height="16" fill="white"/></clipPath></defs></svg>
    </span>
    <span class="kd-message-text">操作成功</span>
  </div>
</div>

<!-- [Message: error] -->
<div class="kd-message-root">
  <div class="kd-message kd-message-error">
    <span class="kd-message-icon">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><g clip-path="url(#ce)"><path d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8Z" fill="#DD3332"/><path fill-rule="evenodd" clip-rule="evenodd" d="M4.76654 5.96862C4.43459 5.63668 4.43459 5.09849 4.76653 4.76654C5.09848 4.43459 5.63667 4.43459 5.96862 4.76653L7.99986 6.79775L10.0311 4.76653C10.363 4.43459 10.9012 4.43459 11.2332 4.76654C11.5651 5.09849 11.5651 5.63668 11.2332 5.96862L9.20195 7.99983L11.2331 10.0309C11.565 10.3629 11.565 10.9011 11.2331 11.233C10.9011 11.565 10.3629 11.565 10.031 11.233L7.99986 9.2019L5.96872 11.233C5.63677 11.565 5.09858 11.565 4.76664 11.233C4.43469 10.9011 4.4347 10.3629 4.76664 10.0309L6.79777 7.99983L4.76654 5.96862Z" fill="white"/></g><defs><clipPath id="ce"><rect width="16" height="16" fill="white"/></clipPath></defs></svg>
    </span>
    <span class="kd-message-text">操作失败，请重试</span>
  </div>
</div>

<!-- [Message: warning] -->
<div class="kd-message-root">
  <div class="kd-message kd-message-warning">
    <span class="kd-message-icon">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6.2521 2.02338C7.01671 0.664083 8.97379 0.664081 9.7384 2.02338L15.7422 12.0196C16.4921 13.3528 15.5145 15.0001 13.9848 15.0001H2.00486C0.475212 15.0001 -0.488216 13.3528 0.261714 12.0196L6.2521 2.02338Z" fill="#E2651A"/><path fill-rule="evenodd" clip-rule="evenodd" d="M8 5C8.55228 5 9 5.44772 9 6V9C9 9.55228 8.55228 10 8 10C7.44772 10 7 9.55228 7 9V6C7 5.44772 7.44772 5 8 5ZM7 12C7 11.4477 7.44772 11 8 11C8.55228 11 9 11.4477 9 12C9 12.5523 8.55228 13 8 13C7.44772 13 7 12.5523 7 12Z" fill="white"/></svg>
    </span>
    <span class="kd-message-text">请注意，此操作不可撤销</span>
  </div>
</div>

<!-- [Message: info] -->
<div class="kd-message-root">
  <div class="kd-message kd-message-info">
    <span class="kd-message-icon">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><g clip-path="url(#ci)"><path d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z" fill="#1F69E0"/><path fill-rule="evenodd" clip-rule="evenodd" d="M8 13C8.55228 13 9 12.5523 9 12V7C9 6.44772 8.55228 6 8 6C7.44772 6 7 6.44772 7 7V12C7 12.5523 7.44772 13 8 13ZM7 4C7 4.55228 7.44772 5 8 5C8.55228 5 9 4.55228 9 4C9 3.44772 8.55228 3 8 3C7.44772 3 7 3.44772 7 4Z" fill="white"/></g><defs><clipPath id="ci"><rect width="16" height="16" fill="white"/></clipPath></defs></svg>
    </span>
    <span class="kd-message-text">系统将在 5 分钟后维护</span>
  </div>
</div>
```

## CSS 来源

完整样式见 [`_css/message.css`](_css/message.css)，生成 HTML 时直接复制该文件内容到 `<style>` 中。
