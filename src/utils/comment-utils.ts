import type { CommentType } from "../types";

export function buildCommentTree(comments: CommentType[]) {
  const commentMap = new Map<
    number,
    CommentType & { replies?: CommentType[] }
  >();
  const roots: (CommentType & { replies?: CommentType[] })[] = [];

  // First pass: Create map of all comments
  comments.forEach((comment) => {
    commentMap.set(comment.id, { ...comment, replies: [] });
  });

  // Second pass: Build the tree
  comments.forEach((comment) => {
    const commentWithReplies = commentMap.get(comment.id)!;
    if (comment.parent === null) {
      roots.push(commentWithReplies);
    } else {
      const parentComment = commentMap.get(comment.parent);
      if (parentComment) {
        parentComment.replies = parentComment.replies || [];
        parentComment.replies.push(commentWithReplies);
      }
    }
  });

  return roots;
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

//test chnage docker file
