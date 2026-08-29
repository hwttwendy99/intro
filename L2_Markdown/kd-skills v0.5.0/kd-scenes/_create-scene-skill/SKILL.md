---
name: create-scene-skill
description: AI 辅助撰写场景 Skill 的引导式工具。设计师说"创建场景Skill"或"新建场景"时加载，进入结构化的访谈-生成-校验流程。Keywords：创建场景Skill, 新建场景, 贡献场景, create scene skill, 撰写场景。
version: 1.0.0
---

# 创建场景 Skill

> 本 Skill 是一个**引导式流程**——读取后不直接生成设计稿/代码，而是进入结构化的对话流程，帮助设计师完成场景 Skill 的撰写。

## 触发条件

用户说出以下任意表述时加载本 Skill：

- "创建场景 Skill"、"新建场景"、"贡献场景"
- "create scene skill"、"撰写场景"
- "我要给 XX 产品写一个场景 Skill"

## 前置读取

加载本 Skill 后，**立即读取**以下文件（不要跳过）：

1. [`CONTRIBUTING.md`](../CONTRIBUTING.md) — 了解产出标准（Bronze/Silver/Gold）
2. [`SKILL.md`](../SKILL.md) — 了解场景注册表、frontmatter 规范、目录结构
3. [`_templates/product-complex-skill.md`](../_templates/product-complex-skill.md) — 复杂产品模板
4. [`_templates/product-simple-skill.md`](../_templates/product-simple-skill.md) — 简单产品模板
5. [`_templates/business-line-skill.md`](../_templates/business-line-skill.md) — 业务线模板
6. [`_templates/reference-module-template.md`](../_templates/reference-module-template.md) — Reference 模块模板
7. [`saas/admin-console/SKILL.md`](../saas/admin-console/SKILL.md) — 范例：Gold 级产品 Skill

读取完成后，进入 Step 1。

## 核心原则

- **访谈式推进**：每个 Step 只问 3-5 个问题，不要一次性倾倒所有问题
- **允许跳过**：设计师说"跳过"或"后面补充"时，标记该项为待补充，继续推进
- **即时展示**：每生成一个文件，立即展示给设计师确认，再进入下一步
- **引用范例**：在每个步骤中，主动展示 admin-console 对应部分作为参照
- **不走 VL 清洗**：本流程中 Figma 链接用于提取精确参数，不适用 AGENTS.md 的 Mode 2 输入处理规则

---

## Step 1：信息采集

向设计师提问以下信息（使用 AskQuestion 工具分批提问）：

### 第一批（必填）

1. **产品中文名**是什么？（如：管理后台、智能文档）
2. **所属业务线**是哪个？（saas / wps-docs / wps-office / wps-ai / wps-teams / wps-web / 其他）
3. **产品的技术栈**是什么？（react / vue2 / vue3 / qt / html）
4. **运行平台**？（web / h5 / miniprogram）

### 第二批（核心）

5. **用一句话描述**这个产品做什么、给谁用？
6. **核心页面清单**——列出所有页面类型（如：表格列表页、详情页、设置页、编辑页）
7. 每个页面用一句话描述其功能

### 第三批（可选，后续可补充）

8. 产品是否有**已有的设计规范文档**？（文字描述或链接均可）
9. 是否有**标准页面的 Figma 节点链接**？
10. 是否能列举 3-5 个**常见设计错误**？

### 信息校验

收集完信息后，检查以下内容并向设计师确认：

- 产品英文名是否已在 [GOVERNANCE.md](../../GOVERNANCE.md) 的产品标准命名对照表中注册。如未注册，建议一个 kebab-case 英文目录名，请设计师确认
- 业务线是否已存在。如果是新业务线，告知设计师需要先在 GOVERNANCE.md 注册
- 如果业务线已有 SKILL.md（如 `wps-docs/SKILL.md`），读取它了解业务线通用约束

---

## Step 2：目录初始化

根据采集的信息，创建文件结构：

### 2a. 业务线层（如果业务线文件夹已存在则跳过）

从 `_templates/business-line-skill.md` 生成：
- `{business-line}/SKILL.md`
- `{business-line}/CHANGELOG.md`（从 `_templates/CHANGELOG-template.md` 生成）

### 2b. 产品层

根据页面数量选择模板：
- 1-2 个页面 → `_templates/product-simple-skill.md`
- 3 个以上页面 → `_templates/product-complex-skill.md`

创建：
- `{business-line}/{product}/SKILL.md`
- `{business-line}/{product}/CHANGELOG.md`
- `{business-line}/{product}/references/`（空目录，后续填充）

### 2b-extra. 多页面产品的目录分组

如果产品有 3+ 页面类型，且页面间存在共享模块（如 App Shell、导航）和页面专属模块：

- **共享模块**放在 `references/` 根目录（如 `page-skeleton.md`、`navigation.md`、`icons.md`）
- **页面专属模块**放在 `references/{page-id}/`（如 `references/table-list-page/command-bar.md`）
- 每个页面类型各自的校对清单放在 `references/{page-id}/checklist.md`

单页面或简单产品（1-2 个页面）保持扁平 `references/` 结构即可，无需分组。

判断模块归属的规则：
- 所有页面都用的模块（导航框架、App Shell 骨架、图标映射、通用交互状态）→ 共享
- 只有某个页面类型用的模块（命令栏、表格、分页器）→ 页面专属

### 2c. 填充 frontmatter

用 Step 1 收集的信息填充产品 SKILL.md 的 frontmatter：

```yaml
---
name: {business-line}-{product}
description: {业务线中文名} - {产品中文名} ({官方英文名})。{一句话描述}
version: 0.1.0
business-line: {business-line}
product: {product}
tech-stack: {tech-stack}
platform: {platform}
depends-on:
  - kd-design-language
  - kd-foundation
  - kd-layout
pages:
  - id: {page-id}
    name: {页面中文名}
    keywords: [{关键词1}, {关键词2}, ...]
---
```

**keywords 生成规则**：为每个页面自动生成关键词，须包含：
- 产品中文名
- 产品官方英文名
- 页面中文名
- 用户可能的口语说法（如"后台管理"对应"管理后台"）

生成后展示给设计师确认。

---

## Step 3：逐页面深入

对 Step 1 中列出的每个页面，逐一深入采集信息。

### 对每个页面提问

1. **页面骨架结构**：这个页面的大区域是怎么划分的？（如：顶栏 + 侧边栏 + 内容区；或 头部 + 列表 + 底部操作栏）
2. **核心数据字段**：页面展示哪些字段？每个字段的类型和展示方式？
3. **组件选型**：用了哪些 KDesign 组件？有没有特殊的组件组合？
4. **关键交互**：有哪些重要的交互行为？（如：筛选、排序、批量操作、展开收起）
5. **硬性规则**：有哪些"必须这样做"或"绝对不能那样做"的规则？

### Figma 提取（当设计师提供链接时）

当设计师提供 Figma 链接时，使用 Figma MCP 工具提取精确参数：

**提取流程**：

1. 从 URL 中解析 `fileKey` 和 `nodeId`
   - URL 格式：`figma.com/design/:fileKey/:fileName?node-id=:nodeId`
   - 注意：URL 中 node-id 的 `-` 需要转换为 `:`

2. 调用 `get_design_context`（主要工具）
   - 传入 `fileKey` 和 `nodeId`
   - 返回代码结构、截图和元数据
   - 从返回的代码中提取：组件层级、Auto Layout 方向、padding、gap、尺寸

3. 调用 `get_variable_defs`（辅助工具）
   - 提取节点上绑定的设计变量（如颜色、字号）
   - 将 Figma 变量名映射为 KDesign CSS 变量名（如 `场景/填充/kd-color-fill-base` → `var(--kd-color-fill-base)`）

4. 如需了解整体结构，调用 `get_metadata`
   - 获取节点的子层级、位置、尺寸概览
   - 用于建立页面骨架的 ASCII 树

**提取结果的使用方式**：

- 精确数值（高度、padding、gap、圆角）→ 写入 references 的硬性规则
- 组件结构（Auto Layout 层级、Hug/Fill 模式）→ 写入页面骨架描述
- 设计变量 → 映射为 KDesign Token，写入状态变量表
- 节点链接 → 写入 Figma 节点索引表

### 范例展示

在问每个页面的骨架时，展示 admin-console 的结构作为参照。注意 admin-console 将骨架分为 **App Shell（共享）** 和 **页面专属内容区** 两层：

```text
App Shell（共享，所有页面通用）：
Page
├─ Top Info Bar (64px)
└─ Base
   ├─ Navigation (212px)
   └─ Content Shell
      └─ Content Stack
         └─ (页面类型各自定义)

表格列表页 Content Stack（页面专属）：
Content Stack
├─ Breadcrumb (40px)
├─ Description Bar (32px)
├─ Command Bar (40px)
├─ Table Area
└─ Pagination Area (52px)
```

告诉设计师："你的页面骨架不需要和这个一样，这只是一个参考格式。如果产品有多种页面类型，建议先描述共享的外壳结构，再逐个描述各页面类型的内容区。"

---

## Step 4：References 生成

根据 Step 3 收集的信息，决定是否需要拆分 reference 文件。

### 拆分规则

- 如果某个模块的规则超过 20 行 → 拆为独立 reference 文件
- 如果某个模块有独立的 Figma 节点来源 → 拆为独立 reference 文件
- 否则保留在 SKILL.md 中

### 多页面分组规则

对多页面产品（3+ 页面类型），拆出 reference 文件后还需判断其归属：

| 模块属性 | 存放路径 | 示例 |
|---------|---------|------|
| 所有页面共用 | `references/{module}.md` | page-skeleton.md、navigation.md、icons.md |
| 某个页面类型独有 | `references/{page-id}/{module}.md` | table-list-page/command-bar.md |
| 页面专属校对清单 | `references/{page-id}/checklist.md` | table-list-page/checklist.md |

单页面产品无需分组，所有 reference 直接放在 `references/` 根目录。

### Reference 文件结构

每个 reference 文件使用 `_templates/reference-module-template.md` 的结构生成。核心包含：

1. **模块标题**（一级标题 = 文件名）
2. **标准结构**（ASCII 树 + Auto Layout 描述）
3. **精确规格**（尺寸、间距、颜色变量——优先用 Figma 提取值）
4. **硬性规则**（用"必须"/"禁止"措辞）
5. **组件状态**（如有交互态：normal/hover/active/focus/disabled 的变量映射）
6. **Figma 对齐来源**（如有：记录节点链接和提取日期）

### 同步更新 SKILL.md

生成 reference 文件后，在产品 SKILL.md 中同步更新：

- **Reference 加载索引**：哪些任务该读哪些文件
- **核心页面结构**：用 ASCII 树描述（从 Figma 提取或设计师口述）
- **关键硬性规则**：从 references 中提取最重要的规则写入 SKILL.md

---

## Step 5：校对清单生成

如果产出目标是 Silver 或更高，为产品生成校对清单：
- 单页面产品 → `references/checklist.md`
- 多页面产品 → 每个页面类型各一份 `references/{page-id}/checklist.md`

### 生成规则

1. 遍历 SKILL.md 中的关键硬性规则 + 所有 reference 文件中的硬性规则
2. 每条规则转化为一个检查项
3. 采用**引用式**写法：只写检查点 + 规则来源，不重复具体数值

格式参照 admin-console 的 checklist.md：

```markdown
| # | 检查点 | 规则来源 |
|---|---|---|
| 1 | {检查内容的一句话描述} | `{来源文件}#{章节}` |
```

### 分组逻辑

按模块分组，每组一个二级标题（如"页面与基础结构"、"导航"、"表格"等）。

---

## Step 6：质量自检

所有文件生成后，对照 CONTRIBUTING.md 中的产出标准逐项检查。

### 自检清单

**Bronze 必检项**：

- [ ] frontmatter 所有必填字段都已填写（name / version / business-line / product / tech-stack / platform / depends-on / pages）
- [ ] 模块概述清晰（一句话说明产品做什么）
- [ ] 页面清单完整，每个页面有 keywords
- [ ] 每个页面有骨架结构描述
- [ ] 关键硬性规则已列出
- [ ] 缺失数据提问清单已列出

**Silver 必检项**（在 Bronze 基础上）：

- [ ] references/ 覆盖核心模块
- [ ] 每个 reference 有结构描述和精确数值
- [ ] Reference 加载索引已建立
- [ ] 校对清单已建立且为引用式

**Gold 必检项**（在 Silver 基础上）：

- [ ] 数据字段级规格完整
- [ ] Figma 节点索引已建立
- [ ] 交互状态完整覆盖
- [ ] 组件状态变量已映射到 KDesign Token

### 输出评级

自检完成后，向设计师报告：

```
当前产出评级：{Bronze / Silver / Gold}
已满足的检查项：{N}/{Total}
待补充的项目：
- {缺失项1}
- {缺失项2}
```

如果未达到 Bronze，指出最关键的缺失项，帮助设计师补充。

---

## Step 7：注册 + CHANGELOG

### 更新场景注册表

在 `kd-scenes/SKILL.md` 的场景注册表中添加一行：

```markdown
| {business-line} | {product} | {business-line}/{product}/SKILL.md | {tech-stack} | {关键词逗号分隔} | active |
```

如果产品尚未完全就绪，状态设为 `draft`。

### 更新 CHANGELOG

在产品的 CHANGELOG.md 中记录：

```markdown
## [0.1.0] - {当天日期}

### Added

- 初始版本：{产品中文名}场景 Skill
  - 页面清单：{列出页面名}
  - 覆盖模块：{列出 reference 文件对应的模块}
  - 覆盖平台：{platform}
```

### 更新业务线产品清单

在业务线 SKILL.md 的产品清单表中更新该产品的状态：

```markdown
| {产品中文名} | {product} | {tech-stack} | active |
```

---

## 后续迭代

完成初始版本后，告知设计师：

1. **提交 PR**：按 GOVERNANCE.md 的 Level C 流程，由业务线 Lead Review
2. **持续完善**：随时可以继续补充 references 或提升精度等级
3. **验证效果**：在 Cursor 中用产品关键词让 AI 生成页面，测试场景 Skill 是否被正确加载
4. **版本更新**：每次修改后更新 version + CHANGELOG

---

## 错误处理

| 场景 | 处理方式 |
|------|---------|
| 设计师不确定某个规则 | 标记为 `<!-- TODO: 待确认 -->`，不阻塞流程 |
| Figma 链接无法访问 | 提示设计师检查权限，改用文字描述 |
| 业务线不在已有列表中 | 先帮设计师在 GOVERNANCE.md 登记，再继续 |
| 产品英文名有争议 | 参考 GOVERNANCE.md 产品命名对照表，必要时请设计师与 Lead 确认 |
| 设计师提供的规则与 KDesign 基础规范冲突 | 提醒设计师：场景 Skill 不能覆盖 Layer 0-2 的规则，只能在其上添加业务约束 |
