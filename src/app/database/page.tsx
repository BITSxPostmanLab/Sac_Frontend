"use client"
import CompetitionDatabaseEntries from '@/components/database/CompetitionDatabaseEntries'
import { ProgramData } from '@/types'
import React, { useEffect, useMemo, useState } from 'react'
import { ALargeSmall, Divide } from 'lucide-react';
import { dataset } from '../../../constants';
import { AlignLeft } from 'lucide-react';
import { Calendar } from 'lucide-react';
import { CircleChevronDown } from 'lucide-react';
import DomainFilterComponent from '@/components/database/DomainFilterComponent';
import YesNoFilter from '@/components/database/YesNoFilter';

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

  useEffect(() => {
    setFieldData(dataset)
  }, [])


  //recurring sort
  const sortRecurring = (value: "Yes" | "No") => {
  
    if(value === "No"){
      const sorted = [...dataset].sort((a,b)=>
        a.recurring.localeCompare(b.recurring)
      )
      setFieldData(sorted)
    }else{
      const sorted = [...dataset].sort((a,b)=>
        b.recurring.localeCompare(a.recurring)
      )
      setFieldData(sorted)
    }

    
  };
  //sort internship
  
  const sortInternship = (value: "Yes" | "No") => {
  
    if(value === "No"){
      const sorted = [...dataset].sort((a,b)=>
        a.internship.localeCompare(b.internship)
      )
      setFieldData(sorted)
    }else{
      const sorted = [...dataset].sort((a,b)=>
        b.internship.localeCompare(a.internship)
      )
      setFieldData(sorted)
    }
    
  };
  //domain

  const sortDomain = (value:"ASC" | "DCS") =>{
      if(value === "ASC"){
        const sorted = [...dataset].sort((a,b)=>
          a.domain.localeCompare(b.domain)
        )
        setFieldData(sorted)
      }else{
        const sorted = [...dataset].sort((a,b)=>
          b.domain.localeCompare(a.domain)
        )
        setFieldData(sorted)
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
      domain:<YesNoFilter sortField = {sortInternship}/>
    },
    {
      text: 'Domains',
      className: '',
      icon: <CircleChevronDown className={iconClass} />,
      domain: <DomainFilterComponent sortField = {sortDomain} />
    },
    {
      text: 'Recurring?',
      className: '',
      icon: <CircleChevronDown className={iconClass} />,
      domain:<YesNoFilter sortField = {sortRecurring}/>
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