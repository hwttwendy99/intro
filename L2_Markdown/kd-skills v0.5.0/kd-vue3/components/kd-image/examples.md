# KdImage · 场景示例

## 场景 1：基础展示与 fit 模式

展示不同 `fit` 值下图片在固定容器中的填充效果。

```vue
<template>
  <div class="demo-image">
    <div v-for="fit in fits" :key="fit" class="block">
      <span class="label">{{ fit }}</span>
      <kd-image
        style="width: 100px; height: 100px"
        :src="src"
        :fit="fit"
        alt="示例图片"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
const fits = ['fill', 'contain', 'cover', 'none', 'scale-down'] as const
const src = 'https://example.com/photo.jpg'
</script>

<style scoped>
.demo-image { display: flex; gap: 16px; flex-wrap: wrap; }
.block { text-align: center; }
.label { display: block; font-size: 12px; margin-bottom: 8px; color: #666; }
</style>
```

## 场景 2：加载占位符

图片加载期间展示占位内容；两种方式二选一：`#placeholder` 插槽（完全自定义）或 `placeholder-src`（内置渐进式效果）。

```vue
<template>
  <!-- 方式一：#placeholder 插槽自定义 -->
  <kd-image :src="src" width="200px" height="200px">
    <template #placeholder>
      <div class="loading-slot">Loading...</div>
    </template>
  </kd-image>

  <!-- 方式二：placeholder-src（低质量小图渐进加载） -->
  <kd-image
    :src="src"
    :placeholder-src="thumbnailSrc"
    width="200px"
    height="200px"
  />
</template>

<script lang="ts" setup>
const src = 'https://example.com/large-photo.jpg'
const thumbnailSrc = 'https://example.com/thumbnail.jpg'
</script>

<style scoped>
.loading-slot {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #f0f2f5;
  font-size: 14px;
  color: #999;
}
</style>
```

## 场景 3：加载失败处理

通过 `#error` 插槽自定义失败状态界面，同时通过 `@error` 事件获取错误信息。

```vue
<template>
  <kd-image
    src="https://invalid-url.example.com/image.jpg"
    width="200px"
    height="200px"
    @error="onError"
  >
    <template #error>
      <div class="error-slot">
        <span>图片加载失败</span>
      </div>
    </template>
  </kd-image>
</template>

<script lang="ts" setup>
import type { ImageLoadError } from '@kdocs/kdesign-vue3'

function onError(err: ImageLoadError) {
  console.error('加载失败:', err.src, err.message)
}
</script>

<style scoped>
.error-slot {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #f5f5f5;
  color: #999;
  font-size: 14px;
}
</style>
```

## 场景 4：懒加载

`lazy` 属性使图片仅在进入视口时才发起请求。`scroll-container` 可指定监听滚动的容器（CSS 选择器或 DOM ref）。

```vue
<template>
  <div ref="container" class="scroll-box">
    <kd-image
      v-for="(src, i) in images"
      :key="i"
      :src="src"
      lazy
      :scroll-container="container"
      class="lazy-img"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const container = ref<HTMLElement>()
const images = [
  'https://example.com/img1.jpg',
  'https://example.com/img2.jpg',
  'https://example.com/img3.jpg',
  'https://example.com/img4.jpg',
]
</script>

<style scoped>
.scroll-box { height: 400px; overflow-y: auto; }
.lazy-img { display: block; width: 100%; height: 280px; margin-bottom: 8px; }
</style>
```

## 场景 5：图片预览（大图查看器）

`preview-src-list` 非空时，点击图片自动弹出查看器；`initial-index` 设置初始显示图片下标。

```vue
<template>
  <div class="preview-demo">
    <kd-image
      v-for="(src, i) in srcList"
      :key="i"
      :src="src"
      :preview-src-list="srcList"
      :initial-index="i"
      width="120px"
      height="120px"
      fit="cover"
      style="cursor: pointer; margin: 4px;"
    />
  </div>
</template>

<script lang="ts" setup>
const srcList = [
  'https://example.com/photo1.jpg',
  'https://example.com/photo2.jpg',
  'https://example.com/photo3.jpg',
]
</script>

<style scoped>
.preview-demo { display: flex; flex-wrap: wrap; }
</style>
```

## 场景 6：加载成功回调 + 响应式宽高

通过 `@load` 事件在图片加载完成后执行逻辑；`width` / `height` 支持响应式绑定。

```vue
<template>
  <kd-image
    :src="src"
    :width="containerWidth"
    height="200px"
    fit="cover"
    @load="onLoad"
    @error="onError"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { ImageLoadError } from '@kdocs/kdesign-vue3'

const src = 'https://example.com/photo.jpg'
const containerWidth = ref('100%')

function onLoad(event: Event) {
  console.log('图片加载完成', event)
}

function onError(err: ImageLoadError) {
  console.error('图片加载失败:', err.src)
}
</script>
```
