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

export type ResearchIntern = {
  id: number;
  timestamp: string;
  name: string;
  bits_id: string;
  type_of_internship: string;
  university_or_institute: string;
  primary_research_domain: string;
  research_program_name: string;
  start_end_date: string;
  cgpa: number;
  prior_courses: string;
  prior_experience: string;
  lors: number;
  funding_status: string;
  publication: string;
  application_perks: string;
  research_experience: string;
  contact_permission: boolean;
  contact_details: string;
  anything_else: string;
  type_of_internship_1: string;
  university_or_institute_1: string;
  research_program_name_1: string;
  primary_research_domain_1: string;
  remote_onsite_1: string;
  start_end_date_1: string;
  cgpa_1: number;
  prior_courses_1: string;
  prior_experience_1: string;
  lors_1: number;
  funding_status_1: string;
  publication_1: string;
  research_experience_1: string;
  created_at: string;
  updated_at: string;
};
