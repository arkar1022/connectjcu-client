"use client";
import { poppins, roboto, work_sans } from "@/app/fonts";
import { Box, Text, Badge, VStack, Image, HStack, Divider } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
const QnaCard = ({ qna }) => {
    const router = useRouter()
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    };
    return (
        <Box onClick={() => router.push(`/qna/${qna.id}`)} transition={"all 0.2s ease-in"} _hover={{ cursor: "pointer", transition: "all 0.2s ease-in", transform: "scale(1.01)" }} borderRadius={"10px"} width={"100%"} boxShadow={"0px 0px 6px -1px rgba(196,196,196,0.75)"}>
            <VStack alignItems={"flex-start"} spacing={4} p={3}>
                <HStack spacing={{ base: 2, md: 3 }} width={"100%"} justifyContent={"flex-start"}>
                    <Image height={"36px"} width={"36px"} objectFit={"cover"} borderRadius={"50%"} src={`https://www.connectjcu.club/media/${qna.author.profile_image}`} />
                    <Text color={"#97989F"} fontSize={{ base: "12px", md: "14px" }} fontWeight={600} className={`${work_sans.className}`}>
                        {qna.author.full_name}
                    </Text>
                    <Text color={"#97989F"} fontSize={{ base: "12px", md: "14px" }} className={`${work_sans.className}`}>
                        {formatDate(qna.created_at)}
                    </Text>
                </HStack>
                <Text fontSize={{ base: "16px", md: "20px" }} className={`${poppins.className}`} noOfLines={2} fontWeight={600} overflow={"hidden"} sx={{ overflowWrap: 'break-word' }}>
               {qna.title}
                </Text>
                <HStack alignItems={"flex-start"} height={{base:"90px",md:"100px"}} overflowY={"hidden"}>
                    <Divider height={"100%"} borderWidth={"2px"} orientation="vetical" />
                    <VStack alignItems={"flex-start"}>
                        <Badge bg={"#3394d7"} fontSize={"10px"} padding={1} variant="solid" borderRadius={"5px"} colorScheme='green'> {qna.category.name} </Badge>
                        <Text fontSize={{ base: "14px", md: "16px" }} className={`${poppins.className}`} fontWeight={400} overflow={"hidden"} sx={{ overflowWrap: 'break-word' }}>
                        {qna.content.length > 400 ? `${qna.content.slice(0, 400)}...` : qna.content}
                        </Text>
                    </VStack>
                </HStack>

            </VStack>
        </Box>
    )
}
export default QnaCard
