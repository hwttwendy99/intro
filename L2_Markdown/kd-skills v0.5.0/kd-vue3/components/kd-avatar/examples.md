# Avatar · 分场景示例

导入均为 **`@kdocs/kdesign-vue3`**，模板标签为 **`kd-*`**。

## 1. 图片头像

```vue
<kd-avatar src="https://example.com/a.png" alt="用户" />
```

## 2. 图标占位

```vue
<kd-avatar :icon="UserIcon" />
```

## 3. 方形 + 自定义尺寸

```vue
<kd-avatar shape="square" :size="40" src="https://example.com/a.png" />
```

## 4. 头像组折叠

```vue
<kd-avatar-group :max-count="3">
  <kd-avatar v-for="u in users" :key="u.id" :src="u.avatar" />
</kd-avatar-group>
```

## 5. 加载失败

监听 **`error`** 以替换为默认图或埋点。

```vue
<kd-avatar :src="url" @error="onAvatarError" />
```

## 6. 与列表联用

在表格或列表项中统一 **`size`**，保持行高一致。

```vue
<kd-avatar :size="32" :src="row.avatar" />
```
