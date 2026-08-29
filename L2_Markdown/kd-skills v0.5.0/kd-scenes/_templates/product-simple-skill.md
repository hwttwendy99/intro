---
name: {business-line}-{product}
description: {业务线中文名} - {产品中文名} ({官方英文名})
version: 0.1.0
business-line: {business-line}
product: {product}
tech-stack: {react|vue2|vue3|qt|html}
platform: {web|h5|miniprogram}
depends-on:
  - kd-design-language
  - kd-foundation
  - kd-layout
pages:
  - id: {page-id}
    name: {页面中文名}
    keywords: [{关键词1}, {关键词2}]
---

# {产品中文名}

## 模块概述

{用 1-2 句话说明这个产品的核心功能和目标用户}

## 页面：{页面名}

### 信息架构

```
┌──────────────────────────────────────┐
│  {区域 A 描述}                       │
├──────────────────────────────────────┤
│  {区域 B 描述}                       │
└──────────────────────────────────────┘
```

### 数据字段

| 字段 | 类型 | 展示组件 | 说明 |
|---|---|---|---|
| {字段名} | string | Input | {特殊规则} |

### 组件组合

- {组件描述，如：筛选栏使用 Select(medium) + Input(medium)}

### 交互说明

1. {交互描述}

## 状态处理

| 状态 | 处理方式 | 说明 |
|---|---|---|
| 首屏加载 | Skeleton | {覆盖区域} |
| 列表为空 | Empty | {空态引导} |
| 网络错误 | 错误提示 + 重试 | - |

## 设计约束

- {该产品特有的约束}
