
import { useMemo, useState } from "react"

import { useQuery } from "react-query"

import useAuth from "@/lib/hooks/useAuth"

import { api } from "@/lib/api"

import type { FilterOptions } from "@/lib/types/task"

import DashboardHeader from "@/components/dashboard/dashboardHeader"
import DashboardLoader from "@/components/dashboard/dashboardLoader"
import EmptyDashboard from "@/components/dashboard/emptyDashboard"
import DashboardFilter from "@/components/dashboard/dashboardFilter"
import DashboardListItem from "@/components/dashboard/dashboardListItem"


export default function Dashboard() {

    const [active, setActive] = useState<FilterOptions>("All")

    useAuth()

    const { isLoading, data } = useQuery("tasks", api.fetchTasks)

    const filteredData = useMemo(() => {
        if (active === "All") {
            return data?.data
        } else if (active === "Backlog") {
            return data?.data?.filter(d => d.status === "Backlog")
        } else if (active === "In progress") {
            return data?.data?.filter(d => d.status === "In progress")
        }
    }, [data, active])

    if (isLoading) {
        return <DashboardLoader /> 
    }

    if (data?.data?.length === 0) {
        return <EmptyDashboard />
    }

    return (
        <>
            <DashboardHeader />
            <DashboardFilter active={active} setActive={setActive} />
            { filteredData?.map(task => {
                return <DashboardListItem key={task.id} id={task.id} title={task.title} status={task.status} category={task.category} />
            })}
        </>
    )
}