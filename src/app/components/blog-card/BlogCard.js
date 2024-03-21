"use client";
import { poppins, roboto, work_sans } from "@/app/fonts";
import { Box, Button, Text, Badge, VStack, Image, HStack } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
const BlogCard = () => {
    return (
        <Box transition={"all 0.2s ease-in"} _hover={{ cursor: "pointer", transition: "all 0.2s ease-in", transform: "scale(1.02)" }} borderRadius={"10px"} width={"100%"} boxShadow={"0px 0px 6px -1px rgba(196,196,196,0.75)"}>
            <VStack spacing={4} p={3}>
                <Image borderRadius={"12px"} src={"https://www.jcu.edu.sg/__data/assets/image/0006/2075199/Students-at-campus-front-web.jpg"}
                    height={"220px"} width={"100%"} objectFit={"cover"} objectPosition={"center"} />
                <VStack px={3} spacing={4}>

                    <Box width={"100%"}>
                        <Badge mb={2} bg={"#3394d7"} fontSize={"10px"} padding={1} variant="solid" borderRadius={"5px"} colorScheme='green'> Technology </Badge>
                        <Text fontSize={"16px"} className={`${poppins.className}`} fontWeight={600} overflow={"hidden"} height={"76px"} sx={{ overflowWrap: 'break-word' }}>
                            The Impact of Tech on the Workplace: How Technology is Changing  Workplace: How Technology is Changing
                        </Text>
                    </Box>
                    <HStack spacing={{ base: 2, md: 4 }} width={"100%"} justifyContent={"flex-start"}>
                        <Image height={"36px"} width={"36px"} objectFit={"cover"} borderRadius={"50%"} src="https://t3.ftcdn.net/jpg/04/97/66/28/360_F_497662812_7rGW6PMBJR9AbrKcGgN5S1luXYTjH92i.jpg" />
                        <Text color={"#97989F"} fontSize={"12px"} className={`${work_sans.className}`}>
                            Tracy Wilson
                        </Text>
                        <Text color={"#97989F"} fontSize={{ base: "12px", md: "14px" }} className={`${work_sans.className}`}>
                            August 20, 2024
                        </Text>
                    </HStack>
                </VStack>
            </VStack>

        </Box>
    )
}
export default BlogCard
