# Table 表格

> 设计决策 → [component-decision.md](../kd-design-language/component-decision.md#数据展示选型)
> **行内操作按钮规则（所有输出目标共享）** → [context-constraints.md](../kd-design-language/context-constraints.md#表格行内操作按钮)

## 规格

### 基础规格

- font-size: **14px**（Table 是例外，使用 base 字号）
- Header row: height 36px, bg `#F5F5F5`, font-size 13px, font-weight 400
- Cell padding: `16px 12px`, line-height 24px
- Row border: `border-bottom: 1px solid #F5F5F5`
- Row max-height: 56px
- Row hover: bg `rgba(0,0,0,0.04)`, 首/末 cell `border-radius: 8px`, border-color `#FFFFFF`
- 选中行: bg `rgba(10,108,255,.06)`

### 变体类型

| 变体 | class | 说明 |
|---|---|---|
| 默认表格 | `.kd-table` | 无外边框，行底线分隔 |
| 带边框 | `.kd-table.kd-table-bordered` | 外边框 + 列边框 |
| 斑马纹 | `.kd-table.kd-table-striped` | 奇偶行交替背景 |
| 固定表头 | `.kd-table.kd-table-fixed-header` | 表头 sticky，tbody 可滚动 |
| 隐藏表头 | `.kd-table.kd-table-no-header` | 不显示 thead |

### 行状态

| 状态 | class | 说明 |
|---|---|---|
| 默认 | `.kd-table-row` | — |
| Hover | `.kd-table-row:hover` | 背景色变化 + 圆角 |
| 选中 | `.kd-table-row.is-selected` | 蓝色浅背景 |
| 禁用 | `.kd-table-row.is-disabled` | 半透明 + 不可交互 |
| 展开 | `.kd-table-row.is-expanded` | 下方出现展开内容行 |

### 列对齐

| 对齐 | class | 说明 |
|---|---|---|
| 左对齐 | 默认 | text-align: left |
| 居中 | `.kd-table-cell-center` | text-align: center |
| 右对齐 | `.kd-table-cell-right` | text-align: right |

### 选择列

- 选择列位于最左侧，宽度 48px
- 表头选择列包含全选 Checkbox
- Hover 时 Checkbox 显示（可通过 `.kd-table-hover-select` 实现 hover 显示）

## HTML 参考

### 默认表格

```html
<!-- [Table: default] -->
<div class="kd-table">
  <table>
    <thead>
      <tr class="kd-table-header-tr">
        <th class="kd-table-header-th">姓名</th>
        <th class="kd-table-header-th">部门</th>
        <th class="kd-table-header-th">职位</th>
        <th class="kd-table-header-th">操作</th>
      </tr>
    </thead>
    <tbody>
      <tr class="kd-table-row">
        <td class="kd-table-cell">张三</td>
        <td class="kd-table-cell">工程部</td>
        <td class="kd-table-cell">前端工程师</td>
        <td class="kd-table-cell">
          <button class="kd-button kd-button-light kd-button-sm">编辑</button>
          <button class="kd-button kd-button-light kd-button-sm kd-button-danger" style="margin-left:4px">删除</button>
        </td>
      </tr>
      <tr class="kd-table-row">
        <td class="kd-table-cell">李四</td>
        <td class="kd-table-cell">设计部</td>
        <td class="kd-table-cell">UI设计师</td>
        <td class="kd-table-cell">
          <button class="kd-button kd-button-light kd-button-sm">编辑</button>
          <button class="kd-button kd-button-light kd-button-sm kd-button-danger" style="margin-left:4px">删除</button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
```

### 带边框表格

```html
<!-- [Table: bordered] -->
<div class="kd-table kd-table-bordered">
  <table>
    <thead>
      <tr class="kd-table-header-tr">
        <th class="kd-table-header-th">ID</th>
        <th class="kd-table-header-th">姓名</th>
        <th class="kd-table-header-th">年龄</th>
        <th class="kd-table-header-th">身高</th>
      </tr>
    </thead>
    <tbody>
      <tr class="kd-table-row">
        <td class="kd-table-cell">1</td>
        <td class="kd-table-cell">小明</td>
        <td class="kd-table-cell">20</td>
        <td class="kd-table-cell">174</td>
      </tr>
      <tr class="kd-table-row">
        <td class="kd-table-cell">2</td>
        <td class="kd-table-cell">小华</td>
        <td class="kd-table-cell">23</td>
        <td class="kd-table-cell">182</td>
      </tr>
    </tbody>
  </table>
</div>
```

### 斑马纹表格

```html
<!-- [Table: striped] -->
<div class="kd-table kd-table-striped">
  <table>
    <thead>
      <tr class="kd-table-header-tr">
        <th class="kd-table-header-th">ID</th>
        <th class="kd-table-header-th">姓名</th>
        <th class="kd-table-header-th">年龄</th>
      </tr>
    </thead>
    <tbody>
      <tr class="kd-table-row">
        <td class="kd-table-cell">1</td>
        <td class="kd-table-cell">小明</td>
        <td class="kd-table-cell">20</td>
      </tr>
      <tr class="kd-table-row">
        <td class="kd-table-cell">2</td>
        <td class="kd-table-cell">小华</td>
        <td class="kd-table-cell">23</td>
      </tr>
      <tr class="kd-table-row">
        <td class="kd-table-cell">3</td>
        <td class="kd-table-cell">小刘</td>
        <td class="kd-table-cell">19</td>
      </tr>
    </tbody>
  </table>
</div>
```

### 带选择列

```html
<!-- [Table: with selection] -->
<div class="kd-table kd-table-selectable">
  <table>
    <thead>
      <tr class="kd-table-header-tr">
        <th class="kd-table-header-th kd-table-th-select" style="width:48px">
          <label class="kd-checkbox"><span class="kd-checkbox-input"><input type="checkbox" class="kd-checkbox-original"><span class="kd-checkbox-inner"></span></span></label>
        </th>
        <th class="kd-table-header-th">姓名</th>
        <th class="kd-table-header-th">部门</th>
        <th class="kd-table-header-th">操作</th>
      </tr>
    </thead>
    <tbody>
      <tr class="kd-table-row">
        <td class="kd-table-cell kd-table-cell-select" style="width:48px">
          <label class="kd-checkbox"><span class="kd-checkbox-input"><input type="checkbox" class="kd-checkbox-original"><span class="kd-checkbox-inner"></span></span></label>
        </td>
        <td class="kd-table-cell">张三</td>
        <td class="kd-table-cell">工程部</td>
        <td class="kd-table-cell">
          <button class="kd-button kd-button-light kd-button-sm">编辑</button>
        </td>
      </tr>
      <tr class="kd-table-row is-selected">
        <td class="kd-table-cell kd-table-cell-select" style="width:48px">
          <label class="kd-checkbox"><span class="kd-checkbox-input is-checked"><input type="checkbox" class="kd-checkbox-original" checked><span class="kd-checkbox-inner"></span></span></label>
        </td>
        <td class="kd-table-cell">李四</td>
        <td class="kd-table-cell">设计部</td>
        <td class="kd-table-cell">
          <button class="kd-button kd-button-light kd-button-sm">编辑</button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
```

### 可展开行

```html
<!-- [Table: expandable] -->
<div class="kd-table">
  <table>
    <thead>
      <tr class="kd-table-header-tr">
        <th class="kd-table-header-th kd-table-th-expand" style="width:40px"></th>
        <th class="kd-table-header-th">姓名</th>
        <th class="kd-table-header-th">年龄</th>
        <th class="kd-table-header-th">身高</th>
      </tr>
    </thead>
    <tbody>
      <tr class="kd-table-row is-expanded">
        <td class="kd-table-cell kd-table-cell-expand" style="width:40px">
          <span class="kd-table-expand-icon is-expanded">▾</span>
        </td>
        <td class="kd-table-cell">小明</td>
        <td class="kd-table-cell">20</td>
        <td class="kd-table-cell">174</td>
      </tr>
      <tr class="kd-table-expanded-row">
        <td class="kd-table-expanded-cell" colspan="4">
          <div class="kd-table-expanded-content">我叫小明，我今年20岁了，身高174</div>
        </td>
      </tr>
      <tr class="kd-table-row">
        <td class="kd-table-cell kd-table-cell-expand" style="width:40px">
          <span class="kd-table-expand-icon">▸</span>
        </td>
        <td class="kd-table-cell">小华</td>
        <td class="kd-table-cell">23</td>
        <td class="kd-table-cell">182</td>
      </tr>
    </tbody>
  </table>
</div>
```

### 固定表头（可滚动）

```html
<!-- [Table: fixed header] -->
<div class="kd-table kd-table-fixed-header" style="max-height: 200px; overflow-y: auto;">
  <table>
    <thead>
      <tr class="kd-table-header-tr">
        <th class="kd-table-header-th">ID</th>
        <th class="kd-table-header-th">姓名</th>
        <th class="kd-table-header-th">年龄</th>
      </tr>
    </thead>
    <tbody>
      <tr class="kd-table-row"><td class="kd-table-cell">1</td><td class="kd-table-cell">小明</td><td class="kd-table-cell">20</td></tr>
      <tr class="kd-table-row"><td class="kd-table-cell">2</td><td class="kd-table-cell">小华</td><td class="kd-table-cell">23</td></tr>
      <tr class="kd-table-row"><td class="kd-table-cell">3</td><td class="kd-table-cell">小刘</td><td class="kd-table-cell">19</td></tr>
      <tr class="kd-table-row"><td class="kd-table-cell">4</td><td class="kd-table-cell">小黄</td><td class="kd-table-cell">29</td></tr>
      <tr class="kd-table-row"><td class="kd-table-cell">5</td><td class="kd-table-cell">小王</td><td class="kd-table-cell">25</td></tr>
      <tr class="kd-table-row"><td class="kd-table-cell">6</td><td class="kd-table-cell">小李</td><td class="kd-table-cell">22</td></tr>
    </tbody>
  </table>
</div>
```

### 空状态

```html
<!-- [Table: empty] -->
<div class="kd-table">
  <table>
    <thead>
      <tr class="kd-table-header-tr">
        <th class="kd-table-header-th">ID</th>
        <th class="kd-table-header-th">姓名</th>
        <th class="kd-table-header-th">年龄</th>
      </tr>
    </thead>
    <tbody>
      <tr class="kd-table-row-empty">
        <td class="kd-table-cell" colspan="3">
          <div class="kd-table-empty">暂无数据</div>
        </td>
      </tr>
    </tbody>
  </table>
</div>
```

### 加载中

```html
<!-- [Table: loading] -->
<div class="kd-table kd-table-loading">
  <div class="kd-table-loading-overlay">
    <div class="kd-loading kd-loading-md">
      <span class="kd-loading-icon"></span>
      <span class="kd-loading-text">加载中...</span>
    </div>
  </div>
  <table>
    <thead>
      <tr class="kd-table-header-tr">
        <th class="kd-table-header-th">ID</th>
        <th class="kd-table-header-th">姓名</th>
        <th class="kd-table-header-th">年龄</th>
      </tr>
    </thead>
    <tbody>
      <tr class="kd-table-row"><td class="kd-table-cell">1</td><td class="kd-table-cell">小明</td><td class="kd-table-cell">20</td></tr>
    </tbody>
  </table>
</div>
```

### 禁用行

```html
<!-- [Table: disabled row] -->
<div class="kd-table">
  <table>
    <thead>
      <tr class="kd-table-header-tr">
        <th class="kd-table-header-th">姓名</th>
        <th class="kd-table-header-th">状态</th>
      </tr>
    </thead>
    <tbody>
      <tr class="kd-table-row">
        <td class="kd-table-cell">张三</td>
        <td class="kd-table-cell">正常</td>
      </tr>
      <tr class="kd-table-row is-disabled">
        <td class="kd-table-cell">李四</td>
        <td class="kd-table-cell">已禁用</td>
      </tr>
    </tbody>
  </table>
</div>
```

## CSS 来源

完整样式见 [`_css/table.css`](_css/table.css)，生成 HTML 时直接复制该文件内容到 `<style>` 中。
