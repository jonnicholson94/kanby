
type Props = {
    content: "Create account" | "Sign in" | "Request reset"
}

export default function FormButton({ content }: Props) {
    return (
        <button type="submit">{content}</button>
    )
}