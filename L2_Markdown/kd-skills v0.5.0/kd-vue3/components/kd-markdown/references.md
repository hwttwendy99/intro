# KdMarkdown · API 参考

导入均来自 **`@kdocs/kdesign-vue3`**。

## 样式（按需引入）

```text
@kdocs/kdesign-vue3/es/components/markdown/style/css
```

```ts
import '@kdocs/kdesign-vue3/es/components/markdown/style/css'
import '@kdocs/kdesign-vue3/lib/components/markdown/style/css'
```

## 类型导入示例

```ts
import type { MarkdownProps } from '@kdocs/kdesign-vue3'
```

## `KdMarkdown` Props（摘要）

| 属性 | 说明 | 类型 / 约束 | 默认值 |
|------|------|----------------|--------|
| `content` | Markdown 或结构化内容（**必填**） | `string` \| `object` | — |
| `status` | 流式状态 | `string` | `end` |
| `stream-type` | `append` \| `cover` | `string` | `cover` |
| `ref-area` | 引用区域配置 | `object` | — |
| `allow-selected` | 是否允许选中 | `boolean` | `true` |
| `disabled` | 禁用 | `boolean` | `false` |
| `source-map` | 溯源标注 | `Map` | — |
| `disable-nested-quote` | 屏蔽引用嵌套 | `boolean` | `false` |
| `element-controls` | 控制显隐 | `array` | — |
| `katex-options` | KaTeX 配置（需传入 katex） | `object` | — |

## `KdMarkdown` Emits

| 事件名 | 载荷 |
|--------|------|
| `click` | 点击上下文（见类型） |
| `rendered` | 渲染完成数据 |
