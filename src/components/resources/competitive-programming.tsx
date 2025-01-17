import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const CompetitiveProgramming = () => {
    return (
        <div className='w-full mt-10'>
            <div className='text-center text-3xl py-10'>Competitive Programming Document</div>
            <div className='grid grid-cols-2 w-full mb-10'>
                <div className='col-span-1 '>
                    <Image src={"/resources/compcode1.jpg"} alt="chronicles" height={1000} width={500} className='w-auto h-[500px] ml-auto pr-10' />
                </div>
                <div className='col-span-1 text-xl text-[#6a6c6e] my-auto'>
                    <div>In this interview, we delve deep into the realm of Competitive Programming, exploring what it entails and who should consider venturing into this challenging yet rewarding field. This conversation is also beneficial for students eyeing summer internships (SI) and those aiming to enhance their coding skills for competitive scenarios like the ICPC.
                        Anish also discusses a range of resources that can aid in mastering Data Structures and Algorithms (DSA) as well as excelling in Competitive Programming.
                        This interview promises to be a comprehensive guide for anyone at any stage of their CP journey, packed with practical advice, resource recommendations, and personal anecdotes from one of the most accomplished coders of BITS Pilani.</div>
                    <Link href="https://drive.google.com/file/d/1eo6AxVXnyb9RyNtKmLlSZGKPVCcv-f7q/view" className='text-blue-500 underline'><div className='mt-6'>Competitive Programming Document</div></Link>
                </div>
            </div>


        </div>
    )
}

export default CompetitiveProgramming