// import Image from 'next/image'
import { ReactNode } from 'react'

export function Topic({
  children,
  topicTitle
}: {
  children: ReactNode
  topicTitle: string
}) {
  return (
    <div className="bg-transparent border-2 cursor-pointer dark:text-terra-o-gray-400 dark:hover:text-terra-o-terra border-terra-o-terra dark:border-terra-o-gray-400 transition-all duration-100 hover:dark:border-terra-o-terra flex items-center justify-center gap-4 px-10 py-2">
      {children}
      <p>{topicTitle}</p>
    </div>
  )
}
