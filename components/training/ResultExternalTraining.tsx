import Image from 'next/image'
import Link from 'next/link'

interface ResultExternalTrainingProps {
  topic: string
  name: string
  type: string
  level: string
  url: string
  date: Date
}

import Agriculture from '@/public/icons/agriculture.png'
import CapacityBuilding from '@/public/icons/capacity-building.png'
import Disasters from '@/public/icons/disasters.png'
import HealthAirQuality from '@/public/icons/health-air-quality.png'
import Wildfires from '@/public/icons/wildfires.png'
import WaterResources from '@/public/icons/water-resources.png'
import EcologicalForecasting from '@/public/icons/ecological-forecasting.png'

export function ResultExternalTraining({
  topic,
  name,
  type,
  level,
  url,
  date
}: ResultExternalTrainingProps) {
  let topicImage = Agriculture
  switch (topic) {
    case 'Capacity Building':
      topicImage = CapacityBuilding
      break
    case 'Disasters':
      topicImage = Disasters
      break
    case 'Ecological Forecasting':
      topicImage = EcologicalForecasting
      break
    case 'Health & Air Quality':
      topicImage = HealthAirQuality
      break
    case 'Wildfires':
      topicImage = Wildfires
      break
    case 'Water Resources':
      topicImage = WaterResources
      break
    default:
      topicImage = Agriculture
  }

  return (
    <Link href={url}>
      <div className="flex border-2 flex-col gap-4 cursor-pointer border-terra-o-black dark:border-terra-o-white p-4 w-[82vw] sm:w-96">
        <div className="flex justify-between items-center">
          <span className="flex items-center gap-2">
            <p className="text-lg">{name}</p> -
            <p className="text-terra-o-gray-400 text-sm">{type}</p>
          </span>
          <span className="inline-block w-4 h-4 ml-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="dateColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </span>
        </div>

        <div className="flex items-center justify-start">
          <Image src={topicImage} alt={topic} width={23} height={23} />
          <span className="mx-2 text-terra-o-gray-300 inline-flex">•</span>
          <p className="text-terra-o-gray-400 text-sm">
            {date.getFullYear().toString()} - {date.getMonth().toString()} -{' '}
            {date.getDate().toString()}
          </p>
          <span className="mx-2 text-terra-o-gray-300 inline-flex">•</span>
          <p className="text-sm text-terra-o-gray-400">{level}</p>
        </div>
      </div>
    </Link>
  )
}
