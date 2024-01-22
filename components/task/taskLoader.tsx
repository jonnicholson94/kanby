
import Link from "next/link"

export default function TaskLoader() {
    return (
        <>
            <div className="h-[60px] w-full border-b border-border flex items-center justify-start px-[20px]">
                <div className="h-auto flex-grow flex items-center justify-start">
                    <Link className="h-auto flex items-center justify-center" href="/dashboard">
                        <img className="h-[18px] w-[18px] mr-[5px]" src="/assets/arrow-left.svg" alt="An arrow pointing left, suggesting the user can go backwards" />
                        <p>Go back</p>
                    </Link>
                </div>
                <div className="h-auto flex-grow flex items-center justify-end">
                    <span className="h-[35px] w-[100px] flex items-center justify-center bg-skeleton animate-pulse border border-border rounded-sm mr-[10px]"></span>
                    <span className="h-[35px] w-[100px] flex items-center justify-center bg-skeleton animate-pulse border border-border rounded-sm mr-[10px]"></span>
                </div>
            </div>
            <div className="h-auto w-full flex items-center justify-center flex-col px-[50px] mt-[50px]">
                <span className="h-[40px] w-full bg-skeleton animate-pulse rounded-sm mb-[15px]"></span>
                <span className="h-[120px] w-full bg-skeleton animate-pulse rounded-sm"></span>
            </div>
        </>
    )
}