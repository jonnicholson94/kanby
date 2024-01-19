
import { useAuth } from "@/lib/hooks/useAuth"
import { useQuery } from "react-query"

import { api } from "@/lib/api"

import DashboardHeader from "@/components/dashboard/dashboardHeader"
import DashboardLoader from "@/components/dashboard/dashboardLoader"
import EmptyDashboard from "@/components/dashboard/emptyDashboard"

export default function Dashboard() {

    useAuth()

    const { isLoading, data } = useQuery("tasks", api.fetchTasks)

    if (isLoading) {
        return <DashboardLoader /> 
    }

    console.log(data)

    if (data?.data?.length === 0) {
        return <EmptyDashboard />
    }

    return (
        <div>Hello world</div>
    )
}