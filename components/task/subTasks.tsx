
import { useState } from "react"
import { v4 as uuid } from "uuid"

import { ISubTask } from "@/lib/types/task"
import { api } from "@/lib/api"
import { toast } from "sonner"

type Props = {
    id: string
    tasks: string | null
}

export default function SubTasks({ id, tasks }: Props) {

    const [subTasks, setSubTasks] = useState<ISubTask[]>(tasks ? JSON.parse(tasks) : [])
    const [newTaskTitle, setNewTaskTitle] = useState("")

    const handleCompletedToggle = async (task_id: string) => {

        const originalState = [...subTasks]
        const stateCopy = [...subTasks]

        const index = subTasks.findIndex(t => t.id === task_id)

        stateCopy[index].isCompleted = !stateCopy[index].isCompleted

        setSubTasks(stateCopy)

        const { data, error } = await api.updateSubTasks(id, stateCopy)

        if (error) {
            toast.error(error)
            setSubTasks(originalState)
            return 
        }

    }

    const handleCreateNewTask = async (e: React.FormEvent) => {

        e.preventDefault()

        // Generate the UUID
        const newId = uuid()

        // Generate the new task with the correct structure 
        const newTask: ISubTask = {
            id: newId,
            title: newTaskTitle,
            isCompleted: false
        }

        const originalState = [...subTasks]
        const stateCopy = [...subTasks, newTask]

        setSubTasks(stateCopy)

        const { data, error } = await api.updateSubTasks(id, stateCopy)

        if (error) {
            toast.error(error)
            setSubTasks(originalState)
            return 
        }
        
        setNewTaskTitle("")

    }

    return (
        <div className="h-auto w-full flex items-center justify-center flex-col">
            <h2 className="text-[20px] font-bold w-full mb-[15px]">Sub tasks</h2>
            { subTasks && subTasks.map(t => {
                return (
                    <div key={t.id} className="h-[40px] w-full border border-border flex items-center justify-center rounded-sm mb-[15px] px-[15px]">
                        <button className={`h-[20px] w-[20px] rounded-md border border-border mr-[10px] flex items-center justify-center ${t.isCompleted && "bg-primaryCta"}`} onClick={() => handleCompletedToggle(t.id)}>
                            { t.isCompleted && <img className="h-[15px] w-[12px]" src="/assets/check-white.svg" alt="A checkmark to indicate a sub task has been completed" /> }
                        </button>
                        <p className={`text-[14px] flex-grow ${t.isCompleted && "line-through"}`}>{t.title}</p>
                    </div>
                )
            })}
            <form className="h-auto w-full flex items-end justify-center flex-col" onSubmit={handleCreateNewTask}>
                <input className="h-[40px] w-full border border-border rounded-sm px-[15px] text-[14px] placeholder:text-placeholder" value={newTaskTitle} onChange={(e) => setNewTaskTitle(e.target.value)} type="text" placeholder="Enter a sub task title" />
                <button className="h-[35px] px-[20px] bg-primaryCta text-ctaText font-bold rounded-sm mt-[15px] text-[14px]" type="submit">Save</button>
            </form>
        </div>
    )
}