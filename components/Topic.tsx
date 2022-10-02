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

    console.log(topics)
  }

  return (
    <div
      onClick={toggleTopic}
      className={
        'bg-transparent relative border-2 cursor-pointer dark:text-terra-o-black dark:hover:text-terra-o-white dark:hover:bg-terra-o-black border-terra-o-white dark:border-terra-o-black transition-all duration-100 hover:bg-terra-o-white hover:text-terra-o-black flex items-center justify-center gap-4 px-10 py-2 ' +
        (topics.includes(title) &&
          'dark:bg-terra-o-black dark:text-terra-o-white bg-terra-o-white text-terra-o-black')
      }
      // almost there
    >
      {children}
      <p>{title}</p>
    </div>
  )
}
