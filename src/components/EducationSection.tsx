import { educations } from '../data/education'

const EducationSection = () => {
  const items = educations.slice().sort((a, b) => a.order - b.order)

  return (
    <section id="education" className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-semibold text-slate-900">教育经历</h2>
        <p className="mt-4 max-w-2xl text-slate-600">
          展示学校、专业、学历与学习时间，可选补充亮点与荣誉成果。
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {items.map((edu) => (
            <article
              key={edu.id}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <h3 className="text-base font-semibold text-slate-900">
                {edu.school}｜{edu.major}
              </h3>
              <p className="mt-1 text-xs text-slate-500">
                {edu.degree} · {edu.start} - {edu.end ?? '至今'}
              </p>

              {edu.highlights && edu.highlights.length > 0 && (
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
                  {edu.highlights.map((line, idx) => (
                    <li key={`${edu.id}-h-${idx}`}>{line}</li>
                  ))}
                </ul>
              )}

              {edu.honors && edu.honors.length > 0 && (
                <div className="mt-4">
                  <h4 className="text-xs font-semibold text-slate-700">荣誉/成果</h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {edu.honors.map((honor) => (
                      <span
                        key={honor}
                        className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700"
                      >
                        {honor}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EducationSection

