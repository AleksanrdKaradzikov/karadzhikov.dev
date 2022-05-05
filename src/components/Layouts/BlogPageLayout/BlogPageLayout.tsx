import React, { FC } from 'react';
import {
    Grid,
    GridItem,
    useBreakpointValue,
    Box,
    useColorModeValue,
    Heading,
} from '@chakra-ui/react';
import { BlogList, TagList } from '../../BlogList';
import { BlogPagination } from '../../BlogPagination';
import { ArticleToRender, Category, MetaPagination } from '../../../models';

interface Props {
    articles: ArticleToRender[];
    categories: Category[];
    pagination?: MetaPagination,
    currentCategory?: string
}

const BlogPageLayout: FC<Props> = ({ articles, categories, pagination, currentCategory }) => {
    const leftBarShow = useBreakpointValue({ base: false, md: true, lg: true });
    const mobileTagsShow = useBreakpointValue({ base: true, md: false, lg: false });
    const tagsBlockBg = useColorModeValue('white', 'bg.headerBgDark');
    const showPagination = pagination && pagination.pageCount > 1;

    return (
        <Box>
            <Heading pt="32px" color="green.400">
                Статьи{currentCategory ? `: ${currentCategory}` : ''}
            </Heading>
            <Grid
                pt="32px"
                gridTemplateColumns={{
                    base: '1fr',
                    md: '1fr',
                    lg: '1fr 300px'
                }}
                gridGap="32px"
            >
                <GridItem
                    display="grid"
                    alignSelf="start"
                    gridGap="30px"
                >
                    {mobileTagsShow && (
                        <Box bg={tagsBlockBg} p="24px" boxShadow="base" borderRadius="6px">
                            <TagList items={categories} />
                        </Box>
                    )}
                    <BlogList articles={articles} />
                    {showPagination && (
                        <BlogPagination pagination={pagination as MetaPagination} />
                    )}
                </GridItem>
                {leftBarShow && (
                    <GridItem>
                        <Box bg={tagsBlockBg} p="24px" boxShadow="base" borderRadius="6px">
                            <TagList items={categories} />
                        </Box>
                    </GridItem>
                )}
            </Grid>
        </Box>
    );
}

export default BlogPageLayout;