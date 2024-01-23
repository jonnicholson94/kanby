import { FilterOptions } from "@/lib/types/task"

type Props = {
    active: FilterOptions
    setActive: React.Dispatch<React.SetStateAction<FilterOptions>>
}

interface ButtonProps extends Props {
    content: FilterOptions
}

export default function DashboardFilter({ active, setActive }: Props) {
    return (
        <div className="h-[70px] w-full border-b border-border flex items-center justify-start px-[30px]">
            <FilterButton active={active} setActive={setActive} content="All" />
            <FilterButton active={active} setActive={setActive} content="Backlog" />
            <FilterButton active={active} setActive={setActive} content="In progress" />
        </div>
    )
}

const FilterButton = ({ active, setActive, content}: ButtonProps) => {

    return (
        <button className={`h-[35px] px-[20px] ${active === content && "bg-primaryCta text-ctaText"} rounded-sm text-[12px] text-mainText`} onClick={() => setActive(content)}>
            {content}
        </button>
    )
}