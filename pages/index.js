
import { Inter } from 'next/font/google'
import Landling from '@/components/LandingPage'
import LayoutPage from '@/components/Layout'


const inter = Inter({ subsets: ['latin'] })

export default function Home ()
{
  return (
    <Landling/>

  )
}

Home.getLayout = function getLayout(page)
{
  return <LayoutPage>{page}</LayoutPage>
}

