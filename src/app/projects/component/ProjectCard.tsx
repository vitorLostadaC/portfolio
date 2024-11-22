import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Project } from '../data'
import { ProjectStack } from './components/ProjectStack'

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card>
      <CardHeader>
        <img
          src={project.image}
          alt={project.name}
          className=" w-96 rounded-md aspect-video object-cover"
        />
      </CardHeader>
      <CardContent>
        <h3 className="text-lg font-bold">{project.name}</h3>
        <p className="text-sm text-muted-foreground">{project.description}</p>
        <ProjectStack stack={project.tags} />
      </CardContent>
    </Card>
  )
}
