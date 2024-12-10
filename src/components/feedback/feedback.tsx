'use client'

import { anim, CustomVariant } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { Dispatch, SetStateAction, useState } from 'react'
import { Textarea } from '../ui/textarea'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { sendTemplate } from './email-template/send-template'

const MessageCircleMotion = motion(MessageCircle)

export const Feedback = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [alreadyInteracted, setAlreadyInterected] = useState(false)

  return (
    <>
      <AnimatePresence>
        {isOpen && <FeedbackDialog setIsOpen={setIsOpen} />}
      </AnimatePresence>
      {!isOpen && (
        <FeedbackButton
          setIsOpen={setIsOpen}
          alreadyInteracted={alreadyInteracted}
          setAlreadyInterected={setAlreadyInterected}
        />
      )}
    </>
  )
}

interface FeedbackButtonProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>
  alreadyInteracted: boolean
  setAlreadyInterected: Dispatch<SetStateAction<boolean>>
}

export const FeedbackButton = ({
  setIsOpen,
  alreadyInteracted,
  setAlreadyInterected
}: FeedbackButtonProps) => {
  const mainAnim: CustomVariant = {
    initial: {
      opacity: 0,
      y: alreadyInteracted ? 0 : 20,
      scale: alreadyInteracted ? 1 : 0.8
    },
    enter: {
      opacity: 1,
      y: 0,
      scale: 1,
      borderRadius: '20px',
      transition: {
        delay: alreadyInteracted ? 0 : 2,
        type: 'spring'
      }
    }
  }

  const textAnim: CustomVariant = {
    initial: {
      width: alreadyInteracted ? '68px' : 0
    },
    enter: {
      width: '68px',

      transition: {
        delay: 2.2,
        type: 'spring',
        mass: 1
      }
    }
  }

  return (
    <motion.div
      className="fixed bottom-5 right-5 z-10 flex cursor-pointer items-center gap-2 border bg-background px-4 py-2 shadow-lg transition-colors"
      layoutId="container"
      onClick={() => {
        setIsOpen(true)
        if (!alreadyInteracted) setAlreadyInterected(true)
      }}
      {...anim(mainAnim)}
    >
      <motion.span
        {...anim(textAnim)}
        className="overflow-hidden text-sm font-medium"
        layoutId="feedback"
      >
        Feedback
      </motion.span>
      <MessageCircleMotion layout />
    </motion.div>
  )
}

interface FeedbackDialogProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export const FeedbackDialog = ({ setIsOpen }: FeedbackDialogProps) => {
  const [input, setInput] = useState({
    feedback: '',
    email: ''
  })

  const containerAnim: CustomVariant = {
    initial: { scale: 0.8 },
    enter: {
      scale: 1,
      borderRadius: '14px'
    }
  }

  const contentAnim: CustomVariant = {
    initial: {
      y: 40,
      opacity: 0,
      filter: 'blur(40px)'
    },
    enter: {
      y: 0,
      opacity: 1,
      filter: 'blur(0px)'
    },
    exit: {
      opacity: 0,
      y: 40,
      filter: 'blur(40px)'
    }
  }

  const handleSendFeedback = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    sendTemplate({
      feedback: input.feedback,
      email: input.email
    })
  }

  return (
    <motion.div
      className="fixed bottom-5 right-5 z-10 h-60 cursor-pointer border bg-background p-2 shadow-lg"
      layoutId="container"
      {...anim(containerAnim)}
    >
      <motion.form
        className="flex h-full flex-col items-center gap-2"
        onSubmit={handleSendFeedback}
        {...anim(contentAnim)}
      >
        <Textarea
          className="w-full flex-1 resize-none rounded-md p-2 focus-visible:outline-none"
          autoFocus
          value={input.feedback}
          onChange={(e) => setInput({ ...input, feedback: e.target.value })}
        />
        <Input
          placeholder="Email (optional)"
          value={input.email}
          onChange={(e) => setInput({ ...input, email: e.target.value })}
        />{' '}
        <motion.div className="flex gap-2">
          <Button
            onClick={() => setIsOpen(false)}
            variant={'outline'}
            type="button"
          >
            Cancel
          </Button>
          <Button type="submit" disabled={!input.feedback}>
            Send feedback
          </Button>
        </motion.div>
        {!input.feedback && (
          <motion.span
            layoutId="feedback"
            className="pointer-events-none absolute left-2 top-2 text-muted-foreground"
          >
            Feedback
          </motion.span>
        )}
      </motion.form>
    </motion.div>
  )
}
