import React from 'react'
import Image from 'next/image'
import { FaInstagramSquare } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";

const Footer = () => {
    return (
        <div className='h-64 w-full bg-[#ebdcbc] mt-auto flex'>

            <div className='ml-auto w-1/2 h-full flex items-center'>
                <Image src={"/bitspilanilogo.png"} alt='bits-logo' height={1000} width={1000} className='h-52 w-52 mx-10'></Image>
                <div className='flex flex-col text-slate-100'>
                    <div className=' font-semibold text-5xl -mt-10'><span className='font-extrabold'>BITS</span> Pilani</div>
                    <div className=' font-xl mt-1'>Pilani | Goa | Hyderabad | Dubai</div>
                    <div className='flex gap-5 mt-10 mx-auto'>
                        <FaInstagramSquare className='w-10 h-10 text-white' />
                        <GrLinkedin className='w-10 h-10 text-white' />

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Footer

