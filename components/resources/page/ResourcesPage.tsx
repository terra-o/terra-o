import { useEffect, useState } from 'react'
import { CgSpinner } from 'react-icons/cg'

import Page from '@/components/layout/Page'

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

  useEffect(() => {
    // fetch data from API
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <Page
      title="Resources"
      className="dark:bg-terra-o-black bg-terra-o-white min-h-screen"
    >
      <section className="flex flex-col items-center justify-center text-terra-o-white dark:text-terra-o-black">
        {loading ? (
          <div className="flex h-[52.5vh] flex-col items-center text-terra-o-black dark:text-terra-o-white justify-center gap-y-6">
            <CgSpinner fontSize={52} className="animate-spin -mt-20" />
            <p className="text-4xl font-bold">
              Getting{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-terra-o-blue-200 to-terra-o-green-200">
                resources
              </span>
            </p>
          </div>
        ) : (
          <div className="flex justify-center items-center h-full">
            <div className="flex flex-col justify-center dark:text-terra-o-white text-terra-o-black items-center gap-y-10">
              <p className="text-4xl font-bold">Resources</p>
              <p className="text-2xl">
                Types: {types}
                <br />
                Topics: {topics}
                <br />
                Where: {where}
              </p>
            </div>
          </div>
        )}
      </section>
    </Page>
  )
}
