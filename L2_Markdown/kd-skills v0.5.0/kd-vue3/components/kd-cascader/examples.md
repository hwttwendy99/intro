# KdCascader · 示例

## 1. 基础单选

最简用法，选中后 `v-model` 为完整路径数组（`emitPath` 默认为 `true`）。

```vue
<script setup lang="ts">
import { ref } from 'vue'
import type { CascaderOption, CascaderValue } from '@kdocs/kdesign-vue3'
import '@kdocs/kdesign-vue3/es/components/cascader/style/css'

const value = ref<CascaderValue>(null)
const options: CascaderOption[] = [
  {
    value: 'guide',
    label: '指南',
    children: [
      { value: 'design', label: '设计原则' },
      { value: 'nav', label: '导航' },
    ],
  },
  {
    value: 'component',
    label: '组件',
    children: [
      { value: 'basic', label: '基础组件' },
      { value: 'form', label: '表单组件' },
    ],
  },
]
</script>

<template>
  <kd-cascader v-model="value" :options="options" placeholder="请选择" />
</template>
```

## 2. 多选 + 折叠标签

通过 `props.multiple` 开启多选，配合 `collapse-tags` 和 `collapse-tags-tooltip` 折叠展示。

```vue
<script setup lang="ts">
import { ref } from 'vue'
import type { CascaderOption, CascaderValue } from '@kdocs/kdesign-vue3'

const value = ref<CascaderValue[]>([])
const options: CascaderOption[] = [/* 同上 */]
</script>

<template>
  <kd-cascader
    v-model="value"
    :options="options"
    :props="{ multiple: true }"
    collapse-tags
    :max-collapse-tags="2"
    collapse-tags-tooltip
    placeholder="请选择（多选）"
  />
</template>
```

## 3. 可搜索

设置 `filterable` 开启搜索，输入关键字过滤选项（支持防抖，默认 300ms）。

```vue
<template>
  <kd-cascader
    v-model="value"
    :options="options"
    filterable
    placeholder="输入关键字搜索"
  />
</template>
```

如需自定义搜索逻辑，使用 `filter-method`：

```vue
<template>
  <kd-cascader
    v-model="value"
    :options="options"
    filterable
    :filter-method="(node, keyword) => node.text.toLowerCase().includes(keyword.toLowerCase())"
  />
</template>
```

## 4. 懒加载子节点

当数据量大或需要异步加载时，使用 `props.lazy` + `props.lazyLoad`。

```vue
<script setup lang="ts">
import { ref } from 'vue'
import type { CascaderNode, CascaderProps } from '@kdocs/kdesign-vue3'

const value = ref(null)

const cascaderProps: CascaderProps = {
  lazy: true,
  lazyLoad(node, resolve) {
    const { level, value: nodeValue } = node
    // 模拟异步请求
    setTimeout(() => {
      const nodes = level === 0
        ? [{ value: 'option1', label: '选项 1' }, { value: 'option2', label: '选项 2' }]
        : [{ value: 'leaf1', label: '叶子 1', leaf: true }]
      resolve(nodes)
    }, 500)
  },
}
</script>

<template>
  <kd-cascader v-model="value" :props="cascaderProps" placeholder="懒加载示例" />
</template>
```

## 5. 父子节点独立选中（checkStrictly）

多选场景下，父子节点选中状态独立，允许单独选中任意层级。

```vue
<template>
  <kd-cascader
    v-model="value"
    :options="options"
    :props="{ multiple: true, checkStrictly: true }"
    placeholder="父子独立选中"
  />
</template>
```

## 6. 自定义节点内容

通过默认插槽自定义每个节点的展示内容。

```vue
<template>
  <kd-cascader v-model="value" :options="options">
    <template #default="{ node, data }">
      <span>{{ data.label }}</span>
      <span v-if="!node.isLeaf"> ({{ data.children?.length }}) </span>
    </template>
  </kd-cascader>
</template>
```

## 7. 调用 Expose 方法

```vue
<script setup lang="ts">
import { ref } from 'vue'
import type { CascaderInstance } from '@kdocs/kdesign-vue3'

const cascaderRef = ref<CascaderInstance>()

function showChecked() {
  const nodes = cascaderRef.value?.getCheckedNodes()
  console.log(nodes)
}
</script>

<template>
  <kd-cascader ref="cascaderRef" v-model="value" :options="options" />
  <kd-button @click="showChecked">查看已选节点</kd-button>
</template>
```
