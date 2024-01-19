
export default function DashboardSkeletonItem() {
    return (
        <div className="h-[50px] w-full border-b border-border flex items-center justify-center px-[20px]">
            <div className="h-auto flex-grow flex items-center justify-start">
                <span className="h-[30px] w-[250px] bg-skeleton animate-pulse rounded-sm"></span>
            </div>
            <span className="h-[30px] w-[100px] bg-skeleton animate-pulse rounded-sm mr-[10px]"></span>
            <span className="h-[30px] w-[100px] bg-skeleton animate-pulse rounded-sm"></span>
        </div>
    )
}