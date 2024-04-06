import EditQna from "./EditQna"
import { FetchCategories } from "@/app/category_actions"
import { FetchDetailQna } from "@/app/qna_actions"

export default async function MainEditQna({params}) {
    const {id} = params
    const resQna = await FetchDetailQna(id)
    const resCat = await FetchCategories()
    return (
        <EditQna resQna={resQna} id={id} resCat={resCat}/>
    )
}