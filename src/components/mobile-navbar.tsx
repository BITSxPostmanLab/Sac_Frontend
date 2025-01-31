import type React from "react"
import { X, Dot } from "lucide-react"
import Link from "next/link"

interface MobileNavbarProps {
    setNavbarState: (state: boolean) => void
}

const MobileNavbar = ({ setNavbarState }: MobileNavbarProps) => {
    const closeSidebar = () => {
        setNavbarState(false)
    }

    return (
        <div className="w-[100vw] h-[100vh] bg-[#ebdcbc] fixed top-0 right-0 z-50 overflow-scroll">
            <div className="h-20 flex border-b-2 border-solid border-black items-center p-3">
                <div className="text-left text-xl font-medium">Menu</div>
                <div onClick={closeSidebar} className="ml-auto">
                    <X className="h-8 w-8" />
                </div>
            </div>
            <div className="flex flex-col text-lg font-medium">
                <Link href="/" className="h-14 flex items-center p-2" onClick={closeSidebar}>
                    <Dot /> Home
                </Link>
                <div className="min-h-14 flex flex-col p-2 w-full">
                    <Link href="/events" onClick={closeSidebar}>
                        <div className="font-semibold mb-2 flex">
                            <Dot /> Events
                        </div>
                        {/* <div className="flex flex-col gap-2 pl-4">
                    {eventList.map((ele, key) => (
                        <div key={key} className="flex items-center">
                            <Dot /> {ele}
                        </div>
                    ))}
                </div> */}
                    </Link>
                </div>
                <div className="min-h-14 flex flex-col p-2 w-full">
                    <Link href="/resources" onClick={closeSidebar}>
                        <div className="font-semibold mb-2 flex">
                            <Dot /> Resources
                        </div>
                        {/* <div className="flex flex-col gap-2 pl-4">
                    {resourceList.map((ele, key) => (
                        <div key={key} className="flex items-center">
                            <Dot /> {ele}
                        </div>
                    ))}
                </div> */}
                    </Link>
                </div>
                <Link href="/gallery" className="h-14 flex items-center p-2" onClick={closeSidebar}>
                    <Dot /> Gallery
                </Link>
                <Link href="/members" className="h-14 flex items-center p-2" onClick={closeSidebar}>
                    <Dot /> Members
                </Link>
                <Link href="/blogs" className="h-14 flex items-center p-2" onClick={closeSidebar}>
                    <Dot /> Blogs
                </Link>
                <Link href="/contact" className="h-14 flex items-center p-2" onClick={closeSidebar}>
                    <Dot /> Contact
                </Link>
            </div>
        </div>
    )
}

export default MobileNavbar

