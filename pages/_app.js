//import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import LayoutPage from "@/components/Layout";

import '@/styles/custom.css'
import '@/styles/theme.min.css'

export default function App({ Component, pageProps }) {

  return (
    <>
      <LayoutPage>
        <Component {...pageProps} />
      </LayoutPage>
    </>
  )
}
