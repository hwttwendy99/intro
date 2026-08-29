# Icon · 分场景示例

以下为常见用法；导入均为 `@kdocs/kdesign`。

#### 安装kdesign图标库

```bash
npm install @kdocs/kdesign-icons-react --save
```

#### 在线图标库

在[kdesign图标库](https://kdesign.kdocs.cn/icons/)复制所需图标代码


#### 在项目中使用

```jsx
import React from 'react';
import { FpFormat, EtFormat } from '@kdocs/kdesign-icons-react';

export default () => {
  return (
    <div>
      <FpFormat />
      <EtFormat />
    </div>
  )
}

```

#### 示例
```jsx
function demo() {
  return (
    <div className='mr-8'>
      <Emojis size={16} />
      <Emojis size={24} />
      <Emojis size={24} fill='red'/>
    </div>
  )
}
```
