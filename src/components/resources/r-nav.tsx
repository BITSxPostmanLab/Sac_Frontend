import React from 'react'
import { Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useState } from "react"
const ResourceNavbar = () => {
    return (
        <nav className="relative w-[60%] px-4 py-10">
            {/* Horizontal line */}
            <div className="absolute left-0 right-0 top-1/2 h-px bg-gray-200" />

            {/* Centered menu button */}
            <div className="relative flex justify-center">
                <Button

                    variant="ghost"
                    size="icon"
                    className="h-10 w-10 rounded-full bg-[#D7DDCF] hover:bg-[#C8CEB8] transition-colors"
                    aria-label="Toggle menu"
                >
                    <Menu className="h-6 w-6 text-gray-600" />
                </Button>
            </div>

            {/* Menu content - you can expand this based on your needs */}

        </nav>
    )
}

export default ResourceNavbar