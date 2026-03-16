import { contact } from '../data/contact'
import { educations } from '../data/education'
import { experiences } from '../data/experience'
import { profile } from '../data/profile'
import { projects } from '../data/projects'

interface ResumePageProps {
  onBack: () => void
}

const ResumePage = ({ onBack }: ResumePageProps) => {
  const experienceItems = experiences.slice().sort((a, b) => a.order - b.order)
  const educationItems = educations.slice().sort((a, b) => a.order - b.order)
  const projectItems = projects.slice().sort((a, b) => a.order - b.order)

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* 这块工具栏在第 3 步会用 @media print 隐藏 */}
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
          <div className="text-sm font-semibold">简历预览（V1）</div>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => window.print()}
              className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white"
            >
              打印 / 下载 PDF
            </button>
            <button
              type="button"
              onClick={onBack}
              className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700"
            >
              返回主页
            </button>
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        {/* Header */}
        <header>
          <h1 className="text-2xl font-semibold">{profile.name}</h1>
          <p className="mt-1 text-sm text-slate-700">
            {profile.title}
            {profile.location ? ` · ${profile.location}` : ''}
          </p>
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm">
            <a className="underline" href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
            <a
              className="underline"
              href={contact.githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              {contact.githubUrl}
            </a>
            {contact.links.map((item) => (
              <a
                key={item.url}
                className="underline"
                href={item.url}
                target="_blank"
                rel="noreferrer"
              >
                {item.label}
              </a>
            ))}
          </div>
        </header>

        {/* 求职意向 */}
        {profile.jobIntention && (
          <section className="mt-10">
            <h2 className="text-lg font-semibold">求职意向</h2>
            <div className="mt-3 space-y-1 text-sm text-slate-700">
              <p>目标岗位/方向：{profile.jobIntention.targetRole}</p>
              {profile.jobIntention.targetLocation && (
                <p>期望地点：{profile.jobIntention.targetLocation}</p>
              )}
              {profile.jobIntention.availability && (
                <p>到岗时间：{profile.jobIntention.availability}</p>
              )}
            </div>
          </section>
        )}

        {/* 技能 */}
        <section className="mt-10">
          <h2 className="text-lg font-semibold">技能</h2>
          <p className="mt-3 text-sm text-slate-700">{profile.skills.join(' · ')}</p>
        </section>

        {/* 工作经历 */}
        <section className="mt-10">
          <h2 className="text-lg font-semibold">工作经历</h2>
          <div className="mt-4 space-y-8">
            {experienceItems.map((exp) => (
              <div key={exp.id}>
                <div className="text-sm text-slate-700">
                  <span className="font-semibold text-slate-900">
                    {exp.company}｜{exp.role}
                  </span>
                  <span className="ml-2 text-slate-600">
                    {exp.start} - {exp.end ?? '至今'}
                  </span>
                </div>

                <div className="mt-3 space-y-4">
                  {exp.cards.map((card, idx) => (
                    <div key={`${exp.id}-c-${idx}`}>
                      <div className="text-sm font-semibold text-slate-900">
                        {card.title}
                      </div>
                      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
                        {card.bullets.map((line, bulletIdx) => (
                          <li key={`${exp.id}-c-${idx}-b-${bulletIdx}`}>{line}</li>
                        ))}
                      </ul>
                      {card.tags && card.tags.length > 0 && (
                        <p className="mt-2 text-xs text-slate-600">
                          标签：{card.tags.join(' · ')}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 项目展示 */}
        <section className="mt-10">
          <h2 className="text-lg font-semibold">项目展示</h2>
          <div className="mt-4 space-y-6">
            {projectItems.map((p) => (
              <article key={p.id}>
                <div className="text-sm font-semibold text-slate-900">{p.title}</div>
                <p className="mt-1 text-sm text-slate-700">{p.description}</p>
                <p className="mt-1 text-xs text-slate-600">
                  技术栈：{p.techStack.join(' · ')}
                </p>
                {(p.demoUrl || p.repoUrl) && (
                  <p className="mt-1 text-xs text-slate-600">
                    {p.demoUrl && (
                      <>
                        Demo：
                        <a className="underline" href={p.demoUrl} target="_blank" rel="noreferrer">
                          {p.demoUrl}
                        </a>
                      </>
                    )}
                    {p.demoUrl && p.repoUrl ? ' · ' : ''}
                    {p.repoUrl && (
                      <>
                        Repo：
                        <a className="underline" href={p.repoUrl} target="_blank" rel="noreferrer">
                          {p.repoUrl}
                        </a>
                      </>
                    )}
                  </p>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* 教育经历 */}
        <section className="mt-10">
          <h2 className="text-lg font-semibold">教育经历</h2>
          <div className="mt-4 space-y-6">
            {educationItems.map((edu) => (
              <article key={edu.id}>
                <div className="text-sm font-semibold text-slate-900">
                  {edu.school}｜{edu.major}
                </div>
                <p className="mt-1 text-sm text-slate-700">
                  {edu.degree} · {edu.start} - {edu.end ?? '至今'}
                </p>
                {edu.highlights && edu.highlights.length > 0 && (
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
                    {edu.highlights.map((line, idx) => (
                      <li key={`${edu.id}-h-${idx}`}>{line}</li>
                    ))}
                  </ul>
                )}
                {edu.honors && edu.honors.length > 0 && (
                  <p className="mt-2 text-xs text-slate-600">
                    荣誉/成果：{edu.honors.join(' · ')}
                  </p>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* 联系方式（补充字段） */}
        {(contact.phone || contact.wechatQrText) && (
          <section className="mt-10">
            <h2 className="text-lg font-semibold">联系方式补充（可选）</h2>
            <div className="mt-3 space-y-1 text-sm text-slate-700">
              {contact.phone && <p>电话：{contact.phone}</p>}
              {contact.wechatQrText && <p>微信：{contact.wechatQrText}</p>}
            </div>
          </section>
        )}
      </main>
    </div>
  )
}

export default ResumePage

