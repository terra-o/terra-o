import { useTheme } from 'next-themes'
import { FormEvent, useState } from 'react'
import { toast, Toaster } from 'react-hot-toast'
import Image from 'next/image'

import Page from '@/components/layout/Page'
import Topic from './ResourcesFormTopic'

import Agriculture from '@/public/icons/agriculture.png'
import CapacityBuilding from '@/public/icons/capacity-building.png'
import Disasters from '@/public/icons/disasters.png'
import HealthAirQuality from '@/public/icons/health-air-quality.png'
import Wildfires from '@/public/icons/wildfires.png'
import WaterResources from '@/public/icons/water-resources.png'
import EcologicalForecasting from '@/public/icons/ecological-forecasting.png'

export default function ResourcesForm() {
  const { theme } = useTheme()

  const [resourcesTypes, setResourcesTypes] = useState<string[]>([])

  function toggleResourceTypes(type: string) {
    if (resourcesTypes.includes(type)) {
      setResourcesTypes(
        resourcesTypes.filter((resourcesTypes) => resourcesTypes !== type)
      )
    } else {
      setResourcesTypes([...resourcesTypes, type])
    }
  }

  const topics = [
    {
      title: 'Agriculture',
      icon: Agriculture
    },
    {
      title: 'Capacity building',
      icon: CapacityBuilding
    },
    {
      title: 'Disasters',
      icon: Disasters
    },
    {
      title: 'Health & air quality',
      icon: HealthAirQuality
    },
    {
      title: 'Wildfires',
      icon: Wildfires
    },
    {
      title: 'Water resources',
      icon: WaterResources
    },
    {
      title: 'Ecological forecasting',
      icon: EcologicalForecasting
    }
  ]

  const [resourcesTopics, setResourcesTopics] = useState<string[]>([])
  const [where, setWhere] = useState('online')

  function getResources(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (
      resourcesTypes.length === 0 ||
      resourcesTopics.length === 0 ||
      (resourcesTypes.includes('training') && where === '')
    ) {
      toast('Select all required fields', {
        style: {
          border: theme === 'dark' ? '2px solid #090909' : '2px solid #f8f8f8',
          borderRadius: '0px',
          backgroundColor: theme === 'dark' ? '#090909' : '#f8f8f8',
          padding: '12px',
          color: theme === 'dark' ? '#f8f8f8' : '#090909',
          marginTop: '72px'
        },
        position: 'top-center'
      })
    } else {
      location.href = `/resources?types=${resourcesTypes.join(
        ','
      )}&topics=${resourcesTopics
        .map((topics) => topics.toLowerCase())
        .join(',')}${
        resourcesTypes.includes('trainings') ? '&where=' + where : ''
      }`
    }
  }

  return (
    <>
      <Toaster />
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
            className="w-5/6 flex flex-col items-center gap-20"
            onSubmit={getResources}
          >
            <div className="flex flex-col items-center gap-2">
              <div className="text-center">
                <label
                  htmlFor="resourcesTypes"
                  className="dark:text-terra-o-gray-400"
                >
                  Which types of resources are you looking for?{' '}
                  <span className="text-red-500">*</span>
                </label>
                <div className="flex mt-2 flex-col sm:flex-row items-center gap-4">
                  <div
                    onClick={() => toggleResourceTypes('articles')}
                    className={
                      'border-2 cursor-pointer dark:hover:text-terra-o-white dark:hover:bg-terra-o-black border-terra-o-white dark:border-terra-o-black transition-colors duration-100 hover:bg-terra-o-white hover:text-terra-o-black flex items-center justify-center gap-2 px-8 min-w-[60%] sm:min-w-[140px] py-3 ' +
                      (resourcesTypes.includes('articles') &&
                        'bg-terra-o-white text-terra-o-black dark:bg-terra-o-black dark:text-terra-o-white')
                    }
                  >
                    <p>Articles</p>
                  </div>
                  <div
                    onClick={() => toggleResourceTypes('trainings')}
                    className={
                      'border-2 cursor-pointer dark:hover:text-terra-o-white dark:hover:bg-terra-o-black border-terra-o-white dark:border-terra-o-black transition-colors duration-100 hover:bg-terra-o-white hover:text-terra-o-black flex items-center justify-center gap-2 px-8 min-w-[60%] sm:min-w-[140px] py-3 ' +
                      (resourcesTypes.includes('trainings') &&
                        'bg-terra-o-white text-terra-o-black dark:bg-terra-o-black dark:text-terra-o-white')
                    }
                  >
                    <p>Trainings</p>
                  </div>
                  <div
                    onClick={() => toggleResourceTypes('datasets')}
                    className={
                      'border-2 cursor-pointer dark:hover:text-terra-o-white dark:hover:bg-terra-o-black border-terra-o-white dark:border-terra-o-black transition-colors duration-100 hover:bg-terra-o-white hover:text-terra-o-black flex items-center justify-center gap-2 px-8 min-w-[60%] sm:min-w-[140px] py-3 ' +
                      (resourcesTypes.includes('datasets') &&
                        'bg-terra-o-white text-terra-o-black dark:bg-terra-o-black dark:text-terra-o-white')
                    }
                  >
                    <p>Datasets</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col mt-4 items-center">
                <label
                  htmlFor="topics"
                  className="dark:text-terra-o-gray-400 text-center"
                >
                  Which topics can EO help you with?{' '}
                  <span className="text-red-500">*</span>
                </label>
                <div className="grid mt-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {topics.map(({ title, icon }) => (
                    <Topic
                      key={title}
                      title={title}
                      topics={resourcesTopics}
                      setTopics={setResourcesTopics}
                    >
                      <Image src={icon} alt={title} width={38} height={38} />
                    </Topic>
                  ))}
                </div>
              </div>
            </div>
            {resourcesTypes.includes('trainings') && (
              <div className="flex flex-col -mt-14 items-center gap-2">
                <label
                  htmlFor="where"
                  className="dark:text-terra-o-gray-400 text-center"
                >
                  Where would you like the trainings to take place?{' '}
                  <span className="text-red-500">*</span>
                </label>
                <div className="flex sm:flex-row mt-2 flex-col gap-4 ">
                  <div
                    onClick={() => setWhere('online')}
                    className={
                      'border-2 cursor-pointer dark:hover:text-terra-o-white dark:hover:bg-terra-o-black border-terra-o-white dark:border-terra-o-black transition-colors duration-100 hover:bg-terra-o-white hover:text-terra-o-black flex items-center justify-center gap-2 px-8 min-w-[60%] sm:min-w-[140px] py-3 ' +
                      (where === 'online' &&
                        'bg-terra-o-white text-terra-o-black dark:bg-terra-o-black dark:text-terra-o-white')
                    }
                  >
                    <p>Online</p>
                  </div>
                  <div
                    onClick={() => setWhere('in-person')}
                    className={
                      'border-2 cursor-pointer dark:hover:text-terra-o-white dark:hover:bg-terra-o-black border-terra-o-white dark:border-terra-o-black transition-colors duration-100 hover:bg-terra-o-white hover:text-terra-o-black flex items-center justify-center gap-2 px-8 min-w-[60%] sm:min-w-[140px] py-3 ' +
                      (where === 'in-person' &&
                        'bg-terra-o-white text-terra-o-black dark:bg-terra-o-black dark:text-terra-o-white')
                    }
                  >
                    <p>In person</p>
                  </div>
                </div>
              </div>
            )}
            <p className="text-terra-o-gray-200 -mt-16">
              Fields width <span className="text-red-500">*</span> are required.
            </p>
            <button
              type="submit"
              className="px-6 min-w-[140px] py-3 border-2 -mt-14 mb-10 font-sans border-terra-o-white dark:text-terra-o-black dark:hover:text-terra-o-white hover:text-terra-o-black text-terra-o-white hover:bg-terra-o-dark dark:border-terra-o-black hover:bg-terra-o-white dark:hover:bg-terra-o-black transition-colors duration-100"
            >
              Get resources
            </button>
          </form>
        </section>
      </Page>
    </>
  )
}
