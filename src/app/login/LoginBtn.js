'use client';
import { Button, Spinner } from "@chakra-ui/react";
import { useFormStatus } from "react-dom";
const LoginBtn = () => {
    const { pending } = useFormStatus();
    return (

        <Button type="submit" my={3} width={"100%"} _hover={{ background: "#3394d7", color: "#fff" }}>
             {pending ? <Spinner /> : 'Login'}
        </Button>
    )
}

export default LoginBtn