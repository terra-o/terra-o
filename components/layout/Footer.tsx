import Image from 'next/image'

import O from '@/public/images/o.png'

export default function Footer() {
  return (
    <footer className="flex items-center justify-center h-[4.5vh]">
      <h3 className="font-terra-o dark:text-terra-o-white text-terra-o-terra flex items-center justify-center gap-x-1">
        Terra
        <Image src={O} alt="O" width={18} height={18} />
      </h3>
    </footer>
  )
}
