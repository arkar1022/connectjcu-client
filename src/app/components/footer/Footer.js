import { Container, Box, Text, } from "@chakra-ui/react"

const Footer = () => {
    return (
        <Box width={"100%"} bg={"#3394d7"}>
            <Container  maxW="96em" color={"#fff"} minH={"400px"} zIndex={1001}>
                This is Footer
            </Container>
        </Box>
    )
}

export default Footer