'use client'

import { useState } from "react"

const PageFooter = () => {
    const [active, setActive] = useState(1)
    return (
        <footer className="flex justify-center items-center gap-2 py-10">
            <div> Kiri banget</div>
            <div> Kiri </div>
            <div className={`${active === 1 && "bg-main-600"} p-3 leading-none rounded-md`}>1</div>
            <div className={`${active === 2 && "bg-main-600"} p-3 leading-none rounded-md`}>2</div>
            <div className={`${active === 3 && "bg-main-600"} p-3 leading-none rounded-md`}>3</div>
            <div className={`${active === 4 && "bg-main-600"} p-3 leading-none rounded-md`}>4</div>
            <div className={`${active === 5 && "bg-main-600"} p-3 leading-none rounded-md`}>5</div>
            <div> kanan </div>
            <div> kanan banget </div>
        </footer>
    )
}
export default PageFooter