import type { Project } from '../data/projects'

interface ProjectCardProps {
  project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <h3 className="text-lg font-semibold text-slate-900">
        {project.title}
      </h3>

      <p className="mt-2 text-sm text-slate-600">
        {project.description}
      </p>

      <div className="mt-3 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700"
          >
            {tech}
          </span>
        ))}
      </div>

      {(project.demoUrl || project.repoUrl) && (
        <div className="mt-4 flex flex-wrap gap-3 text-xs">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-sky-600 px-3 py-1 font-medium text-sky-700 hover:bg-sky-50 transition-colors"
            >
              在线预览
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-slate-300 px-3 py-1 font-medium text-slate-700 hover:bg-slate-50 transition-colors"
            >
              源码查看
            </a>
          )}
        </div>
      )}
    </article>
  )
}

export default ProjectCard