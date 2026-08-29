# Input · 分场景示例

## 1. 基础

```vue
<kd-input v-model="name" placeholder="请输入姓名" />
```

## 2. 可清空

```vue
<kd-input v-model="q" clearable placeholder="搜索" />
```

## 3. 密码

```vue
<kd-input v-model="pwd" type="password" show-password placeholder="密码" />
```

## 4. 前置图标

```vue
<kd-input v-model="q" :prefix-icon="SearchIcon" placeholder="搜索" />
```

## 5. 加载与错误态

```vue
<kd-input v-model="x" loading />
<kd-input v-model="y" status="error" />
```

## 6. 字数限制

```vue
<kd-input v-model="bio" maxlength="50" show-word-limit />
```
