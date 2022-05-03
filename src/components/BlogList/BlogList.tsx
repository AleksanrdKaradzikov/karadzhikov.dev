import React, { FC } from 'react';
import NextLink from 'next/link';
import Image from 'next/image';
import { Grid, Box, useColorModeValue, Link, Heading } from '@chakra-ui/react';
import { ArticleToRender } from '../../models';
import { getStrapiMedia } from '../../services/strapiMedia';

interface BlogListProps {
    articles: ArticleToRender[];
}

interface BlogItemProps {
    item: ArticleToRender;
}

export const BlogItem: FC<BlogItemProps> = ({ item }) => {
    console.log(item);
    const bg = useColorModeValue('bg.headerBgLight', 'bg.headerBgDark');

    return (
        <Box
            display="grid"
            gridGap={{ base: "16px", md: "20px", lg: "20px" }}
            gridTemplateColumns={{ base: "1fr", md: "1fr auto", lg: "1fr auto" }}
            bg={bg}
            boxShadow="base"
            overflow="hidden"
            p="24px"
            borderRadius="6px"
            position="relative"
            transition="background .5s ease-in-out"
            cursor="pointer"
            _hover={{ bg: 'bg.highlightBg', _before: { opacity: 1 } }}
            _before={{
                content: '""',
                opacity: 0,
                transition: "opacity .5s ease-in-out",
                position: "absolute",
                height: "100%",
                width: "4px",
                left: 0,
                top: 0,
                bg: "green.400",
                boxShadow: "3px 0px 22px #0eff4d80",
            }}
        >
            <Box
                display="grid"
                gridGap="16px"
                alignItems="start"
                alignContent="start"
                gridColumn={{ base: "span 2", md: "initial", lg: "initial" }}
            >
                <NextLink href={`/blog/${item.slug}`}>
                    <Heading fontSize="xl">
                        <Link _hover={{ textDecoration: 'none' }}>
                            {item.title}
                        </Link>
                    </Heading>
                </NextLink>
            </Box>
            <Box
                position="relative"
                borderRadius="4px"
                height="150px"
                maxH="150px"
                width={{ base: "100%", md: "250px", lg: "250px" }}
                maxW={{ base: "100%", md: "250px", lg: "250px" }}
                gridColumn={{ base: "span 2", md: "initial", lg: "initial" }}
                order={{ base: -1, md: "initial", lg: "initial" }}
                overflow="hidden"
            >
                <Image
                    src={getStrapiMedia(item.image)}
                    layout="fill"
                    objectFit="cover"
                />
            </Box>
        </Box>
    );
}

const BlogList: FC<BlogListProps> = ({ articles }) => {
    console.log('BlogList: ', articles);
    return (
        <Grid gridGap="16px">
            {articles.map((item) => {
                return (
                    <BlogItem key={item.slug} item={item} />
                );
            })}
        </Grid>
    );
};

export default BlogList;