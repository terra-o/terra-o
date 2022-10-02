import Image from 'next/image'
import { useTheme } from 'next-themes'

import O from '@/public/images/o.png'
import Link from 'next/link'
import { useEffect } from 'react'

type HeaderProps = {
  theme?: 'light' | 'dark'
}

export default function Header({ theme }: HeaderProps) {
  const { theme: t, setTheme: setT } = useTheme()

  return (
    <header className="h-[7.5vh] sticky top-0 bg-transparent backdrop-blur backdrop-filter flex items-center justify-center">
      <nav className="flex w-[90vw] items-center justify-between">
        <Link href="/">
          <a className="flex items-center">
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
        <a
          onClick={() => setT(t === 'dark' ? 'light' : 'dark')}
          className={
            'cursor-pointer max-w-18 min-w-18 text-sans border-2 transition-colors duration-100  ' +
            (theme
              ? 'dark:text-terra-o-black text-terra-o-white hover:bg-terra-o-white hover:text-terra-o-black dark:border-terra-o-black dark:hover:text-terra-o-white dark:hover:bg-terra-o-black'
              : 'dark:hover:bg-terra-o-white dark:hover:text-terra-o-black hover:bg-terra-o-black hover:text-terra-o-white dark:border-terra-o-white border-terra-o-black')
          }
        >
          <h3 className="text-md w-16 h-8 flex items-center justify-center">
            {theme
              ? t === 'dark'
                ? 'Dark'
                : 'Light'
              : t === 'dark'
              ? 'Light'
              : 'Dark'}
          </h3>
        </a>
      </nav>
    </header>
  )
}
