个人作品集网站 技术设计（MVP）

## 一、技术栈选型

### 1.1 前端框架
- **React + TypeScript + Vite**
  - **React**：组件化 UI、生态成熟，适合快速搭建单页作品集网站。
  - **TypeScript**：提供类型约束，减少运行时错误，方便后续扩展维护。
  - **Vite**：
    - 开发体验好（快速冷启动、HMR 快）。
    - 内置对 TypeScript 和 React 的良好支持。
    - 适合轻量级单页应用的构建和部署。

### 1.2 样式与布局
- **Tailwind CSS**
  - 原子化类名，提高开发效率。
  - 适合快速实现响应式布局和动效（配合 `transition`、`transform` 等工具类）。
  - 可编写少量自定义样式（如品牌色、字体）通过 `tailwind.config.js` 配置。

### 1.3 数据与状态管理
- **数据来源**：MVP 阶段以静态配置为主（本地常量 / JSON），不接入后端。
- **局部状态**：使用 React Hooks（`useState`、`useEffect`）管理页面内交互状态（如导航展开、当前激活区块）。
- **持久化存储**：使用 `localStorage` 存储轻量配置类数据，例如：
  - 用户上次访问时的主题偏好（如浅色/深色模式，若本期启用）。
  - 是否显示某些引导提示（如第一次访问时的引导弹层，若添加）。
> 备注：MVP 阶段核心内容（项目列表、关于我文案等）不依赖 `localStorage`，以静态数据为主，`localStorage` 仅做体验增强。

### 1.4 动画与交互
- 优先使用 **CSS / Tailwind 工具类 + 少量 JS**：
  - 基础过渡：`transition`, `duration-xxx`, `ease-xxx`。
  - 变换：`transform`, `translate`, `scale`, `opacity` 等。
- 若需要滚动进入时淡入效果：
  - MVP 可使用简单的 `IntersectionObserver` + 状态控制类名。
  - 暂不引入复杂动画库（如 Framer Motion），后续可迭代。

### 1.5 构建与部署
- 使用 Vite 默认构建产物（`npm run build`）。
- 部署目标：静态托管平台（如 GitHub Pages / Vercel / Netlify 等），通过单页应用配置支持前端路由（若启用）。

---

## 二、项目结构设计（基于 React）

### 2.1 基础目录结构（MVP 精简版）

```text
person-portfolio/
├─ index.html
├─ vite.config.ts
├─ tsconfig.json
├─ tailwind.config.js
├─ package.json
└─ src/
   ├─ main.tsx          # 入口文件
   ├─ App.tsx           # 顶层应用组件（布局+锚点）
   ├─ assets/           # 图片、图标等静态资源
   ├─ styles/
   │  └─ index.css      # Tailwind 引入 & 全局样式（Tailwind v4）
   ├─ components/       # 所有 React 组件（先放在一层）
   │  ├─ Navbar.tsx
   │  ├─ HeroSection.tsx
   │  ├─ AboutSection.tsx
   │  ├─ ExperienceSection.tsx
   │  ├─ ProjectsSection.tsx
   │  ├─ ProjectCard.tsx
   │  ├─ EducationSection.tsx
   │  ├─ ContactSection.tsx
   │  └─ Footer.tsx
   └─ data/             # 静态数据
      ├─ profile.ts     # 个人信息/技能标签/求职意向等
      ├─ experience.ts  # 工作经历数据
      ├─ projects.ts    # 项目列表数据
      ├─ education.ts   # 教育经历数据
      └─ contact.ts     # 联系方式数据
```

> 备注：MVP 阶段不再拆 `layout/sections/common/hooks/utils` 等子目录，全部组件先集中在 `components/`，等项目变复杂再按需要拆分。

### 2.2 组件职责划分（与 PRD 对应）

- `App.tsx`
  - 负责整体页面结构、全局布局。
  - 包含 `Navbar`、各个 Section 组件。
  - 管理锚点 ID（`#home`, `#about`, `#experience`, `#projects`, `#education`, `#contact`）以支持导航跳转。

- `Navbar.tsx`
  - 展示站点标题/Logo 和导航菜单（Home / About / Experience / Projects / Education / Contact）。
  - 桌面端：水平菜单；移动端：汉堡菜单 + 抽屉/下拉。
  - 点击导航项时，调用滚动工具函数滚动到对应 Section。

- `HeroSection.tsx`
  - 对应 PRD 的「首页」模块：
    - 大标题（身份定位）。
    - 简短介绍。
    - 快速按钮（跳转到 Projects / Contact）。
  - 加入基础淡入动画（进入视口或页面加载时）。

- `AboutSection.tsx`
  - 对应「关于我」模块：
    - 基本信息、技能标签、简要经历。
  - 文案与数据从 `data/profile.ts` 中读取。

- `ExperienceSection.tsx`
  - 对应「工作经历」模块：
    - 从 `data/experience.ts` 获取经历数组并渲染“经历大块 + 亮点卡片列表”。
    - 每段经历（大块）包含：
      - 标题行（公司｜岗位｜起止时间）
      - 亮点卡片列表：每张卡片包含「一句话亮点标题 + 2–4 条要点 + 能力标签（可选）」

- `ProjectsSection.tsx`
  - 对应「项目展示」模块：
    - 从 `data/projects.ts` 获取项目数组。
    - 使用 `ProjectCard` 逐个渲染。
  - 可添加简单的过滤/排序（例如按权重排序，MVP 可写死排序）。

- `ProjectCard.tsx`
  - 单个项目卡片组件：
    - 展示名称、简介、技术栈标签、链接按钮。
    - 在桌面端有 Hover 动效（轻微放大、阴影变化）。

- `EducationSection.tsx`
  - 对应「教育经历」模块：
    - 从 `data/education.ts` 获取教育经历数组并渲染卡片列表。
    - 每条教育经历包含：标题行（学校｜专业｜学历｜学习起止时间）、要点（可选）、荣誉/成果（可选）。

- `ContactSection.tsx`
  - 对应「联系方式」模块：
    - 展示邮箱、GitHub、其他社交链接。
    - 邮箱使用 `mailto:` 链接。
  - 布局在移动端保证点击区域足够大。

- `Footer.tsx`
  - 展示版权信息或简单一句标语（如 “Crafted by XXX”）。

---

## 三、状态与数据管理设计

### 3.1 静态数据结构示例

- `data/profile.ts`
  - 个人基础信息（名称、职位、地点）。
  - 技能标签（按类别分组，如前端/后端/工具）。
  - 精简的经历列表（若需要）。

- `data/experience.ts`
  - 工作经历数组：每段经历包含 `id`, `company`, `role`, `start`, `end?`, `cards[]`, `order` 等字段。
  - `cards[]`（亮点卡片）字段建议：`title`, `bullets[]`, `tags[]?`。

- `data/projects.ts`
  - 项目数组：每个项目包含 `id`, `title`, `description`, `techStack[]`, `demoUrl?`, `repoUrl?`, `order` 等字段。

- `data/education.ts`
  - 教育经历数组：每条包含 `id`, `school`, `major`, `degree`, `start`, `end?`, `highlights[]?`, `honors[]?`, `order` 等字段。

- `data/contact.ts`
  - 联系方式数据：包含 `email`, `githubUrl`, `links[]`（其他社交/博客），`phone?`, `wechatQrImage?`（可选）等字段。

> 目的：通过结构化数据驱动 UI，方便后续仅通过修改数据文件维护内容。

### 3.2 localStorage 使用方案

- 自定义 Hook：`useLocalStorage<T>(key: string, initialValue: T)`
  - 包装对 `localStorage` 的读写，统一处理 JSON 序列化。
  - 封装浏览器环境判断（避免 SSR 或构建时错误，虽然 Vite SPA 默认仅在浏览器运行）。

- MVP 潜在使用点：
  - 主题偏好（如 `theme = 'light' | 'dark'`）。
  - 是否展示一次性提示（如欢迎提示，若后续添加）。

> 目前 PRD 中核心功能不依赖持久化数据，`localStorage` 作为增强项，不影响主流程。

---

## 四、样式与动效设计

### 4.1 Tailwind 设计约定（MVP）
- 在 `tailwind.config.js` 中配置：
  - **品牌色**：主色、强调色（用于按钮、链接、卡片 Hover）。
  - **字体**：全局主字体（如 `system-ui` 或定制 Google Fonts）。
- 页面布局：
  - 使用 `max-w-...` + `mx-auto` 控制内容宽度。
  - `py-...` / `space-y-...` 统一区块间距。

### 4.2 动效实现

- **淡入与上滑效果**
  - 通过 `opacity-0` + `translate-y-...` 初始状态配合 `transition`，在进入视口时加上如 `opacity-100` + `translate-y-0`。
  - 使用 `useScrollReveal` Hook（封装 `IntersectionObserver`）控制何时添加类名。

- **Hover 动效**
  - `ProjectCard`：添加 `hover:scale-105`, `hover:shadow-lg`, `transition-transform`, `transition-shadow`。
  - 按钮：`hover:bg-*`、`hover:text-*` 等。

---

## 五、路由与导航方案

- MVP 采用 **单页应用 + 锚点导航**：
  - 不使用复杂前端路由库（如 React Router），路由仅限 `/`。
  - 导航点击时，通过 `document.getElementById` + `scrollIntoView` 或封装滚动函数实现平滑滚动。
  - 各 Section 设置对应 ID：`home`、`about`、`experience`、`projects`、`education`、`contact`。

> 如后续增加博客或项目详情页，再考虑引入 React Router 并扩展路由。

---

## 六、开发与代码规范（简要）

- 使用 TypeScript，所有组件尽量声明 Props 类型。
- 使用函数式组件 + Hooks，不使用 Class 组件。
- 组件划分遵循：
  - Section 组件负责页面区域布局。
  - 基础组件（按钮、卡片、Icon 等）保持复用性。
- 命名风格：
  - 文件/组件：`PascalCase`（如 `HeroSection.tsx`）。
  - 变量/函数：`camelCase`。

---

## 七、简历导出（可迭代 V1：打印视图 → PDF）

> 目标：将网页信息（统一数据源 `src/data/*`）导出为可投递/可打印的简历 PDF。V1 以“打印视图”方案优先，降低实现复杂度并确保可用性。

### 7.1 方案选型

- **V1 推荐方案：打印视图 + `window.print()`**
  - 在浏览器中打开一个专用的简历页面/视图（Resume）。
  - 用户点击「打印/下载 PDF」按钮后调用 `window.print()`。
  - 由浏览器原生能力“另存为 PDF”完成导出。
- **后续可选方案（V2+）**
  - 引入 HTML → PDF / DOM → PDF 的前端库做“一键下载 PDF”，但成本更高、兼容性需评估。

### 7.2 页面结构设计（不引入路由库）

MVP 不使用 React Router，因此 V1 推荐使用 **查询参数** 切换视图：

- 首页正常访问：`/`
- 简历视图访问：`/?view=resume`

实现思路：

- `App.tsx` 读取 `new URLSearchParams(window.location.search)`。
- 当 `view === 'resume'` 时渲染 `ResumePage`；否则渲染当前的单页区块（Navbar + Sections）。
- `ResumePage` 内提供「返回主页」链接：`/`（或移除 query）。

> 备注：若未来需要独立 URL（如 `/resume`）再考虑引入路由或 Vite 多页面（`resume.html` + 单独入口）。

### 7.3 组件与文件规划（V1）

在现有结构上新增：

```text
src/
  ├─ pages/
  │  └─ ResumePage.tsx      # 简历打印视图（仅展示，不复用 Navbar/Section 布局）
  └─ styles/
     ├─ index.css           # 站点全局样式（Tailwind 入口）
     └─ print.css           # 打印专用样式（@media print）
```

> MVP 仍保持组件集中在 `components/`；若你更倾向于极简目录，也可以把 `ResumePage.tsx` 暂时放在 `components/`，后续再迁移到 `pages/`。

### 7.4 ResumePage 数据来源与内容映射（V1）

- **数据源要求**：只能读取 `src/data/*`，禁止手写第二份简历内容，避免双维护。
- **建议导出内容顺序**（与 PRD 5.1 对齐）：
  1. Header：姓名 + title + location + 联系方式（email/github/links；phone/wechat 可选）
  2. 求职意向（可选）
  3. 技能
  4. 工作经历（经历大块 + 亮点卡片）
  5. 项目展示（按 `order`）
  6. 教育经历（按 `order`）

### 7.5 打印样式策略（V1）

目标：A4 可读、适合黑白打印、布局不溢出。

- 新增 `src/styles/print.css` 并在 `ResumePage` 中引入（或在全局引入，但仅对简历视图生效）。
- 核心规则（建议）：
  - `@media print` 下隐藏非简历元素（如返回按钮、顶部提示等）。
  - 设置打印页边距：使用 `@page { size: A4; margin: 12mm; }`（不同浏览器支持度略有差异）。
  - 使用可打印友好的颜色：避免大面积背景色；强调信息用字体粗细/下划线代替。
  - 链接可点击且可读：保持 `<a href>`，必要时打印模式下增加 `text-decoration: underline;`。
  - 避免断页尴尬：对“经历大块/项目卡片”使用 `break-inside: avoid;`（部分浏览器支持）。

### 7.6 导出交互（V1）

- 在 `ResumePage` 顶部提供两个按钮：
  - **打印/下载 PDF**：触发 `window.print()`
  - **返回主页**：移除 `view=resume` 并回到 `/`
- 错误处理：
  - `window.print()` 通常不会抛错；若浏览器限制弹窗/打印，可提示用户手动使用浏览器菜单打印。

---

## 八、后续可迭代方向（非 MVP）

- 引入动画库（如 Framer Motion）增强交互体验。
- 接入 Headless CMS 或远程数据源管理项目/内容。
- 增加多语言切换（中/英）。
- 增加博客/文章系统与项目详情页。
- 增加网页信息导出「简历模板 PDF」功能（V1 优先使用打印方案 `window.print()`）。

