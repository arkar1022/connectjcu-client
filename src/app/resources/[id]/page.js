import ResourceDetail from "./ResourceDetail"
import { FetchDetailResource } from "@/app/resource_actions"
export default async function MainResourceDetail({params}) {
    const {id} = params
    const res = await FetchDetailResource(id)
    return(
        <ResourceDetail res={res}/>
    )
}