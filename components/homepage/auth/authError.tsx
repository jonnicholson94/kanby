
type Props = {
    message: string
}

export default function AuthError({ message }: Props) {
    return (
        <div>
            <img src="/assets/error.svg" alt="A warning icon to indicate an error has occurred during auth" />
            <p>{message}</p>
        </div>
    )
}