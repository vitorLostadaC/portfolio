'use client'

import { Button } from '@/components/ui/button'
import { SimpleTooltip } from '@/components/ui/simple-tooltip'
import { cn } from '@/lib/utils'
import { Project } from '../../data/project'
import { PlayIcon, GithubIcon } from 'lucide-react'
import posthog from 'posthog-js'

export const LinkButtons = ({ project }: { project: Project }) => {
  const linkButtons = [
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

  return (
    <div className="flex gap-2">
      {linkButtons
        .filter((link) => link.href)
        .map((link) => {
          return (
            <SimpleTooltip content={link.label} key={link.label}>
              <Button variant="outline" size="icon" asChild>
                <a
                  href={link.href}
                  target="_blank"
                  onClick={() =>
                    posthog.capture('project_link_clicked', {
                      link: link.href,
                      project_name: project.name,
                      project_slug: project.slug,
                      link_label: link.label
                    })
                  }
                >
                  <link.icon className={cn('size-4', {})} />
                </a>
              </Button>
            </SimpleTooltip>
          )
        })}
    </div>
  )
}
