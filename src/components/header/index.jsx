'use client'
import Image from "next/image"
import { useEffect, useState } from "react"

const Header = () => {
    const [active, setActive] = useState(4)
    const [hidden, setHidden] = useState(true)
    const [top, setTop] = useState(true)
    const [lastScroll, setLastScroll] = useState(0)
    const [hiddenNav, sethiddenNav] = useState(true)
    // mengatur agar nav hilang dan berubah warna saat discroll atau diatas
    const ControlNavbar = () => {
        window.scrollY > lastScroll ? sethiddenNav(false) : sethiddenNav(true)

        setLastScroll(window.scrollY);

        window.scrollY === 0 ? setTop(true) : setTop(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', ControlNavbar);

        return () => {
            window.removeEventListener('scroll', ControlNavbar);
        };
    }, [lastScroll]);
    return (
        <header className={`fixed flex justify-between w-full py-6 px-36 z-50 bg-main-600 items-center transform duration-100 ${top?"bg-opacity-100":"bg-opacity-80"} ${hiddenNav ? "translate-y-0" : "-translate-y-full"}`}>
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