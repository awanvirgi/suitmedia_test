import Image from "next/image"
import moment from "moment";
import 'moment/locale/id';

const PostCard = ({ title, update, image }) => {
    const postDate = (string) => {
        return moment(string).format('D MMMM YYYY');
    }
    return (
        <article className="h-96 max-w-72 min-w-60 border-2 border-slate-10 shadow-xl flex-1">
            <div className="bg-red-400 w-full h-1/2">
                <Image src={image[0]?.url} width={400} height={400} />
            </div>
            <div className="p-4">
                <time className="text-slate-400 font-semibold text-sm">{postDate(update)}</time>
                <h3 className="font-bold text-xl leading-tight ellipsis-multiline">{title}</h3>
            </div>
        </article>
    )
}
export default PostCard