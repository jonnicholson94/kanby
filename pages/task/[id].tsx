
import { useMemo } from "react"

import { useRouter } from "next/router"
import { useQuery } from "react-query"

import useAuth from "@/lib/hooks/useAuth"
import { api } from "@/lib/api"

import TaskHeader from "@/components/task/taskHeader"
import TaskLoader from "@/components/task/taskLoader"
import TaskTitle from "@/components/task/taskTitle"
import TaskDescription from "@/components/task/taskDescription"
import NoTaskFound from "@/components/task/noTaskFound"
import Divider from "@/components/ui/divider"
import SubTasks from "@/components/task/subTasks"
import TaskComments from "@/components/task/taskComments"

export default function Task() {

    const router = useRouter()

    useAuth()

    const { isLoading, data } = useQuery(`tasks`, api.fetchTasks)

    const task = useMemo(() => {
        return data?.data?.find(t => t.id === router.query.id)
    }, [data, router.query.id])

    if (isLoading) {
        return <TaskLoader />
    }

    if (!task || data?.data?.length === 0) {
        return <NoTaskFound />
    }

    return (
        <>
            <TaskHeader id={task!.id} status={task!.status} category={task!.category} />
            <div className="h-auto w-full flex items-center justify-center flex-col p-[50px]">
                <TaskTitle id={task!.id} value={task!.title} />
                <TaskDescription id={task!.id} value={task!.description} />
                <Divider />
                <SubTasks id={task!.id} tasks={task!.subTasks} />
                <Divider />
                <TaskComments id={task!.id} comments={task!.comments} />
            </div>
        </>
    )
}