# Steps · 分场景示例

## 1. 基础流程

```vue
<kd-steps :active="step">
  <kd-step title="填写" />
  <kd-step title="确认" />
  <kd-step title="完成" />
</kd-steps>
```

## 2. 受控切换

```vue
<kd-steps v-model:active="step">...</kd-steps>
```

## 3. 可点击步骤

```vue
<kd-steps v-model:active="step" click-changeable>...</kd-steps>
```

## 4. 竖向

```vue
<kd-steps :active="1" direction="vertical">...</kd-steps>
```

## 5. 点状

```vue
<kd-steps :active="0" type="dot">...</kd-steps>
```

## 6. 自定义图标

```vue
<kd-step title="上传" :icon="UploadIcon" />
```
