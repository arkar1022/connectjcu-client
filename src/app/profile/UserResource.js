'use client'
import { Grid} from "@chakra-ui/react"
import { useEffect, useState } from "react";
import ResourceCard from "../components/resource-card/ResourceCard";
import { FetchResources } from "../resource_actions";
const UserResource = ({ user_id }) => {
    const [resources, setResources] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            const res = await FetchResources("","","",user_id);
            if(res.success) {
                setResources(res.data)
            }
        }
        fetchData()
    }, [])
    

    return resources && (
           
            <Grid my={6} sx={{
                gridTemplateColumns: { base: "repeat(1, 1fr)", sm: "repeat(2,1fr)", md: "repeat(3,1fr)", lg: "repeat(4,1fr)" },
                gap: { base: "10px", md: "16px" },
            }}>
                {
                    resources?.map((resource, index) => (
                        <ResourceCard key={index} resource={resource} />
                    ))
                }

            </Grid>
    )
}

export default UserResource