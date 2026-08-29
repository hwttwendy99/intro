# 选择器列

## 来源

- Figma 文件：`KD-大屏-Component-v2.0`
- 节点：`表格/列/选择器`
- 节点 ID：`19382:11693`
- 参考链接：[Figma 节点](https://www.figma.com/design/1mgPElXGrVYXORivPeQstm/KD-%E5%A4%A7%E5%B1%8F-Component-v2.0?node-id=19382-11693&t=3CCocS4VIp9guqPL-4)

## 语义定位

该列是**表格内选择器列**，用于在行内通过 `KDSelect` 修改单个字段值。

它不是筛选器，也不是列头排序控件。判断依据：

- 列头使用菜单按钮样式展示 `选择`
- 单元格中复用 `选择器 Select / KDSelect`
- Select 类型为单选
- 当前样本为已选择态

## 列级结构

```text
选择器列
├── 列头
│   └── Menu Button / KDMenuButton
│       ├── 选择
│       └── arrow_down_s
└── 内容行 × N
    └── 单元/选择器
        └── Select / KDSelect
```

## 抽离后的列级规范

### 1. 列头

- 列宽：`160px`
- 列头背景：`场景/填充/kd-color-fill-light` → `#F5F5F5`
- 列头底部分割线：`场景/线条/kd-color-line-light` → `rgba(13,13,13,0.06)`
- 列头左 padding：`10px`
- 列头右 padding：`16px`
- 列头上下 padding：`8px`
- 列头内部使用 `KDMenuButton` 轻浅样式
- 列头文案：`选择`
- 列头尾随图标：`arrow_down_s`

### 2. 单元格外层

- 单元格左右 padding：`8px`
- 单元格上下 padding：`10px`
- 单元格底部分割线：`1px solid 场景/线条/kd-color-line-light`
- 单元格内部 gap：`2px`
- 单元格内容垂直居中
- 单元格内容允许 `overflow-clip`

### 3. Select 本体

当前样本使用 `选择器 Select / KDSelect`：

- 类型：`单选`
- 选择：`已选择 selected`
- 状态：`normal`
- 尺寸：`M`
- 最大行数：`false`
- 前置元素：`false`
- 增值标识：`false`

说明：

- 表格内选择器应复用 `KDSelect`
- 不应把 Select 展开态直接画在单元格内
- 当前样本是行内可编辑字段，不是表头筛选条件

> Token 变量完整值见 [tokens-reference.md](../../../../../../kd-foundation/tokens-reference.md)，此处不重复列举。

## 与现有样本的关系

- 与 `开关列.md` 同属行内编辑型列
- 与 `超链接列.md` 不同，选择器列修改字段值而不是跳转
- 与筛选区 Select 不同，选择器列嵌在表格单元格内

## 可复用实现规则

1. 表格内需要直接改枚举值时，可归入**行内编辑型单元格**
2. 选择器列必须复用 `KDSelect`
3. 列头如果带下拉语义，应使用 `KDMenuButton` 而不是普通文本
4. 表格内 Select 默认不展示展开菜单
5. 禁用、错误、聚焦、展开等状态应沿用 `KDSelect` 本体，不在表格层自定义

## 当前样本不应被误抽象的部分

- 不应把表头 `KDMenuButton` 误认为单元格筛选器
- 不应把单元格 Select 展开态固化在表格内
- 不应把单选选择器泛化为多选选择器
- 不应把当前选项内容沉淀为固定业务枚举

## 当前判断

- 已可沉淀为**行内选择器编辑列**规范
- 当前样本信息足够，不需要重新投喂 Figma
- 后续如果出现多选、禁用、错误、空值等状态，可作为选择器列变体继续补充
