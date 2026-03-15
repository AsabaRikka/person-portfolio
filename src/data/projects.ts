export interface Project {
  id: string
  title: string
  description: string
  techStack: string[]
  demoUrl?: string
  repoUrl?: string
  order: number
}

export const projects: Project[] = [
  {
    id: 'project-1',
    title: '广告投放与账户精细化管理',
    description: '通过关键词拓量、出价策略优化、落地页素材迭代、高转化时段聚焦核心动作，搭建日复盘、周优化的数据驱动运营体系。',
    techStack: ['关键词拓量', '出价策略优化', '落地页素材迭代', '高转化时段聚焦核心动作'],
    //demoUrl: '#',
    //repoUrl: '#',
    order: 1,
  },
  {
    id: 'project-2',
    title: '业绩表现亮眼',
    description: '试用期 6 个月日均利润稳定 6200 元，超额 15% 完成转正考核目标并提前 1 个月转正，为同期入职员工中最快达成业绩的成员；2025 年 6 月通过精细化策略优化，日均利润从 3108 元跃升至 12000 元，单月环比增长 286.1%，案例被纳入团队优秀投范本；7 月日均利润持续稳定在 11000 元以上，较团队同期均值高出 40%，连续两月为公司带来超 60 万月度增量利润。',
    techStack: ['超额 15% 完成转正考核目标', '提前 1 个月转正'],
    order: 2,
  },
  {
    id: 'project-3',
    title: '技术赋能运营提效',
    description: '作为 Jarvis 投放系统首批核心测试成员，从 0 到 1 参与 V 调控模块需求梳理与功能测试，独立撰写首版预算投放自动化脚本；该脚本在全部门推广后，替代人工预算调整、数据统计等重复性工作，使 Search 业务日常工作时长缩减 80%、团队投放人效提升 300%，并撰写操作手册助力新人上手周期缩短至 1 个月。',
    techStack: ['调控模块需求梳理', '首版预算投放自动化脚本'],
    order: 3,
  },
  {
    id: 'project-4',
    title: 'AI 驱动产品优化',
    description: '深耕 AI 提示词的拆解优化，在 AI 绘图，AI 前端落地页制作方面有独到见解，带领团队拓宽了测试网站的题型多元化发展。利用 AI 快速出图，实现落地页迭代速度翻倍。',
    techStack: ['AI 提示词的拆解优化', 'AI 绘图', 'AI 前端落地页制作'],
    order: 3,
  },
]