# Markdown · API 参考

> 导入：`import { Markdown } from '@kdocs/kdesign'`

#### 属性

| 参数          | 说明                                     | 类型    | 可选值       | 默认值 |
| ------------- | ---------------------------------------- | ------- | ------------ | ------ |
| content       | 具体展示内容，可为 markdown 格式或纯文本 | `string` \| `ComplexMarkdownContent` | —  | —            | —      |
| status        | 流式状态                                 | `string`  | `start` \| `end`    | `end`    |
| streamType    | 流式数据追加形式                         | `string`  | `append` \| `cover` | `cover`  |
| allowSelected | 当前文本是否允许被选中                   | `boolean` | —           | `true`   |
| disabled      | 是否禁用                                 | `boolean` | —           | `false`  |
| refArea       | 引用区域                                 | `Ref`     | —            | —-     |
| sourceMap    | 源数据映射，用于标注                     | `MarkdownSourceMap`    | —            | —      |
| katexOptions | KaTeX 数学公式配置，需要使用方自行安装依赖 | `KatexOptions` | —            | —      |

##### KatexOptions 类型定义

```typescript
interface KatexOptions {
  enabled: boolean;                    // 是否启用数学公式渲染
  katexInstance?: any;                 // KaTeX 实例，需要安装 katex 依赖
  renderOptions?: {                    // KaTeX 渲染选项
    displayMode?: boolean;             // 是否为块级模式
    throwOnError?: boolean;            // 遇到错误是否抛出异常
    errorColor?: string;               // 错误颜色
    macros?: Record<string, string>;   // 自定义宏
    [key: string]: any;
  };
}
```

#### 事件

| 方法名 | 说明         | 参数       |
| ------ | ------------ | ---------- |
| click  | 控件点击事件 | `(options: (type: 'ref'\'link'\'image'\'sup', value: RefItem\string\ContentSourceWithSid)) => void` |
| rendered  | 渲染完成事件，status从start变为end时触发 | `(data: RenderData) => void` |
