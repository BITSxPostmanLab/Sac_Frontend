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
import InternshipFilterComponent from '@/components/ri/internship-filter';
import { cn } from '@/lib/utils';
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
  const [width, setWidth] = useState<number>(1780)
  const { data } = useQuery<ProgramData[]>({
    queryKey: ['comp-database'],
    queryFn: async () => {
      const response = await axios.get('/api/database')
      return response.data.reverse() as ProgramData[]
    },
    staleTime: 1000,

  })

  useEffect(() => {
    if (data) {
      setFieldData(data)
    }
  }, [data])


  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      setWidth(width)
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize)
  }, [])



  const findInternships = () => {

    const response = new Set();
    fieldData.forEach((data) => {
      if(data.domains !== ""){
        response.add(data.domains)
      }
    
    })

    return Array.from(response).sort() as string[]
  }



  const listValues = useMemo(findInternships, [fieldData])


  // fetch thee api data 
  




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

  const sortDomain = (value: string) => {
    const present = [...fieldData].filter((data) => data.domains === value)
    const notPresent = [...fieldData].filter((data) => data.domains !== value && data.domains !== "")
    const empty = [...fieldData].filter((data) => data.domains === "")
    setFieldData([...present, ...notPresent, ...empty])
  }

  useEffect(() => {
    console.log("running")
    const nonEmpty = [...fieldData].filter((data) => data.domains !== "")
    const empty = [...fieldData].filter((data) => data.domains === "")
    setFieldData([...nonEmpty, ...empty])
  }, [])


  const labels = [
    {
      text: 'Name of the program',
      className: 'col-span-2 ',
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
      domain: <InternshipFilterComponent sortField={sortDomain} listValues={listValues} />
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
console.log("render")

  return (
    <div className="w-full min-h-screen flex justify-center text-xs overflow-x-scroll ">
      <div
        className="w-full max-w-[1780px] min-w-[1700px] h-full py-10 relative"
        style={{ left: width < 1780 ? `${(1780 - width)/2 - 30}px` : '0px' }}

      >
        {/* Header Row */}
        <div className="grid grid-cols-10 min-w-[1400px]">
          {labels.map((label, ind) => (
            <div
              key={ind}
              className={`border border-slate-300 px-2 flex gap-3 py-1 items-center ${label.className}`}
            >
              {label.icon}
              {label.text}
              {label.domain && (
                <div className="ml-auto">{label.domain}</div>
              )}
            </div>
          ))}
        </div>

        {/* Data Rows */}
        {fieldData.map((data, ind) => (
          <CompetitionDatabaseEntries key={ind} dataset={data} />
        ))}

      </div>
    </div>
  );

}

export default CompetitionDatabasePage