"use client"

import { useState, useEffect } from "react"
import type { CommentType } from "@/types"
import { Comment } from "./comment"
import { NewCommentForm } from "./new-comment-form"
import { buildCommentTree } from "@/utils/comment-utils"
import axios from 'axios';

interface CommentsSectionProps {

    postId: number
}

export function CommentsSection({ postId }: CommentsSectionProps) {
    const [change, setChanged] = useState<boolean>(false);
    const blogId = postId
    const [comments, setComments] = useState<CommentType[]>([])

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get("/api/getsingleblogpost", {
                    params: { blogId }
                });
                console.log("here is the reponse", response.data)
                setComments(response.data.comments.reverse() as CommentType[]);
            } catch (e) {
                console.log("There was some error", e);
            }
        };

        getData();
    }, [change, blogId]);

    const handleNewComment = async (content: string) => {
        setChanged(!change)
        // const newComment: CommentType = {
        //     id: Date.now(),
        //     name: "Anonymous",
        //     email: null,
        //     post: postId,
        //     content: content,
        //     parent: null,
        //     created_at: new Date().toISOString(),
        //     is_approved: true,
        // }

        // setComments((prevComments) => [newComment, ...prevComments])
        await axios.post("/api/postcomments", {
            commentData: {
                post: postId,
                content: content,
                parent: null
            }
        })
    }

    const handleReply = async (parentId: number, content: string) => {
        setChanged(!change)
        // const newComment: CommentType = {
        //     id: Date.now(), // This should be generated on the server in a real app
        //     name: "Anonymous",
        //     email: null,
        //     post: postId,
        //     content: content,
        //     parent: parentId,
        //     created_at: new Date().toISOString(),
        //     is_approved: true, // In a real app, this might be false until approved
        // }
        // setComments((prevComments) => [newComment, ...prevComments])
        await axios.post("/api/postcomments", {
            commentData: {
                post: postId,
                content: content,
                parent: parentId
            }
        })

    }

    const commentTree = buildCommentTree(comments)

    return (
        <div className="space-y-8">
            <h2 className="text-2xl font-bold">Comments ({comments.length})</h2>
            <NewCommentForm onSubmit={handleNewComment} />
            <div className="space-y-4">
                {commentTree.map((comment) => (
                    <Comment key={comment.id} comment={comment} onReply={handleReply} />
                ))}
            </div>
        </div>
    )
}

