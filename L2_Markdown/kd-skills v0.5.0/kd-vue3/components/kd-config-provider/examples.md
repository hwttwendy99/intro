# ConfigProvider · 分场景示例

导入均为 **`@kdocs/kdesign-vue3`**，模板标签为 **`kd-*`**。

## 1. 根包裹 + 语言包

在应用入口用 **`kd-config-provider`** 包住路由或页面根，传入 **`locale`**（语言包从库或项目内按需引入）。

```vue
<kd-config-provider :locale="zhCn">
  <App />
</kd-config-provider>
```

## 2. 全局尺寸与 z-index

统一子树内组件的默认尺寸与弹层起始层级。

```vue
<kd-config-provider :size="size" :z-index="3000">
  <Page />
</kd-config-provider>
```

## 3. 按钮默认（双字间距）

通过 **`button`** 为子级按钮提供默认 **`autoInsertSpace`** 等配置。

```vue
<kd-config-provider :button="{ autoInsertSpace: true }">
  <Toolbar />
</kd-config-provider>
```

## 4. Message 全局条数

限制同时存在的全局 **Message** 数量（以类型字段为准）。

```vue
<kd-config-provider :message="{ max: 3 }">
  <App />
</kd-config-provider>
```

## 5. Popper 挂载容器

将浮层挂载到指定容器（如业务布局内层，避免 **`overflow`** 裁剪问题）。

```vue
<kd-config-provider :popper="{ getPopperContainer: getContainer }">
  <Layout />
</kd-config-provider>
```

## 6. 作用域插槽 `config`

在需要访问注入配置对象时使用 **`#default="{ config }"`**（字段以运行时为准）。

```vue
<kd-config-provider v-bind="providerProps">
  <template #default="{ config }">
    <DebugPanel v-if="debug" :config="config" />
    <Main />
  </template>
</kd-config-provider>
```
