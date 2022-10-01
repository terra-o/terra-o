import { ReactNode } from 'react'
import Image from 'next/image'

import O from '@/public/images/o.png'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="h-[7.5vh] sticky top-0 dark:bg-terra-o-black/60 bg-terra-o-white/60 backdrop-blur backdrop-filter flex items-center justify-start">
      <nav className="flex items-center">
        <Link href="/">
          <a className="pl-8 flex items-center">
            <Image src={O} alt="Terra O" width={32} height={32} />
          </a>
        </Link>
      </nav>
    </header>
  )
}
