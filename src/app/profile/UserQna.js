'use client'
import { Grid} from "@chakra-ui/react"
import { useEffect, useState } from "react";
import QnaCard from "../components/qna-card/QnaCard";
import { FetchQna } from "../qna_actions";
const UserQna = ({ user_id }) => {
    const [qnas, setQnas] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            const res = await FetchQna("","","",user_id);
            if(res.success) {
                setQnas(res.data)
            }
        }
        fetchData()
    }, [])
    

    return qnas && (
           
        <Grid my={6} sx={{
            gridTemplateColumns: { base: "repeat(1, 1fr)" },
            gap: { base: "10px", md: "16px" },
        }}>
            {
                qnas?.map((qna, index) => (
                    <QnaCard key={index} qna={qna} />
                ))
            }

        </Grid>
    )
}

export default UserQna