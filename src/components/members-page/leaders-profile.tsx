import React from 'react'
import Image from 'next/image'
import { Separator } from '../ui/separator'
const LeardersProfile = ({ className }: { className?: string }) => {
    return (
        <div className={className}>
            <Image src={"/sac-logo.jpeg"} alt="member_pfp" height={1000} width={1000} className='w-[250px] h-[250px] mx-auto rounded-xl bg-slate-600' />
            <div className='text-center mt-4 font-semibold'>
                Random 3 word name
            </div>
            <div className='text-center mb-2'>Designation</div>
            <Separator className='w-[70px] bg-black h-[1px] mx-auto mb-5' />
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ex esse recusandae mollitia id tenetur molestias molestiae minus pariatur delectus est accusamus maiores vel facere, doloribus perferendis aut rem deleniti necessitatibus cupiditate! Harum aut provident nihil
            </div>

        </div>
    )
}

export default LeardersProfile

