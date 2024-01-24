
import { useState, useEffect } from "react"
import { useRouter } from "next/router"

import { supabase } from "../supabase"

async function useAuth() {

    const router = useRouter()    

    const [userSession, setUserSession] = useState<any>(null)

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session }}) => {
            if (session) {
                setUserSession(session)
            } else {
                router.push("/")
            }
        })
        
    }, [router])

}

export default useAuth