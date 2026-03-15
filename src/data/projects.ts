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
  ]