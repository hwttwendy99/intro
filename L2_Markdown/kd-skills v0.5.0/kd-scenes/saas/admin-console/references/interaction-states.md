# 交互状态

## 状态要求

HTML 预览必须包含可感知的交互状态：

1. Button 必须有 hover、active、focus-visible、disabled。
2. Text Field / Select 必须有 hover、focus-within、disabled。
3. 侧边导航项必须有 hover、active、selected。
4. 导航展开/收起箭头必须是可点击按钮或包含在可点击导航项内，并具备键盘触发能力。
5. 表格行必须有 hover、selected。
6. Checkbox 点击后应能切换选中状态，并同步行选中态。
7. Pagination 页码、上一页、下一页、每页条数选择器、跳页输入必须有 hover 和 focus-visible。

## 语义红线

- 禁止只用 div/span 模拟按钮、导航入口、Checkbox 或分页控件。
- 顶部搜索入口若可点击，必须是 button 或 input/search 语义。
- 侧边栏导航项若用于页面跳转，优先使用 a；若只展开收起，使用 button。
- 侧边栏导航展开/收起必须同步 `aria-expanded`、子级 `hidden` 状态和箭头图标，不得只旋转/切换图标而不控制内容显隐。
- 行内编辑、删除如果不是跳转，必须使用 button。

## Button 状态统一规则

- 所有按钮必须先映射到 KD Button 类型：Primary、Secondary、Secondary + Highlight、Secondary + Danger、Light、Light + Highlight、Light + Danger 或 Primary + Danger，不得自创状态。
- Primary normal / hover / pressed 分别使用 `var(--kd-color-public-normal)`、`var(--kd-color-public-hover)`、`var(--kd-color-public-pressed)`，文字使用 `kd-color-text-white`。
- Primary Danger normal / hover / pressed 分别使用 `功能/错误/kd-color-error-normal`、`功能/错误/kd-color-error-hover`、`功能/错误/kd-color-error-pressed`，文字使用 `kd-color-text-white`。
- Secondary normal 使用 `场景/填充/kd-color-fill-base` + `场景/线条/kd-color-line-regular`；hover 使用 `场景/填充/kd-color-fill-light` + `场景/线条/kd-color-line-medium`；active / pressed 使用 `场景/填充/kd-color-fill-regular` + `场景/线条/kd-color-line-medium`。
- Secondary + Highlight 默认文字和边框使用 `var(--kd-color-public-normal)`，hover 使用 `var(--kd-color-public-hover)`，active / pressed 使用 `var(--kd-color-public-pressed)`，active / pressed 背景使用 `场景/状态/kd-color-state-pressed-public`。
- Secondary + Danger 默认文字使用 `kd-color-text-error`、边框使用 `场景/线条/kd-color-line-error`；hover 使用 `功能/错误/kd-color-error-normal` / `功能/错误/kd-color-error-hover`；active / pressed 使用 `功能/错误/kd-color-error-pressed`。
- Light hover 使用 `场景/状态/kd-color-state-hover`，active / pressed 使用 `场景/状态/kd-color-state-pressed`，边框始终保持 `transparent`。
- Button 文本所有状态 font-weight 均为 400，不得通过加粗表达强调。
- 展开 / 收起按钮在后台命令栏内必须使用 Light + Highlight，不得使用 Secondary + Highlight。
- 展开 / 收起按钮必须设置 `min-width` 和 `white-space: nowrap`，避免宽度不足时文字竖排。
