# KDesign Skills 权限治理

本文件定义 KDesign Skills 框架的权限管理、变更流程和命名规范，适用于所有 `kd-*` 前缀的 Skill。

## 层级权限矩阵

| 层级 | 范围 | 可新增 | 可修改 | 审批要求 |
|---|---|---|---|---|
| Layer 0 基础层 | kd-design-language, kd-foundation | 核心团队 | 核心团队 | PR + 2 人 Review |
| Layer 1 共享布局层 | kd-layout | 核心团队 | 核心团队 | PR + 2 人 Review |
| Layer 1-T 目标层 | kd-components, kd-react, kd-vue2, kd-vue3, kd-qt-json | 核心团队 | 核心团队 | PR + 2 人 Review |
| Layer 2 模式层 | kd-patterns | BU Lead | 核心团队 + BU Lead | PR + 核心团队 Review |
| Layer 3 通用场景 | kd-scenes/_shared | 所有设计师 | 原作者 + BU Lead | PR + BU Lead Review |
| Layer 3 业务场景 | kd-scenes/{business-line}/{product} | 业务线设计师 | 业务线设计师 | PR + 业务线 Lead Review |
| Layer 4 QA 层 | kd-design-qa | 核心团队 | 核心团队 | PR + 2 人 Review |

**核心团队** = 设计系统维护团队（负责 Token、组件库、设计语言的统一性）。

> **Layer 1-T** = Layer 1 Target（目标层）。每个目标 Skill（kd-components、kd-react、kd-vue2 等）描述同一组件在不同输出格式下的 API，按输出目标互斥加载。

> **Layer 2** 已启用，当前包含 `modal-pattern.md`。新增 Pattern 由 BU Lead 提交，核心团队 Review。

## 建议的 Review 流程

> 目前团队尚无正式的 Skill 变更审批流程，以下是基于 Git PR 的建议方案。

### 流程概览

```
提交者创建分支 → 修改 Skill 文件 → 提交 PR → Reviewer 审批 → 合并 → 通知
```

### 三级审批

#### Level A：核心层变更（Layer 0 / 1 / 1-T / 4）

影响范围最大，所有业务线都会受到影响。

1. 提交者在 PR 描述中说明：**变更原因**、**影响范围**、**是否有破坏性变更**
2. 至少 **2 名核心团队成员** Review 并 Approve
3. 如果涉及 Token 值变更（颜色、字号等），需附上变更前后的视觉对比
4. 合并后通知所有业务线 Lead

#### Level B：模式层变更（Layer 2）

影响跨业务线的页面模式。

1. 由 **BU Lead** 或核心团队成员提交
2. 至少 **1 名核心团队成员** Review 并 Approve
3. PR 描述需说明该模式被哪些业务线使用
4. 合并后通知使用该模式的业务线

#### Level C：场景层变更（Layer 3）

影响单个业务线。

1. 业务线任何设计师均可提交
2. **业务线 Lead** Review 并 Approve 即可
3. 通用场景（`_shared/`）需额外获得 **1 名其他业务线 Lead** 的 Approve

### PR 描述模板

```markdown
## 变更类型

- [ ] 新增 Skill
- [ ] 修改现有 Skill
- [ ] 修复错误
- [ ] 其他

## 变更说明

{简要描述变更内容和原因}

## 影响范围

- 层级：Layer {0/1/2/3/4}
- 影响的 Skill 文件：{列出文件路径}
- 影响的业务线：{列出受影响的业务线，或"全部"}

## 破坏性变更

- [ ] 是（请说明迁移方案）
- [ ] 否

## 检查清单

- [ ] 符合本文件定义的权限要求
- [ ] 已更新对应的 CHANGELOG
- [ ] 已通过 kd-design-qa checklist 验证（如适用）
```

## 变更通知机制

| 变更层级 | 通知范围 | 建议渠道 |
|---|---|---|
| Layer 0-1 / 1-T（Token / 组件 / 目标层） | 全部设计师 | 设计系统群公告 |
| Layer 2（页面模式） | 使用该模式的业务线 | 业务线群 @ Lead |
| Layer 3 通用场景 | 全部设计师 | 设计系统群 |
| Layer 3 业务场景 | 该业务线设计师 | 业务线内部 |
| Layer 4（QA 规则） | 全部设计师 | 设计系统群公告 |

### 破坏性变更的额外要求

当变更可能导致现有设计稿不兼容时（如 Token 值修改、组件 class 名变更）：

1. PR 标题加 `[BREAKING]` 前缀
2. 提供**迁移指南**（旧值→新值的映射表）
3. 给出**过渡期**（建议至少 2 周），期间新旧值并存
4. 在设计系统群发布公告，明确截止日期

## Skill 命名规范

### 文件命名

- 全部小写，单词用短横线连接
- 业务线和产品目录名统一使用**官方英文名**（小写 + 短横线）
- Skill `name` 字段格式：`{business-line}-{product}`，全局唯一

```
saas/admin-console/SKILL.md     ← name: saas-admin-console
wps-docs/docs/SKILL.md          ← name: wps-docs-docs
wps-docs/airpage/SKILL.md       ← name: wps-docs-airpage
```

### 业务线代号

| 代号 | 中文名 | 官方英文名 | 主要技术栈 |
|------|--------|-----------|-----------|
| `wps-office` | WPS Office / 金山办公 | WPS Office | QT |
| `wps-docs` | 金山文档 | WPS Docs | React / Vue2 |
| `wps-teams` | WPS 协作 | WPS Teams | Vue2 / React |
| `saas` | SaaS | SaaS | Vue2 |
| `wps-ai` | WPS AI | WPS AI | Vue3 |
| `wps-web` | WPS 网站 | -- | -- |

> 新增业务线时，在此表中补充代号，并在 `kd-scenes/` 下创建对应文件夹。

### 产品标准命名对照表

产品目录名 = 官方英文名小写 + 短横线。此表为产品命名的**唯一权威源**。

| 中文名 | 官方英文名 | 目录名 |
|--------|-----------|--------|
| WPS 365 | WPS 365 | -- |
| WPS Office / 金山办公 | WPS Office | -- |
| 金山文档 | WPS Docs | -- |
| WPS 协作 | WPS Teams | -- |
| 文字 | Docs | `docs` |
| 表格 | Sheets | `sheets` |
| 演示 | Slides | `slides` |
| PDF | PDF | `pdf` |
| 智能文档 | AirPage | `airpage` |
| 智能表格 | AirSheet | `airsheet` |
| 智能表单 | Forms | `forms` |
| 多维表格 | DBSheet | `dbsheet` |
| 流程图 | FlowChart | `flowchart` |
| 思维导图 | MindMap | `mindmap` |
| 海报/设计 | Poster | `poster` |
| 文档 | Document | `document` |
| Office文档 | Office Document | `office-document` |
| 管理后台 | Admin Console | `admin-console` |
| 稻壳 | Docer | `docer` |
| 消息、聊天 | Messages | `messages` |
| 邮箱 | Email | `email` |
| 会议 | Meeting | `meeting` |
| 日历 | Calendar | `calendar` |
| WPS云盘 | WPS Drive | `wps-drive` |
| WPS看图 | WPS Photos | `wps-photos` |
| WPS看图-编辑器 | WPS Photos Editor | `wps-photos-editor` |
| 电子签 | Request E-signatures | `e-signatures` |
| WPS电子签 | WPS Request E-signatures | `wps-e-signatures` |
| WPS AI | WPS AI | `wps-ai` |

> 新增产品时，先在此表登记中英文名和目录名，再在对应业务线文件夹下创建产品目录。

## 版本管理

所有 Skill 使用 [SemVer](https://semver.org/) 版本号：

| 变更类型 | 版本升级 | 示例 |
|---|---|---|
| 修正错误、补充说明 | Patch `0.0.x` | 修正按钮 padding 值 |
| 新增页面、新增字段 | Minor `0.x.0` | 场景增加"设置"页面 |
| 结构重构、破坏性变更 | Major `x.0.0` | Token 变量重命名 |

### 版本更新检查清单

1. 更新 Skill frontmatter 中的 `version` 字段
2. 在对应的 `CHANGELOG.md` 中记录变更
3. 如有破坏性变更，遵循上述额外要求

## 跨目标同步规则

Layer 1-T 的各目标 Skill（kd-components、kd-react、kd-vue2、kd-vue3、kd-qt-json）描述的是同一组件在不同输出格式下的 API。当组件发生以下变更时，需要跨目标同步：

### 必须同步的变更

| 变更类型 | 示例 | 要求 |
|---------|------|------|
| 新增组件 | 新增 Drawer 组件 | 所有已有目标 Skill 都需新增对应文档 |
| 删除组件 | 移除某个废弃组件 | 所有已有目标 Skill 同步移除 |
| 组件改名 | Tag → Label | 所有已有目标 Skill 同步改名 |
| 新增/删除变体 | Button 新增 ghost 类型 | 所有已有目标 Skill 同步更新 |

### 不需要同步的变更

- 某个目标 Skill 内部的格式调整（如 kd-react 调整示例代码风格）
- 仅影响单一框架的 API 差异（如 React 特有的 ref 用法）

### PR 要求

跨目标变更的 PR 描述中必须包含：

```markdown
## 跨目标同步

- [ ] kd-components（HTML）：已更新 / 不适用
- [ ] kd-react（React）：已更新 / 不适用
- [ ] kd-vue2（Vue2）：已更新 / 不适用 / 未接入
- [ ] kd-vue3（Vue3）：已更新 / 不适用 / 未接入
- [ ] kd-qt-json（QT JSON）：已更新 / 不适用 / 未接入
```

### 目标 Skill 命名规范

新增目标 Skill 统一采用 `kd-{target}` 命名模式：

| 命名 | 输出目标 |
|------|---------|
| `kd-components` | HTML+CSS 设计稿（历史命名，保持不变） |
| `kd-react` | React @kdocs/kdesign |
| `kd-vue2` | Vue2 组件库 |
| `kd-vue3` | Vue3 组件库 |
| `kd-qt-json` | QT JSON 中间层 |
