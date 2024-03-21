'use client';
import { useState } from "react";
import { Box, Divider, Container, VStack, Text, Input, InputGroup, InputLeftElement, InputRightElement, Button, HStack } from "@chakra-ui/react";
import { inter, poppins } from "../fonts";
import { IconMail, IconUserCircle, IconLockCheck, IconLock, IconEyeClosed, IconEye, IconUser } from "@tabler/icons-react";
import RegisterBtn from "./RegisterBtn";
const SignUp = ({ RegisterAccount }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState(null)
    const [firstName, setFirstName] = useState(null)
    const [lastName, setLastName] = useState(null)
    const [isRegistered, setIsRegistered] = useState(false)
    const [isErrorMsg, setIsErrorMsg] = useState(null)

    const handleEmailOnChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordOnChange = (e) => {
        setPassword(e.target.value)
    }
    const handleConfirmPasswordOnChange = (e) => {
        setConfirmPassword(e.target.value)
    }
    const handleFirstNameOnChange = (e) => {
        setFirstName(e.target.value)
    }
    const handleLastNameOnChange = (e) => {
        setLastName(e.target.value)
    }

    const handleRegisterOnClick = async (e) => {
        if (email && firstName && lastName && password && confirmPassword) {
            if (password === confirmPassword) {
                const response = await RegisterAccount(email, firstName, lastName, password)
         
                if (response.success) {
                    setIsRegistered(true)
                } else {
                    setIsErrorMsg(response.message)
                }
            } else {
                setIsErrorMsg("Password does not match")
            }
        } else {
            setIsErrorMsg("Please provide all the information")
        }




    }

    const handlePasswordOnClick = () => setShowPassword(!showPassword);
    return (
        <Box width={"100%"} bg={"linear-gradient(7deg, rgba(253,255,190,1) 0%, rgba(51,148,215,1) 100%)"}>
            <Container display={"flex"} alignItems={'center'} justifyContent={'center'} maxW="96em" h={"calc(100vh - 60px)"} >
                <Box borderRadius={"5px"} p={5} bg={"#fff"} boxShadow={"2px 4px 10px 0px rgba(148,148,148,0.56)"} maxW={"400px"} width={"100%"}>
                    {isRegistered ? (
                        <>
                        <VStack spacing={4}>
                         <IconMail color="#35b5cc" size={"40px"} />
                            <Text className={`${poppins.className}`}>
                                Verification mail has been sent!
                            </Text>
                            {/* <Button onClick={()=>router.push('/login')} _hover={{background:"#1773b3"}} color={"#fff"} bg={"#3394d7"}>
                                Login
                            </Button> */}
                            </VStack>
                        </>
                    ) : (
                        <form style={{ width: "100%" }} action={() => handleRegisterOnClick()}>
                        <VStack spacing={6}>
                            <Text color={"#3394d7"} fontSize={"28px"} className={`${poppins.className}`} fontWeight={600}>
                                Welcome!
                            </Text>
                            <InputGroup>
                                <InputLeftElement pointerEvents='none'>
                                    <IconUserCircle color='#d4d4d4' />
                                </InputLeftElement>
                                <Input onChange={handleFirstNameOnChange} type='text' placeholder='First Name' />
                            </InputGroup>
                            <InputGroup>
                                <InputLeftElement pointerEvents='none'>
                                    <IconUserCircle color='#d4d4d4' />
                                </InputLeftElement>
                                <Input onChange={handleLastNameOnChange} type='text' placeholder='Last Name' />
                            </InputGroup>
                            <InputGroup>
                                <InputLeftElement pointerEvents='none'>
                                    <IconMail color='#d4d4d4' />
                                </InputLeftElement>
                                <Input onChange={handleEmailOnChange} type='email' placeholder='Email' />
                            </InputGroup>

                            <InputGroup>
                                <InputLeftElement
                                    pointerEvents='none'
                                    color='gray.300'
                                    fontSize='1.2em'
                                >
                                    <IconLock color='#d4d4d4' />
                                </InputLeftElement>
                                <Input onChange={handlePasswordOnChange} placeholder='Password' type={showPassword ? 'text' : 'password'} />
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
                                <Input onChange={handleConfirmPasswordOnChange} placeholder='Confirm Password' type={showPassword ? 'text' : 'password'} />
                            </InputGroup>
                            <VStack width={"100%"}>
                                <Text color={"red"} minH={"15px"} fontSize={"12px"}>
                                    {isErrorMsg}
                                </Text>
                                <RegisterBtn />
                            </VStack>

                            <HStack w="100%" textAlign="center" justifyContent={'center'} alignItems={'center'}>
                                <Divider />
                                <Text bg="white" px={2} fontSize="sm" fontWeight="medium" color="gray.500">or</Text>
                                <Divider />
                            </HStack>
                            <HStack>
                                <Text as={"a"} href="/login" _hover={{ cursor: "pointer" }} fontWeight={700} color={"#3394d7"}>
                                    Login
                                </Text>
                                <Text>
                                    If you already have an account!
                                </Text>
                            </HStack>
                        </VStack>
                    </form>
                    )}
      
                </Box>
            </Container>
        </Box>
    )
}

export default SignUp