'use client';

import { usePostContext } from "@/context/postProvider";
import { useState } from "react";

const PageFooter = () => {
    const { curr, setCurr, meta } = usePostContext();
    const [active, setActive] = useState(1);

    const handlePage = (label) => {
        if (label === "&laquo; Previous" && meta.links[0]?.url) {
            const prevPage = new URL(meta.links[0].url).searchParams.get('page[number]');
            setCurr(Number(prevPage));
        } else if (label === "Next &raquo;" && meta.links[meta.links.length - 1]?.url) {
            const nextPage = new URL(meta.links[meta.links.length - 1].url).searchParams.get('page[number]');
            setCurr(Number(nextPage));
        } else if (label === "&laquo; First" && meta.links[1]?.url) {
            const firstPage = new URL(meta.links[1].url).searchParams.get('page[number]');
            setCurr(Number(firstPage));
        } else if (label === "&raquo; Last" && meta.links[meta.links.length - 2]?.url) {
            const lastPage = new URL(meta.links[meta.links.length - 2].url).searchParams.get('page[number]');
            setCurr(Number(lastPage));
        } else if (typeof +label === 'number' && !isNaN(+label)) {
            setCurr(+label);
        }
    };

    const setArrow = (data) => {
        if (data === "&laquo; Previous") {
            return "<";
        } if (data === "Next &raquo;") {
            return ">";
        } if (data === "&laquo; First") {
            return "<<";
        } if (data === "&raquo; Last") {
            return ">>";
        }
        return data;
    };

    return (
        <footer className="flex justify-center items-center gap-2 py-10">
            <button
                onClick={() => handlePage("&laquo; First")}
                className="p-3 leading-none rounded-md cursor-pointer"
                disabled={!meta?.links[1]?.url}
            >
                {setArrow("&laquo; First")}
            </button>
            {meta?.links.map((item, index) => (
                <button
                    key={index}
                    onClick={() => handlePage(item.label)}
                    className={`p-3 leading-none rounded-md ${item.active ? "bg-main-600 text-white" : ""}`}
                    disabled={item.active || !item.url}
                >
                    {setArrow(item.label)}
                </button>
            ))}
            <button
                onClick={() => handlePage("&raquo; Last")}
                className="p-3 leading-none rounded-md cursor-pointer"
                disabled={!meta?.links[meta.links.length - 2]?.url}
            >
                {setArrow("&raquo; Last")}
            </button>
        </footer>
    );
};

export default PageFooter;
