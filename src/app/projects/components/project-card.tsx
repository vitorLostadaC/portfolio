import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Project } from '../data/project'
import { ProjectStack } from './components/project-stack'
import { CalendarIcon } from 'lucide-react'
import { MagicButtonView } from '../../../components/ui/magic-button-view'
import { DynamicTitle } from '../../../components/ui/dynamic-title'
import { Badge } from '@/components/ui/badge'
import { LinkButtons } from './components/link-buttons'

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card className="flex h-full flex-col">
      <CardHeader>
        <img
          src={project.image}
          alt={project.name}
          className="aspect-video w-96 rounded-md object-cover"
        />
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <DynamicTitle title={project.name} slug={project.slug} />
        <div className="flex items-center justify-between">
          <Badge variant={project.type}>{project.type}</Badge>
          <div className="flex items-center gap-2 text-muted-foreground">
            <CalendarIcon className="h-4 w-4" />
            <span className="text-sm">
              {project.date.toLocaleString('en-US', {
                year: 'numeric',
                month: 'long'
              })}
            </span>
          </div>
        </div>

        <p className="mb-2 h-10 text-sm text-muted-foreground">
          {project.description}
        </p>

        <ProjectStack slug={project.slug} stack={project.tags} />
      </CardContent>
      <CardFooter className="mt-auto">
        <div className="flex h-full w-full justify-between gap-2">
          <MagicButtonView
            slug={project.slug}
            nestedPath="projects"
            label="Project"
          />
          <LinkButtons project={project} />
        </div>
      </CardFooter>
    </Card>
  )
}
