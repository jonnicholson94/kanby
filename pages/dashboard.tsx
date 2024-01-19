
import DashboardHeader from "@/components/dashboard/dashboardHeader"
import { useAuth } from "@/lib/hooks/useAuth"

export default function Dashboard() {

    useAuth()

    return (
        <div>
            <DashboardHeader />
        </div>
    )
}