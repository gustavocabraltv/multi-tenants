import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface Props {
    children: React.ReactNode
    href: string
}

const LinkMenu = ({ children, href }: Props) => {
    const router = useRouter()
    const { pathname } = router
    const selected = pathname === href

    return (
        <Link href={href}>
            <div
                className={
                    selected
                        ? 'flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-800 transition-colors duration-200 border-l-4 border-purple-500 dark:text-white'
                        : 'flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-800 transition-colors duration-200 border-l-4 border-white dark:text-white'
                }
            >
                {children}
            </div>
        </Link>
    )
}
export default LinkMenu
