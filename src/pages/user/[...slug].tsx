import { useRouter } from 'next/router'

const User = () => {
  const router = useRouter()
  const { slug } = router.query

  return <p>User: {JSON.stringify(slug)}</p>
}

export default User