'use client';
import { Button, Spinner } from "@chakra-ui/react";
import { useFormStatus } from "react-dom";
const DeletePostBtn = () => {
    const { pending } = useFormStatus();
    return (

        <Button type="submit" width={"70px"} color={"#fff"} bg={"#FF0000"}>
             {pending ? <Spinner /> : 'Delete'}
        </Button>
    )
}

export default DeletePostBtn