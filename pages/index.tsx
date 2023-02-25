import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Head from '../components/Seo'
import Link from 'next/link'
import { useSession, signIn, signOut } from 'next-auth/react'
import Component from '@/components/login-btn'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <>
            <Head title="Boilerplate" description="Saas" />
            <main className={styles.main}>
                <ul>
                    <li>
                        <Link href="/app">App</Link>
                    </li>
                    <li>
                        <Link href="/tenant">Tenant</Link>
                    </li>
                </ul>
                <p>
                    <button onClick={() => signIn()}>Sign in</button>
                </p>
                <Component />
            </main>
        </>
    )
}
