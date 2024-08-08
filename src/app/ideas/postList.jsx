'use client'
import PageFooter from "@/components/list/pageFooter"
import PostCard from "@/components/list/postCard"
import SortingHeader from "@/components/list/sortingHeader"
import { usePostContext } from "@/context/postProvider"


const PostList = () => {
    const { post } = usePostContext()
    if(!post) return(
        <div></div>
    )
    return (
        <section className="px-36">
            <SortingHeader />
            <section className="flex gap-4 flex-wrap justify-between w-full mb-4">
                {post?.data.map((data) => {
                    return (
                        <PostCard id={data.id} title={data.title} update={data.updated_at} image={data.small_image}/>
                    )
                })}
            </section>
            <PageFooter />
        </section>
    )
}

export default PostList