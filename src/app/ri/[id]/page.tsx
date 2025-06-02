import React from 'react'
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

const IndividualResearchInternPage = ({ params }: { params: { id: string } }) => {
    const application = {
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
    return (
        <div className='w-full min-h-screen flex justify-center text-sm'>
            <div className=" w-full max-w-[1780px]  h-full py-10 ">
                <div className=" mx-auto p-6 ">
                    <div className="mb-6">
                        <Link href="/ri">
                            <Button variant="ghost" className="mb-4">
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                Back to Applications
                            </Button>
                        </Link>

                        <div className="flex items-start justify-between">
                            <div>
                                <h1 className="text-3xl font-bold mb-2">{application.name}</h1>
                                <p className="text-muted-foreground">{application.bits_id}</p>
                            </div>
                            <Badge variant={application.funding_status === "Funded" ? "default" : "secondary"} className="text-sm">
                                {application.funding_status}
                            </Badge>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Main Information */}
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
                                        <div className="flex items-center gap-2">
                                            <MapPin className="w-4 h-4 text-muted-foreground" />
                                            <div>
                                                <p className="text-sm text-muted-foreground">University/Institute</p>
                                                <p className="font-medium">{application.university_or_institute}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <GraduationCap className="w-4 h-4 text-muted-foreground" />
                                            <div>
                                                <p className="text-sm text-muted-foreground">Research Domain</p>
                                                <p className="font-medium">{application.primary_research_domain}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <Calendar className="w-4 h-4 text-muted-foreground" />
                                            <div>
                                                <p className="text-sm text-muted-foreground">Duration</p>
                                                <p className="font-medium">{application.start_end_date}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <Star className="w-4 h-4 text-yellow-500" />
                                            <div>
                                                <p className="text-sm text-muted-foreground">CGPA</p>
                                                <p className="font-medium">{application.cgpa}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <p className="text-sm text-muted-foreground mb-1">Research Program</p>
                                        <p className="font-medium">{application.research_program_name}</p>
                                    </div>

                                    <div className="flex gap-2">
                                        <Badge variant="outline">{application.type_of_internship}</Badge>
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
                                    <div>
                                        <p className="text-sm text-muted-foreground mb-1">Prior Courses</p>
                                        <p>{application.prior_courses}</p>
                                    </div>

                                    <div>
                                        <p className="text-sm text-muted-foreground mb-1">Prior Experience</p>
                                        <p>{application.prior_experience}</p>
                                    </div>

                                    <div>
                                        <p className="text-sm text-muted-foreground mb-1">Research Experience</p>
                                        <p>{application.research_experience}</p>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <div>
                                            <p className="text-sm text-muted-foreground">Letters of Recommendation</p>
                                            <p className="font-medium">{application.lors}</p>
                                        </div>
                                    </div>
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
                                    <div>
                                        <p className="text-sm text-muted-foreground mb-1">Publications</p>
                                        <p>{application.publication}</p>
                                    </div>
                                </CardContent>
                            </Card>

                            {application.anything_else && (
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            <FileText className="w-5 h-5" />
                                            Additional Information
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p>{application.anything_else}</p>
                                    </CardContent>
                                </Card>
                            )}
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <User className="w-5 h-5" />
                                        Contact Information
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    {application.contact_permission ? (
                                        <div className="flex items-center gap-2">
                                            <Mail className="w-4 h-4 text-muted-foreground" />
                                            <a href={`mailto:${application.contact_details}`} className="text-blue-600 hover:underline">
                                                {application.contact_details}
                                            </a>
                                        </div>
                                    ) : (
                                        <p className="text-muted-foreground">Contact permission not granted</p>
                                    )}
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <DollarSign className="w-5 h-5" />
                                        Application Perks
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm">{application.application_perks}</p>
                                </CardContent>
                            </Card>

                            {/* Secondary Internship (if exists) */}
                            {application.university_or_institute_1 && (
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-sm">Secondary Application</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-2">
                                        <div>
                                            <p className="text-xs text-muted-foreground">University</p>
                                            <p className="text-sm font-medium">{application.university_or_institute_1}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-muted-foreground">Domain</p>
                                            <p className="text-sm">{application.primary_research_domain_1}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-muted-foreground">Duration</p>
                                            <p className="text-sm">{application.start_end_date_1}</p>
                                        </div>
                                        <Badge variant="outline" className="text-xs">
                                            {application.funding_status_1}
                                        </Badge>
                                    </CardContent>
                                </Card>
                            )}

                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-sm">Application Timeline</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    <div>
                                        <p className="text-xs text-muted-foreground">Created</p>
                                        <p className="text-sm">{new Date(application.created_at || "").toLocaleDateString()}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-muted-foreground">Last Updated</p>
                                        <p className="text-sm">{new Date(application.updated_at || "").toLocaleDateString()}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IndividualResearchInternPage