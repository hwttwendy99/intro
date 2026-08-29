# UserGuide · 分场景示例

## 1. 多步引导

```vue
<kd-user-guide v-model="open" :current="step" :steps="steps" />
```

```ts
const steps = [
  { target: '#btn-save', title: '保存', description: '点击保存修改' },
  { target: '#menu-file', title: '菜单', description: '从这里新建' },
]
```

## 2. 单步

```vue
<kd-user-guide v-model="open" :step="{ target: '#help', title: '帮助' }" />
```

## 3. 无遮罩

```vue
<kd-user-guide v-model="open" :mask="false" :steps="steps" />
```

## 4. 点击外部关闭策略

```vue
<kd-user-guide v-model="open" hide-on-click-outside />
```

## 5. 监听步骤变化

```vue
<kd-user-guide v-model="open" :steps="steps" @change="onStep" />
```

## 6. 高亮间距

```vue
<kd-user-guide v-model="open" :gap="{ offset: 12, radius: 8 }" :steps="steps" />
```
