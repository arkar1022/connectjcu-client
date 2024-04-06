'use client'
import { Container, useToast, Textarea, Text, Box, Input, HStack, Select, Button, Image, VStack, useTimeout } from "@chakra-ui/react";
import { work_sans } from "../fonts";
import dynamic from "next/dynamic";
import 'react-quill/dist/quill.snow.css';
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { SubmitQna } from "@/app/qna_actions";
import PostBtn from "./PostBtn";

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
export default function QnaPost({ categories }) {
    const [content, setContent] = useState('')
    const [title, setTitle] = useState('')
    const [selectedCategory, setSelectedCategory] = useState("")
    const [error, SetError] = useState(false)

    const router = useRouter()

    const toast = useToast()

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
        const res = await SubmitQna(formDataQna)
        if (res.success) {
            toast({
                title: 'Successfully Added.',
                description: "We've added your Question.",
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

    const handleTitleOnChange = (e) => {
        setTitle(e.target.value)
    }

    const handleContentOnChange = (e) => {
        e.preventDefault()
        setContent(e.target.value)
    }


    return categories && (
        <Box>
            <HStack justifyContent={"space-between"} mb={6}>
                <Text fontWeight={800} fontSize={{ base: "18px", md: "22px" }} className={`${work_sans.className}`}>Create New Question</Text>
                <HStack justifyContent={"flex-end"}>
                    {error && (
                        <Text color={"red"} fontSize={{ base: "12px", md: "16px" }} className={`${work_sans.className}`}>
                            Please Fill All Information
                        </Text>
                    )}
                    <form action={() => handleSubmitQna()}>
                        <PostBtn />
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
    )
}