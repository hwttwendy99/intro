# Type MD

本地优先的 Markdown 编辑器。单页运行，无需构建，支持源码 / 预览 / 分栏编辑，以及多格式导出。

## 打开方式

在仓库根目录启动本地静态服务：

```bash
python3 -m http.server 4173
```

浏览器访问：

```text
http://127.0.0.1:4173/index.html
```

建议始终通过本地服务打开。直接双击 `index.html` 可能受 `file://` 限制，预设文档加载会降级到内置兜底内容。

## 功能

- 新建、打开、拖拽导入、粘贴导入
- 三视图：Source / Preview / Split
- 预览区可编辑并回写 Markdown
- 最近文件：搜索、重命名、创建副本、删除、导出
- 导出：`.md` / `.txt` / `.html` / `.pdf` / `.docx`
- 中英切换、亮暗主题（刷新后保留）

## 目录

```text
intro/
  index.html                 # 页面与全部交互逻辑
  Logo.png
  docs/                      # 预设文档
    产品功能介绍.md
    新用户指南.md
  style_skill/               # 页面实际用到的样式与图标
    tokens.css
    reset.css
    button.css
    segmented.css
    navigation-sidebar.css
    icons/
```

打开页面后，左侧「最近文件」会自动出现两份预设文档，可直接点开继续编辑。
