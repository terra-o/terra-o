import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from './icons/ArrowUpRight'

type ExternalResourceProps = {
  title: string
  link: string
  imageUrl: string
}

export default function ExternalResource({
  title,
  link,
  imageUrl
}: ExternalResourceProps) {
  return (
    <div className="text-terra-o-black dark:text-terra-o-white">
      <div className="border-2 border-terra-o-black dark:border-terra-o-white w-20 h-20">
        <Image
          src={imageUrl}
          alt={title}
          layout="responsive"
          width={40}
          height={40}
        />
      </div>

      <Link href={link} className="flex flex-row gap-2">
        <a className="underline">{title}</a>
      </Link>
      <ArrowUpRight />
    </div>
  )
}
