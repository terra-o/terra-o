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
  query: { types, topics, where }
}: ResourcesProps) {
  if (!types && !topics && !where) return <ResourcesForm />

  return <ResourcesPage types={types!!} topics={topics!!} where={where!!} />
}
