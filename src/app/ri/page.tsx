"use client"
import React, { useEffect, useMemo } from 'react'
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, GraduationCap, MapPin, Star, User } from "lucide-react"
import { ResearchIntern } from '@/types'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useState } from 'react'
import DomainFilterComponent from '@/components/database/DomainFilterComponent'
import InternshipFilterComponent from '@/components/ri/internship-filter'
const ResearchInternshipDatabase = () => {

  const [internshipData, setInternshipData] = useState<ResearchIntern[]>([])

  const { data } = useQuery<ResearchIntern[]>({
    queryKey: ['comp-database'],
    queryFn: async () => {
      const response = await axios.get('/api/researchdatabase')
      return response.data as ResearchIntern[]
    },
    staleTime: 1000*60*10,

  })

  const findInternships = () =>{
  
    const response = new Set();
    internshipData.forEach((datas)=>{
      response.add(datas.type_of_internship)
    })
    
    return Array.from(response).sort() as string[]
  }

 

  const listValues = useMemo(findInternships,[internshipData])

  useEffect(() => {
    if (data) {
      setInternshipData(data)
    }
  }, [data])

  const sortDomain = (value: "ASC" | "DCS") => {

    if (value === "ASC") {
      const sorted = [...internshipData].sort((a, b) =>
        a.primary_research_domain.localeCompare(b.primary_research_domain)
      )
      setInternshipData(sorted)
    } else {
      const sorted = [...internshipData].sort((a, b) =>
        b.primary_research_domain.localeCompare(a.primary_research_domain)
      )
      setInternshipData([...sorted])
    }
  }

  const sortTypeOfInternship = (value:string) => {
    const present = [...internshipData].filter((data)=>data.type_of_internship === value)
    const notPresent = [...internshipData].filter((data)=>data.type_of_internship !== value)
    setInternshipData([...present,...notPresent])
  }

  return (
    <div className='w-full min-h-screen flex justify-center text-sm'>
      <div className=" w-full max-w-[1780px]  h-full py-10 ">

        <div className="container mx-auto p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Research Internship Applications</h1>
            <p className="text-muted-foreground">Browse through {internshipData.length} internship applications</p>
          </div>

          <div className='flex gap-10 mb-8 font-semibold text-lg'>

            <div className='flex gap-5 items-center '>
              Filter Type of internship
              <InternshipFilterComponent sortField={sortTypeOfInternship} listValues={listValues} />
            </div>
            <div className='flex gap-5 items-center'>
              Filter Domain of Internship
              <DomainFilterComponent sortField={sortDomain} />
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
                      <span className="text-sm font-medium">{application.university_or_institute}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">{application.primary_research_domain}</span> 
                    </div>

                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      {application.start_end_date !== "nan" ? (<span className="text-sm">{application.start_end_date}</span>) : "-"}
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span className="text-sm font-medium">CGPA: {application.cgpa === "nan" ? "Not Mentioned" : application.cgpa}</span>
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