import ResourceNavbar from '@/components/resources/r-nav'
import React from 'react'

import Image from 'next/image';
const GalleryPage = () => {

    return (
        <div className="w-full flex min-h-full items-center justify-center mb-32">
            <div className=" w-full max-w-[1000px] flex items-center flex-col justify-center px-3">
                <div className="text-4xl pt-8">Gallery</div>

                <div className="max-w-7xl mx-auto px-4 py-8">
                    <h1 className="text-3xl font-bold mb-1">Quantaculus 2024</h1>
                    <p className="text-gray-600 mb-8">6th April, 2023</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* <div className="overflow-hidden h-[306px]">
                            <Image
                                src="/gallery/quant2024-1.webp"
                                alt="Person writing on blackboard"
                                width={600}
                                height={400}
                                layout='responsive'
                                className="w-auto h-full object-scale-down"
                            />
                        </div> */}

                        <div className="overflow-hidden">
                            <Image
                                src="/gallery/quant2024-2.webp"
                                alt="Group photo of participants"
                                width={600}
                                height={400}
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        <div className="overflow-hidden">
                            <Image
                                src="/gallery/quant2024-3.webp"
                                alt="Small group sitting in auditorium"
                                width={600}
                                height={400}
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        <div className="overflow-hidden">
                            <Image
                                src="/gallery/quant2024-4.webp"
                                alt="Presentation in classroom"
                                width={600}
                                height={400}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 py-8">
                    <h1 className="text-3xl font-bold mb-1">APOGEE 2024 Snaps</h1>
                    <p className="text-gray-600 mb-8">30th March, 2023</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="overflow-hidden ">
                            <Image
                                src="/gallery/ap2024-1.webp"
                                alt="Person writing on blackboard"
                                width={600}
                                height={200}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="overflow-hidden">
                            <Image
                                src="/gallery/ap2024-2.webp"
                                alt="Group photo of participants"
                                width={600}
                                height={400}
                                className="w-full h-auto object-cover"
                            />
                        </div>

                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 py-8">
                    <h1 className="text-3xl font-bold mb-1">Quantaculus 2023</h1>
                    <p className="text-gray-600 mb-8">2nd April, 2023</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="overflow-hidden h-[306px]">
                            <Image
                                src="/gallery/q2023-1.webp"
                                alt="Person writing on blackboard"
                                width={600}
                                height={400}
                                layout='responsive'
                                className="w-auto h-full object-scale-down"
                            />
                        </div>

                        <div className="overflow-hidden">
                            <Image
                                src="/gallery/q2023-2.webp"
                                alt="Group photo of participants"
                                width={600}
                                height={400}
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        <div className="overflow-hidden">
                            <Image
                                src="/gallery/q2023-3.webp"
                                alt="Small group sitting in auditorium"
                                width={600}
                                height={400}
                                className="w-full h-auto object-cover"
                            />
                        </div>

                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 py-8">
                    <h1 className="text-3xl font-bold mb-1">APOGEE 2023 Snaps</h1>
                    <p className="text-gray-600 mb-8">26th March, 2023</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="overflow-hidden h-[306px]">
                            <Image
                                src="/gallery/a2023-1.jpg"
                                alt="Person writing on blackboard"
                                width={600}
                                height={400}
                                layout='responsive'
                                className="w-full h-full object-contain"
                            />
                        </div>

                        <div className="overflow-hidden">
                            <Image
                                src="/gallery/a2023-2.webp"
                                alt="Group photo of participants"
                                width={600}
                                height={400}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        <div className="overflow-hidden">
                            <Image
                                src="/gallery/a2023-3.jpg"
                                alt="Small group sitting in auditorium"
                                width={600}
                                height={400}
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        <div className="overflow-hidden">
                            <Image
                                src="/gallery/a2023-4.jpg"
                                alt="Presentation in classroom"
                                width={600}
                                height={400}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        <div className="overflow-hidden">
                            <Image
                                src="/gallery/a2023-5.webp"
                                alt="Small group sitting in auditorium"
                                width={600}
                                height={400}
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        <div className="overflow-hidden">
                            <Image
                                src="/gallery/a2023-6.webp"
                                alt="Presentation in classroom"
                                width={600}
                                height={400}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default GalleryPage

