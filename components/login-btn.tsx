import { useSession, signIn, signOut } from 'next-auth/react'
import Image from 'next/image'

export default function Component() {
    const { data: session } = useSession()
    console.log(session?.user?.image)

    if (session) {
        return (
            <>
                <div>
                    Signed in as {session.user?.email} <br />
                    <p>Isso será visto somente se estiver logado</p>
                    <Image
                        src={session?.user?.image}
                        alt="Picture of the author"
                        width={500}
                        height={500}
                    />
                    <button onClick={() => signOut()}>Sair</button>
                </div>
            </>
        )
    }
    return (
        <>
            Not signed in <br />
            <button onClick={() => signIn()}>Sign in</button>
        </>
    )
}
