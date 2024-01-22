
import { useMemo, useState } from "react"

import { useRouter } from "next/router"
import { useQuery } from "react-query"

import { useAuth } from "@/lib/hooks/useAuth"
import { api } from "@/lib/api"

import TaskHeader from "@/components/task/taskHeader"
import TaskLoader from "@/components/task/taskLoader"
import TaskTitle from "@/components/task/taskTitle"
import TaskDescription from "@/components/task/taskDescription"

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

    }

    return (
        <>
            <TaskHeader />
            <div className="h-auto w-full flex items-center justify-center flex-col p-[50px]">
                <TaskTitle value={task!.title} handleBlur={() => {}} />
                <TaskDescription value={task!.description} handleBlur={() => {}} />
            </div>
        </>
    )
}