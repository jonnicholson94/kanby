
import { useState, useMemo } from "react";
import { toast } from "sonner";
import { useQueryClient } from "react-query";
import { useRouter } from "next/router";

import { api } from "@/lib/api";

import { statusOptions } from "@/lib/options";
import { categoryOptions } from "@/lib/options";
import { TaskCategory, TaskStatus } from "@/lib/types/task";

import { calculateStatus, calculateCategory } from "@/lib/helpers";

import SelectPopup from "../ui/selectPopup";
import BackToDashboard from "../ui/backToDashboard";
import AlertDialog from "../ui/alertDialog";

type Props = {
    id: string
    status: TaskStatus
    category: TaskCategory
}

export default function TaskHeader({ id, status, category }: Props) {

    const router = useRouter()
    const queryClient = useQueryClient()

    const statusSrc = useMemo(() => {
        return calculateStatus(status)
    }, [status]) 

    const categorySrc = useMemo(() => {
        return calculateCategory(category)
    }, [category])

    const [currentStatus, setCurrentStatus] = useState({
        image: statusSrc,
        content: status
    })

    const [currentCategory, setCurrentCategory] = useState({
        image: categorySrc,
        content: category
    })

    const handleCurrentStatusChange = async (image: string, content: string) => {

        setCurrentStatus({
            image: image,
            content: content as TaskStatus
        })

        const { data, error } = await api.updateStatus(id, content as TaskStatus)

        if (error) {
            toast.error(error)
        }

    }
    const handleCurrentCategoryChange = async (image: string, content: string) => {
        setCurrentCategory({
            image: image,
            content: content as TaskCategory
        })

        const { data, error } = await api.updateCategory(id, content as TaskCategory)

        if (error) {
            toast.error(error)
        }
    }

    const handleDelete = async () => {

        const { data, error } = await api.deleteTask(id)

        if (data) {
            router.push("/dashboard")
            await queryClient.invalidateQueries("tasks")
            toast.success(data)
        } else {
            toast.error(error)
        }

    }

    return (
        <div className="h-[60px] w-full border-b border-border flex items-center justify-start px-[20px]">
            <div className="h-auto flex-grow flex items-center justify-start">
                <BackToDashboard />
            </div>
            <div className="h-auto flex-grow flex items-center justify-end">
                <SelectPopup current={currentStatus} options={statusOptions} handleChange={handleCurrentStatusChange} testId="status-popup" />
                <SelectPopup current={currentCategory} options={categoryOptions} handleChange={handleCurrentCategoryChange} testId="category-popup" />
                <AlertDialog title="Are you sure you want to delete this task?" description="Once you do, you won't be able to get it back." handleConfirm={handleDelete}>
                    <img src="/assets/delete.svg" alt="A trash can to indicate a task can be deleted" />
                </AlertDialog>
            </div>
        </div>
    )
}