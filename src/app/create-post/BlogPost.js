'use client'
import { Container, useToast, Text, Box, Input, HStack, Select, Button, Image, VStack, useTimeout } from "@chakra-ui/react";
import { work_sans } from "../fonts";
import dynamic from "next/dynamic";
import 'react-quill/dist/quill.snow.css';
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { SubmitBlog } from "@/app/blog_actions";
import PostBtn from "./PostBtn";

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
export default function BlogPost({categories}) {
    const [content, setContent] = useState('')
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedImageFile, setSelectedImageFile] = useState(null)
    const [title, setTitle] = useState('')
    const fileInputRef = useRef(null);
    const [selectedCategory, setSelectedCategory] = useState("")
    const [error, SetError] = useState(false)

    const router = useRouter()

    const toast = useToast()

    const handleSubmitBlog = async () => {

        SetError(false)
        if (!title || !content || !selectedImageFile || !selectedCategory) {
            SetError(true)
            return
        }
        const formDataBlog = new FormData();
        formDataBlog.append('title', title);
        formDataBlog.append('content', content);
        formDataBlog.append('image_file', selectedImageFile);
        formDataBlog.append('category', selectedCategory);
        const res = await SubmitBlog(formDataBlog)
        if (res.success) {
            toast({
                title: 'Successfully Added.',
                description: "We've added your blog.",
                status: 'success',
                duration: 3000, // 5 seconds
                isClosable: true,
            });
                router.push("/blog")
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


    return categories && (
        <Box>
            <HStack justifyContent={"space-between"} mb={6}>
                <Text fontWeight={800} fontSize={{ base: "18px", md: "22px" }} className={`${work_sans.className}`}>Create New Blog</Text>
                <HStack justifyContent={"flex-end"}>
                    {error && (
                        <Text color={"red"} fontSize={{ base: "12px", md: "16px" }} className={`${work_sans.className}`}>
                            Please Fill All Information
                            </Text>
                    )}
                    <form action={() => handleSubmitBlog()}>
                        <PostBtn />
                    </form>
                </HStack>
            </HStack>
            <Input value={title} onChange={handleTitleOnChange} mb={6} placeholder='Title' />
            <Select onChange={handleCategoryOnChange} value={selectedCategory} mb={6} placeholder='Select Category'>
                {categories?.map((category,index) => (
                         <option key={index} value={category.id}>{category.name}</option>
                ))}
            </Select>
            {
                selectedImage ? (
                    <Image mb={6} src={selectedImage}
                        maxHeight={{ base: "462px", md: "600px" }} borderRadius={"15px"}
                        width={"100%"} objectFit={"cover"} objectPosition={"center"} />
                ) : (
                    <VStack mb={6} alignItems={"center"} justifyContent={"center"} height={"400px"} border={"1px solid black"}>
                        <Text color={"rgba(0,0,0,0.2)"} fontWeight={700}>NO COVER PHOTO</Text>
                    </VStack>
                )
            }

            <input accept=".jpg, .jpeg, .png" ref={fileInputRef} style={{ display: "none" }} type="file" onChange={handleImageChange} />
            <Button mb={6} onClick={handleButtonClick}>Upload Cover Photo</Button>

            <ReactQuill theme="snow" value={content} onChange={setContent} />
        </Box>
    )
}