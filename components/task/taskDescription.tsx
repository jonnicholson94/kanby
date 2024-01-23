
import { useState } from "react";
import { toast } from "sonner";

import { api } from "@/lib/api";

type Props = {
    id: string 
    value: string 
}

export default function TaskDescription({ id, value }: Props) {

    const [description, setDescription] = useState(value)

    const handleBlur = async () => {

        if (description === value) {
            return 
        }

        const { data, error } = await api.updateDescription(id, description)

        if (error) {
            toast.error("Failed to update your task's title. Please try again.")
        }

    }

    return (
        <textarea className={`h-[100px] w-full p-[15px] mt-[15px] border border-border text-[12px] placeholder:text-placeholder rounded-sm`} value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter a task description" onBlur={handleBlur} />
    )

}