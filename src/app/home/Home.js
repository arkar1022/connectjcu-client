"use client";
import { Container, Image, Box, Text, VStack, HStack } from "@chakra-ui/react";
import { poppins, jomhuria, roboto, michroma, plus_jakarta } from "../fonts";
const Home = () => {
    return (
        <Container maxW="96em" mt={8}>
            <Box position={"relative"}>
                <Image filter={"brightness(0.4)"} borderRadius={"5px"} src="/assets/home_banner.jpg" height={{ base: "250", md: "400px" }} width={"100%"} objectFit={"cover"} />
                <Text fontSize={{ base: "40px", md: "70px" }} fontWeight={700} className={`${roboto.className}`} color={"#fff"} position={"absolute"} top={"50%"} left={"50%"} transform={"translate(-50%, -50%)"}>
                    HOME
                </Text>
            </Box>
            <VStack my={8}>
                <Text fontWeight={700} fontSize={{base:"30px",md:"46px"}} className={`${michroma.className}`} color={"#3394d7"}>
                    connectJCU
                </Text>
                <HStack flexDirection={{base:"column", md:"row"}}>
                    <Box flex={"1"} width={"100%"}>
                        <Image src="/assets/student_com.jpg" />
                    </Box>
                    <Text lineHeight={{base:"30px",md:"30px",lg:"35px"}} width={"100%"} flex={"1"} mt={8} textAlign={"justify"} px={4} fontSize={{base:"16px",md:"18px"}} className={`${plus_jakarta.className}`}>
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
        </Container>
    )
}

export default Home