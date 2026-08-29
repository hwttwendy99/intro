# KdMessage · API 参考

导入均来自 **`@kdocs/kdesign-vue3`**。

## 样式（按需引入）

```text
@kdocs/kdesign-vue3/es/components/message/style/css
```

```ts
import '@kdocs/kdesign-vue3/es/components/message/style/css'
import '@kdocs/kdesign-vue3/lib/components/message/style/css'
```

## 类型导入示例

```ts
import type {
  Message,
  MessageHandler,
  MessageOptions,
} from '@kdocs/kdesign-vue3'
```

## 调用形式

- **`KdMessage(options)`** 或 **`KdMessage(messageString)`**
- 分类方法：**`KdMessage.success` / `warning` / `info` / `error` / `loading`**（参数为 **`MessageParamsWithType`** 或字符串）

## `MessageOptions`（摘要）

| 字段 | 说明 |
|------|------|
| `message` | 文案，支持 `string` / `VNode` / 渲染函数 |
| `type` | `default` \| `success` \| `info` \| `warning` \| `error` \| `loading` |
| `duration` | 显示时长（毫秒），`0` 为不自动关闭 |
| `show-close` | 是否显示关闭按钮 |
| `icon` | 自定义图标组件 |
| `on-close` | 关闭回调 |
| `center` | 文本居中 |
| `dangerously-use-html-string` | 是否按 HTML 解析（注意安全） |
| `offset` / `top` / `z-index` | 位置与层级 |
| `grouping` / `repeat-num` | 合并相同内容 |
| `append-to` / `get-container` | 挂载容器 |

## 实例

返回 **`MessageHandler`**，含 **`close()`**。

## 全局

**`closeAll(type?)`**：按类型或全部关闭（以导出类型为准）。
