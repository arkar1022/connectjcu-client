import EditBlog from "./EditBlog"
import { FetchCategories } from "@/app/category_actions"
import { FetchDetailBlog } from "@/app/blog_actions"

export default async function MainEditBlog({params}) {
    const {id} = params
    const resBlog = await FetchDetailBlog(id)
    const resCat = await FetchCategories()
    return (
        <EditBlog resBlog={resBlog} id={id} resCat={resCat}/>
    )
}