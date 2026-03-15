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
    title: '示例项目一',
    description: '这里是一句项目介绍，说明这个项目做了什么。',
    techStack: ['React', 'TypeScript'],
    demoUrl: '#',
    repoUrl: '#',
    order: 1,
  },
  {
    id: 'project-2',
    title: '示例项目二',
    description: '另一个示例项目，用来练习列表渲染和样式。',
    techStack: ['Vite', 'Tailwind CSS'],
    order: 2,
  },
  {
    id: 'project-3',
    title: '示例项目三',
    description: '可以稍后替换成你自己的真实项目。',
    techStack: ['React', 'Node.js'],
    order: 3,
  },
]