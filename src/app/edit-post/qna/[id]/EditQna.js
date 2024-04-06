'use client'
import { Container, Textarea, useToast, Text, Box, Input, HStack, Select, Button, Image, VStack, useTimeout } from "@chakra-ui/react";
import { work_sans } from "@/app/fonts";
import dynamic from "next/dynamic";
import 'react-quill/dist/quill.snow.css';
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { UpdateQna, DeleteQna } from "@/app/qna_actions";
import EditPostBtn from "../../EditPostBtn";
import DeletePostBtn from "../../DeletePostBtn";
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });


export default function EditQna({ resCat, resQna, id }) {
    const [content, setContent] = useState(resQna?.data?.content)
    const [title, setTitle] = useState(resQna?.data?.title)
    const [categories, setCategories] = useState()
    const [selectedCategory, setSelectedCategory] = useState(resQna?.data?.category.id)
    const [error, SetError] = useState(false)
    const [isClient, setIsClient] = useState(false)
    const toast = useToast()
    const router = useRouter()

    useEffect(() => {
        if (resCat.success && resQna.success) {
            if(!resQna.data.is_owner){
                router.back()
            }
            setCategories(resCat.data)
        }
        setIsClient(true)
    }, [])

    const handleSubmitQna = async () => {

        SetError(false)
        if (!title || !content || !selectedCategory) {
            SetError(true)
            return
        }
        const formDataQna = new FormData();
        formDataQna.append('title', title);
        formDataQna.append('content', content);
        formDataQna.append('category', selectedCategory);
        const res = await UpdateQna(id,formDataQna)
        if (res.success) {
            toast({
                title: 'Successfully Updated.',
                description: "We've updated your Question.",
                status: 'success',
                duration: 3000, // 5 seconds
                isClosable: true,
            });
                router.push("/qna")
        }
    }

    const handleContentOnChange = (e) => {
        e.preventDefault()
        setContent(e.target.value)
    }

    const handleDeleteQna = async () => {
        const res = await DeleteQna(id)
        if (res.success) {
            toast({
                title: 'Successfully Deleted.',
                description: "We've deleted your Question.",
                status: 'success',
                duration: 3000, // 5 seconds
                isClosable: true,
            });
                router.push("/qna")
        }
    }

    const handleCategoryOnChange = (e) => {
        setSelectedCategory(e.target.value)
    }

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleTitleOnChange = (e) => {
        setTitle(e.target.value)
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        console.log(file)
        setSelectedImage(URL.createObjectURL(file));
        setSelectedImageFile(file)
    };


    return (isClient && categories) && (
        <Container maxW={"96em"} my={8}>
            <Box>
                <HStack justifyContent={"space-between"} mb={6}>
                    <Text fontWeight={800} fontSize={{ base: "18px", md: "22px" }} className={`${work_sans.className}`}>Edit Qna</Text>
                    <HStack pb={6} pos={"relative"} justifyContent={"flex-end"}>
                        {error && (
                            <Text bottom={"0px"} right={"0px"} pos={"absolute"} color={"red"} fontSize={{ base: "12px", md: "12px" }} className={`${work_sans.className}`}>
                                Pls Fill All Information
                            </Text>
                        )}
                        <form action={() => handleDeleteQna()}>
                            <DeletePostBtn />
                        </form>
                        <form action={() => handleSubmitQna()}>
                            <EditPostBtn />
                        </form>
                    </HStack>
                </HStack>
                <Input value={title} onChange={handleTitleOnChange} mb={6} placeholder='Title' />
                <Select onChange={handleCategoryOnChange} value={selectedCategory} mb={6} placeholder='Select Category'>
                    {categories?.map((category, index) => (
                        <option key={index} value={category.id}>{category.name}</option>
                    ))}
                </Select>
                <Textarea
                value={content}
                onChange={handleContentOnChange}
                placeholder='Write Description'
                resize="vertical" // Allows vertical resize
            />
            </Box>
        </Container>
    )
}