"use client";
import { Container, Image, Box, Text, VStack, HStack, Grid, GridItem } from "@chakra-ui/react";
import { poppins, jomhuria, roboto, michroma, plus_jakarta } from "../fonts";
import { IconBooks, IconSchool, IconCalendarMonth } from "@tabler/icons-react";
const Home = () => {
    return (
        <Container maxW="96em" mt={8}>
            <Box position={"relative"}>
                <Image filter={"brightness(0.4)"} borderRadius={"5px"} src="/assets/home_banner.jpg" height={{ base: "250", md: "400px" }} width={"100%"} objectFit={"cover"} />
                <Text fontSize={{ base: "40px", md: "70px" }} fontWeight={700} className={`${roboto.className}`} color={"#fff"} position={"absolute"} top={"50%"} left={"50%"} transform={"translate(-50%, -50%)"}>
                    HOME
                </Text>
            </Box>
            <VStack my={8} mb={"64px"}>
                <Text fontWeight={700} fontSize={{ base: "30px", md: "46px" }} className={`${michroma.className}`} color={"#3394d7"}>
                    connectJCU
                </Text>
                <HStack flexDirection={{ base: "column", md: "row" }}>
                    <Box flex={"1"} width={"100%"}>
                        <Image src="/assets/student_com.jpg" />
                    </Box>
                    <Text lineHeight={{ base: "30px", md: "30px", lg: "35px" }} width={"100%"} flex={"1"} mt={8} textAlign={"justify"} px={4} fontSize={{ base: "16px", md: "18px" }} className={`${plus_jakarta.className}`}>
                        Welcome to <b>connectJCU</b>, the ultimate community platform designed exclusively for James Cook University
                        students. Here, students can come together to connect, share, and engage in meaningful discussions. Whether
                        you're looking to share your experiences through blogs, discover insightful articles and resources, or seek
                        answers to burning questions, <b>connectJCU</b> has you covered. Our platform offers a diverse range of features,
                        including a blog section where students can showcase their stories and insights, a repository of articles and
                        resources for academic and personal growth, and a dedicated Q&A section where students can seek advice and support
                        from their peers. Join us today and become a part of the vibrant our community!
                    </Text>
                </HStack>

            </VStack>
            <Grid columnGap={5} rowGap={{base:"40px",md:5}} my={"64px"} gridTemplateColumns={{ base: "repeat(1,1fr)", sm: "repeat(1,1fr)", md: "repeat(3,1fr)" }}>
                <VStack>
                    <Box as="a" target="_blank" href="https://learn.jcu.edu.au/" _hover={{ transform: "scale(1.05)", cursor: "pointer", color:"#3394d7" }} transition={"all 0.2s ease"} maxW="400px" borderRadius={"5px"} p={5} bg={"#fff"} boxShadow={"2px 4px 10px 0px rgba(148,148,148,0.56)"} width={"100%"} minH={"200px"}>
                        <VStack spacing={7}>
                            <IconBooks fontSize={"40px"} size={"70px"} color="#bdbdbd" fontWeight={500} />
                            <Text className={`${roboto.className}`} fontSize={"32px"}>Learn JCU</Text>
                        </VStack>
                    </Box>
                </VStack>
                <VStack>
                    <Box  as="a" target="_blank" href="https://secure.jcu.edu.au/eStudent/login.aspx" _hover={{ transform: "scale(1.05)", cursor: "pointer", color:"#3394d7" }} transition={"all 0.2s ease"} maxW="400px" borderRadius={"5px"} p={5} bg={"#fff"} boxShadow={"2px 4px 10px 0px rgba(148,148,148,0.56)"} width={"100%"} minH={"200px"}>
                    <VStack spacing={7}>
                            <IconSchool fontSize={"40px"} size={"70px"} color="#bdbdbd" />
                            <Text className={`${roboto.className}`} fontSize={"32px"}>E Student</Text>
                        </VStack>
                    </Box>
                </VStack>
                <VStack>
                    <Box  as="a" target="_blank" href="https://secure.jcu.edu.sg/StudentFirst/" _hover={{ transform: "scale(1.05)", cursor: "pointer", color:"#3394d7" }} transition={"all 0.2s ease"} maxW="400px" borderRadius={"5px"} p={5} bg={"#fff"} boxShadow={"2px 4px 10px 0px rgba(148,148,148,0.56)"} width={"100%"} minH={"200px"}>
                    <VStack spacing={7}>
                            <IconCalendarMonth fontSize={"40px"} size={"70px"} color="#bdbdbd" />
                            <Text className={`${roboto.className}`} fontSize={"32px"}>Student First</Text>
                        </VStack>
                    </Box>
                </VStack>
            </Grid>
        </Container>
    )
}

export default Home