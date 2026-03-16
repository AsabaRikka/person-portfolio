import { profile } from '../data/profile'

const AboutSection = () => {
  return (
    <section id="about" className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-semibold text-slate-900">关于我</h2>

        <div className="mt-6 space-y-6">
          <div>
            <p className="text-lg font-medium text-slate-900">
              {profile.name} · {profile.title}
            </p>
            {profile.location && (
              <p className="text-sm text-slate-500">{profile.location}</p>
            )}
          </div>

          {profile.jobIntention && (
            <div>
              <h3 className="text-sm font-semibold text-slate-700">求职意向</h3>
              <div className="mt-2 space-y-1 text-sm text-slate-600">
                <p>目标岗位/方向：{profile.jobIntention.targetRole}</p>
                {profile.jobIntention.targetLocation && (
                  <p>期望地点：{profile.jobIntention.targetLocation}</p>
                )}
                {profile.jobIntention.availability && (
                  <p>到岗时间：{profile.jobIntention.availability}</p>
                )}
              </div>
            </div>
          )}

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

          {profile.briefExperience && profile.briefExperience.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-slate-700">简略经历</h3>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-slate-600">
                {profile.briefExperience.map((line, idx) => (
                  <li key={`brief-${idx}`}>{line}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default AboutSection