"use client"
import CompetitionDatabaseEntries from '@/components/database/CompetitionDatabaseEntries'
import { ProgramData } from '@/types'
import React, { useEffect, useMemo, useState } from 'react'
import { ALargeSmall, Divide } from 'lucide-react';
import { AlignLeft } from 'lucide-react';
import { Calendar } from 'lucide-react';
import { CircleChevronDown } from 'lucide-react';
import DomainFilterComponent from '@/components/database/DomainFilterComponent';
import YesNoFilter from '@/components/database/YesNoFilter';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
const title = [
  "Program",
  "Org",
  "Start",
  "End",
  "Internship",
  "Domain",
  "Recurring",
  "Skills"
]

const iconClass = 'text-neutral-600 h-4 w-4'

const CompetitionDatabasePage = () => {
  const [fieldData, setFieldData] = useState<ProgramData[]>([])


  // fetch thee api data 
  const { data } = useQuery<ProgramData[]>({
    queryKey: ['comp-database'],
    queryFn: async () => {
      const response = await axios.get('/api/database')
      return response.data as ProgramData[]
    },
    staleTime:1000*60*10,
   
  })

  useEffect(() => {
    if (data) {
      setFieldData(data)
    }
  }, [data])
  



  //recurring sort
  const sortRecurring = (value: "Yes" | "No") => {
 
    const sorted = [...fieldData].sort((a, b) =>
      value === "Yes"
        ? Number(b.is_recurring) - Number(a.is_recurring) // descending: true first
        : Number(a.is_recurring) - Number(b.is_recurring) // ascending: false first
    );
    setFieldData(sorted);
  };
  
  //sort internship

  const sortInternship = (value: "Yes" | "No") => {
    const sorted = [...fieldData].sort((a, b) =>
      value === "Yes"
        ? Number(b.prospective) - Number(a.prospective)
        : Number(a.prospective) - Number(b.prospective)
    );
    setFieldData(sorted);
  };
  //domain

  const sortDomain = (value: "ASC" | "DCS") => {
    const nonEmptyDomains = fieldData.filter((data)=>data.domains !== "")
    const emptyDomains = fieldData.filter((data)=>data.domains === "")
    if (value === "ASC") {
      const sorted = [...nonEmptyDomains].sort((a, b) =>
        a.domains.localeCompare(b.domains)
      )
      setFieldData([...sorted,...emptyDomains])
    } else {
      const sorted = [...nonEmptyDomains].sort((a, b) =>
        b.domains.localeCompare(a.domains)
      )
      setFieldData([...sorted,...emptyDomains])
    }
  }

  const labels = [
    {
      text: 'Name of the program',
      className: 'col-span-2',
      icon: <ALargeSmall className={iconClass} />,
    },
    {
      text: 'Organisation(s)',
      className: '',
      icon: <AlignLeft className={iconClass} />,
    },
    {
      text: 'Start Date',
      className: '',
      icon: <Calendar className={iconClass} />,
    },
    {
      text: 'End Date',
      className: '',
      icon: <Calendar className={iconClass} />,
    },
    {
      text: 'Prospective Internship?',
      className: '',
      icon: <CircleChevronDown className={iconClass} />,
      domain: <YesNoFilter sortField={sortInternship} />
    },
    {
      text: 'Domains',
      className: '',
      icon: <CircleChevronDown className={iconClass} />,
      domain: <DomainFilterComponent sortField={sortDomain} />
    },
    {
      text: 'Recurring?',
      className: '',
      icon: <CircleChevronDown className={iconClass} />,
      domain: <YesNoFilter sortField={sortRecurring} />
    },
    {
      text: 'Attainable Skillsets',
      className: 'col-span-2',
      icon: <AlignLeft className={iconClass} />,
    },
  ];


  return (
    <div className='w-full min-h-screen flex justify-center text-sm'>
      <div className=" w-full max-w-[1780px]  h-full py-10 ">

        <div className='grid grid-cols-10 w-full'>

          {
            labels.map((label, ind) => {
              return (
                <div key={ind} className={`border-[1px] border-solid border-slate-300 px-2 flex gap-3 py-1 items-center ${label.className}`}>
                  {label.icon}{label.text}
                  {label.domain ? (
                    <div className='ml-auto' >
                      {label.domain}
                    </div>
                  ) : ""}
                </div>
              )
            })
          }
        </div>


        {
          fieldData.map((data, ind) => {
            return (
              <CompetitionDatabaseEntries key={ind} dataset={data} />
            )
          })
        }





      </div>
    </div>
  )
}

export default CompetitionDatabasePage