'use client'
import { Select, Stack, Input, InputGroup, InputRightElement, Container, Text, Box, Image, HStack, useStatStyles, Grid, Spinner, slideFadeConfig } from "@chakra-ui/react"
import { poppins, jomhuria, roboto, michroma, plus_jakarta } from "../fonts";
import { IconSearch } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import QnaCard from "../components/qna-card/QnaCard";
const Qna = ({ qnaResponse, catResponse }) => {
    const [categories, setCategories] = useState(null)
    const [qnas, setQnas] = useState(null)
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
        if (qnaResponse.success && catResponse.success) {
            setQnas(qnaResponse.data)
            setCategories(catResponse.data)
        }
        setIsClient(true)
    }, [qnaResponse, catResponse])

    const handleSortOnChange = (e) => {
        setSelectedSort(e.target.value)
    }
    return isClient && (
        <Container maxW="96em" my={8}>
            <Box position={"relative"}>
                <Image filter={"brightness(0.4)"} objectPosition={"center"} borderRadius={"10px"} src="/assets/qna_banner.png" height={{ base: "250", md: "400px" }} width={"100%"} objectFit={"cover"} />
                <Text fontSize={{ base: "40px", md: "70px" }} fontWeight={700} className={`${roboto.className}`} color={"#fff"} position={"absolute"} top={"50%"} left={"50%"} transform={"translate(-50%, -50%)"}>
                    Q/A
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
                gridTemplateColumns: { base: "repeat(1, 1fr)" },
                gap: { base: "10px", md: "16px" },
            }}>
                {
                    qnas?.map((qna, index) => (
                        <QnaCard key={index} qna={qna} />
                    ))
                }

            </Grid>
            {
                qnas?.length < 1 && (
                    <Stack>
                        <Text>
                            NO QUESTION FOUND
                        </Text>
                    </Stack>
                )
            }
        </Container>
    )
}

export default Qna