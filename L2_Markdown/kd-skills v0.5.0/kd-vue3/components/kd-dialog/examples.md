# Dialog · 分场景示例

## 1. 基础显隐

```vue
<kd-dialog v-model="visible" title="标题">内容</kd-dialog>
```

## 2. 底部操作

```vue
<kd-dialog v-model="visible" title="确认">
  <template #footer>
    <kd-button @click="visible = false">取消</kd-button>
    <kd-button type="primary" @click="submit">确定</kd-button>
  </template>
</kd-dialog>
```

## 3. before-close

```vue
<kd-dialog v-model="visible" :before-close="onBeforeClose">...</kd-dialog>
```

```ts
const onBeforeClose = (done: (cancel?: boolean) => void) => {
  done()
}
```

## 4. 居中与尺寸

```vue
<kd-dialog v-model="visible" title="标题" align-center size="medium">...</kd-dialog>
```

## 5. 销毁子树

```vue
<kd-dialog v-model="visible" destroy-on-close>...</kd-dialog>
```

## 6. 自定义头部

优先使用 **`#header`** 插槽；**`#title`** 已标记弃用，与官方文档一致。

```vue
<kd-dialog v-model="visible">
  <template #header>自定义标题区</template>
  内容
</kd-dialog>
```

## 7. 命令式打开

```ts
import { KdDialogFn } from '@kdocs/kdesign-vue3'

const { close } = KdDialogFn({
  title: '提示',
  content: '无需模板即可展示',
})
// close()
// KdDialogFn.closeAll()
```
