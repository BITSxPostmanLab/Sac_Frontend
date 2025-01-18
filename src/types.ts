export type ResourceType = {
  id: number;
  title: string;
  posts: {
    imageUrl: string;
    paragraphs: string[];
    resourceLink: string;
    linkText: string;
  }[];
};
