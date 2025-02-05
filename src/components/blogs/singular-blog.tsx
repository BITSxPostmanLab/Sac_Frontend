import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
type PostProps = {
    imageUrl: string,
    content: string;
    title: string;

}
const SingularBlogPost = ({ imageUrl, content, title }: PostProps) => {

    return (
        <div className='grid md:grid-cols-3 w-full mb-20 max-h-[600px] overflow-y-hidden'>
            <div className='w-fit md:ml-auto mx-auto md:mx-0 mb-10 mt-5'>
                <Image src={imageUrl} alt="chronicles" height={1000} width={500} className='w-auto h-[500px] ml-auto' />
            </div>
            <div className='px-5 sm:px-10 md:col-span-2 text-xl my-auto flex flex-col gap-5 bg-gradient-to-b from-white to-transparent'>
                <div className='text-3xl font-semibold'>
                    {title}
                </div>
                <div
                    className='text-[#6a6c6e] overflow-y-hidden'
                    style={{
                        maxHeight: '500px',
                        WebkitMaskImage: 'linear-gradient(to bottom, rgba(255, 255, 255, 1) 60%, rgba(255, 255, 255, 0))',
                        maskImage: 'linear-gradient(to bottom, rgba(255, 255, 255, 1) 60%, rgba(255, 255, 255, 0))',
                        paddingRight: '10px',
                    }}
                >
                    {content}
                </div>
            </div>
        </div>

    )
}

export default SingularBlogPost

