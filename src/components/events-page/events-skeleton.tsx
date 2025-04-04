import React from 'react'
import { Skeleton } from '../ui/skeleton'

const EventsSkeleton = ({ count }: { count: number }) => {
    return (
        Array(count).fill(0).map((_, i) => {
            return (
                <div className='h-full mb-5 rounded-xl px-10 w-full ' key={i}>
                    <div className='relative   rounded-xl bg-[#f2f2f2]  '>
                        <Skeleton className='h-[350px]' />
                    </div>
                    <div className='pt-5 space-y-3'>
                        <Skeleton className=' text-xl md:text-3xl font-semibold whitespace-nowrap flex h-[30px] ' />

                        <Skeleton className='text-sm sm:text-base line-clamp-4  h-[70px] '></Skeleton>
                        <div className='flex gap-10 w-full'>
                            <Skeleton className='h-[50px] w-full rounded-full' />
                            <Skeleton className='h-[50px] w-full rounded-full' />
                            <Skeleton className='h-[50px] w-full rounded-full' />
                        </div>
                    </div>
                </div>
            )
        })
    )
}

export default EventsSkeleton

