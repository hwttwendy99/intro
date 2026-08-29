---
name: kd-scenes
description: KDesign 业务场景层：场景注册表、AI 路由规则、粒度定义、目录约定。涉及具体业务产品的设计任务时加载。Keywords：business scene, scenario, product scene, routing.
version: 2.0.0
---

# KDesign 业务场景层

## 定位

场景 Skill 是框架的最上层应用，基于 Layer 0-2 的规范，为**具体业务产品**提供完整的设计上下文。

```
Layer 0    kd-design-language / kd-foundation         ← 全局约束（所有目标共享）
Layer 1    kd-layout                                  ← 页面骨架与间距（所有目标共享）
Layer 1-T  kd-components / kd-react / kd-vue2 / ...   ← 目标层（按输出格式互斥加载）
Layer 2    kd-patterns                                ← 页面模式（通用，当前含 modal-pattern）
Layer 3    kd-scenes                                  ← 业务场景（本层）
Layer 4    kd-design-qa                               ← QA 自检（目前仅 HTML 目标）
```

> **Layer 1-T**：目标层按输出格式互斥加载。产品 SKILL.md 中的 `tech-stack` 字段决定加载哪个目标层——AI 自动映射，无需手动指定。

## 粒度模型

场景 Skill 采用四层粒度模型：

| 层级 | 含义 | 目录表现 | 作用 |
|------|------|---------|------|
| **业务线（business-line）** | 产品族的组织容器 | 一级文件夹（如 `wps-docs/`） | 声明通用约束（导航框架、共享布局） |
| **产品（product）** | Scene Skill 的入口单位 | 二级文件夹（如 `wps-docs/docs/`） | 声明技术栈、依赖、页面清单 |
| **页面/场景（page）** | AI 路由匹配的最小单位 | 产品 SKILL.md 中的 `pages` 字段 | 关键词匹配，引导 AI 定位到正确产品 |
| **模块（module）** | 页面内的功能区块 | `references/` 下的子文件 | 按需加载，提供模块级设计规格 |

**判定规则：何时拆产品 vs 合并**

- 同一产品内的页面共享数据模型和导航上下文 → 归同一个产品
- 不同产品即使在同一业务线，如果 UI 范式和技术栈不同 → 拆为独立产品
- 例：金山文档下的"文字"和"表格"共享顶部导航框架，但编辑区完全不同 → 拆为 `wps-docs/docs/` 和 `wps-docs/sheets/`

## 目录结构

```
kd-scenes/
├── SKILL.md                          # 本文件（Hub）
├── CONTRIBUTING.md                   # 面向业务设计师的贡献指南
├── _create-scene-skill/              # AI 辅助撰写场景 Skill 的引导式 Skill
│   └── SKILL.md
├── _templates/                       # 脚手架模板
│   ├── business-line-skill.md        # 业务线 SKILL.md 模板
│   ├── product-simple-skill.md       # 简单产品模板
│   ├── product-complex-skill.md      # 复杂产品模板
│   ├── reference-module-template.md  # Reference 模块文档模板
│   └── CHANGELOG-template.md         # 变更记录模板
│
├── _shared/                          # 跨业务线通用场景
│
├── {business-line}/                  # 业务线文件夹
│   ├── SKILL.md                      # 业务线入口（必须）
│   ├── CHANGELOG.md                  # 业务线变更记录（必须）
│   └── {product}/                    # 产品文件夹
│       ├── SKILL.md                  # 产品入口（必须）
│       ├── CHANGELOG.md              # 产品变更记录（按需）
│       └── references/               # 模块级参考文档（按需）
│           ├── {shared-module}.md    # 跨页面共享模块（如 page-skeleton.md）
│           ├── {page-id}/            # 页面专属模块（多页面产品）
│           │   ├── {module}.md       # 页面内模块（如 command-bar.md）
│           │   ├── checklist.md      # 页面专属校对清单
│           │   ├── _js/             # 确定性脚本资产（按需）
│           │   └── {sub-group}/     # 子模块分组（如 table-columns/）
│           └── {topic-group}/        # 主题分组（单页面产品可用）
│               └── {sub-topic}.md
```

> 业务线代号表和产品标准命名对照表见 [GOVERNANCE.md](../GOVERNANCE.md#业务线代号)，新增业务线或产品时在该处登记。

**Reference 文件命名规则**：所有 reference 文件及子目录统一使用英文小写短横线命名（如 `page-skeleton.md`、`command-bar.md`、`table-columns/`）。

## 场景注册表

AI 发现场景的唯一入口。新产品入驻时**必须**在此表添加一行。

| 业务线 | 产品 | 入口 | 技术栈 | 关键词 | 状态 |
|--------|------|------|--------|--------|------|
| saas | admin-console | saas/admin-console/SKILL.md | vue2 | 管理后台,Admin Console,数字办公平台,表格页,列表页,后台管理 | active |

**注册规则：**
- 关键词须包含：产品中文名、官方英文名、核心页面名、用户常用说法
- 关键词用逗号分隔，不限数量
- `状态` 字段：`active`（正式使用）/ `draft`（编写中，AI 不自动加载）/ `deprecated`（已废弃）

## AI 路由规则

当用户的任务涉及具体业务产品时，AI 按以下流程匹配场景：

1. **读取本文件的场景注册表**
2. **关键词匹配**：将用户 prompt 中的产品名、页面名等与注册表的关键词列比对
3. **命中**：加载匹配产品的 SKILL.md，根据 `tech-stack` 字段自动加载对应目标层（react → kd-react, vue2 → kd-vue2, qt → kd-qt-json, vue3 → kd-vue3）
4. **未命中**：询问用户所属业务线和产品
5. **按需深入**：根据任务涉及的具体页面/模块，读取产品 `references/` 下的对应文件

**tech-stack 到目标层映射：**

| tech-stack | 目标层 Skill |
|------------|-------------|
| react | kd-react |
| vue2 | kd-vue2 |
| vue3 | kd-vue3 |
| qt | kd-qt-json |
| html | kd-components |

## Frontmatter 规范

### 业务线 SKILL.md（必须）

```yaml
---
name: {business-line}
description: {中文名} ({官方英文名}) 业务线通用约束
business-line: {business-line}
default-tech-stack: {主要技术栈}
shared-conventions:
  - {共享约定1}
  - {共享约定2}
---
```

### 产品 SKILL.md（必须）

```yaml
---
name: {business-line}-{product}
description: {中文名} - {产品中文名} ({官方英文名})
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
```

**关键字段说明：**
- `tech-stack` — 决定自动加载哪个目标层，不在 `depends-on` 中重复声明
- `pages` — 页面清单，每个页面带 `keywords` 用于 AI 路由匹配
- `name` — 格式为 `{business-line}-{product}`，全局唯一

## 版本管理（SemVer）

| 变更类型 | 版本升级 | 示例 |
|---|---|---|
| 修正错误、补充说明 | Patch `0.0.x` | 修正按钮 padding 值 |
| 新增页面、新增字段 | Minor `0.x.0` | 场景增加「设置」页面 |
| 结构重构、破坏性变更 | Major `x.0.0` | Token 变量重命名 |

每次修改需同步更新 frontmatter 的 `version` 字段，并在 `CHANGELOG.md` 登记。

## 创建新场景的流程

> **推荐方式**：使用 AI 辅助撰写——在 Cursor 中说"创建场景 Skill"，AI 会自动加载 [`_create-scene-skill/SKILL.md`](_create-scene-skill/SKILL.md) 并进入引导流程。
>
> **完整指南**：面向业务设计师的贡献指南见 [`CONTRIBUTING.md`](CONTRIBUTING.md)，包含素材准备清单、产出标准和示例剖析。

### 新增业务线

1. 在 [GOVERNANCE.md](../GOVERNANCE.md) 的业务线代号表中登记代号
2. 在 `kd-scenes/` 下创建业务线文件夹
3. 从 `_templates/business-line-skill.md` 复制并填写 SKILL.md
4. 创建 CHANGELOG.md

### 新增产品

1. 确认产品英文名已在 [GOVERNANCE.md](../GOVERNANCE.md) 的产品标准命名对照表中登记
2. 在业务线文件夹下创建产品文件夹（目录名 = 官方英文名小写短横线）
3. 根据复杂度选择模板：
   - 简单产品（单页面/少量页面）→ `_templates/product-simple-skill.md`
   - 复杂产品（多页面 + 模块级参考）→ `_templates/product-complex-skill.md`
4. 填写 SKILL.md 的 frontmatter 和内容
5. 如有模块级参考文档，使用 `_templates/reference-module-template.md` 作为骨架
6. **在本文件的场景注册表中添加一行**
7. 提交 PR，按 [GOVERNANCE.md](../GOVERNANCE.md) 流程 Review

## 质量标准

一个合格的产品场景 Skill 应让 AI 仅凭该文件 + depends-on 链 + 目标层 Skill 就能生成完整的设计产出。检查清单：

- [ ] frontmatter 完整（name / version / business-line / product / tech-stack / platform / depends-on / pages）
- [ ] 已在场景注册表中注册
- [ ] 模块概述清晰（用一句话说明这个产品做什么）
- [ ] 页面清单完整，每个页面有 keywords
- [ ] 每个页面有骨架结构或区域描述
- [ ] 数据字段有明确的类型和展示规则
- [ ] 特殊交互有文字说明
