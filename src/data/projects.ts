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
    title: '占位',
    description: '占位',
    techStack: ['占位'],
    // demoUrl: 'https://your-demo-link',
    // repoUrl: 'https://github.com/your-repo',
    order: 1,
  },
  {
    id: 'project-2',
    title: '占位',
    description: '占位',
    techStack: ['占位'],
    order: 2,
  },
  {
    id: 'project-3',
    title: '占位',
    description: '占位',
    techStack: ['占位'],
    order: 3,
  },
  {
    id: 'project-4',
    title: '占位',
    description: '占位',
    techStack: ['占位'],
    order: 4,
  },
]