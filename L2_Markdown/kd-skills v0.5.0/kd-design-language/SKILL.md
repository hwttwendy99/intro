---
name: kd-design-language
description: KDesign 设计语言：产品气质、布局思维、组件选型判断、跨端一致性。所有设计决策、页面布局、组件选型任务必加载。Keywords：design decision, layout thinking, component choice, cross-platform.
version: 1.0.0
---

# KDesign 设计语言

> 本 Skill 定义 KDesign 产品的设计决策规则。Token 告诉 AI「用什么」，本文档告诉 AI「为什么」和「怎么选」。

## 核心气质：克制的效率感

用最少的视觉手段达到最清晰的信息层级。KDesign 产品服务于企业办公场景，用户需要高效完成任务，而非欣赏界面。

**一句话判断标准**：如果一个视觉元素被移除后信息传达不受影响，那它就不应该存在。

---

## 快速判断规则

### 色彩

- 页面内容区只使用灰度色 + 品牌蓝（`#0A6CFF`）
- 功能色（红/橙/绿）仅用于语义状态（错误/警告/成功），不用于装饰
- 禁止在同一视图中使用超过 2 种饱和色

### 层级

- 靠间距和分组建立信息层级，而非颜色和装饰
- 同一页面内组件模式保持高度一致
- 信息组之间保持清晰的节奏（标题 → 内容 → 间距 → 下一组）

### 密度

- 企业 SaaS 场景默认使用紧凑密度（行高 32px 为主，间距 8-16px）
- 阅读型页面（文档详情、帮助页）使用宽松密度
- 移动端触控场景使用宽松密度（最小触控目标 44px）

---

## 子文件索引

| 文件 | 内容 | 何时查阅 |
|---|---|---|
| [product-personality.md](product-personality.md) | 产品气质 Do/Don't、场景情绪引导 | 需要判断视觉方向是否正确时 |
| [layout-thinking.md](layout-thinking.md) | 信息密度、层级节奏、留白策略 | 设计页面布局和间距时 |
| [component-decision.md](component-decision.md) | 按钮层级、反馈选型、数据展示选型 | 选择组件和变体时 |
| [context-constraints.md](context-constraints.md) | 上下文约束：Tabs 按上下文选 size、控件尺寸一致性、表格行内按钮、多列防溢出 | 生成含 Tabs/表格/多列表单等组合时（所有输出目标共享） |

> Modal 容器内的组合模式（C1-C3 分档、字重体系、尺寸预算）已迁至 Layer 2 [kd-patterns/modal-pattern.md](../kd-patterns/modal-pattern.md)。
| [cross-platform.md](cross-platform.md) | Web/H5/小程序一致性原则 | 设计多端界面时 |
