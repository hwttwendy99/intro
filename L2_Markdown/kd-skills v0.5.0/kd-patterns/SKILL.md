---
name: kd-patterns
description: KDesign 页面模式层：定义组件在特定容器/场景下的组合方式（Modal 分档、表单组织、列表页模式等）。生成含组合组件的页面时加载。Keywords：pattern, modal composition, form pattern, list pattern, component combination.
version: 1.0.0
---

# KDesign 页面模式层

> Layer 2 — 定义"选了组件之后，怎么组合使用"。

## 定位与边界

| 层级 | 回答的问题 | 示例 |
|------|-----------|------|
| Layer 0 kd-design-language | **选哪个组件？** | "用 Modal 还是 Drawer？" → component-decision.md |
| **Layer 2 kd-patterns** | **选了之后怎么组合？** | "Modal 内部内容怎么分档？字重怎么分配？" → modal-pattern.md |
| Layer 1-T kd-components / kd-react | **组合规则怎么实现？** | "C3 Modal 的 HTML class 是什么？React props 怎么传？" |

Pattern 是**目标无关的设计规则**——同一套 Modal 分档体系适用于 HTML、React、Vue、QT JSON 所有输出目标。目标层（Layer 1-T）负责将 Pattern 翻译为具体实现。

## 加载条件

- 生成含 Modal / Drawer 等容器组件时 → 加载 `modal-pattern.md`
- 后续新增的 Pattern 按需加载（如表单页加载 `form-pattern.md`）
- 不需要一次性加载所有 Pattern

## Pattern 索引

| 文件 | 内容 | 何时加载 |
|------|------|---------|
| [modal-pattern.md](modal-pattern.md) | Modal C1-C3 分档、三层字重体系、尺寸预算、Footer 按钮、分组通则 | 生成含 Modal/Dialog 的页面时 |

## Pattern 文件结构约定

每个 Pattern 文件遵循统一结构：

1. **frontmatter**：name / version / description
2. **定位声明**：适用范围 + 与目标层的关系
3. **信息组织规则**：内容如何分区、分档
4. **组件组合约束**：子组件如何搭配
5. **尺寸/间距预算**：可用空间计算
6. **强制约束**：不可违反的硬性规则
