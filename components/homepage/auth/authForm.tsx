type Props = {
    children: React.ReactNode 
    handleSubmit: (e: React.FormEvent) => void
}

export default function AuthForm({ children, handleSubmit }: Props) {
    return (
        <form data-testid="auth-form" className="h-auto xs:w-[95%] lg:w-[700px] bg-primaryBg border border-border rounded-md p-[30px] flex items-center justify-center flex-col my-[50px]" onSubmit={handleSubmit}>
            { children }
        </form>
    )
}