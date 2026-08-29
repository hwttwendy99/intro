# 无障碍规范

## 对比度要求（WCAG AA）

| 元素类型 | 最低对比度 | 说明 |
|---|---|---|
| 正文文本（<18px） | 4.5:1 | 含所有 body/label/caption 文字 |
| 大号文本（≥18px 或 ≥14px bold） | 3:1 | 标题、大字号 |
| UI 组件/图形 | 3:1 | 图标、边框、焦点指示器 |

### KDesign Token 对比度验证

以下为 Light 主题下常用组合的对比度（已验证）：

| 前景 | 背景 | 对比度 | 通过 |
|---|---|---|---|
| text-primary `#1A1A1A` | fill-base `#FFFFFF` | 17.4:1 | AA |
| text-secondary `#555555` | fill-base `#FFFFFF` | 7.5:1 | AA |
| text-tertiary `#909090` | fill-base `#FFFFFF` | 3.5:1 | 仅大文本 |
| text-white `#FFFFFF` | public-normal `#0A6CFF` | 4.6:1 | AA |
| text-white `#FFFFFF` | error-normal `#E12F3C` | 4.0:1 | 仅大文本 |
| text-error `#C72730` | fill-base `#FFFFFF` | 5.6:1 | AA |
| text-error `#C72730` | error-light `#FFF0F1` | 5.3:1 | AA |

### 注意事项

- `text-tertiary`（`#909090`）在白色背景上**不满足正文 AA 标准**，仅可用于：
  - Placeholder 文字
  - 禁用态文字
  - 辅助说明（≥18px 时可满足大文本标准）
- 如果 Dark 模式下对比度不足，向亮色方向调整文字色

## 焦点指示器

所有可交互元素必须有可见的焦点指示：

```css
/* Input/Select 焦点 */
.kd-input.is-focus .kd-input-wrap {
  border-color: #0A6CFF;
}

/* 按钮焦点（键盘触发） */
.kd-button:focus-visible {
  outline: 2px solid #0A6CFF;
  outline-offset: 2px;
}
```

## 键盘可访问性

### 必须支持的键盘操作

| 组件 | Tab | Enter/Space | Esc | 方向键 |
|---|---|---|---|---|
| Button | 聚焦 | 触发点击 | - | - |
| Input | 聚焦 | - | - | - |
| Checkbox | 聚焦 | 切换选中 | - | - |
| Radio | 聚焦组 | 选中 | - | 组内切换 |
| Select | 聚焦 | 展开面板 | 收起面板 | 选项导航 |
| Modal | 聚焦内容 | 确认按钮 | 关闭弹窗 | - |
| Tabs | 聚焦 tab | 激活 tab | - | 切换 tab |

### 焦点陷阱

Modal 打开时，焦点必须限制在弹窗内部，Tab 循环不应逃出弹窗边界。

## 语义化 HTML

HTML 设计稿中使用语义化标签：

| 区域 | HTML 标签 |
|---|---|
| 页面主导航 | `<nav>` |
| 页面主内容 | `<main>` |
| 侧边栏 | `<aside>` |
| 内容分区 | `<section>` |
| 页脚 | `<footer>` |
| 操作按钮组 | `<div role="toolbar">` |
| 表格 | `<table>` + `<thead>` / `<tbody>` |

## ARIA 标签

在 HTML 设计稿中添加基础 ARIA 属性：

```html
<!-- 图标按钮必须有 aria-label -->
<button class="kd-button-icon" aria-label="关闭">
  <svg>...</svg>
</button>

<!-- 必填表单字段 -->
<input aria-required="true" aria-label="用户名" />

<!-- 错误状态 -->
<input aria-invalid="true" aria-describedby="email-error" />
<div id="email-error" role="alert">请输入有效的邮箱地址</div>

<!-- Modal -->
<div role="dialog" aria-modal="true" aria-labelledby="modal-title">
  <h2 id="modal-title">弹窗标题</h2>
</div>
```
