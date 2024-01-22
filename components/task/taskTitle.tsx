
import { useState } from "react"

type Props = {
    value: string
    handleBlur: (newContent: string) => void 
}

export default function TaskTitle({ value, handleBlur }: Props) {

    const [title, setTitle] = useState(value)

    return (
        <input className="h-[40px] w-full px-[15px] border border-border rounded-sm" value={title} onChange={(e) => setTitle(e.target.value)}  />
    )
}