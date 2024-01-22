import Link from "next/link";
import SelectPopup from "../ui/selectPopup";

import { statusOptions } from "@/lib/options";
import { categoryOptions } from "@/lib/options";

export default function TaskHeader() {

    const currentStatus = {
        image: "/assets/backlog.svg",
        content: "Backlog"
    }

    const currentCategory = {
        image: "/assets/general.svg",
        content: "General"
    }

    const handleCurrentStatusChange = () => {}
    const handleCurrentCategoryChange = () => {}

    return (
        <div className="h-[60px] w-full border-b border-border flex items-center justify-start px-[20px]">
            <div className="h-auto flex-grow flex items-center justify-start">
                <Link className="h-auto flex items-center justify-center" href="/dashboard">
                    <img className="h-[18px] w-[18px] mr-[5px]" src="/assets/arrow-left.svg" alt="An arrow pointing left, suggesting the user can go backwards" />
                    <p>Go back</p>
                </Link>
            </div>
            <div className="h-auto flex-grow flex items-center justify-end">
                <SelectPopup current={currentStatus} options={statusOptions} handleChange={handleCurrentStatusChange} testId="status-popup" />
                <SelectPopup current={currentCategory} options={categoryOptions} handleChange={handleCurrentCategoryChange} testId="category-popup" />
            </div>
        </div>
    )
}