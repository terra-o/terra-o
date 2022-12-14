import { ReactNode } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

import Header from './Header'

type PageProps = {
  title?: string
  description?: string
  className?: string
  header?: boolean
  theme?: 'light' | 'dark'
  children: ReactNode
}

export default function Page({
  title,
  description,
  className,
  theme,
  header = true,
  children
}: PageProps) {
  title = title
    ? 'Terra O | ' + title
    : 'Terra O | Your gateway to acknowledge Earth'
  description =
    description ||
    'Terra O is a gateway that provides capacity building resources to Earth ObservationS.'

  const { asPath: uri } = useRouter()

  return (
    <>
      <Head>
        <title>{title}</title>

        <meta name="description" content={description} />

        <meta property="og:url" content={`https://terra-o.vercel.app/${uri}`} />

        <link rel="canonical" href={`https://terra-o.vercel.app/${uri}`} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />

        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Head>
      <div className={'transition-colors duration-500 ' + className}>
        {header && <Header theme={theme} />}
        <main>{children}</main>
      </div>
    </>
  )
}
