# Navigation Addendum (2026-05-18)

本补充文件记录 2026-05-18 在管理后台导航复盘中确认的导航实现级硬规则。

> 说明：自 `0.5.2` 起，生效规则已并回 [`navigation.md`](./navigation.md)。本文件仅保留历史上下文；若与主 reference 出现重复或冲突，一律以 `navigation.md` 为准。

## HTML 预览实现优先级

- HTML 预览优先直接复制 `kd-components/_css/navigation-sidebar.css` 作为 Navigation 的 CSS 事实源。
- 不得只手写一份“看起来像 KDesign”的近似 Navigation，然后再补 `data-kd-component="Navigation"`。

## 允许补充的外层结构

- 允许新增 sidebar、slot、nav-list、footer 等场景外壳容器。
- 外壳层只负责场景布局，不得改写 `kd-navigation-item` 的核心尺寸、状态层、selected 规则和层级缩进语义。

## 图标与状态

- 一级导航图标、展开/收起箭头、底部“查看全部”与收起侧栏按钮，均按 `navigation.md` 与 `icons.md` 映射到 KDIcon pro。
- 若 HTML 预览无法直连真实 KDIcon 资源，只允许用同名 SVG 做同构模拟，不得改成任意自绘风格。
