import Link from "next/link";

export default function NoTaskFound() {
    return (
        <div className="h-screen w-full flex items-center justify-center flex-col">
            <img className="h-[50px] w-[50px]" src="/assets/error.svg" alt="A warning to indicate an element hasn't been found" />
            <h1 className="h-auto xs:w-[95%] md:w-[500px] text-[36px] font-bold my-[15px] text-center">No task with this ID has been found</h1>
            <p className="h-auto xs:w-[95%] md:w-[500px] text-center text-[20px]">Maybe you clicked on a broken link, or typed the URL in wrong.</p>
            <Link className="h-[40px] px-[20px] bg-primaryCta text-ctaText flex items-center justify-center rounded-sm font-bold mt-[30px]" href="/dashboard">Back to dashboard</Link>
        </div>
    )
}