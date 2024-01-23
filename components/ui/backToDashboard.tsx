
import Link from "next/link"

export default function BackToDashboard() {
    return (
        <Link className="h-auto flex items-center justify-center" href="/dashboard">
            <img className="h-[18px] w-[18px] mr-[5px]" src="/assets/arrow-left.svg" alt="An arrow pointing left, suggesting the user can go backwards" />
            <p>Go back</p>
        </Link>
    )
}