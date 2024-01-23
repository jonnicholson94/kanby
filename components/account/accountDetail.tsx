
type Props = {
    property: "Email"
    value: string
}

export default function AccountDetail({ property, value }: Props) {
    return (
        <div className="h-auto xs:w-[95%] md:w-[500px] flex xs:flex-col md:flex-row xs:items-start md:items-center justify-center">
            <p className="flex-grow text-[16px] text-secondaryFont">{property}</p>
            <p className="flex-grow text-[16px]">{value}</p>
        </div>
    )
}