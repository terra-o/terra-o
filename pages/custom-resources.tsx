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

export default function CustomResources() {
  const { theme } = useTheme()

  return (
    <Page
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
        <div className="w-5/6">
          <div className="flex flex-col items-start gap-2">
            <p className="dark:text-terra-o-gray-400">Areas</p>
            <div className="grid grid-cols-4 gap-4">
              <Topic topicTitle="Water Resources">
                <Image
                  src={WaterResources}
                  alt="Water Resources"
                  width={50}
                  height={50}
                />
              </Topic>
              <Topic topicTitle="Agriculture">
                <Image
                  src={Agriculture}
                  alt="Agriculture"
                  width={50}
                  height={50}
                />
              </Topic>
              <Topic topicTitle="Capacity Building">
                <Image
                  src={CapacityBuilding}
                  alt="Capacity Building"
                  width={50}
                  height={50}
                />
              </Topic>
              <Topic topicTitle="Disasters">
                <Image src={Disasters} alt="Disasters" width={50} height={50} />
              </Topic>
              <Topic topicTitle="Health & Air Quality">
                <Image
                  src={HealthAirQuality}
                  alt="Health & Air Quality"
                  width={50}
                  height={50}
                />
              </Topic>
              <Topic topicTitle="Wildland Fires">
                <Image
                  src={Wildfires}
                  alt="Wildland Fires"
                  width={50}
                  height={50}
                />
              </Topic>
              <Topic topicTitle="Ecological Forecasting">
                <Image
                  src={EcologicalForecasting}
                  alt="Ecological Forecasting"
                  width={50}
                  height={50}
                />
              </Topic>
            </div>
          </div>
        </div>
      </section>
    </Page>
  )
}
