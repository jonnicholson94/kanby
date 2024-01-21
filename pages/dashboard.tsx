
import { useQuery } from "react-query"

import { useAuth } from "@/lib/hooks/useAuth"

import { api } from "@/lib/api"

import DashboardHeader from "@/components/dashboard/dashboardHeader"
import DashboardLoader from "@/components/dashboard/dashboardLoader"
import EmptyDashboard from "@/components/dashboard/emptyDashboard"
import DashboardFilter from "@/components/dashboard/dashboardFilter"
import DashboardListItem from "@/components/dashboard/dashboardListItem"

export default function Dashboard() {

    useAuth()

    const { isLoading, data } = useQuery("tasks", api.fetchTasks)

    if (isLoading) {
        return <DashboardLoader /> 
    }

    if (data?.data?.length === 0) {
        return <EmptyDashboard />
    }

    return (
        <>
            <DashboardHeader />
            <DashboardFilter />
            { data?.data?.map(task => {
                return <DashboardListItem key={task.id} title={task.title} status={task.status} category={task.category} />
            })}
        </>
    )
}