import { useEffect, useState } from 'react'
import { CgSpinner } from 'react-icons/cg'

import Page from '@/components/layout/Page'
import { useTheme } from 'next-themes'
import { ResultExternalResource } from '../ResultExternalResource'
import { ResultExternalTraining } from '@/components/training/ResultExternalTraining'

type ResourcesPageProps = {
  types: string[] | string
  topics: string[] | string
  where: string[] | string
}

export default function ResourcesPage({
  types,
  topics,
  where
}: ResourcesPageProps) {
  const [loading, setLoading] = useState(true)

  const { theme } = useTheme()

  useEffect(() => {
    // fetch data from API
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <Page
      title="Resources"
      theme={theme === 'dark' ? 'light' : 'dark'}
      className="dark:bg-terra-o-white bg-terra-o-black min-h-screen"
    >
      <section className=" overflow-hidden flex flex-col items-center justify-center text-terra-o-white  dark:text-terra-o-black">
        {loading ? (
          <div className="flex h-[52.5vh] flex-col items-center text-terra-o-white dark:text-terra-o-black justify-center gap-y-6">
            <CgSpinner fontSize={52} className="animate-spin -mt-20" />
            <p className="text-4xl font-bold">
              Getting{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-terra-o-blue-200 to-terra-o-green-200">
                resources
              </span>
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquet viverra elit scelerisque sapien ut.
                </p>
              </div>
            </div>
            <div className="w-screen bg-terra-o-white dark:bg-terra-o-black flex flex-col justify-center items-center">
              <div className="w-5/6 py-10 flex flex-col gap-y-20">
                {types.includes('entries') && (
                  <div className="flex flex-col items-start dark:text-terra-o-white text-terra-o-black gap-y-10">
                    <p className="text-lg 2xl:text-2xl font-bold">Entries</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-20 gap-y-4">
                      {Array.from({ length: 4 }).map((_, i) => (
                        <ResultExternalResource
                          topic={'Disasters'}
                          name={'Resource Name'}
                          key={i}
                          description={
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacinia' +
                            'magna urna facilisi lacus. Sodales sed elementum nunc sit viverra' +
                            'diam est.'
                          }
                          image={
                            'https://appliedsciences.nasa.gov//sites/default/files/styles/banner_min_height/public/2022-07/Website_Header_Small_0.png?itok=lWqrXuuT'
                          }
                          url={
                            'https://appliedsciences.nasa.gov/join-mission/training/english/arset-disaster-assessment-using-synthetic-aperture-radar'
                          }
                          provider={'Applied Sciences'}
                        />
                      ))}
                    </div>
                  </div>
                )}
                {types.includes('trainings') && (
                  <div className="flex flex-col items-start dark:text-terra-o-white text-terra-o-black gap-y-10">
                    <p className="text-lg 2xl:text-2xl font-bold">
                      Training programs
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 sm:gap-x-20 gap-y-4">
                      {Array.from({ length: 4 }).map((_, i) => (
                        <ResultExternalTraining
                          topic={'Disasters'}
                          name={'Resource Name'}
                          key={i}
                          type={'online'}
                          level={'difficult(?)'}
                          date={new Date()}
                          url={
                            'https://appliedsciences.nasa.gov/join-mission/training/english/arset-disaster-assessment-using-synthetic-aperture-radar'
                          }
                        />
                      ))}
                    </div>
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lacinia magna urna facilisi lacus. Sodales sed elementum
                    nunc sit viverra diam est.
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
