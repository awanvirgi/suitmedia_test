'use client'
import { createContext, useContext, useEffect, useState } from "react";

const PostContext = createContext(undefined);

const PostProvider = ({ children }) => {
    const [order, setOrder] = useState("published_at")
    const [size, setSize] = useState(10)
    const [post, setPost] = useState()
    const [curr, setCurr] = useState(1)

    const fetchData = async (curr, size, order) => {
        try {
            const response = await fetch(`https://suitmedia-backend.suitdev.com/api/ideas?page[number]=${curr}&page[size]=${size}&append[]=small_image&append[]=medium_image&sort=${order}`, {
                headers: {
                    'Accept': 'application/json',
                },
            });
            const data = await response.json()
            setPost(data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        console.log(post)
    }, [post])

    useEffect(() => {
        fetchData(curr, size, order)
    }, [size, order, curr])

    return (
        <PostContext.Provider value={{ curr, setCurr, order, setOrder, size, setSize,post,setPost }}>
            {children}
        </PostContext.Provider>
    )
}

export default PostProvider;
export function usePostContext() {
    return useContext(PostContext)
}