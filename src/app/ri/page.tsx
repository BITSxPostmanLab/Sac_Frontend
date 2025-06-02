import React from 'react'
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, GraduationCap, MapPin, Star, User } from "lucide-react"
import { ResearchIntern } from '@/types'

const ResearchInternshipDatabase = () => {

  const internshipData: ResearchIntern[] = [
    {
      id: 1,
      timestamp: "2025-06-02T10:00:00Z", 
      name: "John Doe",
      bits_id: "2021A7PS1234G",
      type_of_internship: "Research",
      university_or_institute: "MIT",
      primary_research_domain: "Artificial Intelligence",
      research_program_name: "AI Summer Program",
      start_end_date: "2025-06-15 to 2025-08-15",
      cgpa: 8.91,
      prior_courses: "CS F111, CS F213, AI F301",
      prior_experience: "Built an ML classifier for image recognition",
      lors: 2,
      funding_status: "Funded",
      publication: "Published a paper on NLP in EMNLP 2024",
      application_perks: "Stipend, Accommodation, Travel allowance",
      research_experience: "Worked in NLP lab for 6 months",
      contact_permission: true,
      contact_details: "johndoe@example.com",
      anything_else: "Looking forward to this internship! Passionate about AI research.",
      type_of_internship_1: "Remote",
      university_or_institute_1: "Stanford",
      research_program_name_1: "Deep Learning Bootcamp",
      primary_research_domain_1: "Computer Vision",
      remote_onsite_1: "Remote",
      start_end_date_1: "2024-12-01 to 2025-01-15",
      cgpa_1: 9.02,
      prior_courses_1: "DL F301, CV F302",
      prior_experience_1: "Interned at OpenAI",
      lors_1: 1,
      funding_status_1: "Unfunded",
      publication_1: "Conference presentation at ICML",
      research_experience_1: "GANs and image generation",
      created_at: "2025-06-01T14:30:00Z",
      updated_at: "2025-06-02T09:45:00Z"
    },{
      id: 1,
      timestamp: "2025-06-02T10:00:00Z", 
      name: "John Doe",
      bits_id: "2021A7PS1234G",
      type_of_internship: "Research",
      university_or_institute: "MIT",
      primary_research_domain: "Artificial Intelligence",
      research_program_name: "AI Summer Program",
      start_end_date: "2025-06-15 to 2025-08-15",
      cgpa: 8.91,
      prior_courses: "CS F111, CS F213, AI F301",
      prior_experience: "Built an ML classifier for image recognition",
      lors: 2,
      funding_status: "Funded",
      publication: "Published a paper on NLP in EMNLP 2024",
      application_perks: "Stipend, Accommodation, Travel allowance",
      research_experience: "Worked in NLP lab for 6 months",
      contact_permission: true,
      contact_details: "johndoe@example.com",
      anything_else: "Looking forward to this internship! Passionate about AI research.",
      type_of_internship_1: "Remote",
      university_or_institute_1: "Stanford",
      research_program_name_1: "Deep Learning Bootcamp",
      primary_research_domain_1: "Computer Vision",
      remote_onsite_1: "Remote",
      start_end_date_1: "2024-12-01 to 2025-01-15",
      cgpa_1: 9.02,
      prior_courses_1: "DL F301, CV F302",
      prior_experience_1: "Interned at OpenAI",
      lors_1: 1,
      funding_status_1: "Unfunded",
      publication_1: "Conference presentation at ICML",
      research_experience_1: "GANs and image generation",
      created_at: "2025-06-01T14:30:00Z",
      updated_at: "2025-06-02T09:45:00Z"
    },{
      id: 1,
      timestamp: "2025-06-02T10:00:00Z", 
      name: "John Doe",
      bits_id: "2021A7PS1234G",
      type_of_internship: "Research",
      university_or_institute: "MIT",
      primary_research_domain: "Artificial Intelligence",
      research_program_name: "AI Summer Program",
      start_end_date: "2025-06-15 to 2025-08-15",
      cgpa: 8.91,
      prior_courses: "CS F111, CS F213, AI F301",
      prior_experience: "Built an ML classifier for image recognition",
      lors: 2,
      funding_status: "Funded",
      publication: "Published a paper on NLP in EMNLP 2024",
      application_perks: "Stipend, Accommodation, Travel allowance",
      research_experience: "Worked in NLP lab for 6 months",
      contact_permission: true,
      contact_details: "johndoe@example.com",
      anything_else: "Looking forward to this internship! Passionate about AI research.",
      type_of_internship_1: "Remote",
      university_or_institute_1: "Stanford",
      research_program_name_1: "Deep Learning Bootcamp",
      primary_research_domain_1: "Computer Vision",
      remote_onsite_1: "Remote",
      start_end_date_1: "2024-12-01 to 2025-01-15",
      cgpa_1: 9.02,
      prior_courses_1: "DL F301, CV F302",
      prior_experience_1: "Interned at OpenAI",
      lors_1: 1,
      funding_status_1: "Unfunded",
      publication_1: "Conference presentation at ICML",
      research_experience_1: "GANs and image generation",
      created_at: "2025-06-01T14:30:00Z",
      updated_at: "2025-06-02T09:45:00Z"
    },{
      id: 1,
      timestamp: "2025-06-02T10:00:00Z", 
      name: "John Doe",
      bits_id: "2021A7PS1234G",
      type_of_internship: "Research",
      university_or_institute: "MIT",
      primary_research_domain: "Artificial Intelligence",
      research_program_name: "AI Summer Program",
      start_end_date: "2025-06-15 to 2025-08-15",
      cgpa: 8.91,
      prior_courses: "CS F111, CS F213, AI F301",
      prior_experience: "Built an ML classifier for image recognition",
      lors: 2,
      funding_status: "Funded",
      publication: "Published a paper on NLP in EMNLP 2024",
      application_perks: "Stipend, Accommodation, Travel allowance",
      research_experience: "Worked in NLP lab for 6 months",
      contact_permission: true,
      contact_details: "johndoe@example.com",
      anything_else: "Looking forward to this internship! Passionate about AI research.",
      type_of_internship_1: "Remote",
      university_or_institute_1: "Stanford",
      research_program_name_1: "Deep Learning Bootcamp",
      primary_research_domain_1: "Computer Vision",
      remote_onsite_1: "Remote",
      start_end_date_1: "2024-12-01 to 2025-01-15",
      cgpa_1: 9.02,
      prior_courses_1: "DL F301, CV F302",
      prior_experience_1: "Interned at OpenAI",
      lors_1: 1,
      funding_status_1: "Unfunded",
      publication_1: "Conference presentation at ICML",
      research_experience_1: "GANs and image generation",
      created_at: "2025-06-01T14:30:00Z",
      updated_at: "2025-06-02T09:45:00Z"
    },  {
      id: 2,
      timestamp: "2025-06-02T10:00:00Z",
      name: "Alice Smith",
      bits_id: "2020A7PS9400G",
      type_of_internship: "Research",
      university_or_institute: "Tsinghua University",
      primary_research_domain: "Artificial Intelligence",
      research_program_name: "Data Science Fellowship",
      start_end_date: "2025-06-15 to 2025-08-15",
      cgpa: 7.79,
      prior_courses: "DL F301, CV F302",
      prior_experience: "Interned at a startup",
      lors: 2,
      funding_status: "Partially Funded",
      publication: "Journal article in DEF",
      application_perks: "Stipend",
      research_experience: "Worked in lab for 6 months",
      contact_permission: true,
      contact_details: "alice.smith@outlook.com",
      anything_else: "Excited to explore this opportunity!",
      type_of_internship_1: "Remote",
      university_or_institute_1: "Cambridge",
      research_program_name_1: "Bioinformatics Research",
      primary_research_domain_1: "Quantum Computing",
      remote_onsite_1: "Remote",
      start_end_date_1: "2024-12-01 to 2025-01-15",
      cgpa_1: 8.91,
      prior_courses_1: "BIO F211, CHEM F201",
      prior_experience_1: "Interned at a startup",
      lors_1: 2,
      funding_status_1: "Partially Funded",
      publication_1: "Published a paper on XYZ",
      research_experience_1: "Research assistant for a professor",
      created_at: "2025-06-01T14:30:00Z",
      updated_at: "2025-06-02T09:45:00Z"
    }
  ];
    
  return (
    <div className='w-full min-h-screen flex justify-center text-sm'>
      <div className=" w-full max-w-[1780px]  h-full py-10 ">
   
      <div className="container mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Research Internship Applications</h1>
        <p className="text-muted-foreground">Browse through {internshipData.length} internship applications</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {internshipData.map((application) => (
          <Link key={application.id} href={`/ri/${application.id}`}>
            <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <User className="w-5 h-5 text-muted-foreground" />
                    <CardTitle className="text-lg">{application.name}</CardTitle>
                  </div>
                  <Badge
                    variant={application.funding_status === "Funded" ? "default" : "secondary"}
                    className="text-xs"
                  >
                    {application.funding_status}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{application.bits_id}</p>
              </CardHeader>

              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium">{application.university_or_institute}</span>
                </div>

                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">{application.primary_research_domain}</span>
                </div>

                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">{application.start_end_date}</span>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm font-medium">CGPA: {application.cgpa}</span>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {application.type_of_internship}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>

      </div>
    </div>
  )
}

export default ResearchInternshipDatabase