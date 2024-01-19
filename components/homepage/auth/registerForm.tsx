
import { useState } from "react";

import AuthInput from "./authInput";
import FormTitle from "./formTitle";
import FormButton from "./formButton";
import FormLink from "./formLink";

type Props = {
    setActive: React.Dispatch<React.SetStateAction<"register" | "sign in" | "forgot password">>
}

export default function RegisterForm({ setActive }: Props) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <form>
            <FormTitle title="Create your Kanby account" />
            <AuthInput label="Email" type="email" state={email} setState={setEmail} placeholder="Enter your email" />
            <AuthInput label="Password" type="password" state={password} setState={setPassword} placeholder="Enter your password" />
            <FormButton content="Create account" />
            <FormLink toggle="sign in" content="Already got an account?" setState={setActive} />
        </form>
    )
}