import Link from 'next/link'
import Image from 'next/image'

import useWindowDimensions from '@/hooks/useWindowDimensions'
import Page from '@/components/layout/Page'
import ARSET from '@/public/images/arset.png'

export default function Index() {
  const { width, height } = useWindowDimensions()

  return (
    <Page className="bg-terra-o-white dark:bg-terra-o-black min-h-screen">
      <section className="flex items-center justify-around">
        <div className="hidden xl:block max-h-[88vh] w-[44vw]">
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
        <div className="relative w-screen md:w-[36vw] flex items-start flex-col gap-y-8 justify-start h-[88vh]">
          <div className="sm:m-0 mt-6 text-left w-full px-8 sm:p-0 sm:max-w-[70%] font-sans dark:text-terra-o-white text-terra-o-black flex gap-y-6 flex-col">
            <h2 className="dark:text-terra-o-white text-terra-o-terra text-3xl md:text-4xl xl:text-6xl">
              Your gateway to acknowledge{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-terra-o-blue-50 to-terra-o-green-300 font-sans">
                Earth.
              </span>
            </h2>
            <h2 className="dark:text-terra-o-gray-200 text-terra-o-gray-300 text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
              Terra O is a gateway that provides capacity building resources to
              Earth Observations.
            </h2>
            <p className="text-lg md:text-xl xl:text-2xl text-terra-o-gray-300 terra-o-gray-300">
              Intended and specifically built to help policymakers all around
              the world use Earth data to better base decisions in order to
              address natural disasters, land management issues, the impacts of
              climate change, and other environmental issues.
            </p>
          </div>
          <div className="flex flex-col items-start font-sans sm:p-0 gap-y-8 pl-8 text-lg sm:flex-row sm:gap-x-6">
            <Link href="/start">
              <a className="px-6 py-4 border-2 border-terra-o-black dark:text-terra-o-white bg-terra-o-white dark:bg-terra-o-black dark:hover:text-terra-o-black hover:text-terra-o-white text-terra-o-black hover:bg-terra-o-black dark:border-terra-o-white dark:hover:bg-terra-o-white transition-colors duration-100">
                Get started
              </a>
            </Link>
            <Link href="/resources">
              <a className="px-6 py-4 border-2 border-terra-o-black dark:bg-terra-o-white dark:text-terra-o-black dark:hover:text-terra-o-white bg-terra-o-black hover:text-terra-o-black text-terra-o-white hover:bg-terra-o-white dark:border-terra-o-white dark:hover:bg-terra-o-black transition-colors duration-100">
                Resources
              </a>
            </Link>
          </div>
        </div>
      </section>
    </Page>
  )
}
