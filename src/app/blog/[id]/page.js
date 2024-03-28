import BlogDetail from "./BlogDetail"
import { FetchDetailBlog } from "@/app/blog_actions"
export default async function MainBlogDetail({params}) {
    const {id} = params
    const res = await FetchDetailBlog(id)
    return(
        <BlogDetail res={res}/>
    )
}