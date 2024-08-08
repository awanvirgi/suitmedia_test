'use client'
import Image from "next/image"
import { useState } from "react"

const Header = () => {
    const [active, setActive] = useState(4)
    return (
        <header className="fixed flex justify-between bg-main-600 w-full py-6 px-36 z-50 items-center">
            <div className="h-auto w-36">
                <Image alt="logo" priority src="/logo.png" width={400} height={400} className="object-cover" />
            </div>
            <nav>
                <ul className="flex gap-6">
                    <li className={`text-white p-1 ${active == 1 && "border-b-4"}`}>Work</li>
                    <li className={`text-white p-1 ${active == 2 && "border-b-4"}`}>About</li>
                    <li className={`text-white p-1 ${active == 3 && "border-b-4"}`}>Services</li>
                    <li className={`text-white p-1 ${active == 4 && "border-b-4"}`}>ideas</li>
                    <li className={`text-white p-1 ${active == 5 && "border-b-4"}`}>Careers</li>
                    <li className={`text-white p-1 ${active == 6 && "border-b-4"}`}>Contact</li>
                </ul>
            </nav>
        </header>
    )
}
export default Header