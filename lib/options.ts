
export type StatusOption = { image: "/assets/backlog.svg", content: "Backlog" } | { image: "/assets/in-progress.svg", content: "In progress" } | { image: "/assets/completed.svg", content: "Completed" } | { image: "/assets/cancelled.svg", content: "Cancelled" }

export const statusOptions: StatusOption[] = [
    {
        image: "/assets/backlog.svg",
        content: "Backlog"
    },
    {
        image: "/assets/in-progress.svg", 
        content: "In progress"
    },
    {
        image: "/assets/completed.svg",
        content: "Completed"
    },
    {
        image: "/assets/cancelled.svg",
        content: "Cancelled"
    }
]

export type CategoryOption = {
    image: "/assets/general.svg",
    content: "General"
} | {
   image: "/assets/health.svg",
   content: "Health" 
} | {
    image: "/assets/learning.svg",
    content: "Learning"
} | {
    image: "/assets/life.svg",
    content: "Life"
} | {
    image: "/assets/work.svg",
    content: "Work"
}

export const categoryOptions: CategoryOption[] = [
    {
        image: "/assets/general.svg",
        content: "General"
    },
    {
        image: "/assets/health.svg",
        content:"Health"
    },
    {
        image: "/assets/learning.svg",
        content: "Learning"
    },
    {
        image: "/assets/life.svg",
        content: "Life"
    },
    {
        image: "/assets/work.svg",
        content: "Work"
    }
]