"use client";
import { poppins, roboto, work_sans } from "@/app/fonts";
import { Box, Text, Badge, VStack, Image, HStack } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
const ResourceCard = ({resource}) => {
    const router = useRouter()
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
      };
    return (
        <Box onClick={() => router.push(`/resources/${resource.id}`)} transition={"all 0.2s ease-in"} _hover={{ cursor: "pointer", transition: "all 0.2s ease-in", transform: "scale(1.02)" }} borderRadius={"10px"} width={"100%"} boxShadow={"0px 0px 6px -1px rgba(196,196,196,0.75)"}>
            <VStack spacing={4} p={3}>
                <Image borderRadius={"12px"} src={resource.image_file}
                    height={"290px"} width={"100%"} padding={4} objectFit={"contain"} bgColor={"#3394d7"} objectPosition={"center"} />
                <VStack width={"100%"} alignItems={'flex-start'} justifyContent={'flex-start'} px={3} spacing={4}>
                    <Box width={"100%"}>
                        <Badge mb={2} bg={"#3394d7"} fontSize={"10px"} padding={1} variant="solid" borderRadius={"5px"} colorScheme='green'> {resource.category.name} </Badge>
                        <Text fontSize={"16px"} className={`${poppins.className}`} fontWeight={600} noOfLines={1} overflow={"hidden"} sx={{ overflowWrap: 'break-word' }}>
                            {resource.title}
                        </Text>
                        <Text mt={1} color={"rgba(0,0,0,0.4)"} fontSize={"12px"} className={`${poppins.className}`} fontWeight={600} noOfLines={1} overflow={"hidden"} sx={{ overflowWrap: 'break-word' }}>
                            {resource.article_author}
                        </Text>
                    </Box>
                    <HStack spacing={{ base: 2, md: 3 }} width={"100%"} justifyContent={"flex-start"}>
                        <Image height={"36px"} width={"36px"} objectFit={"cover"} borderRadius={"50%"} src={`https://www.connectjcu.club/media/${resource.author.profile_image}`} />
                        <Text color={"#97989F"} fontSize={{ base: "12px", md: "14px" }} fontWeight={600} className={`${work_sans.className}`}>
                            {resource.author.full_name}
                        </Text>
                        <Text color={"#97989F"} fontSize={{ base: "12px", md: "14px" }} className={`${work_sans.className}`}>
                            {formatDate(resource.created_at)}
                        </Text>
                    </HStack>
                </VStack>
            </VStack>

        </Box>
    )
}
export default ResourceCard
