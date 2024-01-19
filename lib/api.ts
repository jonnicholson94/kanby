
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

}

export const api = new Api()