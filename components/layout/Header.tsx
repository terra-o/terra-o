import Image from 'next/image'

import O from '@/public/images/o.png'
import Link from 'next/link'

type HeaderProps = {
  theme?: 'light' | 'dark'
}

export default function Header({ theme }: HeaderProps) {
  return (
    <header className="h-[7.5vh] sticky top-0 bg-transparent backdrop-blur backdrop-filter flex items-center justify-start">
      <nav className="flex items-center">
        <Link href="/">
          <a className="pl-8 flex items-center">
            <h3
              className={
                'font-terra-o text-lg flex items-center justify-center gap-x-[6px]' +
                (theme
                  ? ' dark:text-terra-o-terra text-terra-o-white'
                  : ' dark:text-terra-o-white text-terra-o-terra')
              }
            >
              Terra
              <Image src={O} alt="O" width={22} height={22} />
            </h3>
          </a>
        </Link>
      </nav>
    </header>
  )
}
