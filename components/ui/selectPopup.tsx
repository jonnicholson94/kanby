
import * as Select from "@radix-ui/react-select"

type Props = {
    current: { image: string, content: string }
    options: { image: string, content: string }[]
    handleChange: (image: string, value: string) => void 
    testId: "status-popup" | "category-popup"
}

export default function SelectPopup({ current, options, handleChange, testId }: Props) {

    const handleUpdate = (value: string) => {

        const element = options.find(o => {
            return o.content === value
        })

        if (element) {
            return handleChange(element.image, element!.content)
        }

    }

    return (
        <Select.Root onValueChange={handleUpdate} >

            <Select.Trigger className="mr-[10px]">
                <div className="h-[35px] px-[10px] flex items-center justify-center border border-border rounded-sm" data-testid={testId}>
                    <img className="h-[15px] w-[15px] mr-[5px]" src={current.image} alt="The current selected item's icon" />
                    <p className="text-[12px]">{current.content}</p>
                </div>
            </Select.Trigger>

            <Select.Portal>
                <Select.Content position="popper" sideOffset={5}>
                    <Select.Viewport className="h-auto flex items-center justify-center flex-col bg-primaryBg border border-border rounded-md p-[10px]">
                        { options.map(o => {
                            return (
                                <Select.Item key={o.content} value={o.content} className="h-[35px] w-full px-[10px] flex items-center justify-start cursor-pointer hover:bg-hover rounded-sm" data-testid={o.content}>
                                    <img className="h-[15px] w-[15px] mr-[5px]" src={o.image} alt="An icon to support the option" />
                                    <p className="text-[12px]">{o.content}</p>
                                </Select.Item>
                            )
                        })}
                    </Select.Viewport>
                </Select.Content>
            </Select.Portal>
        </Select.Root>
    )
}