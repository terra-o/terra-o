import Image from 'next/image'
import Link from 'next/link'

interface ResultExternalTrainingProps {
  topic: string
  name: string
  type: string
  level: string
  url: string
  date: string
}

import O from '@/public/images/o.png'
import Agriculture from '@/public/icons/agriculture.png'
import CapacityBuilding from '@/public/icons/capacity-building.png'
import Disasters from '@/public/icons/disasters.png'
import HealthAirQuality from '@/public/icons/health-air-quality.png'
import Wildfires from '@/public/icons/wildfires.png'
import WaterResources from '@/public/icons/water-resources.png'
import EcologicalForecasting from '@/public/icons/ecological-forecasting.png'

export default function ResultExternalTraining({
  topic,
  name,
  type,
  level,
  url,
  date
}: ResultExternalTrainingProps) {
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
    <Link href={url}>
      <a target="_blank" rel="noopener noreferrer">
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
            <Image src={topicIcon} alt={topic} width={23} height={23} />
            <span className="mx-2 text-terra-o-gray-300 inline-flex">•</span>
            <p className="text-terra-o-gray-400 text-sm">{date}</p>
            <span className="mx-2 text-terra-o-gray-300 inline-flex">•</span>
            <p className="text-sm text-terra-o-gray-400">{level}</p>
          </div>
        </div>
      </a>
    </Link>
  )
}
