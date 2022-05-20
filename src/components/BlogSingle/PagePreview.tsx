import React, { FC } from 'react';
import Image from 'next/image';
import moment from 'moment';
import { Box, useColorModeValue, Heading, Text } from '@chakra-ui/react';

moment.locale('ru');

interface Props {
    title: string;
    bgUrl: string;
    date: string;
    author?: string;
    children?: React.ReactNode;
};

export const PagePreview: FC<Props> = ({ bgUrl, title, date, author = '', children }) => {
    const bg = useColorModeValue('white', 'bg.headerBgDark');

    return (
        <Box
            bg={bg}
            boxShadow="base"
            p="24px"
            borderRadius="6px"
        >
            <Box
                borderRadius="6px"
                position="relative"
                overflow="hidden"
                minH={[300, 300, 400]}
                d="flex"
                alignItems="center"
                justifyContent="center"
            >
                <Image
                    src={bgUrl}
                    layout="fill"
                    objectFit="cover"
                />
                <Box color="white" position="relative" zIndex="10" textAlign="center">
                    <Heading color="inherit" mb="20px" fontSize={{ base: "2xl", md: "4xl", lg: "6xl" }}>
                        {title}
                    </Heading>
                    <Text fontSize={{ base: 'md', md: 'lg', lg: 'lg' }}>
                        {author && (
                            <>
                                Автор - {' '}
                                <Text as="span" fontWeight="bold">{author}</Text>
                                {' '}
                            </>
                        )}
                        {moment(date).format('DD MMMM YYYY г.')}
                    </Text>
                </Box>
            </Box>
            {children}
        </Box>
    );
};

export default PagePreview;