import { profile } from '../data/profile'

const AboutSection = () => {
  return (
    <section id="about" className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-semibold text-slate-900">关于我</h2>

        <div className="mt-6 space-y-4">
          <div>
            <p className="text-lg font-medium text-slate-900">
              {profile.name} · {profile.title}
            </p>
            {profile.location && (
              <p className="text-sm text-slate-500">{profile.location}</p>
            )}
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-700">技能标签</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {profile.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection