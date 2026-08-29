# Markdown · 分场景示例

## 1. 静态内容

```vue
<kd-markdown :content="md" />
```

## 2. 流式输出

```vue
<kd-markdown :content="chunk" status="streaming" stream-type="append" />
```

## 3. 结束态

```vue
<kd-markdown :content="fullText" status="end" @rendered="onRendered" />
```

## 4. 禁用选择

```vue
<kd-markdown :content="md" :allow-selected="false" />
```

## 5. 引用区

```vue
<kd-markdown :content="md" :ref-area="refAreaConfig" />
```

## 6. 与溯源

```vue
<kd-markdown :content="md" :source-map="sourceMap" @rendered="onRendered" />
```
