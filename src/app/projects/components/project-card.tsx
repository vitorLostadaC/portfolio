import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Project } from '../data/project'
import { ProjectStack } from './components/project-stack'
import { Button } from '@/components/ui/button'
import { CalendarIcon, GithubIcon, PlayIcon } from 'lucide-react'
import { SimpleTooltip } from '@/components/ui/simple-tooltip'
import { MagicButtonView } from '../../../components/ui/magic-button-view'
import { DynamicTitle } from '../../../components/ui/dynamic-title'
import { cn } from '@/lib/utils'

const linkButtons = (project: Project) => [
  {
    icon: PlayIcon,
    label: 'Demo',
    href: project.demo
  },
  {
    icon: GithubIcon,
    label: 'Github',
    href: project.sourceCode
  }
]

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
        <div className="flex items-center justify-between">
          <DynamicTitle title={project.name} slug={project.slug} />
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

        <ProjectStack stack={project.tags} />
      </CardContent>
      <CardFooter className="mt-auto">
        <div className="flex h-full w-full justify-between gap-2">
          <MagicButtonView
            slug={project.slug}
            nestedPath="projects"
            label="Project"
          />
          <div className="flex gap-2">
            {linkButtons(project).map((link) => {
              const isAvailable = link.href

              return (
                <SimpleTooltip content={link.label} key={link.label}>
                  <Button variant="outline" size="icon" disabled={!isAvailable}>
                    <a href={link.href} target="_blank">
                      <link.icon className={cn('size-4', {})} />
                    </a>
                  </Button>
                </SimpleTooltip>
              )
            })}
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
