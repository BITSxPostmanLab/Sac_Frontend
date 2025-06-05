"use client"
import React from 'react'

const CompetitionDatabaseRows = () => {
    const [fieldData, setFieldData] = useState<ProgramData[]>([])
  return (
    {
        fieldData.map((data, ind) => {
          return (
            <CompetitionDatabaseEntries key={ind} dataset={data} />
          )
        })
      }

  )
}

export default CompetitionDatabaseRows