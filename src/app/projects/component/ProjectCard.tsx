/* eslint-disable @next/next/no-img-element */
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Project } from '../data/project'
import { ProjectStack } from './components/project-stack'
import { Button } from '@/components/ui/button'
import { GithubIcon, PlayIcon } from 'lucide-react'
import { SimpleTooltip } from '@/components/ui/simple-tooltip'
import { MagicButton } from './components/magic-button'

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
    <Card className="flex flex-col h-full">
      <CardHeader>
        <img
          src={project.image}
          alt={project.name}
          className="w-96 rounded-md aspect-video object-cover"
        />
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <h3 className="text-lg font-bold ">{project.name}</h3>
        <p className="text-sm text-muted-foreground mb-2 h-10">
          {project.description}
        </p>
        <ProjectStack stack={project.tags} />
      </CardContent>
      <CardFooter className="mt-auto">
        <div className="flex gap-2 h-full justify-between w-full">
          <MagicButton slug={project.slug} />
          <div className="flex gap-2">
            {linkButtons(project).map((link) => (
              <SimpleTooltip content={link.label} key={link.label}>
                <Button variant="outline" size="icon">
                  <link.icon className="w-4 h-4" />
                </Button>
              </SimpleTooltip>
            ))}
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
