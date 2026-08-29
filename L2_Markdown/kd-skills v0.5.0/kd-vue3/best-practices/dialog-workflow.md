# 弹窗工作流最佳实践

## 1) 状态设计

弹窗开关由单一状态源控制；打开前准备好初始数据，关闭时明确是否重置。

```ts
const visible = ref(false)
const loading = ref(false)
const formData = ref({ name: '', role: '' })

function openDialog(row?: Record<string, string>) {
  formData.value = row ? { ...row } : { name: '', role: '' }
  visible.value = true
}

function closeDialog() {
  visible.value = false
  // 可选：关闭后重置，避免下次打开时保留旧数据
  formData.value = { name: '', role: '' }
}
```

## 2) 基础确认弹窗

`kd-dialog` + `kd-button` 的最简组合：

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { KdButton, KdDialog, KdMessage } from '@kdocs/kdesign-vue3'

const visible = ref(false)
const loading = ref(false)

async function handleConfirm() {
  loading.value = true
  try {
    await deleteApi()
    KdMessage.success('删除成功')
    visible.value = false
  } catch {
    KdMessage.error('删除失败，请重试')
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <kd-button type="primary" danger @click="visible = true">删除</kd-button>

  <kd-dialog v-model:visible="visible" title="确认删除" width="400px">
    <p>确定要删除该记录吗？此操作不可恢复。</p>
    <template #footer>
      <kd-button @click="visible = false">取消</kd-button>
      <kd-button type="primary" danger :loading="loading" @click="handleConfirm">
        确认删除
      </kd-button>
    </template>
  </kd-dialog>
</template>
```

## 3) 表单弹窗（新增 / 编辑通用）

`kd-dialog` + `kd-input` + `kd-select` 的完整闭环：

```vue
<script setup lang="ts">
import { ref } from 'vue'
import {
  KdButton, KdDialog, KdInput, KdMessage,
  KdOption, KdSelect,
} from '@kdocs/kdesign-vue3'

interface Row { id?: string; name: string; role: string }

const visible = ref(false)
const loading = ref(false)
const isEdit = ref(false)
const form = ref<Row>({ name: '', role: '' })

function open(row?: Row) {
  isEdit.value = !!row?.id
  form.value = row ? { ...row } : { name: '', role: '' }
  visible.value = true
}

function close() {
  visible.value = false
}

async function handleSubmit() {
  if (!form.value.name.trim()) {
    KdMessage.warning('请输入名称')
    return
  }
  loading.value = true
  try {
    if (isEdit.value) {
      await updateApi(form.value)
    } else {
      await createApi(form.value)
    }
    KdMessage.success(isEdit.value ? '编辑成功' : '新增成功')
    close()
    emit('refresh')
  } catch {
    KdMessage.error('操作失败，请重试')
    // 不关闭弹窗，保留表单内容
  } finally {
    loading.value = false
  }
}

const emit = defineEmits<{ refresh: [] }>()
defineExpose({ open })
</script>

<template>
  <kd-dialog
    v-model:visible="visible"
    :title="isEdit ? '编辑用户' : '新增用户'"
    width="520px"
    :close-on-click-modal="false"
  >
    <div class="dialog-form">
      <div class="form-item">
        <label>名称</label>
        <kd-input v-model="form.name" placeholder="请输入名称" />
      </div>
      <div class="form-item">
        <label>角色</label>
        <kd-select v-model="form.role" placeholder="请选择角色">
          <kd-option label="管理员" value="admin" />
          <kd-option label="编辑" value="editor" />
        </kd-select>
      </div>
    </div>
    <template #footer>
      <kd-button @click="close">取消</kd-button>
      <kd-button type="primary" :loading="loading" @click="handleSubmit">
        {{ isEdit ? '保存' : '新增' }}
      </kd-button>
    </template>
  </kd-dialog>
</template>
```

## 4) 异步提交状态流

```
用户点击确认
  → 校验（失败则提示，保持弹窗打开）
  → loading = true，确认按钮 disabled
  → await api()
    → 成功：关闭弹窗 → KdMessage.success → 触发列表刷新
    → 失败：保持弹窗打开 → KdMessage.error → loading = false（可重试）
  → finally: loading = false
```

## 5) 多步骤弹窗（配合 kd-steps）

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { KdButton, KdDialog, KdStep, KdSteps } from '@kdocs/kdesign-vue3'

const visible = ref(false)
const currentStep = ref(0)
const steps = ['填写基础信息', '配置权限', '确认提交']

function next() { if (currentStep.value < steps.length - 1) currentStep.value++ }
function prev() { if (currentStep.value > 0) currentStep.value-- }
</script>

<template>
  <kd-dialog v-model:visible="visible" title="新建项目" width="600px">
    <kd-steps :active="currentStep">
      <kd-step v-for="s in steps" :key="s" :title="s" />
    </kd-steps>
    <!-- 根据 currentStep 渲染不同表单区块 -->
    <template #footer>
      <kd-button v-if="currentStep > 0" @click="prev">上一步</kd-button>
      <kd-button v-if="currentStep < steps.length - 1" type="primary" @click="next">下一步</kd-button>
      <kd-button v-else type="primary" @click="handleFinalSubmit">提交</kd-button>
    </template>
  </kd-dialog>
</template>
```

## 6) 反馈组件选择建议

| 场景 | 推荐组件 |
|------|----------|
| 短暂操作结果 | `kd-message`（success / error / warning） |
| 页面级持续通知 | `kd-message-banner` |
| 需要二次确认的危险操作 | `kd-dialog`（内容区说明后果 + 高亮危险按钮） |

## 7) 查询与核对

- 组件 API：`kd-vue3 info KdDialog`
- 详细文档：`kd-vue3 doc KdDialog`
- 样式路径：`kd-vue3 style KdDialog`
