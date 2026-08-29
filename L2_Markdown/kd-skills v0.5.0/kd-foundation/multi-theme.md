# 多主题规范

> 所有值来自 @kdocs/kdesign-theme@2.4.8。

## 主题体系

KDesign 支持 Light/Dark 双主题和多品牌色切换。

## Light / Dark 主题

### 核心规则

- 所有设计稿**默认输出 Light 主题**
- Dark 主题不是简单的颜色反转 — 每种色相拥有独立的 Dark 色板
- Gray 色阶在 Dark 模式下**翻转**：gray-1 = 最暗(#333333)，gray-10 = 最亮(#F5F5F5)
- 语义 token 使用 `rgba(var(--kd-color-xxx-N), alpha)` 引用色板，切换主题时色板变化自动传导

### 基础色 Dark 对照（解析后最终色值）

| Token | Light | Dark | 说明 |
|---|---|---|---|
| text-primary | `#0D0D0D` | `#F5F5F5` | 主文字 |
| text-secondary | `#6B6B6B` | `#8A8A8A` | 次要文字 |
| text-tertiary | `rgba(13,13,13,0.46)` | `rgba(245,245,245,0.46)` | 辅助文字 |
| text-disable | `rgba(13,13,13,0.27)` | `rgba(245,245,245,0.27)` | 禁用文字 |
| icon-primary | `#333333` | `#C7C7C7` | 主图标 |
| icon-secondary | `#6B6B6B` | `#8A8A8A` | 次图标 |
| fill-base | `#FFFFFF` | `rgba(255,255,255,0.08)` | 基础填充 |
| fill-light | `#F5F5F5` | `#333333` | 轻填充 |
| fill-regular | `#F0F0F0` | `#383838` | 标准填充 |
| line-regular | `rgba(13,13,13,0.12)` | `rgba(245,245,245,0.14)` | 标准边框 |
| line-light | `rgba(13,13,13,0.06)` | `rgba(245,245,245,0.08)` | 轻边框 |
| state-hover | `rgba(13,13,13,0.06)` | `rgba(245,245,245,0.06)` | Hover 态 |
| state-pressed | `rgba(13,13,13,0.1)` | `rgba(245,245,245,0.1)` | Pressed 态 |

### 功能色 Dark 映射

功能色在 Dark 模式下保持**可辨识的色相**，色板整体重新映射：

| Token | Light | Dark |
|---|---|---|
| public-normal | `#1F69E0` | `#1E74FF` |
| public-hover | `#458BFA` | `#1863DA` |
| public-pressed | `#1E5FC7` | `#4289FF` |
| success-normal | `#418F1F` | `#459025` |
| error-normal | `#DD3332` | `#D63D3D` |
| warning-normal | `#E2651A` | `#D0601D` |
| highlight-normal | `#E99D00` | `#DAA339` |

> Dark 模式下 hover 和 pressed 方向**翻转**：hover 变暗，pressed 变亮（与 Light 相反）。

### 背景层级 Dark 映射（7 层）

| Token | Light | Dark | 语义 |
|---|---|---|---|
| background-top | `#FFFFFF` | `#2E2E2E` | 最上层面板 |
| background-middle | `#FFFFFF` | `#292929` | 中层面板 |
| background-bottom | `#FFFFFF` | `#242424` | 底层内容 |
| background-group | `rgba(250,250,250,1)` | `#1F1F1F` | 分组背景 |
| background-plate | `#F5F5F5` | `#191919` | 底板/工具栏 |
| background-base | `#F0F0F0` | `#121212` | 页面大背景 |
| background-frame | `#E6E6E6` | `#000000` | 最深层框架 |

### AI 色 Dark 映射

| Token | Light | Dark |
|---|---|---|
| ai-normal | `rgba(131,80,242,1)` | `rgba(136,87,242,1)` |
| ai-hover | `rgba(156,117,240,1)` | `rgba(113,61,225,1)` |
| ai-pressed | `rgba(104,42,239,1)` | `rgba(158,117,245,1)` |
| ai-light | `rgba(244,239,253,1)` | `rgba(58,48,85,1)` |

### 阴影 Dark 映射

| Token | Light | Dark |
|---|---|---|
| shadow-extra-small | `0 0 0 1px rgba(13,13,13,.1), 0 1px 0 rgba(13,13,13,.14)` | `0 0 0 1px rgba(255,255,255,.14)` |
| shadow-small | `0 1px 4px rgba(13,13,13,.1)` | `0 1px 4px rgba(0,0,0,.24)` |
| shadow-middle | `0 1px 4px rgba(13,13,13,.14)` | `0 1px 4px rgba(0,0,0,.32)` |
| shadow-large | `0 12px 32px rgba(13,13,13,.08)` | `0 12px 32px rgba(0,0,0,.32)` |
| shadow-extra-large | `0 32px 48px rgba(13,13,13,.2)` | `0 32px 48px rgba(0,0,0,.48)` |

> Dark 模式下阴影使用 `rgba(0,0,0,α)` 并加重透明度，确保在深色背景上可见。

## 多品牌色

KDesign 通过品牌色 Token 实现产品线差异化。默认主题下 brand = blue（品牌色与主操作色相同）：

| 产品线 | 品牌色系 | Normal (Light) | Normal (Dark) |
|---|---|---|---|
| WPS 文字/表单 | Blue | `#1F69E0` | `#1E74FF` |
| ET 表格 | Teal | `#109968` | `#009460` |
| WPP 演示 | Orange | `#E2651A` | `#D0601D` |
| PDF | Red | `#DD3332` | `#D63D3D` |

### 品牌色切换机制

在 HTML 设计稿中，通过覆盖 `--kd-color-brand-*` 的 RGB 三元组实现品牌色切换：

```css
/* 默认：WPS文字 Blue 系（brand = blue palette） */
:root {
  --kd-color-brand-6: 31, 105, 224;
  --kd-color-brand-7: 30, 95, 199;
}

/* ET 表格 Teal 系 */
[data-brand="et"] {
  --kd-color-brand-6: 16, 153, 104;
  --kd-color-brand-7: 5, 124, 82;
}
```

### 公共色 vs 品牌色

- `--kd-color-public-*`：全局操作色（按钮/链接/焦点），引用 blue palette
- `--kd-color-brand-*`：产品线专属色，引用 brand palette（默认 = blue）

大多数 UI 组件使用 `public` 色系，品牌色主要用于：
- 产品 Logo/品牌标识
- 产品线特有的强调元素
- 导航栏品牌色区域

## HTML 主题标注

```html
<!-- Light 主题（默认） -->
<html data-theme="light">

<!-- Dark 主题 -->
<html data-theme="dark">

<!-- 品牌色 -->
<html data-brand="wps">   <!-- WPS 文字 Blue -->
<html data-brand="et">    <!-- ET 表格 Teal -->
<html data-brand="wpp">   <!-- WPP 演示 Orange -->
<html data-brand="pdf">   <!-- PDF Red -->
```
