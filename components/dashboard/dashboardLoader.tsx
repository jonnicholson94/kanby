
import { useState } from "react";

import { FilterOptions } from "@/lib/types/task";

import DashboardFilter from "./dashboardFilter";
import DashboardHeader from "./dashboardHeader";
import DashboardSkeletonItem from "./dashboardSkeletonItem";

export default function DashboardLoader() {

    const [active, setActive] = useState<FilterOptions>("All")

    return (
        <>
            <DashboardHeader />
            <DashboardFilter active={active} setActive={setActive} />
            <DashboardSkeletonItem />
            <DashboardSkeletonItem />
            <DashboardSkeletonItem />
        </>
    )
}