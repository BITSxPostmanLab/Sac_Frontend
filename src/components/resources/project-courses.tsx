import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const ProjectCourses = () => {
    return (
        <div className='w-full mt-10'>
            <div className='text-center text-3xl py-10'>Project Courses : Chronicles</div>
            <div className='grid md:grid-cols-2 w-full mb-20 space-y- '>
                <div className='w-fit md:ml-auto mx-auto mb-10'>
                    <Image src={"/resources/chronicles1.jpg"} alt="chronicles" height={1000} width={500} className='w-auto h-[500px] ml-auto pr-10' />
                </div>
                <div className=' px-10 col-span-1 text-xl text-[#6a6c6e] my-auto'>
                    <div>Project Courses: Chronicles, offers in-depth accounts of students’ experiences working under specific professors in project-based courses. This resource highlights the expectations professors have from their students and provides detailed insights into the dynamics of these collaborations. By documenting these firsthand experiences, the Chronicles serve as a valuable guide for students to make informed decisions when selecting mentors and courses.</div>
                    <div className='mt-6'>This is the 1st Edition of our department-wise initiative, starting with the Department of Economics and Finance.</div>
                    <Link href="https://drive.google.com/file/d/18BNXs66zjGK2_34EgjWXqUFLIoHjc6xT/view" className='text-blue-500 underline'><div className='mt-6'>Project Courses Chronicles – Economics and Finance</div></Link>

                </div>
            </div>
            <div className='grid grid-cols-2 w-full mb-20'>
                <div className='col-span-1 '>
                    <Image src={"/resources/project_csis.png"} alt="chronicles" height={1000} width={500} className='w-auto h-[500px] ml-auto pr-10' />
                </div>
                <div className='col-span-1 text-xl text-[#6a6c6e] my-auto'>
                    <div>This is the 2nd Edition of our department-wise initiative, continuing with the Department of Computer Science & Information Systems</div>
                    <Link href="https://drive.google.com/file/d/1gHjrJWGX8Mo1Kn48darEFT4ZRSCqvFQ1/view" className='text-blue-500 underline'><div className='mt-6'>Project Courses Chronicles-CSIS</div></Link>

                </div>
            </div>
            <div className='grid grid-cols-2 w-full mb-10'>
                <div className='col-span-1 '>
                    <Image src={"/resources/project_dom.png"} alt="chronicles" height={1000} width={500} className='w-auto h-[500px] ml-auto pr-10' />
                </div>
                <div className='col-span-1 text-xl text-[#6a6c6e] my-auto'>
                    <div>This is the 2nd Edition of our department-wise initiative, continuing with the Department of Mathematics</div>
                    <Link href="https://drive.google.com/file/d/1gHjrJWGX8Mo1Kn48darEFT4ZRSCqvFQ1/view" className='text-blue-500 underline'><div className='mt-6'>Project Courses Chronicles-Mathematics</div></Link>

                </div>
            </div>

        </div>
    )
}

export default ProjectCourses

