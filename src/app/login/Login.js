'use client';
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Box, Divider, Container, VStack, Text, Input, InputGroup, InputLeftElement, InputRightElement, Button, HStack } from "@chakra-ui/react";
import { inter, poppins } from "../fonts";
import LoginBtn from "./LoginBtn";
import { IconMail, IconLock, IconEyeClosed, IconEye } from "@tabler/icons-react";
const Login = ({ LoginAccount, prev }) => {
    const [showPassword, setShowPassword] = useState(false);
    const handlePasswordOnClick = () => setShowPassword(!showPassword);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLogin, setIsLogin] = useState(false)
    const [isErrorMsg, setIsErrorMsg] = useState(null)
    const router = useRouter()
    const handleLogin = async () => {
        setIsErrorMsg(null)
        const isLoginSuccess = await LoginAccount(email, password);
        setIsLogin(isLoginSuccess.success);
        if (isLoginSuccess.success) {
            router.refresh()
            router.push('/')
            // if (prev.startsWith('/email-verification/')) {
            //     router.push('/');
            //   } else {
            //     router.back(); 
            //   }
        } else {
            setIsErrorMsg(isLoginSuccess.message)
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
                <form style={{width:"100%"}} action={() => handleLogin()}>
                    <VStack spacing={2}>
                        <Text mb={6} color={"#3394d7"} fontSize={"28px"} className={`${poppins.className}`} fontWeight={600}>
                            {
                                isLogin ? "Login" : "Welcome Back"
                            }
                        </Text>
                     
                            <InputGroup mb={6}>
                                <InputLeftElement pointerEvents='none'>
                                    <IconMail color='#d4d4d4' />
                                </InputLeftElement>
                                <Input onChange={handleEmailChange} type='email' placeholder='Email' />
                            </InputGroup>

                            <InputGroup mb={2}>
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
                            <Text color={"red"} minH={"14px"} fontSize={"12px"}>
                               {isErrorMsg}
                            </Text>
                            <LoginBtn />
                     
                        <HStack my={4} w="100%" textAlign="center" justifyContent={'center'} alignItems={'center'}>
                            <Divider />
                            <Text bg="white" px={2} fontSize="sm" fontWeight="medium" color="gray.500">or</Text>
                            <Divider />
                        </HStack>
                        <HStack>
                            <Text as={"a"} href="/signup" _hover={{ cursor: "pointer" }} fontWeight={700} color={"#3394d7"}>
                                Sign Up
                            </Text>
                            <Text>
                                If you don't have an account!
                            </Text>
                        </HStack>
                    </VStack>
                    </form>
                </Box>
            </Container>
        </Box>
    )
}

export default Login