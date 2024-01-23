
export interface ITask {
    id: string 
    user_id: string 
    title: string
    description: string
    subTasks: string | null 
    comments: string | null
    status: TaskStatus 
    category: TaskCategory
}

export interface ISubTask {
    id: string 
    title: string 
    isCompleted: boolean 
}

export interface IComment {
    id: string 
    content: string 
    timestamp: string 
}

export type TaskStatus = "Backlog" | "In progress" | "Completed" | "Cancelled"

export type TaskCategory = "General" | "Health" | "Learning" | "Life" | "Work"

export type FilterOptions = "Backlog" | "In progress" | "All"