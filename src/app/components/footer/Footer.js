'use client'
import { poppins } from "@/app/fonts"
import { Container, Box, Text, VStack, Image, Grid, HStack } from "@chakra-ui/react"
import { IconPhoneCall, IconMail } from "@tabler/icons-react"
import { useRouter } from "next/navigation"
const Footer = () => {
    const router = useRouter();
    return (
        <Box pt={4} width={"100%"} bg={"#4cd3fc"}>
            <Container maxW="96em" color={"#fff"} minH={"300px"} zIndex={1001}>
                <Grid my={6} sx={{
                    gridTemplateColumns: { base: "repeat(1, 1fr)", sm: "repeat(1,1fr)", md: "repeat(3,1fr)", lg: "repeat(4,1fr)" },
                    gap: { base: "32px", md: "16px" },
                }}>

                    <VStack alignItems={{ base:"center", md :"flex-start"}}>
                        <Image _hover={{cursor:"pointer"}} onClick={() => router.push('/')} src={"/connectJCU.svg"} height={{ base: "55px", md: "80px" }} />
                        <Text maxW={"240px"} className={`${poppins.className}`}>
                            The ultimate community platform designed exclusively for James Cook University students.
                        </Text>
                    </VStack>
                    <VStack spacing={4} pt={{ base: "0", md: "px" }}>
                        <Text fontSize={"20px"} fontWeight={800} className={`${poppins.className}`}>
                            Menu
                        </Text>
                        <Text _hover={{cursor:"pointer"}} onClick={() => router.push('/blog')}  className={`${poppins.className}`}>
                            Blogs
                        </Text>
                        <Text _hover={{cursor:"pointer"}} onClick={() => router.push('/resources')}  className={`${poppins.className}`}>
                            Resources
                        </Text>
                        <Text _hover={{cursor:"pointer"}} onClick={() => router.push('/qna')}  className={`${poppins.className}`}>
                            Q/A
                        </Text>
                    </VStack>
                    <VStack spacing={4} pt={{ base: "0", md: "px" }}>
                        <Text fontSize={"20px"} fontWeight={800} className={`${poppins.className}`}>
                            JCU
                        </Text>
                        <Text as="a" target="_blank" href="https://learn.jcu.edu.au/" _hover={{cursor:"pointer"}} className={`${poppins.className}`}>
                            LearnJCU
                        </Text>
                        <Text  as="a" target="_blank" href="https://secure.jcu.edu.au/eStudent/login.aspx" _hover={{cursor:"pointer"}} className={`${poppins.className}`}>
                            EStudent
                        </Text>
                        <Text  as="a" target="_blank" href="https://secure.jcu.edu.sg/StudentFirst/" _hover={{cursor:"pointer"}} className={`${poppins.className}`}>
                            Student First
                        </Text>
                    </VStack>
                    <VStack>
                        <Text fontSize={"20px"} fontWeight={800} className={`${poppins.className}`}>
                            Contact
                        </Text>
                        <HStack>
                        <IconPhoneCall size={"20px"} />
                        <Text className={`${poppins.className}`}>
                            +65 81595991
                        </Text>
                        </HStack>
                        <HStack>
                        <IconMail size={"20px"} />
                        <Text className={`${poppins.className}`}>
                            connectJCU@admin.org
                        </Text>
                        </HStack>
                    
                    </VStack>
                </Grid>
                <VStack>
                <Text fontSize={"12px"} sx={{marginTop:"40px"}}>
                    Copyright @ 2024 | connectJCU
                </Text>
                </VStack>
            </Container>
        </Box>
    )
}

export default Footer