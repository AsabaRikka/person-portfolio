import { experiences } from '../data/experience'

const ExperienceSection = () => {
  const items = experiences.slice().sort((a, b) => a.order - b.order)

  return (
    <section id="experience" className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-semibold text-slate-900">工作经历</h2>
        <p className="mt-4 max-w-2xl text-slate-600">
          按经历分块展示公司、岗位与时间，并列出每段经历下的亮点卡片。
        </p>

        <div className="mt-8 space-y-10">
          {items.map((exp) => (
            <div key={exp.id}>
              <div className="flex flex-col gap-1">
                <h3 className="text-base font-semibold text-slate-900">
                  {exp.company}｜{exp.role}
                </h3>
                <p className="text-xs text-slate-500">
                  {exp.start} - {exp.end ?? '至今'}
                </p>
              </div>

              <div className="mt-4 grid gap-6 sm:grid-cols-2">
                {exp.cards.map((card, idx) => (
                  <article
                    key={`${exp.id}-c-${idx}`}
                    className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                  >
                    <h4 className="text-sm font-semibold text-slate-900">
                      {card.title}
                    </h4>

                    <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600">
                      {card.bullets.map((line, bulletIdx) => (
                        <li key={`${exp.id}-c-${idx}-b-${bulletIdx}`}>{line}</li>
                      ))}
                    </ul>

                    {card.tags && card.tags.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {card.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection

