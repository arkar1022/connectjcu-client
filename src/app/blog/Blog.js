'use client'
import { Select,Input, InputGroup, InputRightElement, Container, Text, Box, Image, HStack, useStatStyles, Grid } from "@chakra-ui/react"
import { poppins, jomhuria, roboto, michroma, plus_jakarta } from "../fonts";
import { IconSearch } from "@tabler/icons-react";
import { useState } from "react";
import BlogCard from "../components/blog-card/BlogCard";
const Blog = () => {
    const [selectedCategory, setSelectedCategory] = useState("")
    const [selectedSort, setSelectedSort] = useState("-date")
    const handleCategoryOnChange = (e) => {
        setSelectedCategory(e.target.value)
    }
    const handleSortOnChange = (e) => {
        setSelectedSort(e.target.value)
    }
    return (
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
                    <option value="IT">IT</option>
                    <option value="Business">Business</option>
                    <option value="MBA">MBA</option>
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
               <BlogCard />
               <BlogCard />
               <BlogCard />
               <BlogCard />
               <BlogCard />
               <BlogCard />
            </Grid>
        </Container>
    )
}

export default Blog