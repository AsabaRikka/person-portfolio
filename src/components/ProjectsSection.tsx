import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

const ProjectsSection = () => {
  return (
    <section id="projects" className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-semibold text-slate-900">项目展示</h2>
        <p className="mt-4 max-w-2xl text-slate-600">
          下面是一些代表性的项目，后面你可以把这些示例替换成真实项目。
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection