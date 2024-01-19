
export interface ITask {
    id: string 
    userId: string 
    title: string
    description: string 
    subTasks: ISubTask[]
    comments: IComment[]
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

export type TaskStatus = "Backlog" | "In progress" | "Completed"

export type TaskCategory = "General" | "Health" | "Learning" | "Life" | "Work"