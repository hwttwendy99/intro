# MessageBanner · 分场景示例

## 1. 提示条

```vue
<kd-message-banner text="系统将于今晚维护" type="warning" />
```

## 2. 可关闭

```vue
<kd-message-banner text="有新版本" show-close @close="onClose" />
```

## 3. 操作按钮

```vue
<kd-message-banner
  text="未完成认证"
  :action="{ type: 'button', text: '去认证', onClick: go }"
/>
```

## 4. 链接操作

```vue
<kd-message-banner
  text="查看公告"
  :action="{ type: 'link', text: '详情', url: '/notice' }"
/>
```

## 5. 自动消失

```vue
<kd-message-banner text="临时通知" :duration="5000" />
```

## 6. 全宽布局

```vue
<kd-message-banner text="横幅" layout="full" align="center" />
```
