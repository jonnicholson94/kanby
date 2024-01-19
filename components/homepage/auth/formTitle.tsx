
type Props = {
    title: "Create your Kanby account" | "Sign in to your Kanby account" | "Request a password reset"
}

export default function FormTitle({ title }: Props) {
    return (
        <h2>{title}</h2>
    )

}