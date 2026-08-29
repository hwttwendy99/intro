# 复选列

## 来源

- Figma 文件：`开放平台 Daily 2025`
- 外层节点：`Frame 15782`
- 参考列节点：`表格/列/复选`
- 参考链接：[Figma 节点](https://www.figma.com/design/ga8pTy4ori9dexlWzMHjaq/%E5%BC%80%E6%94%BE%E5%B9%B3%E5%8F%B0-Daily-2025?node-id=10113-130309&t=ghShexCO4g3ptzlt-4)

## 语义定位

该列是**管理后台表格中的批量选择列 / 行选择列**，用于承载：

- 表头全选 Checkbox
- 行级 Checkbox
- 半选态（部分选中）
- 已选态
- 未选态

当前样本不是一个单独状态，而是将三列 `48px` 复选列并排展示，用于对照三种选择状态：

1. 未选列
2. 半选列表头 + 行内混合列
3. 已选列

## 列级结构

```text
复选列
├── 列头
│   └── KDCheckBox
└── 内容行 × N
    └── 单元/复选
        └── KDCheckBox
```

## 抽离后的列级规范

### 1. 列宽

- 当前列宽固定为 `48px`
- 这是强语义列，不参与普通数据列的 Fill 分配
- 复选列固定 48px 的权威规则以本列规范为准，并与 `table-columns/README.md` 的控制列规则一致

结论：

- 复选列应视为**固定功能列**
- 不应被当作普通文本列或内容列复用

### 2. 列头

- 列头背景：`场景/填充/kd-color-fill-light` → `#F5F5F5`
- 列头底部分割线：`场景/线条/kd-color-line-light` → `rgba(13,13,13,0.06)`
- 列头左右 padding：`16px`
- 列头上下 padding：`12px`
- 列头内容为单个 `KDCheckBox`
- 当前样本中列头未放文字，说明复选列默认只用 Checkbox 表达全选能力

### 3. 单元格

- 每行单元格左右 padding：`16px`
- 每行单元格上下 padding：`16px`
- 单元格底部分割线：`1px solid 场景/线条/kd-color-line-light`
- 单元格内容仅承载一个 Checkbox
- 内容水平上不需要再额外分栏或文字

### 4. Checkbox 状态样本

当前样本通过三列并排展示了三种典型状态：

#### 4.1 未选列

- 表头：未选
- 行内：全部未选

适合作为：

- 默认初始态
- 没有选中任何行时的基线状态

#### 4.2 半选列

- 表头：半选
- 行内：未选与已选混合

适合作为：

- “当前页部分选中”
- “局部选择已生效但未全选”

这说明表头 Checkbox 需要支持 **indeterminate / 半选态**

#### 4.3 已选列

- 表头：已选
- 行内：全部已选

适合作为：

- 当前页全选
- 全量批量勾选

> Token 变量完整值见 [tokens-reference.md](../../../../../../kd-foundation/tokens-reference.md)，此处不重复列举。

## Checkbox 视觉抽离

虽然当前节点主要是列样本，但从变量可以确认 Checkbox 在表格列场景中的关键色语义：

- 未选边框：`kd-color-line-heavy`
- 已选底色：`kd-color-public-normal`
- 已选勾选图标：`kd-color-icon-white`

这与现有 `table.md` 中 Checkbox 规则一致，可作为列样本再次印证。

## 可复用实现规则

### HTML / 前端实现建议

- 表头使用真实 Checkbox，或 `button + role="checkbox"` 的等价语义
- 行内每个 Checkbox 必须独立可聚焦
- 半选态必须使用语义状态表达，不得只画一条横线伪装但不暴露状态

推荐结构：

```text
th.select-column
└── checkbox

td.select-column-cell
└── checkbox
```

推荐行为：

- 点击表头：
  - 全未选 -> 全选
  - 部分选中 -> 全选
  - 全选 -> 清空
- 行级勾选变化后，表头态根据全量状态自动更新为：
  - 未选
  - 半选
  - 已选

### 语义要求

- 原生 input 方案：
  - 表头使用 `input[type="checkbox"]`
  - 半选态通过 `indeterminate = true`
- ARIA 方案：
  - `role="checkbox"`
  - `aria-checked="false" | "mixed" | "true"`

## 与现有表格规则的关系

该样本与 `table.md` 中这些规则高度一致，并补充了 Figma 实际样本支撑：

- 复选框列固定 `48px`
- Checkbox 必须可键盘聚焦
- 行选中状态需要同步到整行
- 表头需支持全选 / 半选 / 取消全选

因此这份文件不是替代 `table.md`，而是把“复选列”作为一个独立列模式固化下来。

## 当前样本不应被误抽象的部分

以下信息暂不视为复选列公共规范：

- 当前样本展示了多少行
- 哪几行被选中
- 三列并排展示这种“状态对照排版”

这些只是当前 Figma 为了展示状态而使用的对照方式，不代表实际页面必须把三种复选列并排放置。

## 当前判断

等后续继续喂养：

- 状态列
- 标签列
- 数值列
- 操作列

之后可以进一步归纳出：

- `表格列规范.md`：负责列宽、列头、固定列、内容模式分类
- `单元格规范.md`：负责图文、复选、标签、数值、状态、操作等单元形态
