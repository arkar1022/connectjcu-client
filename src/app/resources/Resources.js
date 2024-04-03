'use client'
import { Select, Input, InputGroup, InputRightElement, Container, Text, Box, Image, HStack, useStatStyles, Grid, Spinner } from "@chakra-ui/react"
import { poppins, jomhuria, roboto, michroma, plus_jakarta } from "../fonts";
import { IconSearch } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import ResourceCard from "../components/resource-card/ResourceCard";
const Resources = ({ resourceResponse, catResponse }) => {
    const [categories, setCategories] = useState(null)
    const [resources, setResources] = useState(null)
    const [selectedCategory, setSelectedCategory] = useState("")
    const [selectedSort, setSelectedSort] = useState("-date")
    const [isClient, setIsClient] = useState(false)

    const handleCategoryOnChange = (e) => {
        setSelectedCategory(e.target.value)
    }

    useEffect(() => {
        if (resourceResponse.success && catResponse.success) {
            setResources(resourceResponse.data)
            setCategories(catResponse.data)
        }
        setIsClient(true)
    }, [])

    const handleSortOnChange = (e) => {
        setSelectedSort(e.target.value)
    }
    return isClient && (
        <Container maxW="96em" my={8}>
            <Box position={"relative"}>
                <Image filter={"brightness(0.4)"} borderRadius={"10px"} src="/assets/resource_banner.jpg" height={{ base: "250", md: "400px" }} width={"100%"} objectFit={"cover"} />
                <Text fontSize={{ base: "40px", md: "70px" }} fontWeight={700} className={`${roboto.className}`} color={"#fff"} position={"absolute"} top={"50%"} left={"50%"} transform={"translate(-50%, -50%)"}>
                    RESOURCE
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
                        <option value="-date">Recent</option>
                        <option value="date">Older</option>
                    </Select>
                </HStack>
                <InputGroup>
                    <Input placeholder='Search' />
                    <InputRightElement _hover={{ cursor: "pointer" }}>
                        <IconSearch />
                    </InputRightElement>
                </InputGroup>
            </HStack>
            <Grid my={6} sx={{
                gridTemplateColumns: { base: "repeat(1, 1fr)", sm: "repeat(2,1fr)", md: "repeat(3,1fr)", lg: "repeat(5,1fr)" },
                gap: { base: "10px", md: "16px" },
            }}>
                {
                    resources?.map((resource, index) => (
                        <ResourceCard key={index} resource={resource} />
                    ))
                }

            </Grid>
        </Container>
    )
}

export default Resources