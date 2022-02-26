import '../styles/globals.css'
import Layout from '../components/Layout'
import { useRouter } from 'next/router'
import 'nprogress/nprogress.css'
import Nprogress from 'nprogress'
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  if(router.events!=undefined){
    router.events.on('routeChangeStart',()=>{
  Nprogress.start();});
  router.events.on('routeChangeComplete',()=>Nprogress.done());
  router.events.on('routeChangeError',()=>Nprogress.done());}
  return (
    <SessionProvider>
    <Layout>
    <Component {...pageProps} />
  </Layout>
  </SessionProvider>
  )
}

export default MyApp
