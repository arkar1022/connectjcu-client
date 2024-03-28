"use client";
import { poppins, roboto, work_sans } from "@/app/fonts";
import { Box, Text, Badge, VStack, Image, HStack } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
const BlogCard = ({blog}) => {
    const router = useRouter()
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
      };
    return (
        <Box onClick={() => router.push(`/blog/${blog.id}`)} transition={"all 0.2s ease-in"} _hover={{ cursor: "pointer", transition: "all 0.2s ease-in", transform: "scale(1.02)" }} borderRadius={"10px"} width={"100%"} boxShadow={"0px 0px 6px -1px rgba(196,196,196,0.75)"}>
            <VStack spacing={4} p={3}>
                <Image borderRadius={"12px"} src={blog.image_file}
                    height={"220px"} width={"100%"} objectFit={"cover"} objectPosition={"center"} />
                <VStack width={"100%"} alignItems={'flex-start'} justifyContent={'flex-start'} px={3} spacing={4}>
                    <Box width={"100%"}>
                        <Badge mb={2} bg={"#3394d7"} fontSize={"10px"} padding={1} variant="solid" borderRadius={"5px"} colorScheme='green'> {blog.category.name} </Badge>
                        <Text fontSize={"16px"} className={`${poppins.className}`} fontWeight={600} overflow={"hidden"} height={"70px"} sx={{ overflowWrap: 'break-word' }}>
                            {blog.title}
                        </Text>
                    </Box>
                    <HStack spacing={{ base: 2, md: 3 }} width={"100%"} justifyContent={"flex-start"}>
                        <Image height={"36px"} width={"36px"} objectFit={"cover"} borderRadius={"50%"} src={`https://www.connectjcu.club/media/${blog.author.profile_image}`} />
                        <Text color={"#97989F"} fontSize={{ base: "12px", md: "14px" }} fontWeight={600} className={`${work_sans.className}`}>
                            {blog.author.full_name}
                        </Text>
                        <Text color={"#97989F"} fontSize={{ base: "12px", md: "14px" }} className={`${work_sans.className}`}>
                            {formatDate(blog.created_at)}
                        </Text>
                    </HStack>
                </VStack>
            </VStack>

        </Box>
    )
}
export default BlogCard
