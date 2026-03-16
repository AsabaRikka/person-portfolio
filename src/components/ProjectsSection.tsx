import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

const ProjectsSection = () => {
  const items = projects.slice().sort((a, b) => a.order - b.order)

  return (
    <section id="projects" className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-semibold text-slate-900">项目展示</h2>
        <p className="mt-4 max-w-2xl text-slate-600">
          展示一些代表性项目/成果与可迁移能力，支持外链到 Demo 或源码（可选）。
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {items.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection