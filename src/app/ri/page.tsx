"use client"

import React, { useEffect, useMemo, useState } from 'react'
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, GraduationCap, MapPin, Star, User } from "lucide-react"
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import DomainFilterComponent from '@/components/database/DomainFilterComponent'
import InternshipFilterComponent from '@/components/ri/internship-filter'
import { APIResearchIntern, ResearchIntern } from '@/types'

const ResearchInternshipDatabase = () => {
  const [internshipData, setInternshipData] = useState<ResearchIntern[]>([])


  const { data } = useQuery<APIResearchIntern[]>({
    queryKey: ['comp-database'],
    queryFn: async () => {
      const response = await axios.get('/api/researchdatabase')
      return response.data as APIResearchIntern[]
    },
    staleTime: 0,
  })

  // Convert domain string to array
  const convertAPIToResearchIntern = (apiData: APIResearchIntern[]): ResearchIntern[] => {
    return apiData.map((item) => ({
      ...item,
      domain_classification: item.domain_classification
        .split(/,(?=(?:[^"]*"[^"]*")*[^"]*$)/)
        .map(domain => domain.replace(/^"|"$/g, "").trim()),
    }))
  }

  useEffect(() => {
    if (data) {
      setInternshipData(convertAPIToResearchIntern(data))
    }
  }, [data])

  const findInternships = () => {
    const response = new Set<string>()
    internshipData.forEach((item) => {
      if (item.type_of_internship_1) response.add(item.type_of_internship_1)
    })
    return Array.from(response).sort()
  }

  const findDomains = () => {
    const domainSet = new Set<string>()
    internshipData.forEach((data) => {
      data.domain_classification.forEach((domain) => domainSet.add(domain))
    })
    return Array.from(domainSet).sort()
  }

  const listValues = useMemo(findInternships, [internshipData])
  const domainList = useMemo(findDomains, [internshipData])
  

  const filterByDomain = (domain: string) => {
    const present = internshipData.filter((item) =>
      item.domain_classification.includes(domain)
    )
    const notPresent = internshipData.filter((item) =>
      !item.domain_classification.includes(domain)
    )
    setInternshipData([...present, ...notPresent])
  }
  

  const sortTypeOfInternship = (value: string) => {
    const matched = internshipData.filter((item) => item.type_of_internship_1 === value)
    const unmatched = internshipData.filter((item) => item.type_of_internship_1 !== value)
    setInternshipData([...matched, ...unmatched])
  }

  return (
    <div className='w-full min-h-screen flex justify-center text-sm'>
      <div className="w-full max-w-[1780px] h-full py-10">
        <div className="container mx-auto p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Research Internship Applications</h1>
            <p className="text-muted-foreground">Browse through {internshipData.length} internship applications</p>
          </div>

          <div className=' gap-10 mb-8 font-semibold text-lg  items-center md:flex space-y-6 md:space-y-0'>
            <div className='flex gap-5 items-center'>
              Filter Type of internship
              <InternshipFilterComponent sortField={sortTypeOfInternship} listValues={listValues} />
            </div>
            <div className='flex gap-5 items-center'>
              Filter Domain of Internship
              <DomainFilterComponent sortField={filterByDomain} listValues={domainList} />

            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {internshipData.map((application: ResearchIntern) => (
              <Link key={application.id} href={`/ri/${application.id}`}>
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <User className="w-5 h-5 text-muted-foreground" />
                        <CardTitle className="text-lg">{application.name}</CardTitle>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{application.bits_id}</p>
                  </CardHeader>

                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm font-medium">{application.university_1}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">
                        {application.domain_classification.join(", ")}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      {application.start_end_date_1 !== "nan" ? (
                        <span className="text-sm">{application.start_end_date_1}</span>
                      ) : "-"}
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span className="text-sm font-medium">
                          CGPA: {application.cgpa_1 === "nan" ? "Not Mentioned" : application.cgpa_1}
                        </span>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {application.type_of_internship_1}
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
