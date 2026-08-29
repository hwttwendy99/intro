# 样式最佳实践

## 1) 路径先核对后落盘

凡涉及组件样式 import，先执行：

```bash
kd-vue3 style <Component>
```

或使用 MCP `kdesign_component_style` 获取路径，再写代码。

## 2) 三种引入场景对比

### 场景 A：手动按需引入（无插件）

每个用到的组件单独引入样式，适合轻量页面或临时验证：

```ts
// main.ts 或组件内
import '@kdocs/kdesign-vue3/es/components/button/style/css'
import '@kdocs/kdesign-vue3/es/components/input/style/css'
import '@kdocs/kdesign-vue3/es/components/select/style/css'
// 用 kd-vue3 style <Component> 确认路径，不要凭记忆拼写
```

### 场景 B：unplugin 插件自动注入（推荐）

配置 `unplugin-vue-components` + `KDesignVue3Resolver`，样式随组件自动引入，**无需手写**：

```ts
// vite.config.ts
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { KDesignVue3Resolver } from '@kdocs/kdesign-vue3'

export default defineConfig({
  plugins: [
    AutoImport({
      resolvers: [KDesignVue3Resolver()],
    }),
    Components({
      resolvers: [KDesignVue3Resolver()],
      // importStyle 默认 true，插件会自动注入样式
    }),
  ],
})
```

此模式下，`.vue` / `.tsx` 中直接写 `<kd-button>` 即可，**不需要再写组件级样式 import**。

### 场景 C：一次性全量引入（仅开发调试）

```ts
// main.ts
import '@kdocs/kdesign-vue3/es/index.css'
// ⚠️  包含所有组件样式，体积大，生产环境避免使用
```

## 3) 先判断是否已由插件接管样式

若项目已配置以下任一方案，通常不建议再为普通组件重复手动引入样式：

- `unplugin-vue-components` + `unplugin-auto-import` + `KDesignVue3Resolver()`
- `@kdocs/unplugin-kdesign-vue3`

**决策树：**

```
Q1: vite.config 里有 KDesignVue3Resolver 吗？
├─ 否 → 需要手动 import 样式（走场景 A）
└─ 是 → Q2: importStyle 是否为 false？
         ├─ 是 → 需要手动 import 样式
         └─ 否 → Q3: 是纯 JS API 调用吗？（如 KdMessage.success）
                  ├─ 是 → 仍需手动引入该组件的样式
                  └─ 否 → 插件已自动注入，无需重复 import ✅
```

## 4) 仅 API 调用场景（插件不覆盖）

`KdMessage` / `KdLoading` 等命令式调用不走模板解析，插件无法自动注入样式，需手动补：

```ts
// 即使使用了 KDesignVue3Resolver，以下仍需手动引入
import '@kdocs/kdesign-vue3/es/components/message/style/css'
import '@kdocs/kdesign-vue3/es/components/loading/style/css'

// 然后才能正常使用
KdMessage.success('操作成功')
KdLoading.service({ fullscreen: true })
```

> 路径通过 `kd-vue3 style KdMessage` 核对，不要凭记忆拼写。

## 5) 主题样式 vs 组件样式

两者职责不同，不互相替代：

```ts
// 主题令牌（全局一次性引入）
import '@kdocs/kdesign-theme/default.css'

// 组件按需样式（每个组件独立，可不引入全量）
import '@kdocs/kdesign-vue3/es/components/button/style/css'
```

| 类型 | 文件 | 作用 |
|------|------|------|
| 主题样式 | `@kdocs/kdesign-theme/default.css` | CSS 变量、全局色板、字体 |
| 组件样式 | `…/components/<slug>/style/css` | 组件结构与默认外观 |

## 6) 避免臆造目录名

`style-slug`（`…/components/<slug>/style/css` 里的 `<slug>`）**不必**与源码所在包目录一致。例如 **`KdTimePicker`** 的实现与类型在 **`date-picker`** 包内，但**按需样式**的发布入口在独立目录 **`time-picker`**：

```bash
# 先查，再写代码
kd-vue3 style TimePicker
# 输出：@kdocs/kdesign-vue3/es/components/time-picker/style/css
```

部分映射关系（仅作速查，落盘前仍应以 CLI 为准）：
- `KdDatePicker` → `date-picker`
- `KdTimePicker` → `time-picker`
- `KdDateTimePicker` → `date-time-picker`
- `KdRangePicker` / `KdRangePanel`（区间）→ `range-picker` / `range-panel`

**凡是 Date/Time 相关组件，样式路径必须以 `kd-vue3 style` 输出为准。**
