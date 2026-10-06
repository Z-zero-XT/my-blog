# 心田 · Personal Space

一个无需数据库、可直接本地运行的中英双语个人作品集。纯 HTML + CSS + JavaScript，不需要安装依赖或构建工具。

视觉定调：**Apple 式克制极简** —— 中性色主导 + 单一强调色、大字排版与大量留白、hairline 分隔，用排版和空白建立结构，而不是卡片和边框。

## 文件结构

```text
quietfolio-starter/
├── index.html     # 页面结构与文案占位
├── styles.css     # 设计令牌、排版系统、响应式、交互增强
├── script.js      # 双语字典、主题、滚动动效、倾斜/磁吸、项目弹窗
└── README.md      # 使用说明
```

四个文件，零依赖。

## 本地运行

直接双击 `index.html` 即可。或用本地 HTTP 服务：

```bash
python -m http.server 8000     # 然后访问 http://localhost:8000
```

## 设计系统

全部设计变量集中在 `styles.css` 顶部：

| 令牌 | 浅色 | 深色 | 用途 |
|---|---|---|---|
| `--bg` | `#fbfbfd` | `#000000` | 页面底色 |
| `--ink` | `#1d1d1f` | `#f5f5f7` | 正文/标题 |
| `--muted` | `#6e6e73` | `#86868b` | 次级文字 |
| `--accent` | `#0071e3` | `#2997ff` | 唯一强调色 |
| `--hair` | `rgba(0,0,0,.09)` | `rgba(255,255,255,.13)` | 分隔线 |

- **字体**：纯系统字体栈（`-apple-system` / SF Pro → Segoe UI → PingFang SC → 微软雅黑），**不加载任何网络字体**，零 FOUT、离线可用、无第三方请求。
- **字号层级**：只有四级 —— 英雄标题 `clamp(40px,7.2vw,86px)` / 小节标题 `clamp(30px,4.1vw,52px)` / 正文 `17px` / 辅助 `13–15px`。全站没有任何小于 13px 的文字，也没有等宽大写微标签。
- **栅格**：「关于 / 作品 / 随笔」三节共用同一条右侧栏竖线（`1fr : 0.92fr`），整页只有一条对齐基线。

## 交互能力

- **中英双语切换** —— `data-i18n` / `data-i18n-html` / `data-i18n-aria` + `translations` 对象，切换时同步刷新已打开的弹窗与作品卡无障碍名称
- **明暗主题** —— 写入 `localStorage: quietfolio-theme`；首屏由 `<head>` 内联脚本在样式表之前预设，无闪烁；无存储偏好时跟随系统 `prefers-color-scheme`
- **滚动进度条** —— 顶栏下沿细线随滚动比例伸缩，并高亮当前分区导航项
- **进入视口动效** —— `data-reveal="up|left|right|fade"` 四种方向，同组内按顺序交错触发
- **项目卡 3D 倾斜** —— 跟随指针的 rotateX / rotateY（`data-tilt-max`，默认 4°），rAF 缓动；移出后交回 CSS 过渡自然复位
- **磁吸按钮** —— `data-magnetic` + `data-magnetic-strength`，指针靠近产生吸附位移
- **项目详情弹窗** —— 静态数据源渲染；Esc / 遮罩 / 关闭按钮三种关闭方式，滚动锁定，`inert` 背景隔离，Tab 焦点陷阱与关闭后焦点回填，支持上/下一个项目
- **移动端折叠菜单**、**邮箱复制 + Toast 提示**

## 无障碍与降级

- 触屏 / 粗指针设备自动关闭 3D 倾斜与磁吸（JS 与 CSS 双重判断）
- `prefers-reduced-motion: reduce` 时全部动效关闭，内容直接可见可操作
- 弹窗使用 `role="dialog"` + `aria-modal` + `aria-labelledby`，背景 `inert`
- 作品卡整卡点击区是语义化 `<button>`，无障碍名称由标题动态拼装（如「查看详情：Quiet Space」）
- 提供「跳到主要内容」跳转链接与 `:focus-visible` 焦点样式
- 使用系统默认光标（不接管、不隐藏）

## 建议先改的内容

| 要改什么 | 在哪里 |
|---|---|
| 姓名 | `index.html` 搜索 `张心田` |
| 中英文案 | `script.js` 的 `translations.zh` / `translations.en` |
| 邮箱 | `script.js` 搜索 `hello@example.com` |
| 作品卡片文案 | `index.html` + `script.js` 的 `translations` |
| 作品详情弹窗内容 | `script.js` 的 `projectDetails`（按 `项目 id + 语言` 维护） |
| 配色 / 圆角 / 间距 | `styles.css` 顶部 `:root` 与 `html[data-theme="dark"]` |
| 作品卡配图 | `styles.css` 的 `.visual-1 / .visual-2 / .visual-3`（现为渐变占位，可换成 `background-image`） |
| 动效强度 | `index.html` 的 `data-tilt-max` / `data-magnetic-strength` |

## 说明

- 目前文案、项目和邮箱均为示例内容，上线前请替换。
- 不包含数据库、登录、后台管理、留言存储或分析统计；全部数据为静态源。
- 浏览器要求：现代 Chrome / Edge / Safari / Firefox。`backdrop-filter`、`inert`、`scrollbar-gutter` 在旧版浏览器下静默降级（毛玻璃变纯色、背景未隔离、滚动锁定可能出现细微横向位移）。
