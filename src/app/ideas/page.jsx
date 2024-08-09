'use client'
import Image from "next/image"
import PostList from "./postList"
import { usePostContext } from "@/context/postProvider"
import { useEffect } from "react"
const Page = () => {
    return (
        <main className="w-full">
            <section className="w-full h-[440px] relative overflow-hidden flex items-center pt-20 justify-center banner mb-8">
                <div className="absolute h-full w-full -z-10 ">
                    <Image alt="banner" src="/banner.jpg" width={1200} height={720} className=" filter object-cover h-auto w-full brightness-50 " />
                </div>
                <div className="text-center text-white">
                    <h1 className="font-bold text-4xl">Ideas</h1>
                    <p>Where all our great things begin</p>
                </div>
            </section>
            <PostList />
        </main>
    )
}
export default Page