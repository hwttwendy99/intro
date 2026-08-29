# Markdown · 分场景示例

以下为常见用法；导入均为 `@kdocs/kdesign`。

## 1. 基础用法

```jsx
function Demo() {
  const MarkdownData = `
# 这个是一级标题
## 这个是二级标题
## 2. 这个是三级标题
#### 这个是四级标题
##### 这个是五级标题
###### 这个是六级标题

这是一个段落。Markdown是一种轻量级标记语言，创始人为约翰·格鲁伯。它允许人们使用易读易写的纯文本格式编写文档，然后转换成有效的XHTML（或者HTML）文档。这种语言吸收了很多在电子邮件中已有的纯文本标记的特性。

这是另一个段落。由于Markdown的轻量化、易读易写特性，并且对于图片，图表、数学式都有支持，目前许多网站都广泛使用Markdown来撰写帮助文档或是用于论坛上发表消息。如GitHub、Reddit、Discord、Diaspora、Stack Exchange、OpenStreetMap 、SourceForge、简书等，甚至还能被用来撰写电子书。

这是另一个段落, 带有换行符。由于Markdown的轻量化、易读易写特性，并且对于图片，图表、数学式都有支持，目前许多网站都广泛使用Markdown来撰写帮助文档或是用于论坛上发表消息。\n如GitHub、Reddit、Discord、Diaspora、Stack Exchange、OpenStreetMap 、SourceForge、简书等，甚至还能被用来撰写电子书。

1. 这是一个有序列表
2. 这是一个有序列表
3. 这是一个有序列表这是一个有序列表这是一个有序列表这是一个有序列表这是一个有序列表这是一个有序列表这是一个有序列表这是一个有序列表
4. 这是一个有序列表
5. 这是一个有序列表

- 这是一个无序列表
- 这是一个无序列表
- 这是一个无序列表
- 这是一个无序列表
- 这是一个无序列表
- 这是一个无序列表

1. # 这个是一级标题
2. ## 这个是二级标题
3. ### 这个是三级标题
4. #### 这个是四级标题
5. ##### 这个是五级标题
6. ###### 这个是六级标题
7. 这是正文

- #  这是一个无序列表
- ## 这是一个无序列表
- ### 这是一个无序列表
- #### 这是一个无序列表
- ##### 这是一个无序列表
- ###### 这是一个无序列表
- 这是一个无序列表

- 一级项目
  - 二级项目
    - 三级项目
      - 四级项目
1. 第一项
   1. 第一项的子项一
   2. 第一项的子项二
      1. 第一项的子项二的子项一
      2. 第一项的子项二的子项二
         1. 第一项的子项二的子项一
         2. 第一项的子项二的子项二
2. 第二项
   1. 第二项的子项一
   2. 第二项的子项二
3. 第三项

__这是粗体文字__

[这是一个链接](https://www.wps.cn)

~~删除线样式~~

## 表格
| 表头1 | 表头2 | 表头3 | 表头4 | 表头5 | 表头6 | 表头7 | 表头8 | 表头9 | 表头10 |
|-------|-------|-------|-------|-------|-------|-------|-------|-------|--------|
| 内容1 | 内容2 | 内容3 | 内容4 | 内容5 | 内容6 | 内容7 | 内容8 | 内容9 | 内容10 |
| 内容11| 内容12| 内容13| 内容14| 内容15| 内容16| 内容17| 内容18| 内容19| 内容20 |
| 内容21| 内容22| 内容23| 内容24| 内容25| 内容26| 内容27| 内容28| 内容29| 内容30 |
`;

  const [content, setContent] = useState("初始文本，点击按钮开始流式渲染");
  const [status, setStatus] = useState("end");
  const [refArea, setRefArea] = useState({ title: "相关原文" });
  const [intervalId, setIntervalId] = useState(null);
  const startStream = () => {
    const streamCount = 1
    const streamSpeed = 20
    if (intervalId) {
      clearInterval(intervalId); // 清除之前的定时器
    }
    let currentIndex = 0;
    setContent("");
    setStatus("start");
    const id = setInterval(() => {
      if (currentIndex < MarkdownData.length) {
        setContent(
          (prevContent) =>
            prevContent + MarkdownData.slice(currentIndex, currentIndex + streamCount)
        );
        currentIndex += streamCount;
      } else {
        clearInterval(id); // 完成后清除定时器
        addRefArea();
        setStatus("end");
      }
    }, streamSpeed);
    setIntervalId(id);
  };

  const addRefArea = () => {
    setRefArea({
      ...refArea,
      list: [
        {
          key: "1",
          content: "180页",
          type: "link",
          extra_style: "",
          origin_meta_data: { a: 1 },
        },
        {
          key: "2",
          content: "187页",
          type: "link",
          extra_style: "",
          origin_meta_data: { a: 1 },
        },
      ],
    });
  };
  return (
    <div>
      <Button type="primary" size="medium" onClick={startStream}>
        生成数据
      </Button>
      <Markdown
        content={content}
        status={status}
        streamType="cover"
        allowSelected
        disabled={false}
        refArea={refArea}
      />
    </div>
  );
}

```

## 3. 数据追加形式
设置 `streamType` 属性，接受 `append` 或 `cover`，默认为 `cover`，每次更新content会覆盖之前内容。
传 `append` 时, 每次传入后组件内部做流式数据追加，此时 `content` 属性建议使用 `{content: string}` 数据类型。

```jsx
function Demo() {
  const MarkdownData = `
这是一个段落。这里有一些 **加粗** 的文字和一些 *斜体* 的文字。
# 一级标题
## 二级标题
## 4. 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
## 有序列表
1. 第一项
2. 第二项
3. 第三项
## 无序列表
- 项目一
- 项目二
- 项目三
## 表格
| 表头1 | 表头2 | 表头3 |
|-------|-------|-------|
| 内容1 | 内容2 | 内容3 |
| 内容11| 内容12| 内容13|
| 内容21| 内容22| 内容23|
## 超链接
[这是一个链接](https://www.example.com)
`;

  const [content, setContent] = useState({content: "初始文本，点击按钮开始流式渲染\n"});
  const [status, setStatus] = useState("end");
  const [refArea, setRefArea] = useState({ title: "相关原文" });
  const [intervalId, setIntervalId] = useState(null);
  const startStream = () => {
    if (intervalId) {
      clearInterval(intervalId); // 清除之前的定时器
   }
   let currentIndex = 0;
   setStatus("start");
   const id = setInterval(() => {
         if (currentIndex < MarkdownData.length) {
            setContent({content: (MarkdownData.slice(currentIndex, currentIndex + 2))});
            currentIndex += 2;
         } else {
            clearInterval(id); // 完成后清除定时器
            addRefArea();
            setStatus("end")
         }
    }, 20);
    setIntervalId(id);
  };

  const addRefArea = () => {
    setRefArea({
      ...refArea,
      list: [
        {
          key: "1",
          content: "180页",
          type: "link",
          extra_style: "",
          origin_meta_data: { a: 1 },
        },
        {
          key: "2",
          content: "187页",
          type: "link",
          extra_style: "",
          origin_meta_data: { a: 1 },
        },
      ],
    });
  };
  return (
    <div>
      <Button type="primary" size="medium" onClick={startStream}>
        生成数据
      </Button>
      <Markdown
        content={content}
        status={status}
        streamType="append"
        allowSelected
        disabled={true}
        refArea={refArea}
      />
    </div>
  );
}

```

## 5. 支持标注
仅支持`streamType` 属性为 `append` 时，渲染标注数据，按流式返回时机更新 `content` 即可。

```jsx
function Demo() {
  const sourceList = [
    { text: "1", options: { value: "aaa" } },
    { text: "2", options: { value: "bbb" } },
    { text: "3", options: { value: "ccc" } },
    { text: "4", options: { value: "ddd" } },
    { text: "5", options: { value: "eee" } },
    { text: "6", options: { value: "fff" } },
    { text: "7", options: { value: "ggg" } },
    { text: "8", options: { value: "hhh" } },
    { text: "9", options: { value: "iii" } },
    { text: "10", options: { value: "jjj" } },
    { text: "11", options: { value: 'kkk' } },
    { text: "12", options: { value: 'lll'} }
  ];

  const streamList = [
    { content: "\n- 第1段内容\n" },
    { content: "- 第2段\n" },
    { content: "内容\n\n", sources: [sourceList[0]] },
    { content: "- 第3段内容\n" },
    { content: "- 第4段内容\n" },
    { content: "- 第5段**加", sources: [sourceList[1], sourceList[2]] },
    {
      content: "粗**内容\n",
    },
    { content: "- 第6段内容\n- 第7" },
    { content: "段内容", sources: [sourceList[3]] },
    { content: "\n\n", sources: [] },
    { content: "- 第7段内容", sources: [sourceList[1], sourceList[1]] },
    { content: "\n\n", sources: [] },
    { content: "- 第8段内容\n", sources: sourceList },
    { content: "- 第9段内容", sources: [sourceList[1], sourceList[4]] },
  ];

  const originData = {
    content:
      "初始文本，点击按钮开始流式渲染\n- 第1段内容^-cum9fjc0ft351f_0^\n- 第2段内容^-4dw0fdjcfeldvl_0^\n\n",
    sourceMap: new Map([
      [ "-cum9fjc0ft351f", [{ text: "1", options: { value: "aaa" }, sid: "-cum9fjc0ft351f_0" }]],
      [ "-4dw0fdjcfeldvl", [{ text: "2", options: { value: "bbb" }, sid: "-4dw0fdjcfeldvl_0" }]]
    ]),
  };

  const [content, setContent] = useState(originData);
  const [sourceMap] = useState(originData.sourceMap);
  const [status, setStatus] = useState("end");
  const [intervalId, setIntervalId] = useState(null);
  const startStream = () => {
    const streamCount = 1;
    const streamSpeed = 50;
    if (intervalId) {
      clearInterval(intervalId); // 清除之前的定时器
    }
    let currentIndex = 0;
    setContent("");
    setStatus("start");
    const id = setInterval(() => {
      if (currentIndex < streamList.length) {
        const newContent = streamList[currentIndex];
        setContent((prevContent) => newContent);
        currentIndex += streamCount;
      } else {
        clearInterval(id); // 完成后清除定时器
        setStatus("end");
      }
    }, streamSpeed);
    setIntervalId(id);
  };

  const handleClick = (options) => {
    console.log("click", options);
  };
  const handleRendered = (data) => {
    console.log("rendered", data);
  };

  return (
    <div>
      <Button type="primary" size="medium" onClick={startStream}>
        生成数据
      </Button>
      <Markdown
        content={content}
        status={status}
        streamType="append"
        allowSelected
        disabled={false}
        sourceMap={sourceMap}
        onClick={handleClick}
        onRendered={handleRendered}
      />
    </div>
  );
}
```


## 6. 引用区域

```jsx
function Demo() {
  const [refArea] = useState({
      title: "相关原文",
      list: [
         {
               "key": "1",
               "content": "180页",
               "type": "link",
               "extra_style": "",
               "origin_meta_data": { "a": 1 }
         },
         {
               "key": "2",
               "content": "187页",
               "type": "link",
               "extra_style": "",
               "origin_meta_data": { "a": 1 }
         },
         {
               "key": "3",
               "content": "180页",
               "type": "link",
               "extra_style": "",
               "origin_meta_data": { "a": 1 }
         },
         {
               "key": "4",
               "content": "187页",
               "type": "link",
               "extra_style": "",
               "origin_meta_data": { "a": 1 }
         },
         {
               "key": "5",
               "content": "180页",
               "type": "link",
               "extra_style": "",
               "origin_meta_data": { "a": 1 }
         },
         {
               "key": "6",
               "content": "187页",
               "type": "link",
               "extra_style": "",
               "origin_meta_data": { "a": 1 }
         },
      ]
   });

   const handleClick = (data) => {
      console.log(data)
   }

  return (
    <div>
      <Markdown
        content="Markdown数据[这是一个链接](https://www.wps.cn)"
        status="end"
        refArea={refArea}
        onClick={handleClick}
      />
    </div>
  );
}

```

## 7. 支持 LaTeX 公式渲染
从 v2.4.5 开始，需要手动配置 KaTeX 依赖来启用数学公式渲染。

```jsx
function Demo() {
  // 在实际项目中，你需要在组件或全局文件中引入：
  // import katex from 'katex';
  // import 'katex/dist/katex.min.css';

  // 配置 KaTeX 选项
  const katexOptions = React.useMemo(() => {
    if (katex && typeof katex.renderToString === 'function') {
      return {
        enabled: true,
        katexInstance: katex,
        renderOptions: {
          throwOnError: false,
          errorColor: 'inherit',
          displayMode: false,
        }
      };
    }

    return { enabled: false };
  }, [katex]);

  const MarkdownData = `
- 普通公式
$$E = mc^2$$

- 分式
$$ \\frac{d}{dx}e^x = e^x $$

- 根式
$$\\sqrt{x^2 + y^2}$$

- 求和
$$\\sum_{i = 1}^{n} i$$

- 积分
$$\\int_{a}^{b} f(x) dx$$

- 矩阵
$$\\begin{bmatrix}a & b \\\\c & d\\end{bmatrix}$$

- 分段公式
$$ \\text{增加百分比} = \\left( \\frac{245,891,519,568.64 - 235,938,042,474.57}{235,938,042,474.57} \\right) \\times 100\\% $$

- 行内公式：$ \\text{增加百分比} = \\left( \\frac{245,891,519,568.64 - 235,938,042,474.57}{235,938,042,474.57} \\right) \\times 100\\% $
  `
  const [content, setContent] = useState(MarkdownData);
  const [status, setStatus] = useState("end");
  const [intervalId, setIntervalId] = useState(null);
  const startStream = () => {
    const streamCount = 1
    const streamSpeed = 20
    if (intervalId) {
      clearInterval(intervalId); // 清除之前的定时器
    }
    let currentIndex = 0;
    setContent("");
    setStatus("start");
    const id = setInterval(() => {
      if (currentIndex < MarkdownData.length) {
        setContent(
          (prevContent) =>
            prevContent + MarkdownData.slice(currentIndex, currentIndex + streamCount)
        );
        currentIndex += streamCount;
      } else {
        clearInterval(id); // 完成后清除定时器
        setStatus("end");
      }
    }, streamSpeed);
    setIntervalId(id);
  };

  return (
    <div>
      <Button type="primary" size="medium" onClick={startStream}>
        生成数据
      </Button>
      <Markdown
        content={content}
        status={status}
        streamType="cover"
        allowSelected
        disabled={false}
        katexOptions={katexOptions}
      />
    </div>
  );
}

```

## KaTeX 数学公式

### 依赖安装

要使用数学公式渲染功能，需要安装以下依赖：

```bash
npm install katex
# 或
yarn add katex
```

### 完整使用示例

```typescript
import React from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

import { Markdown } from '@kdocs/kdesign';

function MyComponent() {
  const katexOptions = {
    enabled: true,
    katexInstance: katex,
    renderOptions: {
      throwOnError: false,
      errorColor: 'inherit',
      displayMode: false,
    }
  };

  const content = `
  这是一个数学公式：$$E = mc^2$$
  
  行内公式：$f(x) = ax^2 + bx + c$
  `;

  return (
    <Markdown 
      content={content} 
      katexOptions={katexOptions}
    />
  );
}
```

或者在 Less/CSS 文件中引入样式：

```less
@import "~katex/dist/katex.min.css";
```
