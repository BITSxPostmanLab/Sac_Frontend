import React from "react";
import { FaPhone, FaMessage, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const ContactPage = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#d9d9d9] to-[#e8e8e8] flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Title */}
        <div className="text-center lg:text-left">
          <h1 className="text-6xl lg:text-7xl font-bold text-gray-800 mb-4">
            GET IN
          </h1>
          <h1 className="text-6xl lg:text-7xl font-bold text-gray-800 mb-8">
            TOUCH
          </h1>
          <p className="text-xl text-gray-600 max-w-md mx-auto lg:mx-0">
            Connect with the Students' Academic Cell for any academic guidance, queries, or collaboration opportunities.
          </p>
        </div>

        {/* Right Side - Contact Information */}
        <div className="w-full">
          <Card className="bg-white shadow-2xl rounded-3xl overflow-hidden">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                  CONTACT INFORMATION
                </h2>
                <div className="w-20 h-1 bg-[#d7c99e] mx-auto rounded-full"></div>
              </div>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="bg-[#d7c99e] p-3 rounded-full">
                    <FaMessage className="text-gray-800" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-medium">Email</p>
                    <p className="text-lg font-semibold text-gray-800">sac@pilani.bits-pilani.ac.in</p>
                  </div>
                </div>

                {/* Phone Numbers */}
                <div className="space-y-3">
                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                    <div className="bg-[#d7c99e] p-3 rounded-full">
                      <FaPhone className="text-gray-800" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 font-medium">Mehul</p>
                      <p className="text-lg font-semibold text-gray-800">9608283485</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                    <div className="bg-[#d7c99e] p-3 rounded-full">
                      <FaPhone className="text-gray-800" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 font-medium">Arnav</p>
                      <p className="text-lg font-semibold text-gray-800">9315583656</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                    <div className="bg-[#d7c99e] p-3 rounded-full">
                      <FaPhone className="text-gray-800" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 font-medium">Shreyas</p>
                      <p className="text-lg font-semibold text-gray-800">7387526136</p>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="pt-6 border-t border-gray-200">
                  <p className="text-center text-gray-600 font-medium mb-4">Follow Us</p>
                  <div className="flex justify-center gap-4">
                    <Link 
                      href="https://www.instagram.com/sac_bits_pilani/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                    >
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-full hover:scale-110 transition-transform duration-300">
                        <FaInstagram className="text-white" size={24} />
                      </div>
                    </Link>
                    
                    <Link 
                      href="https://www.linkedin.com/company/28138316/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                    >
                      <div className="bg-[#0077B5] p-4 rounded-full hover:scale-110 transition-transform duration-300">
                        <FaLinkedin className="text-white" size={24} />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

