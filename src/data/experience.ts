export interface ExperienceHighlightCard {
  title: string
  bullets: string[]
  tags?: string[]
}

export interface Experience {
  id: string
  company: string
  role: string
  start: string
  end?: string
  cards: ExperienceHighlightCard[]
  order: number
}

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    company: '示例公司 A',
    role: '前端开发工程师',
    start: '2024.01',
    end: '2025.06',
    cards: [
      {
        title: '重构核心页面，提升交付效率',
        bullets: [
          '梳理组件边界与复用点，减少重复代码与维护成本。',
          '完善开发流程与约束，提升协作效率与代码一致性。',
        ],
        tags: ['React', 'TypeScript', '组件化'],
      },
      {
        title: '优化性能与交互体验',
        bullets: [
          '聚焦首屏关键路径，减少不必要的渲染与资源加载。',
          '为交互与动效添加合理过渡，提升整体体验质感。',
        ],
        tags: ['性能优化', '体验优化'],
      },
    ],
    order: 1,
  },
  {
    id: 'exp-2',
    company: '示例公司 B',
    role: 'Web 开发实习生',
    start: '2023.06',
    end: '2023.12',
    cards: [
      {
        title: '参与业务迭代与缺陷修复',
        bullets: ['按需求交付页面功能，修复线上问题并复盘原因。'],
        tags: ['协作', '问题排查'],
      },
    ],
    order: 2,
  },
]

