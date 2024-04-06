import QnaDetail from "./QnaDetail"
import { FetchDetailQna } from "@/app/qna_actions"
export default async function MainBlogDetail({params}) {
    const {id} = params
    const res = await FetchDetailQna(id)
    return(
        <QnaDetail res={res}/>
    )
}