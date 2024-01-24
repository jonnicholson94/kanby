
import { useState } from "react";
import Head from "next/head";

import SubHeading from "@/components/homepage/subHeading";
import Title from "@/components/homepage/title";
import RegisterForm from "@/components/homepage/auth/registerForm";
import SignInForm from "@/components/homepage/auth/signInForm";
import ForgotPasswordForm from "@/components/homepage/auth/forgotPasswordForm";
import Header from "@/components/homepage/header";

export default function Home() {

  const [active, setActive] = useState<"register" | "sign in" | "forgot password">("register")

  return (
    <>
    <Head>
      <title>Manage your tasks without the fuss | Kanby</title>
    </Head>
    <div className="h-auto min-h-screen w-full flex flex-col items-center justify-start">
      <Header />
      <div className="h-auto xs:w-[95%] md:w-[700px] flex items-center justify-center flex-col xs:mt-[50px] md:mt-[100px] z-20">
        <Title />
        <SubHeading />
        { active === "register" ? <RegisterForm setActive={setActive} /> : active === "sign in" ? <SignInForm setActive={setActive} /> : <ForgotPasswordForm setActive={setActive} /> }
      </div>
      <span className="h-[300px] w-[300px] absolute top-[45%] left-[8%] bg-green rounded-rnd opacity-40"></span>
      <span className="h-[150px] w-[150px] absolute bottom-[10%] right-[12%] bg-blue rounded-rnd opacity-70"></span>
      <span className="xs:h-[175px] xs:w-[175px] md:h-[225px] md:w-[225px] absolute top-[20%] xs:right-[5%] md:right-[23%] bg-salmon rounded-rnd opacity-40"></span>
    </div>
    </>
  )
}
