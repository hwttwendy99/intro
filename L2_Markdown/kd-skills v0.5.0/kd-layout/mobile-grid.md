# H5 / 小程序布局规范

## 设计基准

- 设计稿宽度：**375px**（iPhone 标准）
- 适配范围：320px - 428px
- 使用 `<meta name="viewport" content="width=device-width, initial-scale=1.0">`

## 页面骨架

### 标准页面结构

```
┌─────────────────────┐
│  状态栏（系统）       │
├─────────────────────┤
│  导航栏（44px）       │  ← 返回按钮 + 标题 + 操作
├─────────────────────┤
│                     │
│  内容区（flex:1）     │  ← 可滚动
│                     │
│                     │
├─────────────────────┤
│  底部 TabBar（50px） │  ← 可选
└─────────────────────┘
```

### HTML 结构

```html
<div class="kd-page" data-platform="h5" style="width: 375px; margin: 0 auto;">
  <!-- [NavBar: 44px] -->
  <header class="kd-navbar">
    <button class="kd-navbar-back" aria-label="返回">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"><polyline points="13,4 7,10 13,16"/></svg>
    </button>
    <span class="kd-navbar-title">页面标题</span>
    <div class="kd-navbar-actions"><!-- 操作按钮 --></div>
  </header>

  <!-- [Content: scrollable] -->
  <main class="kd-mobile-content">
    ...
  </main>

  <!-- [TabBar: 50px, optional] -->
  <nav class="kd-tabbar">
    <div class="kd-tabbar-item is-active">首页</div>
    <div class="kd-tabbar-item">消息</div>
    <div class="kd-tabbar-item">我的</div>
  </nav>
</div>
```

### CSS 骨架

```css
.kd-page[data-platform="h5"] {
  display: flex; flex-direction: column; min-height: 100vh;
  background: var(--kd-color-background-base);
}
.kd-navbar {
  height: 44px; flex-shrink: 0;
  display: flex; align-items: center; padding: 0 16px;
  background: #FFFFFF; border-bottom: 1px solid #F5F5F5;
}
.kd-navbar-back { width: 28px; height: 28px; display: flex; align-items: center; justify-content: center; background: none; border: none; cursor: pointer; }
.kd-navbar-title { flex: 1; text-align: center; font-size: 16px; font-weight: 600; color: #1A1A1A; }
.kd-mobile-content { flex: 1; overflow-y: auto; padding: 16px; }
.kd-tabbar {
  height: 50px; flex-shrink: 0;
  display: flex; align-items: center; justify-content: space-around;
  background: #FFFFFF; border-top: 1px solid #F5F5F5;
}
.kd-tabbar-item { font-size: 12px; color: #909090; text-align: center; }
.kd-tabbar-item.is-active { color: #0A6CFF; }
```

## 尺寸适配规则

移动端组件尺寸需要**显式放大**，不能直接缩放 Web 版。

| 元素 | Web 尺寸 | H5/小程序尺寸 | 原因 |
|---|---|---|---|
| 按钮高度 | 24-32px | 36-44px | 触控目标 |
| 输入框高度 | 28-32px | 36-44px | 触控目标 |
| 列表项行高 | 32-48px | 44-56px | 触控目标 |
| 图标尺寸 | 16px | 20-24px | 可视性 |
| 卡片内边距 | 16px | 16px | 保持一致 |
| 内容区 padding | 32px | 16px | 适配窄屏 |

## 触控目标

- 最小触控目标: **44x44px**（WCAG 建议）
- 按钮间距: 至少 8px
- 可点击列表项: 行高至少 44px

## 卡片网格

移动端卡片网格通常为 1-2 列：

```css
/* 单列（默认） */
.kd-mobile-card-grid { display: flex; flex-direction: column; gap: 12px; }

/* 双列（功能入口等） */
.kd-mobile-card-grid-2 {
  display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px;
}
```

## 导航差异

| Web 模式 | H5/小程序 替代 |
|---|---|
| 侧边栏 | 底部 TabBar（一级）+ 页面内导航（二级） |
| 面包屑 | 返回按钮（`<` 箭头）+ 页面标题 |
| Hover 展开子菜单 | 点击跳转下一级页面 |
| Modal 居中弹窗 | 底部 ActionSheet（半屏弹出） |
| Tooltip 悬停提示 | 点击展开说明文字或 Info 图标 |
| Dropdown 下拉 | Picker 滚轮选择 |

## 小程序特殊规则

- 导航栏由微信/支付宝客户端控制，设计稿中不包含系统导航栏
- 自定义导航栏需要在胶囊按钮下方，高度通常 44px
- 底部安全区域：预留 34px（iPhone X 及以上的 Home Indicator）

```css
.kd-page[data-platform="miniprogram"] .kd-tabbar {
  padding-bottom: 34px; /* safe area */
  height: calc(50px + 34px);
}
```
