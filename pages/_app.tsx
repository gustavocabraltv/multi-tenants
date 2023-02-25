import LayoutApp from '@/components/Layout/LayoutApp'
import LayoutPublic from '@/components/Layout/LayoutPublic'
import LayoutTenant from '@/components/Layout/LayoutTenant'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { SessionProvider } from 'next-auth/react'

export default function App({
    Component,
    pageProps: { session, ...pageProps },
}: AppProps) {
    const router = useRouter()
    const { pathname } = router

    let Layout = LayoutPublic
    if (pathname.indexOf('/app') === 0) {
        Layout = LayoutApp
    }
    // O metódo indexOf verifica se a Url atual
    // começa com uma determinada string,
    // Nesse caso, a string "/app".
    // Se a string for encontrada, o método retornará 0

    if (pathname.indexOf('/[slug]') === 0) {
        Layout = LayoutTenant
    }

    return (
        //  <pre>{JSON.stringify(pathname)}</pre> // Inserir encima do componente montado (abaixo) para testar.
        <SessionProvider session={session}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </SessionProvider>
    )
}
