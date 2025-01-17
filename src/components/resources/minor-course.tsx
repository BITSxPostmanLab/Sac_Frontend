import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const MinorCourseDocument = () => {
    return (
        <div className='w-full mt-10'>
            <div className='text-center text-3xl py-10'>Minor Courses Document</div>
            <div className='grid grid-cols-2 w-full mb-10'>
                <div className='col-span-1 '>
                    <Image src={"/resources/minor.png"} alt="chronicles" height={1000} width={500} className='w-auto h-[500px] ml-auto pr-10' />
                </div>
                <div className='col-span-1 text-xl text-[#6a6c6e] my-auto'>
                    <div>Minor programs in specific areas are being offered as options for integrated first-year students with the goal of encouraging them to add focus to their supplemental learning (outside of a major area) as well as recognizing and certifying knowledge obtained in an area that is outside of their major area.</div>
                    <div>This document comprises of the entire information regarding different minors collected from faculties as well as students who have completed their minor degree.</div>
                    <Link href="https://sacbitspilani.wordpress.com/wp-content/uploads/2022/12/minor-doc-1.pdf" className='text-blue-500 underline'><div className='mt-6'>Minor Degree Document</div></Link>
                </div>
            </div>


        </div>
    )
}

export default MinorCourseDocument