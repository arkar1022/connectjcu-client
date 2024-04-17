'use client'
import { Grid, VStack} from "@chakra-ui/react"
import { useEffect, useState } from "react";
import BlogCard from "../components/blog-card/BlogCard";
import { FetchBlogs } from "../blog_actions";
import { Spinner } from "@chakra-ui/react";
const UserBlog = ({ user_id }) => {
    const [blogs, setBlogs] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            const res = await FetchBlogs("","","",user_id);
            if(res.success) {
                setBlogs(res.data)
            }
        }
        fetchData()
    }, [])
    

    return blogs ? (
           
            <Grid my={6} sx={{
                gridTemplateColumns: { base: "repeat(1, 1fr)", sm: "repeat(2,1fr)", md: "repeat(3,1fr)", lg: "repeat(4,1fr)" },
                gap: { base: "10px", md: "16px" },
            }}>
                {
                    blogs?.map((blog, index) => (
                        <BlogCard key={index} blog={blog} />
                    ))
                }

            </Grid>
    ) : (
        <VStack >
            <Spinner />
        </VStack>
    
    )
}

export default UserBlog