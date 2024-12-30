import ContactUsForm from '@/components/contact-page/contact-us-form'
import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { FaMessage } from "react-icons/fa6";

const ContactPage = () => {
    return (
        <div className=' flex w-full h-full bg-red-100'>
            <div className='w-[40%] bg-[#d9d9d9] h-full text-5xl text-center place-content-center font-bold'>
                <div>CONTACT</div>
                <div>US</div>
            </div>
            <div className='bg-white w-[60%] h-full text-center flex flex-col items-center'>
                <div className='font-bold text-3xl my-8'>
                    CONTACT <br /> INFORMATION
                </div>
                <div>
                    <ContactUsForm />
                </div>
                <div className='text-center mt-10 text-lg'>
                    Feel free to reach out to us for any query <br /> or collaboration
                </div>
                <div className='flex flex-col gap-5 mt-8'>
                    <div>
                        <FaMessage className='text-[#d7c99e] ' size={25} />
                    </div>
                    <div>
                        <FaPhone className='text-[#d7c99e] ' size={25} />
                    </div>
                    <div>
                        <FaPhone className='text-[#d7c99e] ' size={25} />
                    </div>
                    <div>
                        <FaPhone className='text-[#d7c99e] ' size={25} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPage

