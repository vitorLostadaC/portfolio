/* eslint-disable @next/next/no-img-element */
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Project } from '../data'
import { ProjectStack } from './components/ProjectStack'
import { Button } from '@/components/ui/button'
import { GithubIcon, PlayIcon } from 'lucide-react'

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
      <CardContent className="flex flex-col gap-2">
        <h3 className="text-lg font-bold ">{project.name}</h3>
        <p className="text-sm text-muted-foreground mb-2">
          {project.description}
        </p>
        <ProjectStack stack={project.tags} />
      </CardContent>
      <CardFooter>
        <div className="flex gap-2">
          <Button variant="outline">
            <PlayIcon className="w-4 h-4" />
            Demo
          </Button>
          <Button variant="outline">
            <GithubIcon className="w-4 h-4" />
            Github
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
