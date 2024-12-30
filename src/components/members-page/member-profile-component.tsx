import React from 'react'
import Image from 'next/image'
const MemberProfileComponent = () => {
    return (
        <div className='p-5 px-10'>
            <Image src={"/sac-logo.jpeg"} alt="member_pfp" height={1000} width={1000} className='w-[90px] mx-auto rounded-full bg-slate-600' />
            <div className='text-center mt-4 font-semibold'>
                Random 3 word name
            </div>
            <div className='text-center'>Designation</div>
        </div>
    )
}

export default MemberProfileComponent

