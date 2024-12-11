'use client'

import { motion } from 'framer-motion'
import { Recommendation, recommendations } from './data/recommendations'
import { anim, CustomVariant } from '@/lib/utils'

export default function Recommendations() {
  const recommendationsAnim: CustomVariant = {
    enter: {
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  return (
    <div className="mx-auto flex max-w-xl flex-col gap-4">
      <h2 className="text-3xl font-bold">Recommendations</h2>
      <p className="text-muted-foreground">
        Here&apos;s what some amazing people I&apos;ve worked with over the
        years have to say
      </p>
      <motion.div
        {...anim(recommendationsAnim)}
        className="flex flex-col gap-4"
      >
        {recommendations
          .sort((a, b) => b.date.getTime() - a.date.getTime())
          .map((recommendation) => (
            <RecommendationCard
              key={recommendation.name}
              recommendation={recommendation}
            />
          ))}
      </motion.div>
    </div>
  )
}

export const RecommendationCard = ({
  recommendation
}: {
  recommendation: Recommendation
}) => {
  const recommendationAnim: CustomVariant = {
    initial: {
      opacity: 0,
      y: -20
    },
    enter: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3
      }
    }
  }

  return (
    <motion.div
      variants={recommendationAnim}
      className="flex items-start gap-4 rounded-md border p-4"
    >
      <img
        src={recommendation.image}
        alt={recommendation.name}
        className="size-10 rounded-full"
      />

      <div>
        <h3 className="font-bold">{recommendation.name}</h3>
        <p className="text-muted-foreground">
          {recommendation.role} | {recommendation.relationship}
        </p>
        <p className="text-sm text-muted-foreground">
          {recommendation.date.toLocaleString('en-US', {
            month: '2-digit',
            year: 'numeric'
          })}{' '}
          - {recommendation.enterprise}
        </p>
        <div className="mt-4 flex flex-col gap-4">
          {recommendation.text.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
