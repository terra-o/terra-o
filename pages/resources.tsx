import { useTheme } from 'next-themes'
import Image from 'next/image'

import Page from '@/components/layout/Page'
import { Topic } from '@/components/Topic'

import Agriculture from '@/public/icons/agriculture.png'
import CapacityBuilding from '@/public/icons/capacity-building.png'
import Disasters from '@/public/icons/disasters.png'
import HealthAirQuality from '@/public/icons/health-air-quality.png'
import Wildfires from '@/public/icons/wildfires.png'
import WaterResources from '@/public/icons/water-resources.png'
import EcologicalForecasting from '@/public/icons/ecological-forecasting.png'
import { useState } from 'react'

import MapChart from '@/components/MapChart'
import ReactTooltip from 'react-tooltip'

export default function Resources() {
  const { theme } = useTheme()

  const [where, setWhere] = useState('')
  const [content, setContent] = useState('')

  const topics = [
    {
      title: 'Agriculture',
      icon: Agriculture
    },
    {
      title: 'Capacity Building',
      icon: CapacityBuilding
    },
    {
      title: 'Disasters',
      icon: Disasters
    },
    {
      title: 'Health & Air Quality',
      icon: HealthAirQuality
    },
    {
      title: 'Wildfires',
      icon: Wildfires
    },
    {
      title: 'Water Resources',
      icon: WaterResources
    },
    {
      title: 'Ecological Forecasting',
      icon: EcologicalForecasting
    }
  ]

  const [selectedTopics, setSelectedTopics] = useState<string[]>([])

  return (
    <Page
      title="Resources"
      theme={theme === 'dark' ? 'light' : 'dark'}
      className="bg-terra-o-black dark:bg-terra-o-white min-h-screen"
    >
      <section className="flex flex-col items-center text-terra-o-white dark:text-terra-o-black">
        <div className="my-28 flex flex-col justify-center items-center gap-y-10">
          <h2 className="text-center font-sans font-semibold text-2xl lg:text-5xl 2xl:text-6xl ">
            Access the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-terra-o-blue-50 to-terra-o-green-300 ">
              perfect resources
            </span>
            <br />
            for your needs
          </h2>
          <p className="text-terra-o-white dark:text-terra-o-gray-400 w-2/3 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacinia
            magna urna facilisi lacus. Sodales sed elementum nunc sit viverra
            diam est.
          </p>
        </div>
        <form
          className="w-5/6 flex flex-col gap-20"
          onSubmit={(event) => event.preventDefault()}
        >
          <div className="flex flex-col items-center gap-2">
            <p className="dark:text-terra-o-gray-400">Areas</p>
            <div className="grid grid-cols-4 gap-4">
              {topics.map(({ title, icon }) => (
                <Topic
                  key={title}
                  title={title}
                  topics={selectedTopics}
                  setTopics={setSelectedTopics}
                >
                  <Image src={icon} alt={title} width={44} height={44} />
                </Topic>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-start gap-2">
            <p className="dark:text-terra-o-gray-400">
              Where can the training be held?
            </p>
            <div>
              <label className="flex gap-2">
                <input
                  type="radio"
                  name="training"
                  value="in-person"
                  onChange={(event) => setWhere(event?.target.value)}
                />
                In person
              </label>
              <label className="flex gap-2">
                <input
                  type="radio"
                  name="training"
                  value="remotely"
                  onChange={(event) => setWhere(event?.target.value)}
                />
                Remotely
              </label>
            </div>
            {/* {where === 'in-person' && (
              <div>
                <MapChart setTooltipContent={setContent} />
                <ReactTooltip>{content}</ReactTooltip>
              </div>
            )} */}
          </div>
          <button
            type="submit"
            className="max-w-[20rem] py-4 border-2 mt-20 font-sans border-terra-o-white dark:text-terra-o-black dark:hover:text-terra-o-white hover:text-terra-o-black text-terra-o-white hover:bg-terra-o-dark dark:border-terra-o-black hover:bg-terra-o-white dark:hover:bg-terra-o-black transition-colors duration-100"
          >
            Get corresponding resources
          </button>
        </form>
      </section>
    </Page>
  )
}
