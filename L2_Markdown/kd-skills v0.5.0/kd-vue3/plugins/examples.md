# 按需构建 · 分场景示例

以下片段与 **KDesign Vue3 官方文档 · 快速开始** 一致；仅作场景导航，以当前项目实际配置为准。

## 1. Vite + 自动导入（推荐）

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { KDesignVue3Resolver } from '@kdocs/kdesign-vue3-auto-import-resolver'

export default defineConfig({
  plugins: [
    AutoImport({ resolvers: [KDesignVue3Resolver()] }),
    Components({ resolvers: [KDesignVue3Resolver()] }),
  ],
})
```

入口仍需主题：

```ts
import '@kdocs/kdesign-theme/default.css'
```

## 2. Webpack + 自动导入

```js
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { KDesignVue3Resolver } = require('@kdocs/kdesign-vue3-auto-import-resolver')

module.exports = {
  plugins: [
    AutoImport({ resolvers: [KDesignVue3Resolver()] }),
    Components({ resolvers: [KDesignVue3Resolver()] }),
  ],
}
```

## 3. Vite + `@kdocs/unplugin-kdesign-vue3`（手动 import 组件时）

```ts
import { defineConfig } from 'vite'
import UnpluginKdesignVue3 from '@kdocs/unplugin-kdesign-vue3/vite'

export default defineConfig({
  plugins: [UnpluginKdesignVue3()],
})
```

## 4. 仅使用 Message 等 API（需自行补样式）

```ts
import '@kdocs/kdesign-theme/default.css'
import '@kdocs/kdesign-vue3/es/components/message/style/css'
import { KdMessage } from '@kdocs/kdesign-vue3'
```

（`loading` 等场景同理，见官方文档警告块中的路径与组件名。）

## 5. Resolver 关闭样式 side-effect（按需）

若由上层统一处理样式，可在 `KDesignVue3Resolver({ importStyle: false })` 等（与构建策略一致，见包类型）。
