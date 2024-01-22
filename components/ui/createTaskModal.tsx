
import { useState } from "react"
import { toast } from "sonner"

import { useQueryClient } from "react-query"
import { api } from "@/lib/api"
import type { TaskCategory, TaskStatus } from "@/lib/types/task"

import type { StatusOption, CategoryOption } from "@/lib/options"
import { categoryOptions, statusOptions } from "@/lib/options"

import useBearStore from "@/store/ui"

import SelectPopup from "./selectPopup"
import TaskTitleInput from "./taskTitleInput"
import TaskDescriptionInput from "./taskDescriptionInput"
import Loader from "./loader"

export default function CreateTaskModal() {

    const queryClient = useQueryClient()

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [status, setStatus] = useState<StatusOption>({ image: "/assets/backlog.svg", content: "Backlog" })
    const [category, setCategory] = useState<CategoryOption>({ image: "/assets/general.svg", content: "General" })

    const [loading, setLoading] = useState(false)

    const isCreateTaskOpen = useBearStore((state) => state.isCreateTaskOpen)
    const hideModal = useBearStore((state) => state.hideCreateTask)

    const handleStatusUpdate = (image: string, content: string) => {
        setStatus({ image: image, content: content} as StatusOption)
    }

    const handleCategoryUpdate = (image: string, content: string) => {
        setCategory({ image: image, content: content} as CategoryOption)
    }

    const handleSubmit = async (e: React.FormEvent) => {

        e.preventDefault()

        setLoading(true)

        if (title === "" || description === "") {
            toast.error("Make sure to add both a title and a description when creating your task")
            return
        }

        const { data, error } = await api.createTask(title, description, status.content as TaskStatus, category.content as TaskCategory)

        if (data) {
            setTitle("")
            setDescription("")
            setStatus({ image: "/assets/backlog.svg", content: "Backlog" })
            setCategory({ image: "/assets/general.svg", content: "General" })
            setLoading(false)
            await queryClient.invalidateQueries("tasks")
            hideModal()
        } else {
            toast.error(error as string)
            setLoading(false)
        }

    }

    return (
        <div className={`${!isCreateTaskOpen && "hidden"}`} data-testid="create-task-modal">
            <div className={`h-screen w-screen fixed top-0 left-0 bg-overlay opacity-70`} onClick={hideModal} data-testid="create-task-overlay"></div>

            <form className="h-auto xs:w-[95%] md:w-[50%] bg-primaryBg rounded-md border border-border fixed top-[20%] xs:left-[2.5%] md:left-[25%] p-[30px] flex items-center justify-center flex-col" onSubmit={handleSubmit} data-testid="create-task-form">
                <h1 className="h-auto w-full text-[16px] font-bold mb-[15px]">Create a new task</h1>
                <TaskTitleInput state={title} setState={setTitle} />
                <TaskDescriptionInput state={description} setState={setDescription} />
                <span className="h-[1px] w-full bg-border my-[15px]"></span>
                <div className="h-auto w-full xs:flex-col lg:flex-row flex items-center justify-center">
                    <div className="h-auto xs:w-full lg:flex-grow flex items-center justify-start">
                        <SelectPopup current={status} options={statusOptions} handleChange={handleStatusUpdate} testId="status-popup"  />
                        <SelectPopup current={category} options={categoryOptions} handleChange={handleCategoryUpdate} testId="category-popup" />
                    </div>
                    <div className="h-auto xs:w-full lg:flex-grow flex items-center justify-end xs:mt-[20px] lg:mt-[0px]">
                        <button className={`h-[35px] w-[80px] border border-border rounded-sm text-[12px] mr-[10px] ${loading && "opacity-30"}`} disabled={loading} onClick={hideModal} type="button" data-testid="cancel-button">Cancel</button>
                        <button className={`h-[35px] w-[80px] bg-primaryCta text-ctaText rounded-sm font-bold text-[12px] flex items-center justify-center`} disabled={loading} type="submit" data-testid="create-task-submit">
                            { loading ? <Loader /> : "Save" }
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}