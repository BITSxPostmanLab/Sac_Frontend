import ContactUsForm from "@/components/contact-page/contact-us-form";
import React from "react";
import { FaPhone, FaMessage } from "react-icons/fa6";

const ContactPage = () => {
  return (
    <div className="flex w-full min-h-screen bg-[#d9d9d9]">
      <div className="w-[40%] hidden md:block bg-[#d9d9d9] h-full text-5xl text-center place-content-center font-bold my-auto">
        <div>CONTACT</div>
        <div>US</div>
      </div>
      <div className="bg-white w-full md:w-[60%] h-full text-center flex flex-col items-center">
        <div className="font-bold text-3xl my-8">
          CONTACT <br /> INFORMATION
        </div>
        <div>
          <ContactUsForm />
        </div>
        <div className="text-center mt-10 text-lg">
          Feel free to reach out to us for any query <br /> or collaboration
        </div>
        <div className="flex flex-col gap-5 mt-8 mb-10">
          <div className="flex items-center gap-3">
            <FaMessage className="text-[#d7c99e]" size={25} />
            <span className="text-lg font-semibold">sac@pilani.bits-pilani.ac.in</span>
          </div>
          <div className="flex items-center gap-3">
            <FaPhone className="text-[#d7c99e]" size={25} />
            <span className="text-lg font-semibold">Mehul: 9608283485</span>
          </div>
          <div className="flex items-center gap-3">
            <FaPhone className="text-[#d7c99e]" size={25} />
            <span className="text-lg font-semibold">Arnav: 9315583656</span>
          </div>
          <div className="flex items-center gap-3">
            <FaPhone className="text-[#d7c99e]" size={25} />
            <span className="text-lg font-semibold">Shreyas: 7387526136</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

