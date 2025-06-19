import { ResearchIntern } from "@/types"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  ArrowLeft,
  Calendar,
  GraduationCap,
  MapPin,
  Star,
  User,
  Mail,
  BookOpen,
  Award,
  DollarSign,
  FileText,
  Briefcase,
} from "lucide-react"

const getIntern = async (id: string): Promise<ResearchIntern | null> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/researchdatabase`, {
    cache: "no-store",
  })

  if (!res.ok) return null

  const all: ResearchIntern[] = await res.json()
  return all.find((entry) => entry.id === parseInt(id)) || null
}
type Params = Promise<{ id: string }>;
export default async function IndividualResearchInternPage({ params }: { params: Params } ) {
  const {id} = await params
  const application = await getIntern(id)

  if (!application) return notFound()

  return (
    <div className="w-full min-h-screen flex justify-center text-sm">
      <div className="w-full max-w-[1780px] h-full py-10">
        <div className="mx-auto p-6">
          <div className="mb-6">
            <Link href="/ri">
              <Button variant="ghost" className="mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Applications
              </Button>
            </Link>

            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-2">{formatValue(application.name)}</h1>
                <p className="text-muted-foreground">{formatValue(application.bits_id)}</p>
              </div>
             
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Info */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Briefcase className="w-5 h-5" />
                    Primary Internship Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InfoBlock icon={<MapPin />} label="University/Institute" value={application.university_or_institute} />
                    <InfoBlock icon={<GraduationCap />} label="Research Domain" value={application.primary_research_domain} />
                    <InfoBlock icon={<Calendar />} label="Duration" value={application.start_end_date} />
                    <InfoBlock icon={<Star className="text-yellow-500" />} label="CGPA" value={application.cgpa} />
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Research Program</p>
                    <p className="font-medium">{formatValue(application.research_program_name)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Contact Permission</p>
                    <p className="font-medium">{formatValue(application.contact_details)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Type of Internship</p>
                    <p className="font-medium">{formatValue(application.type_of_internship)}</p>
                  </div>

                
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5" />
                    Academic Background
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Paragraph label="Prior Relevant Courses/Electives taken at BITS or online which were helpful. How it helped?" text={application.prior_courses} />
                  <Paragraph label="Prior Relevant Research Experience(PS 1/On-campus research/GSoC/Others)" text={application.prior_experience} />
                  <Paragraph label="Research Experience" text={formatValue(application.research_experience)} />
                  <Paragraph label="For the application process did you require LORs? If yes , how many and from whom" text={application.lors} />
                  <Paragraph label="What is the funding status of your RI/Thesis? If it was funded, what was the amount, and were any other perks provided (e.g., travel grant, on-campus housing)?" text={application.funding_status === null ? "-" :application.funding_status}/>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    Publications & Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Paragraph label="Did the research work lead to a publication? If yes, specify the name of the journal/conference and your role (author or co-author)." text={application.publication} />
                  <Paragraph label="Application Perks" text={application.application_perks} />
                </CardContent>
              </Card>

              {application.anything_else?.toLowerCase() !== "nan" && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="w-5 h-5" />
                      Additional Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{formatValue(application.anything_else)}</p>
                  </CardContent>
                </Card>
              )}
            </div>
         {
          application.type_of_internship_2 === "nan" ? "" : (
               
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Briefcase className="w-5 h-5" />
                    Secondary Internship Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InfoBlock icon={<MapPin />} label="University/Institute" value={application.university_or_institute_1} />
                    <InfoBlock icon={<GraduationCap />} label="Research Domain" value={application.primary_research_domain_1} />
                    <InfoBlock icon={<Calendar />} label="Duration" value={application.start_end_date_1} />
                    <InfoBlock icon={<Star className="text-yellow-500" />} label="CGPA" value={application.cgpa_1} />
                    <InfoBlock icon={<MapPin />} label="Remote/Onsite" value={application.remote_onsite_1} />
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Research Program</p>
                    <p className="font-medium">{formatValue(application.research_program_name_1)}</p>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Type of Internship</p>
                    <p className="font-medium">{formatValue(application.type_of_internship_1)}</p>
                  </div>

                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5" />
                    Academic Background
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Paragraph label="Prior Relevant Courses/Electives taken at BITS or online which were helpful. How it helped?" text={application.prior_courses_1} />
                  <Paragraph label="Prior Relevant Research Experience(PS 1/On-campus research/GSoC/Others)" text={application.prior_experience_1} />
                  <Paragraph label="Research Experience" text={application.research_experience_1 === null ? "-":application.research_experience_1} />
                  <Paragraph label="For the application process did you require LORs? If yes , how many and from whom" text={application.lors_1} />
                  <Paragraph label="What is the funding status of your RI/Thesis? If it was funded, what was the amount, and were any other perks provided (e.g., travel grant, on-campus housing)?" text={application.funding_status_1 === null ? "-" :application.funding_status_1}/>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    Publications & Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Paragraph label="Did the research work lead to a publication? If yes, specify the name of the journal/conference and your role (author or co-author)." text={application.publication_1 === null ? "-" : application.publication_1} />
                  
                </CardContent>
              </Card>

            </div>
          )
         }

       
          </div>
        </div>
      </div>
    </div>
  )
}

const InfoBlock = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div className="flex items-center gap-2">
    {icon}
    <div>
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="font-medium">{formatValue(value)}</p>
    </div>
  </div>
)

const Paragraph = ({ label, text }: { label: string; text: string }) => (
  <div>
    <p className="text-sm text-muted-foreground mb-1">{label}</p>
    <p className="font-medium">{formatValue(text)}</p>
  </div>
)

const formatValue = (value: string) => {
  return value?.toLowerCase() === "nan" || value?.trim() === "" ? "-" : value
}
