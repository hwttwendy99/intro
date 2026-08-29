# Select · 分场景示例

以下为常见组合说明与片段；导入均为 **`@kdocs/kdesign-vue3`**，模板标签为 **`kd-*`**。

## 1. 单选 + 选项插槽

使用 **`kd-option`** 声明选项，`value` / `label` 与 **`v-model`** 对应。

```vue
<kd-select v-model="city" placeholder="请选择城市">
  <kd-option value="bj" label="北京" />
  <kd-option value="sh" label="上海" />
</kd-select>
```

## 2. `options` 数组

无需默认插槽时可用 **`options`** 快速配置；每项含 **`value`**、**`label`**，可选 **`disabled`**、**`prefix`**、**`suffix`** 等（与类型定义一致）。

```vue
<kd-select v-model="city" :options="cityOptions" placeholder="请选择城市" />
```

## 3. 多选、可清空、折叠标签

多选 **`v-model`** 为数组；**`clearable`** 清空；**`collapse-tags`** 与 **`max-collapse-tags`** 控制 `+n` 展示。

```vue
<kd-select
  v-model="ids"
  multiple
  clearable
  collapse-tags
  :max-collapse-tags="2"
  placeholder="请选择"
>
  <kd-option v-for="o in list" :key="o.value" :value="o.value" :label="o.label" />
</kd-select>
```

## 4. 可搜索与远程

本地过滤用 **`filterable`**；自定义 **`filter-method`**。远程需 **`remote`** + **`filterable`** + **`remote-method`**，并用 **`loading`** 表示请求中。

```vue
<kd-select
  v-model="id"
  filterable
  remote
  :remote-method="fetchOptions"
  :loading="loading"
  placeholder="输入关键词"
>
  <kd-option v-for="o in remoteList" :key="o.value" :value="o.value" :label="o.label" />
</kd-select>
```

## 5. 分组

用 **`kd-option-group`** 包裹 **`kd-option`**，分组 **`label`**；可对组 **`disabled`**。

```vue
<kd-select v-model="role">
  <kd-option-group label="管理">
    <kd-option value="admin" label="管理员" />
  </kd-option-group>
  <kd-option-group label="成员">
    <kd-option value="editor" label="编辑" />
    <kd-option value="viewer" label="只读" />
  </kd-option-group>
</kd-select>
```

## 6. 禁用、只读、错误态

表单中 **`disabled`** / **`readonly`** 限制操作；**`error`** 显示错误样式（可与表单项校验联动）。

```vue
<kd-select v-model="x" disabled placeholder="禁用" />
<kd-select v-model="y" readonly placeholder="只读" />
<kd-select v-model="z" error placeholder="错误态" />
```
