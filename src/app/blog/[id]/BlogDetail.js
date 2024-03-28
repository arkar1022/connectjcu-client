'use client'
import { source_serif_4, work_sans } from "@/app/fonts";
import { Container, VStack, Image, Text, HStack, Box } from "@chakra-ui/react";
import { decode } from 'html-entities';
import { useEffect, useState } from "react";

import { IconHeartFilled, IconEye } from "@tabler/icons-react";
export default function BlogDetail({res}) {
    const [isClient, setIsClient] = useState(false)
    const [blog, setBlog] = useState(null)

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
      };

    useEffect(() => {
        if(res.success) {
            setBlog(res.data)
        }
        setIsClient(true)
    },[])
    // const decodedHtml = decode(content.content);
    return isClient &&  (
        <Container my={14} maxW={"96em"} display={"flex"} flexDir={"row"}>
            <VStack spacing={8} alignItems={"flex-start"} width={"100%"}>
                <Text fontWeight={600} color={"#181A2A"} fontSize={{ base: "28px", md: "35px" }} className={`${work_sans.className}`}>
                    {blog.title}
                </Text>
                <HStack alignItems={"center"} width={"100%"} justifyContent={"space-between"}>
                    <HStack spacing={{ base: 2, md: 4 }} justifyContent={"flex-start"}>
                        <Image height={"36px"} width={"36px"} objectFit={"cover"} borderRadius={"50%"} src={`https://www.connectjcu.club/media/${blog.author.profile_image}`} />
                        <Text mr={2} color={"#97989F"} fontSize={"14px"} className={`${work_sans.className}`}>
                            {blog.author.full_name}
                        </Text>
                        <Text color={"#97989F"} fontSize={{ base: "12px", md: "14px" }} className={`${work_sans.className}`}>
                            {formatDate(blog.created_at)}
                        </Text>
                    </HStack>
                    <HStack display={{ base: "flex", md: "flex" }} alignItems={"center"} spacing={{ base: 2, md: 4 }} justifyContent={"center"}>
                        <Box width={{ base: "24px", md: "28px" }} height={{ base: "24px", md: "28px" }}>
                            <IconHeartFilled style={{ width: "inherit", height: "inherit" }} color="#FF5480" />
                        </Box>
                        <Text color={"#97989F"} fontSize={"14px"} className={`${work_sans.className}`}>
                            134
                        </Text>
                        <Box width={{ base: "24px", md: "28px" }} height={{ base: "24px", md: "28px" }}>
                            <IconEye style={{ width: "inherit", height: "inherit" }} />
                        </Box>
                        <Text color={"#97989F"} fontSize={"14px"} className={`${work_sans.className}`}>
                            {blog.view_count}
                        </Text>
                    </HStack>
                </HStack>
                <Image src={blog.image_file}
                    maxHeight={{ base: "462px", md: "600px" }} borderRadius={"15px"}
                    width={"100%"} objectFit={"cover"} objectPosition={"center"} />
                <Box lineHeight={{ base: "28px", md: "32px" }} color={"#3B3C4A"} fontSize={{ base: "16px", md: "20px" }} className={`${source_serif_4}`} >
                    <div style={{ lineHeight: "30px", textAlign: "justify" }} dangerouslySetInnerHTML={{ __html: decode(blog.content) }} />
                   
                </Box>
            </VStack>
            {/* <VStack mt={2} display={{ base: "none", md: "flex" }} width={"200px"} alignItems={"center"}
                spacing={3} justifyContent={"flex-start"}>
                <IconHeartFilled size={"32px"} color="#FF5480" />
                <Text color={"#97989F"} fontSize={"14px"} className={`${work_sans.className}`}>
                    134
                </Text>
                <IconEye size={"32px"} />
                <Text color={"#97989F"} fontSize={"14px"} className={`${work_sans.className}`}>
                    167
                </Text>
            </VStack> */}
        </Container>
    )
}