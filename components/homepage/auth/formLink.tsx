
type Props = {
    content: "Already got an account?" | "Not got an account?" | "Back to sign in"
    toggle: "register" | "sign in" | "forgot password"
    setState: React.Dispatch<React.SetStateAction<"register" | "sign in" | "forgot password">>
}

export default function FormLink({ content, toggle, setState }: Props) {
    return (
        <button onClick={() => setState(toggle)}>{content}</button>
    )
}