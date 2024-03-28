import { Spinner, Box, Grid, HStack, Container, Skeleton, VStack } from "@chakra-ui/react"
export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <Container maxW="96em" my={8}>
            <VStack spacing={3} position={"relative"}>
                <Skeleton borderRadius={"10px"} height={{ base: "250px", md: "400px" }} width={"100%"} />
                <HStack w={"100%"} height={"max-content"} flexDir={{ base: "column", md: "row" }} my={2}>
                    <HStack flex={1} justifyContent={"space-between"} w={"100%"}>
                        <Skeleton height={"40px"} w={"100%"} />
                        <Skeleton height={"40px"} w={"100%"} />
                    </HStack>
                    <Skeleton height={"40px"} flex={{base:"none", md:1}} w={"100%"} />
                </HStack>
                <Grid w={"100%"} sx={{
                    gridTemplateColumns: { base: "repeat(1, 1fr)", sm: "repeat(2,1fr)", md: "repeat(3,1fr)", lg: "repeat(4,1fr)" },
                    gap: { base: "10px", md: "16px" },
                }}>
                    {
                        [1,2,3,4].map((num, index) => (
                            <Skeleton borderRadius={"10px"} key={num} height={"410px"} width={"100%"} />
                        ))
                    }

                </Grid>
            </VStack>
        </Container>
    )
}