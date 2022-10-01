import Image from 'next/image'

import O from '@/public/images/o.png'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="h-[7.5vh] sticky top-0 bg-transparent backdrop-blur backdrop-filter flex items-center justify-start">
      <nav className="flex items-center">
        <Link href="/">
          <a className="pl-8 flex items-center">
            <h3 className="font-terra-o text-lg dark:text-terra-o-white text-terra-o-terra flex items-center justify-center gap-x-[6px]">
              Terra
              <Image src={O} alt="O" width={22} height={22} />
            </h3>
          </a>
        </Link>
      </nav>
    </header>
  )
}
