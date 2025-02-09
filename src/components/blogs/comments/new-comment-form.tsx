"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"


interface NewCommentFormProps {
    onSubmit: (content: string) => void
}

export function NewCommentForm({ onSubmit }: NewCommentFormProps) {

    const [content, setContent] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (content.trim()) {
            onSubmit(content)
            setContent("")
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">

            <Textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write your comment..."
                className="w-full"
                required
            />
            <div className="flex justify-end">
                <Button type="submit" disabled={!content.trim()}>
                    Submit Comment
                </Button>
            </div>
        </form>
    )
}

