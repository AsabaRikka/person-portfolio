export interface ContactLink {
  label: string
  url: string
}

export interface ContactInfo {
  email: string
  githubUrl: string
  links: ContactLink[]
  phone?: string
  wechatQrText?: string
}

export const contact: ContactInfo = {
  email: 'your@email.com',
  githubUrl: 'https://github.com/yourname',
  links: [
    { label: '掘金', url: 'https://juejin.cn/user/your-id' },
    { label: '知乎', url: 'https://www.zhihu.com/people/your-id' },
  ],
  phone: '13800000000',
  wechatQrText: '微信二维码（占位）：后续放图片或链接',
}

