import Crousel from '@/components/home/crousel'
import React from 'react'

const ResourcesPage = () => {
    return (
        <div className='w-full flex items-center justify-center'>
            <div className=' w-full max-w-[1440px] flex items-center flex-col justify-center'>
                <Crousel />
                <Crousel />
            </div>
        </div>
    )
}

export default ResourcesPage

