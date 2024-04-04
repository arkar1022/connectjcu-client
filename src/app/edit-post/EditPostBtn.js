'use client';
import { Button, Spinner } from "@chakra-ui/react";
import { useFormStatus } from "react-dom";
const EditPostBtn = () => {
    const { pending } = useFormStatus();
    return (

        <Button type="submit" width={"70px"} color={"#fff"} bg={"#3394d7"}>
             {pending ? <Spinner /> : 'Update'}
        </Button>
    )
}

export default EditPostBtn