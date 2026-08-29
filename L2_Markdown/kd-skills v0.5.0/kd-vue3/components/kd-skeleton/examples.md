# Skeleton · 分场景示例

## 1. 列表占位

```vue
<kd-skeleton :loading="loading" :rows="3" />
```

## 2. 关闭动画

```vue
<kd-skeleton :animated="false" />
```

## 3. 组合 SkeletonItem

```vue
<kd-skeleton :loading="loading">
  <template #template>
    <kd-skeleton-item variant="circle" />
    <kd-skeleton-item variant="text" />
  </template>
  <div>加载完成后的真实内容</div>
</kd-skeleton>
```

## 4. 延迟出现

```vue
<kd-skeleton :loading="loading" :throttle="300" />
```

## 5. 多列块

```vue
<kd-skeleton :count="2" />
```

## 6. 与真实内容切换

```vue
<kd-skeleton :loading="!data">
  <template #template><kd-skeleton-item variant="rect" /></template>
  <Content v-if="data" :data="data" />
</kd-skeleton>
```
