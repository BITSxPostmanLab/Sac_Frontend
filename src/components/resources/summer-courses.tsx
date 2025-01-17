import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Plus } from 'lucide-react'
const SummerCourse = () => {
    const courses = [
        { title: "Film Making", href: "#" },
        { title: "Coding & Designing", href: "#" },
        { title: "Consulting", href: "#" },
        { title: "Finance", href: "#" },
        { title: "IoT & Arduino", href: "#" },
    ]
    return (
        <div className='w-full mt-10'>
            <div className='text-center text-3xl py-10'>Summer Courses
            </div>
            <div className='grid grid-cols-2 w-full mb-10'>
                <div className='col-span-1 '>
                    <Image src={"/resources/summer1.jpg"} alt="chronicles" height={1000} width={500} className='w-auto h-[500px] ml-auto pr-10' />
                </div>
                <div className='col-span-1 text-xl text-[#6a6c6e] '>
                    <div className="space-y-4">
                        {courses.map((course, index) => (
                            <Link
                                key={index}
                                href={course.href}
                                className="flex items-center gap-2 py-4 rounded-lg hover:bg-gray-50 transition-colors group underline"
                            >
                                <Plus className="w-5 h-5 text-blue-600" />
                                <span className="text-xl text-blue-600 hover:underline">
                                    {course.title}
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>


        </div>
    )
}

export default SummerCourse