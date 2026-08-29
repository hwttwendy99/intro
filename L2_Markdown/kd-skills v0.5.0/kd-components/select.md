# Select 下拉选择

触发器复用 Input 样式；下拉列表由 Menu 组件渲染。

## 尺寸变体

Select 尺寸与 Input 保持一致，通过外层 `.kd-input` 的 size class 控制：

| Size | class | 触发器高度 |
|---|---|---|
| Small | `kd-input-small` | 24px |
| Medium（默认） | `kd-input-medium` | 28px |
| Large | `kd-input-large` | 32px |

## 触发器

- 箭头图标: 16x16px, stroke `#757575`, stroke-width 1.2, stroke-linecap/linejoin round
  - 收起: `<path d="M12 6.5L8.00718 10H7.99262L4 6.5"/>`
  - 展开: `<path d="M12 9.5L8.00718 6H7.99262L4 9.5"/>` 或 arrow_down 添加 `rotate(180deg)`
- Open 状态: 箭头 `rotate(180deg)`, border-color `#0A6CFF`

### 箭头 SVG 源码

```html
<!-- Select 箭头（收起态，向下） -->
<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M12 6.5L8.00718 10H7.99262L4 6.5" stroke="#757575" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
```

### 红线：`<input class="kd-input-inner">` 不可省略

`.kd-input-inner` 是 Input/Select 组件的**高度锚点**（Medium = 28px、Large = 32px 等尺寸全靠它的 `line-height + padding` 撑起）。任何 Select 变体——包括颜色选择器、图标选择器等非纯文本内容——都**必须保留** `<input class="kd-input-inner">`。

非文本内容作为 **prefix** 放在 `<input>` 前方，不得替代 `<input>`。

## 状态

| 状态 | 触发器表现 | class |
|---|---|---|
| Default | 灰色边框 `#E5E5E5` | — |
| Hover | 边框变深 `#D4D4D4` | — (CSS :hover) |
| Open / Focus | 蓝色边框 `#0A6CFF`，箭头旋转 180° | `.is-open` on trigger |
| Error | 红色边框 `#E12F3C` | `.kd-select-status-error` |
| Warning | 橙色边框 `#E2651A` | `.kd-select-status-warning` |
| Disabled | 灰色背景 `#EBEBEB`，opacity 0.4 | `.is-disabled` |

## 可清空（allowClear）

当 Select 已有选中值且 hover 时，箭头位置显示清除按钮（×）：

- 清除按钮: 16x16px, color `#757575`, hover `#555`
- class: `.kd-select-clear`
- 仅 hover 触发器时出现，取代箭头位置

## 多选模式

多选时选中项以 Tag 形式展示在触发器内：

- Tag 样式: `padding: 2px 4px 2px 8px`, `margin: 2px 0 2px 4px`, bg `#F5F5F5`, radius 4px, font-size 13px
- Tag 关闭按钮: 16x16px, color `#555555`
- 溢出处理: 当 Tag 超过触发器宽度时，折行显示（触发器自动增高）
- maxShowCount: 超过 N 个后显示 `+X` 收起标签

### 多选 HTML 结构

```html
<!-- [Select: multiple] -->
<div class="kd-input kd-input-medium" style="width:300px">
  <div class="kd-select-trigger">
    <div class="kd-input-wrap">
      <span class="kd-select-tag">黄金糕<button class="kd-select-tag-close"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4.5 4.5L11.5 11.5M11.5 4.5L4.5 11.5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg></button></span>
      <span class="kd-select-tag">双皮奶<button class="kd-select-tag-close"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4.5 4.5L11.5 11.5M11.5 4.5L4.5 11.5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg></button></span>
      <input class="kd-input-inner" placeholder="" readonly style="flex:0 0 0;min-width:0;padding:0" />
      <span class="kd-select-arrow"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M12 6.5L8.00718 10H7.99262L4 6.5" stroke="#757575" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
    </div>
  </div>
</div>
```

## 可搜索（showSearch）

开启搜索时，触发器中的 input 变为可输入状态（移除 `readonly`），用户输入关键词过滤选项。

- 搜索图标: 使用 `_icons/magnifier.svg` 作为前置图标
- input: 移除 `readonly`，改为 `placeholder="搜索"`

## 下拉面板（Menu 组件）

- Panel: `padding: 8px`, `border-radius: 8px`, `border: 1px solid #E5E5E5`, box-shadow-large
- 列表项: `padding: 5px 8px 5px 32px`, `margin-bottom: 4px`, `border-radius: 6px`, font-size 14px
- Tick 图标: `position: absolute; left: 14px`, 16x16px, color `#0A6CFF`
- 选中项文字颜色不变（仍 text-primary），仅 tick 变蓝
- Hover 项: bg `#F5F5F5`

### 禁用选项

- 文字颜色: `#B8B8B8` (text-tertiary)
- cursor: `not-allowed`
- 不响应 hover 高亮
- class: `.kd-menu-item-disabled`

### 分组选项

- 分组标题: font-size 12px, color `#999`, padding `4px 8px`, font-weight 600
- 分组之间无额外分割线
- class: `.kd-select-group-title`

### 空状态

当没有匹配项时显示空状态：
- 文字: "暂无数据", font-size 13px, color `#999`, text-align center, padding `24px 0`

### 加载状态

搜索/远程加载时面板内显示 Loading：
- 使用 Loading 组件（small 尺寸），居中显示

## HTML 参考

```html
<!-- [Select: single default] -->
<div class="kd-input kd-input-medium" style="width:200px">
  <div class="kd-select-trigger">
    <div class="kd-input-wrap">
      <input class="kd-input-inner" placeholder="请选择" readonly />
      <span class="kd-select-arrow"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M12 6.5L8.00718 10H7.99262L4 6.5" stroke="#757575" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
    </div>
  </div>
</div>

<!-- [Select: single open with dropdown] -->
<div class="kd-input kd-input-medium" style="width:200px">
  <div class="kd-select-trigger is-open">
    <div class="kd-input-wrap">
      <input class="kd-input-inner" value="选项一" readonly />
      <span class="kd-select-arrow"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M12 6.5L8.00718 10H7.99262L4 6.5" stroke="#757575" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
    </div>
    <!-- 下拉面板 -->
    <div class="kd-select-dropdown">
      <div class="kd-menu">
        <div class="kd-menu-item kd-menu-item-selected"><span class="kd-menu-item-tick"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8L6.5 11.5L13 5" stroke="#0A6CFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>选项一</div>
        <div class="kd-menu-item">选项二</div>
        <div class="kd-menu-item">选项三</div>
        <div class="kd-menu-item kd-menu-item-disabled">选项四（禁用）</div>
      </div>
    </div>
  </div>
</div>

<!-- [Select: disabled] -->
<div class="kd-input kd-input-medium is-disabled" style="width:200px">
  <div class="kd-select-trigger is-disabled">
    <div class="kd-input-wrap">
      <input class="kd-input-inner" value="已选择" readonly disabled />
      <span class="kd-select-arrow"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M12 6.5L8.00718 10H7.99262L4 6.5" stroke="#757575" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
    </div>
  </div>
</div>

<!-- [Select: error status] -->
<div class="kd-input kd-input-medium kd-select-status-error" style="width:200px">
  <div class="kd-select-trigger">
    <div class="kd-input-wrap">
      <input class="kd-input-inner" placeholder="请选择" readonly />
      <span class="kd-select-arrow"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M12 6.5L8.00718 10H7.99262L4 6.5" stroke="#757575" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
    </div>
  </div>
</div>

<!-- [Select: allowClear with value] -->
<div class="kd-input kd-input-medium" style="width:200px">
  <div class="kd-select-trigger">
    <div class="kd-input-wrap">
      <input class="kd-input-inner" value="已选择" readonly />
      <button class="kd-select-clear"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4.5 4.5L11.5 11.5M11.5 4.5L4.5 11.5" stroke="#757575" stroke-width="1.2" stroke-linecap="round"/></svg></button>
    </div>
  </div>
</div>

<!-- [Select: searchable] -->
<div class="kd-input kd-input-medium" style="width:200px">
  <div class="kd-select-trigger is-open">
    <div class="kd-input-wrap">
      <span class="kd-input-prefix"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M13 7C13 10.3137 10.3137 13 7 13C3.68629 13 1 10.3137 1 7C1 3.68629 3.68629 1 7 1C10.3137 1 13 3.68629 13 7Z" stroke="#757575"/><path d="M11.5 11.5L15 15" stroke="#757575" stroke-linecap="round"/></svg></span>
      <input class="kd-input-inner" placeholder="搜索" value="" />
      <span class="kd-select-arrow"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M12 6.5L8.00718 10H7.99262L4 6.5" stroke="#757575" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
    </div>
  </div>
</div>

<!-- [Select: grouped dropdown] -->
<div class="kd-select-dropdown" style="width:200px; position:static;">
  <div class="kd-menu">
    <div class="kd-select-group-title">热门城市</div>
    <div class="kd-menu-item">上海</div>
    <div class="kd-menu-item">北京</div>
    <div class="kd-select-group-title">其他城市</div>
    <div class="kd-menu-item">成都</div>
    <div class="kd-menu-item">深圳</div>
  </div>
</div>

<!-- [Select: empty state] -->
<div class="kd-select-dropdown" style="width:200px; position:static;">
  <div class="kd-menu">
    <div class="kd-select-empty">暂无数据</div>
  </div>
</div>
```

## 交互能力

**需引入 interactions.js**：Select 的弹出/收起、选项选中、多选 Tag 增删、清空、搜索过滤均需要 JS 支持。在 HTML 底部引入 `_css/interactions.js`（内联或外链）。

### data 属性驱动

在 Select 根元素（`.kd-input` 外层）添加 data 属性声明交互配置：

| 属性 | 值 | 说明 |
|---|---|---|
| `data-select-mode` | `"single"` / `"multiple"` | **必填**，声明选择模式 |
| `data-select-searchable` | 无值（布尔属性） | 可选，启用搜索过滤 |
| `data-select-clearable` | 无值（布尔属性） | 可选，启用清空按钮 |

选项通过 `data-value` 属性标识：`<div class="kd-menu-item" data-value="opt1">文本</div>`

### 交互行为

1. 点击触发器 → toggle 下拉面板（`.is-open` + display）
2. 点击选项（单选）→ 更新 input value + 收起面板 + 显示 tick
3. 点击选项（多选）→ 动态创建/移除 Tag
4. 点击 Tag × → 移除对应 Tag + 取消 tick
5. 点击 Clear × → 清空所有选中
6. 搜索输入 → 过滤不匹配的选项（display:none）
7. 点击页面其他区域 → 关闭所有打开的面板

```html
<!-- 在 </body> 前引入 -->
<script src="interactions.js"></script>
```

## CSS 来源

完整样式见 [`_css/select.css`](_css/select.css)，生成 HTML 时直接复制该文件内容到 `<style>` 中。
