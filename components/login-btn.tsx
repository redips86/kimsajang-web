import {signOut, useSession} from "next-auth/react"
import {useRouter} from "next/router";

export default function LoginBtn() {
    const { data: session } = useSession();
    const router = useRouter();
    if (session) {
        return (
            <>
                {session.user.email}
                <button className={"mx-2 border border-zinc-500 p-3 w-24"} onClick={() => signOut()}>로그아웃</button>
            </>
        )
    }
    return (
        <>
            <button className={"mx-2 border border-zinc-500 p-3 w-24"} onClick={() => router.push("/auth/signIn")}>로그인</button>
        </>
    )
}