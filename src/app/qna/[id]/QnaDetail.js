'use client'
import { open_sans, source_serif_4, work_sans } from "@/app/fonts";
import { Container, Textarea, IconButton, VStack, Image, Text, HStack, Box, Divider, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { decode } from 'html-entities';
import { useEffect, useState } from "react";
import { IconEdit } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { IconHeartFilled, IconEye, IconSend2 } from "@tabler/icons-react";
import { FetchQnaComment, SubmitQnaComment } from "@/app/qna_actions";
import Comment from "@/app/components/comment/Comment";
export default function QnaDetail({ res }) {
    const [isClient, setIsClient] = useState(false)
    const [qna, setQna] = useState(null)
    const [comments, setComments] = useState(null)
    const [commentTxt, setCommentTxt] = useState('')
    const router = useRouter()


    const handleFetchComment = async () => {
        const response = await FetchQnaComment(res?.data?.id)
        if (response.success) {
            setComments(response.data)
        }
    }

    const handleTextOnChange = (e) => {
        e.preventDefault()
        setCommentTxt(e.target.value)
    }

    const handleSubmitComment = async () => {
        if (!commentTxt) {
            return
        }
        const response = await SubmitQnaComment(res?.data?.id, commentTxt)
        if (response.success) {
            setCommentTxt('')
            handleFetchComment()
        }

    }

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    };

    useEffect(() => {
        if (res.success) {
            setQna(res.data)
        }
        handleFetchComment()
        setIsClient(true)
    }, [])

    return isClient && qna && (
        <Container my={14} maxW={"96em"} display={"flex"} flexDir={"row"}>
            <VStack spacing={8} alignItems={"flex-start"} width={"100%"}>
                <HStack alignItems={"center"} width={"100%"} justifyContent={"space-between"}>
                    <Text fontWeight={600} color={"#181A2A"} fontSize={{ base: "28px", md: "35px" }} className={`${work_sans.className}`}>
                        {qna.title}
                    </Text>
                    {
                        qna.is_owner && (
                            <IconButton onClick={() => router.push(`/edit-post/qna/${qna.id}`)} _hover={{ color: "#3394d7" }} icon={<IconEdit />} background={"none"} />
                        )
                    }

                </HStack>
                <HStack alignItems={"center"} width={"100%"} justifyContent={"space-between"}>
                    <HStack spacing={{ base: 2, md: 4 }} justifyContent={"flex-start"}>
                        <Image height={"40px"} width={"40px"} objectFit={"cover"} borderRadius={"50%"} src={`https://www.connectjcu.club/media/${qna.author.profile_image}`} />
                        <Text mr={2} color={"#97989F"} fontSize={"14px"} className={`${work_sans.className}`}>
                            {qna.author.full_name}
                        </Text>
                        <Text color={"#97989F"} fontSize={{ base: "12px", md: "14px" }} className={`${work_sans.className}`}>
                            {formatDate(qna.created_at)}
                        </Text>
                    </HStack>
                    <HStack display={{ base: "flex", md: "flex" }} alignItems={"center"} spacing={{ base: 2, md: 4 }} justifyContent={"center"}>
                        {/* <Box width={{ base: "24px", md: "28px" }} height={{ base: "24px", md: "28px" }}>
                            <IconHeartFilled style={{ width: "inherit", height: "inherit" }} color="#FF5480" />
                        </Box>
                        <Text color={"#97989F"} fontSize={"14px"} className={`${work_sans.className}`}>
                            134
                        </Text> */}
                        <Box width={{ base: "24px", md: "28px" }} height={{ base: "24px", md: "28px" }}>
                            <IconEye style={{ width: "inherit", height: "inherit" }} />
                        </Box>
                        <Text color={"#97989F"} fontSize={"14px"} className={`${work_sans.className}`}>
                            {qna.view_count}
                        </Text>
                    </HStack>
                </HStack>
                <Box lineHeight={{ base: "28px", md: "32px" }} color={"#3B3C4A"} fontSize={{ base: "16px", md: "20px" }} className={`${source_serif_4}`} >
                    <div style={{ lineHeight: "30px", textAlign: "justify" }} dangerouslySetInnerHTML={{ __html: decode(qna.content) }} />
                </Box>
                <Text className={`${open_sans.className}`} fontSize={{ base: "22px", md: "26px" }}>
                    Answers
                </Text>
                <Box width={"100%"} maxW={"600px"}>
                    <Box overflowY={"auto"} maxH={"500px"} width={"100%"} maxW={"600px"}
                    overflowX={"hidden"}
                    css={{
                        '&::-webkit-scrollbar': {
							width: '3px',
						},
						'&::-webkit-scrollbar-track': {
							width: '5px',
						},
						'&::-webkit-scrollbar-thumb': {
							backgroundColor: 'darkgrey',
							outline: '1px solid slategrey',
						},
                    }}
                    
                    >
                        {
                            comments?.map((comment, index) => (
                                <Comment key={index} comment={comment} />
                            ))
                        }
                        {
                            (comments?.length < 1) && (
                                <Text ml={2} color={"rgba(0,0,0,0.5)"} mb={5}> No Answer</Text>
                            )
                        }


                    </Box>
                    <InputGroup>
                        <Textarea
                            value={commentTxt}
                            onChange={handleTextOnChange}
                            placeholder='Write Answer'
                            resize="vertical" // Allows vertical resize
                        />
                        <InputRightElement onClick={() => handleSubmitComment()} _hover={{ cursor: "pointer", color: "#3394d7" }}>
                            <IconSend2 />
                        </InputRightElement>
                    </InputGroup>
                </Box>
            </VStack>
        </Container>
    )
}