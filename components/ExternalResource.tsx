import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from './icons/ArrowUpRight'

type ExternalResourceProps = {
  title: string
  url: string
  image: string
}

export default function ExternalResource({
  title,
  url,
  image
}: ExternalResourceProps) {
  return (
    <div className="text-terra-o-black dark:text-terra-o-white max-w-sm">
      <Link href={url}>
        <a target="_blank" rel="noopener noreferrer" className="underline">
          <div className="relative flex flex-col gap-y-4 w-96 h-40">
            <Image
              src={image}
              alt={title}
              layout="fill"
              className="object-cover absolute"
            />
          </div>
          <span className="mt-10">{title}</span>
          <span className="inline-block w-4 h-4 ml-1">
            <ArrowUpRight />
          </span>
        </a>
      </Link>
    </div>
  )
}
