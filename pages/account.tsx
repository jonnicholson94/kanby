
import { useState, useEffect } from "react";

import AccountHeader from "@/components/account/accountHeader";
import useAuth from "@/lib/hooks/useAuth";
import { supabase } from "@/lib/supabase";
import AccountDetail from "@/components/account/accountDetail";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Account() {

    const router = useRouter()

    useAuth()

    const [user, setUser] = useState<any>(null)

    useEffect(() => {

        supabase.auth.getUser().then((result) => {
            setUser(result)
        })

    }, [])

    const handleSignOut = async () => {
        await supabase.auth.signOut()
        router.push("/")
    }

    return (
        <>
            <Head>
                <title>Your account | Kanby</title>
            </Head>
            <AccountHeader />
            <div className="h-auto w-full flex items-center justify-center flex-col p-[50px]">
                <h2 className="h-auto xs:w-[95%] md:w-[500px] text-[18px] font-bold mb-[30px]">Account details</h2>
                { user &&
                <>
                    <AccountDetail property="Email" value={user?.data.user.email} />
                </>
                }
                <button className="h-[40px] xs:w-[95%] md:w-[500px] bg-primaryCta text-ctaText font-bold rounded-sm text-[14px] mt-[30px]" onClick={handleSignOut}>Sign out</button>
            </div>
        </>
    )
}