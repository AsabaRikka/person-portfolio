export interface Education {
  id: string
  school: string
  major: string
  degree: string
  start: string
  end?: string
  highlights?: string[]
  honors?: string[]
  order: number
}

export const educations: Education[] = [
  {
    id: 'edu-1',
    school: '示例大学',
    major: '计算机科学与技术',
    degree: '本科',
    start: '2019.09',
    end: '2023.06',
    highlights: ['主修课程：数据结构、操作系统、计算机网络。'],
    honors: ['奖学金（可选）'],
    order: 1,
  },
]

