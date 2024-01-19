import Loader from "@/components/ui/loader"

type Props = {
    content: "Create account" | "Sign in" | "Request reset"
    loading: boolean
}

export default function FormButton({ content, loading }: Props) {
    return (
        <button className="h-[40px] w-full bg-primaryCta text-ctaText font-bold text-[14px] flex items-center justify-center rounded-sm mt-[15px]" type="submit" disabled={loading} data-testid="form-button">
            { loading ? <Loader /> : content }
        </button>
    )
}