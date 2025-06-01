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

export type EventType = {
  id: number;
  title: string;
  description: string;
  url2: string;
  image: string;
  date: string; // ISO 8601 format
  created_at: string; // ISO 8601 format
  updated_at: string; // ISO 8601 format
  is_visible: boolean;
  is_research: boolean;
  is_SI: boolean;
  is_Academic: boolean;
  is_PS: boolean;
  is_Quant: boolean;
  is_offCampus: boolean;
  is_placement: boolean;
  is_thesis: boolean;
  is_coldMailing: boolean;
};

export type Resources = {
  link: string;
  name: "Youtube" | "Drive";
};

export type ProgramData = {
  program: string;
  org: string;
  start: string;
  end: string;
  internship: string;
  domain: string;
  recurring: string;
  skills: string;
};
