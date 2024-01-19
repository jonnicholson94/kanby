import DashboardFilter from "./dashboardFilter";
import DashboardHeader from "./dashboardHeader";
import DashboardSkeletonItem from "./dashboardSkeletonItem";

export default function DashboardLoader() {
    return (
        <>
            <DashboardHeader />
            <DashboardFilter />
            <DashboardSkeletonItem />
            <DashboardSkeletonItem />
            <DashboardSkeletonItem />
        </>
    )
}