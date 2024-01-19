
import { useState } from "react";

import SubHeading from "@/components/homepage/subHeading";
import Title from "@/components/homepage/title";
import RegisterForm from "@/components/homepage/auth/registerForm";
import SignInForm from "@/components/homepage/auth/signInForm";
import ForgotPasswordForm from "@/components/homepage/auth/forgotPasswordForm";
import Header from "@/components/homepage/header";

export default function Home() {

  const [active, setActive] = useState<"register" | "sign in" | "forgot password">("register")

  return (
    <div className="h-auto min-h-screen w-full flex flex-col items-center justify-start">
      <Header />
      <div className="h-auto xs:w-[95%] md:w-[700px] flex items-center justify-center flex-col mt-[100px]">
        <Title />
        <SubHeading />
        { active === "register" ? <RegisterForm setActive={setActive} /> : active === "sign in" ? <SignInForm setActive={setActive} /> : <ForgotPasswordForm setActive={setActive} /> }
      </div>
    </div>
  )
}
