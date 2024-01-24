
import { useState } from "react"

import * as Dialog from "@radix-ui/react-alert-dialog"
import Loader from "./loader"

type Props = {
    children: React.ReactNode
    title: string 
    description: string 
    handleConfirm: () => void 
}

export default function AlertDialog({ children, title, description, handleConfirm }: Props) {

    const [loading, setLoading] = useState(false)
    const [open, setOpen] = useState(false)

    const handleClick = () => {

        setLoading(true)

        handleConfirm()

        setLoading(false)
        setOpen(false)

    }

    return (
        <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger className="h-[35px] px-[10px] border border-border rounded-sm">
                { children }
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="h-screen w-screen fixed top-0 left-0 bg-overlay opacity-70" />
                <Dialog.Content className="h-auto xs:w-[95%] md:w-[40%] flex items-center justify-center flex-col bg-primaryBg fixed top-[30%] xs:left-[2.5%] md:left-[30%] p-[30px] rounded-md">
                    <Dialog.Title className="h-auto w-full text-[20px] font-bold">
                        {title}
                    </Dialog.Title>
                    <Dialog.Description className="h-auto w-full text-[14px] mt-[10px] mb-[20px]">
                        {description}
                    </Dialog.Description>
                    <div className="h-auto w-full flex items-center justify-end">
                        <Dialog.Cancel className="h-[35px] px-[15px] border border-border text-[14px] rounded-sm">Cancel</Dialog.Cancel>
                        <Dialog.Action className="h-[35px] px-[15px] bg-primaryCta text-ctaText text-[14px] rounded-sm flex items-center justify-center ml-[10px] font-bold" onClick={handleClick}>
                            { loading ? <Loader /> : "Confirm" }
                        </Dialog.Action>
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}