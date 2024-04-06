'use client'
import { Container, useToast, Text, Box, Input, HStack, Select, Stack, Button, Image, VStack, useTimeout, useStatStyles } from "@chakra-ui/react";
import { work_sans } from "@/app/fonts";
import dynamic from "next/dynamic";
import 'react-quill/dist/quill.snow.css';
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { UpdateResource, DeleteResource } from "@/app/resource_actions";
import EditPostBtn from "../../EditPostBtn";
import DeletePostBtn from "../../DeletePostBtn";

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
export default function EditResource({ resCat, resRes }) {
    const [content, setContent] = useState(resRes?.data?.content)
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedImageFile, setSelectedImageFile] = useState(null)
    const [selectedFileName, setSelectedFileName] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null)
    const [title, setTitle] = useState(resRes?.data?.title)
    const [author, setAuthor] = useState(resRes?.data?.article_author)
    const imageInputRef = useRef(null);
    const fileInputRef = useRef(null);
    const [selectedCategory, setSelectedCategory] = useState(resRes?.data?.category.id)
    const [categories, setCategories] = useState(null)
    const [error, SetError] = useState(false)
    const toast = useToast()
    const router = useRouter()

    useEffect(() => {
        if (resCat.success && resRes.success) {
            if (!resRes.data.is_owner) {
                router.back()
            }
            setCategories(resCat.data)
        }
    }, [])

    const handleSubmitResource = async () => {

        SetError(false)
        if (!title || !content || !selectedCategory || !author) {
            SetError(true)
            return
        }
        const formDataResource = new FormData();
        formDataResource.append('title', title);
        formDataResource.append('content', content);
        if (selectedFile) {
            formDataResource.append('file', selectedFile);
        }
        if (selectedImageFile) {
            formDataResource.append('image_file', selectedImageFile);
        }

        formDataResource.append('category', selectedCategory);
        formDataResource.append('article_author', author);

        const res = await UpdateResource(resRes.data.id, formDataResource)
        if (res.success) {
            toast({
                title: 'Successfully Updated.',
                description: "We've updated your resource.",
                status: 'success',
                duration: 3000, // 5 seconds
                isClosable: true,
            });
                router.push("/resources")
        }
    }

    const handleDeleteResource = async () => {
        const res = await DeleteResource(resRes.data.id)
        if (res.success) {
            toast({
                title: 'Successfully Deleted.',
                description: "We've deleted your resource.",
                status: 'success',
                duration: 3000, // 5 seconds
                isClosable: true,
            })
                router.push("/resources?sort=-created_at&category=&search=")
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
        <Container maxW={"96em"} my={8}>
            <Box>
                <HStack justifyContent={"space-between"} mb={6}>
                    <Text fontWeight={800} fontSize={{ base: "18px", md: "22px" }} className={`${work_sans.className}`}>Edit Resource</Text>
                    <HStack pb={6} pos={"relative"} justifyContent={"flex-end"}>
                        {error && (
                            <Text bottom={"0px"} right={"0px"} pos={"absolute"} color={"red"} fontSize={{ base: "12px", md: "12px" }} className={`${work_sans.className}`}>
                                Pls Fill All Information
                            </Text>
                        )}
                        <form action={() => handleDeleteResource()}>
                            <DeletePostBtn />
                        </form>
                        <form action={() => handleSubmitResource()}>
                            <EditPostBtn />
                        </form>
                    </HStack>

                </HStack>
                <Stack spacing={{ base: 6, md: 3 }} flexDir={{ base: "column", md: "row" }} width={"100%"} alignItems={'flex-start'}>
                    <VStack spacing={3} flex={{ base: 1.5, lg: 1 }} width={"100%"}>

                        <Image flexGrow={1} borderRadius={"12px"} src={selectedImage ? selectedImage : resRes.data.image_file}
                            height={"400px"} width={"fit-content"} objectFit={"cover"} bgColor={"#3394d7"} objectPosition={"center"} />
                        <input accept=".jpg, .jpeg, .png" ref={imageInputRef} style={{ display: "none" }} type="file" onChange={handleImageChange} />
                        <Button mb={6} onClick={handleButtonClick}>Change Resource Cover</Button>
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
                            <Button onClick={handleFileButtonClick}>Change File</Button>
                            <Text>
                                {selectedFileName ? selectedFileName : resRes.data.file.split('/').pop()}
                            </Text>
                        </HStack>

                    </VStack>
                </Stack>
                <Text my={5} fontWeight={600} fontSize={{ base: "16px", md: "18" }} className={`${work_sans.className}`}>Write Description</Text>
                <ReactQuill theme="snow" value={content} onChange={setContent} />
            </Box>
        </Container>
    )
}