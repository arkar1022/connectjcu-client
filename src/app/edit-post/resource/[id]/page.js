import EditResource from "./EditResource"
import { FetchCategories } from "@/app/category_actions"
import { FetchDetailResource } from "@/app/resource_actions"

export default async function MainEditBlog({params}) {
    const {id} = params
    const resRes = await FetchDetailResource(id)
    const resCat = await FetchCategories()
    return (
        <EditResource resRes={resRes} id={id} resCat={resCat}/>
    )
}