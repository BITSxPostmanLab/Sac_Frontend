"use client";
import React from 'react'
import { Button } from '../ui/button'
import { useState } from 'react';
import { cn } from '@/lib/utils';
import clsx from 'clsx';
const FilterParams = () => {
    const filterParams = [
        "All",
        "Research Talks",
        "SI Talks",
        "Placement Talks",
        "Academic Talks",
        "PS Talks"
    ]
    const [currentParam, setCurrentParam] = useState(filterParams[0])

    return (
        <div className='flex gap-10 text-xl'>
            {filterParams.map((ele, index) => {
                return (
                    <Button key={index} onClick={() => { setCurrentParam(ele) }} className={clsx("bg-white text-black text-xl hover:bg-white border-none shadow-none",
                        currentParam == ele && "font-bold"
                    )}>
                        {ele}
                    </Button>
                )
            })}
        </div>
    )
}

export default FilterParams