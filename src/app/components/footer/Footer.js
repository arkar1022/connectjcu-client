import { poppins } from "@/app/fonts"
import { Container, Box, Text, VStack, Image, Grid } from "@chakra-ui/react"

const Footer = () => {
    return (
        <Box pt={4} width={"100%"} bg={"#4cd3fc"}>
            <Container maxW="96em" color={"#fff"} minH={"300px"} zIndex={1001}>
                <Grid my={6} sx={{
                    gridTemplateColumns: { base: "repeat(1, 1fr)", sm: "repeat(2,1fr)", md: "repeat(3,1fr)", lg: "repeat(4,1fr)" },
                    gap: { base: "10px", md: "16px" },
                }}>

                    <VStack alignItems={"flex-start"}>
                        <Image src={"/connectJCU.svg"} height={{ base: "55px", md: "80px" }} />
                        <Text className={`${poppins.className}`}>
                            The ultimate community platform designed exclusively for James Cook University students.
                        </Text>
                    </VStack>
                    <VStack spacing={4} pt={{ base: "0", md: "px" }}>
                        <Text fontSize={"20px"} fontWeight={800} className={`${poppins.className}`}>
                            Menu
                        </Text>
                        <Text className={`${poppins.className}`}>
                            Blogs
                        </Text>
                        <Text className={`${poppins.className}`}>
                            Resources
                        </Text>
                        <Text className={`${poppins.className}`}>
                            Q/A
                        </Text>
                    </VStack>
                    <VStack spacing={4} pt={{ base: "0", md: "px" }}>
                        <Text fontSize={"20px"} fontWeight={800} className={`${poppins.className}`}>
                            JCU
                        </Text>
                        <Text className={`${poppins.className}`}>
                            LearnJCU
                        </Text>
                        <Text className={`${poppins.className}`}>
                            EStudent
                        </Text>
                        <Text className={`${poppins.className}`}>
                            student First
                        </Text>
                    </VStack>
                    <VStack alignItems={"flex-start"}>
                        <Text fontSize={"20px"} fontWeight={800} className={`${poppins.className}`}>
                            Contact
                        </Text>
                        <Text className={`${poppins.className}`}>
                        </Text>
                    </VStack>
                </Grid>
                <VStack>
                <Text sx={{marginTop:"40px"}}>
                    Copyright @ 2024 | connectJCU
                </Text>
                </VStack>
            </Container>
        </Box>
    )
}

export default Footer