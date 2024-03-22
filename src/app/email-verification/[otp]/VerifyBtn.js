'use client';
import { Button, Spinner } from "@chakra-ui/react";
import { useFormStatus } from "react-dom";
const VerifyBtn = () => {
    const { pending } = useFormStatus();
    return (

        <Button type="submit" _hover={{ background: "#1773b3" }} color={"#fff"} bg={"#3394d7"}>
             {pending ? <Spinner /> : 'Verify'}
        </Button>
    )
}

export default VerifyBtn