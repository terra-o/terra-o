import Link from 'next/link'
import Image from 'next/image'

import useWindowDimensions from '@/hooks/useWindowDimensions'
import Page from '@/components/layout/Page'
import ARSET from '@/public/images/arset.png'
import O from '@/public/images/o.png'

export default function Index() {
  const { width, height } = useWindowDimensions()

  return (
    <Page>
      <section className="flex items-center justify-around">
        <div className="hidden md:block max-h-[88vh] w-[44vw]">
          {width && height && (
            <Link href="https://appliedsciences.nasa.gov/what-we-do/capacity-building/arset">
              <a
                target="_blank"
                rel="noopener noreferrer"
                title="Image by ARSET"
                className="flex justify-end items-center"
              >
                <Image
                  src={ARSET}
                  alt="ARSET"
                  layout="intrinsic"
                  width={width * 0.38}
                  height={height * 0.88}
                />
              </a>
            </Link>
          )}
        </div>
        <div className="dark:bg-terra-o-black w-screen md:w-[36vw] bg-terra-o-white flex items-start flex-col gap-y-6 justify-start h-[88vh]">
          <div className="text-left font-sans text-6xl dark:text-terra-o-white text-terra-o-black flex gap-y-6 flex-col">
            <span className="font-terra-o text-8xl dark:text-terra-o-white text-terra-o-terra flex items-center justify-start gap-x-6">
              Terra
              <Image src={O} alt="O" width={92} height={92} />
            </span>
            <h2 className="text-terra-o-gray-300">
              Your gateway to acknowledge{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-terra-o-blue-50 to-terra-o-green-300 font-sans">
                Earth.
              </span>
            </h2>
            <h2>Observe. Visualize. Extend.</h2>
            <p className="text-2xl dark:text-terra-o-gray-200 text-terra-o-gray-300">
              Terra O is a gateway that provides capacity building resources to
              Earth Observation.
            </p>
          </div>
          <div className="flex gap-x-6">
            <Link href="/quickstart">
              <button className="mt-2 px-6 py-4 border-2 border-terra-o-black dark:text-terra-o-white dark:hover:text-terra-o-black hover:text-terra-o-white text-terra-o-black hover:bg-terra-o-black dark:border-terra-o-white dark:hover:bg-terra-o-white transition-colors duration-100">
                <a className="font-sans px-4">Quickstart</a>
              </button>
            </Link>
            <Link href="/">
              <button className="mt-2 px-6 py-4 border-2 border-terra-o-black dark:bg-terra-o-white dark:text-terra-o-black dark:hover:text-terra-o-white bg-terra-o-black hover:text-terra-o-black text-terra-o-white hover:bg-terra-o-white dark:border-terra-o-white dark:hover:bg-terra-o-black transition-colors duration-100">
                <a className="font-sans px-4">Custom search</a>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </Page>
  )
}
