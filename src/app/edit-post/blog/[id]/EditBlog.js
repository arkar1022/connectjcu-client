'use client'
import { Container, useToast, Text, Box, Input, HStack, Select, Button, Image, VStack, useTimeout } from "@chakra-ui/react";
import { work_sans } from "@/app/fonts";
import dynamic from "next/dynamic";
import 'react-quill/dist/quill.snow.css';
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { UpdateBlog } from "@/app/blog_actions";
import EditPostBtn from "../../EditPostBtn";

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });


export default function EditBlog({ resCat, resBlog, id }) {
    const [content, setContent] = useState(resBlog?.data?.content)
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedImageFile, setSelectedImageFile] = useState(null)
    const [title, setTitle] = useState(resBlog?.data?.title)
    const fileInputRef = useRef(null);
    const [categories, setCategories] = useState()
    const [selectedCategory, setSelectedCategory] = useState(resBlog?.data?.category.id)
    const [error, SetError] = useState(false)
    const [isClient, setIsClient] = useState(false)
    const toast = useToast()
    const router = useRouter()

    useEffect(() => {
        if (resCat.success && resBlog.success) {
            if(!resBlog.data.is_owner){
                router.back()
            }
            setCategories(resCat.data)
        }
        setIsClient(true)
    }, [])

    const handleSubmitBlog = async () => {

        SetError(false)
        if (!title || !content || !selectedCategory) {
            SetError(true)
            return
        }
        const formDataBlog = new FormData();
        formDataBlog.append('title', title);
        formDataBlog.append('content', content);
        if(selectedImageFile) {
            formDataBlog.append('image_file', selectedImageFile);
        }
        formDataBlog.append('category', selectedCategory);
        const res = await UpdateBlog(id,formDataBlog)
        if (res.success) {
            toast({
                title: 'Successfully Updated.',
                description: "We've updated your blog.",
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


    return (isClient && categories) && (
        <Container maxW={"96em"} my={8}>
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

                <Image mb={6} src={selectedImage ? selectedImage : resBlog.data.image_file}
                    maxHeight={{ base: "462px", md: "600px" }} borderRadius={"15px"}
                    width={"100%"} objectFit={"cover"} objectPosition={"center"} />

                <input accept=".jpg, .jpeg, .png" ref={fileInputRef} style={{ display: "none" }} type="file" onChange={handleImageChange} />
                <Button mb={6} onClick={handleButtonClick}>Change Cover Photo</Button>

                <ReactQuill theme="snow" value={content} onChange={setContent} />
            </Box>
        </Container>
    )
}