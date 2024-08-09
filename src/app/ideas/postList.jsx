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
            <section className="flex gap-4 flex-wrap justify-start w-full mb-4">
                {post.map((data) => {
                    return (
                        <PostCard key={data.id} id={data.id} title={data.title} update={data.updated_at} image={data.medium_image}/>
                    )
                })}
            </section>
            <PageFooter />
        </section>
    )
}

export default PostList