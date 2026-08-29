---
name: saas
description: SaaS 业务线通用约束
business-line: saas
default-tech-stack: vue2
shared-conventions:
  - top-info-bar
  - navigation-sidebar
---

# SaaS

## 业务线概述

SaaS 业务线包含面向企业客户的服务化产品，如数字办公平台（管理后台）等。所有产品共享统一的顶部信息栏和左侧导航框架。

## 共享约定

### 顶部信息栏（Top Info Bar）

所有 SaaS 产品共享 64px 高的顶部信息栏，横向 Auto Layout 三段式结构：

- **企业信息**（Hug）：企业头像 32px + 标题 + 可选企业认证标签
- **搜索容器**（Fill）：内部居中放置固定 367px x 32px 文本输入框
- **个人信息**（Hug）：欢迎语 + 头像 20px + `arrow_down_s`

关键约束：
- 背景使用 `var(--kd-color-background-base)`
- 底部不绘制分割线
- 搜索属于全局入口，不承载当前页面的业务筛选
- 内部直接子项必须使用 Auto Layout 子项语义（Hug / Fill / Hug）

### 左侧导航框架（Navigation Sidebar）

所有 SaaS 产品共享 212px 宽的左侧导航区域：

- 使用 KD 标准组件 `导航 Navigation` 或严格同构
- 内部 Slot x=16px、宽 180px
- 背景使用 `var(--kd-color-background-base)`
- 导航与内容区之间不绘制分割线
- 支持一级至四级层级；仅一级可有业务图标

各产品的内容区独立设计，只需遵守顶部信息栏和导航的共享框架。

## 产品清单

| 产品 | 目录名 | 技术栈 | 状态 |
|------|--------|--------|------|
| 管理后台 (Admin Console) | admin-console | vue2 | active |
