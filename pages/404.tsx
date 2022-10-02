import Link from 'next/link'
import Image from 'next/image'

import useWindowDimensions from '@/hooks/useWindowDimensions'
import Page from '@/components/layout/Page'
import ICEYE from '@/public/images/iceye.jpg'

export default function NotFound() {
  const { width, height } = useWindowDimensions()

  return (
    <Page className="dark:bg-terra-o-black bg-terra-o-white overflow-hidden min-h-screen">
      <section className="flex items-center justify-around">
        <div className="w-screen px-8 md:w-[44vw] flex items-center font-sans flex-col gap-y-6 justify-center h-[88vh]">
          <h1 className="text-7xl text-transparent bg-clip-text bg-gradient-to-r from-terra-o-blue-100 to-terra-o-green-200">
            404
          </h1>
          <p className="text-xl dark:text-terra-o-gray-200 text-terra-o-gray-400 px-4 text-center">
            It seems like you are scaping to low orbit.
          </p>
          <Link href="/">
            <button className="mt-2 px-6 text-lg py-4 border-2 border-terra-o-black dark:text-terra-o-white dark:hover:text-terra-o-black hover:text-terra-o-white text-terra-o-black hover:bg-terra-o-black dark:border-terra-o-white dark:hover:bg-terra-o-white transition-colors duration-100">
              <a className="px-4">Go back to Earth</a>
            </button>
          </Link>
        </div>
        <div className="hidden xl:block max-h-[88vh] w-[44vw]">
          {width && height && (
            <Link href="https://www.iceye.com/press/press-releases/iceye-secures-usd-1-2m-in-funding-from-european-seraphim-capital">
              <a
                target="_blank"
                rel="noopener noreferrer"
                title="Image by ICEYE"
                className="flex justify-start items-center"
              >
                <Image
                  src={ICEYE}
                  alt="ICEYE"
                  layout="intrinsic"
                  width={width * 0.38}
                  height={height * 0.88}
                />
              </a>
            </Link>
          )}
        </div>
      </section>
    </Page>
  )
}
