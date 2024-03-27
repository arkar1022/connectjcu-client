"use client"
import { Container, HStack, Image, VStack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { IconUser, IconMail, IconCalendar } from "@tabler/icons-react";
import { plus_jakarta } from "../fonts";
export default function Profile({res}) {
    const [isClient, setIsClient] = useState(false)
    const [user, setUser] = useState(null)
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const joinDate = new Date(res.data.date_joined).toLocaleDateString('en-GB', options);
    useEffect(() => {
        if (res.success) {
            setUser(res.data)
        }
        setIsClient(true)
    }, [])
    return isClient && (
        <Container my={8} maxW={"96em"}>
            {user ? (
                <VStack spacing={6}>
                    <Image border={{base:"5px solid #3394d7", md:"8px solid #3394d7"}} 
                    borderRadius={"50%"} 
                    objectFit={"cover"} 
                    objectPosition={"center"} 
                    width={{base:"100px", md:"250px"}} 
                    height={{base:"100px", md:"250px"}} 
                    src={user.profile_image} />
                    <VStack spacing={4} alignItems={"flex-start"}>
                    <HStack  fontSize={{base:"16px", md:"20px"}} gap={"40px"}>
                    <IconUser />
                    <Text  className={`${plus_jakarta.className}`} >
                    {user.first_name} {user.last_name}
                    </Text>
                    </HStack>
                    <HStack  fontSize={{base:"16px", md:"20px"}} gap={"40px"}>
                    <IconMail/>
                    <Text  className={`${plus_jakarta.className}`} >
                    {user.email}
                    </Text>
                    </HStack>
                    <HStack  fontSize={{base:"16px", md:"20px"}} gap={"40px"}>
                    <IconCalendar/>
                    <Text  className={`${plus_jakarta.className}`} >
                    {joinDate} <spam style={{color:"rgba(0,0,0,0.5)", fontSize:"16px"}}>(Joined)</spam>
                    </Text>
                    </HStack>
                    </VStack>
                </VStack>
            ) : (
                <Box>Erro Fetching Data</Box>
            )}

        </Container>
    )
}