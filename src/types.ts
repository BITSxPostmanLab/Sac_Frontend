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
