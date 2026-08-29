# Empty · 分场景示例

## 1. 基础

```vue
<kd-empty description="暂无数据" />
```

## 2. 标题 + 描述

```vue
<kd-empty title="没有内容" description="请稍后再试或新建一条" />
```

## 3. 自定义插图尺寸

```vue
<kd-empty :image="imgUrl" :image-size="120" description="空列表" />
```

## 4. 底部主操作

```vue
<kd-empty description="暂无数据">
  <kd-button type="primary" @click="create">新建</kd-button>
</kd-empty>
```

## 5. 自定义图片插槽

```vue
<kd-empty description="自定义占位">
  <template #image>
    <img src="/empty.svg" alt="" />
  </template>
</kd-empty>
```

## 6. 表格空状态

在 **`kd-table`** 空数据插槽或外层包裹 **`kd-empty`**，保持与页面边距一致。
