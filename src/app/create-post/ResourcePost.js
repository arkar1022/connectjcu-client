'use client'
import { Container, useToast, Text, Box, Input, HStack, Select, Stack, Button, Image, VStack, useTimeout, useStatStyles } from "@chakra-ui/react";
import { work_sans } from "../fonts";
import dynamic from "next/dynamic";
import 'react-quill/dist/quill.snow.css';
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { SubmitResource } from "../resource_actions";
import PostBlogBtn from "./PostBlogBtn";

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
export default function ResourcePost({ categories }) {
    const [content, setContent] = useState('')
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedImageFile, setSelectedImageFile] = useState(null)
    const [selectedFileName, setSelectedFileName] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null)
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const imageInputRef = useRef(null);
    const fileInputRef = useRef(null);
    const [selectedCategory, setSelectedCategory] = useState("")
    const [error, SetError] = useState(false)
    const router = useRouter()

    const toast = useToast()

    const handleSubmitResource = async () => {

        SetError(false)
        if (!title || !content || !selectedImageFile || !selectedCategory || !author || !selectedFile) {
            SetError(true)
            return
        }
        const formDataResource = new FormData();
        formDataResource.append('title', title);
        formDataResource.append('content', content);
        formDataResource.append('image_file', selectedImageFile);
        formDataResource.append('category', selectedCategory);
        formDataResource.append('article_author', author);
        formDataResource.append('file', selectedFile);
        const res = await SubmitResource(formDataResource)
        if (res.success) {
            toast({
                title: 'Successfully Added.',
                description: "We've added your resource.",
                status: 'success',
                duration: 3000, // 5 seconds
                isClosable: true,
            });
                router.push("/resources")
        }
    }

    const handleCategoryOnChange = (e) => {
        setSelectedCategory(e.target.value)
    }

    const handleButtonClick = () => {
        imageInputRef.current.click();
    };

    const handleFileButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleTitleOnChange = (e) => {
        setTitle(e.target.value)
    }

    const handleAuthorOnChange = (e) => {
        setAuthor(e.target.value)
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        console.log(file.name)
        setSelectedImage(URL.createObjectURL(file));
        setSelectedImageFile(file)
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFileName(file.name);
        setSelectedFile(file)
    };


    return categories && (
        <Box>
            <HStack justifyContent={"space-between"} mb={6}>
                <Text fontWeight={800} fontSize={{ base: "18px", md: "22px" }} className={`${work_sans.className}`}>Create New Resource</Text>
                <HStack justifyContent={"flex-end"}>
                    {error && (
                        <Text color={"red"} fontSize={{ base: "12px", md: "16px" }} className={`${work_sans.className}`}>
                            Please Fill All Information
                            </Text>
                    )}
                    <form action={() => handleSubmitResource()}>
                        <PostBlogBtn />
                    </form>
                </HStack>

            </HStack>
            <Stack spacing={{ base: 6, md: 3 }} flexDir={{ base: "column", md: "row" }} width={"100%"} alignItems={'flex-start'}>
                <VStack spacing={3} flex={{ base: 1.5, lg: 1 }} width={"100%"}>
                    {
                        selectedImage ? (
                            <Image flexGrow={1} borderRadius={"12px"} src={selectedImage}
                                height={"400px"} width={"fit-content"} objectFit={"cover"} bgColor={"#3394d7"} objectPosition={"center"} />
                        ) : (
                            <VStack mb={6} alignItems={"center"} justifyContent={"center"} width={"300px"} height={"400px"} border={"1px solid black"}>
                                <Text color={"rgba(0,0,0,0.2)"} fontWeight={700}>NO RESOURCE COVER</Text>
                            </VStack>
                        )
                    }
                    <input accept=".jpg, .jpeg, .png" ref={imageInputRef} style={{ display: "none" }} type="file" onChange={handleImageChange} />
                    <Button mb={6} onClick={handleButtonClick}>{selectedImage ? 'Change Resource Cover' : 'Upload Resource Cover'}</Button>
                </VStack>

                <VStack width={"100%"} justifyContent={"flex-start"} alignItems={"flex-start"} flex={3}>
                    <Input value={title} onChange={handleTitleOnChange} mb={6} placeholder='Title' />
                    <Input value={author} onChange={handleAuthorOnChange} mb={6} placeholder='Author' />
                    <Select onChange={handleCategoryOnChange} value={selectedCategory} mb={6} placeholder='Select Category'>
                        {categories?.map((category, index) => (
                            <option key={index} value={category.id}>{category.name}</option>
                        ))}
                    </Select>
                    <HStack>
                        <input ref={fileInputRef} style={{ display: "none" }} type="file" onChange={handleFileChange} />
                        <Button onClick={handleFileButtonClick}>{selectedFileName ? 'Change File' : 'Upload File'}</Button>
                        <Text>
                            {selectedFileName}
                        </Text>
                    </HStack>

                </VStack>
            </Stack>
            <Text my={5} fontWeight={600} fontSize={{ base: "16px", md: "18" }} className={`${work_sans.className}`}>Write Description</Text>
            <ReactQuill theme="snow" value={content} onChange={setContent} />
        </Box>
    )
}