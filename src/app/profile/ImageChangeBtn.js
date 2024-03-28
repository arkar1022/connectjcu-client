'use client';
import { Button, Spinner } from "@chakra-ui/react";
import { useFormStatus } from "react-dom";
const ImageChangeBtn = ({selectedImage}) => {
    const { pending } = useFormStatus();
    return (

        <Button type="submit" _hover={{background:"#14639c"}} color={"#fff"} background={"#3394d7"} isDisabled={!selectedImage}>
             {pending ? <Spinner /> : 'Done'}
        </Button>
    )
}

export default ImageChangeBtn