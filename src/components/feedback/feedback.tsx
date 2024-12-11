'use client'

import { anim, CustomVariant } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'
import { CheckIcon, Loader2, MessageCircle, XIcon } from 'lucide-react'
import { Dispatch, SetStateAction, useState } from 'react'
import { Textarea } from '../ui/textarea'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { sendTemplate } from './email-template/send-template'

const MessageCircleMotion = motion(MessageCircle)
const Loader2Motion = motion(Loader2)
const ButtonMotion = motion(Button)

export const Feedback = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [alreadyInteracted, setAlreadyInterected] = useState(false)
  const [userEmail, setUserEmail] = useState('')

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <FeedbackDialog
            setIsOpen={setIsOpen}
            userEmail={userEmail}
            setUserEmail={setUserEmail}
          />
        )}
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
  userEmail: string
  setUserEmail: Dispatch<SetStateAction<string>>
}

export const FeedbackDialog = ({
  setIsOpen,
  userEmail,
  setUserEmail
}: FeedbackDialogProps) => {
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<'success' | 'error' | null>(null)
  const [feedback, setFeedback] = useState('')

  // do the screen about error or success and look ease on button, fun with ease animation on container

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

    setIsLoading(true)

    const response = await sendTemplate({
      feedback,
      email: userEmail
    })

    setIsLoading(false)
    setResult(response.success ? 'success' : 'error')

    setTimeout(() => {
      setIsOpen(false)
    }, 2000)
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
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
        <Input
          placeholder="Email (optional)"
          value={userEmail}
          type="email"
          onChange={(e) => setUserEmail(e.target.value)}
        />{' '}
        <motion.div className="flex gap-2">
          <Button
            onClick={() => setIsOpen(false)}
            variant={'outline'}
            type="button"
            disabled={isLoading}
          >
            Cancel
          </Button>
          <ButtonMotion
            type="submit"
            className="relative flex w-36 overflow-hidden"
            disabled={!feedback || isLoading}
          >
            <AnimatePresence mode="popLayout">
              {!isLoading && (
                <motion.p exit={{ y: -50, filter: 'blur(40px)' }}>
                  Send feedback
                </motion.p>
              )}
            </AnimatePresence>

            {isLoading && (
              <Loader2Motion
                initial={{ y: 50 }}
                className="h-4 w-4"
                animate={{
                  rotate: 360,
                  y: 0
                }}
                transition={{
                  rotate: {
                    duration: 0.6,
                    ease: 'linear',
                    repeat: Infinity
                  }
                }}
              />
            )}
          </ButtonMotion>
        </motion.div>
        {!feedback && (
          <motion.span
            layoutId="feedback"
            className="pointer-events-none absolute left-2 top-2 text-muted-foreground"
          >
            Feedback
          </motion.span>
        )}
        {result && (
          <motion.div
            className="absolute inset-0 flex cursor-default bg-background"
            initial={{ filter: 'blur(5px)', opacity: 0 }}
            animate={{ filter: 'blur(0px)', opacity: 1 }}
          >
            <motion.div
              initial={{ y: -40 }}
              animate={{
                y: 0
              }}
              className="flex w-full flex-col items-center justify-center gap-2"
            >
              {result === 'success' ? (
                <>
                  <CheckIcon className="size-5 text-emerald-400" />

                  <div className="flex flex-col items-center">
                    <h6 className="font-medium">Feedback sent</h6>
                    <p className="text-center text-sm text-muted-foreground">
                      Thanks for helping me improve
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <XIcon className="size-5 text-red-400" />

                  <div className="flex flex-col items-center">
                    <h6 className="font-medium">Feedback not sent</h6>
                    <p className="text-center text-sm text-muted-foreground">
                      Please try again later
                    </p>
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </motion.form>
    </motion.div>
  )
}
