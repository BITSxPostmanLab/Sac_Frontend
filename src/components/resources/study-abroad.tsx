import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const StudyAbroad = () => {
    return (
        <div className='w-full mt-10'>
            <div className='text-center text-3xl py-10'>Study Abroad Document</div>
            <div className='grid grid-cols-2 w-full mb-10'>
                <div className='col-span-1 '>
                    <Image src={"/resources/study_abroad.png"} alt="chronicles" height={1000} width={500} className='w-auto h-[500px] ml-auto pr-10' />
                </div>
                <div className='col-span-1 text-xl text-[#6a6c6e] my-auto'>
                    <div>The Study abroad document provides insightful information and a roadmap to students regarding off-campus thesis opportunities, masters abroad programmes, and exchange programmes. It highlights the advantages of conducting research abroad, allowing students to acquire a global perspective and broaden their academic horizons. With a concentration on fostering cross-cultural collaboration and intellectual development, this extensive resource serves as a valuable guide for students seeking academically enriching experiences abroad.</div>
                    <Link href="https://sacbitspilani.wordpress.com/wp-content/uploads/2023/06/studyabroaddoc_final_sac.pdf" className='text-blue-500'><div className='mt-6'>Study Abroad Document</div></Link>
                </div>
            </div>


        </div>
    )
}

export default StudyAbroad