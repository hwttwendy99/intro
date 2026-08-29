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
  - id: {page-id-1}
    name: {页面1中文名}
    keywords: [{关键词1}, {关键词2}]
  - id: {page-id-2}
    name: {页面2中文名}
    keywords: [{关键词1}, {关键词2}]
---

# {产品中文名}

## 模块概述

{用 1-2 句话说明这个产品的核心功能和目标用户}

**核心场景**：{用户来这个产品最常做的 1-3 件事}

## 使用流程

1. 先按 `AGENTS.md` 判断输入模式（Mode 1/2/3）
2. 先读取本 SKILL.md 了解产品全貌和页面清单
3. 再按任务涉及的模块读取 `references/` 下的对应文件
4. 输出前执行本产品规定的检查流程

## Reference 加载索引

按需读取，不要一次性加载所有文件。多页面产品按"共享 / 页面专属"分组；单页面产品可省略分组标题。

### 共享模块（所有页面通用）

| 任务 | 必读 reference |
|---|---|
| {如：页面骨架 / App Shell} | `references/{shared-module}.md` |
| {如：导航} | `references/{shared-module}.md` |

### {页面类型1}

| 任务 | 必读 reference |
|---|---|
| {任务描述1} | `references/{page-id}/{module}.md` |
| {如：质检} | `references/{page-id}/checklist.md` |

### {页面类型2}（draft）

> 待补充。占位见 `references/{page-id}/README.md`。

## 核心页面结构

多页面产品建议分为 App Shell（共享）+ 各页面类型的内容区。单页面产品可合并为一棵树。

### App Shell（共享）

```text
Page
├─ {共享区域A}
└─ {共享区域B}
   ├─ {子区域B1}
   └─ Content Area
      └─ (页面类型各自定义)
```

### {页面类型1} Content Area

```text
Content Area
├─ {模块1}
├─ {模块2}
└─ {模块3}
```

### {页面类型2}

> 待定义。

## 关键硬性规则

- {规则1}
- {规则2}

## 页面清单

### 页面 1：{页面名}

#### 信息架构

```
┌──────────────────────────────────────┐
│  {区域描述}                          │
├──────────────────────────────────────┤
│  {区域描述}                          │
└──────────────────────────────────────┘
```

#### 数据字段

| 字段 | 类型 | 展示组件 | 说明 |
|---|---|---|---|
| {字段名} | string | Input | {特殊规则} |

#### 组件组合

- {组件描述}

#### 交互说明

1. {交互描述}

### 页面 2：{页面名}

{重复上面的结构}

## 状态处理

| 状态 | 处理方式 | 说明 |
|---|---|---|
| 首屏加载 | Skeleton | {覆盖区域} |
| 列表为空 | Empty + 新建按钮 | {空态引导} |
| 网络错误 | 区域内错误提示 + 重试 | - |
| 无权限 | 403 页面 / 区域灰态 | {按业务规则} |

## 设计约束

- {该产品特有的约束1}
- {该产品特有的约束2}
