# 上下文约束规则

> **定位**：本文件定义组件在不同上下文中的行为约束（如同一组件在弹窗 vs 页面中的尺寸差异）。
> 适用于所有输出目标（HTML / React / Vue / QT JSON）。
> Modal 容器内的组合模式（C1-C3 分档、字重体系）已迁至 [kd-patterns/modal-pattern.md](../kd-patterns/modal-pattern.md)。

---

## Tabs 上下文使用规则

### 尺寸选择（按上下文）

| 上下文 | Tabs 尺寸 | font-size |
|--------|----------|-----------|
| 弹窗 / Drawer / Popover 等浮层内部 | **Small** | 13px |
| 页面级内容切换 | **Middle** | 14px |
| 引导 / 展示型大区块 | **Large** | 16px |

**同一视图内禁止混用多种 size。**

### 激活色规则（按 size 区分）

| Size | Ink bar 颜色 | 激活 label 颜色 | 设计原理 |
|------|-------------|----------------|---------|
| **Small** | **text-primary (#0D0D0D) 黑色** | #0D0D0D | 浮层内已是蓝色焦点区，再用蓝色会"蓝上加蓝" |
| **Middle** | **public-normal (#0A6CFF) 蓝色** | #0A6CFF | 页面级需要蓝色引导视线 |
| **Large** | **public-normal (#0A6CFF) 蓝色** | #0A6CFF | 展示型同理 |

### 未激活 label 颜色

所有 size 的未激活 label 颜色 = **text-primary (#0D0D0D)**，**不是 secondary 灰**。靠字重（400 vs 600）+ ink bar 区分激活态。

### 导航底部线

**默认不画通栏底部分割线。** Ink bar 本身就是激活指示。弹窗内加通栏线会与白卡片圆角形成视觉冲突。

---

## 控件尺寸一致性规则

**同一区域内所有控件必须保持同一 size。** 不允许在同一表单/卡片/弹窗内混用不同 size。

| 场景 | 控件 Size |
|------|----------|
| 弹窗内表单 | Medium（28px 高） |
| 页面级表单 | Large（32px 高，默认） |
| 表格行内编辑 | Small（24px 高） |
| 搜索/筛选栏 | Medium 或 Large |

---

## 表格行内操作按钮

表格行内的操作按钮必须使用 **Light + Small** 类型，紧凑且不抢数据行的注意力。

- 危险操作（如删除）：Light + Small + Danger
- 按钮间距：4px

---

## 多列布局防溢出规则

当内容区用 Grid / Flex 做多列布局且包含输入控件时，**三条必守规则**：

1. **计算可用宽度**：列数 × 最小列宽 (96px) + gap × (n-1) ≤ 可用宽度。列数过多时必须换行或降列。
2. **Grid/Flex 子项必须设 `min-width: 0`**：否则输入控件的默认 intrinsic 宽度（~148px）会撑破容器。
3. **输入控件禁止固定宽度**：外层 `width: 100%`，禁止写 `width: 148px` 等固定值。
