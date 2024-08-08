'use client'

import { usePostContext } from "@/context/postProvider";

const SortingHeader = () => {
    const {setOrder,order,setSize,size,curr,meta} = usePostContext()
    const page = meta.current_page
    const end = page * size;
    const start = 1 + end - size
    return (
        <header className="flex justify-between font-semibold items-center mb-4">
            <div className="">
                <p>Showing {start} - {end} of {meta.total}</p>
            </div>
            <div className="flex gap-4">
                <label htmlFor="size">
                    Select per Page
                    <select name="size" id="size" value={size} className="border-2 ml-2 rounded-md border-slate-300 p-2" onChange={(event) => setSize(event.target.value)}>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="50">50</option>
                    </select>
                </label>
                <label htmlFor="order" >
                    Sort By
                    <select name="order" value={order} id="order" className="border-2 ml-2 rounded-md border-slate-300 p-2" onChange={(event) => setOrder(event.target.value)}>
                        <option value="published_at">Newest</option>
                        <option value="-published_at">Oldest</option>
                    </select>
                </label>
            </div>
        </header>
    )
}
export default SortingHeader