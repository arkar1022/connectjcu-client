'use client'
import { michroma, poppins, source_serif_4, work_sans } from "@/app/fonts";
import { Container, VStack, Image, Text, HStack, Box, Stack, Button } from "@chakra-ui/react";
import { decode } from 'html-entities';
import { useEffect, useState } from "react";
import { IconDownload } from "@tabler/icons-react";
import { IconHeartFilled, IconEye } from "@tabler/icons-react";
export default function ResourceDetail({ res }) {
    const [isClient, setIsClient] = useState(false)
    const [resource, setResource] = useState(null)

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    };

    useEffect(() => {
        if (res.success) {
            setResource(res.data)
        }
        setIsClient(true)
    }, [])
    // const decodedHtml = decode(content.content);
    return isClient && (
        <Container my={14} maxW={"96em"} display={"flex"} flexDir={"row"}>
            <Stack spacing={{ base: 6, md: 3 }} flexDir={{ base: "column", md: "row" }} width={"100%"} alignItems={'flex-start'}>
                <VStack spacing={3} flex={{ base: 1.5, lg: 1 }} width={"100%"}>
                    <Image flexGrow={1} borderRadius={"12px"} src={resource.image_file}
                        height={"400px"} width={"fit-content"} objectFit={"cover"} bgColor={"#3394d7"} objectPosition={"center"} />
                    <Button as={"a"} href={resource.file} target="_blank" _hover={{background:"#0e629c"}} bg={"#3394d7"} color={"#fff"} rightIcon={<IconDownload />} width={"280px"}>
                        Download
                    </Button>
                </VStack>

                <VStack justifyContent={"flex-start"} alignItems={"flex-start"} flex={3}>
                    <Text px={2} fontSize={{ base: "18px", md: "24px" }} className={`${work_sans.className}`} fontWeight={600} sx={{ overflowWrap: 'break-word' }}>
                        {resource.title}
                    </Text>
                    <Text color={"rgba(0,0,0,0.6)"} px={2} fontSize={{ base: "16px", md: "18px" }} className={`${poppins.className}`} fontWeight={500} sx={{ overflowWrap: 'break-word' }}>
                        {resource.article_author}
                    </Text>
                    <Box px={2} lineHeight={"28px"} fontSize={{ base: "14px", md: "16px" }} className={`${work_sans.className}`} sx={{ overflowWrap: 'break-word' }}>
                    <div style={{textAlign: "justify" }} dangerouslySetInnerHTML={{ __html: decode(resource.content) }} />
                       
                    </Box>
                    
                </VStack>
            </Stack>
        </Container>
    )
}