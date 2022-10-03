import Image from 'next/image'
import Link from 'next/link'
import _ from 'lodash'

interface ResultExternalResourceProps {
  topic: string
  name: string
  description: string
  image: string
  url: string
  provider: string
}

import O from '@/public/images/o.png'
import Agriculture from '@/public/icons/agriculture.png'
import CapacityBuilding from '@/public/icons/capacity-building.png'
import Disasters from '@/public/icons/disasters.png'
import HealthAirQuality from '@/public/icons/health-air-quality.png'
import Wildfires from '@/public/icons/wildfires.png'
import WaterResources from '@/public/icons/water-resources.png'
import EcologicalForecasting from '@/public/icons/ecological-forecasting.png'

export default function ResultExternalEntry({
  topic,
  name,
  description,
  image,
  url,
  provider
}: ResultExternalResourceProps) {
  let topicIcon = O

  switch (topic) {
    case 'capacity building':
      topicIcon = CapacityBuilding
      break
    case 'disasters':
      topicIcon = Disasters
      break
    case 'ecological forecasting':
      topicIcon = EcologicalForecasting
      break
    case 'health & air quality':
      topicIcon = HealthAirQuality
      break
    case 'wildfires':
      topicIcon = Wildfires
      break
    case 'water resources':
      topicIcon = WaterResources
      break
    case 'agriculture':
      topicIcon = Agriculture
      break
  }

  return (
    <div className="flex sm:flex-row max-h-62 p-2 flex-col max-w-xl gap-2">
      {image && (
        <div className="relative w-full sm:w-96 h-full">
          <Image
            src={image}
            alt={name}
            layout="fill"
            className="object-cover absolute"
          />
        </div>
      )}
      <div className="flex relative flex-col items-start gap-2">
        <p className="text-lg">{name}</p>
        {description && (
          <p className="text-sm">
            {description.length > 100
              ? _(description).truncate({ length: 100 })
              : description}
          </p>
        )}
        <div className="mt-2 flex items-center gap-4">
          <Image src={topicIcon} alt={topic} width={40} height={40} />
          <Link href={url}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center w-full justify-between cursor-pointer border-2 border-terra-o-black dark:border-terra-o-white rounded-full px-2 py-1"
            >
              <p>{provider}</p>
              <span className="inline-block w-4 h-4 ml-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}
