import React, { memo } from 'react'
import { ProgramData } from '@/types'
import { cn } from '@/lib/utils';

const CompetitionDatabaseEntries = memo(({ dataset }: { dataset: ProgramData }) => {
   const entries = [
      { value: dataset.name, className: 'col-span-2' },
      { value: dataset.organization },
      { value: dataset.start_date },
      { value: dataset.end_date },
      { value: dataset.prospective === true ? "Yes" :"No" ,borderClassName: cn(" w-fit px-2 rounded-lg py-1",dataset.prospective === true ? "bg-yellow-200" : "bg-blue-200")  },
      { value: dataset.domains },
      { value: dataset.is_recurring === true ? "Yes" : "No" , borderClassName: cn(" w-fit px-2 rounded-lg py-1",dataset.is_recurring === true ? "bg-green-300" : "bg-red-300") },
      { value: dataset.skillsets, className: 'col-span-2' },
   ];
   return (
      <div className='grid grid-cols-10 '>
         {entries.map((entry, index) => (
            <div
               key={index}
               className={`border-[1px] border-solid border-slate-300  w-full p-2 text-sm ${entry.className ?? ''}`}
            >
               <div className={`${entry.borderClassName ?? 'py-1'}`}>
               {entry.value}
               </div>
            </div>
         ))}
      </div>
   )
})

export default CompetitionDatabaseEntries