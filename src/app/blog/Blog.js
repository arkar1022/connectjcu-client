'use client'
import { Select, Stack, Input, InputGroup, InputRightElement, Container, Text, Box, Image, HStack, useStatStyles, Grid, Spinner, slideFadeConfig } from "@chakra-ui/react"
import { poppins, jomhuria, roboto, michroma, plus_jakarta } from "../fonts";
import { IconSearch } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import BlogCard from "../components/blog-card/BlogCard";
import { useRouter } from "next/navigation";
const Blog = ({ blogResponse, catResponse }) => {
    const [categories, setCategories] = useState(null)
    const [blogs, setBlogs] = useState(null)
    const [selectedCategory, setSelectedCategory] = useState("")
    const [selectedSort, setSelectedSort] = useState("-created_at")
    const [search, setSearch] = useState("")
    const [searchValue, setSearchValue] = useState("")
    const [isClient, setIsClient] = useState(false)
    const AsTitle = "Title (A -> Z)"
    const DeTitle = "Title (Z -> A)"
    const router = useRouter()

    const handleSearchOnClick  = (e) => {
        setSearch(searchValue)
    }

    const handleKeyDown = (e) => {
        console.log(e.key)
        if (e.key === 'Enter') {
            handleSearchOnClick()
        }
      };

    const handleSearchOnChange  = (e) => {
        e.preventDefault()
        setSearchValue(e.target.value)
    }
    
    const handleCategoryOnChange = (e) => {
        e.preventDefault()
        setSelectedCategory(e.target.value)
    }
    useEffect(() => {
        router.push(`?sort=${selectedSort}&category=${selectedCategory}&search=${search}`)
    }, [selectedCategory, selectedSort, search ])
    

    useEffect(() => {
        if (blogResponse.success && catResponse.success) {
            setBlogs(blogResponse.data)
            setCategories(catResponse.data)
        }
        setIsClient(true)
    }, [blogResponse, catResponse])

    const handleSortOnChange = (e) => {
        setSelectedSort(e.target.value)
    }
    return isClient && (
        <Container maxW="96em" my={8}>
            <Box position={"relative"}>
                <Image filter={"brightness(0.4)"} borderRadius={"10px"} src="/assets/blog_banner.jpeg" height={{ base: "250", md: "400px" }} width={"100%"} objectFit={"cover"} />
                <Text fontSize={{ base: "40px", md: "70px" }} fontWeight={700} className={`${roboto.className}`} color={"#fff"} position={"absolute"} top={"50%"} left={"50%"} transform={"translate(-50%, -50%)"}>
                    BLOG
                </Text>
            </Box>
            <HStack flexDir={{ base: "column", md: "row" }} my={4}>
                <HStack justifyContent={"space-between"} w={"100%"}>
                    <Select value={selectedCategory} w={"100%"} placeholder="All Category" onChange={handleCategoryOnChange}>
                        {
                            categories?.map((category, index) => (
                                <option key={index} value={category.id}>{category.name}</option>
                            ))
                        }
                    </Select>

                    <Select value={selectedSort} w={"100%"} placeholder="" onChange={handleSortOnChange}>
                        <option value="-created_at">Recent</option>
                        <option value="created_at">Older</option>
                        <option value="-view_count">Popular</option>
                        <option value="title">{AsTitle}</option>
                        <option value="-title">{DeTitle}</option>
                    </Select>
                </HStack>
                <InputGroup>
                    <Input onKeyDown={handleKeyDown}  onChange={handleSearchOnChange} placeholder='Search' />
                    <InputRightElement onClick={() => handleSearchOnClick()}  _hover={{ cursor: "pointer" }}>
                        <IconSearch />
                    </InputRightElement>
                </InputGroup>
            </HStack>
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
            {
                blogs?.length < 1 && (
                    <Stack>
                        <Text>
                            NO BLOG FOUND
                        </Text>
                    </Stack>
                )
            }
        </Container>
    )
}

export default Blog