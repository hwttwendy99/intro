---
name: kd-design-qa
description: KDesign 设计稿自检：多轮 AI 自检流程、检查清单、HTML 输出格式规则。HTML 设计稿输出、完成、验收时必加载。Keywords：design QA, checklist, self-check, HTML output format, review.
version: 1.0.0
---

# KDesign 设计稿 QA 自检

> 每次生成 HTML 设计稿后，必须执行本自检流程。

## 多轮自检流程

每轮只执行 **一类** 检查，**未通过则停止并修正**，再从 Round 0/1 重新执行（最多 3 轮）。
具体条目见 [`checklist.md`](checklist.md) 对应章节。

> Round 0 **仅对 Mode 2（截图/草图参考）生效**，Mode 1 / Mode 3 直接跳过。输入模式定义见 [`AGENTS.md`](../../AGENTS.md) 的「输入处理协议」。

### Round 0：输入源清洗检查（仅 Mode 2 必做）

- [ ] 生成前是否输出了"本次输入模式"声明？
- [ ] Mode 2 时是否列出了 IA 提取清单 / VL 丢弃清单 / KDesign 重建决策？
- [ ] 成品的整体气质是否回归 KDesign（而非与参考图相近）？自查 3 点：
  - 配色：只使用 Token 色板，无参考图的"强调色/装饰色"复刻
  - 间距节奏：按 `kd-layout/spacing-system` 的阶梯，而非参考图的像素值
  - 装饰：无参考图特有的渐变/插画/图标风格

**未通过则回到输入声明阶段重做，不进入 Round 1。**

### Round 1-4 索引

| Round | 检查范围 | 对应章节 |
|---|---|---|
| 1 | Token 覆盖率（颜色/字号/圆角/阴影/间距变量） | [Token 合规](checklist.md#token-合规) |
| 2 | 组件合规（按钮层级、表单 size、弹窗规格、导航、数据展示） | [组件合规](checklist.md#组件合规) |
| 3 | 布局结构（语义标签、间距阶梯、卡片网格、页面骨架） | [布局合规](checklist.md#布局合规) |
| 4 | 无障碍与多主题（对比度、aria、dark mode、i18n） | [无障碍合规](checklist.md#无障碍合规) / [主题合规](checklist.md#主题合规如涉及-dark-模式) |
| 5 | 浏览器兼容（CSS 特性黑名单扫描） | [浏览器兼容合规](checklist.md#浏览器兼容合规chromium-104-基线) |

### 自检结果输出

每次自检完成后，输出如下格式的检查报告：

```
## 自检报告
- Round 0（输入清洗）: ✅ 通过 / ⏭ 跳过（非 Mode 2）/ ❌ N 处不通过
- Round 1（Token）: ✅ 通过 / ❌ N 处不通过
- Round 2（组件）: ✅ 通过 / ❌ N 处不通过
- Round 3（布局）: ✅ 通过 / ❌ N 处不通过
- Round 4（无障碍）: ✅ 通过 / ❌ N 处不通过
- Round 5（浏览器兼容）: ✅ 通过 / ❌ N 处不通过

### 问题清单（如有）
1. [Round N] 具体问题描述 → 修正方案
```

如果所有 Round 均通过，输出「自检通过，可提交设计师最终确认」。
如果有不通过项，自动修正并说明修正原因，然后从 Round 0/1 重新执行（最多 3 轮迭代）。

## 子文件索引

| 文件 | 内容 |
|---|---|
| [checklist.md](checklist.md) | 完整设计检查清单（按类别） |
| [html-output-rules.md](html-output-rules.md) | HTML+CSS 输出格式强制规范 |
