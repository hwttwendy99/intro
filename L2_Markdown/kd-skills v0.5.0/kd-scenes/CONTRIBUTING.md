# 场景 Skill 贡献指南

本文档面向各业务线设计师，帮助你理解场景 Skill 是什么、为什么要做、怎么做，以及做到什么程度算合格。

---

## 什么是场景 Skill

场景 Skill 就是一本**给 AI 读的产品设计手册**。

你的产品有哪些页面类型、页面骨架长什么样、间距多少、用什么组件、有哪些硬性规则、常见错误是什么——这些知识目前存在你的脑子里和零散的文档中。每次让 AI 帮你生成设计稿或代码，你都要从头解释一遍。

场景 Skill 把这些知识结构化地沉淀下来。一旦写好，AI 就能自动读取并遵守，直接产出符合你产品规范的设计稿或代码。

**类比**：如果 KDesign 组件库是「积木块」，场景 Skill 就是「搭建说明书」——告诉 AI 你的产品怎么用这些积木。

---

## 它能帮你做什么

- AI 生成设计稿/代码时，自动遵守你产品的规范，不需要每次重复教
- 新人加入团队时，读一遍场景 Skill 就能理解产品的设计规则
- 设计评审时，AI 可以自动按校对清单检查产出是否合规
- 跨团队协作时，其他设计师能快速理解你产品的设计约束

---

## 整体流程

整个过程分三个阶段：你准备素材 → 和 AI 协作撰写 → 审核后入库。

```
Phase 1: 准备素材                Phase 2: AI 协作撰写              Phase 3: 审核入库
┌─────────────────────┐        ┌─────────────────────┐        ┌─────────────────────┐
│ 1. 梳理页面清单       │        │ 1. 告诉 AI"我要创建  │        │ 1. AI 自动执行质量    │
│ 2. 收集设计规范文档    │  ───>  │    场景 Skill"       │  ───>  │    自检               │
│ 3. 整理最佳实践       │        │ 2. AI 逐步提问       │        │ 2. 你提交 PR          │
│ 4. 标注常见错误       │        │ 3. AI 生成 SKILL.md  │        │ 3. 业务线 Lead Review │
│ 5. 准备 Figma 节点    │        │ 4. AI 生成 references│        │ 4. 合并到主库         │
│                     │        │ 5. 你校对 + AI 修订   │        │ 5. 通知业务线         │
└─────────────────────┘        └─────────────────────┘        └─────────────────────┘
```

> 你不需要自己写 Markdown 文件。Phase 2 全程由 AI 引导，你只需要回答问题、提供素材、校对产出。

---

## Phase 1：准备素材

开始之前，把以下素材准备好。不需要一次全部到位——AI 会在协作过程中告诉你缺什么。但准备越充分，产出质量越高。

### 素材清单

| # | 素材 | 是什么 | 最低要求 | 理想状态 |
|---|------|--------|---------|---------|
| 1 | **页面清单** | 你的产品有哪些页面类型 | 列出页面名 + 一句话描述 | 每个页面附信息架构草图 |
| 2 | **设计规范** | 页面骨架、间距、组件选型等规则 | 有文字描述（哪怕是聊天记录） | 有标注的 Figma 节点 |
| 3 | **最佳实践** | 做得对的设计产出示例 | 至少 1 个典型页面的截图 | Figma 中的标准页面节点 |
| 4 | **常见错误** | 常做错的地方 | 列出 3-5 个常见问题 | 有错误 vs 正确的截图对比 |
| 5 | **Figma 节点** | 产品关键模块在 Figma 中的位置 | 可选（文字描述也行） | 提供 Figma 链接，AI 可直接提取精确参数 |

### 关于 Figma 节点

如果你能提供 Figma 链接，AI 可以直接从设计稿中提取精确参数（尺寸、间距、颜色变量、组件结构），这会大幅提升产出的精确度。

**怎么获取 Figma 节点链接**：在 Figma 中选中目标组件或 Frame → 右键 → Copy link to selection。

你不需要提供所有模块的链接——先提供最核心的 1-2 个页面即可，后续可以逐步补充。

---

## Phase 2：和 AI 协作撰写

### 启动方式

在 Cursor 中对 AI 说以下任意一句：

- "我要创建场景 Skill"
- "帮我新建一个场景 Skill"
- "create scene skill"

AI 会自动进入引导流程。

### AI 会做什么

1. **信息采集**：AI 先问你几个基本问题——产品名、所属业务线、技术栈、核心页面列表
2. **目录初始化**：AI 创建文件夹和 SKILL.md 骨架
3. **逐页面深入**：对每个页面，AI 会问你骨架结构、数据字段、组件选型、交互规则
4. **Figma 提取**（如果你提供了链接）：AI 从 Figma 中读取精确参数，填入规格文档
5. **References 生成**：AI 把详细规格拆分成独立的模块文档
6. **校对清单生成**：AI 从硬性规则自动生成检查项
7. **质量自检**：AI 对照标准逐项检查产出

### 你需要做什么

- 回答 AI 的问题（不确定的可以说"跳过"或"后面补充"）
- 在 AI 生成草稿后，通读一遍确认规则是否准确
- 指出需要修改的地方，AI 会帮你调整

---

## Phase 3：审核入库

### 提交前

AI 会自动执行质量自检，并告诉你当前产出达到了哪个等级（见下方「产出标准」）。至少需要达到 Bronze 才建议提交。

### 提交流程

1. 创建 Git 分支
2. 提交 PR（AI 可以帮你操作）
3. 业务线 Lead Review 并 Approve
4. 合并后在业务线内部通知

详细的 Review 流程和权限规则见 [GOVERNANCE.md](../GOVERNANCE.md)。

---

## 产出标准

场景 Skill 的完成度分为三个等级：

### Bronze（最低可用）

AI 能根据 Skill 生成结构正确的页面，但细节可能需要手动调整。

- [ ] SKILL.md 的 frontmatter 完整（name / version / business-line / product / tech-stack / platform / depends-on / pages）
- [ ] 已在场景注册表中注册（`kd-scenes/SKILL.md` 的注册表）
- [ ] 模块概述清晰（一句话说明产品做什么）
- [ ] 页面清单完整，每个页面有 keywords
- [ ] 每个页面有骨架结构描述（ASCII 树或文字说明）
- [ ] 关键硬性规则已列出
- [ ] 缺失数据提问清单已列出

### Silver（推荐）

AI 能生成高保真的页面，大部分细节无需手动调整。

- [ ] 达到 Bronze 全部要求
- [ ] `references/` 目录覆盖核心模块（每个模块一个文件）
- [ ] 每个 reference 文件包含：结构描述、精确尺寸/间距、组件选型、交互状态
- [ ] 校对清单已建立（引用式，每项指向规则来源）
- [ ] Reference 加载索引已建立（告诉 AI 什么任务该读哪些文件）

### Gold（标杆）

AI 能生成几乎可以直接交付的页面。当前只有 `saas/admin-console` 达到此标准。

- [ ] 达到 Silver 全部要求
- [ ] 数据字段级规格完整（字段类型、展示组件、特殊处理规则）
- [ ] Figma 节点索引已建立（关键模块对应的 Figma 链接）
- [ ] 交互状态完整覆盖（hover / active / focus / selected / disabled）
- [ ] 组件状态变量已映射到 KDesign Token

---

## 目录结构

一个完整的场景 Skill 在文件系统中长这样（以 `saas/admin-console` 为例）：

```
kd-scenes/
├── SKILL.md                              ← Hub：场景注册表（必须在此注册）
│
└── saas/                                 ← 业务线文件夹
    ├── SKILL.md                          ← 业务线入口（必须）
    ├── CHANGELOG.md                      ← 业务线变更记录（必须）
    │
    └── admin-console/                    ← 产品文件夹
        ├── SKILL.md                      ← 产品入口（必须） ← AI 首先读这个
        ├── CHANGELOG.md                  ← 产品变更记录（推荐）
        │
        └── references/                   ← 模块级参考文档（Silver 及以上必须）
            ├── page-skeleton.md          ← 共享：页面骨架（App Shell）
            ├── navigation.md             ← 共享：导航模块
            ├── interaction-states.md     ← 共享：交互状态规则
            ├── icons.md                  ← 共享：图标使用规则
            │
            ├── table-list-page/          ← 表格列表页专属模块
            │   ├── command-bar.md
            │   ├── table.md
            │   ├── pagination.md
            │   ├── checklist.md
            │   ├── _js/
            │   └── table-columns/        ← Gold 级别子模块分组
            │       ├── README.md
            │       └── ...
            │
            ├── dashboard/                ← 其他页面类型（按需扩展）
            │   └── README.md
            └── settings-list/
                └── README.md
```

### 多页面产品的 references 分组

当产品有多种页面类型时（如 admin-console 有表格列表页、Dashboard、设置列表页），references 采用**共享 + 页面专属**的分组模式：

- **共享模块**放在 `references/` 根目录——所有页面都用到的规则（页面骨架、导航、图标、交互状态）
- **页面专属模块**放在 `references/{page-id}/` 子目录——只有特定页面类型用到的规则（如命令栏、表格、分页器只属于表格列表页）
- 每个页面类型各自的**校对清单**放在 `references/{page-id}/checklist.md`

单页面或简单产品（1-2 个页面）保持扁平 `references/` 结构即可，无需分组。

### 文件命名规范

所有 reference 文件和子目录统一使用**英文小写短横线命名**（如 `page-skeleton.md`、`command-bar.md`、`table-columns/`），不使用中文。

### 哪些文件是必须的

| 文件 | Bronze | Silver | Gold |
|------|--------|--------|------|
| 业务线 `SKILL.md` | 必须 | 必须 | 必须 |
| 业务线 `CHANGELOG.md` | 必须 | 必须 | 必须 |
| 产品 `SKILL.md` | 必须 | 必须 | 必须 |
| 产品 `CHANGELOG.md` | 推荐 | 推荐 | 必须 |
| `references/*.md` | 不需要 | 核心模块 | 全部模块 |
| `references/checklist.md` 或 `references/{page-id}/checklist.md` | 不需要 | 必须 | 必须 |
| `references/{子模块}/` | 不需要 | 不需要 | 按需 |

---

## 示例剖析：admin-console

以下用 `saas/admin-console`（当前唯一的 Gold 级场景 Skill）来解释每个部分该怎么写。

### SKILL.md 的 frontmatter

```yaml
---
name: saas-admin-console          # 格式：{业务线}-{产品}，全局唯一
description: SaaS - 管理后台...    # 一句话描述，AI 用它做初步判断
version: 0.5.0                    # SemVer 版本号
business-line: saas               # 业务线代号（见 GOVERNANCE.md）
product: admin-console            # 产品目录名（见 GOVERNANCE.md）
tech-stack: vue2                  # 决定 AI 自动加载哪个目标层
platform: web                    # web / h5 / miniprogram
depends-on:                       # 本场景依赖的其他 Skill
  - kd-design-language
  - kd-foundation
  - kd-layout
  - kd-patterns/modal-pattern
pages:                            # 页面清单，AI 路由匹配用
  - id: table-list-page
    name: 表格列表页
    keywords: [管理后台, 表格页, 列表页, 后台管理, Admin Console]
  - id: dashboard
    name: Dashboard
    keywords: [管理后台, Dashboard, 仪表盘, 概览, 数据看板]
    status: draft                 # draft = 编写中，AI 不自动加载
  - id: settings-list
    name: 设置列表页
    keywords: [管理后台, 设置, Settings, 配置]
    status: draft
---
```

**要点**：
- `tech-stack` 最重要——它决定 AI 加载 kd-react 还是 kd-vue2 等目标层
- `pages` 里的 `keywords` 要包含用户可能说的各种说法（中文名、英文名、口语说法）
- `depends-on` 不需要写 tech-stack 对应的目标层（AI 自动加载）
- 尚未完善的页面可以标记 `status: draft`，AI 不会自动加载 draft 页面的规则

### Reference 文件的写法

以 `command-bar.md` 为例，一个好的 reference 文件包含：

1. **结构描述**：用 ASCII 树描述模块的层级关系和布局方式
2. **精确数值**：高度、间距、gap、控件尺寸等（最好从 Figma 提取）
3. **组件选型**：用什么组件、什么变体、什么尺寸
4. **硬性规则**：不可违反的约束（用"必须"/"禁止"等强硬措辞）
5. **状态变量**：交互状态对应的 KDesign Token
6. **Figma 对齐来源**：关键规则对应的 Figma 节点（可选但推荐）

**关键原则**：reference 文件是给 AI 读的规则文档，不是给人读的教程。语言要精确、无歧义、可直接执行。

### 校对清单的写法

校对清单采用**引用式**写法——每个检查项只写检查点和规则来源，不重复具体数值：

```markdown
| # | 检查点 | 规则来源 |
|---|---|---|
| 1 | 页面背景使用正确的 background-base 变量 | page-skeleton.md#页面背景 |
```

这样做的好处：规则修改时只需改源文件，校对清单不会和源文件产生不一致。

---

## 关键概念：四层粒度

场景 Skill 用四个层级来组织设计知识。从大到小依次是：

```
业务线 (business-line)    → 文件夹，声明通用约束
  └── 产品 (product)       → SKILL.md，声明技术栈和页面清单
       └── 页面 (page)     → SKILL.md 中的 pages 字段
            └── 模块 (module) → references/ 下的独立文件
```

### 业务线（business-line）

**是什么**：一组共享品牌、用户群或技术基座的产品的集合。在文件系统中表现为 `kd-scenes/` 下的一级文件夹。

**示例**：

| 业务线代号 | 中文名 | 包含的产品 |
|-----------|--------|-----------|
| `wps-docs` | 金山文档 | 文字、表格、演示、PDF、智能文档、智能表格... |
| `saas` | SaaS | 管理后台 |
| `wps-office` | WPS Office | 文字、表格、演示、PDF（桌面端） |
| `wps-ai` | WPS AI | 文档脑图 |

**职责**：声明业务线内所有产品共享的约束（如统一的导航框架、共享的顶部栏结构）。

### 产品（product）

**是什么**：场景 Skill 的核心入口单位。一个产品对应一个 `SKILL.md`，声明技术栈、页面清单和设计规则。在文件系统中表现为业务线文件夹下的二级文件夹。

**示例**：

| 业务线 | 产品目录名 | 产品中文名 | 技术栈 |
|--------|-----------|-----------|--------|
| `saas` | `admin-console` | 管理后台 | vue2 |
| `wps-docs` | `docs` | 文字 | react |
| `wps-docs` | `sheets` | 表格 | react |
| `wps-docs` | `document` | 文档管理器首页 | vue2 |
| `wps-office` | `docs` | 文字（桌面端） | qt |

**判断规则——什么时候算一个产品，什么时候该拆成两个**：

| 情况 | 做法 | 原因 |
|------|------|------|
| 共享导航框架和数据模型的页面 | 归同一个产品 | 它们是同一个"应用"的不同页面 |
| UI 范式完全不同（如编辑器 vs 管理后台） | 拆为独立产品 | 设计规则差异太大，放在一起反而干扰 |
| 技术栈不同（如 React vs Vue2） | 拆为独立产品 | tech-stack 字段只能填一个 |
| 同一产品有 Web 端和 H5 端 | 如果布局差异大就拆，小就用同一个 | 按实际复杂度判断 |

**实际例子**：金山文档的"文字"和"表格"共享顶部导航框架，但编辑区完全不同，所以拆为 `wps-docs/docs/` 和 `wps-docs/sheets/`。而金山文档的"文档管理器首页"虽然也在同一业务线，但技术栈是 Vue2（其他是 React），所以拆为独立的 `wps-docs/document/`。

### 页面（page）

**是什么**：产品中的一种页面类型。在 SKILL.md 的 `pages` 字段中声明，是 AI 路由匹配的最小单位。

**示例**（以管理后台为例）：

| 页面 ID | 页面名 | 说明 | 状态 |
|---------|--------|------|------|
| `table-list-page` | 表格列表页 | 管理后台最常见的页面，顶部筛选 + 表格 + 分页 | active |
| `dashboard` | Dashboard | 数据概览/仪表盘页面 | draft |
| `settings-list` | 设置列表页 | 系统配置页面 | draft |

**判断规则——什么时候算一个页面，什么时候算同一个页面的不同状态**：

| 情况 | 做法 | 原因 |
|------|------|------|
| 布局骨架完全不同（如列表页 vs 详情页） | 拆为不同页面 | 骨架不同意味着需要不同的设计规则 |
| 同一骨架的不同数据展示（如"用户列表"和"订单列表"） | 算同一个页面类型 | 只是数据字段不同，骨架和规则一样 |
| 有/无数据的不同展示（如空态、加载态） | 算同一个页面的不同状态 | 在 SKILL.md 的"状态处理"中描述 |

### 模块（module）

**是什么**：页面内的一个功能区块，对应 `references/` 下的一个独立文件。模块是最细粒度的设计规格单位。

**示例**（以管理后台表格列表页为例）：

| 模块 | 文件路径 | 是否共享 | 说明 |
|------|---------|---------|------|
| 页面骨架 | `references/page-skeleton.md` | 共享 | App Shell：顶栏 + 侧边栏 + 内容区的整体结构 |
| 导航 | `references/navigation.md` | 共享 | 左侧导航的层级、图标、展开收起规则 |
| 图标 | `references/icons.md` | 共享 | 图标使用规则和语义映射 |
| 交互状态 | `references/interaction-states.md` | 共享 | hover/active/focus/selected/disabled 通用规则 |
| 命令栏 | `references/table-list-page/command-bar.md` | 表格页专属 | 筛选组 + 页面动作组的结构和规则 |
| 表格 | `references/table-list-page/table.md` | 表格页专属 | 表格的行高、列宽、固定列、选中态 |
| 分页器 | `references/table-list-page/pagination.md` | 表格页专属 | 分页器尺寸、跳页、每页条数 |
| 表格列类型 | `references/table-list-page/table-columns/` | 表格页专属 | 每种列类型的单元格规格（Gold 级别） |

**判断规则——什么时候该拆为独立模块**：

| 情况 | 做法 | 原因 |
|------|------|------|
| 规则超过 20 行 | 拆为独立 reference 文件 | 太长了放在 SKILL.md 里会影响可读性 |
| 有独立的 Figma 节点来源 | 拆为独立 reference 文件 | 便于记录 Figma 节点索引和精确参数 |
| 多个页面类型都用到 | 放在 `references/` 根目录（共享） | 避免重复维护 |
| 只有一种页面类型用到 | 放在 `references/{page-id}/`（页面专属） | 职责清晰，不污染其他页面 |
| 规则很短（5 行以内） | 保留在 SKILL.md 中 | 不值得拆文件 |

### AI 如何找到你的场景 Skill

1. 用户说"帮我做一个管理后台的表格页"
2. AI 读取 `kd-scenes/SKILL.md` 中的场景注册表
3. 关键词匹配到 `admin-console`（关键词包含"管理后台"和"表格页"）
4. AI 加载 `saas/admin-console/SKILL.md`
5. 根据 `tech-stack: vue2`，自动加载 `kd-vue2`
6. 根据任务涉及的模块，按需读取 `references/` 下的文件

所以**关键词写得好不好，直接决定 AI 能不能找到你的场景**。

---

## 版本管理

每次修改场景 Skill 都要：

1. 更新 SKILL.md frontmatter 中的 `version`
2. 在 CHANGELOG.md 中记录变更

版本号规则（SemVer）：

| 改了什么 | 版本升级 | 举例 |
|---------|---------|------|
| 修正数值、补充说明 | Patch 0.0.x | 修正命令栏 gap 从 16 到 32 |
| 新增页面、新增模块 | Minor 0.x.0 | 新增"设置页"场景 |
| 结构重构、大改 | Major x.0.0 | 页面骨架完全重做 |

---

## 常见问题

**Q：我的产品比较简单，只有 1-2 个页面，也需要写场景 Skill 吗？**

A：需要。即使只有一个页面，场景 Skill 也能确保 AI 每次生成的结果一致。简单产品用 Bronze 级就够了，AI 协作撰写通常 30 分钟内完成。

**Q：我不确定某些规则该怎么写，可以先跳过吗？**

A：可以。先写你确定的部分，达到 Bronze 后提交。后续可以随时补充，每次补充提升一个 Patch 版本。

**Q：我的产品技术栈混合了多种（如部分 React 部分 Vue2），怎么填 tech-stack？**

A：填主要的那个。如果差异很大，可以拆成两个产品。具体情况在 AI 协作时讨论。

**Q：我可以直接手写 Markdown 文件，不用 AI 协作吗？**

A：可以，但不推荐。AI 协作能确保格式正确、字段完整、和现有范例对齐。手写容易遗漏必填字段或格式不一致。

**Q：写好后怎么验证 AI 确实能用？**

A：在 Cursor 中用你的产品关键词问 AI 生成一个页面，看它是否正确加载了你的场景 Skill。如果没有，检查场景注册表中的关键词是否足够。
