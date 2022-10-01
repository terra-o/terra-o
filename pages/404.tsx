import Link from 'next/link'
import Image from 'next/image'

import useWindowDimensions from '@/hooks/useWindowDimensions'
import Page from '@/components/layout/Page'
import ICEYE from '@/public/images/iceye.jpg'

export default function NotFound() {
  const { width, height } = useWindowDimensions()

  return (
    <Page className="overflow-hidden">
      <section className="flex items-center justify-around">
        <div className="w-screen md:w-[44vw] flex items-center flex-col gap-y-6 justify-center h-[88vh]">
          <h1 className="text-6xl text-transparent bg-clip-text bg-gradient-to-r from-terra-o-blue-100 to-terra-o-green-200 font-terra-o">
            404
          </h1>
          <p className="text-lg text-terra-o-gray-300 font-sans px-4">
            Getting lost is part of getting there.
          </p>
          <Link href="/">
            <button className="mt-2 px-6 py-4 border-2 border-terra-o-black dark:text-terra-o-white dark:hover:text-terra-o-black hover:text-terra-o-white text-terra-o-black hover:bg-terra-o-black dark:border-terra-o-white dark:hover:bg-terra-o-white transition-colors duration-100">
              <a className="font-sans px-4">Go back to Earth</a>
            </button>
          </Link>
        </div>
        <div className="hidden md:block max-h-[88vh] w-[44vw]">
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
