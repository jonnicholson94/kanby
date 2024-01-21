import { calculateCategory, calculateStatus } from "@/lib/helpers"
import { TaskCategory, TaskStatus } from "@/lib/types/task"
import { useMemo } from "react"

type Props = {
    title: string 
    status: TaskStatus
    category: TaskCategory
}

export default function DashboardListItem({ title, status, category }: Props) {

    const statusSrc = useMemo(() => {
        return calculateStatus(status)
    }, [status]) 

    const categorySrc = useMemo(() => {
        return calculateCategory(category)
    }, [category])

    return (
        <div className="h-[50px] w-full border-b border-border flex items-center justify-center px-[20px] hover:bg-hover">
            <p className="text-[16px] flex-grow">{title}</p>
            <div className="h-[35px] px-[15px] rounded-[20px] border border-border flex items-center justify-center">
                <img className="h-[15px] w-[15px] mr-[5px]" src={statusSrc} alt="The relevant status icon of the task" />
                <p className="text-[12px]">{status}</p>
            </div>
            <div className="h-[35px] px-[15px] rounded-[20px] border border-border flex items-center justify-center ml-[10px]">
                <img className="h-[15px] w-[15px] mr-[5px]" src={categorySrc} alt="The relevant status icon of the task" />
                <p className="text-[12px]">{category}</p>
            </div>
        </div>
    )
}