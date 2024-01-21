import { useState } from "react"

import InputError from "./inputError"
import { handleLengthValidation } from "@/lib/handleValidation"

type Props = {
    state: string 
    setState: React.Dispatch<React.SetStateAction<string>>
}

export default function TaskTitleInput({ state, setState }: Props) {

    const [error, setError] = useState("")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        setError(handleLengthValidation(e.target.value))

        setState(e.target.value)

    }

    return (
        <>
            <input className={`h-[40px] w-full px-[15px] border ${error ? "border-failed" : "border-border"} text-[14px] placeholder:text-placeholder rounded-sm`} type="text" value={state} onChange={(e) => handleChange(e)} placeholder="Enter a task title" />
            { error && <InputError message={error} />}
        </>
    )
}