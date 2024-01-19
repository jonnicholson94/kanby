
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

export default function SignInForm({ setActive }: Props) {

    const router = useRouter()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [loading, setLoading] = useState(false)

    const handleSignIn = async (e: React.FormEvent) => {

        e.preventDefault()

        setLoading(true)

        const { data, error } = await api.signIn(email, password) 

        if (data) {
            router.push("/dashboard")
        } else {
            toast.error(error as string)
            setLoading(false)
        }

    }

    return (
        <AuthForm handleSubmit={handleSignIn}>
            <FormTitle title="Sign in to your Kanby account" />
            <AuthInput label="Email" type="email" state={email} setState={setEmail} placeholder="Enter your email" />
            <AuthInput label="Password" type="password" state={password} setState={setPassword} placeholder="Enter your password" />
            <FormButton content="Sign in" loading={loading} />
            <FormLink content="Not got an account?" toggle="register" setState={setActive} />
            <FormLink content="Forgotten your password?" toggle="forgot password" setState={setActive} />
        </AuthForm>
    )
}