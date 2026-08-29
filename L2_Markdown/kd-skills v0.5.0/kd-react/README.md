# kd-react — KDesign React 组件 API Skill

本 Skill 属于 KDesign Skills 体系的 **Layer 1-T（目标层）**，提供 `@kdocs/kdesign` React 组件库的完整文档与 JSX 示例。

> 原始来源：`kd-component-library`（从项目 `site/docs` 同步的文档包），已改名并纳入多目标架构。

## 目录说明

```
kd-react/
├── SKILL.md              # Agent 使用说明与组件清单
├── README.md             # 本说明
├── home.md               # 快速上手、安装、引入
├── changelog.md          # 更新日志
└── components/           # 组件文档（41 个）
    ├── button/
    │   ├── references.md # API 参考（Props / Events / Methods）
    │   └── examples.md   # 分场景 JSX 示例
    ├── input/
    │   ├── references.md
    │   └── examples.md
    ├── ...               # 37 个基础组件
    ├── ai-badge/
    │   ├── references.md
    │   └── examples.md
    └── ...               # 4 个 AI 组件
```

## 在多目标体系中的位置

| 输出目标 | 加载的目标 Skill |
|---------|-----------------|
| HTML 设计稿 | kd-components |
| **React 代码** | **kd-react（本 Skill）** |
| Vue2 代码 | kd-vue2（future） |
| Vue3 代码 | kd-vue3 |
| QT JSON | kd-qt-json（future） |

## 使用方式

- **在 Cursor 中**：当用户要求输出 React 代码并涉及 @kdocs/kdesign 组件时，Agent 按 SKILL.md 的指引读取 `components/` 中的文档并据此生成代码。
- **独立于 site**：即使项目中没有 `site` 或未启动文档站，只要本 Skill 存在，即可获得组件的完整用例与 API。

## 同步说明

`components/` 内容来源于项目内 `site/docs/`。若 site 文档有更新，可重新执行复制并运行拆分脚本（`_split.py`）将单文件拆分为 `references.md` + `examples.md` 双文件结构。
