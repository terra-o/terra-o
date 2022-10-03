import { useEffect, useState } from 'react'
import axios from 'axios'
import { CgSpinner } from 'react-icons/cg'

import Page from '@/components/layout/Page'
import { useTheme } from 'next-themes'
import ResultExternalEntry from '@/components/resources/ResultExternalEntry'
import ResultExternalTraining from '@/components/resources/ResultExternalTraining'

type ResourcesPageProps = {
  types: string
  topics: string
  where: string
  difficulty: string
  language: string
}

interface Entry {
  title: string
  description: string
  url: string
  image: string
  topic: string
}

interface Training {
  title: string
  image: string
  url: string
  type: string
  date: string
  level: string
  topic: string
}

export default function ResourcesPage({
  types,
  topics,
  where,
  difficulty,
  language
}: ResourcesPageProps) {
  const [loading, setLoading] = useState(true)
  const [entries, setEntries] = useState<Entry[]>([])
  const [trainings, setTrainings] = useState<Training[]>([])

  const { theme } = useTheme()

  useEffect(() => {
    async function getResources() {
      try {
        const { data } = await axios.get(
          `https://terra-o-core.herokuapp.com/resources?types=${types}&topics=${topics}&where=${where}&difficulty=${difficulty}&language=${language}`
        )

        data.entries.forEach((entry: Entry) => {
          if (!entries.some((e) => e.title === entry.title)) {
            setEntries((entries) => [...entries, entry])
          }
        })

        data.trainings.forEach((training: Training) => {
          if (!trainings.some((e) => e.title === training.title)) {
            setTrainings((trainings) => [...trainings, training])
          }
        })
      } finally {
        setLoading(false)
      }
    }

    getResources()
  }, [])

  return (
    <Page
      title="Resources"
      theme={theme === 'dark' ? 'light' : 'dark'}
      className="dark:bg-terra-o-white bg-terra-o-black min-h-screen"
    >
      <section className=" overflow-hidden flex flex-col items-center justify-center text-terra-o-white  dark:text-terra-o-black">
        {loading ? (
          <div className="flex h-[92.5vh] flex-col items-center text-terra-o-white dark:text-terra-o-black justify-center gap-y-6">
            <CgSpinner fontSize={52} className="animate-spin -mt-20" />
            <h2 className="text-4xl font-bold">
              Getting{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-terra-o-blue-200 to-terra-o-green-200">
                resources
              </span>
            </h2>
            <p className="text-center text-lg px-4 max-w-[28rem] text-terra-o-gray-200 dark:text-terra-o-gray-400">
              This might take a few seconds or minutes depending on the chosen
              parameters
            </p>
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center h-full">
            <div className="w-5/6 py-20">
              <div className="flex flex-col items-start gap-2">
                <h2 className="font-sans font-semibold text-2xl lg:text-3xl 2xl:text-4xl">
                  What we found for you
                </h2>
                <p className="font-sans font-normal text-terra-o-gray-300 text-md">
                  Here is the result of the search based on the filters you chose
                </p>
              </div>
            </div>
            <div className="w-screen bg-terra-o-white dark:bg-terra-o-black flex flex-col justify-center items-center">
              <div className="w-5/6 py-10 flex flex-col gap-y-20">
                {types.includes('entries') && (
                  <div className="flex flex-col items-start dark:text-terra-o-white text-terra-o-black gap-y-10">
                    <p className="text-lg 2xl:text-2xl font-bold">Entries</p>
                    {entries.length > 0 ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-20 gap-y-4">
                        {entries.map((entry, i) => (
                          <ResultExternalEntry
                            key={i}
                            topic={entry.topic}
                            name={entry.title}
                            description={entry.description}
                            image={entry.image}
                            url={entry.url}
                            provider={'European Space Agency'}
                          />
                        ))}
                      </div>
                    ) : (
                      <p className="text-lg -mt-8 2xl:text-xl font-bold text-terra-o-gray-300 dark:text-terra-o-gray-200">
                        No entries were found
                      </p>
                    )}
                  </div>
                )}
                {types.includes('trainings') && (
                  <div className="flex flex-col items-start dark:text-terra-o-white text-terra-o-black gap-y-10">
                    <p className="text-lg 2xl:text-2xl font-bold">
                      Training programs
                    </p>
                    {trainings.length > 0 ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 sm:gap-x-20 gap-y-4">
                        {trainings.map((training, i) => (
                          <ResultExternalTraining
                            key={i}
                            topic={training.topic}
                            name={training.title}
                            type={training.type}
                            level={training.level}
                            date={training.date}
                            url={training.url}
                          />
                        ))}
                      </div>
                    ) : (
                      <p className="text-lg -mt-8 2xl:text-xl font-bold text-terra-o-gray-300 dark:text-terra-o-gray-200">
                        No training programs were found
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
            <div className="w-5/6 py-20">
              <div className="flex sm:flex-row flex-col gap-10 sm:gap-20">
                <div className="flex flex-col items-start gap-4">
                  <h3 className="text-terra-o-white text-3xl 2xl:text-4xl dark:text-terra-o-black">
                    Do you have a suggestion for a resource? <br /> send it to
                    us
                  </h3>
                  <p className="text-md max-w-md text-terra-o-gray-300 ">
                  Is there another resource that is not listed on this site? Send it directly to us, so with your help we can get more quality content for our users
                  </p>
                </div>
                <form
                  className="flex flex-col items-start justify-between gap-y-2"
                  onSubmit={(event) => event.preventDefault()}
                >
                  <div className="flex flex-col">
                    <label htmlFor="email" className="text-md">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="bg-transparent border-2 w-[18rem] p-2 focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="resource" className="text-md">
                      Resource
                    </label>
                    <textarea
                      name="resource"
                      className="bg-transparent border-2 p-2 w-[18rem] focus:outline-none min-h-[8rem]"
                    />
                  </div>
                  <button className="px-6 min-w-[140px] mt-2 py-3 border-2 font-sans border-terra-o-white dark:text-terra-o-black dark:hover:text-terra-o-white hover:text-terra-o-black text-terra-o-white hover:bg-terra-o-dark dark:border-terra-o-black hover:bg-terra-o-white dark:hover:bg-terra-o-black transition-colors duration-100">
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </section>
    </Page>
  )
}
