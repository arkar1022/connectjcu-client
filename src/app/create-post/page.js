import CreatePost from "./CreatePost"
import { FetchCategories } from "../category_actions"



export default async function MainCreatePost() {
    const res = await FetchCategories()
    return (
        <CreatePost res={res}/>
    )
}