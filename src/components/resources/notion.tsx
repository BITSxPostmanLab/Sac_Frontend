import React from 'react'
import Link from 'next/link'

const Notion = () => {
    return (
        <div className='w-full mt-10 px-20'>
            <div className='text-center text-3xl py-10'>Notion Dashboard</div>
            <div className='text-xl text-[#6a6c6e] '>The Notion website claims to be a one-stop Dashboard for the majority of your college life’s events, both academic and non-academic. There are also subject-specific and overall Academic Drive links. We have attempted to compile the majority of the necessary materials, which will be updated over time. We advise you to take advantage of it.</div>
            <div className='my-6 mt-10 text-xl text-[#6a6c6e]'>
                Links to Dashboards:
            </div>
            <div className="flex flex-col gap-8 text-xl text-[#545353] font-medium">
                <div>Semester 1:</div>
                <div>
                    <Link href="https://kunj-dashboard.notion.site/Dashboard-A-3e4ab2630c094b389b0be573f7ef5190" passHref target='/'>
                        <span className="text-blue-500 underline active-link">Dashboard A</span>
                    </Link>{' '}
                    for all the BE students except BE Civil and BE Manufacturing.
                </div>
                <div>
                    <Link href="https://kunj-dashboard.notion.site/Dashboard-B-41a5c78ad7c44bf88548ebb1934f3ded" passHref target='/'>
                        <span className="text-blue-500 underline active-link">Dashboard B</span>
                    </Link>{' '}
                    for all the MSc students and BE Civil and BE Manufacturing.
                </div>
                <div>Semester 2:</div>
                <div>
                    <Link href="https://kunj-dashboard.notion.site/Dashboard-A-1-2-4c819e27abaf4de7aae481aff06cd3c2" passHref target='/'>
                        <span className="text-blue-500 underline active-link">Dashboard A</span>
                    </Link>{' '}
                    for all the MSc students and BE Civil and BE Manufacturing.
                </div>
                <div>
                    <Link href="https://kunj-dashboard.notion.site/Dashboard-B-1-2-5702f0f88e6244e58ebf7a76d299c9f3" passHref target='/'>
                        <span className="text-blue-500 underline active-link">Dashboard B</span>
                    </Link>{' '}
                    for all the BE students except BE Civil and BE Manufacturing.
                </div>
                <div>
                    <Link href="https://kunj-dashboard.notion.site/Dashboard-C-1-2-15ec24ea36a94159900db001c60d3516" passHref target='/'>
                        <span className="text-blue-500 underline active-link">Dashboard C</span>
                    </Link>{' '}
                    for all BPharma Students.
                </div>
            </div>

        </div>
    )
}

export default Notion