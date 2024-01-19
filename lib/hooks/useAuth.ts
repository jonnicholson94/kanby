
import { useState, useEffect } from "react"
import { useRouter } from "next/router"

import { supabase } from "../supabase"

export async function useAuth() {

    const router = useRouter()

    const [userSession, setUserSession] = useState<any>(null)

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session }}) => {
            if (session) {
                console.log(session)
                setUserSession(session)
            } else {
                router.push("/")
            }
        })
        
    }, [router])

}