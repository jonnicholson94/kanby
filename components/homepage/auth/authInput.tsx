
import { useState } from "react"

import { handleEmailValidation, handlePasswordValidation } from "@/lib/handleValidation"

import InputError from "@/components/ui/inputError"

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
            <label className="h-auto w-full mt-[15px] text-[12px]">{label}</label>
            <input className={`h-[40px] w-full border ${error ? "border-failed" : "border-border"} px-[10px] rounded-sm active:border-active mt-[5px] placeholder:text-placeholder text-[14px]`} type={type} value={state} onChange={(e) => handleChange(e)} placeholder={placeholder} />
            { error && <InputError message={error} /> }
        </>
    )
}