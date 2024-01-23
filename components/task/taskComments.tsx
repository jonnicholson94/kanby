
import { api } from "@/lib/api"
import { IComment } from "@/lib/types/task"
import { useState } from "react"
import { v4 as uuid } from "uuid"
import { toast } from "sonner"
import moment from "moment"

type Props = {
    id: string 
    comments: string | null
}

export default function TaskComments({ id, comments }: Props) {

    const [commentsList, setCommentsList] = useState<IComment[]>(comments ? JSON.parse(comments) : [])
    const [newComment, setNewComment] = useState("")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const builtComment: IComment = {
            id: uuid(),
            content: newComment,
            timestamp: String(new Date())
        }

        const originalState = [...commentsList]
        const copiedState = [...commentsList, builtComment]

        setCommentsList(copiedState)

        const { data, error } = await api.updateComments(id, copiedState)

        if (error) {
            toast.error(error)
            setCommentsList(originalState)
            return 
        }
        
        setNewComment("")

    }

    return (
        <div className="h-auto w-full flex items-center justify-center flex-col">
            <h2 className="text-[20px] font-bold w-full mb-[15px]">Comments</h2>
            { commentsList && commentsList.map(c => {
                return (
                    <div key={c.id} className="h-auto w-full p-[15px] border border-border flex items-start justify-center flex-col mb-[15px] rounded-sm">
                        <p className="text-[12px] text-secondaryFont mb-[5px]">{moment(c.timestamp).fromNow()}</p>
                        <h2>{c.content}</h2>
                    </div>
                )
            })}
            <form className="h-auto w-full flex items-end justify-center flex-col" onSubmit={handleSubmit}>
                <textarea className="h-[100px] w-full border border-border rounded-sm p-[15px] text-[14px] placeholder:text-placeholder" value={newComment} onChange={(e) => setNewComment(e.target.value)} placeholder="Enter a comment" />
                <button className="h-[35px] px-[20px] bg-primaryCta text-ctaText font-bold rounded-sm mt-[15px] text-[14px]" type="submit">Save</button>
            </form>
        </div>
    )
}