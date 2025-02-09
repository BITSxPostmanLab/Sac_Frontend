export type ResourceType = {
  id: number;
  title: string;
  posts: {
    postId: number;
    imageUrl: string;
    paragraphs: string[];
    resourceLink: string;
    linkText: string;
  }[];
};

export type CommentType = {
  id: number;
  name: string;
  email: string | null;
  post: number;
  content: string;
  parent: number | null;
  created_at: string;
  is_approved: boolean;
};

export type BlogPostType = {
  id: number;
  title: string;
  content: string;
  image: string;
  created_at: string;
  updated_at: string;
  display_author_name: string;
  comments_enabled: boolean;
  comments: CommentType[] | null;
};
