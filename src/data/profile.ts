export interface Profile {
  name: string
  title: string
  location?: string
  skills: string[]
}

export const profile: Profile = {
  name: '谢涵韫',
  title: 'AI Agent工程师',
  location: '长沙 · 中国',
  skills: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
}