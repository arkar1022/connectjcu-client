'use client';
import { useState } from "react";
import { Box, Divider, Container, VStack, Text, Input, InputGroup, InputLeftElement, InputRightElement, Button, HStack } from "@chakra-ui/react";
import { inter, poppins } from "../fonts";
import { IconMail, IconUserCircle, IconLockCheck, IconLock, IconEyeClosed, IconEye, IconUser } from "@tabler/icons-react";
const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const handlePasswordOnClick = () => setShowPassword(!showPassword);
    return (
        <Box width={"100%"} bg={"linear-gradient(7deg, rgba(253,255,190,1) 0%, rgba(51,148,215,1) 100%)"}>
        <Container display={"flex"} alignItems={'center'} justifyContent={'center'} maxW="96em" h={"calc(100vh - 60px)"} >
            <Box borderRadius={"5px"} p={5} bg={"#fff"} boxShadow={"2px 4px 10px 0px rgba(148,148,148,0.56)"} maxW={"400px"} width={"100%"}>
                <VStack spacing={6}>
                    <Text color={"#3394d7"} fontSize={"28px"} className={`${poppins.className}`} fontWeight={600}>
                        Welcome!
                    </Text>
                    <InputGroup>
                        <InputLeftElement pointerEvents='none'>
                            <IconUserCircle color='#d4d4d4' />
                        </InputLeftElement>
                        <Input type='text' placeholder='First Name' />
                    </InputGroup>
                    <InputGroup>
                        <InputLeftElement pointerEvents='none'>
                            <IconUserCircle color='#d4d4d4' />
                        </InputLeftElement>
                        <Input type='text' placeholder='Last Name' />
                    </InputGroup>
                    <InputGroup>
                        <InputLeftElement pointerEvents='none'>
                            <IconMail color='#d4d4d4' />
                        </InputLeftElement>
                        <Input type='email' placeholder='Email' />
                    </InputGroup>

                    <InputGroup>
                        <InputLeftElement
                            pointerEvents='none'
                            color='gray.300'
                            fontSize='1.2em'
                        >
                            <IconLock color='#d4d4d4' />
                        </InputLeftElement>
                        <Input placeholder='Password' type={showPassword ? 'text' : 'password'} />
                        <InputRightElement
                            color='gray.300'
                            fontSize='1.2em'
                            onClick={handlePasswordOnClick}
                            _hover={{ cursor: "pointer" }}
                        >
                            {
                                showPassword ?
                                    (<IconEye />) : (<IconEyeClosed />)
                            }
                        </InputRightElement>
                    </InputGroup>
                    <InputGroup>
                        <InputLeftElement
                            pointerEvents='none'
                            color='gray.300'
                            fontSize='1.2em'
                        >
                            <IconLockCheck color='#d4d4d4' />
                        </InputLeftElement>
                        <Input placeholder='Confirm Password' type={showPassword ? 'text' : 'password'} />
                    </InputGroup>
                    <Button my={3} width={"100%"} _hover={{background:"#3394d7", color:"#fff"}}>
                        Sign Up
                    </Button>
                    <HStack w="100%" textAlign="center" justifyContent={'center'} alignItems={'center'}>
                        <Divider />
                        <Text bg="white" px={2} fontSize="sm" fontWeight="medium" color="gray.500">or</Text>
                        <Divider />
                    </HStack>
                    <HStack>
                        <Text as={"a"} href="/login" _hover={{cursor:"pointer"}} fontWeight={700} color={"#3394d7"}>
                            Login
                        </Text>
                        <Text>
                            If you already have an account!
                        </Text>
                    </HStack>
                </VStack>
            </Box>
        </Container>
        </Box>
    )
}

export default SignUp