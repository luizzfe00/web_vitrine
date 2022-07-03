import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Navbar from '../components/Navbar'

const navigation = [
  { name: 'Dashboard', href: '/dashboard', current: false },
  { name: 'Produtos', href: '/products', current: false },
  { name: 'Clientes', href: '/clients', current: false },
  { name: 'Pedidos', href: '#', current: false },
]

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const showNavbar = router.pathname === '/' ? false : true

  return (
    <>
      {showNavbar && (<Navbar items={navigation} />)}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
