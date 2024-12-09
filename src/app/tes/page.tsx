'use client'
import { AnimatePresence, motion } from 'framer-motion'
import {
  BriefcaseBusiness,
  CalendarDays,
  ClipboardCheck,
  Goal,
  LandPlot,
  NotebookPen,
  Plus,
  X
} from 'lucide-react'
import { useState } from 'react'

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <main className="relative flex min-h-screen w-full items-center justify-center px-4 py-10">
      <div className="z-10 flex w-full flex-col items-center">
        <div className="w-full border-b border-dashed border-slate-200"></div>
        <div className="relative mx-auto flex h-[500px] w-full max-w-lg flex-col items-center justify-center gap-8 bg-white px-4 py-16 md:px-16">
          <motion.button
            className="relative flex items-center justify-center gap-2 border border-[#efefef] bg-[#fbfbf9] px-8 py-4 text-[#666664]"
            style={{
              borderRadius: 50
            }}
            onClick={() => setIsModalOpen(true)}
            layoutId="modal"
          >
            <motion.div layoutId="plus">
              <Plus size={24} />
            </motion.div>
            <motion.span className="font-medium" layoutId="title">
              Create New
            </motion.span>
          </motion.button>
          <AnimatePresence>
            {isModalOpen && (
              <motion.div
                className="absolute inset-0 flex h-full w-full items-center justify-center"
                onClick={() => setIsModalOpen(false)}
              >
                <motion.div
                  className="flex w-[400px] flex-col items-center justify-center gap-2 overflow-hidden border-2 border-[#efefef] bg-[#fbfbf9] text-[#666664]"
                  style={{
                    borderRadius: 24
                  }}
                  layoutId="modal"
                >
                  <div className="relative flex w-full items-center justify-between px-6 pb-2 pt-4">
                    <motion.div
                      className="absolute left-0 top-0"
                      layoutId="plus"
                      style={{
                        opacity: 0
                      }}
                    >
                      <Plus size={24} />
                    </motion.div>
                    <motion.span className="font-medium" layoutId="title">
                      Create New
                    </motion.span>
                    <motion.button
                      className="flex size-7 items-center justify-center rounded-full bg-[#c0bfba] p-1 text-white"
                      onClick={(e) => {
                        e.stopPropagation()
                        setIsModalOpen(false)
                      }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, transition: { duration: 0.05 } }}
                    >
                      <X size={24} />
                    </motion.button>
                  </div>
                  <motion.div
                    className="grid w-full grid-cols-3 gap-4 border-t bg-white px-6 py-6"
                    style={{
                      borderTopLeftRadius: 24,
                      borderTopRightRadius: 24
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.05 } }}
                  >
                    {ITEMS.map(({ title, Icon }, index) => (
                      <motion.button
                        key={index}
                        className="flex w-full flex-col items-center justify-between gap-2 rounded-2xl py-3 transition-colors duration-300 hover:bg-[#f8f8f3]"
                        onClick={(e) => {
                          e.stopPropagation()
                          setIsModalOpen(false)
                        }}
                      >
                        <Icon />
                        <span className="font-medium text-[#63615a]">
                          {title}
                        </span>
                      </motion.button>
                    ))}
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="w-full border-t border-dashed border-slate-200"></div>
      </div>
      <div className="absolute inset-0 h-full w-full">
        <div className="pointer-events-none absolute inset-0 h-full w-full px-4 py-0">
          <div className="mx-auto flex h-full max-w-[1080px] items-center justify-between">
            <div className="h-full w-[1px] bg-slate-200"></div>
            <div className="h-full border-r border-dashed border-slate-200"></div>
            <div className="h-full border-r border-dashed border-slate-200"></div>
            <div className="h-full border-r border-dashed border-slate-200"></div>
            <div className="h-full w-[1px] bg-slate-200"></div>
          </div>
        </div>
      </div>
    </main>
  )
}

type ItemProps = {
  title: string
  Icon: React.FC<React.SVGProps<SVGSVGElement>>
}

const ITEMS: ItemProps[] = [
  {
    title: 'Project',
    Icon: BriefcaseBusiness
  },
  {
    title: 'Task',
    Icon: ClipboardCheck
  },
  {
    title: 'Note',
    Icon: NotebookPen
  },
  {
    title: 'Goal',
    Icon: Goal
  },
  {
    title: 'Milestone',
    Icon: LandPlot
  },
  {
    title: 'Reminder',
    Icon: CalendarDays
  }
]
