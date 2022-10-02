import Image from 'next/image'
import Link from 'next/link'

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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
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
  )
}
