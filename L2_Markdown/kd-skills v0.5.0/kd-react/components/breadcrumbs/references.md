# Breadcrumbs · API 参考

> 导入：`import { Breadcrumbs } from '@kdocs/kdesign'`

#### Breadcrumbs

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| items | 面包屑项 | `BreadcrumbItem[]` | - |
| size | 面包屑尺寸 | `"small"` \| `"medium"` | `"medium"` |
| separator | 分隔符 | `React.ReactNode` | `<ArrowRightL />` |
| className | 面包屑类名 | `string` | - |
| itemClassName | 面包屑项类名 | `string` | - |
| renderItem | 面包屑项自定义渲染 | `(crumb: BreadcrumbItem) => React.ReactNode` | - |
| onClick | 面包屑项点击事件 | (crumb: BreadcrumbItem, e: Event) => void` | - |
| dropdownOptions | 下拉菜单属性 | `Omit<DropdownProps,'panel'> ` | - |

#### BreadcrumbItem

| 参数               | 说明                 | 类型                  | 默认值 |
| ------------------ | -------------------- | --------------------- | ------ |
| id                 | 面包屑项 id          | `boolean` \| `string` | -      |
| name               | 面包屑项名字         | `string`              | -      |
| icon               | 面包屑项图标         | `React.ReactNode`     | -      |
| maxWidth           | 面包屑项最大展示宽度 | `number`              | -      |
| [propName: string] | 面包屑自定义属性     | `any`                 | -      |
