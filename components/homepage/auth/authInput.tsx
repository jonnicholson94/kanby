
import { useState } from "react"

import { handleEmailValidation, handlePasswordValidation } from "@/lib/handleAuthErrors"
import AuthError from "./authError"

type Props = {
    label: string 
    type: "email" | "password"
    state: string
    setState: React.Dispatch<React.SetStateAction<string>>
    placeholder: "Enter your email" | "Enter your password"
}

export default function AuthInput({ label, type, state, setState, placeholder }: Props) {

    const [error, setError] = useState("")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        if (type === "email") {
            setError(handleEmailValidation(e.target.value))
        } else {
            setError(handlePasswordValidation(e.target.value))
        }

        setState(e.target.value)

    }

    return (
        <>
            <label>{label}</label>
            <input type={type} value={state} onChange={(e) => handleChange(e)} placeholder={placeholder} />
            { error && <AuthError message={error} /> }
        </>
    )
}