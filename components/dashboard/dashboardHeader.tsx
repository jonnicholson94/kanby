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
                { /* todo: create popup modal to create a task */ }
                
                <button className="h-[35px] px-[10px] bg-primaryCta flex items-center justify-center rounded-sm text-ctaText" onClick={showCreateTaskModal}>
                    <img className="mr-[5px]" src="/assets/plus-cta.svg" alt="A plus icon to indicate a task can be created" />
                    <p className="h-auto flex-grow text-[12px] font-bold">Create task</p>
                </button>
            </div>
        </header>
    )
}