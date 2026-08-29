# Message · 分场景示例

## 1. 成功提示

```ts
KdMessage.success('保存成功')
```

## 2. 错误与时长

```ts
KdMessage.error({ message: '请求失败', duration: 5000 })
```

## 3. 不自动关闭

```ts
KdMessage.info({ message: '请处理', duration: 0, showClose: true })
```

## 4. 关闭回调

```ts
const h = KdMessage.warning({
  message: '即将过期',
  onClose: () => { /** */ },
})
h.close()
```

## 5. Loading

```ts
const h = KdMessage.loading({ message: '提交中...', duration: 0 })
// 结束后 h.close()
```

## 6. 全部关闭

```ts
KdMessage.closeAll()
```
