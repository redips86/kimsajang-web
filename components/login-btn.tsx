import {signIn, signOut, useSession} from "next-auth/react"

export default function LoginBtn() {
    const { data: session } = useSession()
    if (session) {
        return (
            <>
                {session?.user?.email}
                <button className={"mx-2 border border-zinc-500 p-3 w-24"} onClick={() => signOut()}>로그아웃</button>
            </>
        )
    }
    return (
        <>
            <button className={"mx-2 border border-zinc-500 p-3 w-24"} onClick={() => signIn()}>로그인</button>
        </>
    )
}