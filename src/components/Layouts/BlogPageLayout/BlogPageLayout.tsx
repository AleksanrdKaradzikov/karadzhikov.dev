import React, { FC } from 'react';
import {
    Grid,
    GridItem,
    useBreakpointValue,
    Box,
    Heading,
} from '@chakra-ui/react';

interface Props {
    title?: string;
    rightContent: React.ReactNode;
    leftContent: React.ReactNode;
}

const BlogPageLayout: FC<Props> = ({ title, rightContent, leftContent }) => {
    const leftBarShow = useBreakpointValue({ base: false, md: true, lg: true });

    return (
        <Box pt="32px">
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