# 单元格渲染模式

本文件补充“列类型选型”之外的**HTML 预览渲染落点**：当页面已经确定列类型后，如何把标题、多行文本、状态元素、缩略图占位、操作按钮等单元格内容稳定落成可复用结构，避免每个页面在 `renderRow()` 里各自拼一套近似 HTML。

## 使用边界

- 本文件面向 **HTML 预览 / 设计稿** 场景。
- 表格行为（sticky、hover、selected、全选 / 半选、分页联动）仍由 `../_js/table-list-page.js` 承接。
- 列类型判断仍以 [README.md](./README.md) 为准；本文件只负责“选定列类型后的渲染模式”。

## 标准资产

后续管理后台表格页如需在页面内声明 `renderRow()`，优先复用以下资产：

- 样式：`references/table-list-page/_css/table-cell-renderers.css`
- 渲染 helper：`references/table-list-page/_js/table-cell-renderers.js`

页面内建议通过 `window.KdAdminTableCellRenderers` 生成单元格片段，而不是直接在 `renderRow()` 中手写状态图标 SVG、双行文本结构、操作按钮组合类名。

## 推荐渲染模式

### 1. 主文本列

适用于标题、名称、资源名等非链接文本字段。

```js
renderers.text(row.title)
```

- 默认 class：`.kd-admin-text-break`
- 允许换行，不自动转成蓝色链接

### 2. 主副两行文本列

适用于“主分类 + 次分类”“主标题 + 副标题”等双层信息。

```js
renderers.stackedText(row.category1, row.category2)
```

- 外层使用 `.kd-admin-cell-stack`
- 次级信息统一走 `.kd-admin-cell-secondary`

### 3. 状态列

适用于“已启用 / 未启用 / 管理员禁用”等单状态字段。

```js
renderers.status(row.status, statusMap)
```

- 结构固定为“图标 + 文本”
- 状态色只通过 `.kd-admin-status--success / --neutral / --error` 切换
- 页面内不得再手写一套状态图标路径和颜色类
- 若不同模块存在不同状态枚举，优先在页面 config 中声明 `statusMap`，再传给 `renderers.status(...)`，避免把业务枚举持续堆入共享 helper

### 4. 缩略图占位列

适用于还没有真实图片、仅需演示媒体位结构的场景。

```js
renderers.thumbPlaceholder('封面')
```

- 统一使用 `64 × 36` 占位块
- 只承接“媒体存在感”与布局占位，不承接真实上传或预览逻辑

### 5. 操作列

适用于编辑 / 详情 / 删除这类行级动作。

```js
renderers.actions([
  { label: '编辑' },
  { label: '详情' },
  { label: '删除', kind: 'danger' }
])
```

- 外层固定为 `.kd-admin-action-group`
- 普通动作统一输出 `Light + Highlight Button`
- 危险动作统一输出 `Light + Danger Button`
- 页面内不要再逐页手写“编辑是 highlight、删除是 danger”的组合细节

## 页面生成约束

1. `renderRow()` 可以保留，因为业务字段、列顺序、空值规则属于页面数据层。
2. `renderRow()` 中的**视觉片段**必须优先走共享 helper，而不是散落的字符串拼接。
3. 如果页面需要新增一种单元格视觉模式，应优先：
   - 先补本文件的模式说明
   - 再补对应 `_css/` 或 `_js/` 共享资产
   - 最后回写页面实现
4. 不得只在单页 HTML 中偷偷增加新 class 或新 SVG 结构而不回写 reference。

## 适合抽进 helper 的内容

- 状态图标路径与颜色映射
- 双行文本堆叠结构
- 行内按钮组结构与危险按钮判定
- 通用缩略图占位结构

## 不适合抽进 helper 的内容

- 具体业务文案
- 列顺序与列宽
- 某页专属的数据枚举
- 某页专属的跳转 URL 或按钮事件
