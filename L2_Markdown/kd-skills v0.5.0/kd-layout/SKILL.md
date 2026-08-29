---
name: kd-layout
description: KDesign 布局规范：Web/H5/小程序页面结构、Flex 布局、断点响应式、间距系统。页面布局、响应式、栅格、间距时加载。Keywords：layout, flex, grid, responsive, breakpoint, spacing.
version: 1.0.0
---

# KDesign 布局规范

> KDesign 采用 Flex/Grid 自由布局（非固定栅格），通过统一的容器宽度、间距阶梯和断点规则实现一致性。

## 核心原则

1. **Flex-first**：所有布局使用 Flexbox，仅在等宽网格场景使用 CSS Grid
2. **容器居中**：内容区通过 max-width + margin auto 居中
3. **间距 4px 倍数**：所有间距值必须是 4px 的整数倍（2px 仅限极特殊场景）
4. **语义化结构**：页面骨架使用 `<nav>` / `<aside>` / `<main>` / `<section>`

## 子文件索引

| 文件 | 内容 | 何时查阅 |
|---|---|---|
| [web-grid.md](web-grid.md) | Web 端页面结构、容器、卡片网格、断点 | 设计 1440px Web 页面时 |
| [mobile-grid.md](mobile-grid.md) | H5/小程序页面结构、触控适配 | 设计 375px 移动端页面时 |
| [spacing-system.md](spacing-system.md) | 间距阶梯、组件间距、区域间距速查 | 需要确定间距值时 |
