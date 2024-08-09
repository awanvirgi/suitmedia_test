'use client'
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const PostContext = createContext(undefined);

const PostProvider = ({ children }) => {
    const [order, setOrder] = useState("published_at")
    const [size, setSize] = useState(10)
    const [post, setPost] = useState()
    const [meta, setMeta] = useState()
    const [link, setLink] = useState()
    const [curr, setCurr] = useState(1)

    useEffect(() => {
        const localSize = localStorage.getItem('size')
        if (localSize) {
            setSize(localSize)
        }
        const localOrder = localStorage.getItem('order')
        if (localOrder) {
            setOrder(localOrder)
        }
        const localCurr = localStorage.getItem('current')
        if (localCurr) {
            setCurr(localCurr)
        }
    }, [])

    const fetchData = async (curr, size, order) => {
        try {
            const response = await axios.get(`https://suitmedia-backend.suitdev.com/api/ideas`, {
                params: {
                    'page[number]': curr,
                    'page[size]': size,
                    'append[0]': 'small_image',
                    'append[1]': 'medium_image',
                    'sort': order,
                }
            }, {
                headers: {
                    'Accept': 'application/json',
                },
            });
            const { data, links, meta } = response.data
            console.log(response.data)
            setPost(data)
            setLink(links)
            setMeta(meta)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        console.log(link)
    }, [link])

    useEffect(() => {
        fetchData(curr, size, order)
        localStorage.setItem('size', size)
        localStorage.setItem('order', order)
        localStorage.setItem('current', curr)
    }, [size, order, curr])

    return (
        <PostContext.Provider value={{ curr, setCurr, order, setOrder, size, setSize, post, setPost, meta, link}}>
            {children}
        </PostContext.Provider>
    )
}

export default PostProvider;
export function usePostContext() {
    return useContext(PostContext)
}