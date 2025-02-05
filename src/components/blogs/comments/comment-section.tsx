import { useState } from "react"
import type { CommentType } from "@/types"
import { Comment } from "@/components/blogs/comments/comment"
import { buildCommentTree } from "@/utils/comment-utils"

interface CommentsSectionProps {
    initialComments: CommentType[]
}

export function CommentsSection({ initialComments }: CommentsSectionProps) {
    const [comments, setComments] = useState(initialComments)

    const handleReply = (parentId: number, content: string) => {
        const newComment: CommentType = {
            id: Date.now(), // This should be generated on the server in a real app
            name: "Current User", // This should be the logged-in user's name
            email: "user@example.com", // This should be the logged-in user's email
            post: comments[0].post, // Assuming all comments are for the same post
            content: content,
            parent: parentId,
            created_at: new Date().toISOString(),
            is_approved: true, // In a real app, this might be false until approved
        }

        setComments((prevComments) => [...prevComments, newComment])
    }

    const commentTree = buildCommentTree(comments)

    return (
        <div className="space-y-4 p-10">
            <h2 className="text-2xl font-bold">Comments ({comments.length})</h2>
            <div className="space-y-4">
                {commentTree.map((comment: CommentType) => (
                    <Comment key={comment.id} comment={comment} onReply={handleReply} />
                ))}
            </div>
        </div>
    )
}

