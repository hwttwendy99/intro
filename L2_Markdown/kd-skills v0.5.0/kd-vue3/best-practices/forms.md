# 表单页最佳实践

## 1) 先做字段模型，再做组件映射

先定义字段结构与校验规则（必填、格式、跨字段依赖），再将字段映射到组件。

```ts
// types.ts
interface UserForm {
  name: string
  role: string
  notify: boolean
  birthday: string | null
}
```

## 2) 基础表单示例

`kd-input` + `kd-select` + `kd-radio` + `kd-checkbox` + `kd-button` 的典型组合：

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { KdButton, KdCheckbox, KdInput, KdOption, KdRadio, KdRadioGroup, KdSelect } from '@kdocs/kdesign-vue3'

const form = ref({
  name: '',
  role: '',
  gender: 'male',
  agree: false,
})
const loading = ref(false)
const errors = ref<Partial<Record<keyof typeof form.value, string>>>({})

function validate(): boolean {
  errors.value = {}
  if (!form.value.name.trim()) errors.value.name = '请输入姓名'
  if (!form.value.role) errors.value.role = '请选择角色'
  if (!form.value.agree) errors.value.agree = '请勾选协议'
  return Object.keys(errors.value).length === 0
}

async function handleSubmit() {
  if (!validate()) return
  loading.value = true
  try {
    await submitApi(form.value)
    KdMessage.success('提交成功')
  } catch {
    KdMessage.error('提交失败，请重试')
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="form-page">
    <div class="form-item">
      <label>姓名</label>
      <kd-input v-model="form.name" placeholder="请输入姓名" :error="!!errors.name" />
      <span v-if="errors.name" class="error-tip">{{ errors.name }}</span>
    </div>

    <div class="form-item">
      <label>角色</label>
      <kd-select v-model="form.role" placeholder="请选择角色" :error="!!errors.role">
        <kd-option label="管理员" value="admin" />
        <kd-option label="编辑" value="editor" />
        <kd-option label="只读" value="viewer" />
      </kd-select>
      <span v-if="errors.role" class="error-tip">{{ errors.role }}</span>
    </div>

    <div class="form-item">
      <label>性别</label>
      <kd-radio-group v-model="form.gender">
        <kd-radio value="male">男</kd-radio>
        <kd-radio value="female">女</kd-radio>
      </kd-radio-group>
    </div>

    <div class="form-item">
      <kd-checkbox v-model="form.agree">我已阅读并同意用户协议</kd-checkbox>
      <span v-if="errors.agree" class="error-tip">{{ errors.agree }}</span>
    </div>

    <div class="form-actions">
      <kd-button type="primary" :loading="loading" :disabled="loading" @click="handleSubmit">
        提交
      </kd-button>
      <kd-button @click="() => (form = { name: '', role: '', gender: 'male', agree: false })">
        重置
      </kd-button>
    </div>
  </div>
</template>
```

## 3) 含日期字段的表单

`kd-date-picker` + `kd-input-number` 补充示例：

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { KdDatePicker, KdInputNumber } from '@kdocs/kdesign-vue3'

const birthday = ref<string | null>(null)
const age = ref<number | null>(null)
</script>

<template>
  <kd-date-picker
    v-model="birthday"
    type="date"
    placeholder="请选择生日"
    value-format="YYYY-MM-DD"
    clearable
  />
  <kd-input-number
    v-model="age"
    :min="0"
    :max="150"
    placeholder="年龄"
  />
</template>
```

## 4) 校验时机规范

- 输入过程：仅在字段 `blur` 后提示，避免打断输入。
- 提交时：全量校验，滚动到第一个错误字段。
- 后端返回错误：映射到对应字段，保留用户输入，不清空。

## 5) 提交状态闭环

```
提交按钮点击
  → loading = true，按钮 disabled
  → await api(form)
    → 成功：KdMessage.success + 重置/跳转
    → 失败：KdMessage.error + loading = false（保留表单内容）
  → finally: loading = false
```

## 6) 查询与核对

- 组件 API：`kd-vue3 info <Component>`
- 详细用法：`kd-vue3 doc <Component>`
- 样式路径：`kd-vue3 style <Component>`
- 样式是否已由插件接管：`kd-vue3 guide styles`
