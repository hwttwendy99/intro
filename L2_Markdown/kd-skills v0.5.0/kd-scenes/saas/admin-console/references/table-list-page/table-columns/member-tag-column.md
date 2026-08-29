# 成员标签列

## 来源

- Figma 文件：`开放平台 Daily 2025`
- 节点：`表格/列/成员标签`
- 节点 ID：`10118:130413`
- 参考链接：[Figma 节点](https://www.figma.com/design/ga8pTy4ori9dexlWzMHjaq/%E5%BC%80%E6%94%BE%E5%B9%B3%E5%8F%B0-Daily-2025?node-id=10118-130413&t=ghShexCO4g3ptzlt-4)

## 语义定位

该列是**管理后台表格中的“成员标签列”**，用于承载：

- 成员姓名
- 成员头像
- 以标签样式包裹的人员标识

它不是普通纯文本列，也不是完整图文列，而是**标签化的人物标识列**。

## 列级结构

```text
成员标签列
├── 列头
│   └── 表头文字
└── 内容行 × N
    └── 单元/成员标签
        └── 可交互标签 / KDTag
            ├── 头像容器
            │   └── XS Avatar
            └── 成员名称
```

## 抽离后的列级规范

### 1. 列头

> 通用列头样式（背景、分割线、padding、文字）见 `README.md#通用列头规范`。

### 2. 单元格外层

- 单元格高度模式延续表格标准行高：`48px`
- 单元格左右 padding：`16px`
- 单元格上下 padding：`12px`
- 单元格底部分割线：`1px solid 场景/线条/kd-color-line-light`
- 单元格内容垂直居中

### 3. 标签容器

当前单元内容不是裸文本，而是一个**KDTag 风格标签**：

- 标签背景：`场景/状态/kd-color-state-hover` → `rgba(13,13,13,0.06)`
- 标签圆角：`kd-border-radius-100` → `4px`
- 标签左右 padding：`6px`
- 标签上下 padding：`2px`
- 标签内部 gap：`4px`

结论：

- 这是**轻量标签承载成员身份**的模式
- 不应把它误解为“按钮”或“可删除 Tag”
- 当前样本更接近**静态成员识别标签 / 轻交互标签**

### 4. 头像

- 标签内前置一个 `XS Avatar`
- Avatar 类型：个人实例
- Avatar 形状：circle
- Avatar 状态：normal

从样本看，这里依赖现有 `KDAvatar` 组件，不应自定义头像样式。

### 5. 成员名称

- 文字字号：`13px`
- 行高：`20px`
- 字重：`400`
- 颜色：`var(--kd-color-text-primary)` → `#0D0D0D`
- 当前样本文本均为单行姓名
- 文本区使用 `whitespace-nowrap` 思路，不做多行展开


> Token 变量完整值见 [tokens-reference.md](../../../../../../kd-foundation/tokens-reference.md)，此处不重复列举。

## 可复用实现规则

### HTML / 前端实现建议

推荐结构：

```text
td
└── .cell-member-tag
    └── .member-tag
        ├── .member-tag__avatar
        └── .member-tag__label
```

推荐样式语义：

- `.cell-member-tag`
  - `display: flex`
  - `align-items: center`
- `.member-tag`
  - `display: inline-flex`
  - `align-items: center`
  - `gap: 4px`
  - `padding: 2px 6px`
  - `border-radius: 4px`
  - `background: var(--kd-color-state-hover)` 或等价 token

### 组件复用原则

- 头像必须复用 `KDAvatar`
- 标签容器可用现有 `KDTag` 语义或严格同构 HTML
- 不建议把“成员标签列”退化成：
  - 纯文本姓名
  - 图文列
  - 带删除按钮的标签

## 当前样本不应被误抽象的部分

以下信息暂不视为成员标签列公共规范：

- 当前示例中的具体人名
- 头像具体图片
- 该列宽 `144px` 作为所有成员标签列的固定宽度

其中：

- `144px` 更适合作为**当前业务页面参考宽度**
- 不应直接固化为所有成员标签列的统一宽度

## 与现有表格规则的关系

这份样本补充了 `table.md` 中没有细写的“标签型成员单元格”模式：

- `table.md` 负责行高、分割线、列宽逻辑、滚动和选中规则
- 本文件负责“头像 + 姓名标签”这种单元格内容模式

## 当前判断

现在已经有三类稳定列样本：

1. 图文列
2. 复选列
3. 成员标签列

当后续再补充：

- 状态列
- 标签列
- 数值列
- 操作列

就可以开始判断是否抽象出统一的 `单元格规范.md`，因为“成员标签列”已经明显属于**单元格内容形态规范**的范畴。
