'use client'
import { Select,Input, InputGroup, InputRightElement, Container, Text, Box, Image, HStack, useStatStyles, Grid } from "@chakra-ui/react"
import { poppins, jomhuria, roboto, michroma, plus_jakarta } from "../fonts";
import { IconSearch } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import BlogCard from "../components/blog-card/BlogCard";
import { FetchBlogs } from "../blog_actions";
import { FetchCategories } from "../category_actions";
const Blog = () => {
    const [categories, setCategories] = useState(null)
    const [blogs, setBlogs] = useState(null)
    const [selectedCategory, setSelectedCategory] = useState("")
    const [selectedSort, setSelectedSort] = useState("-date")
    const [isClient, setIsClient] = useState(false)

    const handleCategoryOnChange = (e) => {
        setSelectedCategory(e.target.value)
    }

    useEffect(() => {
        const FetchData = async () => {
            const blogResponse = await FetchBlogs()
            const catResponse = await FetchCategories()

            if (blogResponse.success && catResponse.success) {
                setBlogs(blogResponse.data)
                setCategories(catResponse.data)
            }
        }
        FetchData()
        setIsClient(true)
    },[])

    const handleSortOnChange = (e) => {
        setSelectedSort(e.target.value)
    }
    return isClient &&  (
        <Container maxW="96em" my={8}>
            <Box position={"relative"}>
                <Image filter={"brightness(0.4)"} borderRadius={"10px"} src="/assets/blog_banner.jpeg" height={{ base: "250", md: "400px" }} width={"100%"} objectFit={"cover"} />
                <Text fontSize={{ base: "40px", md: "70px" }} fontWeight={700} className={`${roboto.className}`} color={"#fff"} position={"absolute"} top={"50%"} left={"50%"} transform={"translate(-50%, -50%)"}>
                    BLOG
                </Text>
            </Box>
            <HStack flexDir={{base:"column", md:"row"}} my={4}>
                <HStack justifyContent={"space-between"} w={"100%"}>
                <Select value={selectedCategory} w={"100%"} placeholder="All Category" onChange={handleCategoryOnChange}>
                    {
                        categories?.map((category,index) => (
                            <option key={index} value={category.id}>{category.name}</option>
                        ))
                    }
                </Select>
       
                <Select value={selectedSort} w={"100%"} placeholder="" onChange={handleSortOnChange}>
                    <option value="-date">Recent</option>
                    <option value="date">Older</option>
                </Select>
                </HStack>
                <InputGroup>
                    <Input placeholder='Search' />
                    <InputRightElement _hover={{cursor:"pointer"}}>
                        <IconSearch />
                    </InputRightElement>
                </InputGroup>
            </HStack>
            <Grid my={6} sx={{ 
                gridTemplateColumns: { base: "repeat(1, 1fr)", sm: "repeat(2,1fr)", md: "repeat(3,1fr)", lg: "repeat(4,1fr)" },
                gap: { base: "10px", md: "16px" },}}>
                    {
                        blogs?.map((blog,index) => (
                            <BlogCard blog={blog}/>
                        ))
                    }
  
            </Grid>
        </Container>
    )
}

export default Blog