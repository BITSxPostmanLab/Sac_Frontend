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
  id: number;
  name: string;
  organization: string;
  start_date: string | null;
  end_date: string | null;
  prospective: boolean;
  domains: string;
  is_recurring: boolean;
  skillsets: string;
  created_at: string;
  updated_at: string;
};


export type ResearchIntern = 
  {
    id: number;
    timestamp: string | null;
    name: string;
    bits_id: string;
    domain_classification: string;
    type_of_internship_1: string | null;
    university_1: string;
    domain_1: string;
    intern_name_1: string;
    remote_or_onsite_1: string;
    start_end_date_1: string;
    cgpa_1: string;
    relevant_courses_1: string;
    research_experience_1: string;
    lor_requirement_1: string;
    funding_status_1: string;
    publication_status_1: string;
    type_of_internship_2: string | null;
    university_2: string | null;
    intern_name_2: string | null;
    domain_2: string | null;
    remote_or_onsite_2: string | null;
    start_end_date_2: string | null;
    cgpa_2: string | null;
    relevant_courses_2: string | null;
    research_experience_2: string | null;
    lor_requirement_2: string | null;
    funding_status_2: string | null;
    publication_status_2: string | null;
    academic_career_impact: string;
    contact_permission: string | null;
    additional_info: string | null;
    created_at: string;
    updated_at: string;
  }

