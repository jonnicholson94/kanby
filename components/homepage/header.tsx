import Link from "next/link";

export default function Header() {
    return (
        <header data-testid="homepage-header" className="h-[50px] w-full border-b border-border flex items-center justify-center px-[20px]">
            <div className="h-auto flex-grow flex items-center justify-start">
                <Link className="text-[16px] font-bold" href="/">Kanby</Link>
            </div>
        </header>
    )
}