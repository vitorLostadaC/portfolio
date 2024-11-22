import { ProjectCard } from './component/ProjectCard'
import { projects } from './data'

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Best Projects</h1>

      <div className="grid grid-cols-3 gap-4">
        {projects
          .filter((project) => project.pinned)
          .map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
      </div>

      <h1 className="text-2xl font-bold">All Projects</h1>
      <div className="flex gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  )
}
