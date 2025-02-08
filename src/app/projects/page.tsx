import { ProjectCard } from './components/project-card'
import { projects } from './data/projects'

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-10">
      <h1 className="flex items-center gap-2 text-2xl font-bold">
        Best Projects
      </h1>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects
          .filter((project) => project.pinned)
          .sort((a, b) => b.date.getTime() - a.date.getTime())
          .map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
      </div>

      <h1 className="text-2xl font-bold">Additional Projects</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects
          .filter((project) => !project.pinned)
          .sort((a, b) => b.date.getTime() - a.date.getTime())
          .map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
      </div>
    </div>
  )
}
