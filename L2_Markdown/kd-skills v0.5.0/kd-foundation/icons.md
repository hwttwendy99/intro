# 图标使用规范

## 图标库：KDicon-pro

KDesign 统一使用 KDicon-pro 图标库。在 HTML 设计稿中，图标使用内联 SVG 实现。

## 图标规格

| 属性 | 标准值 | 说明 |
|---|---|---|
| 尺寸 | 16x16px | 标准图标尺寸，适配 13-14px 文字 |
| viewBox | `0 0 16 16` | 标准视口 |
| stroke-width | `1` | 细线风格（KDesign 统一） |
| stroke-linecap | `round` | 圆角端点 |
| stroke-linejoin | `round` | 圆角连接 |
| fill | `none` | 线性图标不填充 |

## 图标颜色规则

| 场景 | 颜色变量 | 值 |
|---|---|---|
| 默认图标 | `--kd-color-icon-primary` | gray-9 (`#262626`) |
| 次要图标 | `--kd-color-icon-secondary` | gray-7 (`#555555`) |
| 辅助图标（Placeholder/箭头） | `--kd-color-icon-tertiary` | gray-5 (`#909090`) |
| 禁用图标 | `--kd-color-icon-quaternary` | gray-3 (`#D4D4D4`) |
| 白色图标（深色底上） | `--kd-color-icon-white` | `#FFFFFF` |
| 链接/激活态图标 | `--kd-color-icon-public` | `#0A6CFF` |
| 成功图标 | `--kd-color-icon-success` | green-6 (`#418F1F`) |
| 错误图标 | `--kd-color-icon-error` | red-6 (`#E12F3C`) |
| 警告图标 | `--kd-color-icon-warning` | orange-6 (`#E2651A`) |
| AI 图标 | `--kd-color-icon-ai` | `rgba(104,42,239,1)` |

## 图标与文字对齐

```css
/* 图标与文字内联对齐 */
.icon-text {
  display: inline-flex;
  align-items: center;
  gap: 4px; /* 图标与文字间距 */
}

/* 图标在按钮内 */
.kd-button-prefix-icon { margin-right: 4px; font-size: 16px; }
.kd-button-suffix-icon { margin-left: 4px; font-size: 16px; }

/* 图标在菜单项内 */
.kd-menu-item-icon { position: relative; top: 4px; margin-right: 6px; }

/* 图标在导航项内 */
.kd-navigation-item__icon { margin-right: 4px; }
```

## HTML 内联 SVG 兜底模板

仅当 KDicon-pro 索引中确认无对应图标时，允许使用此模板手写内联 SVG：

```html
<svg width="16" height="16" viewBox="0 0 16 16"
     fill="none" stroke="currentColor"
     stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
  <!-- path data here -->
</svg>
```

## 图标检索与获取（强制流程）

当页面需要图标时，**必须**按以下流程获取，**禁止**凭记忆或推理手写 SVG path data。

### 两级索引检索

1. **第一级**：grep [`icons/kdicon-pro-quick-index.md`](icons/kdicon-pro-quick-index.md)（184 条高频图标，覆盖约 90% 场景）
2. **第二级**（未命中时）：grep [`icons/kdicon-pro-full-index.md`](icons/kdicon-pro-full-index.md)（完整 9438 条母体索引）

索引表格式：`| 图标英文名 | 图标描述 desc（含中文语义别名） | 图标尺寸 |`。desc 字段包含丰富的中文/英文别名，可用中文关键词（如"最近""收藏""删除"）直接 grep 命中。

### 按输出目标获取

确定图标英文名后，按当前输出目标执行：

| 输出目标 | 获取方式 |
|---------|---------|
| **html** | `curl https://global-volc.wpscdn.cn/icons/pro/{英文名}.svg` 获取完整 SVG 源码 → 内联到 HTML |
| **react** | 英文名 snake_case → PascalCase → `import { PascalName } from '@kdocs/kdesign-icons-react'` |
| **vue3** | 英文名 → PascalCase → 加 `KdIcon` 前缀 → Resolver 自动从 `@kdocs/kdesign-icons-vue3-pro` 导入 |

React / Vue3 目标：确定英文名后，先 curl CDN 获取 SVG 查看一次，确认图形语义匹配后再写 import。

## 命名转换规则

KDicon-pro 使用 snake_case 英文名，React 和 Vue3 组件需要转换：

| 步骤 | 规则 | 示例 |
|------|------|------|
| 1. 原始英文名 | snake_case | `knowledge_base` |
| 2. → PascalCase | 每段首字母大写，去下划线 | `KnowledgeBase` |
| 3. → Vue3 前缀 | 加 `KdIcon` | `KdIconKnowledgeBase` |

更多示例：

| 英文名 | React import | Vue3 标签 |
|--------|-------------|-----------|
| `clock` | `import { Clock } from '@kdocs/kdesign-icons-react'` | `<KdIconClock />` |
| `arrow_down_s` | `import { ArrowDownS } from '...'` | `<KdIconArrowDownS />` |
| `ai_hub` | `import { AiHub } from '...'` | `<KdIconAiHub />` |
| `trash_can` | `import { TrashCan } from '...'` | `<KdIconTrashCan />` |

## 优先级规则

1. **必须先检索 KDicon-pro 索引**（quick-index → full-index）
2. 确定英文名后按输出目标获取（HTML: curl SVG 内联, React: import 组件, Vue3: import 组件）
3. 仅当索引中确认无对应图标时，允许用上方兜底模板手写内联 SVG
4. **禁止使用 emoji 作为功能图标**（装饰性 emoji 如 👋 可在标题区使用）
5. **禁止使用彩色/多色填充图标**，所有图标保持单色线性风格
6. **禁止使用外部图标库**（如 Font Awesome、Material Icons）
