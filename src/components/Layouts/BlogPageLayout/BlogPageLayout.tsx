import React, { FC } from 'react';
import { useRouter } from 'next/router';
import {
    Grid,
    GridItem,
    useBreakpointValue,
    Box,
    Heading,
} from '@chakra-ui/react';
import { BackButton } from '../../BackButton';

interface Props {
    title?: string;
    rightContent: React.ReactNode;
    leftContent: React.ReactNode;
    showBackBtn?: boolean;
}

const BlogPageLayout: FC<Props> = ({ title, rightContent, leftContent, showBackBtn = false }) => {
    const leftBarShow = useBreakpointValue({ base: false, md: true, lg: true });
    const router = useRouter();

    return (
        <Box py="32px">
            {showBackBtn && (
                <Box mb="32px">
                    <BackButton title="Все статьи" onClick={() => router.push('/blog')} />
                </Box>
            )}
            {title && (
                <Heading color="green.400" mb="32px">
                    {title}
                </Heading>
            )}
            <Grid
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
                    {rightContent}
                </GridItem>
                {leftBarShow && (
                    <GridItem>
                        {leftContent}
                    </GridItem>
                )}
            </Grid>
        </Box>
    );
}

export default BlogPageLayout;