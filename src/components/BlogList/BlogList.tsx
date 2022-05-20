import React, { FC } from 'react';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion'
import moment from 'moment';
import 'moment/locale/ru';
import {
    Grid,
    Box,
    useColorModeValue,
    Link,
    Heading,
    Image as ChakraImage,
    Text,
    Button,
} from '@chakra-ui/react';
import { ArticleToRender } from '../../models';
import { getStrapiMedia } from '../../services/strapiMedia';
import { TagList } from './Tags';

moment.locale('ru');

interface BlogListProps {
    articles: ArticleToRender[];
}

interface BlogItemProps {
    item: ArticleToRender;
    isLast: boolean;
    delay: number;
}

export const BlogItem: FC<BlogItemProps> = ({ item, isLast, delay = 0 }) => {
    const bg = useColorModeValue('white', 'bg.headerBgDark');
    const router = useRouter();

    const handleButton = () => {
        router.push({
            pathname: '/blog/[id]',
            query: { id: item.slug },
        });
    }

    return (
        <motion.article
            key={delay}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay }}
        >
            <Box
                display="grid"
                gridGap={{ base: "16px", md: "20px", lg: "20px" }}
                gridTemplateColumns={{ base: "1fr", md: "1fr auto", lg: "1fr auto" }}
                bg={bg}
                boxShadow="base"
                // p={{ base: '8px', md: '16px', lg: '16px' }}
                p="24px"
                borderRadius="6px"
                position="relative"
                transition="all .5s ease-in-out"
                cursor="pointer"
                _hover={{ _before: { opacity: 1 }, boxShadow: "md" }}
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
                    borderTopLeftRadius: "4px",
                    borderBottomLeftRadius: "4px",
                }}
                _after={{
                    content: '""',
                    display: isLast ? "none" : "block",
                    position: "absolute",
                    width: "20%",
                    height: "4px",
                    opacity: '0.4',
                    left: "40%",
                    bottom: "-40px",
                    borderColor: "green.400",
                    borderTopWidth: "1px",
                    borderBottomWidth: "1px",
                    borderStyle: "solid"
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
                        <Heading fontSize="2xl">
                            <Link _hover={{ textDecoration: 'none', color: 'green.400' }}>
                                {item.title}
                            </Link>
                        </Heading>
                    </NextLink>
                    <Box d="flex" flexWrap="wrap" alignItems="center" columnGap="16px" rowGap="6px">
                        {item.author && (
                            <Box d="flex" alignItems="center" columnGap="6px">
                                <ChakraImage
                                    w="30px"
                                    height="30px"
                                    objectFit="cover"
                                    borderRadius="50%"
                                    src={getStrapiMedia(item.author.avatar)}
                                />
                                <Text textDecoration="underline">
                                    {item.author.name}
                                </Text>
                            </Box>
                        )}
                        <Box>
                            <Text>
                                {`Дата —`}&nbsp;
                                <Text as="span" fontWeight="600">
                                    {moment(item.publishedAt).format('DD MMMM YYYY г.')}
                                </Text>
                            </Text>
                        </Box>
                    </Box>
                    {item.categories.length > 0 && (
                        <Box>
                            <TagList items={item.categories} />
                        </Box>
                    )}
                    {item.description && (
                        <Text>
                            {item.description}
                        </Text>
                    )}
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
                <Box gridColumn="span 2" d="flex" justifyContent="flex-end">
                    <Button variant="outline" colorScheme="green" onClick={handleButton}>
                        Подробнее
                    </Button>
                </Box>
            </Box>
        </motion.article>
    );
}

const BlogList: FC<BlogListProps> = ({ articles }) => {
    const bg = useColorModeValue('white', 'bg.headerBgDark');

    if (articles.length === 0) {
        return (
            <Box
                bg={bg}
                p="24px"
                boxShadow="base"
                borderRadius="6px"
            >
                <Heading fontSize="xl">
                    Статьи не найдены
                </Heading>
            </Box>
        );

    }
    return (
        <Grid gridGap="80px">
            {articles.map((item, index) => {
                return (
                    <BlogItem
                        key={item.slug}
                        item={item}
                        isLast={index === articles.length - 1}
                        delay={+`0.${index + 1}`}
                    />
                );
            })}
        </Grid>
    );
};

export default BlogList;