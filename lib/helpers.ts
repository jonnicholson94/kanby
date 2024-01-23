import { TaskCategory, TaskStatus } from "./types/task";

export const calculateStatus = (status: TaskStatus) => {
    switch (status) {
        case "Backlog":
            return "/assets/backlog.svg"
        case "In progress":
            return "/assets/in-progress.svg"
        case "Completed":
            return "/assets/completed.svg"
        case "Cancelled": 
            return "/assets/cancelled.svg"
    }
}

export const calculateCategory = (category: TaskCategory) => {
    switch (category) {
        case "General":
            return "/assets/general.svg"
        case "Health":
            return "/assets/health.svg"
        case "Learning":
            return "/assets/learning.svg"
        case "Life":
            return "/assets/life.svg"
        case "Work":
            return "/assets/work.svg"
    }
}