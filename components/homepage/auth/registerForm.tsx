
import { useState } from "react";
import { useRouter } from "next/router";
import { toast } from "sonner";

import { api } from "@/lib/api";

import AuthInput from "./authInput";
import FormTitle from "./formTitle";
import FormButton from "./formButton";
import FormLink from "./formLink";
import AuthForm from "./authForm";

type Props = {
    setActive: React.Dispatch<React.SetStateAction<"register" | "sign in" | "forgot password">>
}

export default function RegisterForm({ setActive }: Props) {

    const router = useRouter()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [loading, setLoading] = useState(false)

    const handleRegister = async (e: React.FormEvent) => {

        e.preventDefault()

        setLoading(true)

        const { data, error } = await api.register(email, password)

        if (data) {
            // Handle redirecting user to dashboard
            router.push("/dashboard")
            setLoading(false)
        } else {
            // Render toast 
            toast.error(error as string)
            setLoading(false)
        }

    }

    return (
        <AuthForm handleSubmit={handleRegister}>
            <FormTitle title="Create your Kanby account" />
            <AuthInput label="Email" type="email" state={email} setState={setEmail} placeholder="Enter your email" />
            <AuthInput label="Password" type="password" state={password} setState={setPassword} placeholder="Enter your password" />
            <FormButton content="Create account" loading={loading} />
            <FormLink toggle="sign in" content="Already got an account?" setState={setActive} />
        </AuthForm>
    )
}