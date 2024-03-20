'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Divider, Container, VStack, Text, Input, InputGroup, InputLeftElement, InputRightElement, Button, HStack } from "@chakra-ui/react";
import { inter, poppins } from "../fonts";
import { IconMail, IconLock, IconEyeClosed, IconEye } from "@tabler/icons-react";
const Login = ({LoginAccount}) => {
    const [showPassword, setShowPassword] = useState(false);
    const handlePasswordOnClick = () => setShowPassword(!showPassword);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLogin, setIsLogin] = useState(false)
    const router = useRouter()
    const handleLogin = async () => {
        const isLoginSuccess = await LoginAccount(email,password);
        setIsLogin(isLoginSuccess);
        if (isLoginSuccess) {
            router.refresh()
            router.back()
        }
    }
    const handleEmailChange = (e) => {
        e.preventDefault();
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        e.preventDefault();
        setPassword(e.target.value);
    }


    return (
        <Box width={"100%"} bg={"linear-gradient(7deg, rgba(253,255,190,1) 0%, rgba(51,148,215,1) 100%)"}>
        <Container display={"flex"} alignItems={'center'} justifyContent={'center'} maxW="96em" h={"calc(100vh - 60px)"} >
            <Box borderRadius={"5px"} p={5} bg={"#fff"} boxShadow={"2px 4px 10px 0px rgba(148,148,148,0.56)"} maxW={"400px"} width={"100%"}>
                <VStack spacing={6}>
                    <Text color={"#3394d7"} fontSize={"28px"} className={`${poppins.className}`} fontWeight={600}>
                        {
                            isLogin ? "Login" : "Welcome Back"
                        }
                    </Text>
                    <InputGroup>
                        <InputLeftElement pointerEvents='none'>
                            <IconMail color='#d4d4d4' />
                        </InputLeftElement>
                        <Input onChange={handleEmailChange} type='tel' placeholder='Email' />
                    </InputGroup>

                    <InputGroup>
                        <InputLeftElement
                            pointerEvents='none'
                            color='gray.300'
                            fontSize='1.2em'
                        >
                            <IconLock color='#d4d4d4' />
                        </InputLeftElement>
                        <Input onChange={handlePasswordChange} placeholder='Password' type={showPassword ? 'text' : 'password'} />
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
                    <Button my={3} onClick={handleLogin} width={"100%"} _hover={{background:"#3394d7", color:"#fff"}}>
                        Login
                    </Button>
                    <HStack w="100%" textAlign="center" justifyContent={'center'} alignItems={'center'}>
                        <Divider />
                        <Text bg="white" px={2} fontSize="sm" fontWeight="medium" color="gray.500">or</Text>
                        <Divider />
                    </HStack>
                    <HStack>
                        <Text as={"a"} href="/signup" _hover={{cursor:"pointer"}} fontWeight={700} color={"#3394d7"}>
                            Sign Up
                        </Text>
                        <Text>
                            If you don't have an account!
                        </Text>
                    </HStack>
                </VStack>
            </Box>
        </Container>
        </Box>
    )
}

export default Login