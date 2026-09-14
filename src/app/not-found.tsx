import HeroSub from '@/components/SharedComponent/HeroSub'
import NotFound from '@/components/NotFound'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page not found',
}

const ErrorPage = () => {
  return (
    <>
      <HeroSub title='404' />
      <NotFound />
    </>
  )
}

export default ErrorPage
