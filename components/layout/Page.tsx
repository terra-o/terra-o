import { ReactNode } from 'react'

import Header from './Header'
import Footer from './Footer'

export default function Page({
  className,
  children
}: {
  className?: string
  children: ReactNode
}) {
  return (
    <div className={'dark:bg-terra-o-black bg-terra-o-white ' + className}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
