import Link from "next/link";

import { useBearStore } from "@/store/ui"

export default function DashboardHeader() {
    
    { /* todo: write tests for this component */ }

    const showCreateTaskModal = useBearStore((store) => store.showCreateTask)

    return (
        <header className="h-[50px] w-full flex items-center justify-center px-[20px] border-b border-border">
            <div className="h-auto flex-grow flex items-center justify-start">
                <Link className="font-bold" href="/">Kanby</Link>
            </div>
            <div className="h-auto flex-grow flex items-center justify-end">
                <Link href="/account" className="h-[35px] px-[10px] border border-border flex items-center justify-center rounded-sm text-[14px] mr-[10px]">
                    <img className="mr-[5px]" src="/assets/profile.svg" alt="A person to indicate a profile link" />
                    <p>Account</p>
                </Link>
                <button className="h-[35px] px-[10px] bg-primaryCta flex items-center justify-center rounded-sm text-ctaText" onClick={showCreateTaskModal} data-testid="dashboard-header-button">
                    <img className="mr-[5px]" src="/assets/plus-cta.svg" alt="A plus icon to indicate a task can be created" />
                    <p className="h-auto flex-grow text-[12px] font-bold">Create task</p>
                </button>
            </div>
        </header>
    )
}