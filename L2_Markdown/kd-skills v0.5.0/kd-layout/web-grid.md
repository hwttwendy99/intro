# Web 端布局规范

## Grid / Flex 防溢出规则（硬性，所有布局必读）

Grid 和 Flex 里有一个**最常见的 bug**：最后一列/行内容溢出容器右侧。原因**不是** `1fr` 不均等，而是：

### min-content 陷阱

CSS Grid / Flex 的直接子项默认 `min-width: auto`，意思是"**至少要容得下最小不可分割的内容**"：

| 元素类型 | 默认 min-content 宽度 |
|---|---|
| `<input>` / `<textarea>` / `<select>` | 浏览器给的 intrinsic 宽（通常 ~148px） |
| 长单词/URL/代码 | 单词完整宽度 |
| 数字/金额 | 最长一串的宽度 |
| `<img>` | 原图宽度 |

当 `repeat(N, 1fr)` 里某些列含上述元素，**每列 min-track 会被强行撑到 148px+**。多列合计超过容器时，最后一列直接溢出可见区域。

### 正确写法（强制）

**Grid**：
```css
.kd-row-4col { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; }
.kd-row-4col > * { min-width: 0; }  /* ← 关键，强制覆盖 min-width: auto */
```

**Flex**：
```css
.kd-flex-row { display: flex; gap: 8px; }
.kd-flex-row > * { min-width: 0; flex: 1 1 0; }  /* ← 允许收缩到 0 */
```

**嵌套（Input 在 Flex 内再在 Grid 内）**：
- 外层 grid item 的 `min-width: 0`
- 中层 flex container 也允许子项收缩
- 最内层 `<input>` 写 `width: 100%`（不是固定 px）

### 反模式（凡见必改）

- ❌ `grid-template-columns: 148px 148px 148px 148px` 固定列宽——超容器直接溢出
- ❌ grid item 缺 `min-width: 0` 还含 `<input>`——最后一列溢出
- ❌ flex 子项缺 `min-width: 0` 还含长文本——末尾不换行直接顶破
- ❌ `white-space: nowrap` + 无 `overflow` 处理——单行强撑宽
- ❌ `<img>` 无 `max-width: 100%`——原图尺寸撑破父容器

### 验算公式（写多列前先算）

```
每列最小宽 × 列数 + gap × (列数-1) ≤ 容器内可用宽
```

若不成立 → 减列数 / 改成响应式换行 / 改 size / 整体加 scroll。**禁止**靠"1fr 自动收缩"祈祷——当内容是 `<input>` 时它不会收缩。

---

## 设计基准

- 设计稿宽度：**1440px**
- 最小支持宽度：**1280px**
- 内容区最大宽度：由页面类型决定（见下方）

## 页面骨架

### 侧边栏 + 内容区（主布局）

```
┌─────────────────────────────────────────────────┐
│  全局导航栏（高 40px，全宽）                      │
├──────────┬──────────────────────────────────────┤
│ 侧边栏   │  页面顶栏（面包屑 + 操作按钮，40px）  │
│ 240-332px│──────────────────────────────────────│
│          │  内容区                              │
│ 固定宽度  │  max-width 由内容决定                │
│          │  padding: 32px（上）                  │
│          │                                      │
├──────────┴──────────────────────────────────────┤
```

### HTML 结构

```html
<div class="kd-app">
  <!-- [GlobalNav: 40px] -->
  <nav class="kd-global-nav">...</nav>

  <div class="kd-app-body">
    <!-- [Sidebar: 240-332px] -->
    <aside class="kd-sidebar">...</aside>

    <div class="kd-main-area">
      <!-- [PageHeader: breadcrumb + actions, 40px] -->
      <header class="kd-page-header">...</header>

      <!-- [Content] -->
      <main class="kd-content">
        <section class="kd-info-group">...</section>
        <section class="kd-info-group">...</section>
      </main>
    </div>
  </div>
</div>
```

### CSS 骨架

```css
.kd-app { display: flex; flex-direction: column; min-height: 100vh; background: var(--kd-color-background-base); }
.kd-global-nav { height: 40px; flex-shrink: 0; background: var(--kd-color-fill-base); border-bottom: 1px solid #F5F5F5; }
.kd-app-body { display: flex; flex: 1; overflow: hidden; }
.kd-sidebar { width: 280px; flex-shrink: 0; overflow-y: auto; background: var(--kd-color-fill-base); border-right: 1px solid #F5F5F5; }
.kd-main-area { flex: 1; display: flex; flex-direction: column; overflow-y: auto; }
.kd-page-header { height: 40px; flex-shrink: 0; display: flex; align-items: center; padding: 0 16px; }
.kd-content { flex: 1; padding: 32px; }
```

## 侧边栏规格

| 属性 | 值 | 说明 |
|---|---|---|
| 宽度 | 240-332px | 根据内容量选择 |
| 推荐宽度 | 280px | 适合大多数场景 |
| 内边距 | 16px（左右） | 侧边栏内容区 |
| 分割线 | `border-right: 1px solid #F5F5F5` | 与内容区分隔 |
| 底部工具栏 | 52px | 设置/分享/更多按钮 |

## 内容区宽度

| 页面类型 | 内容区 max-width | 居中方式 |
|---|---|---|
| 概览/仪表盘 | 不限（撑满） | 左对齐 |
| 列表/表格 | 不限（撑满） | 左对齐 |
| 详情/编辑 | 1000px | margin: 0 auto |
| 表单 | 720px | margin: 0 auto |
| 阅读型 | 720px | margin: 0 auto |

## 卡片网格

KDesign 使用 Flex 或 CSS Grid 实现等宽卡片网格：

### 4 列等宽（概览卡片/功能入口）

```css
.kd-card-grid-4 {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}
```

### 3 列等宽

```css
.kd-card-grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}
```

### 2 列等宽（表单并排）

```css
.kd-card-grid-2 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}
```

### 自适应列数

```css
.kd-card-grid-auto {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 12px;
}
```

## 响应式断点

| 断点名 | 宽度 | 布局变化 |
|---|---|---|
| Desktop Large | ≥1440px | 完整布局，设计基准 |
| Desktop | 1280-1439px | 侧边栏收窄至 240px |
| Tablet | 1024-1279px | 侧边栏可折叠，内容区撑满 |
| Mobile | <1024px | 不在 Web 设计范围（使用 H5 设计稿） |

### 断点 CSS

```css
@media (max-width: 1439px) {
  .kd-sidebar { width: 240px; }
}

@media (max-width: 1279px) {
  .kd-sidebar { width: 0; overflow: hidden; }
  .kd-sidebar.is-open { width: 280px; position: absolute; z-index: 100; }
  .kd-card-grid-4 { grid-template-columns: repeat(3, 1fr); }
}
```

## 全局导航栏

- 高度: 40px
- 背景: `#FFFFFF`
- 底部边框: `1px solid #F5F5F5`
- 内容: Logo（左） + 全局导航链接（中） + 用户头像（右）
- padding: `0 16px`

## 页面顶栏

- 高度: 40px
- 内容: 面包屑（左） + 操作按钮组（右）
- padding: `0 12px`
- 按钮使用 Large (32px) 或 Medium (28px) 尺寸
