
import { useState } from "react"
import { toast } from "sonner"

import { api } from "@/lib/api"

type Props = {
    id: string
    value: string
}

export default function TaskTitle({ id, value }: Props) {

    const [title, setTitle] = useState(value)

    const handleBlur = async () => {

        if (title === value) {
            return 
        }

        const { data, error } = await api.updateTitle(id, title)

        if (error) {
            toast.error("Failed to update your task's title. Please try again.")
        }

    }

    return (
        <input className="h-[40px] w-full px-[15px] border border-border rounded-sm" value={title} onChange={(e) => setTitle(e.target.value)} onBlur={handleBlur} />
    )
}