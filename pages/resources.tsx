import { GetServerSideProps } from 'next'
import { ParsedUrlQuery } from 'querystring'

import ResourcesForm from '@/components/resources/form/ResourcesForm'
import ResourcesPage from '@/components/resources/page/ResourcesPage'

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      query: context.query
    }
  }
}

type ResourcesProps = {
  query: ParsedUrlQuery
}

export default function Resources({
  query: { types, topics, where, difficulty, language }
}: ResourcesProps) {
  if (
    !types ||
    !topics ||
    ((topics as string)?.split(',').includes('trainings') && !where) ||
    !difficulty ||
    !language
  )
    return <ResourcesForm />

  return (
    <ResourcesPage
      types={types!! as string}
      topics={topics!! as string}
      where={where!! as string}
      difficulty={difficulty!! as string}
      language={language!! as string}
    />
  )
}
