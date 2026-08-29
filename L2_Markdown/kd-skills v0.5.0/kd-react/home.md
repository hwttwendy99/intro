---
id: home
slug: /
title: 快速上手
# hide_table_of_contents: true
---


### 安装 kdesign

```jsx
npm i @kdocs/kdesign @kdocs/kdesign-theme --registry=http://registry.npm.wps.cn
```

### 如何使用 kdesign

```jsx
import React from 'react';
import { Button } from '@kdocs/kdesign';

export default () => <div>
  <Button>确定</Button>
</div>
```
另外需要在项目入口js引入主题样式文件：
```jsx
import '@kdocs/kdesign-theme/default.css';
```
**weboffice项目由于babel等构建工具版本较旧，为了实现按需引用的效果，组件需单个引用**

引入Button组件

```jsx
import Button from '@kdocs/kdesign/es/components/button'
```
主题也应引用less源文件

```jsx
import '@kdocs/kdesign-theme/src/default.less';
```