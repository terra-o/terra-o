import { ReactNode } from 'react'

type TopicProps = {
  children: ReactNode
  title: string
  topics: string[]
  setTopics: (topics: string[]) => void
}

export function Topic({ children, title, topics, setTopics }: TopicProps) {
  function toggleTopic() {
    if (topics.includes(title)) {
      setTopics(topics.filter((topic) => topic !== title))
    } else {
      setTopics([...topics, title])
    }
  }

  const toggled = topics.includes(title)

  return (
    <div
      onClick={toggleTopic}
      className={
        'border-2 cursor-pointer dark:hover:text-terra-o-white dark:hover:bg-terra-o-black border-terra-o-white dark:border-terra-o-black transition-colors hover:bg-terra-o-white hover:text-terra-o-black flex items-center justify-center gap-4 px-10 py-2 ' +
        (toggled &&
          'bg-terra-o-white text-terra-o-black dark:bg-terra-o-black dark:text-terra-o-white')
      }
    >
      {children}
      <p>{title}</p>
    </div>
  )
}
