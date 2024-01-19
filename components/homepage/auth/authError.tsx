
type Props = {
    message: string
}

export default function AuthError({ message }: Props) {
    return (
        <div className="h-auto w-full flex items-center justify-start mt-[10px]">
            <img className="mr-[5px]" src="/assets/error.svg" alt="A warning icon to indicate an error has occurred during auth" />
            <p className="text-[12px] text-failed">{message}</p>
        </div>
    )
}