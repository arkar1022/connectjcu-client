'use client'
import { useEffect, useState } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Container, Text, Box, Input, HStack, Select, Button, Image, VStack, useTimeout } from "@chakra-ui/react";
import BlogPost from "./BlogPost";
export default function CreatePost({ res }) {
    const [isClient, setIsClient] = useState(false)
    const [categories, SetCategories] = useState(null)
    useEffect(() => {
        if (res.success) {
            SetCategories(res.data)
        }
        setIsClient(true)
    }, [])
    return isClient && (
        <Container maxW={"96em"} my={8}>
            <Tabs isFitted variant='enclosed'>
                <TabList mb='1em'>
                    <Tab>Blog</Tab>
                    <Tab>Resource</Tab>
                    <Tab>QnA</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                    <BlogPost categories={categories} /> 
                    </TabPanel>
                    <TabPanel>
                        <p>Resource</p>
                    </TabPanel>
                    <TabPanel>
                        <p>QnA</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Container>

    )
}