import { Spinner, Box, Grid, HStack, Container, Skeleton, VStack, SkeletonText, SkeletonCircle } from "@chakra-ui/react"
export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <Container my={14} maxW={"96em"} display={"flex"} flexDir={"row"}>
            <VStack spacing={8} alignItems={"flex-start"} width={"100%"}>
                <Skeleton borderRadius={"10px"} height={"25px"} width={"80%"} fontWeight={600} color={"#181A2A"} fontSize={{ base: "28px", md: "35px" }} />
                <HStack alignItems={"center"} width={"100%"} justifyContent={"space-between"}>
                    <HStack spacing={{ base: 2, md: 4 }} justifyContent={"flex-start"}>
                        <SkeletonCircle height={"36px"} width={"36px"} objectFit={"cover"} borderRadius={"50%"}/>
                        <Skeleton height={"20px"} width={"90px"} mr={2} color={"#97989F"}/>
                        <Skeleton height={"20px"} width={"90px"} color={"#97989F"} />
                    </HStack>
                    <HStack display={{ base: "flex", md: "flex" }} alignItems={"center"} spacing={{ base: 2, md: 4 }} justifyContent={"center"}>
                        <Box >
                           <SkeletonCircle width={{ base: "24px", md: "28px" }} height={{ base: "24px", md: "28px" }}/>
                        </Box>
                        <Skeleton height={"15px"} width={"50px"}  color={"#97989F"} />
                        <Box width={{ base: "24px", md: "28px" }} height={{ base: "24px", md: "28px" }}>
                        <SkeletonCircle width={{ base: "24px", md: "28px" }} height={{ base: "24px", md: "28px" }}/>
                        </Box>
                        <Skeleton height={"15px"} width={"50px"} color={"#97989F"} />
                    </HStack>
                </HStack>
                <Skeleton
                    height={{ base: "400px", md: "500px" }} borderRadius={"15px"}
                    width={"100%"} objectPosition={"center"} />
            
                    <SkeletonText w={"100%"} spacing={"10px"} noOfLines={7} height={"500px"} />

           
            </VStack>
        </Container>
    )
}