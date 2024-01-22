
import { useState } from "react";

type Props = {
    value: string 
    handleBlur: (newValue: string) => void
}

export default function TaskDescription({ value, handleBlur }: Props) {

    const [description, setDescription] = useState(value)

    return (
        <textarea className={`h-[100px] w-full p-[15px] mt-[15px] border border-border text-[12px] placeholder:text-placeholder rounded-sm`} value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter a task description" />
    )

}