import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

interface ReplyFormProps {
    onSubmit: (content: string) => void
    onCancel: () => void
}

export function ReplyForm({ onSubmit, onCancel }: ReplyFormProps) {
    const [content, setContent] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (content.trim()) {
            onSubmit(content)
            setContent("")
        }
    }

    return (
        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
            <Textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write your reply..."
                className="w-full"
            />
            <div className="flex justify-end space-x-2">
                <Button type="button" variant="outline" onClick={onCancel}>
                    Cancel
                </Button>
                <Button type="submit" disabled={!content.trim()}>
                    Submit Reply
                </Button>
            </div>
        </form>
    )
}

