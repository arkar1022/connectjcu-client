'use client'
import { useRouter } from "next/navigation"
import { poppins, roboto } from "@/app/fonts"
import { Box,Container, VStack, Text, Button } from "@chakra-ui/react"
import { IconMailCheck, IconMailCancel } from "@tabler/icons-react"
import { useEffect, useState } from "react"
export default function Verified({isVerified}) {
    const [isClient, setIsClient] = useState(false)
    const router = useRouter()
    useEffect(() => {
        setIsClient(true)
    },[])
    return isClient && (
        <Box width={"100%"} bg={"linear-gradient(7deg, rgba(253,255,190,1) 0%, rgba(51,148,215,1) 100%)"}>
            <Container display={"flex"} alignItems={'center'} justifyContent={'center'} maxW="96em" h={"calc(100vh - 60px)"} >
                <Box borderRadius={"5px"} p={5} bg={"#fff"} boxShadow={"2px 4px 10px 0px rgba(148,148,148,0.56)"} maxW={"400px"} width={"100%"}>
                <VStack spacing={5}>
                    {
                        isVerified ? (
                            <>
                            <IconMailCheck color="#34B233" size={"40px"} />
                            <Text className={`${poppins.className}`}>
                                Your Email has been Verified
                            </Text>
                            <Button onClick={()=>router.push('/login')} _hover={{background:"#1773b3"}} color={"#fff"} bg={"#3394d7"}>
                                Login
                            </Button>
                            </>
                        ): (
                            <>
                            <IconMailCancel color="red" size={"40px"} />
                            <Text className={`${poppins.className}`}>
                                Your Verificaiton OTP has been expired!
                            </Text>
                            <Button _hover={{background:"#1773b3"}} color={"#fff"} bg={"#3394d7"}>
                                Resend Code
                            </Button>
                            </>
                        )
                    }
               
                </VStack>
                </Box>
            </Container>
        </Box>
    )

}