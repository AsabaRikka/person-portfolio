export interface Profile {
    name: string
    title: string
    location?: string
    skills: string[]
  }
  
  export const profile: Profile = {
    name: '你的名字',
    title: '前端开发工程师',
    location: '城市 · 国家',
    skills: ['React', 'TypeScript', 'Vite'],
  }