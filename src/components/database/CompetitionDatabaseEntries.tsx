import React from 'react'
import { ProgramData } from '@/types'
import { cn } from '@/lib/utils';
const CompetitionDatabaseEntries = ({ dataset }: { dataset: ProgramData }) => {
   const entries = [
      { value: dataset.program, className: 'col-span-2' },
      { value: dataset.org },
      { value: dataset.start },
      { value: dataset.end },
      { value: dataset.internship,borderClassName: cn(" w-fit px-2 rounded-lg py-1",dataset.internship === "Yes" ? "bg-yellow-200" : "bg-blue-200")  },
      { value: dataset.domain },
      { value: dataset.recurring , borderClassName: cn(" w-fit px-2 rounded-lg py-1",dataset.recurring === "Yes" ? "bg-green-300" : "bg-red-300") },
      { value: dataset.skills, className: 'col-span-2' },
   ];
   return (
      <tr className='grid grid-cols-10 '>
         {entries.map((entry, index) => (
            <div
               key={index}
               className={`border-[1px] border-solid border-slate-300  h-fit w-full p-2 text-sm ${entry.className ?? ''}`}
            >
               <div className={`${entry.borderClassName ?? 'py-1'}`}>
               {entry.value}
               </div>
            </div>
         ))}
      </tr>
   )
}

export default CompetitionDatabaseEntries