# Navigation · API 参考

> 导入：`import { Navigation } from '@kdocs/kdesign'`

#### Navigation

| 参数| 说明 | 类型 | 可选值| 默认值|
| ----------------- | ------------------ | ------- | --------------------- | ---------- |
| value|绑定值，注意，value不能为数字0| `number/string`  |  |       |
| defaultVal |  默认高亮值|`number/string` |      |       |
| items | 导航树| `NavItem[]` |      |       |
| layout | 导航方向| `'horizontal' \ 'vertical'` |      |       |
| min | 导航保留项| `number` |     |    1   |
| trigger | 下拉框触发发生| string |  `click\hover`   |    hover   |
| onClick | 点击导航触发回调| (item: NavItem) => void |     |       |
| onChange | 导航发生改变时回调（非受控情况下才触发）| (item: NavItem) => void |     |       |
| iconSize | 图标大小| `'small' \ 'medium'  \ number` |     |    16   |

#### NavItem
```ts
export interface NavItem {
  // 导航唯一键值
  key: string;
  // 导航内容
  label?: string | React.ReactNode;
  // 图标
  icon?: React.ReactNode;
  // 后置内容
  suffix?: React.ReactNode;
  // 子导航
  children?: NavItem[];
  // 是否禁用
  disabled?: boolean;
  // 用于覆盖全局的图标
  iconSize?: number;
  // 图标导航
  type?: 'icon';
}
```
