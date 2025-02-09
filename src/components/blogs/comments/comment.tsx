"use client"

import { useState } from "react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { CommentType } from "@/types"
import { formatDate } from "@/utils/comment-utils"
import { ReplyForm } from "./reply-form"

interface CommentProps {
    comment: CommentType & { replies?: CommentType[] }
    level?: number
    onReply: (parentId: number, content: string) => void
}

export function Comment({ comment, level = 0, onReply }: CommentProps) {
    const [isReplying, setIsReplying] = useState(false)

    const handleReply = (content: string) => {
        onReply(comment.id, content)
        setIsReplying(false)
    }

    return (
        <div className={`${level > 0 ? "ml-10 mt-4" : "mt-4"}`}>
            <Card className="bg-white">
                <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                        <Avatar>
                            <AvatarFallback>
                                {comment.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")
                                    .toUpperCase()}
                            </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                            <div className="flex items-center justify-between">
                                <div className="font-semibold">{comment.name}</div>
                                <time className="text-sm text-muted-foreground">{formatDate(comment.created_at)}</time>
                            </div>
                            <p className="mt-2 text-sm text-gray-700">{comment.content}</p>
                            <div className="mt-2">
                                <Button variant="ghost" size="sm" onClick={() => setIsReplying(!isReplying)}>
                                    Reply
                                </Button>
                            </div>
                            {isReplying && <ReplyForm onSubmit={handleReply} onCancel={() => setIsReplying(false)} />}
                        </div>
                    </div>
                </CardContent>
            </Card>
            {comment.replies?.map((reply) => (
                <Comment key={reply.id} comment={reply} level={level + 1} onReply={onReply} />
            ))}
        </div>
    )
}

