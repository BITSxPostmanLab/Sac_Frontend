'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type PostProps = {
    imageUrl: string,
    paragraphs: string[];
    resourceLink: string;
    linkText: string;
    postId: number;
}

const SingularPost = ({ imageUrl, paragraphs, resourceLink, linkText, postId }: PostProps) => {
    const handleExternalLinkClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    return (
        <div className='grid md:grid-cols-2 w-full mb-20'>
            <Link href={`/resources/${postId}`} className="w-fit md:ml-auto mx-auto md:mx-0 mb-10">
                <Image src={imageUrl} alt="chronicles" height={1000} width={500} className='w-auto h-[500px] ml-auto' />
            </Link>
            <div className='px-5 sm:px-10 col-span-1 text-xl text-[#6a6c6e] my-auto'>
                {/* <div>Project Courses: Chronicles, offers in-depth accounts of students' experiences working under specific professors in project-based courses. This resource highlights the expectations professors have from their students and provides detailed insights into the dynamics of these collaborations. By documenting these firsthand experiences, the Chronicles serve as a valuable guide for students to make informed decisions when selecting mentors and courses.</div>
                <div className='mt-6'>This is the 1st Edition of our department-wise initiative, starting with the Department of Economics and Finance.</div> */}

                {paragraphs.map((ele, key) => {
                    return (
                        <div className="mb-6" key={key}>
                            {ele}
                        </div>
                    )
                })}
                <a 
                    href={resourceLink}
                    className='text-blue-500 underline block mt-6'
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleExternalLinkClick}
                >
                    {linkText}
                </a>
            </div>
        </div>
    )
}

export default SingularPost

