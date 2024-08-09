'use client'
import { usePostContext } from "@/context/postProvider"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

const Header = () => {
    const pathname = usePathname();
    useEffect(()=>{
        setActive(pathname)
    },[pathname])
    const [active, setActive] = useState()
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
        <header className={`fixed flex justify-between w-full py-6 px-36 z-50 bg-main-600 items-center transform duration-100 ${top ? "bg-opacity-100" : "bg-opacity-80"} ${hiddenNav ? "translate-y-0" : "-translate-y-full"}`}>
            <div className="h-auto w-36">
                <Image alt="logo" priority src="/logo.png" width={400} height={400} className="object-cover" />
            </div>
            <nav>
                <ul className="flex gap-6">
                    <li className={`text-white p-1 cursor-pointer ${active == "/" && "border-b-4"}`}><Link href="/">Work</Link> </li>
                    <li className={`text-white p-1 cursor-pointer ${active == "/about" && "border-b-4"}`}><Link href="/about">About</Link> </li>
                    <li className={`text-white p-1 cursor-pointer ${active == "/services" && "border-b-4"}`}><Link href="/services">Services</Link> </li>
                    <li className={`text-white p-1 cursor-pointer ${active == "/ideas" && "border-b-4"}`}><Link href="/ideas">Ideas</Link> </li>
                    <li className={`text-white p-1 cursor-pointer ${active == "/careers" && "border-b-4"}`}><Link href="/careers">Careers</Link> </li>
                    <li className={`text-white p-1 cursor-pointer ${active == "/contact" && "border-b-4"}`}><Link href="/contact">Contact</Link> </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header