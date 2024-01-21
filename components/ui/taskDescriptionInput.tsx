
import { useState } from "react"

import InputError from "./inputError"
import { handleLengthValidation } from "@/lib/handleValidation"

type Props = {
    state: string 
    setState: React.Dispatch<React.SetStateAction<string>>
}

export default function TaskDescriptionInput({ state, setState }: Props) {

    const [error, setError] = useState("")

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {

        setError(handleLengthValidation(e.target.value))

        setState(e.target.value)

    }

    return (
        <>
            <textarea className={`h-[100px] w-full p-[15px] mt-[15px] border ${error ? "border-failed" : "border-border"} text-[12px] placeholder:text-placeholder rounded-sm`} value={state} onChange={(e) => handleChange(e)} placeholder="Enter a task description" />
            { error && <InputError message={error} />}
        </>
    )
}