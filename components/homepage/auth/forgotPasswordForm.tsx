
import { useState } from "react";
import { useRouter } from "next/router";
import { toast } from "sonner";

import { api } from "@/lib/api";

import AuthForm from "./authForm";
import AuthInput from "./authInput";
import FormTitle from "./formTitle";
import FormButton from "./formButton";
import FormLink from "./formLink";

type Props = {
    setActive: React.Dispatch<React.SetStateAction<"register" | "sign in" | "forgot password">>
}

export default function ForgotPasswordForm({ setActive }: Props) {

    const router = useRouter()

    const [email, setEmail] = useState("")

    const [loading, setLoading] = useState(false)

    const handleReset = async (e: React.FormEvent) => {

        e.preventDefault()

        setLoading(true)

        const { data, error } = await api.requestPasswordReset(email) 

        if (data) {
            toast.success(data)
            setLoading(false)
        } else {
            toast.error(error as string)
            setLoading(false)
        }

    }

    return (
        <AuthForm handleSubmit={handleReset}>
            <FormTitle title="Request a password reset" />
            <AuthInput label="Email" type="email" state={email} setState={setEmail} placeholder="Enter your email" />
            <FormButton content="Request reset" loading={loading} />
            <FormLink content="Back to sign in" toggle="sign in" setState={setActive} />
        </AuthForm>
    )
}