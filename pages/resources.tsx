import { useRouter } from 'next/router'

import ResourcesForm from '@/components/resources/form/ResourcesForm'
import ResourcesPage from '@/components/resources/page/ResourcesPage'

export default function Resources() {
  const { query } = useRouter()

  if (query.params?.length === 0) return <ResourcesForm />

  return <ResourcesPage />
}
