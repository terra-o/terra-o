import Image from 'next/image'
import Link from 'next/link'

interface ResultExternalResourceProps {
  topic: string
  name: string
  description: string
  image: string
  url: string
  provider: string
}

import Agriculture from '@/public/icons/agriculture.png'
import CapacityBuilding from '@/public/icons/capacity-building.png'
import Disasters from '@/public/icons/disasters.png'
import HealthAirQuality from '@/public/icons/health-air-quality.png'
import Wildfires from '@/public/icons/wildfires.png'
import WaterResources from '@/public/icons/water-resources.png'
import EcologicalForecasting from '@/public/icons/ecological-forecasting.png'

export function ResultExternalResource({
  topic,
  name,
  description,
  image,
  url,
  provider
}: ResultExternalResourceProps) {
  let icon = Agriculture
  switch (topic) {
    case 'Capacity Building':
      icon = CapacityBuilding
      break
    case 'Disasters':
      icon = Disasters
      break
    case 'Ecological Forecasting':
      icon = EcologicalForecasting
      break
    case 'Health & Air Quality':
      icon = HealthAirQuality
      break
    case 'Wildfires':
      icon = Wildfires
      break
    case 'Water Resources':
      icon = WaterResources
      break
    default:
      icon = Agriculture
  }

  return (
    <Link href={url}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="flex sm:flex-row flex-col max-w-xl gap-2"
      >
        <div className="relative w-full sm:w-5/6 h-40">
          <Image
            src={image}
            alt={name}
            layout="fill"
            className="object-cover absolute"
          />
        </div>
        <div className="flex relative flex-col items-start gap-2">
          <p className="text-lg">{name}</p>
          <p className="text-terra-o-gray-400 text-sm">{description}</p>
          <div className="mt-2 flex sm:absolute sm:bottom-0 items-center gap-4">
            <Image src={icon} alt={topic} width={40} height={40} />
            <div className="flex items-center w-full justify-between cursor-pointer border-2 border-terra-o-black dark:border-terra-o-white rounded-full px-2 py-1">
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
            </div>
          </div>
        </div>
      </a>
    </Link>
  )
}
