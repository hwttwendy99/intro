# 表格列表页配置模式

> 当管理后台 HTML 预览进入第二页、第三页之后，优先采用“共享 runtime + 页面 config”的方式生成，而不是在单页里继续堆积 `seedRows / state / renderRow / pagination bootstrap`。

## 适用范围

- 需要保留 HTML 设计稿还原度，同时降低后续多列表页维护成本
- 页面已经复用 `page-shell.css`、`table-list-page.css`、`table-list-page.js`、`pagination.js`
- 页面内还保留大量业务 mock 数据、分页初始化和 `renderRow()` 字符串拼装

## 标准分层

1. **共享场景资产**
   - `references/_css/page-shell.css`
   - `references/table-list-page/_css/table-list-page.css`
   - `references/table-list-page/_css/table-cell-renderers.css`
   - `references/table-list-page/_js/table-list-page.js`
   - `references/table-list-page/_js/pagination.js`
   - `references/table-list-page/_js/table-page-runtime.js`

2. **页面 config**
   - 页面只保留业务 mock 数据、状态映射、列级渲染装配和少量页面特有参数
   - 文件命名建议：`_js/<page-name>.config.js`

3. **HTML 页面**
   - 保留 DOM 骨架
   - 外链共享资产 + 页面 config
   - 只写一行 bootstrap

## 推荐文件结构

```text
admin-news-list-web.html
_js/
  admin-news-list-web.config.js
```

## 页面 config 推荐结构

```js
(function initPageConfig(global) {
  var renderers = global.KdAdminTableCellRenderers;

  var statusMap = {
    '已启用': { cls: 'kd-admin-status--success', path: '...' },
    '管理员禁用': { cls: 'kd-admin-status--error', path: '...' },
    '未启用': { cls: 'kd-admin-status--neutral', path: '...' }
  };

  global.AdminNewsListWebPageConfig = {
    pageSizeOptions: [10, 20, 50],
    initialState: {
      currentPage: 1,
      pageSize: 20,
      selectedIds: [127, 124, 120]
    },
    rows: [...],
    getRowId: function(row) { return row.id; },
    renderRow: function(row, context) {
      return '...';
    }
  };
})(window);
```

## Runtime 调用方式

### 预览服务模式

当页面通过 Workspace / Showcase 预览服务打开，且服务已映射场景资产目录时，可以使用服务约定的绝对资产路径：

```html
<script src="/kd-scene-assets/saas/admin-console/table-list-page/_js/table-page-runtime.js"></script>
<script src="./_js/admin-news-list-web.config.js"></script>
<script>
  window.KdAdminTablePageRuntime.create(window.AdminNewsListWebPageConfig);
</script>
```

### file:// 直开模式

当 HTML 需要直接用浏览器打开，不经过预览服务时，禁止使用 `/kd-scene-assets/...` 这类站点根路径；必须改用从当前 HTML 文件到 `KD-Skills/kd-scenes/saas/admin-console/references/` 的相对路径，或把所需 CSS / JS 内联进 HTML。

示例：若页面位于 `D:\KD-Workspace\saas\admin-console\admin-news-list-web.html`，可使用：

```html
<script src="../../../KD-Skills/kd-scenes/saas/admin-console/references/table-list-page/_js/table-list-page.js"></script>
<script src="../../../KD-Skills/kd-scenes/saas/admin-console/references/table-list-page/_js/table-cell-renderers.js"></script>
<script src="../../../KD-Skills/kd-scenes/saas/admin-console/references/table-list-page/_js/table-page-runtime.js"></script>
<script src="../../../KD-Skills/kd-scenes/saas/admin-console/references/table-list-page/_js/pagination.js"></script>
<script src="./_js/admin-news-list-web.config.js"></script>
<script>
  window.KdAdminTablePageRuntime.create(window.AdminNewsListWebPageConfig);
</script>
```

## 强约束

1. `rows`、`initialState`、`pageSizeOptions` 放进 config，不再留在 HTML 内联脚本。
2. `renderRow()` 允许保留在 config 内，但视觉片段优先复用 `table-cell-renderers`。
3. 状态列优先传入页面级 `statusMap`，不要把业务状态枚举持续堆到共享 helper 内。
4. HTML 页面里的 bootstrap 只负责挂载，不再承载业务分页逻辑、滚动高度计算和选择态联动。
5. 若页面确实需要偏离 runtime，必须在页面代码中标明偏离原因，并同步补充 checklist。
6. 生成 HTML 时必须先判定预览方式：服务预览用服务映射路径，`file://` 直开用相对路径或内联资产；不得让页面在目标预览方式下依赖不存在的资产根路径。
