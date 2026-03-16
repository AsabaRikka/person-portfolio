export interface Profile {
  name: string
  title: string
  location?: string
  skills: string[]
  jobIntention?: {
    targetRole: string
    targetLocation?: string
    availability?: string
  }
  briefExperience?: string[]
  avatarUrl?: string
}

export const profile: Profile = {
  name: '谢涵韫',
  title: 'AI Agent工程师',
  location: '长沙 · 中国',
  skills: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
  jobIntention: {
    targetRole: '前端 / AI Agent 工程方向',
    targetLocation: '长沙（可远程/可协商）',
    availability: '随时到岗（占位）',
  },
  briefExperience: [
    '教育/工作/实习经历占位（1）：一句话描述最重要的经历或亮点。',
    '教育/工作/实习经历占位（2）：一句话描述你做过的关键事情或成果。',
    '教育/工作/实习经历占位（3）：一句话描述你的优势能力或擅长方向。',
  ],
  // avatarUrl: '/assets/avatar.png',
}