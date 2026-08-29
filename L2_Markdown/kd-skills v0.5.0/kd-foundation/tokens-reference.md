# Token 完整速查

> 所有值来自 @kdocs/kdesign-theme@2.4.8，与 `tokens.css` / `tokens.json` 同源。
> 色板使用 RGB 三元组架构，语义色通过 `rgba(var(--kd-color-xxx-N), alpha)` 引用色板变量。
> 下方表格中 Light / Dark 值为解析后的最终色值。

## 颜色

### 主操作色

| 变量 | Light | Dark | 用途 |
|---|---|---|---|
| `--kd-color-public-normal` | `#1F69E0` | `#1E74FF` | Primary 按钮/链接/焦点边框 |
| `--kd-color-public-hover` | `#458BFA` | `#1863DA` | 主操作 Hover |
| `--kd-color-public-pressed` | `#1E5FC7` | `#4289FF` | 主操作 Pressed |
| `--kd-color-public-light` | `#EDF4FF` | `#28354A` | 主操作浅背景 |

### 品牌色（产品线专属，默认 = WPS Blue = 主操作色）

| 变量 | Light | Dark | 用途 |
|---|---|---|---|
| `--kd-color-brand-normal` | `#1F69E0` | `#1E74FF` | 品牌主色 |
| `--kd-color-brand-hover` | `#458BFA` | `#1863DA` | 品牌 Hover |
| `--kd-color-brand-pressed` | `#1E5FC7` | `#4289FF` | 品牌 Pressed |
| `--kd-color-brand-light` | `#EDF4FF` | `#28354A` | 品牌浅背景 |

### 功能色

| 变量 | Light | Dark | 用途 |
|---|---|---|---|
| `--kd-color-info-normal` | `#1F69E0` | `#1E74FF` | 信息提示 |
| `--kd-color-info-hover` | `#458BFA` | `#1863DA` | 信息 Hover |
| `--kd-color-info-pressed` | `#1E5FC7` | `#4289FF` | 信息 Pressed |
| `--kd-color-info-light` | `#EDF4FF` | `#28354A` | 信息背景 |
| `--kd-color-success-normal` | `#418F1F` | `#459025` | 成功状态 |
| `--kd-color-success-hover` | `#65AB48` | `#3E7924` | 成功 Hover |
| `--kd-color-success-pressed` | `#347317` | `#5CAB39` | 成功 Pressed |
| `--kd-color-success-light` | `#E9F6E3` | `#2D3928` | 成功背景 |
| `--kd-color-error-normal` | `#DD3332` | `#D63D3D` | 错误状态 |
| `--kd-color-error-hover` | `#F15C5B` | `#B83636` | 错误 Hover |
| `--kd-color-error-pressed` | `#BB2726` | `#ED4B4B` | 错误 Pressed |
| `--kd-color-error-light` | `#FEF1F1` | `#4A2D2D` | 错误背景 |
| `--kd-color-warning-normal` | `#E2651A` | `#D0601D` | 警告状态 |
| `--kd-color-warning-hover` | `#FB7E33` | `#B55524` | 警告 Hover |
| `--kd-color-warning-pressed` | `#C25010` | `#F56D1C` | 警告 Pressed |
| `--kd-color-warning-light` | `#FEF1EA` | `#42312D` | 警告背景 |
| `--kd-color-highlight-normal` | `#E99D00` | `#DAA339` | 高亮/警示 |
| `--kd-color-highlight-hover` | `#F8B938` | `#B78A33` | 高亮 Hover |
| `--kd-color-highlight-pressed` | `#C48200` | `#F7BB43` | 高亮 Pressed |
| `--kd-color-highlight-light` | `#FCF2E0` | `#3C3423` | 高亮背景 |

### AI 色

| 变量 | Light | Dark | 用途 |
|---|---|---|---|
| `--kd-color-ai-normal` | `rgba(131,80,242,1)` | `rgba(136,87,242,1)` | AI 功能主色 |
| `--kd-color-ai-hover` | `rgba(156,117,240,1)` | `rgba(113,61,225,1)` | AI Hover |
| `--kd-color-ai-pressed` | `rgba(104,42,239,1)` | `rgba(158,117,245,1)` | AI Pressed |
| `--kd-color-ai-light` | `rgba(244,239,253,1)` | `rgba(58,48,85,1)` | AI 背景 |

### 文字色

| 变量 | Light | Dark | 用途 |
|---|---|---|---|
| `--kd-color-text-primary` | `#0D0D0D` | `#F5F5F5` | 主要文字 |
| `--kd-color-text-secondary` | `#6B6B6B` | `#8A8A8A` | 次要文字 |
| `--kd-color-text-tertiary` | `rgba(13,13,13,0.46)` | `rgba(245,245,245,0.46)` | 辅助文字/Placeholder |
| `--kd-color-text-public` | `#1E5FC7` | `#4289FF` | 链接/激活文字 |
| `--kd-color-text-white` | `#FFFFFF` | `#FFFFFF` | 白色文字 |
| `--kd-color-text-brand` | `#1E5FC7` | `#4289FF` | 品牌文字 |
| `--kd-color-text-ai` | `rgba(104,42,239,1)` | `rgba(158,117,245,1)` | AI 文字 |
| `--kd-color-text-success` | `#347317` | `#5CAB39` | 成功文字 |
| `--kd-color-text-info` | `#1E5FC7` | `#4289FF` | 信息文字 |
| `--kd-color-text-error` | `#BB2726` | `#ED4B4B` | 错误文字 |
| `--kd-color-text-warning` | `#C25010` | `#F56D1C` | 警告文字 |
| `--kd-color-text-highlight` | `#C48200` | `#F7BB43` | 高亮文字 |
| `--kd-color-text-disable` | `rgba(13,13,13,0.27)` | `rgba(245,245,245,0.27)` | 禁用文字 |

### 图标色

| 变量 | Light | Dark | 用途 |
|---|---|---|---|
| `--kd-color-icon-primary` | `#333333` | `#C7C7C7` | 主要图标 |
| `--kd-color-icon-secondary` | `#6B6B6B` | `#8A8A8A` | 次要图标 |
| `--kd-color-icon-tertiary` | `#C2C2C2` | `#575757` | 三级图标 |
| `--kd-color-icon-quaternary` | `#E6E6E6` | `#404040` | 四级图标 |
| `--kd-color-icon-public` | `#1E5FC7` | `#4289FF` | 操作图标 |
| `--kd-color-icon-white` | `#FFFFFF` | `#FFFFFF` | 白色图标 |
| `--kd-color-icon-brand` | `#1E5FC7` | `#4289FF` | 品牌图标 |
| `--kd-color-icon-ai` | `rgba(104,42,239,1)` | `rgba(158,117,245,1)` | AI 图标 |
| `--kd-color-icon-success` | `#418F1F` | `#459025` | 成功图标 |
| `--kd-color-icon-info` | `#1F69E0` | `#1E74FF` | 信息图标 |
| `--kd-color-icon-error` | `#DD3332` | `#D63D3D` | 错误图标 |
| `--kd-color-icon-warning` | `#E2651A` | `#D0601D` | 警告图标 |
| `--kd-color-icon-highlight` | `#E99D00` | `#DAA339` | 高亮图标 |

### 彩色图标

| 变量 | Light | Dark | 用途 |
|---|---|---|---|
| `--kd-color-icon-blue-primary` | `rgba(31,105,224,1)` | `rgba(85,143,236,1)` | 文档图标主色 |
| `--kd-color-icon-blue-quaternary` | `rgba(214,230,255,1)` | `rgba(36,71,127,1)` | 文档图标底色 |
| `--kd-color-icon-green-primary` | `rgba(32,128,78,1)` | `rgba(48,171,128,1)` | 表格图标主色 |
| `--kd-color-icon-green-quaternary` | `rgba(206,243,228,1)` | `rgba(28,84,64,1)` | 表格图标底色 |
| `--kd-color-icon-orange-primary` | `rgba(225,105,28,1)` | `rgba(224,128,66,1)` | 演示图标主色 |
| `--kd-color-icon-orange-quaternary` | `rgba(253,224,206,1)` | `rgba(119,67,34,1)` | 演示图标底色 |
| `--kd-color-icon-red-primary` | `rgba(216,54,66,1)` | `rgba(231,85,96,1)` | PDF 图标主色 |
| `--kd-color-icon-red-quaternary` | `rgba(253,222,224,1)` | `rgba(122,41,47,1)` | PDF 图标底色 |

### 边框/线条色（半透明叠加，自动适配主题）

| 变量 | Light | Dark | 用途 |
|---|---|---|---|
| `--kd-color-line-light` | `rgba(13,13,13,0.06)` | `rgba(245,245,245,0.08)` | 表格行/列表分割线 |
| `--kd-color-line-regular` | `rgba(13,13,13,0.12)` | `rgba(245,245,245,0.14)` | Modal/Divider/Input 边框 |
| `--kd-color-line-medium` | `rgba(13,13,13,0.24)` | `rgba(245,245,245,0.24)` | Input hover/Radio 边框 |
| `--kd-color-line-heavy` | `rgba(13,13,13,0.48)` | `rgba(245,245,245,0.48)` | Checkbox 边框 |
| `--kd-color-line-public` | `#1E5FC7` | `#4289FF` | 焦点边框 |
| `--kd-color-line-white` | `#FFFFFF` | `#FFFFFF` | 白色边框 |
| `--kd-color-line-brand` | `#1E5FC7` | `#4289FF` | 品牌边框 |
| `--kd-color-line-ai` | `rgba(104,42,239,1)` | `rgba(158,117,245,1)` | AI 边框 |
| `--kd-color-line-success` | `#418F1F` | `#459025` | 成功边框 |
| `--kd-color-line-info` | `#1F69E0` | `#1E74FF` | 信息边框 |
| `--kd-color-line-error` | `#DD3332` | `#D63D3D` | 错误边框 |
| `--kd-color-line-warning` | `#E2651A` | `#D0601D` | 警告边框 |
| `--kd-color-line-highlight` | `#E99D00` | `#DAA339` | 高亮边框 |

> **设计原理**：线条色使用半透明叠加（`rgba(gray-10, α)`），Dark 模式下 gray-10 从 `#0D0D0D` 变为 `#F5F5F5`，线条自动变为浅色透明叠加。

### 填充色

| 变量 | Light | Dark | 用途 |
|---|---|---|---|
| `--kd-color-fill-extra-heavy` | `#C2C2C2` | `#575757` | 最重填充 |
| `--kd-color-fill-heavy` | `#DBDBDB` | `#474747` | 重填充 |
| `--kd-color-fill-medium` | `#E6E6E6` | `#404040` | 中等填充 |
| `--kd-color-fill-regular` | `#F0F0F0` | `#383838` | 标准填充 |
| `--kd-color-fill-light` | `#F5F5F5` | `#333333` | 轻填充/禁用背景 |
| `--kd-color-fill-base` | `#FFFFFF` | `rgba(255,255,255,0.08)` | 基础白色填充 |

### 填充色（Alpha 叠加）

| 变量 | Light | Dark | 用途 |
|---|---|---|---|
| `--kd-color-fill-alpha-extra-heavy` | `rgba(13,13,13,0.4)` | `rgba(245,245,245,0.4)` | 最重 alpha 填充 |
| `--kd-color-fill-alpha-heavy` | `rgba(13,13,13,0.16)` | `rgba(245,245,245,0.18)` | 重 alpha 填充 |
| `--kd-color-fill-alpha-medium` | `rgba(13,13,13,0.12)` | `rgba(245,245,245,0.14)` | 中 alpha 填充 |
| `--kd-color-fill-alpha-regular` | `rgba(13,13,13,0.08)` | `rgba(245,245,245,0.1)` | 标准 alpha 填充 |
| `--kd-color-fill-alpha-light` | `rgba(13,13,13,0.04)` | `rgba(245,245,245,0.06)` | 轻 alpha 填充 |

### 状态层（半透明叠加）

| 变量 | Light | Dark | 用途 |
|---|---|---|---|
| `--kd-color-state-normal` | `rgba(13,13,13,0)` | `rgba(245,245,245,0)` | 常态（透明） |
| `--kd-color-state-hover` | `rgba(13,13,13,0.06)` | `rgba(245,245,245,0.06)` | 通用 Hover |
| `--kd-color-state-pressed` | `rgba(13,13,13,0.1)` | `rgba(245,245,245,0.1)` | 通用 Pressed |
| `--kd-color-state-pressed-public` | `rgba(31,105,224,0.1)` | `rgba(30,116,255,0.16)` | 蓝色 Pressed |
| `--kd-color-state-pressed-brand` | `rgba(31,105,224,0.1)` | `rgba(30,116,255,0.16)` | 品牌 Pressed |
| `--kd-color-state-pressed-ai` | `rgba(131,80,242,0.1)` | `rgba(136,87,242,0.16)` | AI Pressed |

### 背景层级（7 层结构）

| 变量 | Light | Dark | 用途 |
|---|---|---|---|
| `--kd-color-background-top` | `#FFFFFF` | `#2E2E2E` | 最上层白面板 |
| `--kd-color-background-middle` | `#FFFFFF` | `#292929` | 中层面板 |
| `--kd-color-background-bottom` | `#FFFFFF` | `#242424` | 底层内容 |
| `--kd-color-background-group` | `rgba(250,250,250,1)` | `#1F1F1F` | 分组背景 |
| `--kd-color-background-plate` | `#F5F5F5` | `#191919` | 底板/工具栏 |
| `--kd-color-background-base` | `#F0F0F0` | `#121212` | 页面大背景 |
| `--kd-color-background-frame` | `#E6E6E6` | `#000000` | 最深层框架 |
| `--kd-color-background-ai` | `rgba(246,249,255,1)` | `rgba(31,33,36,1)` | AI 场景背景 |

### 遮罩

| 变量 | Light | Dark | 用途 |
|---|---|---|---|
| `--kd-color-mask-regular` | `rgba(13,13,13,0.5)` | `rgba(51,51,51,0.6)` | 标准遮罩 |
| `--kd-color-mask-heavy` | `rgba(13,13,13,0.8)` | `rgba(51,51,51,0.8)` | 重遮罩 |

### 反馈 / 反色

| 变量 | Light | Dark | 用途 |
|---|---|---|---|
| `--kd-color-feedback-regular` | `#575757` | `#999999` | 反馈色 |
| `--kd-color-inverse-base` | `#FFFFFF` | `#000000` | 反色基准 |

### 会员色

| 变量 | Light | Dark | 用途 |
|---|---|---|---|
| `--kd-color-member-primary-normal` | `rgba(50,35,14,1)` | `rgba(250,198,125,1)` | 会员主色 |
| `--kd-color-member-primary-hover` | `rgba(77,55,22,1)` | `rgba(221,170,95,1)` | 会员 Hover |
| `--kd-color-member-primary-pressed` | `rgba(36,25,10,1)` | `rgba(251,212,156,1)` | 会员 Pressed |
| `--kd-color-text-member-primary` | `rgba(250,198,125,1)` | `rgba(52,35,6,1)` | 会员文字 |
| `--kd-color-icon-member-primary` | `rgba(250,198,125,1)` | `rgba(52,35,6,1)` | 会员图标 |

## 阴影

| 变量 | Light | Dark | 用途 |
|---|---|---|---|
| `--kd-box-shadow-extra-small` | `0 0 0 1px rgba(13,13,13,.1), 0 1px 0 rgba(13,13,13,.14)` | `0 0 0 1px rgba(255,255,255,.14)` | 最轻浮起 |
| `--kd-box-shadow-small` | `0 1px 4px rgba(13,13,13,.1)` | `0 1px 4px rgba(0,0,0,.24)` | 轻微浮起 |
| `--kd-box-shadow-middle` | `0 1px 4px rgba(13,13,13,.14)` | `0 1px 4px rgba(0,0,0,.32)` | 中等浮起 |
| `--kd-box-shadow-large` | `0 12px 32px rgba(13,13,13,.08)` | `0 12px 32px rgba(0,0,0,.32)` | Dropdown/Modal |
| `--kd-box-shadow-extra-large` | `0 32px 48px rgba(13,13,13,.2)` | `0 32px 48px rgba(0,0,0,.48)` | 最大浮起 |
| `--kd-box-shadow-glow` | `0 0 4px rgba(31,105,224,1)` | `0 0 4px rgba(30,116,255,1)` | 焦点光晕 |

## 字号

| 变量 | 值 | 用途 |
|---|---|---|
| `--kd-font-size-extra-small` | `10px` | 辅助信息、版权 |
| `--kd-font-size-small` | `12px` | 次要文本、标签 |
| `--kd-font-size-sub-base` | `13px` | **大多数组件默认字号** |
| `--kd-font-size-base` | `14px` | 正文基准、表单 Label、Table |
| `--kd-font-size-middle` | `16px` | 重要正文、Modal 标题 |
| `--kd-font-size-large` | `18px` | 小标题 |
| `--kd-font-size-extra-large` | `20px` | 中标题 |
| `--kd-font-size-xx-large` | `24px` | 大标题 |
| `--kd-font-size-xxx-large` | `28px` | 特大标题 |

> **注意**：大多数组件（Button/Input/Tag/Checkbox/Radio 等）的默认字号是 **13px**（`sub-base`），**不是 14px**。
> **旧名兼容**：`--kd-font-size-xs` = extra-small, `--kd-font-size-xl` = extra-large, `--kd-font-size-xxl` = xx-large

## 字重

| 变量 | 值 | 用途 |
|---|---|---|
| `--kd-font-weight-regular` | `400` | 正文、常规文本 |
| `--kd-font-weight-bold` | `600` | 标题、强调文本 |

## 行高

| Token | 值 | 搭配字号 |
|---|---|---|
| `--kd-font-line-height-extra-small` | `18px` (calc: 10+8) | 10px |
| `--kd-font-line-height-small` | `20px` (calc: 12+8) | 12px |
| `--kd-font-line-height-base` | `22px` (calc: 14+8) | 13-14px |
| `--kd-font-line-height-middle` | `24px` (calc: 16+8) | 16px |
| `--kd-font-line-height-large` | `30px` (calc: 18+12) | 18px |
| `--kd-font-line-height-extra-large` | `32px` (calc: 20+12) | 20px |
| `--kd-font-line-height-xx-large` | `36px` (calc: 24+12) | 24px |
| `--kd-font-line-height-xxx-large` | `40px` (calc: 28+12) | 28px |
| `--kd-font-line-height-reset` | `1` | 图标对齐 |
| `--kd-font-line-height-text` | `1.625` | 多行文本 |

> **旧名兼容**：`--kd-line-height-xs`/`small`/`base`/`middle`/`large`/`xl`/`xxl` 仍可使用。

## 圆角

| 变量 | 值 | 用途 |
|---|---|---|
| `--kd-border-radius-none` | `0` | 无圆角 |
| `--kd-border-radius-extra-small` | `2px` | 小型控件 |
| `--kd-border-radius-small` | `4px` | 常规按钮 |
| `--kd-border-radius-middle` | `6px` | Input、Button 默认 |
| `--kd-border-radius-large` | `8px` | 弹出菜单 |
| `--kd-border-radius-extra-large` | `12px` | 对话框、大面板 |
| `--kd-border-radius-circle` | `999px` | 胶囊/徽标 |

## 图标描边

| 变量 | 值 | 用途 |
|---|---|---|
| `--kd-stroke-width-icon-regular` | `1` | 常规图标描边 |
| `--kd-stroke-width-icon-bold` | `1.2` | 粗图标描边 |

## 过渡动画

| 变量 | 值 | 用途 |
|---|---|---|
| `--kd-all-transition` | `all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)` | 通用过渡 |
| `--kd-fade-transition` | `opacity 300ms cubic-bezier(0.23, 1, 0.32, 1)` | 渐隐过渡 |
| `--kd-fade-linear-transition` | `opacity 200ms linear` | 线性渐隐 |
| `--kd-border-transition-base` | `border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1)` | 边框过渡 |
| `--kd-color-transition-base` | `color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1)` | 颜色过渡 |

> **旧名兼容**：`--kd-time-fast` (120ms), `--kd-time-normal` (240ms), `--kd-easing-ease` 仍可使用。

## Z-Index

| 变量 | 值 | 用途 |
|---|---|---|
| `--kd-z-index-invisible` | `-100` | 不可见 |
| `--kd-z-index-default` | `1` | 默认 |
| `--kd-z-index-float` | `10` | 浮动 |
| `--kd-z-index-mask` | `999` | 遮罩 |
| `--kd-z-index-dialog` | `1000` | 对话框 |
| `--kd-z-index-reminder` | `1020` | 提醒 |
| `--kd-z-index-popover` | `1030` | 弹出 |
| `--kd-z-index-popupmenu` | `1040` | 弹出菜单 |
| `--kd-z-index-tip` | `1050` | 提示 |

## 透明度 / 禁用

| 变量 | Light | Dark | 用途 |
|---|---|---|---|
| `--kd-opacity-disabled` | `0.4` | `0.4` | 禁用状态透明度 |
| `--kd-opacity-icon` | `1` | `1` | 图标默认透明度 |
| `--kd-opacity-icon-hover` | `0.48` | `0.48` | 图标 Hover 透明度 |
| `--kd-opacity-icon-active` | `0.72` | `0.72` | 图标 Active 透明度 |
| `--kd-opacity-icon-mode` | `1` | `0.85` | 图标模式透明度 |
| `--kd-color-brand-disable` | `rgba(31,105,224,0.4)` | `rgba(30,116,255,0.4)` | 品牌禁用色 |
| `--kd-color-text-disable` | `rgba(13,13,13,0.27)` | `rgba(245,245,245,0.27)` | 禁用文字 |

## 字体家族

```css
/* 简中 */
--kd-font-family: "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", "Noto Sans SC", "Noto Sans CJK SC", "sans-serif";

/* 繁中（台湾） */
--kd-font-family-tw: "Helvetica Neue", "Helvetica", "Segoe UI", "Roboto", "Arial", "PingFang TC", "Microsoft JhengHei", "微軟正黑體", "Noto Sans TC", "Noto Sans CJK TC", "sans-serif";

/* 繁中（香港） */
--kd-font-family-hk: "Helvetica Neue", "Helvetica", "Segoe UI", "Roboto", "Arial", "PingFang HK", "Microsoft JhengHei", "微軟正黑體", "Noto Sans HK", "Noto Sans CJK HK", "sans-serif";

/* 日文 */
--kd-font-family-ja: "Helvetica Neue", "Helvetica", "Segoe UI", "Roboto", "Arial", "Noto Sans JP", "Noto Sans CJK JP", "Hiragino Sans", "Hiragino Kaku Gothic ProN", "BIZ UDPGothic", "Meiryo", "MS PGothic";
```
