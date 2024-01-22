import useBearStore from "@/store/ui";
import DashboardHeader from "./dashboardHeader";

export default function EmptyDashboard() {

    const showCreateTaskModal = useBearStore((store) => store.showCreateTask)

    return (
        <>
            <DashboardHeader />
            <div className="h-auto w-full flex items-center justify-center mt-[100px] flex-col">
                <img className="h-[50px] w-[50px]" src="/assets/info.svg" alt="An info icon to indicate useful information is being displayed" />
                <h2 className="h-auto xs:w-[95%] md:w-[700px] text-[32px] font-bold text-center mt-[30px]">You don&apos;t have any tasks yet</h2>
                <p className="h-auto xs:w-[95%] md:w-[700px] text-[20px] mt-[20px] text-center">Get started with adding a task by clicking the button below</p>
                <button className="h-[40px] px-[20px] bg-primaryCta text-ctaText font-bold flex items-center justify-center rounded-sm mt-[30px]" onClick={showCreateTaskModal} data-testid="empty-dashboard-button">
                    <img className="h-[20px] w-[20px] mr-[10px]" src="/assets/plus-cta.svg" alt="A plus icon to indicate a task can be added" />
                    <p className="flex-grow">Create task</p>
                </button>
            </div>
        </>
    )
}