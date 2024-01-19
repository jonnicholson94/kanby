
import { useState } from "react";

import SubHeading from "@/components/homepage/subHeading";
import Title from "@/components/homepage/title";
import RegisterForm from "@/components/homepage/auth/registerForm";

export default function Home() {

  const [active, setActive] = useState<"register" | "sign in" | "forgot password">("register")

  return (
    <div className="h-auto min-h-screen w-full flex items-center justify-center">
      <div className="h-auto xs:w-[95%] md:w-[700px] flex items-center justify-center flex-col">
        <Title />
        <SubHeading />
        <RegisterForm setActive={setActive} />
      </div>
    </div>
  )
}
