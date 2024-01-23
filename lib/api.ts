
import type { IComment, ISubTask, ITask, TaskCategory, TaskStatus } from "./types/task";
import type { IApiResponse } from "./types/api";

import { supabase } from "./supabase";

class Api {

    async register(email: string, password: string): Promise<IApiResponse<string>> {

        const { data, error } = await supabase.auth.signUp({ email, password })

        if (error) {
            return {
                data: null,
                error: error.message
            }
        }

        return {
            data: "Successfully signed up",
            error: null
        }

    }

    async signIn(email: string, password: string): Promise<IApiResponse<string>> {

        const { data, error } = await supabase.auth.signInWithPassword({ email, password })

        if (error) {
            return { 
                data: null, 
                error: error.message
            }
        }

        return {
            data: "Successfully signed in",
            error: null
        }
    }

    async requestPasswordReset(email: string): Promise<IApiResponse<string>> {

        const { data, error } = await supabase.auth.resetPasswordForEmail(email)

        if (error) {
            return { 
                data: null,
                error: error.message
            }
        }

        return {
            data: `If it exists, we've sent a password reset to: ${email}`,
            error: null
        }
    }

    async fetchTasks(): Promise<IApiResponse<ITask[]>> {

        const { data, error } = await supabase.from("tasks").select("*")

        return {
            data, 
            error
        }
    }

    async createTask(title: string, description: string, status: TaskStatus, category: TaskCategory): Promise<IApiResponse<string>> {

        const { data, error } = await supabase.from("tasks").insert({
            title: title,
            description: description,
            status: status,
            category: category
        })

        if (error) {
            return {
                data: null,
                error: error.message
            }
        }

        return {
            data: "Successfully created your task",
            error: null
        }

    }

    async updateTitle(id: string, title: string) {

        const { data, error } = await supabase.from("tasks").update({ "title": title }).eq("id", id)

        if (error) {
            return {
                data: null, 
                error: error.message
            }
        }

        return {
            data: "Successfully updated the task title",
            error: null
        }

    }

    async updateDescription(id: string, description: string) {

        const { data, error } = await supabase.from("tasks").update({ "description": description }).eq("id", id)

        if (error) {
            return {
                data: null, 
                error: error.message
            }
        }

        return {
            data: "Successfully updated the task description",
            error: null
        }

    }

    async updateStatus(id: string, status: TaskStatus) {

        const { data, error } = await supabase.from("tasks").update({"status": status}).eq("id", id)

        if (error) {
            return {
                data: null,
                error: error.message
            }
        }

        return {
            data: `Task status successfully updated to: ${status}`,
            error: null
        }

    }

    async updateCategory(id: string, category: TaskCategory) {

        const { data, error } = await supabase.from("tasks").update({"category": category}).eq("id", id)

        if (error) {
            return {
                data: null,
                error: error.message
            }
        }

        return {
            data: `Category status successfully updated to: ${category}`,
            error: null
        }
    }

    async updateSubTasks(id: string, subTasks: ISubTask[]) {

        const stringified = JSON.stringify(subTasks)

        const { data, error } = await supabase.from("tasks").update({ "subTasks": stringified }).eq("id", id)

        if (error) {
            return {
                data: null, 
                error: error.message
            }
        }

        return {
            data: "Successfully created the new sub task",
            error: null
        }
    }

    async updateComments(id: string, comments: IComment[]) {

        const stringified = JSON.stringify(comments)

        const { data, error } = await supabase.from("tasks").update({ "comments": stringified }).eq("id", id)

        if (error) {
            return {
                data: null, 
                error: error.message
            }
        }

        return {
            data: "Successfully created the new comment",
            error: null
        }
    }
 
}

export const api = new Api()