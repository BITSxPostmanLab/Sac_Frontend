import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const ProjectType = () => {
    return (
        <div className='w-full mt-10'>
            <div className='text-center text-3xl py-10'>Project Type Courses</div>
            <div className='grid grid-cols-2 w-full mb-20'>
                <div className='col-span-1 '>
                    <Image src={"/resources/project_type.jpg"} alt="chronicles" height={1000} width={500} className='w-auto h-[500px] ml-auto pr-10' />
                </div>
                <div className='col-span-1 text-xl text-[#6a6c6e] my-auto'>
                    <div>Choosing SOP/LOP/DOP courses opens a gateway to fuel your passion for research, going beyond lectures under the guidance of experienced professors.</div>
                    <div className='mt-6'>Introducing our Comprehensive Document on Project Type Courses ! This isn’t just another piece of information; it’s your guide to approaching these project type courses with confidence. Delve into department-specific details as SAC has meticulously compiled information so that you can make informed decisions about your academic journey.</div>
                    <Link href="https://drive.google.com/file/d/18BNXs66zjGK2_34EgjWXqUFLIoHjc6xT/view" className='text-blue-500 underline'><div className='mt-6'>Project Type Courses</div></Link>


                </div>
            </div>



        </div>
    )
}

export default ProjectType