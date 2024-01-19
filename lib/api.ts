
import type { ITask } from "./types/task";
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
 
}

export const api = new Api()